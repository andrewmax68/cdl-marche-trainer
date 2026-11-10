// Esporta la banca dati dell'orale in JSON per strumenti/fascicolo.py
// Uso: node strumenti/esporta_json.js orale.json
global.window = {};
require('../orale-dati.js');
require('../articoli-chiave.js');
require('../mappe-dati.js');
const O = window.ORALE, AC = window.ART_CHIAVE, MP = window.MAPPE_ORALE;
const out = { versione: O.versione, materie: O.materie, commissione: O.commissione,
  domande: O.domande.filter(d => d.serie !== 'S22' || (d.r && !d.vedi)).map(d => ({ id: d.id, m: d.m, busta: d.busta, gruppo: d.gruppo,
    testo: d.testo, etichetta: d.etichetta, ufficiale: d.ufficiale, approf: d.approf, r: d.r })),
  sotto: MP.sotto,   // sottorami delle mappe, per l'ordine dei fascicoli
  ordSotto: MP.ordSotto,   // ordine propedeutico dei sottorami
  rami: MP.mappe.filter(mp => mp.rami).map(mp => ({ id: mp.id, dividi: !!mp.dividi, rami: mp.rami })),   // ordine dei rami di ogni mappa
  artchiave: { cost: AC.COST, cc: AC.CC, src: AC.SRC, dopo: AC.DOPO, leggi: AC.LEGGI, src_l: AC.SRC_L },
  rinvii: O.domande.filter(d => d.serie === 'S22' && d.vedi).map(d => ({ id: d.id, m: d.m, testo: d.testo, vedi: d.vedi })) };
require('fs').writeFileSync(process.argv[2] || 'orale.json', JSON.stringify(out));
