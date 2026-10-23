import {loadPlaceDetails, placeDetailsContent} from "./map-details.js";

const ASSETS = new URL("../assets/map/", import.meta.url);
let dependencies;
let nameTranslations;

async function loadDependencies() {
  if (!dependencies) {
    dependencies = Promise.all([
      import("../vendor/maplibre-gl.mjs"),
      import("../vendor/pmtiles.mjs")
    ]).then(([library, pmtiles]) => {
      const maplibre = library.Map ? library : library.default;
      maplibre.setWorkerUrl(new URL("../vendor/maplibre-gl-worker.mjs", import.meta.url).href);
      const protocol = new pmtiles.Protocol();
      maplibre.addProtocol("pmtiles", protocol.tile);
      return maplibre;
    }).catch(error => {
      dependencies = undefined;
      throw error;
    });
  }
  return dependencies;
}

async function readAsset(path) {
  const response = await fetch(new URL(path, ASSETS));
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.json();
}

export function timeIndexForYear(year, slices) {
  const value = Number(year);
  const slice = slices.find(({start, end}) =>
    (start === null || value >= start) && (end === null || value < end));
  return slice?.id ?? 0;
}

export function applyYear(map, year, slices) {
  map.setGlobalStateProperty("timeIndex", timeIndexForYear(year, slices));
}

export function translatedLabelExpression(field, names) {
  return ["case", ["==", ["global-state", "mapLanguage"], "ru"],
    ["coalesce", ["get", ["to-string", field], ["literal", names]], field], field];
}

function loadNames() {
  nameTranslations ??= readAsset("names-ru.json").catch(error => {
    nameTranslations = undefined;
    throw error;
  });
  return nameTranslations;
}

const wrapLongitude = longitude => ((longitude + 180) % 360 + 360) % 360 - 180;

function resolveStyle(style) {
  for (const source of Object.values(style.sources)) {
    if (source.url?.startsWith("pmtiles://")) {
      source.url = `pmtiles://${new URL(source.url.slice(10), ASSETS).href}`;
    }
  }
  if (style.glyphs) {
    style.glyphs = new URL(style.glyphs, ASSETS).href.replaceAll("%7B", "{").replaceAll("%7D", "}");
  }
  if (typeof style.sprite === "string") style.sprite = new URL(style.sprite, ASSETS).href;
  return style;
}

function cameraOptions(camera = {}) {
  return {
    center: camera.center ?? [camera.longitude ?? -7, camera.latitude ?? 35],
    zoom: camera.zoom ?? 4.5,
    bearing: camera.bearing ?? 0,
    pitch: camera.pitch ?? 0
  };
}

function hasPosition(point) {
  return point && Number.isFinite(point.longitude) && Number.isFinite(point.latitude)
    && point.latitude >= -90 && point.latitude <= 90;
}

