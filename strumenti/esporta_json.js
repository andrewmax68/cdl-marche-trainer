// Esporta la banca dati dell'orale in JSON per strumenti/fascicolo.py
// Uso: node strumenti/esporta_json.js orale.json
global.window = {};
require('../orale-dati.js');
const O = window.ORALE;
const out = { versione: O.versione, materie: O.materie, commissione: O.commissione,
  domande: O.domande.filter(d => d.serie !== 'S22').map(d => ({ id: d.id, m: d.m, busta: d.busta, gruppo: d.gruppo,
    testo: d.testo, etichetta: d.etichetta, ufficiale: d.ufficiale, approf: d.approf, r: d.r })) };
require('fs').writeFileSync(process.argv[2] || 'orale.json', JSON.stringify(out));
