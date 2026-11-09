// Esporta la banca dati dell'orale in JSON per strumenti/fascicolo.py
// Uso: node strumenti/esporta_json.js orale.json
global.window = {};
require('../orale-dati.js');
require('../articoli-chiave.js');
const O = window.ORALE, AC = window.ART_CHIAVE;
const out = { versione: O.versione, materie: O.materie, commissione: O.commissione,
  domande: O.domande.filter(d => d.serie !== 'S22' || (d.r && !d.vedi)).map(d => ({ id: d.id, m: d.m, busta: d.busta, gruppo: d.gruppo,
    testo: d.testo, etichetta: d.etichetta, ufficiale: d.ufficiale, approf: d.approf, r: d.r })),
  artchiave: { cost: AC.COST, cc: AC.CC, src: AC.SRC, dopo: AC.DOPO },
  rinvii: O.domande.filter(d => d.serie === 'S22' && d.vedi).map(d => ({ id: d.id, m: d.m, testo: d.testo, vedi: d.vedi })) };
require('fs').writeFileSync(process.argv[2] || 'orale.json', JSON.stringify(out));
