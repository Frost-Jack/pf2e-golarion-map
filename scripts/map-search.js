const SEARCH_URL = new URL("../assets/map/search.json", import.meta.url);
const EMPTY_NAMES = Object.freeze({});
const indexes = new WeakMap();
let searchData;
let nextId = 0;

const normalize = value => String(value).normalize("NFKD").replace(/\p{M}/gu, "")
  .toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

function indexLocations(data, names) {
  if (!indexes.has(data)) indexes.set(data, new WeakMap());
  const dictionaries = indexes.get(data);
  if (!dictionaries.has(names)) {
    dictionaries.set(names, data.flatMap(({category, entries}) => entries.map(entry => ({
      ...entry, category, normalized: [...new Set([entry.label, names[entry.label]].filter(Boolean).map(normalize))]
    }))));
  }
  return dictionaries.get(names);
}

function editDistance(a, b, limit) {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let previous = Array.from({length: b.length + 1}, (_, index) => index);
  let beforePrevious;
  for (let row = 1; row <= a.length; row++) {
    const current = [row];
    for (let column = 1; column <= b.length; column++) {
      current[column] = Math.min(current[column - 1] + 1, previous[column] + 1,
        previous[column - 1] + (a[row - 1] === b[column - 1] ? 0 : 1));
      if (row > 1 && column > 1 && a[row - 1] === b[column - 2] && a[row - 2] === b[column - 1]) {
        current[column] = Math.min(current[column], beforePrevious[column - 2] + 1);
      }
    }
    if (Math.min(...current) > limit) return limit + 1;
    beforePrevious = previous;
    previous = current;
  }
  return previous[b.length];
}

/** Search the snapshot using the historical geometry for the selected year. */
export function searchLocations(data, query, year = 4726, category = "", {names = EMPTY_NAMES, language = "en"} = {}) {
  const needle = normalize(query).slice(0, 100);
  if (!needle) return [];
  const matches = [];
  const candidates = [];
  for (const entry of indexLocations(data, names)) {
    if (category && entry.category !== category) continue;
    const timed = entry.timed.find(({timeYear = {}}) =>
      (timeYear.timeStart == null || year >= timeYear.timeStart)
      && (timeYear.timeEnd == null || year < timeYear.timeEnd));
    if (!timed) continue;
    const result = {label: entry.label, displayLabel: language === "ru" ? names[entry.label] ?? entry.label : entry.label,
      category: entry.category, bbox: timed.bbox, areaM2: timed.areaM2};
    const score = Math.min(...entry.normalized.map(name => name === needle ? 0 : name.startsWith(needle) ? 1
      : name.split(" ").some(word => word.startsWith(needle)) ? 2 : name.includes(needle) ? 3 : Infinity));
    if (Number.isFinite(score)) matches.push({...result, score});
    else candidates.push({result, names: entry.normalized});
  }
  if (matches.length < 10 && needle.length >= 4) {
    const limit = needle.length < 7 ? 1 : 2;
    for (const {result, names: aliases} of candidates) {
      const fullDistance = Math.min(...aliases.map(name => editDistance(needle, name, limit)));
      const wordDistance = Math.min(...aliases.flatMap(name => name.split(" ")).map(word => editDistance(needle, word, limit)));
      const distance = Math.min(fullDistance, wordDistance);
      if (distance <= limit) matches.push({...result, score: 4 + distance + (fullDistance > distance ? 0.5 : 0)});
    }
  }
  return matches.sort((a, b) => a.score - b.score
    || Number(b.category === "locations") - Number(a.category === "locations")
    || a.label.localeCompare(b.label)).slice(0, 10).map(({score, ...result}) => result);
}

async function loadSearchData() {
  if (!searchData) {
    searchData = fetch(SEARCH_URL).then(response => {
      if (!response.ok) throw new Error(`search.json: HTTP ${response.status}`);
      return response.json();
    }).catch(error => {
      searchData = undefined;
      throw error;
    });
  }
  return searchData;
}

