/* Articoli chiave dell'area giuslavoristica: Costituzione (giallo) e codice civile (verde).
   Fonte unica per simulatore, mappe e fascicoli PDF (strumenti/fascicolo.py usa le stesse liste
   tramite esporta_json.js e la stessa regola di riconoscimento: tenere allineate le due versioni). */
(function (root) {
  var COST = ['1', '2', '3', '4', '32', '35', '36', '37', '38', '39', '40', '41', '46', '97', '99', '117'];
  var CC = ['230-bis', '230-ter', '1175', '1325', '1372', '1375', '1418', '1419', '1655', '1676', '2049',
    '2082', '2083', '2086', '2087', '2094', '2095', '2096', '2099', '2103', '2104', '2105', '2106', '2107',
    '2108', '2109', '2110', '2112', '2113', '2114', '2115', '2116', '2118', '2119', '2120', '2121', '2122',
    '2125', '2126', '2135', '2222', '2229', '2230', '2231', '2232', '2233', '2751-bis', '2946', '2948'];

  var NUM = '\\d+(?:-(?:bis|ter|quater))?';
  var ORD = '(?:primo|secondo|terzo|quarto|quinto|sesto|settimo|ottavo|nono|decimo|ultimo)';
  var QUAL = '(?:,?\\s(?:c\\.|comma|commi|nn?\\.)\\s?' + NUM + '(?:\\s?(?:,|e|-)\\s?\\d+)*' +
    '|,?\\slett\\.\\s?[a-z](?:-[a-z]+)?\\)?' +
    '|,?\\s' + ORD + '\\scomma|,\\sseconda parte)';
  var SRC = '\\b[Aa]rtt?\\.\\s?(' + NUM + '(?:\\s?(?:,|-|e)\\s?' + NUM + ')*)((?:' + QUAL + ')*)(,?\\s?(Cost\\.|della Costituzione|c\\.c\\.|del codice civile))?';
  var DOPO = /^[,\s]*(D\.\s?Lgs|D\.\s?L\.|L\.|D\.P\.R|D\.M|D\.I|TUIR|T\.U|c\.p\.|CCII|Statuto|St\.|del|dello|della|dei|cod|reg|dir|CCNL|Cost|n\.)/;

  function numeri(lista) {
    var out = [], parti = lista.split(/\s*,\s*|\s+e\s+/);
    parti.forEach(function (p) {
      // intervallo «a-b»: contano gli estremi (artt. 35-47 Cost. sì, artt. 1173-1223 c.c. no)
      var m = p.match(/^(\d+)-(\d+)$/);
      if (m) { out.push(m[1], m[2]); } else out.push(p.trim());
    });
    return out;
  }
  function tocca(nn, chiavi) { return nn.some(function (n) { return chiavi.indexOf(n) >= 0; }); }

  /* Restituisce [[inizio, fine, 'cost'|'cc'], ...] sul testo semplice. */
  function trova(testo) {
    var rx = new RegExp(SRC, 'g'), out = [], m;
    testo = String(testo || '');
    while ((m = rx.exec(testo))) {
      var nn = numeri(m[1]), suf = m[4] || '', tipo = null, fine = m.index + m[0].length;
      if (/Cost|Costituzione/.test(suf)) { if (tocca(nn, COST)) tipo = 'cost'; }
      else if (suf) { if (tocca(nn, CC)) tipo = 'cc'; }
      else if (tocca(nn, CC) && !DOPO.test(testo.slice(fine, fine + 14))) tipo = 'cc';
      if (tipo) { while (/[,\s]/.test(testo[fine - 1])) fine--; out.push([m.index, fine, tipo]); }
    }
    return out;
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* HTML con gli articoli chiave evidenziati e, se date, le parole in grassetto. */
  function html(testo, grassetti) {
    testo = String(testo || '');
    var n = testo.length, b = new Array(n), h = new Array(n), i;
    (grassetti || []).forEach(function (w) {
      if (!w || w.length < 2) return;
      var k = testo.indexOf(w);
      while (k >= 0) { for (i = k; i < k + w.length; i++) b[i] = 1; k = testo.indexOf(w, k + w.length); }
    });
    trova(testo).forEach(function (s) { for (i = s[0]; i < s[1]; i++) h[i] = s[2]; });
    var out = '', cb = 0, ch = null;
    for (i = 0; i < n; i++) {
      var nb = b[i] ? 1 : 0, nh = h[i] || null;
      if (nh !== ch) {   // cambia l'evidenziazione: si chiude tutto e si riapre (il grassetto sta dentro il <mark>)
        if (cb) out += '</b>'; if (ch) out += '</mark>';
        if (nh) out += '<mark class="ac-' + nh + '">'; if (nb) out += '<b>';
        ch = nh; cb = nb;
      } else if (nb !== cb) { out += nb ? '<b>' : '</b>'; cb = nb; }
      out += esc(testo[i]);
    }
    if (cb) out += '</b>'; if (ch) out += '</mark>';
    return out;
  }

  var CSS = 'mark.ac-cost,mark.ac-cc{color:#161d29;padding:0 .12em;border-radius:3px;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-print-color-adjust:exact;print-color-adjust:exact}' +
    'mark.ac-cost{background:#ffe066}mark.ac-cc{background:#a8dc9a}' +
    '.ac-leg{font:12px/1.4 system-ui,sans-serif;color:#5f5e5a;margin:6px 0}.ac-leg mark{font-weight:600}';
  function legenda() { return '<div class="ac-leg">Articoli chiave del lavoro: <mark class="ac-cost">Costituzione</mark> <mark class="ac-cc">Codice civile</mark></div>'; }
  if (root.document) { var st = root.document.createElement('style'); st.textContent = CSS; root.document.head.appendChild(st); }

  root.ART_CHIAVE = { COST: COST, CC: CC, SRC: SRC, DOPO: DOPO.source, trova: trova, html: html, legenda: legenda };
})(typeof window !== 'undefined' ? window : globalThis);
