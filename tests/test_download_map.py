import contextlib
import hashlib
import importlib.util
import io
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("download_map", ROOT / "tools/download_map.py")
downloader = importlib.util.module_from_spec(spec)
spec.loader.exec_module(downloader)


class DownloadTests(unittest.TestCase):
    def setUp(self):
        self.folder = tempfile.TemporaryDirectory(dir=ROOT / "tests")
        self.workspace = Path(self.folder.name).resolve()
        assert self.workspace.is_relative_to(ROOT / "tests")
        self.addCleanup(self.folder.cleanup)
        self.target = self.workspace / "golarion.pmtiles"
        self.target.write_bytes(b"previous map")
        self.data = b"PMTiles-test-data"
        self.snapshot = {
            "Source": "https://example.test/snapshot/",
            "PMTilesBytes": len(self.data),
            "PMTilesSHA256": hashlib.sha256(self.data).hexdigest(),
        }
        self.requests = []
        self.mode = "normal"

    def response(self, request, timeout):
        self.assertEqual(request.get_header("Accept-encoding"), "identity")
        self.assertEqual(request.get_header("User-agent"), downloader.USER_AGENT)
        span = request.get_header("Range")
        self.requests.append(span)
        if self.mode == "reset-first" and len(self.requests) == 1:
            raise ConnectionResetError("Connection interrupted")
        start, end = map(int, span.removeprefix("bytes=").split("-"))
        data = self.data[start:end + 1]
        response = io.BytesIO(data)
        response.status = 206
        response.headers = {"Content-Range": f"bytes {start}-{end}/{len(self.data)}"}
        if self.mode == "short-first" and len(self.requests) == 1:
            response = io.BytesIO(data[:-1])
            response.status = 206
            response.headers = {"Content-Range": f"bytes {start}-{end}/{len(self.data)}"}
        elif self.mode == "wrong-range":
            response.headers["Content-Range"] = "bytes 99-102/1000"
        elif self.mode == "html":
            response.status = 200
            response.headers["Content-Type"] = "text/html"
        elif self.mode == "gzip":
            response.headers["Content-Encoding"] = "gzip"
        return response

    def run_download(self):
        with patch.object(downloader, "CHUNK_BYTES", 4), \
             patch.object(downloader.urllib.request, "urlopen", self.response), \
             patch.object(downloader.time, "sleep"), \
             contextlib.redirect_stdout(io.StringIO()):
            downloader.download(self.snapshot, self.target)

    def test_assembles_validated_ranges(self):
        self.run_download()
        self.assertEqual(self.target.read_bytes(), self.data)
        self.assertEqual(self.requests, ["bytes=0-3", "bytes=4-7", "bytes=8-11", "bytes=12-15", "bytes=16-16"])
        self.assertFalse(self.target.with_name(self.target.name + ".part").exists())

    def test_retries_short_chunk_without_appending_it(self):
        self.mode = "short-first"
        self.run_download()
        self.assertEqual(self.target.read_bytes(), self.data)
        self.assertEqual(self.requests[:2], ["bytes=0-3", "bytes=0-3"])

    def test_wrong_ranges_never_replace_the_existing_map(self):
        self.mode = "wrong-range"
        with self.assertRaisesRegex(RuntimeError, "byte 0"):
            self.run_download()
        self.assertEqual(len(self.requests), 3)
        self.assertEqual(self.target.read_bytes(), b"previous map")

    def test_retries_interrupted_connection(self):
        self.mode = "reset-first"
        self.run_download()
        self.assertEqual(self.target.read_bytes(), self.data)
        self.assertEqual(self.requests[:2], ["bytes=0-3", "bytes=0-3"])

    def test_html_response_never_replaces_the_existing_map(self):
        self.mode = "html"
        with self.assertRaises(RuntimeError):
            self.run_download()
        self.assertEqual(self.target.read_bytes(), b"previous map")

    def test_compressed_range_never_replaces_the_existing_map(self):
        self.mode = "gzip"
        with self.assertRaises(RuntimeError):
            self.run_download()
        self.assertEqual(self.target.read_bytes(), b"previous map")

    def test_incorrect_checksum_never_replaces_the_existing_map(self):
        self.snapshot["PMTilesSHA256"] = "0" * 64
        with self.assertRaisesRegex(RuntimeError, "SHA256"):
            self.run_download()
        self.assertEqual(self.target.read_bytes(), b"previous map")


if __name__ == "__main__":
    unittest.main()
