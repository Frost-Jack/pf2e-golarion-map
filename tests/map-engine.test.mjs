import assert from "node:assert/strict";
import test from "node:test";
import {applyYear, timeIndexForYear} from "../scripts/map-engine.js";

const slices = [
  {id: -2, start: null, end: 4720},
  {id: -1, start: 4720, end: 4726},
  {id: 0, start: 4726, end: null}
];

test("historical intervals include their start and exclude their end", () => {
  assert.equal(timeIndexForYear(-10000, slices), -2);
  assert.equal(timeIndexForYear(4719, slices), -2);
  assert.equal(timeIndexForYear(4720, slices), -1);
  assert.equal(timeIndexForYear(4725, slices), -1);
  assert.equal(timeIndexForYear(4726, slices), 0);
  assert.equal(timeIndexForYear(10000, slices), 0);
});

test("year updates apply while a parsed style is still fetching tiles", () => {
  const changes = [];
  const map = {
    isStyleLoaded: () => false,
    setGlobalStateProperty: (...args) => changes.push(args)
  };
  applyYear(map, 4722, slices);
  assert.deepEqual(changes, [["timeIndex", -1]]);
});
