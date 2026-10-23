const ID = "pf2e-golarion-map";
const t = key => game.i18n.localize(`GOLARION.${key}`);

export function validCamera(camera) {
  return camera && [camera.longitude, camera.latitude, camera.zoom].every(Number.isFinite)
    && Math.abs(camera.longitude) <= 180 && Math.abs(camera.latitude) <= 90
    && camera.zoom >= 0 && camera.zoom <= 22
    && (camera.bearing === undefined || Number.isFinite(camera.bearing))
    && (camera.pitch === undefined || (Number.isFinite(camera.pitch) && camera.pitch >= 0 && camera.pitch <= 85));
}

export function currentYear() {
  if (game.settings.get(ID, "useCalendaria") && game.modules.get("calendaria")?.active) {
    try {
      const year = globalThis.CALENDARIA?.api?.getCurrentDateOn("golarion")?.year;
      if (Number.isInteger(year)) return { year, calendar: true };
    } catch (error) { console.warn(`${ID} | Calendaria`, error); }
  }
  const year = game.settings.get(ID, "year");
  return { year: Number.isInteger(year) ? year : 4726, calendar: false };
}

export class GolarionMap extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = {
    id: ID,
    classes: [ID],
    window: { title: "GOLARION.Title", icon: "fa-solid fa-map-location-dot", resizable: true },
    position: { width: 1100, height: 760 },
    actions: {
      home() { this.goHome(); },
      projection() { return this.toggleProjection(); },
      language() { return this.toggleLanguage(); },
      setHome() { this.setPicking(!this._picking); },
      retry() { this.initializeMap(); }
    }
  };

  _engine = null;
  _search = null;
  _picking = false;
  _saveTimer = null;
  _saveQueue = Promise.resolve();
  _generation = 0;

  get rememberCamera() { return game.settings.get(ID, "rememberCamera") !== false; }

  async _renderHTML() {
    return foundry.applications.handlebars.renderTemplate(`modules/${ID}/templates/map.hbs`, {
      isGM: game.user.isGM
    });
  }

  _replaceHTML(result, content) {
    // Preserve the WebGL canvas when an existing window renders again.
    if (!content.querySelector(".golarion-body")) content.innerHTML = result;
  }

  async _onRender(context, options) {
    await super._onRender(context, options);
    if (this._engine || this._loading) return;
    this._listeners?.abort();
    this._listeners = new AbortController();
    const { signal } = this._listeners;
    this.element.querySelector('[name="year"]').addEventListener("change", async event => {
      if (!game.user.isGM || currentYear().calendar) return;
      const year = Number(event.currentTarget.value);
      if (!Number.isInteger(year) || year < -100000 || year > 100000) {
        this.updateYear();
        return;
      }
      try { await game.settings.set(ID, "year", year); }
      catch (error) { this.reportError(error, "SaveFailed"); }
    }, { signal });
    this.element.addEventListener("keydown", event => {
      if (event.key === "Escape" && this._picking) {
        event.stopPropagation();
        this.setPicking(false);
      }
    }, { signal, capture: true });
    this.updateYear();
    await this.initializeMap();
  }

  async initializeMap() {
    if (this._loading) return;
    const generation = ++this._generation;
    this._loading = true;
    this.setPicking(false);
    this._search?.destroy();
    this._search = null;
    this._engine?.destroy();
    this._engine = null;
    const status = this.element.querySelector(".golarion-status");
    status.hidden = false;
    status.querySelector("p").textContent = t("Loading");
    status.querySelector("button").hidden = true;
    try {
      const { createMap } = await import("./map-engine.js");
      if (generation !== this._generation) return;
      const home = game.settings.get(ID, "home");
      const saved = this.rememberCamera && game.user.getFlag(ID, "camera");
      const camera = validCamera(saved) ? saved : validCamera(home) ? home : undefined;
      const engine = await createMap(this.element.querySelector(".golarion-map"), {
        camera, year: currentYear().year, projection: game.settings.get(ID, "projection"), language: game.settings.get(ID, "mapLanguage"),
        labels: {
          home: t("Home"), pickPoint: t("PickPoint"), details: t("Wiki"),
          loadingDetails: t("LoadingDetails"),
          detailsFailed: t("DetailsFailed"), relatedPlaces: t("RelatedPlaces")
        },
        onMove: () => {
          clearTimeout(this._saveTimer);
          if (this.rememberCamera) this._saveTimer = setTimeout(() => this.saveCamera(), 600);
        },
        onReady: () => { if (generation === this._generation) status.hidden = true; },
        onError: error => {
          if (generation !== this._generation) return;
          console.error(`${ID} | Map`, error);
          status.hidden = false;
          status.querySelector("p").textContent = t("LoadFailed");
          status.querySelector("button").hidden = false;
        },
        onPick: point => this.saveHome(point)
      });
      if (generation !== this._generation) { engine.destroy(); return; }
      this._engine = engine;
      this.updateHome();
      this.updateYear();
      this.updateProjection();
      this.updateLanguage();
      try {
        const { mountSearch } = await import("./map-search.js");
        if (generation !== this._generation) return;
        const categories = ["buildings", "continents", "deserts", "districts", "forests", "generic", "hills", "ice", "land", "locations", "mountains", "nations", "provinces", "regions", "rivers", "roads", "specials", "subregions", "swamps", "waters"];
        const search = await mountSearch(this.element.querySelector(".golarion-search"), engine.map, {
          year: currentYear().year, names: engine.names, language: game.settings.get(ID, "mapLanguage"),
          onError: error => this.reportError(error, "SearchFailed"),
          onSelect: (result, coordinates) => { void engine.showPlace(result.label, coordinates); },
          labels: {
            placeholder: t("Search"), all: t("SearchAll"), noResults: t("SearchEmpty"), category: t("SearchCategory"),
            categories: Object.fromEntries(categories.map(key => [key, t(`Categories.${key}`)]))
          }
        });
        if (generation !== this._generation) { search.destroy(); return; }
        this._search = search;
        this._search.setYear(currentYear().year);
        this.updateLanguage();
      } catch (error) {
        if (generation === this._generation) this.reportError(error, "SearchFailed");
      }
    } catch (error) {
      if (generation !== this._generation) return;
      console.error(`${ID} | Map`, error);
      status.hidden = false;
      status.querySelector("p").textContent = t("LoadFailed");
      status.querySelector("button").hidden = false;
    } finally {
      if (generation === this._generation) this._loading = false;
    }
  }

  updateYear() {
    if (!this.rendered) return;
    const { year, calendar } = currentYear();
    const input = this.element.querySelector('[name="year"]');
    input.value = year;
    input.disabled = calendar || !game.user.isGM;
    this.element.querySelector(".golarion-year-source").textContent = calendar ? "Calendaria" : t("WorldYear");
    this._engine?.setYear(year);
    this._search?.setYear(year);
  }

  updateHome() {
    if (!this.rendered) return;
    const home = game.settings.get(ID, "home");
    const valid = validCamera(home);
    this.element.querySelector('[data-action="home"]').disabled = !valid;
    this._engine?.setHome(valid ? home : null);
  }

  goHome() {
    const home = game.settings.get(ID, "home");
    if (validCamera(home)) this._engine?.goHome(home);
  }

  async toggleProjection() {
    const next = game.settings.get(ID, "projection") === "globe" ? "mercator" : "globe";
    try { await game.settings.set(ID, "projection", next); }
    catch (error) { this.reportError(error, "SaveFailed"); }
  }

  updateProjection() {
    if (!this.rendered) return;
    const projection = game.settings.get(ID, "projection") === "globe" ? "globe" : "mercator";
    this.element.querySelector('[data-action="projection"]').setAttribute("aria-pressed", String(projection === "globe"));
    this._engine?.setProjection(projection);
  }

  updateRememberCamera() {
    clearTimeout(this._saveTimer);
    if (this.rememberCamera) this.saveCamera();
  }

  updateLanguage() {
    if (!this.rendered) return;
    const language = game.settings.get(ID, "mapLanguage") === "ru" ? "ru" : "en";
    const toggle = this.element.querySelector('[data-action="language"]');
    toggle.setAttribute("aria-checked", String(language === "ru"));
    toggle.setAttribute("aria-label", `${t("MapLanguage")}: ${language === "ru" ? "Русский" : "English"}`);
    this._engine?.setLanguage(language);
    this._search?.setLanguage(language);
  }

  async toggleLanguage() {
    const next = game.settings.get(ID, "mapLanguage") === "ru" ? "en" : "ru";
    try { await game.settings.set(ID, "mapLanguage", next); }
    catch (error) { this.reportError(error, "SaveFailed"); }
  }

  setPicking(enabled) {
    if (!game.user.isGM || !this._engine) return;
    this._picking = enabled;
    this._engine.setPicking(enabled);
    this.element.querySelector('[data-action="setHome"]').setAttribute("aria-pressed", String(enabled));
    this.element.querySelector(".golarion-pick-hint").hidden = !enabled;
  }

  async saveHome(point) {
    if (!game.user.isGM || !this._engine) return;
    const home = { ...this._engine.getCamera(), ...point };
    if (!validCamera(home)) return;
    this.setPicking(false);
    try {
      await game.settings.set(ID, "home", home);
      ui.notifications.info(t("HomeSaved"));
    } catch (error) { this.reportError(error, "SaveFailed"); }
  }

  saveCamera() {
    clearTimeout(this._saveTimer);
    if (!this.rememberCamera || !this._engine) return this._saveQueue;
    const camera = this._engine.getCamera();
    if (!validCamera(camera)) return this._saveQueue;
    this._saveQueue = this._saveQueue.then(() => {
      if (!this.rememberCamera) return;
      const saved = game.user.getFlag(ID, "camera");
      if (saved && ["longitude", "latitude", "zoom", "bearing", "pitch"].every(key => (saved[key] ?? 0) === (camera[key] ?? 0))) return;
      return game.user.setFlag(ID, "camera", camera);
    })
      .catch(error => this.reportError(error, "SaveFailed"));
    return this._saveQueue;
  }

  reportError(error, key) {
    console.error(`${ID} | ${key}`, error);
    ui.notifications.error(t(key));
  }

  async _preClose(options) {
    await this.saveCamera();
    await super._preClose(options);
    ++this._generation;
    this._loading = false;
    this._listeners?.abort();
    clearTimeout(this._saveTimer);
    this._search?.destroy();
    this._search = null;
    this._engine?.destroy();
    this._engine = null;
    this._picking = false;
  }
}

