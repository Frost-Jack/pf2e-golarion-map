import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";
import {searchLocations} from "../scripts/map-search.js";

const data = JSON.parse(await readFile(new URL("../assets/map/search.json", import.meta.url), "utf8"));

test("search finds a city, prioritizes exact names, and tolerates a transposed letter", () => {
  assert.equal(searchLocations(data, "Korvosa")[0].label, "Korvosa");
  assert.equal(searchLocations(data, "korvsoa")[0].label, "Korvosa");
  assert.equal(searchLocations(data, "  KORVOSA  ")[0].label, "Korvosa");
  assert.equal(searchLocations(data, "Absalom")[0].category, "locations");
});

test("category filtering and empty input", () => {
  assert.deepEqual(searchLocations(data, "  "), []);
  const matches = searchLocations(data, "Absalom", 4726, "nations");
  assert.ok(matches.length > 0);
  assert.ok(matches.every(result => result.category === "nations"));
  assert.ok(searchLocations(data, "a").length <= 10);
});

test("historical selection uses start inclusive and end exclusive geometry", () => {
  const before = searchLocations(data, "Andoran", 4725, "nations")[0];
  const after = searchLocations(data, "Andoran", 4726, "nations")[0];
  assert.equal(before.bbox[0], -9.1104135);
  assert.equal(after.bbox[0], -15.51992014);
  const historical = [{category: "locations", entries: [{label: "Éléphant's Gate", timed: [
    {timeYear: {timeEnd: 4720}, bbox: [1, 2]},
    {timeYear: {timeStart: 4726}, bbox: [3, 4]}
  ]}]}];
  assert.equal(searchLocations(historical, "elephant", 4719)[0].label, "Éléphant's Gate");
  assert.deepEqual(searchLocations(historical, "elephant", 4720), []);
  assert.deepEqual(searchLocations(historical, "elephant", 4726)[0].bbox, [3, 4]);
});

test("English and Russian names both match independently of display language", () => {
  const names = {Korvosa: "Корвоса", Absalom: "Абсалом"};
  const russian = searchLocations(data, "корвоса", 4726, "", {names, language: "ru"})[0];
  assert.equal(russian.label, "Korvosa");
  assert.equal(russian.displayLabel, "Корвоса");
  assert.equal(searchLocations(data, "Korvosa", 4726, "", {names, language: "ru"})[0].displayLabel, "Корвоса");
  assert.equal(searchLocations(data, "Корвоса", 4726, "", {names, language: "en"})[0].displayLabel, "Korvosa");
  assert.equal(searchLocations(data, "корвсоа", 4726, "", {names, language: "ru"})[0].label, "Korvosa");
});
