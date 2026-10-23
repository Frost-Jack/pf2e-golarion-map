import hashlib
import http.client
import json
from pathlib import Path
import time
import urllib.request


CHUNK_BYTES = 16 * 1024 * 1024
ATTEMPTS = 3
USER_AGENT = "PF2e-Golarion-Map/1.0 (https://github.com/Frost-Jack/pf2e-golarion-map)"


def download(snapshot, target):
    expected = snapshot["PMTilesBytes"]
    url = snapshot["Source"] + "golarion.pmtiles"
    temporary = target.with_name(target.name + ".part")
    digest = hashlib.sha256()
    with temporary.open("wb") as output:
        for start in range(0, expected, CHUNK_BYTES):
            end = min(start + CHUNK_BYTES, expected) - 1
            length = end - start + 1
            wanted_range = f"bytes {start}-{end}/{expected}"
            request = urllib.request.Request(url, headers={
                "User-Agent": USER_AGENT,
                "Accept-Encoding": "identity",
                "Range": f"bytes={start}-{end}",
            })
            for attempt in range(1, ATTEMPTS + 1):
                try:
                    with urllib.request.urlopen(request, timeout=120) as response:
                        returned_range = response.headers.get("Content-Range")
                        encoding = response.headers.get("Content-Encoding", "identity")
                        if response.status != 206 or returned_range != wanted_range or encoding != "identity":
                            raise RuntimeError(
                                f"HTTP {response.status}, Content-Range={returned_range!r}, "
                                f"Content-Length={response.headers.get('Content-Length')!r}, "
                                f"Content-Type={response.headers.get('Content-Type')!r}, "
                                f"Content-Encoding={encoding!r}; expected {wanted_range}"
                            )
                        data = response.read(length + 1)
                    if len(data) != length:
                        raise RuntimeError(f"Received {len(data)} bytes; expected {length}")
                    break
                except (OSError, http.client.HTTPException, RuntimeError) as error:
                    print(f"Range {start}-{end}, attempt {attempt}/{ATTEMPTS}: {error}", flush=True)
                    if attempt == ATTEMPTS:
                        raise RuntimeError(f"Map download failed at byte {start}") from error
                    time.sleep(attempt)
            output.write(data)
            digest.update(data)
            print(f"Map: {end + 1}/{expected} bytes", flush=True)
    actual = temporary.stat().st_size
    if actual != expected:
        raise RuntimeError(f"Map size is {actual} bytes; expected {expected}")
    checksum = digest.hexdigest()
    if checksum != snapshot["PMTilesSHA256"]:
        raise RuntimeError(f"Map SHA256 is {checksum}; expected {snapshot['PMTilesSHA256']}")
    temporary.replace(target)
    print(f"Map verified: {actual} bytes, SHA256 {checksum}", flush=True)


if __name__ == "__main__":
    assets = Path(__file__).resolve().parent.parent / "assets/map"
    snapshot = json.loads((assets / "snapshot.json").read_text(encoding="utf-8"))
    download(snapshot, assets / "golarion.pmtiles")