/** Create the local Golarion map without requiring any Foundry globals. */
export async function createMap(container, {
  camera, year = 4726, projection = "mercator", language = "en", home, labels = {}, onMove, onReady, onError, onPick
} = {}) {
  const [maplibre, style, slices, names] = await Promise.all([
    loadDependencies(), readAsset("style.json"), readAsset("time-slices.json"), loadNames()
  ]);
  let currentLanguage = language === "ru" ? "ru" : "en";
  style.state.mapLanguage = {default: currentLanguage};
  for (const layer of style.layers) {
    if (layer.type === "symbol" && layer.layout?.["text-field"]) {
      layer.layout["text-field"] = translatedLabelExpression(layer.layout["text-field"], names);
    }
  }
  style.state.timeIndex.default = timeIndexForYear(year, slices);
  let currentProjection = projection === "globe" ? "globe" : "mercator";
  let appliedProjection = currentProjection;
  style.projection = {type: currentProjection};
  const map = new maplibre.Map({
    container,
    minZoom: 0,
    style: resolveStyle(style),
    ...cameraOptions(camera),
    attributionControl: false
  });
  map.addControl(new maplibre.NavigationControl(), "top-right");

  let currentYear = year;
  let currentTimeIndex = timeIndexForYear(year, slices);
  let styleReady = false;
  let homeMarker;
  let popup;
  let picking = false;
  let destroyed = false;
  const controller = {
    map,
    slices,
    names,
    async showPlace(name, coordinates) {
      popup?.remove();
      const content = document.createElement("article");
      content.className = "pf2e-golarion-map-popup";
      const title = document.createElement("h2");
      title.textContent = currentLanguage === "ru" ? names[name] ?? name : name;
      content.append(title);
      if (title.textContent !== name) {
        const original = document.createElement("small");
        original.className = "golarion-place-original";
        original.textContent = name;
        content.append(original);
      }
      const body = document.createElement("div");
      body.className = "golarion-place-description";
      body.setAttribute("aria-live", "polite");
      body.textContent = labels.loadingDetails ?? "Loading description…";
      const link = document.createElement("a");
      link.className = "golarion-place-wiki";
      link.textContent = labels.details ?? "Open on PathfinderWiki";
      link.href = `https://pathfinderwiki.com/wiki/${encodeURIComponent(name.replaceAll(" ", "_"))}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      content.append(body, link);
      content.addEventListener("wheel", event => event.stopPropagation(), {passive: true});
      const selected = popup = new maplibre.Popup({maxWidth: "420px", focusAfterOpen: false})
        .setLngLat(coordinates).setDOMContent(content).addTo(map);
      try {
        const html = await loadPlaceDetails(name);
        if (destroyed || popup !== selected || !selected.isOpen()) return;
        const details = placeDetailsContent(html, labels.relatedPlaces ?? "Places");
        if (details.content.textContent.trim()) {
          body.lang = "en";
          body.replaceChildren(...details.content.childNodes);
        }
        else body.replaceChildren();
        if (details.articleURL) link.href = details.articleURL;
      } catch (error) {
        if (destroyed || popup !== selected || !selected.isOpen()) return;
        body.textContent = labels.detailsFailed ?? "Could not load the description.";
        console.warn("pf2e-golarion-map | Place description", error);
      }
    },
    setLanguage(value) {
      const next = value === "ru" ? "ru" : "en";
      if (next === currentLanguage) return;
      currentLanguage = next;
      popup?.remove();
      if (styleReady) map.setGlobalStateProperty("mapLanguage", next);
    },
    setYear(value) {
      currentYear = value;
      const nextIndex = timeIndexForYear(value, slices);
      if (nextIndex === currentTimeIndex) return;
      currentTimeIndex = nextIndex;
      if (styleReady) applyYear(map, currentYear, slices);
    },
    setProjection(value) {
      const next = value === "globe" ? "globe" : "mercator";
      if (next === currentProjection) return;
      currentProjection = next;
      if (styleReady) {
        map.setProjection({type: next});
        appliedProjection = next;
      }
    },
    setHome(point) {
      homeMarker?.remove();
      homeMarker = undefined;
      if (!hasPosition(point)) return;
      const element = document.createElement("div");
      element.className = "pf2e-golarion-map-home-marker";
      element.title = labels.home ?? "Home";
      element.setAttribute("role", "img");
      element.setAttribute("aria-label", element.title);
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-house";
      icon.setAttribute("aria-hidden", "true");
      element.append(icon);
      homeMarker = new maplibre.Marker({element, anchor: "bottom"})
        .setLngLat([point.longitude, point.latitude]).addTo(map);
    },
    goHome(point) {
      if (hasPosition(point)) map.flyTo({...cameraOptions(point), essential: true});
    },
    getCamera() {
      const center = map.getCenter();
      return {
        longitude: wrapLongitude(center.lng),
        latitude: center.lat,
        zoom: map.getZoom(),
        bearing: map.getBearing(),
        pitch: map.getPitch()
      };
    },
    setPicking(value) {
      picking = Boolean(value);
      container.classList.toggle("pf2e-golarion-map-picking", picking);
      map.getCanvas().style.cursor = picking ? "crosshair" : "";
      if (picking) popup?.remove();
    },
    destroy() {
      if (destroyed) return;
      destroyed = true;
      homeMarker?.remove();
      popup?.remove();
      container.classList.remove("pf2e-golarion-map-picking");
      map.remove();
    }
  };

  map.on("moveend", () => {
    if (!destroyed) onMove?.(controller.getCamera());
  });
  map.on("error", event => {
    if (!destroyed) onError?.(event.error);
  });
  map.on("click", event => {
    if (picking) {
      controller.setPicking(false);
      onPick?.({longitude: wrapLongitude(event.lngLat.lng), latitude: event.lngLat.lat});
      return;
    }
    const feature = map.queryRenderedFeatures(event.point)
      .find(item => item.properties?.label || item.properties?.name);
    if (!feature) return;
    const name = String(feature.properties.label ?? feature.properties.name);
    void controller.showPlace(name, event.lngLat);
  });
  map.on("style.load", () => {
    if (destroyed) return;
    styleReady = true;
    if (style.state.mapLanguage.default !== currentLanguage) map.setGlobalStateProperty("mapLanguage", currentLanguage);
    if (appliedProjection !== currentProjection) {
      map.setProjection({type: currentProjection});
      appliedProjection = currentProjection;
    }
    if (style.state.timeIndex.default !== currentTimeIndex) applyYear(map, currentYear, slices);
  });
  map.once("load", () => {
    if (destroyed) return;
    onReady?.(controller);
  });
  controller.setHome(home);
  return controller;
}
