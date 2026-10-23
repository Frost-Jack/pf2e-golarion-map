import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";
import {loadPlaceDetails} from "../scripts/map-details.js";

test("descriptions load on demand, share pending requests, and retry failed slices", async () => {
  const originalFetch = globalThis.fetch;
  const requests = [];
  let failOnce = true;
  globalThis.fetch = async url => {
    const path = String(url);
    requests.push(path);
    if (path.endsWith("/extra/0.json") && failOnce) {
      failOnce = false;
      return {ok: false, status: 503};
    }
    return {ok: true, json: async () => JSON.parse(await readFile(url, "utf8"))};
  };
  try {
    assert.equal(requests.length, 0);
    const [first, second] = await Promise.all([loadPlaceDetails("Almas"), loadPlaceDetails("Almas")]);
    assert.equal(first, second);
    assert.match(first, /capital of/);
    assert.equal(requests.filter(url => url.endsWith("descriptions-index.json")).length, 1);
    assert.equal(requests.filter(url => url.endsWith("/extra/4.json")).length, 1);
    assert.equal(await loadPlaceDetails("Arch of Aroden"), "");
    assert.equal(requests.length, 2);
    await assert.rejects(loadPlaceDetails("Cradle of Quartz"), /503/);
    assert.match(await loadPlaceDetails("Cradle of Quartz"), /Cradle of Quartz/);
    assert.equal(requests.filter(url => url.endsWith("/extra/0.json")).length, 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
