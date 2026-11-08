"""Compare all original Cubbie homepage text with the production HTML.
Uses only Python's standard library; run after npm run build.
"""
from html.parser import HTMLParser
from pathlib import Path
import json,re,sys
class Text(HTMLParser):
 def __init__(self): super().__init__();self.parts=[];self.skip=0
 def handle_starttag(self,tag,attrs):
  if tag in ('script','style'):self.skip+=1
 def handle_endtag(self,tag):
  if tag in ('script','style'):self.skip-=1
 def handle_data(self,text):
  if not self.skip:self.parts.append(text)
def normalize(s):return re.sub(r'\s+',' ',s).strip()
p=Text();p.feed(Path('out/index.html').read_text());rendered=normalize(' '.join(p.parts))
source=json.loads(Path('docs/research/mindmarket-f3496669/root-8a5edab2/copy-inventory.json').read_text())
# The original mobile-only Menu control is intentionally excluded (desktop-only scope).
expected=[normalize(node['text']) for node in source['textNodes'] if node['text']!='Menu']
missing=[s for s in expected if s not in rendered]
print(f'Checked {len(expected)} original text nodes, including hidden tabs and FAQ answers.')
if missing: print(json.dumps({'missing':missing},ensure_ascii=False,indent=2));sys.exit(1)
print('PASS: all original homepage copy is present without text changes.')