let application;
export async function migrateRememberCamera() {
  const saved = game.settings.storage.get("world").getSetting(`${ID}.rememberCamera`, game.userId);
  const previous = game.user.getFlag(ID, "rememberCamera");
  if (!saved && typeof previous === "boolean") await game.settings.set(ID, "rememberCamera", previous);
}

export function openMap() {
  application ??= new GolarionMap();
  if (application.rendered) {
    application.maximize();
    application.bringToFront();
    return application;
  }
  application.render({ force: true });
  return application;
}

Hooks.once("init", () => {
  game.settings.register(ID, "rememberCamera", {
    name: "GOLARION.Remember", hint: "GOLARION.RememberHint",
    scope: "user", config: true, type: Boolean, default: true,
    onChange: () => application?.updateRememberCamera()
  });
  game.settings.register(ID, "projection", {
    scope: "user", config: false, type: String, default: "mercator",
    choices: { mercator: "GOLARION.FlatMap", globe: "GOLARION.Globe" },
    onChange: () => application?.updateProjection()
  });
  game.settings.register(ID, "mapLanguage", {
    scope: "user", config: false, type: String, default: game.i18n.lang?.startsWith("ru") ? "ru" : "en",
    choices: { en: "English", ru: "Русский" },
    onChange: () => application?.updateLanguage()
  });
  game.settings.register(ID, "home", {
    scope: "world", config: false, type: Object, default: {},
    onChange: () => application?.updateHome()
  });
  game.settings.register(ID, "year", {
    name: "GOLARION.YearSetting", hint: "GOLARION.YearHint",
    scope: "world", config: true, type: Number, default: 4726,
    onChange: () => application?.updateYear()
  });
  game.settings.register(ID, "useCalendaria", {
    name: "GOLARION.CalendariaSetting", hint: "GOLARION.CalendariaHint",
    scope: "world", config: true, type: Boolean, default: true,
    onChange: () => application?.updateYear()
  });
  game.keybindings.register(ID, "open", {
    name: "GOLARION.Title", editable: [{ key: "KeyG", modifiers: ["Alt"] }],
    onDown: () => { openMap(); return true; }
  });
  game.modules.get(ID).api = { open: openMap };
});

Hooks.once("ready", async () => {
  try { await migrateRememberCamera(); }
  catch (error) { console.error(`${ID} | Camera preference migration`, error); }
});

Hooks.on("getSceneControlButtons", controls => {
  if (!controls.tokens) return;
  controls.tokens.tools.golarionMap = {
    name: "golarionMap", title: "GOLARION.Title", icon: "fa-solid fa-map-location-dot",
    button: true, order: 90, onChange: () => openMap()
  };
});

for (const hook of ["calendaria.ready", "calendaria.dateTimeChange", "calendaria.calendarSwitched", "calendaria.calendarUpdated"]) {
  Hooks.on(hook, () => application?.updateYear());
}