export async function mountSearch(element, map, {
  year = 4726, labels = {}, onError, onSelect, names = EMPTY_NAMES, language = "en"
} = {}) {
  const data = await loadSearchData();
  indexLocations(data, names);
  const listeners = new AbortController();
  const {signal} = listeners;
  const listId = `golarion-search-results-${++nextId}`;
  const fields = document.createElement("div");
  fields.className = "golarion-search-fields";
  const input = document.createElement("input");
  input.className = "golarion-search-input";
  input.type = "search";
  input.placeholder = labels.placeholder ?? "Find a place";
  input.setAttribute("aria-label", input.placeholder);
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", listId);
  input.autocomplete = "off";
  const category = document.createElement("select");
  category.className = "golarion-search-category";
  category.setAttribute("aria-label", labels.category ?? "Category");
  for (const key of ["", ...data.map(group => group.category)]) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key ? labels.categories?.[key] ?? key[0].toUpperCase() + key.slice(1) : labels.all ?? "All places";
    category.append(option);
  }
  const list = document.createElement("div");
  list.className = "golarion-search-results";
  list.id = listId;
  list.setAttribute("role", "listbox");
  list.setAttribute("aria-label", input.placeholder);
  list.hidden = true;
  fields.append(input, category);
  element.classList.add("golarion-search");
  element.replaceChildren(fields, list);
  let results = [];
  let selected = 0;
  let inputTimer;

  function close() {
    clearTimeout(inputTimer);
    inputTimer = undefined;
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  }

  function highlight(index) {
    selected = index;
    [...list.children].forEach((button, position) => {
      button.setAttribute("aria-selected", String(position === selected));
    });
    const active = list.children[selected];
    if (active) {
      input.setAttribute("aria-activedescendant", active.id);
      active.scrollIntoView({block: "nearest"});
    } else input.removeAttribute("aria-activedescendant");
  }

  function choose(index) {
    const result = results[index];
    if (!result) return;
    try {
      if (result.bbox.length === 2) map.flyTo({center: result.bbox, zoom: 10, duration: 600});
      else map.fitBounds(result.bbox, {padding: 60, maxZoom: 10, duration: 600});
      input.value = result.displayLabel;
      input.focus({preventScroll: true});
      close();
      const [west, south, east, north] = result.bbox;
      onSelect?.(result, result.bbox.length === 2 ? result.bbox : [(west + east) / 2, (south + north) / 2]);
    } catch (error) { onError?.(error); }
  }

  function update() {
    clearTimeout(inputTimer);
    inputTimer = undefined;
    if (!input.value.trim()) { close(); return; }
    results = searchLocations(data, input.value, year, category.value, {names, language});
    list.replaceChildren();
    results.forEach((result, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "golarion-search-result";
      button.id = `${listId}-${index}`;
      button.dataset.index = index;
      button.setAttribute("role", "option");
      button.tabIndex = -1;
      const name = document.createElement("span");
      name.textContent = result.displayLabel;
      const kind = document.createElement("small");
      kind.textContent = `${result.displayLabel !== result.label ? `${result.label} · ` : ""}${labels.categories?.[result.category] ?? result.category}`;
      button.append(name, kind);
      list.append(button);
    });
    if (!results.length) {
      const empty = document.createElement("p");
      empty.className = "golarion-search-empty";
      empty.textContent = labels.noResults ?? "No places found";
      list.append(empty);
    }
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    if (results.length) highlight(0);
    else input.removeAttribute("aria-activedescendant");
  }

  input.addEventListener("input", () => {
    clearTimeout(inputTimer);
    inputTimer = setTimeout(update, 100);
  }, {signal});
  input.addEventListener("focus", update, {signal});
  category.addEventListener("change", update, {signal});
  list.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) event.preventDefault();
  }, {signal});
  list.addEventListener("click", event => {
    const button = event.target.closest("button[data-index]");
    if (button) choose(Number(button.dataset.index));
  }, {signal});
  input.addEventListener("keydown", event => {
    if (inputTimer && ["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) update();
    if (event.key === "Escape" && !list.hidden) {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      if (list.hidden) update();
      else if (results.length) highlight((selected + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length);
    } else if (event.key === "Enter" && !list.hidden && results.length) {
      event.preventDefault();
      event.stopPropagation();
      choose(selected);
    }
  }, {signal});
  element.addEventListener("focusout", event => {
    if (!element.contains(event.relatedTarget)) close();
  }, {signal});

  return {
    setYear(value) {
      if (year === value) return;
      year = value;
      if (!list.hidden) update();
    },
    setLanguage(value) {
      if (language === value) return;
      language = value;
      if (!list.hidden) update();
    },
    destroy() {
      clearTimeout(inputTimer);
      listeners.abort();
      element.replaceChildren();
    }
  };
}
