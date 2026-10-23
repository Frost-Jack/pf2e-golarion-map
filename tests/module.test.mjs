import assert from "node:assert/strict";
import test, {beforeEach} from "node:test";

const onceHooks = new Map();
globalThis.Hooks = {once: (hook, callback) => onceHooks.set(hook, callback), on() {}};
globalThis.foundry = {
  applications: {api: {ApplicationV2: class {
    async _preClose() {}
  }}}
};

let flags;
let settings;
let flagWrites;
let settingWrites;
let registrations;
let ownSettings;
beforeEach(() => {
  flags = new Map();
  settings = new Map([
    ["useCalendaria", true], ["year", 4719],
    ["rememberCamera", true], ["projection", "mercator"]
  ]);
  flagWrites = [];
  settingWrites = [];
  registrations = new Map();
  ownSettings = new Map();
  globalThis.CALENDARIA = undefined;
  globalThis.ui = {notifications: {info() {}, error() {}}};
  globalThis.game = {
    userId: "player-1",
    i18n: {localize: key => key},
    modules: new Map([["calendaria", {active: false}], ["pf2e-golarion-map", {}]]),
    keybindings: {register() {}},
    settings: {
      register: (_id, key, config) => registrations.set(key, config),
      storage: new Map([["world", {
        getSetting: (key, userId) => {
          assert.equal(userId, game.userId);
          return ownSettings.get(key);
        }
      }]]),
      get: (_id, key) => settings.get(key),
      set: async (_id, key, value) => {
        settingWrites.push({key, value});
        settings.set(key, value);
        ownSettings.set(`pf2e-golarion-map.${key}`, {value});
      }
    },
    user: {
      id: "player-1",
      isGM: false,
      getFlag: (_id, key) => flags.get(key),
      setFlag: async (_id, key, value) => {
        flagWrites.push({key, value});
        flags.set(key, value);
      }
    }
  };
});

const {GolarionMap, currentYear, validCamera, migrateRememberCamera} = await import("../scripts/module.js");
const camera = {longitude: 20, latitude: 30, zoom: 7, bearing: 25, pitch: 35};

test("Calendaria resolves the Golarion year and otherwise keeps the configured year", () => {
  const queries = [];
  game.modules.get("calendaria").active = true;
  globalThis.CALENDARIA = {api: {
    getCurrentDateOn: id => { queries.push(id); return {year: 4722}; }
  }};
  assert.deepEqual(currentYear(), {year: 4722, calendar: true});
  assert.deepEqual(queries, ["golarion"]);
  settings.set("useCalendaria", false);
  assert.deepEqual(currentYear(), {year: 4719, calendar: false});
  assert.equal(queries.length, 1);
  settings.set("useCalendaria", true);
  CALENDARIA.api.getCurrentDateOn = () => null;
  assert.deepEqual(currentYear(), {year: 4719, calendar: false});
  globalThis.CALENDARIA = undefined;
  assert.deepEqual(currentYear(), {year: 4719, calendar: false});
});

test("player calls cannot arm picking or overwrite the shared home", async () => {
  const app = new GolarionMap();
  app._engine = {
    getCamera: () => { throw new Error("GM-only action reached map"); },
    setPicking: () => { throw new Error("GM-only action reached map"); }
  };
  app.setPicking(true);
  await app.saveHome({longitude: 1, latitude: 2});
  assert.equal(app._picking, false);
  assert.deepEqual(settingWrites, []);
});

test("GM home picks retain the current zoom and orientation", async () => {
  game.user.isGM = true;
  const app = new GolarionMap();
  const armed = [];
  app._engine = {getCamera: () => camera, setPicking: value => armed.push(value)};
  app.element = {querySelector: () => ({setAttribute() {}, hidden: true})};
  await app.saveHome({longitude: 12, latitude: 34});
  assert.deepEqual(settingWrites, [{
    key: "home", value: {...camera, longitude: 12, latitude: 34}
  }]);
  assert.deepEqual(armed, [false]);
});

test("camera preference is per user and disables writes across application instances", async () => {
  settings.set("rememberCamera", false);
  const app = new GolarionMap();
  const reopened = new GolarionMap();
  app._engine = {getCamera: () => camera};
  assert.equal(app.rememberCamera, false);
  assert.equal(reopened.rememberCamera, false);
  await app.saveCamera();
  assert.deepEqual(flagWrites, []);
  settings.set("rememberCamera", true);
  assert.equal(reopened.rememberCamera, true);
  await app.saveCamera();
  assert.deepEqual(flagWrites, [{key: "camera", value: camera}]);
  assert.deepEqual(settingWrites, []);
});

test("remember preference is a player-visible user setting and projection stays out of settings UI", () => {
  onceHooks.get("init")();
  assert.equal(registrations.get("rememberCamera").scope, "user");
  assert.equal(registrations.get("rememberCamera").config, true);
  assert.equal(registrations.get("rememberCamera").default, true);
  assert.equal(registrations.get("projection").scope, "user");
  assert.equal(registrations.get("projection").config, false);
  assert.equal(registrations.get("projection").default, "mercator");
});

