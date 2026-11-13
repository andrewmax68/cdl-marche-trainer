import re, sys
R='/home/claude/cdl-marche-trainer'; OUT=sys.argv[1]
s=open(R+'/orale.html').read()
s=re.sub(r'<!DOCTYPE html>\s*', '', s, flags=re.I)
s=re.sub(r'</?html[^>]*>\s*', '', s); s=re.sub(r'</?head>\s*', '', s); s=re.sub(r'</?body[^>]*>\s*', '', s)
s=re.sub(r'<meta charset="UTF-8">\s*', '', s); s=re.sub(r'<meta name="viewport"[^>]*>\s*', '', s)
s=s.replace('<title>Prova orale — CdL Marche 2026</title>', '<title>Simulatore orale CdL</title>')
G='https://andrewmax68.github.io/cdl-marche-trainer/'
s=s.replace('href="index.html"', f'href="{G}index.html" target="_blank" rel="noopener"').replace('href="mappe.html"', f'href="{G}mappe.html" target="_blank" rel="noopener"')
s=re.sub(r'(src="[a-z-]+\.js)\?v=\w+"', r'\1"', s)
assert '<title>Simulatore orale CdL</title>' in s[:8000]
open(OUT,'w').write(s); print(len(s))
