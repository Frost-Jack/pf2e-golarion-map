const ASSETS = new URL("../assets/map/", import.meta.url);
let index;
const slices = new Map();

async function read(path) {
  const response = await fetch(new URL(path, ASSETS));
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.json();
}

export async function loadPlaceDetails(name) {
  index ??= read("descriptions-index.json").catch(error => { index = undefined; throw error; });
  const id = (await index)[name];
  if (id === undefined) return "";
  const slice = id % 10;
  if (!slices.has(slice)) {
    slices.set(slice, read(`extra/${slice}.json`).catch(error => { slices.delete(slice); throw error; }));
  }
  return (await slices.get(slice))[id] ?? "";
}

function wikiURL(value) {
  if (typeof value !== "string" || !value.trim()) return undefined;
  try {
    const url = new URL(value, "https://pathfinderwiki.com");
    return url.protocol === "https:" && url.hostname === "pathfinderwiki.com" ? url.href : undefined;
  } catch { return undefined; }
}

/** Only text, basic formatting and Wiki links from the snapshot enter the popup. */
export function placeDetailsContent(html, relatedLabel = "Places") {
  const template = document.createElement("template");
  template.innerHTML = html;
  const source = template.content;
  const articleURL = wikiURL(source.querySelector("h3 a")?.getAttribute("href"));
  source.querySelector("h3")?.remove();
  const content = document.createElement("div");
  content.className = "golarion-place-description";
  const allowed = new Set(["P", "B", "STRONG", "I", "EM", "UL", "OL", "LI", "BR", "BLOCKQUOTE", "HR"]);
  function append(node, parent) {
    if (node.nodeType === 3) {
      parent.append(document.createTextNode(node.textContent.replace(/^\s*\d+ locations:\s*$/, `${relatedLabel}:`)));
      return;
    }
    if (node.nodeType !== 1 || ["SCRIPT", "STYLE", "IFRAME", "IMG", "TEMPLATE", "OBJECT"].includes(node.tagName)) return;
    const href = node.tagName === "A" && wikiURL(node.getAttribute("href"));
    const element = href ? document.createElement("a") : allowed.has(node.tagName) ? document.createElement(node.tagName.toLowerCase()) : parent;
    if (href) {
      element.href = href;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    }
    if (element !== parent) parent.append(element);
    for (const child of node.childNodes) append(child, element);
  }
  for (const node of source.childNodes) append(node, content);
  return {content, articleURL};
}