test("migration preserves the old per-user preference once and never overwrites a saved setting", async () => {
  flags.set("rememberCamera", false);
  await migrateRememberCamera();
  assert.deepEqual(settingWrites, [{key: "rememberCamera", value: false}]);
  assert.deepEqual(flagWrites, []);
  settings.set("rememberCamera", true);
  ownSettings.set("pf2e-golarion-map.rememberCamera", {value: true});
  await migrateRememberCamera();
  assert.equal(settings.get("rememberCamera"), true);
  assert.equal(settingWrites.length, 1);
});

test("fresh users keep the default without an unnecessary migration write", async () => {
  await migrateRememberCamera();
  assert.deepEqual(settingWrites, []);
  assert.equal(new GolarionMap().rememberCamera, true);
});

test("players toggle their own projection without changing home or camera", async () => {
  const app = new GolarionMap();
  const projections = [];
  const pressed = [];
  const home = {...camera};
  settings.set("home", home);
  app.rendered = true;
  app.element = {querySelector: () => ({
    setAttribute: (name, value) => pressed.push([name, value])
  })};
  app._engine = {setProjection: value => projections.push(value)};
  await app.toggleProjection();
  app.updateProjection();
  await app.toggleProjection();
  app.updateProjection();
  assert.deepEqual(settingWrites, [
    {key: "projection", value: "globe"}, {key: "projection", value: "mercator"}
  ]);
  assert.deepEqual(projections, ["globe", "mercator"]);
  assert.deepEqual(pressed, [["aria-pressed", "true"], ["aria-pressed", "false"]]);
  assert.equal(settings.get("home"), home);
  assert.deepEqual(flagWrites, []);
});

test("saving an unchanged camera does not write the user document again", async () => {
  const app = new GolarionMap();
  app._engine = {getCamera: () => ({...camera})};
  await app.saveCamera();
  await app.saveCamera();
  assert.equal(flagWrites.length, 1);
});

test("overlapping camera writes preserve movement order", async () => {
  const app = new GolarionMap();
  const pending = [];
  const writes = [];
  let position = camera;
  app._engine = {getCamera: () => position};
  game.user.setFlag = (_id, _key, value) => {
    writes.push(value);
    return new Promise(resolve => pending.push(resolve));
  };
  const first = app.saveCamera();
  position = {...camera, longitude: 40, zoom: 9};
  const second = app.saveCamera();
  await Promise.resolve();
  assert.deepEqual(writes, [camera]);
  pending.shift()();
  await first;
  await Promise.resolve();
  assert.deepEqual(writes, [camera, position]);
  pending.shift()();
  await second;
});

test("disabling remember cancels a camera write still waiting in the queue", async () => {
  const app = new GolarionMap();
  let position = camera;
  let finishFirst;
  const writes = [];
  app._engine = {getCamera: () => position};
  game.user.setFlag = (_id, _key, value) => {
    writes.push(value);
    return new Promise(resolve => { finishFirst = resolve; });
  };
  const first = app.saveCamera();
  await Promise.resolve();
  position = {...camera, zoom: 10};
  const queued = app.saveCamera();
  settings.set("rememberCamera", false);
  finishFirst();
  await first;
  await queued;
  assert.deepEqual(writes, [camera]);
});

test("closing finishes the last camera write before destroying the map", async () => {
  const app = new GolarionMap();
  const order = [];
  let finishWrite;
  game.user.setFlag = (_id, key, value) => {
    assert.equal(key, "camera");
    assert.deepEqual(value, camera);
    order.push("save");
    return new Promise(resolve => { finishWrite = resolve; });
  };
  app._engine = {getCamera: () => camera, destroy: () => order.push("destroy")};
  app._listeners = {abort: () => order.push("abort")};
  const closing = app._preClose({});
  await Promise.resolve();
  assert.deepEqual(order, ["save"]);
  finishWrite();
  await closing;
  assert.deepEqual(order, ["save", "abort", "destroy"]);
  assert.equal(app._engine, null);
  assert.equal(app._loading, false);
  assert.equal(app._generation, 1);
});

test("malformed stored camera values cannot reach the map constructor", () => {
  assert.equal(Boolean(validCamera(camera)), true);
  assert.equal(Boolean(validCamera({...camera, longitude: Infinity})), false);
  assert.equal(Boolean(validCamera({...camera, zoom: -1})), false);
  assert.equal(Boolean(validCamera({...camera, bearing: NaN})), false);
  assert.equal(Boolean(validCamera({...camera, pitch: "35"})), false);
  assert.equal(Boolean(validCamera({...camera, latitude: 90})), true);
  assert.equal(Boolean(validCamera({...camera, latitude: -90})), true);
  assert.equal(Boolean(validCamera({...camera, latitude: 91})), false);
});
