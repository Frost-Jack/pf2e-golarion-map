import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";
import {searchLocations} from "../scripts/map-search.js";

const read = async file => JSON.parse(await readFile(new URL(`../assets/map/${file}`, import.meta.url), "utf8"));
const [data, names] = await Promise.all([read("search.json"), read("names-ru.json")]);

test("Russian dictionary covers every distinct name in the map catalogue", () => {
  const labels = [...new Set(data.flatMap(category => category.entries.map(entry => entry.label)))].sort();
  assert.deepEqual(Object.keys(names).sort(), labels);
  for (const [english, russian] of Object.entries(names)) {
    assert.equal(typeof russian, "string", english);
    assert.match(russian, /[А-Яа-яЁё]/u, english);
    const initial = russian.match(/[А-Яа-яЁё]/u)[0];
    assert.equal(initial, initial.toUpperCase(), english);
    assert.equal(russian, russian.trim(), english);
    assert.doesNotMatch(russian, /https?:|<[^>]+>|\uFFFD/u, english);
    assert.doesNotMatch(russian.replace(/\b[IVXLCDM]+\b/gu, ""), /[A-Za-z]/u, english);
  }
});

test("expanded dictionary searches published and editorial names in both languages", () => {
  for (const english of ["Five Kings Mountains", "Goka", "Steelhead Pier", "Rickety's Squibs", "Ñarula"]) {
    const russian = names[english];
    for (const language of ["en", "ru"]) {
      const results = searchLocations(data, russian, 4726, "", {names, language});
      assert.ok(results.some(result => result.label === english), `${english}: ${language}`);
      const result = searchLocations(data, english, 4726, "", {names, language})[0];
      assert.equal(result.label, english);
      assert.equal(result.displayLabel, language === "ru" ? russian : english);
    }
  }
});
