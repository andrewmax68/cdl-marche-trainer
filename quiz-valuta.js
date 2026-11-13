/* Valutazione automatica (prima lettura) delle risposte del Quiz rapido.
   Confronta il testo scritto o dettato con gli elementi essenziali della risposta (campo «v» di quiz-dati.js):
   sì/no, numeri ed estremi normativi (obbligatori), parole chiave (con radici e sinonimi).
   È un riscontro lessicale: non capisce il senso della frase. La decisione finale resta all'utente. */
(function(){
  'use strict';
  var MORF = [
    ['diciassette',17],['diciannove',19],['quattordici',14],['diciotto',18],['quindici',15],['tredici',13],['dodici',12],['undici',11],['sedici',16],
    ['milioni',1e6],['milione',1e6],['mille',-1000],['mila',1000],['cento',100],
    ['novanta',90],['novant',90],['ottanta',80],['ottant',80],['settanta',70],['settant',70],['sessanta',60],['sessant',60],
    ['cinquanta',50],['cinquant',50],['quaranta',40],['quarant',40],['trenta',30],['trent',30],['venti',20],['vent',20],
    ['quattro',4],['cinque',5],['sette',7],['nove',9],['otto',8],['dieci',10],['sei',6],['tre',3],['due',2],['uno',1],['una',1],['un',1]
  ];
  function parolaNumero(w){
    if (w === 'primo' || w === 'prima' || w === 'mila') return null;
    var tot = 0, cur = 0, i = 0, ok = false;
    while (i < w.length) {
      var m = null;
      for (var k = 0; k < MORF.length; k++) if (w.substr(i, MORF[k][0].length) === MORF[k][0]) { m = MORF[k]; break; }
      if (!m) return null;
      i += m[0].length; ok = true;
      var v = m[1];
      if (v === -1000) { tot += (cur || 1) * 1000; cur = 0; }
      else if (v === 1000) { tot += (cur || 1) * 1000; cur = 0; }
      else if (v === 1e6) { tot += (cur || 1) * 1e6; cur = 0; }
      else if (v === 100) { cur = (cur || 1) * 100; }
      else cur += v;
    }
    return ok ? tot + cur : null;
  }
  function norm(s){
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[’`]/g, "'").replace(/(\d)\.(?=\d{3}\b)/g, '$1').replace(/(\d)\.(?=\d{3}\b)/g, '$1');
  }
  /* testo -> {t: testo normalizzato con i numeri in cifre, tok: parole, num: insieme dei numeri} */
  function analizza(testo){
    var t = norm(testo);
    t = t.replace(/\b[a-z](?:\s+[a-z]){2,}\b/g, function(m){ return m.replace(/\s+/g, ''); });   // "i t l" -> "itl"
    t = t.replace(/[a-z]+/g, function(w){ var n = parolaNumero(w); return n === null ? w : String(n); });
    t = t.replace(/\bprimo\b/g, '1');
    t = t.replace(/(\d+)\s+virgola\s+(\d+)/g, '$1,$2').replace(/(\d+)\s+e\s+mezzo\b/g, '$1,5');
    t = t.replace(/(\d+)\s+(mila|mille)\b/g, function(m, a){ return String(+a * 1000); }).replace(/(\d+)\s+milioni?\b/g, function(m, a){ return String(+a * 1e6); });
    var num = {};
    (t.match(/\d+(?:,\d+)?/g) || []).forEach(function(n){ num[n.replace(',', '.')] = 1; });
    var tok = t.replace(/([a-z])-([a-z]+)/g, '$1$2 $1 $2').replace(/[^a-z0-9']+/g, ' ').replace(/\b[a-z]+'/g, ' ').trim().split(/\s+/).filter(Boolean);
    return { t: ' ' + t.replace(/[^a-z0-9]+/g, ' ') + ' ', tok: tok, num: num };
  }
  function polarita(A){
    var w = A.tok.slice(0, 3);
    for (var i = 0; i < w.length; i++) {
      if (/^(no|non|nessun\w*|mai|falso)$/.test(w[i])) return 'n';
      if (/^(si|certo|esatto|vero|assolutamente|sicuramente|certamente)$/.test(w[i])) return 's';
    }
    return null;
  }
  function trova(A, el){
    if (el[1] !== 'k') return el[2].every(function(n){ return A.num[n]; });
    return el[2].some(function(a){
      if (a.indexOf(' ') >= 0) return A.t.indexOf(' ' + a) >= 0;
      return A.tok.some(function(w){ return w.indexOf(a) === 0; });
    });
  }
  function valuta(x, testo){
    var v = x.v || { p: null, e: [], r: [] };
    var A = analizza(testo);
    if (!A.tok.length) return null;
    var pu = polarita(A);
    var el = v.e.map(function(e){ return { l: e[0], t: e[1], ok: trova(A, e) }; });
    var rf = (v.r || []).map(function(r){ return { l: r[0], ok: r[1].every(function(n){ return A.num[n]; }) }; });
    var nN = 0, oN = 0, nK = 0, oK = 0;
    el.forEach(function(e){ if (e.t === 'n') { nN++; if (e.ok) oN++; } else { nK++; if (e.ok) oK++; } });
    var pOk = v.p ? pu === v.p : null, pWrong = !!(v.p && pu && pu !== v.p);
    var den = nN * 2 + nK + (v.p ? 2 : 0), num = oN * 2 + oK + (pOk ? 2 : 0);
    var frac = den ? num / den : 0;
    var attesi = {}; v.e.forEach(function(e){ if (e[1] !== 'k') e[2].forEach(function(n){ attesi[n] = 1; }); }); (v.r || []).forEach(function(r){ r[1].forEach(function(n){ attesi[n] = 1; }); });
    var estranei = Object.keys(A.num).filter(function(n){ return !attesi[n]; });
    var esito, motivo;
    var sbagliato = nN > 0 && oN === 0 && Object.keys(A.num).some(function(n){ return !attesi[n]; });
    if (pWrong) { esito = 'no'; motivo = 'Hai risposto «' + (pu === 'n' ? 'no' : 'sì') + '», ma la risposta corretta è «' + (v.p === 'n' ? 'no' : 'sì') + '».'; }
    else if (sbagliato && frac < 0.5) { esito = 'no'; motivo = 'Il numero o l\'estremo indicato non è quello atteso.'; }
    else if (oN === nN && frac >= 0.5) { esito = 'ok'; motivo = 'Ci sono ' + (nN ? 'i numeri e gli estremi richiesti e ' : '') + 'gli elementi essenziali.'; }
    else if (frac >= 0.25 || oN > 0) { esito = 'parz';
      motivo = oN < nN ? 'Manca o non coincide ' + (nN - oN === 1 ? 'un numero o un estremo richiesto' : (nN - oN) + ' numeri o estremi richiesti') + '.' : 'Ci sono solo alcuni degli elementi essenziali.'; }
    else { esito = 'no'; motivo = 'Gli elementi essenziali della risposta non compaiono.'; }
    if (estranei.length && oN < nN) motivo += ' Hai indicato ' + estranei.slice(0, 4).join(', ') + ': non corrisponde a quanto atteso.';
    return { esito: esito, motivo: motivo, el: el, rf: rf, pol: v.p ? { atteso: v.p, ok: pOk } : null, perc: Math.round(frac * 100) };
  }
  var api = { valuta: valuta, analizza: analizza, parolaNumero: parolaNumero };
  if (typeof window !== 'undefined') window.QuizValuta = api;
  if (typeof module !== 'undefined') module.exports = api;
})();
