"""Download the original, user-authorized visual assets. Run from project root."""
from pathlib import Path
from urllib.request import urlopen
from concurrent.futures import ThreadPoolExecutor
import json, re, shutil

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'public/sites/mindmarket-f3496669/root-8a5edab2'
REFERENCE = ROOT / 'docs/research/mindmarket-f3496669/root-8a5edab2'
html = urlopen('https://mindmarket.com/').read().decode()
paths = set(re.findall(r'(?:src|data-src)="(/(?:timeline|rive)/[^"?]+)"', html))
paths = {p for p in paths if 'mobile' not in p}
paths.update('/fonts/inter-latin-' + w + '-normal.woff2' for w in ['400', '500', '700'])

def download(path):
    out = DEST / path.lstrip('/')
    out.parent.mkdir(parents=True, exist_ok=True)
    if not out.exists():
        out.write_bytes(urlopen('https://mindmarket.com' + path).read())
    return {'source': 'https://mindmarket.com' + path, 'local': str(out.relative_to(ROOT)), 'bytes': out.stat().st_size}

with ThreadPoolExecutor(max_workers=8) as pool:
    manifest = list(pool.map(download, sorted(paths)))
REFERENCE.mkdir(parents=True, exist_ok=True)
(REFERENCE / 'assets.json').write_text(json.dumps(manifest, indent=2))
print(f'Downloaded {len(manifest)} original assets; {sum(x["bytes"] for x in manifest):,} bytes')
