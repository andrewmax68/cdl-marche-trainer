/* ============================================================
   CdL Marche 2026 — Prova orale: banca dati
   Versione dati: 1.3 del 30/10/2026 (DEO-21 rivista; + 135 argomenti ufficiali 2022 di altra sede)
   - Domande: 23 buste ufficiali ITL Ancona, sessione 2025 (8 per busta)
     + integrazioni 2026 (stima, non domande ufficiali).
   - Risposte modello: solo dove le fonti sono state verificate
     (vedi campo "fonti" di ciascuna risposta). Le altre si aggiungono
     a lotti: il motore mostra l'approfondimento in libreria.
   - Commissione: decreto ITL Ancona n. 15 del 7/10/2026.
     L'abbinamento commissario-materia è una STIMA.
   ============================================================ */

window.ORALE = (function () {

  /* ---------- Materie (ordine della busta 2025) ---------- */
  var MATERIE = [
    { k: 'DL',    nome: 'Diritto del lavoro',                         corto: 'Lavoro',      n: 2, comm: 'rausei' },
    { k: 'INPS',  nome: 'Legislazione sociale — INPS',                 corto: 'INPS',        n: 1, comm: 'gallotta' },
    { k: 'INAIL', nome: 'Legislazione sociale — INAIL',                corto: 'INAIL',       n: 1, comm: 'sassi' },
    { k: 'TRIB',  nome: 'Diritto tributario',                          corto: 'Tributario',  n: 1, comm: 'morganti' },
    { k: 'RAG',   nome: 'Elementi di ragioneria',                      corto: 'Ragioneria',  n: 1, comm: 'bucchini' },
    { k: 'PPP',   nome: 'Elementi di diritto privato, pubblico e penale', corto: 'Priv./Pubbl./Pen.', n: 1, comm: 'terzoni' },
    { k: 'DEO',   nome: 'Ordinamento e deontologia professionale',     corto: 'Deontologia', n: 1, comm: 'diiulio' }
  ];

  /* ---------- Commissione 2026 ---------- */
  var COMMISSIONE = {
    rausei:   { nome: 'Pierluigi Rausei',  titolo: 'dott.',  ruolo: 'Presidente · Direttore ITL Ancona', voce: { pitch: 0.9,  rate: 1.0, gen: 'm' },
                aree: 'Vigilanza e poteri ispettivi, sanzioni, D.L. 62/2026, prossimità, D.Lgs. 96/2026, potere disciplinare, abusivismo.',
                nota: 'Presidente anche nel 2024. Possibili approfondimenti sul tema della prima prova.' },
    terzoni:  { nome: 'Paola Terzoni',     titolo: 'prof.ssa', ruolo: 'Componente per le materie giuridiche', voce: { pitch: 1.15, rate: 1.0, gen: 'f' },
                aree: 'Diritto pubblico (fonti, organi, decreti, referendum), privato, penale; parità di genere.',
                nota: 'Profilo pubblico non trovato; riferito: avvocata, docente di scuola superiore, attenta ai diritti delle donne.' },
    gallotta: { nome: 'Berardino Gallotta', titolo: 'dott.', ruolo: 'Dirigente INPS, Direzione regionale Marche', voce: { pitch: 0.85, rate: 0.98, gen: 'm' },
                aree: 'Ammortizzatori, contribuzione, prestazioni, novità 2026 (L. 199/2025).',
                nota: 'Unico commissario effettivo, oltre al Presidente, già in commissione nel 2024.' },
    sassi:    { nome: 'Luca Sassi',        titolo: 'dott.',  ruolo: 'Direttore INAIL Ancona', voce: { pitch: 1.0,  rate: 1.02, gen: 'm' },
                aree: 'Obbligo assicurativo, premi e autoliquidazione, riduzioni del tasso, infortunio e malattia professionale, prestazioni.',
                nota: 'Nessun profilo pubblico trovato oltre al ruolo.' },
    diiulio:  { nome: 'Roberto Di Iulio',  titolo: 'dott.',  ruolo: 'Consulente del Lavoro · CPO Ancona', voce: { pitch: 0.95, rate: 1.0, gen: 'm' },
                aree: 'Ordinamento e deontologia; professione; temi già trattati in convegno: social media e deontologia, crisi d\'impresa, tirocini, formazione finanziata.',
                nota: 'Presidente dell\'Ordine di Ancona almeno nel 2022 (carica attuale da verificare).' },
    morganti: { nome: 'Massimo Morganti',  titolo: 'dott.',  ruolo: 'Consulente del Lavoro · CPO Ascoli Piceno', voce: { pitch: 1.05, rate: 1.0, gen: 'm' },
                aree: 'Tributario del lavoro dipendente e parte generale (stima per ruolo).',
                nota: 'Nessun profilo pubblico trovato. Abbinamento alla materia: stima.' },
    bucchini: { nome: 'Nicola Bucchini',   titolo: 'dott.',  ruolo: 'Consulente del Lavoro · CPO Pesaro Urbino', voce: { pitch: 0.95, rate: 1.04, gen: 'm' },
                aree: 'Ragioneria: costo del lavoro, TFR, bilancio (stima per ruolo).',
                nota: 'Supplente nel 2024. Abbinamento alla materia: stima.' }
  };

  /* ---------- Approfondimenti per gruppo (file della libreria del progetto) ---------- */
  var SIMONE_DL = 'P1_Simone_Diritto_Lavoro_OCR_completo';
  var SIMONE_LS = 'P1_Simone_Legislazione_Sociale_OCR_completo';
  var APPROF = {
    'DL.Qualificazione':      [[SIMONE_DL, 'il tema della domanda (es. «subordinazione», «co.co.co.», «certificazione»)'], ['Codice La Tribuna', 'artt. 2094, 2222 c.c.; D.Lgs. 81/2015']],
    'DL.Contratti flessibili':[[SIMONE_DL, 'il nome del contratto'], ['81_2015.pdf', 'capo del contratto richiesto']],
    'DL.Svolgimento e retribuzione':[[SIMONE_DL, 'il tema della domanda'], ['P1/P1_Scheda_Sentenze_Salario.md', 'art. 36 Cost. (per la retribuzione)']],
    'DL.Tutele specifiche':   [['P1/P1_Cap09_Genitorialita.md', 'maternità, paternità, interdizione'], [SIMONE_DL, '«collocamento obbligatorio», «minori»']],
    'DL.Vigilanza e illeciti':[['P1/P1_Mappe_Poteri_ispettivi.md', 'lo strumento richiesto'], ['P1_Cap03_Poteri_ispettivi.docx', ''], ['124_2004.pdf', 'artt. 11-14']],
    'DL.Salute e sicurezza':  [['P1_Cap04_Sicurezza_vigilanza.docx', ''], ['81_2008_ESTRATTO_TitoloI_XII.md', 'artt. 15, 17, 28-29']],
    'DL.Diritto sindacale':   [['P1_Cap05_Prossimita.docx', 'per la prossimità'], ['P1_Cap01_DL62_2026.docx', 'efficacia dei CCNL'], [SIMONE_DL, '«sciopero»']],
    'DL.Cessazione del rapporto':[[SIMONE_DL, '«dimissioni», «licenziamento» (tutele pp. 242-244)'], ['Statuto Lavoratori 300_1970.pdf', 'artt. 7 e 18']],
    'DL.Rinunce e conciliazioni':[[SIMONE_DL, '«rinunce e transazioni», «sede protetta»'], ['NORMA_Codice_civile_lavoro.md', 'art. 2113 c.c.']],
    'DL.Integrazione 2026':   [['ORALE/ORALE_02_Commissione_2026_temi.md', 'sezione «Rausei»']],
    'INPS.Ammortizzatori e sostegno al reddito':[[SIMONE_LS, '«CIGO», «CIGS», «NASpI»'], ['ORALE/ORALE_02_Commissione_2026_temi.md', 'novità 2026 (Gallotta)']],
    'INPS.Contribuzione':     [[SIMONE_LS, 'il tema della domanda; sanzioni civili pp. 444-445']],
    'INPS.Prestazioni':       [[SIMONE_LS, 'il tema; previdenza complementare pp. 393-394'], ['P1/P1_Cap09_Genitorialita.md', 'congedo parentale']],
    'INPS.Adempimenti':       [[SIMONE_LS, '«UniLav», «comunicazioni obbligatorie»']],
    'INPS.Integrazione 2026': [['ORALE/ORALE_02_Commissione_2026_temi.md', 'sezione «Gallotta»']],
    'INAIL.Obbligo, premi e adempimenti':[[SIMONE_LS, 'premio e autoliquidazione pp. 341-344'], ['Codice La Tribuna', 'D.P.R. 1124/1965, da p. 509']],
    'INAIL.Infortunio e malattia professionale':[[SIMONE_LS, '«infortunio», «malattia professionale»'], ['Codice La Tribuna', 'D.P.R. 1124/1965, artt. 2-3']],
    'INAIL.Prestazioni e azioni':[[SIMONE_LS, '«rendita», «rivalsa», «automaticità»']],
    'TRIB.Lavoro dipendente': [['P2/P2_Mod04_Sostituto_imposta_scalette_v1.1.md', ''], ['P2/P2_Mod07_Regole_per_fascia_di_reddito_v6.md', 'detrazioni'], ['917_1986_TUIR.md', 'artt. 49-51, 12-13']],
    'TRIB.Parte generale e procedimento':[['ORALE/ORALE_Simone_Diritto_Tributario_OCR.md', 'il tema della domanda']],
    'TRIB.Società e impresa': [['917_1986_TUIR.md', 'art. 5 (società di persone, impresa familiare)'], ['ORALE/ORALE_Simone_Diritto_Privato_OCR.md', '«impresa familiare» (p. 784)']],
    'TRIB.Integrazione 2026': [['P2/P2_Mod04_Sostituto_imposta_scalette_v1.1.md', 'scalette A-D']],
    'RAG.Costo del lavoro in contabilità':[['ORALE/ORALE_Simone_Ragioneria_Personale_OCR.md', 'la voce o il conto richiesto']],
    'RAG.Bilancio':           [['ORALE/ORALE_Simone_Ragioneria_Generale_OCR.md', 'il tema'], ['Codice SEAC', 'artt. 2423-2425 c.c.']],
    'RAG.Contabilità e documenti':[['P2/P2_Mod05_Fattura_CdL_v2.md', 'per la fattura'], ['Guida_Fatturazione_Consulente_Lavoro.pdf', '']],
    'PPP.Pubblico e costituzionale':[['ORALE/ORALE_03_Pubblico_Penale_scheda.md', 'sezione A'], ['ORALE/ORALE_Simone_Diritto_Pubblico_OCR.md', 'l\'organo richiesto']],
    'PPP.Privato':            [['ORALE/ORALE_Simone_Diritto_Privato_OCR.md', 'il tema della domanda']],
    'PPP.Penale':             [['ORALE/ORALE_03_Pubblico_Penale_scheda.md', 'sezione B']],
    'PPP.Integrazione 2026':  [['198_2006.pdf', ''], ['P1_Cap02_DLgs96_2026.docx', ''], ['P1/P1_Cap09_Genitorialita.md', '']],
    'DEO.Ordinamento':        [['ORALE/ORALE_Simone_Deontologia_OCR.md', 'il tema (L. 12/1979)']],
    'DEO.Codice deontologico':[['ORALE/ORALE_Simone_Deontologia_OCR.md', 'il principio richiesto (Codice deontologico artt. 1-47)']],
    'DEO.Integrazione 2026':  [['ORALE/ORALE_02_Commissione_2026_temi.md', 'attualità della professione']]
  };
  /* Approfondimenti mirati che sostituiscono quelli di gruppo */
  var APPROF_SPEC = {
    'DL-12b': [['P1_Cap05_Prossimita.docx', ''], ['138_2011_ESTRATTO_art8.md', '']],
    'DL-18a': [['P1_Cap01_DL62_2026.docx', 'art. 7 D.L. 62/2026'], ['P1/P1_Scheda_Sentenze_Salario.md', '']],
    'DL-19b': [['P2/P2_Mod02_Busta_paga_2026_v4.md', ''], [SIMONE_DL, '«libro unico»']],
    'DL-16a': [[SIMONE_DL, '«orario di lavoro»'], ['Stampa Normattiva', 'D.Lgs. 66/2003']],
    'DL-17a': [[SIMONE_DL, '«straordinario», «supplementare»'], ['Stampa Normattiva', 'D.Lgs. 66/2003, art. 5']],
    'RAG-12': [['P2/P2_Mod05_Fattura_CdL_v2.md', '']],
    'RAG-20': [['P2/P2_Mod05_Fattura_CdL_v2.md', ''], ['ORALE/ORALE_Simone_Diritto_Tributario_OCR.md', '«fattura elettronica»']],
    'TRIB-13':[['Scheda in preparazione', 'fonte ufficiale: L. 190/2014, art. 1, c. 54 ss.']],
    'TRIB-18':[['Scheda in preparazione', 'fonte ufficiale: D.Lgs. 446/1997']],
    'TRIB-8': [['Scheda in preparazione', 'fonte ufficiale: D.Lgs. 23/2011, art. 3']],
    'TRIB-21':[['Scheda in preparazione', 'artt. 2247 ss. c.c.'], ['917_1986_TUIR.md', 'artt. 5 e 73']],
    'TRIB-23':[['Scheda in preparazione', 'artt. 2313-2318 c.c.'], ['917_1986_TUIR.md', 'art. 8, c. 2 (perdite)']],
    'TRIB-5': [['Scheda in preparazione', 'artt. 2247 ss. c.c.'], ['917_1986_TUIR.md', 'artt. 5 e 73']],
    'RAG-10': [['Scheda in preparazione', 'artt. 2423-2425 c.c.'], ['ORALE/ORALE_Simone_Ragioneria_Generale_OCR.md', '']],
    'RAG-13': [['Scheda in preparazione', 'art. 2424 c.c.']],
    'RAG-14': [['Scheda in preparazione', 'art. 2425 c.c.']],
    'RAG-15': [['Scheda in preparazione', 'D.P.R. 600/1973, art. 19']],
    'RAG-18': [['Scheda in preparazione', 'D.P.R. 600/1973, artt. 14 e 18']],
    'PPP-11': [['Scheda in preparazione (ORALE_04)', 'artt. 832 ss. e 1140 ss. c.c.']],
    'PPP-15': [['Scheda in preparazione (ORALE_04)', 'artt. 952 ss. e 2784 ss. c.c.']],
    'PPP-18': [['ORALE/ORALE_Simone_Diritto_Privato_OCR.md', '«imprenditore»'], ['Scheda in preparazione (ORALE_04)', 'artt. 2247 ss. c.c.']]
  };

  /* ---------- Domande: [materia, busta, gruppo, testo]  (Ancona 2025) ---------- */
  var RAW = [
    // Diritto del lavoro (2 per busta)
    ['DL',1,'Qualificazione','Il codice civile e la nozione di lavoro subordinato'],
    ['DL',2,'Qualificazione','I requisiti essenziali del contratto di lavoro'],
    ['DL',4,'Qualificazione','La prestazione di fatto e la tutela del lavoratore'],
    ['DL',4,'Qualificazione','Le collaborazioni coordinate e continuative'],
    ['DL',5,'Qualificazione','Gli effetti della certificazione dei contratti e la sua valenza giuridica'],
    ['DL',6,'Qualificazione','Gli elementi essenziali del lavoro autonomo'],
    ['DL',7,'Qualificazione','Il lavoro autonomo occasionale: obblighi, limiti, tutele'],
    ['DL',19,'Qualificazione','Le differenze tra lavoro autonomo e lavoro subordinato'],
    ['DL',1,'Contratti flessibili','Il contratto a tempo determinato'],
    ['DL',2,'Contratti flessibili','Il contratto a tempo parziale'],
    ['DL',3,'Contratti flessibili','Il patto di prova: funzione, forma, durata'],
    ['DL',3,'Contratti flessibili','Il lavoro intermittente (a chiamata)'],
    ['DL',9,'Contratti flessibili','Il distacco: requisiti di legittimità'],
    ['DL',10,'Contratti flessibili','La somministrazione di lavoro: condizioni e limiti'],
    ['DL',21,'Contratti flessibili','L\'apprendistato professionalizzante'],
    ['DL',8,'Svolgimento e retribuzione','Il patto di non concorrenza'],
    ['DL',13,'Svolgimento e retribuzione','Le mansioni e lo ius variandi'],
    ['DL',14,'Svolgimento e retribuzione','Le informazioni da fornire al lavoratore all\'assunzione'],
    ['DL',14,'Svolgimento e retribuzione','Le ferie'],
    ['DL',15,'Svolgimento e retribuzione','Gli impianti audiovisivi e i controlli a distanza'],
    ['DL',16,'Svolgimento e retribuzione','L\'orario di lavoro nel D.Lgs. 66/2003'],
    ['DL',17,'Svolgimento e retribuzione','Il lavoro straordinario e il lavoro supplementare'],
    ['DL',18,'Svolgimento e retribuzione','La retribuzione ai sensi dell\'art. 36 della Costituzione'],
    ['DL',18,'Svolgimento e retribuzione','Il superminimo e gli altri elementi aggiuntivi della retribuzione'],
    ['DL',19,'Svolgimento e retribuzione','Il prospetto paga e il libro unico del lavoro'],
    ['DL',20,'Svolgimento e retribuzione','La tracciabilità della retribuzione'],
    ['DL',11,'Svolgimento e retribuzione','Il welfare aziendale'],
    ['DL',5,'Tutele specifiche','Il congedo di maternità obbligatorio'],
    ['DL',6,'Tutele specifiche','L\'interdizione anticipata dal lavoro'],
    ['DL',7,'Tutele specifiche','Il congedo di paternità obbligatorio'],
    ['DL',10,'Tutele specifiche','Il collocamento obbligatorio dei disabili'],
    ['DL',12,'Tutele specifiche','L\'età minima e il lavoro dei minori'],
    ['DL',8,'Vigilanza e illeciti','L\'appalto illecito e fraudolento: sanzioni'],
    ['DL',11,'Vigilanza e illeciti','Il caporalato e l\'interposizione illecita'],
    ['DL',20,'Vigilanza e illeciti','Il lavoro sommerso: definizione e sanzioni'],
    ['DL',22,'Vigilanza e illeciti','Il provvedimento di sospensione dell\'attività d\'impresa'],
    ['DL',22,'Vigilanza e illeciti','La conciliazione monocratica'],
    ['DL',23,'Vigilanza e illeciti','La patente a crediti'],
    ['DL',15,'Salute e sicurezza','Il mobbing'],
    ['DL',17,'Salute e sicurezza','Le misure generali di tutela nel D.Lgs. 81/2008'],
    ['DL',23,'Salute e sicurezza','La valutazione dei rischi'],
    ['DL',9,'Diritto sindacale','L\'efficacia dei contratti collettivi nazionali'],
    ['DL',12,'Diritto sindacale','I contratti di prossimità'],
    ['DL',16,'Diritto sindacale','Il diritto di sciopero'],
    ['DL',13,'Rinunce e conciliazioni','Le rinunce e le transazioni'],
    ['DL',21,'Rinunce e conciliazioni','Gli accordi conciliativi in sede protetta'],
    // INPS
    ['INPS',1,'Ammortizzatori e sostegno al reddito','La cassa integrazione guadagni ordinaria'],
    ['INPS',2,'Ammortizzatori e sostegno al reddito','La cassa integrazione guadagni straordinaria'],
    ['INPS',4,'Ammortizzatori e sostegno al reddito','La classificazione degli ammortizzatori sociali'],
    ['INPS',5,'Ammortizzatori e sostegno al reddito','Presupposti e limiti degli ammortizzatori sociali'],
    ['INPS',6,'Ammortizzatori e sostegno al reddito','La NASpI'],
    ['INPS',11,'Ammortizzatori e sostegno al reddito','Le misure a sostegno del reddito'],
    ['INPS',21,'Ammortizzatori e sostegno al reddito','La compatibilità della NASpI con l\'attività lavorativa'],
    ['INPS',3,'Contribuzione','La contribuzione obbligatoria e le assicurazioni sociali (IVS, minori, ex INPDAP, casse professionali)'],
    ['INPS',8,'Contribuzione','Unità produttiva e unità operativa'],
    ['INPS',12,'Contribuzione','La prescrizione dei contributi'],
    ['INPS',13,'Contribuzione','Le dilazioni dei debiti contributivi'],
    ['INPS',14,'Contribuzione','L\'inquadramento aziendale e la posizione contributiva'],
    ['INPS',15,'Contribuzione','Il minimale contributivo e il CCNL comparativamente più rappresentativo'],
    ['INPS',18,'Contribuzione','Evasione e omissione contributiva'],
    ['INPS',20,'Contribuzione','Il DURC'],
    ['INPS',22,'Contribuzione','I contributi obbligatori e il rapporto di lavoro'],
    ['INPS',23,'Contribuzione','Il principio di automaticità delle prestazioni'],
    ['INPS',7,'Prestazioni','Il Fondo di garanzia per il TFR e i crediti di lavoro'],
    ['INPS',10,'Prestazioni','Il congedo parentale'],
    ['INPS',16,'Prestazioni','La previdenza complementare'],
    ['INPS',17,'Prestazioni','La malattia: adempimenti e diritti'],
    ['INPS',19,'Prestazioni','I permessi della L. 104/1992'],
    ['INPS',9,'Adempimenti','Il modello UniLav'],
    // INAIL
    ['INAIL',1,'Obbligo, premi e adempimenti','La regolarità contributiva INAIL'],
    ['INAIL',2,'Obbligo, premi e adempimenti','Gli adempimenti per una nuova attività o una nuova sede'],
    ['INAIL',3,'Obbligo, premi e adempimenti','L\'autoliquidazione del premio'],
    ['INAIL',4,'Obbligo, premi e adempimenti','La denuncia di variazione tardiva od omessa'],
    ['INAIL',5,'Obbligo, premi e adempimenti','Le riduzioni del tasso di premio'],
    ['INAIL',6,'Obbligo, premi e adempimenti','La rateazione dei debiti non iscritti a ruolo'],
    ['INAIL',16,'Obbligo, premi e adempimenti','L\'obbligo assicurativo'],
    ['INAIL',23,'Obbligo, premi e adempimenti','La tariffa ordinaria (D.I. 27/2/2019)'],
    ['INAIL',8,'Infortunio e malattia professionale','L\'infortunio sul lavoro'],
    ['INAIL',9,'Infortunio e malattia professionale','L\'infortunio in itinere'],
    ['INAIL',10,'Infortunio e malattia professionale','Rischio generico, specifico ed elettivo'],
    ['INAIL',11,'Infortunio e malattia professionale','La denuncia e la comunicazione d\'infortunio'],
    ['INAIL',12,'Infortunio e malattia professionale','La denuncia di malattia professionale'],
    ['INAIL',13,'Infortunio e malattia professionale','Malattie professionali tabellate e non tabellate'],
    ['INAIL',19,'Infortunio e malattia professionale','L\'occasione di lavoro e la causa violenta'],
    ['INAIL',20,'Infortunio e malattia professionale','Dolo e colpa del lavoratore nell\'infortunio'],
    ['INAIL',22,'Infortunio e malattia professionale','Infortunio e malattia professionale: le differenze'],
    ['INAIL',7,'Prestazioni e azioni','Le prestazioni economiche, sanitarie e sociosanitarie'],
    ['INAIL',14,'Prestazioni e azioni','I criteri per la costituzione della rendita'],
    ['INAIL',15,'Prestazioni e azioni','La rendita ai superstiti'],
    ['INAIL',17,'Prestazioni e azioni','L\'azione di rivalsa'],
    ['INAIL',18,'Prestazioni e azioni','L\'automaticità delle prestazioni INAIL'],
    ['INAIL',21,'Prestazioni e azioni','L\'indennità per inabilità temporanea assoluta'],
    // Tributario
    ['TRIB',1,'Lavoro dipendente','Gli elementi costitutivi del reddito di lavoro dipendente'],
    ['TRIB',2,'Lavoro dipendente','I soggetti che presentano il modello 730'],
    ['TRIB',3,'Lavoro dipendente','Gli oneri detraibili e deducibili'],
    ['TRIB',4,'Lavoro dipendente','Le detrazioni per familiari a carico e il limite di reddito'],
    ['TRIB',6,'Lavoro dipendente','La base imponibile del lavoratore dipendente'],
    ['TRIB',7,'Lavoro dipendente','La trasferta e la sua tassazione'],
    ['TRIB',10,'Lavoro dipendente','Le detrazioni per lavoro dipendente'],
    ['TRIB',11,'Lavoro dipendente','Il conguaglio fiscale'],
    ['TRIB',12,'Lavoro dipendente','I redditi assimilati a quelli di lavoro dipendente'],
    ['TRIB',15,'Lavoro dipendente','Il modello 770'],
    ['TRIB',9,'Parte generale e procedimento','Il principio di competenza e il principio di cassa'],
    ['TRIB',13,'Parte generale e procedimento','Il regime forfettario: i soggetti'],
    ['TRIB',14,'Parte generale e procedimento','La classificazione dei redditi'],
    ['TRIB',16,'Parte generale e procedimento','L\'autotutela'],
    ['TRIB',17,'Parte generale e procedimento','L\'interpello'],
    ['TRIB',18,'Parte generale e procedimento','L\'IRAP'],
    ['TRIB',19,'Parte generale e procedimento','Tributi, imposte, tasse e contributi'],
    ['TRIB',22,'Parte generale e procedimento','Il ravvedimento operoso'],
    ['TRIB',8,'Parte generale e procedimento','La cedolare secca'],
    ['TRIB',5,'Società e impresa','Le società di persone e di capitali ai fini fiscali'],
    ['TRIB',20,'Società e impresa','L\'impresa familiare'],
    ['TRIB',21,'Società e impresa','I tipi di società'],
    ['TRIB',23,'Società e impresa','Soci accomandatari e accomandanti nella s.a.s.'],
    // Ragioneria
    ['RAG',1,'Costo del lavoro in contabilità','L\'indennità di malattia in bilancio'],
    ['RAG',2,'Costo del lavoro in contabilità','L\'indennità di maternità in bilancio'],
    ['RAG',5,'Costo del lavoro in contabilità','I contributi a carico del datore nello stato patrimoniale e nel conto economico'],
    ['RAG',6,'Costo del lavoro in contabilità','Le voci del costo dei lavoratori'],
    ['RAG',7,'Costo del lavoro in contabilità','Il TFR liquidato'],
    ['RAG',9,'Costo del lavoro in contabilità','Il conto «Personale c/retribuzioni»'],
    ['RAG',17,'Costo del lavoro in contabilità','I compensi ad amministratori e sindaci'],
    ['RAG',21,'Costo del lavoro in contabilità','Il conto «Salari e stipendi»'],
    ['RAG',22,'Costo del lavoro in contabilità','Il fondo TFR e la sua movimentazione'],
    ['RAG',23,'Costo del lavoro in contabilità','La quota annua di TFR maturata'],
    ['RAG',3,'Bilancio','Il bene strumentale'],
    ['RAG',4,'Bilancio','I costi pluriennali'],
    ['RAG',8,'Bilancio','Immobilizzazioni materiali e immateriali'],
    ['RAG',10,'Bilancio','Il bilancio d\'esercizio e la sua composizione'],
    ['RAG',11,'Bilancio','Il capitale netto'],
    ['RAG',13,'Bilancio','Lo stato patrimoniale'],
    ['RAG',14,'Bilancio','Il conto economico'],
    ['RAG',16,'Bilancio','Il piano dei conti'],
    ['RAG',19,'Bilancio','Competenza e cassa'],
    ['RAG',12,'Contabilità e documenti','Gli elementi essenziali della fattura'],
    ['RAG',15,'Contabilità e documenti','Gli obblighi contabili di arti e professioni'],
    ['RAG',18,'Contabilità e documenti','Contabilità ordinaria e semplificata'],
    ['RAG',20,'Contabilità e documenti','La fattura elettronica'],
    // Privato, pubblico, penale
    ['PPP',1,'Pubblico e costituzionale','L\'iter legislativo'],
    ['PPP',2,'Pubblico e costituzionale','La formazione del Governo'],
    ['PPP',3,'Pubblico e costituzionale','Il decreto-legge'],
    ['PPP',4,'Pubblico e costituzionale','Il decreto legislativo delegato'],
    ['PPP',5,'Pubblico e costituzionale','Il referendum abrogativo e il referendum costituzionale'],
    ['PPP',6,'Pubblico e costituzionale','La Corte costituzionale'],
    ['PPP',7,'Pubblico e costituzionale','La legge statale e la legge regionale nel sistema delle fonti'],
    ['PPP',8,'Pubblico e costituzionale','Il Presidente della Repubblica'],
    ['PPP',9,'Privato','Capacità giuridica e capacità di agire'],
    ['PPP',10,'Privato','Il contratto e i suoi elementi essenziali'],
    ['PPP',11,'Privato','Proprietà e possesso'],
    ['PPP',12,'Privato','Gli elementi accidentali del contratto'],
    ['PPP',13,'Privato','Nullità e annullabilità'],
    ['PPP',14,'Privato','L\'obbligazione e l\'adempimento'],
    ['PPP',15,'Privato','I diritti reali di godimento e di garanzia'],
    ['PPP',16,'Privato','Rescissione e risoluzione del contratto'],
    ['PPP',17,'Privato','La nozione di imprenditore'],
    ['PPP',18,'Privato','Impresa e società'],
    ['PPP',19,'Penale','Il principio di legalità'],
    ['PPP',20,'Penale','La personalità della responsabilità penale'],
    ['PPP',21,'Penale','L\'irretroattività della legge penale'],
    ['PPP',22,'Penale','Dolo e colpa'],
    ['PPP',23,'Penale','Delitti e contravvenzioni'],
    // Deontologia
    ['DEO',1,'Ordinamento','L\'oggetto della professione di consulente del lavoro'],
    ['DEO',2,'Ordinamento','La riserva di legge sugli adempimenti di lavoro'],
    ['DEO',3,'Ordinamento','Le incompatibilità'],
    ['DEO',4,'Ordinamento','L\'albo e le condizioni per l\'iscrizione'],
    ['DEO',5,'Ordinamento','Il DUI (documento unico di iscrizione)'],
    ['DEO',6,'Ordinamento','L\'azione disciplinare e le pene disciplinari'],
    ['DEO',22,'Ordinamento','La potestà disciplinare del Consiglio provinciale'],
    ['DEO',23,'Ordinamento','La formazione continua obbligatoria'],
    ['DEO',7,'Codice deontologico','Le finalità del codice deontologico'],
    ['DEO',8,'Codice deontologico','I destinatari del codice deontologico'],
    ['DEO',9,'Codice deontologico','Dignità, decoro e professionalità specifica'],
    ['DEO',10,'Codice deontologico','Lealtà, correttezza, fedeltà e indipendenza'],
    ['DEO',11,'Codice deontologico','Segreto professionale e riservatezza'],
    ['DEO',12,'Codice deontologico','Competenza e informativa al cliente'],
    ['DEO',13,'Codice deontologico','Polizza assicurativa e pubblicità'],
    ['DEO',14,'Codice deontologico','I rapporti con altri professionisti e con i colleghi'],
    ['DEO',15,'Codice deontologico','La concorrenza sleale'],
    ['DEO',16,'Codice deontologico','I rapporti con i colleghi'],
    ['DEO',17,'Codice deontologico','I rapporti con praticanti, collaboratori e dipendenti'],
    ['DEO',18,'Codice deontologico','L\'accettazione dell\'incarico'],
    ['DEO',19,'Codice deontologico','L\'esecuzione dell\'incarico'],
    ['DEO',20,'Codice deontologico','La restituzione dei documenti del cliente dopo la cessazione dell\'incarico'],
    ['DEO',21,'Codice deontologico','La pubblicità informativa']
  ];

  /* ---------- Integrazioni 2026: domande plausibili, NON ufficiali ---------- */
  var EXTRA = [
    ['DL','X1','Integrazione 2026','Il regime delle tutele contro il licenziamento illegittimo'],
    ['DL','X2','Integrazione 2026','Il potere disciplinare: procedimento e garanzie dell\'art. 7 dello Statuto dei lavoratori'],
    ['DL','X3','Integrazione 2026','Il «salario giusto» nel D.L. 62/2026'],
    ['DL','X4','Integrazione 2026','La trasparenza retributiva nel D.Lgs. 96/2026'],
    ['DL','X5','Integrazione 2026','Le dimissioni per fatti concludenti'],
    ['INPS','X1','Integrazione 2026','Le novità 2026 sulla NASpI e sul congedo parentale'],
    ['TRIB','X1','Integrazione 2026','Il sostituto d\'imposta: chi è, soggetti, obblighi'],
    ['PPP','X1','Integrazione 2026','La parità di genere nel lavoro: art. 37 Cost. e Codice delle pari opportunità'],
    ['DEO','X1','Integrazione 2026','L\'esercizio abusivo della professione e i limiti dei CED'],
    ['DEO','X2','Integrazione 2026','L\'asseverazione Asse.Co.']
  ];
  var APPROF_EXTRA = {
    'DL-X1': [[SIMONE_DL, '§ 9.2-9.4, pp. 242-244']],
    'DL-X2': [['Statuto Lavoratori 300_1970.pdf', 'art. 7'], [SIMONE_DL, '«potere disciplinare»'], ['NORMA_Codice_civile_lavoro.md', 'art. 2106 c.c.']],
    'DL-X3': [['P1_Cap01_DL62_2026.docx', ''], ['P1/P1_Mappe_DL62_DLgs96.md', '']],
    'DL-X4': [['P1_Cap02_DLgs96_2026.docx', ''], ['P1/P1_Mappe_DL62_DLgs96.md', '']],
    'DL-X5': [['P1_Cap08_Schede_tradizionali.docx', 'scheda 5'], [SIMONE_DL, 'pp. 234-235']],
    'INPS-X1': [['ORALE/ORALE_02_Commissione_2026_temi.md', 'sezione Gallotta'], ['P1/P1_Cap09_Genitorialita.md', '']],
    'TRIB-X1': [['P2/P2_Mod04_Sostituto_imposta_scalette_v1.1.md', 'scalette A-D']],
    'PPP-X1': [['198_2006.pdf', ''], ['P1_Cap02_DLgs96_2026.docx', ''], ['91_2026.pdf', '']],
    'DEO-X1': [['ORALE/ORALE_02_Commissione_2026_temi.md', '«Abusivismo e CED»'], ['ORALE/ORALE_Simone_Deontologia_OCR.md', '«attività riservate»']],
    'DEO-X2': [['ORALE/ORALE_Simone_Deontologia_OCR.md', '«ASSE.CO»'], ['ORALE/ORALE_02_Commissione_2026_temi.md', 'attualità della professione']]
  };

  /* ---------- Altra sede, sessione 2022: elenco ufficiale «Argomenti della prova orale» ----------
     Fonte: ispettorato.gov.it/files/2022/11/DOMANDE-DEFINITIVE-DA-PUBBLICARE-2022.pdf (135 argomenti;
     sede non indicata nel documento, NON è Ancona: ad Ancona nel 2022 le domande erano 39 per materia).
     Formulazione sintetica degli argomenti; normativa al 2022 (verificare le novità successive).
     Ultimo campo: id della domanda equivalente, di cui si riusano risposta modello e approfondimenti. */
  var S22 = [
    // Diritto del lavoro (30)
    ['DL',1,'Vigilanza e illeciti','La costituzione e la documentazione del rapporto di lavoro subordinato; la sanzione per il lavoro sommerso (art. 3 D.L. 12/2002)',null],
    ['DL',2,'Contratti flessibili','I diritti di precedenza e la loro incidenza sugli incentivi alle assunzioni',null],
    ['DL',3,'Contratti flessibili','L\'assunzione in prova: disciplina di legge e di contratto','DL-3a'],
    ['DL',4,'Contratti flessibili','L\'assunzione a tempo determinato','DL-1b'],
    ['DL',5,'Contratti flessibili','L\'assunzione a tempo parziale','DL-2b'],
    ['DL',6,'Tutele specifiche','L\'assunzione di lavoratori stranieri, comunitari e non comunitari',null],
    ['DL',7,'Contratti flessibili','Il contratto di apprendistato','DL-21a'],
    ['DL',8,'Contratti flessibili','Il tirocinio formativo',null],
    ['DL',9,'Contratti flessibili','Il lavoro intermittente','DL-3b'],
    ['DL',10,'Contratti flessibili','Il lavoro occasionale: PrestO e Libretto famiglia',null],
    ['DL',11,'Qualificazione','Lavoro autonomo professionale e occasionale; le collaborazioni coordinate e continuative',null],
    ['DL',12,'Contratti flessibili','La somministrazione di lavoro','DL-10a'],
    ['DL',13,'Vigilanza e illeciti','Appalto e distacco genuini e non genuini (artt. 29-30 D.Lgs. 276/2003)',null],
    ['DL',14,'Qualificazione','La certificazione dei contratti di lavoro','DL-5a'],
    ['DL',15,'Svolgimento e retribuzione','Le mansioni del lavoratore e i limiti allo ius variandi','DL-13a'],
    ['DL',16,'Svolgimento e retribuzione','L\'orario di lavoro e i tempi di riposo','DL-16a'],
    ['DL',17,'Tutele specifiche','La tutela dei minori sul lavoro','DL-12a'],
    ['DL',18,'Tutele specifiche','La tutela della maternità e della paternità',null],
    ['DL',19,'Tutele specifiche','Le misure per l\'occupazione dei lavoratori disabili','DL-10b'],
    ['DL',20,'Svolgimento e retribuzione','La retribuzione, il prospetto paga e la prescrizione dei diritti del lavoratore',null],
    ['DL',21,'Svolgimento e retribuzione','La sospensione del rapporto per impossibilità temporanea del lavoratore',null],
    ['DL',22,'Svolgimento e retribuzione','La sospensione del rapporto per impossibilità temporanea del datore di lavoro',null],
    ['DL',23,'Cessazione del rapporto','Le dimissioni e la risoluzione consensuale',null],
    ['DL',24,'Cessazione del rapporto','Il licenziamento disciplinare e l\'art. 7 dello Statuto dei lavoratori',null],
    ['DL',25,'Cessazione del rapporto','Il licenziamento per giustificato motivo oggettivo e la procedura dell\'art. 7 L. 604/1966',null],
    ['DL',26,'Cessazione del rapporto','Il licenziamento illegittimo: tutela obbligatoria, tutela reale, tutele crescenti','DL-X1'],
    ['DL',27,'Cessazione del rapporto','Le conseguenze dei vizi procedurali nei licenziamenti individuali e collettivi',null],
    ['DL',28,'Rinunce e conciliazioni','Rinunce, transazioni e conciliazione delle vertenze','DL-13b'],
    ['DL',29,'Rinunce e conciliazioni','Il tentativo di conciliazione facoltativo, obbligatorio e incentivato',null],
    ['DL',30,'Vigilanza e illeciti','Le ispezioni del lavoro, il ruolo del consulente e la diffida',null],
    // Legislazione sociale INPS (15)
    ['INPS',1,'Prestazioni','Il sistema previdenziale: le gestioni e le principali pensioni',null],
    ['INPS',2,'Prestazioni','I requisiti pensionistici diversi da quelli ordinari',null],
    ['INPS',3,'Prestazioni','I sistemi di calcolo della pensione',null],
    ['INPS',4,'Adempimenti','Il contenzioso amministrativo nei confronti dell\'INPS',null],
    ['INPS',5,'Adempimenti','Il sistema UniEmens',null],
    ['INPS',6,'Prestazioni','L\'indennità di malattia','INPS-17'],
    ['INPS',7,'Ammortizzatori e sostegno al reddito','La NASpI','INPS-6'],
    ['INPS',8,'Ammortizzatori e sostegno al reddito','La cassa integrazione guadagni ordinaria','INPS-1'],
    ['INPS',9,'Ammortizzatori e sostegno al reddito','La cassa integrazione guadagni straordinaria','INPS-2'],
    ['INPS',10,'Adempimenti','La Comunicazione Unica per la nascita dell\'impresa',null],
    ['INPS',11,'Contribuzione','Le modalità di pagamento dei contributi INPS per lavoratori subordinati e autonomi',null],
    ['INPS',12,'Contribuzione','Il principio di automaticità delle prestazioni: subordinati e autonomi','INPS-23'],
    ['INPS',13,'Prestazioni','L\'assegno unico e universale',null],
    ['INPS',14,'Ammortizzatori e sostegno al reddito','I fondi di solidarietà bilaterali e il Fondo di integrazione salariale (FIS)',null],
    ['INPS',15,'Contribuzione','La dilazione del pagamento dei contributi previdenziali','INPS-13'],
    // Legislazione sociale INAIL (15)
    ['INAIL',1,'Infortunio e malattia professionale','L\'infortunio in itinere (art. 12 D.Lgs. 38/2000)','INAIL-9'],
    ['INAIL',2,'Prestazioni e azioni','L\'automaticità delle prestazioni INAIL e le sue eccezioni','INAIL-18'],
    ['INAIL',3,'Infortunio e malattia professionale','Gli elementi dell\'infortunio: lesione, causa violenta, occasione di lavoro','INAIL-19'],
    ['INAIL',4,'Prestazioni e azioni','L\'indennizzo INAIL: danno biologico e danno patrimoniale',null],
    ['INAIL',5,'Obbligo, premi e adempimenti','Il contenzioso amministrativo INAIL (artt. 27-28 delle Modalità di applicazione delle tariffe)',null],
    ['INAIL',6,'Obbligo, premi e adempimenti','Il DURC','INAIL-1'],
    ['INAIL',7,'Obbligo, premi e adempimenti','La costituzione del rapporto assicurativo e gli adempimenti del datore di lavoro','INAIL-2'],
    ['INAIL',8,'Obbligo, premi e adempimenti','La tariffa dei premi: gestioni tariffarie, inquadramento e classificazione','INAIL-23'],
    ['INAIL',9,'Obbligo, premi e adempimenti','L\'oscillazione del tasso di premio','INAIL-5'],
    ['INAIL',10,'Obbligo, premi e adempimenti','Il calcolo e il pagamento del premio','INAIL-3'],
    ['INAIL',11,'Obbligo, premi e adempimenti','Il sostegno alla prevenzione: incentivi ISI e oscillazione per prevenzione (OT23)',null],
    ['INAIL',12,'Obbligo, premi e adempimenti','L\'obbligo assicurativo: requisiti soggettivi e oggettivi','INAIL-16'],
    ['INAIL',13,'Infortunio e malattia professionale','Infortunio sul lavoro e malattia professionale: definizioni e differenze','INAIL-22'],
    ['INAIL',14,'Infortunio e malattia professionale','La malattia professionale: sistema tabellare e sistema misto','INAIL-13'],
    ['INAIL',15,'Infortunio e malattia professionale','Gli adempimenti del datore e del lavoratore dopo un infortunio o una malattia professionale',null],
    // Diritto tributario (20)
    ['TRIB',1,'Parte generale e procedimento','Imposte e tasse: definizione e differenze','TRIB-19'],
    ['TRIB',2,'Lavoro dipendente','La ritenuta alla fonte: nozione e tipologie',null],
    ['TRIB',3,'Parte generale e procedimento','L\'IRPEF: nozione, soggetti passivi e base imponibile',null],
    ['TRIB',4,'Parte generale e procedimento','L\'IRAP: nozione, soggetti, base imponibile e costo del personale','TRIB-18'],
    ['TRIB',5,'Parte generale e procedimento','Le agevolazioni e semplificazioni IVA per i piccoli contribuenti',null],
    ['TRIB',6,'Lavoro dipendente','Le addizionali regionale e comunale all\'IRPEF: base imponibile e versamento',null],
    ['TRIB',7,'Parte generale e procedimento','Il ravvedimento operoso','TRIB-22'],
    ['TRIB',8,'Parte generale e procedimento','Il reddito professionale: base imponibile e deducibilità delle spese',null],
    ['TRIB',9,'Parte generale e procedimento','I redditi da lavoro autonomo occasionale: definizione, tassazione e obblighi',null],
    ['TRIB',10,'Parte generale e procedimento','La dichiarazione dei redditi (ex Modello Unico): soggetti obbligati',null],
    ['TRIB',11,'Lavoro dipendente','La Certificazione Unica e gli obblighi del sostituto d\'imposta','TRIB-X1'],
    ['TRIB',12,'Parte generale e procedimento','La compensazione in F24: verticale, orizzontale e limiti',null],
    ['TRIB',13,'Lavoro dipendente','La tassazione separata dei redditi di lavoro dipendente diversi dal TFR',null],
    ['TRIB',14,'Lavoro dipendente','Il trattamento di fine rapporto: natura, formazione e tassazione',null],
    ['TRIB',15,'Lavoro dipendente','Gli oneri detraibili e deducibili delle persone fisiche','TRIB-3'],
    ['TRIB',16,'Lavoro dipendente','Le detrazioni per familiari a carico','TRIB-4'],
    ['TRIB',17,'Lavoro dipendente','I fringe benefit: valore convenzionale e tassazione',null],
    ['TRIB',18,'Lavoro dipendente','Il regime fiscale di vitto, mensa, prestazioni e indennità sostitutive',null],
    ['TRIB',19,'Lavoro dipendente','Trasferta, trasfertismo e trasferimento: regime fiscale delle indennità','TRIB-7'],
    ['TRIB',20,'Lavoro dipendente','Il welfare aziendale nel reddito di lavoro dipendente',null],
    // Elementi di ragioneria (10)
    ['RAG',1,'Contabilità e documenti','Azienda, ditta, insegna e marchio',null],
    ['RAG',2,'Contabilità e documenti','I libri contabili obbligatori; contabilità ordinaria e semplificata','RAG-18'],
    ['RAG',3,'Costo del lavoro in contabilità','La rilevazione contabile del costo del personale',null],
    ['RAG',4,'Bilancio','Il bilancio civilistico e fiscale: stato patrimoniale e conto economico','RAG-10'],
    ['RAG',5,'Bilancio','L\'ammortamento',null],
    ['RAG',6,'Contabilità e documenti','Fatturazione elettronica e corrispettivi telematici: soggetti obbligati ed esclusi','RAG-20'],
    ['RAG',7,'Bilancio','Le scritture di assestamento: ratei e risconti',null],
    ['RAG',8,'Bilancio','L\'inventario e la rilevazione contabile dell\'ammortamento',null],
    ['RAG',9,'Bilancio','Plusvalenze e minusvalenze: definizione e rilevazione',null],
    ['RAG',10,'Costo del lavoro in contabilità','La denuncia salari INAIL: le rilevazioni contabili',null],
    // Diritto privato, pubblico e penale (30)
    ['PPP',1,'Privato','Persona fisica e persona giuridica',null],
    ['PPP',2,'Privato','Capacità giuridica e capacità d\'agire','PPP-9'],
    ['PPP',3,'Privato','La proprietà e i modi di acquisto','PPP-11'],
    ['PPP',4,'Privato','Possesso e detenzione',null],
    ['PPP',5,'Privato','L\'obbligazione: fonti ed elementi',null],
    ['PPP',6,'Privato','L\'obbligazione: adempimento e inadempimento','PPP-14'],
    ['PPP',7,'Privato','Il contratto: elementi essenziali','PPP-10'],
    ['PPP',8,'Privato','Il contratto: nullità, annullabilità, risoluzione',null],
    ['PPP',9,'Privato','L\'imprenditore: piccolo, agricolo, commerciale','PPP-17'],
    ['PPP',10,'Privato','Società di persone e società di capitali',null],
    ['PPP',11,'Pubblico e costituzionale','I principi fondamentali della Costituzione',null],
    ['PPP',12,'Pubblico e costituzionale','Il Parlamento',null],
    ['PPP',13,'Pubblico e costituzionale','Il Governo','PPP-2'],
    ['PPP',14,'Pubblico e costituzionale','Il Presidente della Repubblica','PPP-8'],
    ['PPP',15,'Pubblico e costituzionale','Il procedimento di formazione delle leggi','PPP-1'],
    ['PPP',16,'Pubblico e costituzionale','La Corte costituzionale','PPP-6'],
    ['PPP',17,'Pubblico e costituzionale','Gli istituti di democrazia diretta',null],
    ['PPP',18,'Pubblico e costituzionale','Gli enti pubblici territoriali',null],
    ['PPP',19,'Pubblico e costituzionale','I principi costituzionali della Pubblica Amministrazione',null],
    ['PPP',20,'Pubblico e costituzionale','La magistratura ordinaria e amministrativa',null],
    ['PPP',21,'Penale','La riserva di legge in materia penale e l\'art. 25 della Costituzione','PPP-19'],
    ['PPP',22,'Penale','L\'irretroattività della norma penale','PPP-21'],
    ['PPP',23,'Penale','L\'elemento oggettivo del reato: delitti e contravvenzioni','PPP-23'],
    ['PPP',24,'Penale','L\'elemento soggettivo: dolo, colpa, preterintenzione','PPP-22'],
    ['PPP',25,'Penale','La responsabilità penale personale e l\'art. 27 della Costituzione','PPP-20'],
    ['PPP',26,'Penale','Denuncia, esposto e querela',null],
    ['PPP',27,'Penale','Omicidio colposo e lesioni colpose per violazione delle norme di sicurezza sul lavoro',null],
    ['PPP',28,'Penale','La responsabilità penale del datore per l\'omesso versamento delle ritenute previdenziali e assistenziali',null],
    ['PPP',29,'Penale','L\'oblazione nelle contravvenzioni',null],
    ['PPP',30,'Penale','Le conseguenze civili del reato',null],
    // Ordinamento e deontologia (15)
    ['DEO',1,'Codice deontologico','Il dovere di fedeltà e la trascuratezza degli interessi del cliente (artt. 6 e 32 Codice)',null],
    ['DEO',2,'Codice deontologico','I rapporti con altri professionisti e l\'incarico congiunto (artt. 12 e 28 Codice)','DEO-14'],
    ['DEO',3,'Codice deontologico','L\'accettazione dell\'incarico (artt. 27 e 29 Codice)','DEO-18'],
    ['DEO',4,'Codice deontologico','La cessazione dell\'incarico e la documentazione del cliente (artt. 31 e 33 Codice)','DEO-20'],
    ['DEO',5,'Codice deontologico','La concorrenza leale e sleale (art. 14 Codice)','DEO-15'],
    ['DEO',6,'Codice deontologico','Il consulente del lavoro asseveratore (art. 38 Codice)','DEO-X2'],
    ['DEO',7,'Codice deontologico','La pubblicità informativa e l\'uso dei social (art. 35 Codice)','DEO-21'],
    ['DEO',8,'Codice deontologico','I doveri generali del consulente del lavoro (artt. 3-11 Codice)',null],
    ['DEO',9,'Codice deontologico','La responsabilità patrimoniale (art. 11 Codice)','DEO-13'],
    ['DEO',10,'Codice deontologico','Il segreto professionale (art. 8 Codice e art. 6 L. 12/1979)','DEO-11'],
    ['DEO',11,'Ordinamento','Le sanzioni disciplinari (artt. 27-31 L. 12/1979)','DEO-6'],
    ['DEO',12,'Ordinamento','L\'esercizio della professione (art. 1 L. 12/1979; art. 30 Codice)',null],
    ['DEO',13,'Codice deontologico','Il dovere di competenza e l\'obbligo di formazione (art. 9 Codice)',null],
    ['DEO',14,'Codice deontologico','La partecipazione a società e le collaborazioni con imprese di servizi (art. 20 Codice)',null],
    ['DEO',15,'Codice deontologico','Il consulente del lavoro nel rapporto di lavoro subordinato (art. 36 Codice)',null]
  ];

  /* ---------- Risposte modello (lotto 1, 30/10/2026) ----------
     punti: [testo, [parole chiave per il riscontro automatico]]
     Le parole chiave vanno scritte senza accenti, in minuscolo. */
  var COST = 'Costituzione (testi Senato e Corte cost., verificati il 30/10/2026)';
  var RISPOSTE = {

    'PPP-1': {
      sintesi: 'Il procedimento legislativo ordinario passa per iniziativa, esame e approvazione dello stesso testo da parte di entrambe le Camere, promulgazione del Presidente della Repubblica e pubblicazione (artt. 70-74 Cost.).',
      punti: [
        ['La funzione legislativa è esercitata collettivamente dalle due Camere (art. 70): bicameralismo paritario, lo stesso testo deve essere approvato da entrambe.', ['due camere','entrambe','bicameral']],
        ['Iniziativa (art. 71): Governo, ciascun parlamentare, organi ed enti previsti da legge costituzionale (es. CNEL, Consigli regionali), popolo con almeno 50.000 elettori.', ['iniziativa','50.000','cinquantamila','50 mila']],
        ['Esame (art. 72): in commissione e poi in Assemblea, articolo per articolo e votazione finale; possibili procedure abbreviate e approvazione in commissione, salvo la riserva di Assemblea (leggi costituzionali, elettorali, di delega, di ratifica, di bilancio).', ['commissione','articolo per articolo','riserva','assemblea']],
        ['Promulgazione entro un mese (art. 73); il Presidente può chiedere con messaggio motivato una nuova deliberazione, ma se le Camere riapprovano deve promulgare (art. 74).', ['promulga','rinvio','messaggio motivato','nuova deliberazione']],
        ['Pubblicazione subito dopo la promulgazione ed entrata in vigore il quindicesimo giorno successivo, salvo diverso termine (art. 73).', ['pubblica','gazzetta','quindicesimo','15','vacatio']]
      ],
      aggancio: 'Molte norme del lavoro non seguono l\'iter ordinario «puro»: arrivano con decreto-legge poi convertito (D.L. 62/2026 → L. 112/2026) o con decreto legislativo su delega (D.Lgs. 96/2026).',
      fonti: COST + ', artt. 70-74.'
    },

    'PPP-2': {
      sintesi: 'Il Governo è formato dal Presidente del Consiglio e dai ministri; nasce dalla nomina del Presidente della Repubblica e deve ottenere la fiducia di entrambe le Camere (artt. 92-94 Cost.).',
      punti: [
        ['Prassi: consultazioni del Presidente della Repubblica e conferimento dell\'incarico (la Costituzione non le disciplina).', ['consultazion','incarico']],
        ['Il Presidente della Repubblica nomina il Presidente del Consiglio e, su sua proposta, i ministri (art. 92); insieme formano il Consiglio dei ministri.', ['nomina','su proposta','consiglio dei ministri']],
        ['Giuramento nelle mani del Presidente della Repubblica prima di assumere le funzioni (art. 93).', ['giuramento','giura']],
        ['Fiducia di entrambe le Camere entro 10 giorni dalla formazione, con mozione motivata votata per appello nominale (art. 94).', ['fiducia','dieci giorni','10 giorni','appello nominale','mozione']],
        ['Mozione di sfiducia firmata da almeno un decimo dei componenti, discussa non prima di 3 giorni; il voto contrario su una proposta del Governo non obbliga alle dimissioni (art. 94).', ['sfiducia','un decimo','tre giorni','dimissioni']]
      ],
      aggancio: 'È il Consiglio dei ministri a deliberare decreti-legge e decreti legislativi: da lì escono quasi tutte le novità del lavoro 2025-2026.',
      fonti: COST + ', artt. 92-94.'
    },

    'PPP-3': {
      sintesi: 'Il decreto-legge è un atto provvisorio con forza di legge che il Governo adotta, sotto la propria responsabilità, in casi straordinari di necessità e urgenza; perde efficacia fin dall\'inizio se non è convertito in legge entro 60 giorni (art. 77 Cost.).',
      punti: [
        ['Presupposti: casi straordinari di necessità e urgenza, indicati nel preambolo; deliberato dal Consiglio dei ministri ed emanato dal Presidente della Repubblica (art. 77 Cost.; art. 15, c. 1, L. 400/1988).', ['necessita','urgenza','straordinar']],
        ['Presentato alle Camere il giorno stesso; le Camere, anche se sciolte, si riuniscono entro 5 giorni.', ['giorno stesso','cinque giorni','5 giorni']],
        ['Conversione entro 60 giorni dalla pubblicazione; se non convertito perde efficacia ex tunc; le Camere possono regolare con legge i rapporti sorti.', ['sessanta','60','conversione','ex tunc','dall\'inizio']],
        ['Limiti dell\'art. 15, c. 2, L. 400/1988: niente deleghe legislative, niente materie riservate all\'Assemblea, niente reiterazione di decreti non convertiti, niente ripristino di norme dichiarate illegittime.', ['reiter','rinnov','deleghe','400']],
        ['Contenuto specifico, omogeneo e corrispondente al titolo, con misure di immediata applicazione (art. 15, c. 3, L. 400/1988).', ['omogene','immediata applicazione','specifico']]
      ],
      aggancio: 'Esempio: D.L. 30/4/2026 n. 62, convertito con modificazioni dalla L. 25/6/2026 n. 112; l\'art. 7-bis sulla contrattazione di prossimità è stato inserito proprio in sede di conversione.',
      fonti: COST + ', art. 77; L. 400/1988, art. 15 (stampa Normattiva).'
    },

    'PPP-4': {
      sintesi: 'Il decreto legislativo è un atto con forza di legge adottato dal Governo su delega del Parlamento, che deve fissare principi e criteri direttivi, un tempo limitato e oggetti definiti (art. 76 Cost.).',
      punti: [
        ['Legge delega (art. 76): principi e criteri direttivi, tempo limitato, oggetti definiti; senza delega il Governo non può emanare decreti con valore di legge (art. 77, c. 1).', ['principi','criteri direttivi','tempo limitato','oggetti definiti']],
        ['La legge di delega è a riserva di Assemblea: non si approva in commissione (art. 72 Cost.).', ['riserva','assemblea']],
        ['Emanato dal Presidente della Repubblica con la denominazione «decreto legislativo»; testo trasmesso almeno 20 giorni prima della scadenza della delega (art. 14 L. 400/1988).', ['20 giorni','venti giorni','emana']],
        ['Se la delega supera i due anni, il Governo chiede il parere delle Camere sugli schemi (art. 14 L. 400/1988).', ['parere','due anni','commission']],
        ['Vizio tipico: eccesso di delega, che rende il decreto illegittimo per violazione dell\'art. 76; giudica la Corte costituzionale.', ['eccesso di delega','illegittim','corte costituzionale']]
      ],
      aggancio: 'Esempi: D.Lgs. 96/2026 (trasparenza retributiva, recepimento della dir. UE 2023/970); D.Lgs. 81/2015 e D.Lgs. 23/2015, attuativi della delega del Jobs Act (L. 183/2014). Differenza col decreto-legge: qui i confini li fissa prima il Parlamento.',
      fonti: COST + ', artt. 72, 76, 77; L. 400/1988, art. 14 (stampa Normattiva).'
    },

    'PPP-5': {
      sintesi: 'Il referendum abrogativo elimina in tutto o in parte una legge o un atto con valore di legge (art. 75 Cost.); il referendum costituzionale è eventuale e confermativo di una legge di revisione approvata senza i due terzi (art. 138 Cost.).',
      punti: [
        ['Abrogativo: richiesto da 500.000 elettori o 5 Consigli regionali.', ['500.000','cinquecentomila','cinque consigli','5 consigli']],
        ['Esclusi: leggi tributarie e di bilancio, amnistia e indulto, autorizzazione a ratificare trattati internazionali.', ['tributari','bilancio','amnistia','indulto','trattati']],
        ['Quorum: partecipazione della maggioranza degli aventi diritto; approvato con la maggioranza dei voti validi.', ['quorum','maggioranza degli aventi','aventi diritto']],
        ['Revisione costituzionale: due deliberazioni per Camera a distanza di almeno 3 mesi, maggioranza assoluta nella seconda (art. 138).', ['tre mesi','3 mesi','maggioranza assoluta','due deliberazioni']],
        ['Referendum costituzionale entro 3 mesi dalla pubblicazione su richiesta di un quinto dei membri di una Camera, 500.000 elettori o 5 Consigli regionali; nessun quorum; escluso se approvata con i due terzi.', ['un quinto','due terzi','senza quorum','nessun quorum','confermativ']]
      ],
      aggancio: 'Il limite delle leggi tributarie riguarda materie che trattiamo ogni giorno (IRPEF e addizionali); i referendum in materia di lavoro sono invece ammessi.',
      fonti: COST + ', artt. 75 e 138. Controllo della Cassazione e giudizio di ammissibilità della Corte (L. 352/1970; L. cost. 1/1953): estremi DA VERIFICARE.'
    },

    'PPP-6': {
      sintesi: 'La Corte costituzionale è l\'organo di garanzia che giudica la legittimità delle leggi e degli atti con forza di legge, i conflitti di attribuzione e le accuse al Presidente della Repubblica (art. 134 Cost.).',
      punti: [
        ['Competenze (art. 134): legittimità costituzionale di leggi e atti con forza di legge di Stato e Regioni; conflitti di attribuzione tra poteri dello Stato, tra Stato e Regioni e tra Regioni; accuse al Presidente della Repubblica.', ['legittimita','conflitti di attribuzione','accuse']],
        ['Composizione (art. 135): 15 giudici, un terzo nominato dal Presidente della Repubblica, un terzo dal Parlamento in seduta comune, un terzo dalle supreme magistrature ordinaria e amministrative.', ['15','quindici','un terzo','seduta comune','magistrature']],
        ['Mandato di 9 anni dal giuramento, non rinnovabile; il Presidente della Corte è eletto per un triennio (art. 135).', ['nove anni','9 anni','non rinnovabil','non possono essere nuovamente']],
        ['Effetti (art. 136): la norma dichiarata illegittima cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione; le decisioni non sono impugnabili (art. 137).', ['giorno successivo','cessa','non impugnabil','nessuna impugnazione']],
        ['Accesso: in via incidentale, quando un giudice solleva la questione nel corso di un giudizio, e in via principale, con il ricorso dello Stato o della Regione entro 60 giorni (art. 127).', ['incidental','principale','giudice a quo','60 giorni']]
      ],
      aggancio: 'Nel lavoro: Corte cost. 194/2018 e 150/2020 sull\'indennità del D.Lgs. 23/2015 (Simone DL p. 236); Corte cost. 156/2025 sulle RSA (P1_Cap08).',
      fonti: COST + ', artt. 127, 134-137.'
    },

    'PPP-7': {
      sintesi: 'Legge statale e legge regionale sono entrambe fonti primarie: il rapporto non è gerarchico ma di competenza, secondo il riparto per materie dell\'art. 117 Cost.',
      punti: [
        ['Entrambe rispettano la Costituzione, i vincoli dell\'ordinamento UE e gli obblighi internazionali (art. 117, c. 1).', ['costituzione','comunitari','europe','internazional']],
        ['Potestà esclusiva dello Stato (c. 2): tra le altre, ordinamento civile e penale (lett. l) e previdenza sociale (lett. o).', ['esclusiva','ordinamento civile','previdenza sociale']],
        ['Potestà concorrente (c. 3): tra le altre, tutela e sicurezza del lavoro, previdenza complementare e integrativa; lo Stato fissa i principi fondamentali.', ['concorrente','principi fondamentali','sicurezza del lavoro','complementare']],
        ['Potestà residuale delle Regioni (c. 4): ogni materia non riservata allo Stato.', ['residual','non espressamente riservata']],
        ['Controllo (art. 127): il Governo impugna la legge regionale, la Regione impugna la legge statale lesiva, davanti alla Corte costituzionale entro 60 giorni dalla pubblicazione.', ['impugna','60 giorni','sessanta']]
      ],
      aggancio: 'Il rapporto di lavoro privato rientra nell\'«ordinamento civile», quindi legislazione statale; la previdenza obbligatoria è statale. Esempio fiscale: l\'addizionale regionale IRPEF è fissata dalla Regione entro i limiti della legge statale (art. 50 D.Lgs. 446/1997).',
      fonti: COST + ', artt. 117 e 127.'
    },

    'PPP-8': {
      sintesi: 'Il Presidente della Repubblica è il capo dello Stato e rappresenta l\'unità nazionale; è eletto dal Parlamento in seduta comune per sette anni ed è un organo di garanzia (artt. 83-90 Cost.).',
      punti: [
        ['Elezione (art. 83): Parlamento in seduta comune integrato da 3 delegati per Regione (1 per la Valle d\'Aosta); due terzi nei primi tre scrutini, poi maggioranza assoluta.', ['seduta comune','delegati','due terzi','maggioranza assoluta']],
        ['Requisiti e durata: cittadino con almeno 50 anni (art. 84); mandato di 7 anni (art. 85).', ['50 anni','cinquanta','sette anni','7 anni']],
        ['Attribuzioni (art. 87): messaggi alle Camere, indizione delle elezioni, promulgazione delle leggi, emanazione di decreti e regolamenti, ratifica dei trattati, comando delle Forze armate, presidenza del CSM, grazia.', ['promulga','emana','csm','grazia','forze armate']],
        ['Controfirma (art. 89): nessun atto è valido senza la controfirma dei ministri proponenti, che ne assumono la responsabilità.', ['controfirma']],
        ['Irresponsabilità (art. 90): risponde solo per alto tradimento e attentato alla Costituzione, messo in stato d\'accusa dal Parlamento in seduta comune.', ['alto tradimento','attentato','stato d\'accusa']]
      ],
      aggancio: 'Emana decreti-legge e decreti legislativi e promulga le leggi del lavoro: il potere di rinvio (art. 74) è il suo controllo sulle leggi.',
      fonti: COST + ', artt. 74, 83-90.'
    },

    'PPP-19': {
      sintesi: 'Il principio di legalità penale vuole che nessuno sia punito se non in forza di una legge entrata in vigore prima del fatto commesso (art. 25, c. 2, Cost.) e per un fatto espressamente previsto come reato, con le pene da essa stabilite (art. 1 c.p.).',
      punti: [
        ['Riserva di legge: solo la legge o un atto con forza di legge possono creare reati e pene; non le fonti secondarie.', ['riserva di legge','solo la legge']],
        ['Tassatività e determinatezza: il fatto vietato va descritto con precisione.', ['tassativ','determinatezza','precis']],
        ['Divieto di analogia in materia penale (art. 14 preleggi, da riscontrare sul codice).', ['analogia']],
        ['Irretroattività della norma penale sfavorevole (art. 25 Cost.; art. 2 c.p.).', ['irretroattiv','prima del fatto']]
      ],
      aggancio: 'Per questo la depenalizzazione di molti reati del lavoro (D.Lgs. 8/2016) è passata per un decreto legislativo; e la sanzione dell\'art. 41, c. 2, D.Lgs. 198/2006 è oggi amministrativa (P1_Cap02).',
      fonti: COST + ', art. 25. Art. 1 c.p. e art. 14 preleggi: da riscontrare sul codice.'
    },

    'PPP-20': {
      sintesi: 'La responsabilità penale è personale (art. 27, c. 1, Cost.): si risponde solo di un fatto proprio e colpevole, mai per fatto altrui.',
      punti: [
        ['Fatto proprio e colpevole: fondamento del principio di colpevolezza, letto dalla Corte costituzionale anche come esclusione della responsabilità oggettiva pura.', ['fatto proprio','colpevol','personale']],
        ['Presunzione di non colpevolezza fino alla condanna definitiva (art. 27, c. 2).', ['non colpevol','condanna definitiva','presunzione']],
        ['Pene non contrarie al senso di umanità e tese alla rieducazione (art. 27, c. 3); divieto della pena di morte (c. 4).', ['rieducazion','umanita','pena di morte']],
        ['Coscienza e volontà della condotta sempre necessarie (art. 42, c. 1, c.p.).', ['coscienza e volonta']]
      ],
      aggancio: 'Nell\'impresa si individua il responsabile persona fisica: nella sicurezza il D.Lgs. 81/2008 distribuisce obblighi tra datore di lavoro, dirigente e preposto.',
      fonti: COST + ', art. 27; c.p., art. 42 (Brocardi).'
    },

    'PPP-21': {
      sintesi: 'La legge penale non è retroattiva: nessuno può essere punito per un fatto che, quando è stato commesso, non era reato (art. 25 Cost.; art. 2, c. 1, c.p.); retroagisce invece la legge più favorevole.',
      punti: [
        ['Abolitio criminis (art. 2, c. 2): se il fatto non è più reato cessano l\'esecuzione e gli effetti penali della condanna, anche definitiva.', ['abolitio','non costituisce piu','cessa']],
        ['Se la nuova legge prevede solo la pena pecuniaria, la detentiva inflitta si converte (art. 2, c. 3).', ['pecuniaria','converte']],
        ['Successione di leggi: si applica quella più favorevole al reo, salvo sentenza irrevocabile (art. 2, c. 4).', ['piu favorevole','favor rei','irrevocabil']],
        ['Leggi eccezionali e temporanee: si applicano ai fatti commessi durante la loro vigenza (art. 2, c. 5); regole anche per i decreti-legge non convertiti (c. 6, inciso da Corte cost. 51/1985).', ['eccezional','temporane','decreti-legge','non convertit']],
        ['Differenza: l\'irretroattività penale ha rango costituzionale, quella delle altre leggi è un principio generale derogabile (art. 11 preleggi, da riscontrare).', ['rango costituzionale','derogabil','preleggi']]
      ],
      aggancio: 'Le depenalizzazioni nel lavoro operano retroattivamente come abolitio criminis, con la trasformazione in illecito amministrativo.',
      fonti: COST + ', art. 25; c.p., art. 2 (Brocardi). Art. 11 preleggi: da riscontrare.'
    },

    'PPP-22': {
      sintesi: 'Dolo e colpa sono le forme dell\'elemento psicologico del reato (art. 43 c.p.): nel dolo l\'evento è previsto e voluto, nella colpa non è voluto e si verifica per negligenza, imprudenza, imperizia o inosservanza di norme.',
      punti: [
        ['Dolo: evento dannoso o pericoloso previsto e voluto come conseguenza della propria azione od omissione.', ['previsto e voluto','preveduto e voluto','intenzion']],
        ['Colpa: evento non voluto, anche se previsto; generica (negligenza, imprudenza, imperizia) o specifica (inosservanza di leggi, regolamenti, ordini, discipline).', ['negligenza','imprudenza','imperizia','inosservanza']],
        ['Preterintenzione: dall\'azione deriva un evento più grave di quello voluto.', ['preterintenzion','piu grave']],
        ['Delitti punibili solo per dolo, salvo i casi di colpa o preterintenzione espressamente previsti (art. 42, c. 2); contravvenzioni punibili per dolo o colpa (c. 4).', ['contravvenzion','espressamente previst']]
      ],
      aggancio: 'L\'infortunio causato dalla violazione di norme di prevenzione è il caso tipico di colpa specifica del datore di lavoro (lesioni od omicidio colposi); le contravvenzioni del D.Lgs. 81/2008 si puniscono anche per colpa.',
      fonti: 'c.p., artt. 42-43 (Brocardi, 30/10/2026).'
    },

    'PPP-23': {
      sintesi: 'I reati si distinguono in delitti e contravvenzioni secondo la specie della pena prevista (art. 39 c.p.), non secondo la gravità astratta.',
      punti: [
        ['Pene principali dei delitti (art. 17 c.p.): ergastolo, reclusione, multa.', ['ergastolo','reclusione','multa']],
        ['Pene principali delle contravvenzioni: arresto e ammenda.', ['arresto','ammenda']],
        ['Elemento soggettivo: delitti di regola dolosi, contravvenzioni punibili per dolo o colpa (art. 42 c.p.).', ['dolo','colpa']],
        ['Estinzione delle contravvenzioni di lavoro e sicurezza con la prescrizione obbligatoria: adempimento e pagamento di un quarto del massimo dell\'ammenda (D.Lgs. 758/1994, artt. 20-24).', ['prescrizione obbligatoria','758','un quarto','quarto del massimo']]
      ],
      aggancio: 'Gran parte dei reati del lavoro e della sicurezza sono contravvenzioni; l\'esercizio abusivo della professione (art. 348 c.p.) è invece un delitto.',
      fonti: 'c.p., artt. 17, 39, 42 (Brocardi, 30/10/2026); D.Lgs. 758/1994 (libreria).'
    },

    'INAIL-3': {
      sintesi: 'Con l\'autoliquidazione il datore di lavoro calcola e versa da sé il premio INAIL: entro il 16 febbraio paga la regolazione dell\'anno precedente e la rata anticipata dell\'anno in corso.',
      punti: [
        ['Il primo premio si paga in via anticipata sulle retribuzioni presunte indicate nella denuncia di esercizio, salvo conguaglio (regolazione) sulle retribuzioni effettive.', ['presunt','denuncia di esercizio','regolazione']],
        ['Entro il 16 febbraio: rata anticipata per l\'anno in corso e regolazione per l\'anno precedente, calcolate sulle retribuzioni effettive dell\'anno precedente; si versa la somma algebrica positiva.', ['16 febbraio','rata','regolazione','somma algebrica']],
        ['Pagamento con F24, in unica soluzione o in quattro rate trimestrali del 25% (16/2, 16/5, 16/8, 16/11), con interessi sulle rate successive alla prima.', ['f24','quattro rate','25%','interessi']],
        ['Imponibile: retribuzione determinata secondo l\'art. 51 TUIR e l\'art. 29 del T.U. (D.P.R. 1124/1965), non inferiore ai minimali (contrattuale e giornaliero).', ['art. 51','minimal','retribuzione imponibile']],
        ['Premio = retribuzioni × tasso della voce di tariffa, eventualmente ridotto per oscillazione; per il 2026 applicate in via provvisoria le nuove aliquote di oscillazione (D.L. 159/2025).', ['tasso','tariffa','oscillazion']]
      ],
      aggancio: 'È un adempimento tipico dello studio. In contabilità: acconto e conguaglio, con scrittura di assestamento al 31/12 per imputare il costo di competenza (Simone Ragioneria p. 1096).',
      fonti: 'Simone, Legislazione sociale 2026, pp. 341-344 (che riporta Guida all\'autoliquidazione INAIL 2025-2026); Simone, Ragioneria, p. 1096.'
    },

    'INAIL-5': {
      sintesi: 'Il tasso medio della voce di tariffa può essere ridotto per andamento infortunistico favorevole e per interventi di prevenzione (oscillazione del tasso, artt. 19-23 D.I. 27/2/2019).',
      punti: [
        ['Oscillazione per andamento infortunistico: dopo i primi due anni di attività, bonus o malus in base all\'indice di sinistrosità della PAT nel triennio (art. 19 D.I. 2019).', ['andamento infortunistico','sinistrosita','primi due anni','bonus']],
        ['Dal 1/1/2026 revisione delle aliquote di bonus; escluso chi negli ultimi due anni è stato condannato in via definitiva per gravi violazioni di sicurezza (art. 1, c. 1 e 4, D.L. 159/2025, conv. L. 198/2025).', ['159','condannat','2026']],
        ['Oscillazione per prevenzione (art. 23 D.I. 2019): spetta a chi è in regola con contributi (DURC) e sicurezza e ha fatto interventi migliorativi ulteriori rispetto agli obblighi; domanda telematica entro il 28 febbraio.', ['prevenzione','28 febbraio','durc','interventi migliorativ']],
        ['Misura: 8% nei primi due anni della PAT; poi 28%, 18%, 10% o 5% secondo i lavoratori-anno del triennio (fino a 10, fino a 50, fino a 200, oltre); si somma alla riduzione per andamento.', ['8%','28%','lavoratori-anno','lavoratori anno']],
        ['Riduzione percentuale dei premi per il 2026 (13,02%) solo per premi speciali raggi X e sostanze radioattive e per la gestione agricoltura (circ. INAIL 53/2025).', ['13,02','agricoltura']]
      ],
      aggancio: 'La domanda per prevenzione la presenta spesso il consulente del lavoro come intermediario: va pianificata documentando gli interventi dell\'anno precedente.',
      fonti: 'Simone, Legislazione sociale 2026, pp. 342-343 (riporta l\'istruzione operativa INAIL del 3/7/2025 e la circ. INAIL 53/2025; testi INAIL non letti).'
    },

    'TRIB-17': {
      sintesi: 'L\'interpello è l\'istanza con cui il contribuente chiede all\'Amministrazione finanziaria una risposta preventiva su un caso concreto e personale (art. 11 Statuto del contribuente, L. 212/2000, riformulato dal D.Lgs. 219/2023).',
      punti: [
        ['Tipi: interpretativo (obiettiva incertezza), qualificatorio, antiabuso, disapplicativo di norme antielusive, probatorio per specifici regimi.', ['interpretativ','qualificator','antiabuso','disapplicativ','probatori']],
        ['Risposta scritta e motivata entro 90 giorni (sospesi dal 1° al 31 agosto).', ['90 giorni','novanta']],
        ['Silenzio-assenso: senza risposta nel termine, la soluzione del contribuente si intende condivisa; atti difformi sono annullabili.', ['silenzio','assenso','annullabil']],
        ['La risposta vincola l\'Amministrazione solo per quella questione e quel richiedente; non è impugnabile.', ['vincola','non impugnabil','richiedente']],
        ['L\'istanza non sospende scadenze, termini di decadenza o di prescrizione.', ['non sospend','scadenze','decadenza']]
      ],
      aggancio: 'Per lo studio è lo strumento per avere certezza preventiva su casi dubbi, per esempio su un trattamento fiscale di welfare o di trasferta.',
      fonti: 'Simone, Diritto tributario, pp. 460-461 (ORALE_Simone_Diritto_Tributario_OCR).'
    },

    'TRIB-22': {
      sintesi: 'Il ravvedimento operoso consente di regolarizzare spontaneamente una violazione tributaria pagando tributo, interessi e una sanzione ridotta (art. 13 D.Lgs. 472/1997).',
      punti: [
        ['Spontaneità: per i tributi dell\'Agenzia delle Entrate è precluso solo dalla notifica di atti di liquidazione o di accertamento (comprese le comunicazioni di irregolarità ex artt. 36-bis D.P.R. 600/1973 e 54-bis D.P.R. 633/1972).', ['spontane','notific','accertamento','36-bis']],
        ['Pagamento contestuale di tributo, sanzione ridotta e interessi.', ['contestual','interessi','sanzione ridotta']],
        ['Esteso a tutti i tributi, inclusi i locali; ammesso anche per versamenti frazionati (art. 13-bis).', ['tutti i tributi','frazionat']],
        ['Non impedisce l\'inizio o la prosecuzione dei controlli.', ['controlli','ispezion']]
      ],
      aggancio: 'Per il sostituto d\'imposta il caso tipico è il ravvedimento delle ritenute versate in ritardo con F24; in ambito contributivo esiste un istituto analogo per le sanzioni civili (Simone LS pp. 444-445).',
      fonti: 'Simone, Diritto tributario, pp. 540-541. Le misure delle riduzioni (frazioni del minimo) nel testo vigente dopo il D.Lgs. 87/2024 non sono state lette: DA VERIFICARE sul codice prima di citarle.'
    },

    'DL-X1': {
      sintesi: 'Le tutele contro il licenziamento illegittimo dipendono dalla data di assunzione (prima o dal 7/3/2015), dalle dimensioni del datore e dal vizio accertato: art. 18 St. lav. e L. 604/1966 per i vecchi assunti, D.Lgs. 23/2015 per i nuovi.',
      punti: [
        ['Dimensioni (art. 18, c. 8-9, St. lav., valide anche per il D.Lgs. 23/2015): oltre 15 dipendenti nell\'unità produttiva o nel Comune (oltre 5 se agricolo), o oltre 60 in ogni caso.', ['15 dipendenti','quindici','60','unita produttiva']],
        ['Reintegra piena, a prescindere dalle dimensioni: licenziamento nullo, discriminatorio, orale; risarcimento non inferiore a 5 mensilità e contributi.', ['nullo','discriminator','orale','5 mensilita','reintegr']],
        ['Vecchi assunti, sopra soglia: reintegra attenuata (fino a 12 mensilità) se il fatto non sussiste o è punibile con sanzione conservativa; indennità 12-24 mensilità negli altri casi; 6-12 per vizi di motivazione o di procedura (art. 18, c. 4-7).', ['12 mensilita','24','conservativ','procedura','insussistenza']],
        ['Nuovi assunti (D.Lgs. 23/2015): reintegra attenuata solo se è dimostrata in giudizio l\'insussistenza del fatto materiale; negli altri casi indennità tra 6 e 36 mensilità.', ['fatto materiale','36','tutele crescenti','23/2015']],
        ['Corte cost. 194/2018 e 150/2020: illegittimo l\'automatismo legato solo all\'anzianità; il giudice valuta anche altri criteri. Piccoli datori: art. 8 L. 604/1966 (riassunzione o 2,5-6 mensilità) per i vecchi assunti; per i nuovi art. 9 D.Lgs. 23/2015, da riscontrare dopo Corte cost. 118/2025.', ['194','150','anzianita','604','2,5']]
      ],
      aggancio: 'Collegamento col potere disciplinare: la violazione della procedura dell\'art. 7 St. lav. nel licenziamento disciplinare, per i vecchi assunti sopra soglia, porta all\'indennità di 6-12 mensilità (art. 18, c. 6).',
      fonti: 'Simone, Diritto del lavoro 2026, §§ 9.2-9.4, pp. 242-244, e p. 236. Art. 9 D.Lgs. 23/2015 dopo Corte cost. 118/2025: DA VERIFICARE.'
    },
    /* ===== Lotto 2 — Ordinamento e deontologia (30/10/2026) ===== */

    'DEO-1': {
      sintesi: 'Il consulente del lavoro svolge, per conto di qualsiasi datore di lavoro, tutti gli adempimenti previsti dalle norme vigenti per l\'amministrazione del personale dipendente, oltre a funzioni affini, connesse e conseguenti (art. 2 L. 12/1979).',
      punti: [
        ['Oggetto tipico (art. 2): adempimenti di lavoro, previdenza e assistenza per l\'amministrazione del personale: buste paga, LUL, comunicazioni obbligatorie, denunce contributive e fiscali, calcolo del costo del lavoro e del TFR.', ['adempimenti','amministrazione del personale','buste paga','libro unico','comunicazioni obbligatorie']],
        ['Anche assistenza fiscale ai contribuenti senza redditi di lavoro autonomo o d\'impresa (730) e, su delega, ogni funzione affine, connessa e conseguente (art. 2).', ['730','assistenza fiscale','affine','connessa']],
        ['Responsabilità personale: il consulente si avvale solo di propri dipendenti per i compiti esecutivi (principio di professionalità specifica).', ['responsabilita personale','propri dipendenti','professionalita specifica']],
        ['Titolo riservato a chi è abilitato e iscritto all\'albo (art. 1, c. 3).', ['iscritto','albo','abilitat','titolo']],
        ['Altri ambiti: certificazione dei contratti presso le commissioni dei Consigli provinciali (art. 76 D.Lgs. 276/2003), assistenza in conciliazione, CTU, Asse.Co., funzioni nelle procedure della crisi d\'impresa (artt. 37-40 Codice deontologico).', ['certificazione','conciliazione','asseverazione','crisi']]
      ],
      aggancio: 'Il datore di lavoro resta comunque responsabile degli obblighi di legge anche se affida gli adempimenti al consulente (art. 7 L. 12/1979).',
      fonti: 'L. 12/1979, artt. 1, 2, 7 (art. 1 su Normattiva; altri articoli su consolidato Certifico vigente al 24/5/2022, fonte secondaria); Codice deontologico, artt. 37-40; Simone, Deontologia, pp. 1221, 1233-1234, 1238.'
    },

    'DEO-2': {
      sintesi: 'Gli adempimenti di lavoro, previdenza e assistenza dei dipendenti, se non li cura direttamente il datore di lavoro, possono essere affidati solo ai consulenti del lavoro iscritti all\'albo e a pochi altri professionisti indicati dalla legge (art. 1, c. 1, L. 12/1979).',
      punti: [
        ['Soggetti ammessi (art. 1, c. 1): consulenti del lavoro; avvocati, dottori commercialisti, ragionieri e periti commerciali, che devono darne comunicazione all\'Ispettorato del lavoro.', ['avvocati','commercialisti','ragionieri','comunicazione','ispettorato']],
        ['Imprese artigiane e piccole imprese, anche cooperative (c. 4): possono affidarli ai servizi o ai centri di assistenza delle associazioni di categoria, organizzabili tramite consulenti del lavoro.', ['artigian','piccole imprese','associazioni di categoria']],
        ['CED (c. 5): solo calcolo e stampa e attività strumentali e accessorie, sempre assistiti da iscritti agli albi; le imprese con oltre 250 addetti possono affidare le stesse operazioni a CED, anche propri o esterni, sempre assistiti da iscritti.', ['ced','calcolo e stampa','250','assistiti']],
        ['Restano riservate le attività valutative: inquadramento, scelta del CCNL, assunzioni e cessazioni, comunicazioni obbligatorie, tenuta del LUL (nota INL n. 4304 del 12/5/2025, riportata da dottrinalavoro.it).', ['valutativ','lul','4304','inquadramento']],
        ['Chi esercita senza titolo commette il delitto di esercizio abusivo della professione (art. 348 c.p.).', ['348','abusiv']]
      ],
      aggancio: 'La riserva tutela il lavoratore e l\'interesse pubblico alla regolarità contributiva: è anche il fondamento della lotta all\'abusivismo condotta da INL e Ordini (protocollo INL-CNO del 29/3/2023).',
      fonti: 'L. 12/1979, art. 1 (Normattiva); nota INL n. 4304/2025 riportata da dottrinalavoro.it (testo integrale della nota non letto); Simone, Deontologia, p. 1221.'
    },

    'DEO-3': {
      sintesi: 'L\'iscrizione all\'albo è incompatibile con alcuni rapporti di lavoro e professioni indicati dall\'art. 4 L. 12/1979.',
      punti: [
        ['Dipendenti di Stato, Regioni, Province, Comuni e altri enti pubblici.', ['pubblic','stato','comuni','enti pubblici']],
        ['Dipendenti di istituti di patronato o di associazioni sindacali dei lavoratori.', ['patronat','sindacal']],
        ['Esattori di tributi, notai, giornalisti professionisti.', ['esattor','notai','giornalist']],
        ['Conseguenza: cancellazione dall\'albo disposta dal Consiglio provinciale (art. 10); cessata l\'incompatibilità si può chiedere la reiscrizione, conservando l\'anzianità al netto dell\'interruzione.', ['cancellazione','reiscrizione','anzianita']],
        ['Il lavoro subordinato privato non è di per sé incompatibile: il Codice deontologico regola chi esercita la professione in un rapporto subordinato (artt. 4 e 36).', ['subordinat','privato','36']]
      ],
      aggancio: 'La ratio è evitare conflitti d\'interesse: chi controlla o rappresenta i lavoratori (enti pubblici, patronati, sindacati) non può gestire gli adempimenti dei datori di lavoro.',
      fonti: 'L. 12/1979, artt. 4 e 10 (consolidato Certifico al 24/5/2022, fonte secondaria); Codice deontologico, artt. 4 e 36; Simone, Deontologia, p. 1227.'
    },

    'DEO-4': {
      sintesi: 'L\'albo dei consulenti del lavoro è tenuto in ogni provincia dal Consiglio provinciale; l\'iscritto può esercitare in tutto il territorio nazionale (art. 8 L. 12/1979).',
      punti: [
        ['Albo provinciale, nessuna iscrizione contemporanea in più albi; riporta dati anagrafici, titolo, residenza, domicilio professionale, data d\'iscrizione ed estremi dell\'abilitazione; l\'anzianità decorre dall\'iscrizione (art. 8).', ['provincial','territorio nazionale','piu albi','anzianita']],
        ['Requisiti e documenti (art. 9): cittadinanza, abilitazione, titolo di studio, casellario e buona condotta, godimento dei diritti civili, contributo, domicilio professionale.', ['cittadinanza','abilitazione','diritti civili','casellario','domicilio']],
        ['Non può iscriversi chi ha riportato condanne che comportano la radiazione (art. 9).', ['condanna','radiazione']],
        ['Il Consiglio provinciale decide entro 2 mesi; il rigetto si pronuncia solo dopo aver sentito l\'interessato ed è impugnabile davanti al Consiglio nazionale entro 30 giorni.', ['due mesi','2 mesi','30 giorni','consiglio nazionale']],
        ['Gli albi territoriali formano l\'albo unico nazionale, pubblico, con i provvedimenti disciplinari (art. 3 D.P.R. 137/2012).', ['albo unico','nazionale','137']]
      ],
      aggancio: 'L\'iscrizione è ciò che dà il titolo e la riserva di attività: dopo l\'abilitazione, senza iscrizione non si può esercitare.',
      fonti: 'L. 12/1979, artt. 8-9 (consolidato Certifico, fonte secondaria); D.P.R. 137/2012, art. 3; Simone, Deontologia, pp. 1227, 1229-1230.'
    },

    'DEO-5': {
      sintesi: 'Il DUI, documento unico di identificazione, è il tesserino professionale del consulente del lavoro, predisposto dal Consiglio nazionale e rilasciato dal Consiglio provinciale.',
      punti: [
        ['È documento di riconoscimento valido nel territorio nazionale ai sensi dell\'art. 1, lett. c), D.P.R. 445/2000.', ['riconoscimento','445']],
        ['Contiene la firma digitale o il certificato di sottoscrizione con ruolo, per firmare digitalmente i documenti informatici.', ['firma digitale','ruolo']],
        ['È associato a una casella di posta elettronica certificata, nata con l\'obbligo di PEC per i professionisti (L. 2/2009).', ['pec','posta elettronica certificata']],
        ['Serve a identificare il consulente nei servizi telematici degli enti (INPS, INAIL, Ministero), dove opera su delega scritta dei datori di lavoro.', ['telematic','delega','inps']]
      ],
      aggancio: 'Con l\'informatizzazione degli adempimenti il consulente è diventato interlocutore privilegiato degli enti: l\'identificazione certa è il presupposto per operare per conto dei clienti.',
      fonti: 'Simone, Deontologia, p. 1235 (unica fonte letta: estremi del DUI da riscontrare sul sito del Consiglio nazionale).'
    },

    'DEO-6': {
      sintesi: 'Il consulente che commette abusi o mancanze nell\'esercizio della professione, o fatti non conformi alla dignità e al decoro, è sottoposto a procedimento disciplinare; le pene sono censura, sospensione fino a due anni e radiazione (artt. 26-27 L. 12/1979).',
      punti: [
        ['Avvio (art. 26): d\'ufficio, su richiesta del pubblico ministero o dell\'interessato; oggi istruisce e decide il Consiglio di disciplina territoriale (art. 8 D.P.R. 137/2012).', ['d\'ufficio','pubblico ministero','consiglio di disciplina']],
        ['Censura (art. 28): biasimo formale per mancanze di non lieve entità che non ledono decoro e dignità.', ['censura','biasimo']],
        ['Sospensione (art. 29): fino a 2 anni per abusi o mancanze gravi; di diritto in alcuni casi, tra cui l\'interdizione dai pubblici uffici fino a 3 anni e la morosità oltre 12 mesi nei contributi; almeno un mese se un censurato ricade nella violazione.', ['sospensione','due anni','2 anni','morosita']],
        ['Radiazione (artt. 30-31): per grave compromissione della reputazione e della dignità; di diritto per condanne per alcuni delitti; riammissione dopo almeno 6 anni e, se da condanna, con la riabilitazione (art. 38).', ['radiazione','di diritto','sei anni','6 anni','riabilitazione']],
        ['Proporzionalità e unicità: sanzione adeguata alla gravità e alla reiterazione; una sola sanzione per più infrazioni contestate nello stesso procedimento (artt. 44-45 Codice).', ['proporzion','unica','reiterazione']]
      ],
      aggancio: 'Il procedimento penale per lo stesso fatto comporta anche quello disciplinare, salvo proscioglimento perché il fatto non sussiste o l\'imputato non l\'ha commesso (art. 32 L. 12/1979).',
      fonti: 'L. 12/1979, artt. 26-32 e 38 (consolidato Certifico, fonte secondaria); D.P.R. 137/2012, art. 8; Codice deontologico, artt. 44-45; Simone, Deontologia, p. 1244.'
    },

    'DEO-22': {
      sintesi: 'La potestà disciplinare non è più esercitata dal Consiglio provinciale, che la aveva in origine (art. 14 L. 12/1979): dal D.P.R. 137/2012 la esercitano i Consigli di disciplina territoriali istituiti presso ogni Consiglio provinciale.',
      punti: [
        ['Consiglio di disciplina territoriale (art. 8 D.P.R. 137/2012): tanti componenti quanti i consiglieri provinciali, nominati dal Presidente del Tribunale su un elenco di nomi doppio proposto dal Consiglio provinciale; incompatibili con le cariche consiliari.', ['consiglio di disciplina','presidente del tribunale','elenco','doppio']],
        ['Decide in collegi di tre; lo presiede il componente con maggiore anzianità d\'iscrizione.', ['collegi di tre','anzianita']],
        ['Il Consiglio provinciale diventa parte: se apprende fatti disciplinarmente rilevanti li segnala subito al Consiglio di disciplina.', ['parte','segnala']],
        ['Procedimento: fascicolo, delibera motivata di avvio notificata all\'incolpato, conclusione entro 60 giorni prorogabili di altri 60, discussione con almeno 20 giorni di preavviso, diritto di difesa.', ['60 giorni','20 giorni','difesa','istruttori']],
        ['Impugnazioni: ricorso al Consiglio di disciplina nazionale entro 30 giorni dalla notifica; contro questa decisione, Tribunale di Roma entro 60 giorni.', ['30 giorni','nazionale','tribunale di roma']]
      ],
      aggancio: 'La separazione tra funzione amministrativa (Consiglio provinciale) e funzione disciplinare (Consiglio di disciplina) garantisce terzietà: la regola vale per tutti gli ordini professionali dopo la riforma del 2012.',
      fonti: 'D.P.R. 137/2012, art. 8 (copia unito.it); L. 12/1979, art. 14; Simone, Deontologia, pp. 1244-1246 (che riporta il Regolamento dei Consigli di disciplina, delibera CNO n. 44/2024, e il Regolamento delle procedure, delibera n. 60/2024 modificata dalla n. 122/2024: testi non letti).'
    },

    'DEO-23': {
      sintesi: 'La formazione continua è un obbligo giuridico e deontologico di tutti gli iscritti: ogni professionista deve curare l\'aggiornamento della propria competenza e la violazione è illecito disciplinare (art. 7 D.P.R. 137/2012).',
      punti: [
        ['Fonte: art. 7 D.P.R. 137/2012; art. 9, c. 4, Codice deontologico; Regolamento del Consiglio nazionale, delibera n. 117 del 24/10/2024, in vigore dal 1° gennaio 2025.', ['137','117','regolamento','2025']],
        ['Vale per tutti gli iscritti, anche se non esercitano e anche se sospesi; i crediti si riproporzionano in casi come malattia, infortunio, maternità o paternità.', ['tutti gli iscritti','sospesi','riproporzion','maternita']],
        ['Periodo di riferimento biennale con un numero minimo di crediti; corsi, seminari, convegni e formazione a distanza, gestiti sulla piattaforma del Consiglio nazionale (il numero dei crediti va letto sul Regolamento).', ['biennal','crediti','webinar','distanza','piattaforma']],
        ['Organizzatori: Consigli provinciali, Consiglio nazionale, università e altri soggetti autorizzati.', ['consigli provinciali','universita','autorizzat']],
        ['Il Consiglio provinciale segnala l\'inadempiente al Consiglio di disciplina per il procedimento.', ['illecito disciplinare','segnal','consiglio di disciplina']]
      ],
      aggancio: 'Nel lavoro le regole cambiano di continuo (nel 2026: D.L. 62/2026, D.Lgs. 96/2026, legge di bilancio): la formazione è la condizione per il dovere di competenza verso il cliente.',
      fonti: 'D.P.R. 137/2012, art. 7; Codice deontologico, art. 9; Simone, Deontologia, pp. 1235-1236. Numero minimo di crediti del biennio: DA VERIFICARE sul Regolamento CNO.'
    },

    'DEO-7': {
      sintesi: 'Il Codice deontologico (delibera del Consiglio nazionale n. 101 del 14/7/2021, modificata con delibera n. 49 del 21/3/2024) serve a tutelare la legalità e la dignità del lavoro e l\'affidamento della collettività e dei clienti nella professione.',
      punti: [
        ['Il consulente tutela in ogni sede la legalità e la dignità del lavoro, dato il rilievo costituzionale della professione; promuove i diritti dell\'uomo e il diritto al lavoro (art. 1).', ['legalita','dignita del lavoro','diritto al lavoro','costituzion']],
        ['Le norme deontologiche garantiscono affidamento della collettività e della clientela, correttezza, trasparenza, qualità della prestazione e il ruolo di sussidiarietà della professione (art. 1, c. 4).', ['affidamento','trasparenza','qualita','sussidiarieta']],
        ['Scopo dichiarato (art. 2): garantire gli interessi generali, tutelare l\'affidamento della clientela, assicurare decoro, dignità e rispetto della legalità.', ['interessi generali','decoro']],
        ['Le regole specifiche sono esemplificazioni: non limitano i principi generali (art. 46).', ['esemplificaz','principi generali']],
        ['Si applica anche alle condotte precedenti all\'entrata in vigore se più favorevole all\'incolpato, salvo sanzione definitiva (art. 47).', ['piu favorevol','entrata in vigore']]
      ],
      aggancio: 'La violazione del Codice è il presupposto del procedimento disciplinare (art. 44): il Codice è la «misura» del comportamento professionale.',
      fonti: 'Codice deontologico, artt. 1, 2, 44, 46, 47 (testo nel Simone pp. 1247-1257, riscontrato sulla copia pubblicata dall\'Ordine di Milano).'
    },

    'DEO-8': {
      sintesi: 'Il Codice deontologico si applica ai consulenti del lavoro e alle società tra professionisti iscritte all\'albo; i praticanti vi conformano la condotta per quanto compatibile (art. 2).',
      punti: [
        ['Consulenti del lavoro iscritti all\'albo, in forma individuale, associata o societaria (artt. 2-3).', ['iscritti','individuale','associat']],
        ['Società tra professionisti iscritte all\'albo (STP): rispondono anche in concorso con il professionista se la violazione dipende da loro direttive.', ['societa tra professionisti','stp']],
        ['Praticanti iscritti al registro, per quanto compatibili (art. 2, c. 3; art. 23).', ['praticant','per quanto compatibil']],
        ['Anche chi esercita in un rapporto di lavoro subordinato (art. 4): se gli si chiede una condotta contraria al Codice deve comunicare per iscritto il proprio dissenso (art. 36).', ['subordinat','dissenso','36']],
        ['Anche il consulente amministratore o socio di società che erogano servizi nel settore, per i fatti che non impedisce (art. 20).', ['amministratore','societa','20']]
      ],
      aggancio: 'Il Codice segue la persona in ogni forma di esercizio: non si può aggirarlo spostando l\'attività in una società di servizi.',
      fonti: 'Codice deontologico, artt. 2-4, 20, 23, 36; Simone, Deontologia, pp. 1238, 1243.'
    },

    'DEO-9': {
      sintesi: 'Il dovere di dignità e decoro impone di osservare probità, dignità e decoro in ogni contesto, non solo al lavoro, per salvaguardare la propria reputazione e l\'immagine della professione (art. 4 Codice).',
      punti: [
        ['Vale nell\'attività individuale, associata, societaria e nel lavoro subordinato, e in ogni contesto anche privato.', ['ogni contesto','probita','reputazione']],
        ['Professionalità specifica: il consulente risponde personalmente dei servizi resi e si avvale solo di propri dipendenti per i compiti esecutivi (art. 2 L. 12/1979).', ['professionalita specifica','personalmente','propri dipendenti']],
        ['L\'attività va resa sotto la propria direzione e responsabilità personale (art. 7, c. 3, Codice).', ['direzione','responsabilita personale']],
        ['Uso del titolo: l\'attività va esercitata indicando il titolo; usare titoli non conseguiti viola i doveri di decoro, lealtà e corretta informazione (art. 15).', ['titolo','non conseguit']]
      ],
      aggancio: 'Le mancanze contro dignità e decoro sono anche il presupposto generale della responsabilità disciplinare (art. 26 L. 12/1979).',
      fonti: 'Codice deontologico, artt. 4, 7, 15; L. 12/1979, artt. 2 e 26; Simone, Deontologia, pp. 1234, 1243.'
    },

    'DEO-10': {
      sintesi: 'Lealtà, correttezza, fedeltà e indipendenza sono doveri generali del Codice deontologico (artt. 5-7): regolano i rapporti con cliente, terzi, colleghi e istituzioni e garantiscono l\'autonomia di giudizio.',
      punti: [
        ['Lealtà e correttezza verso il cliente e i terzi coinvolti nel rapporto professionale, e verso colleghi e istituzioni di categoria (art. 5).', ['lealta','correttezza','terzi','colleghi']],
        ['Fedeltà: il consulente antepone gli interessi del cliente ai propri, nel rispetto della legge e del Codice (art. 6).', ['fedelta','anteporre','interessi del cliente']],
        ['Indipendenza: autonomia di giudizio tecnico e intellettuale, difesa da condizionamenti esterni (art. 7, c. 1).', ['indipendenza','autonomia','condizionament']],
        ['Diligenza: coscienza e diligenza, qualità della prestazione (art. 7, c. 2).', ['diligenza','qualita']],
        ['Limite della fedeltà: non si suggeriscono atti nulli, illeciti o fraudolenti e si rifiuta l\'incarico che concorre a un\'operazione illecita (art. 24).', ['illecit','fraudolent','rifiut']]
      ],
      aggancio: 'Esempio pratico: il cliente chiede di mascherare lavoro irregolare con un part-time fittizio; la fedeltà al cliente si ferma davanti alla legalità (artt. 1 e 24).',
      fonti: 'Codice deontologico, artt. 1, 5-7, 24.'
    },

    'DEO-11': {
      sintesi: 'Il consulente è tenuto al segreto professionale su tutti i dati e le informazioni del cliente, anche dopo la fine dell\'incarico (art. 6 L. 12/1979; art. 25 Codice), e deve garantire la riservatezza anche dei suoi collaboratori (art. 8 Codice).',
      punti: [
        ['Segreto su dati e informazioni forniti dal cliente o appresi per il mandato; permane anche a incarico concluso (art. 25).', ['segreto','permane','concluso']],
        ['Riservatezza: il consulente deve vigilare perché la mantengano anche dipendenti, soci, praticanti e chiunque operi nello studio (art. 8).', ['riservatezza','dipendenti','praticanti','vigilare']],
        ['Rilievo penale: rivelazione di segreto professionale (art. 622 c.p.); facoltà di astenersi dal testimoniare su quanto conosciuto per ragione della professione (art. 200 c.p.p.), come riporta il Simone.', ['622','200','testimon']],
        ['Privacy (Reg. UE 2016/679): il consulente è titolare del trattamento per i propri dati e clienti persone fisiche, responsabile quando tratta i dati dei dipendenti dei clienti su incarico (Garante, nota del 22/1/2019, riportata dal Simone).', ['titolare','responsabile','garante','gdpr','privacy']]
      ],
      aggancio: 'Il segreto riguarda anche i social e la pubblicità: la pubblicità informativa non deve violare il segreto professionale (art. 35).',
      fonti: 'L. 12/1979, art. 6 (consolidato Certifico, fonte secondaria); Codice deontologico, artt. 8, 25, 35; Simone, Deontologia, p. 1234.'
    },

    'DEO-12': {
      sintesi: 'Il dovere di competenza vieta di accettare incarichi che non si sanno svolgere e impone organizzazione e aggiornamento; il dovere di informativa impone di spiegare al cliente l\'incarico, il compenso e la polizza (artt. 9, 10, 27, 30 Codice).',
      punti: [
        ['Non accettare incarichi che si sa di non poter svolgere con la necessaria competenza (art. 9, c. 1).', ['non accettare','necessaria competenza']],
        ['Organizzazione adeguata e aggiornamento costante, secondo il Regolamento sulla formazione continua (art. 9).', ['organizzazione','aggiornament','formazione continua']],
        ['Informazione sull\'attività e sullo studio secondo correttezza e verità, entro la natura e i limiti dell\'obbligazione (art. 10).', ['verita','natura e i limiti']],
        ['Al cliente: oggetto, natura, compensi e polizza per iscritto (art. 27); elementi essenziali dell\'incarico spiegati con chiarezza (art. 30); preventivo con le voci di costo (art. 9 D.L. 1/2012, riportato dal Simone).', ['per iscritto','preventivo','compens','polizza']],
        ['Se la prestazione diventa troppo complessa, il consulente informa il cliente e chiede di essere sostituito o affiancato (art. 31, c. 4).', ['sostituito','affiancato']]
      ],
      aggancio: 'Competenza e informativa sono anche le basi della responsabilità civile verso il cliente e della polizza obbligatoria (art. 11).',
      fonti: 'Codice deontologico, artt. 9, 10, 11, 27, 30, 31; Simone, Deontologia, pp. 1236-1237.'
    },

    'DEO-13': {
      sintesi: 'Il consulente deve avere una polizza per i danni causati al cliente e comunicarne gli estremi (art. 11 Codice; art. 5 D.P.R. 137/2012); la pubblicità è ammessa con ogni mezzo, purché informativa, veritiera e corretta (art. 35 Codice; art. 4 D.P.R. 137/2012).',
      punti: [
        ['Polizza per i danni al cliente, comprese la custodia di documenti e valori (art. 11).', ['polizza','assicurazione','custodia']],
        ['Estremi, massimale e variazioni comunicati al cliente all\'assunzione dell\'incarico; esercitare senza copertura è illecito disciplinare.', ['massimale','illecito disciplinare','estremi']],
        ['Pubblicità informativa con ogni mezzo, anche social: attività, specializzazioni, titoli, struttura dello studio, compensi.', ['ogni mezzo','social','specializzazion']],
        ['Funzionale all\'oggetto, veritiera e corretta; non equivoca, ingannevole o denigratoria; rispetto del segreto; titolo e denominazione dello studio sempre indicati (art. 35).', ['veritiera','ingannevole','denigratoria','titolo']],
        ['La violazione è illecito disciplinare e rileva anche per il Codice del consumo (art. 4 D.P.R. 137/2012).', ['codice del consumo','206']]
      ],
      aggancio: 'Vietato aggirare le regole pubblicizzando lo studio tramite società commerciali o enti terzi (art. 35, c. 5).',
      fonti: 'Codice deontologico, artt. 11 e 35; D.P.R. 137/2012, artt. 4-5 (copia unito.it).'
    },

    'DEO-14': {
      sintesi: 'Nei rapporti con colleghi e altri professionisti il Codice chiede correttezza, riservatezza e il passaggio dall\'Ordine prima del conflitto; vieta di lavorare con soggetti non abilitati (artt. 12-13).',
      punti: [
        ['Divieto di accettare incarichi insieme a soggetti non abilitati per prestazioni riservate, o di favorirne l\'attività (art. 12).', ['non abilitat','riservat','favorir']],
        ['Prima di agire in giudizio contro un collega per fatti professionali, si interessa il Consiglio provinciale (art. 13, c. 1).', ['consiglio provinciale','giudizio','prima di']],
        ['Vietato registrare telefonate con un collega e divulgare la corrispondenza riservata; vietate espressioni sconvenienti od offensive (art. 13).', ['registrare','corrispondenza','offensiv']],
        ['Le stesse regole valgono con altri professionisti se i loro codici le prevedono in reciprocità (art. 13, c. 4).', ['reciprocita','altri professionisti']],
        ['Incarico congiunto: informazione reciproca, strategia condivisa, compensi concordati prima con il cliente (art. 28).', ['incarico congiunto','informati','compenso']]
      ],
      aggancio: 'Il divieto dell\'art. 12 è il versante deontologico della lotta all\'abusivismo: il consulente non può «coprire» un CED o un soggetto non abilitato.',
      fonti: 'Codice deontologico, artt. 12, 13, 28.'
    },

    'DEO-15': {
      sintesi: 'La concorrenza tra professionisti deve svolgersi secondo i principi dell\'ordinamento integrati dal Codice; l\'art. 14 elenca i comportamenti che possono costituire concorrenza sleale.',
      punti: [
        ['Diffondere notizie o giudizi idonei a screditare un professionista.', ['discredito','screditar','denigra']],
        ['Compiere atti diretti soltanto a danneggiare l\'attività di un altro professionista.', ['pregiudizio','danneggiar']],
        ['Usare segni distintivi dello studio che creano confusione con un altro professionista.', ['segni distintivi','confusione']],
        ['Sottrarre i clienti del collega sospeso o impedito che si sta sostituendo.', ['sostituire','sospeso','distrazione']],
        ['Vantare parentele o influenze presso le istituzioni per trarne utilità.', ['vanto','influenza','istituzioni']]
      ],
      aggancio: 'Il consulente sospeso che continua a lavorare fa concorrenza sleale: deve farsi sostituire e non può accettare incarichi (art. 24, c. 3 e 5; Simone p. 1244).',
      fonti: 'Codice deontologico, artt. 14, 16, 24; Simone, Deontologia, p. 1244.'
    },

    'DEO-16': {
      sintesi: 'I rapporti con i colleghi si basano su lealtà e correttezza (art. 5) e su regole precise per il subentro, la sostituzione e l\'incarico congiunto (artt. 13, 16, 17, 27, 28).',
      punti: [
        ['Prima del contenzioso con un collega, passaggio dal Consiglio provinciale; niente registrazioni né divulgazione di corrispondenza riservata (art. 13).', ['consiglio provinciale','registra','riservat']],
        ['Subentro: il nuovo consulente comunica subito la propria nomina al collega sostituito (art. 17); non accetta incarichi della stessa natura da un cliente del collega senza informarlo e verifica che il cliente abbia receduto (art. 27, c. 3).', ['subentr','informare','recedut','nomina']],
        ['Il consulente sostituito collabora con il subentrante perché il cliente non subisca pregiudizio (art. 27, c. 4).', ['collabora','subentrante','pregiudizio']],
        ['Niente controlli su clienti di un collega senza che questo sia stato preavvisato dal cliente (art. 27, c. 5).', ['controlli','preavvisat']],
        ['Sostituzione del collega deceduto, sospeso o impedito: particolare diligenza verso eredi, clienti e collaboratori e comunicazione al Consiglio provinciale (art. 16).', ['deceduto','sostituzione','eredi']]
      ],
      aggancio: 'Sono le regole che contano di più nella pratica quotidiana di uno studio, per esempio quando un cliente cambia consulente a metà anno.',
      fonti: 'Codice deontologico, artt. 5, 13, 16, 17, 27, 28.'
    },

    'DEO-17': {
      sintesi: 'Verso praticanti, collaboratori e dipendenti il consulente ha doveri di formazione, trasparenza, correttezza ed equo compenso (art. 22 Codice).',
      punti: [
        ['Al praticante: addestramento teorico e pratico, comprese le regole deontologiche; partecipazione ai corsi per l\'esame (art. 22, c. 1-2).', ['addestramento','regole deontologiche','corsi']],
        ['Rapporto chiaro e trasparente, opportunamente scritto con il patto formativo; attestazione veritiera della pratica (art. 22, c. 3-4).', ['patto formativo','veridicita','trasparen']],
        ['Rimborso spese forfettario obbligatorio dopo i primi sei mesi di tirocinio (art. 22, c. 5).', ['rimborso','sei mesi','6 mesi']],
        ['Dipendenti e collaboratori: comportamento corretto, idonee condizioni di lavoro, formazione, equo compenso (art. 22, c. 6-8).', ['equo compenso','condizioni di lavoro','collaborator']],
        ['Tirocinio: 18 mesi, affidatario con almeno 5 anni d\'iscrizione, di regola non più di 3 praticanti (art. 6 D.P.R. 137/2012).', ['18 mesi','cinque anni','5 anni','tre praticanti']]
      ],
      aggancio: 'Il praticante osserva gli stessi doveri deontologici, per quanto compatibili (art. 23): anche lui risponde disciplinarmente.',
      fonti: 'Codice deontologico, artt. 22-23; D.P.R. 137/2012, art. 6; Simone, Deontologia, pp. 1223-1224.'
    },

    'DEO-18': {
      sintesi: 'L\'incarico si conferisce con le modalità di legge, specificando per iscritto oggetto, natura, compensi ed estremi della polizza (art. 27 Codice).',
      punti: [
        ['Forma scritta con oggetto, natura, compensi e polizza; l\'incarico verbale va confermato per iscritto, anche per le modifiche (art. 27, c. 1-2).', ['per iscritto','oggetto','compensi','polizza','conferma']],
        ['Prima di accettare: identità di chi conferisce l\'incarico e del titolare effettivo (art. 27, c. 6).', ['identita','titolare effettivo']],
        ['Cliente già assistito da un collega: informarlo e verificare il recesso dal precedente rapporto (art. 27, c. 3).', ['collega','recesso']],
        ['Rifiutare l\'incarico se l\'attività può concorrere a un\'operazione illecita (art. 24, c. 4) o in conflitto di interessi (art. 26); accettarlo solo se si ha la competenza (art. 9).', ['illecit','conflitto di interessi','competenza']],
        ['Compenso concordato liberamente (art. 2233 c.c.), senza tariffe minime; nei rapporti soggetti alla L. 49/2023 deve essere equo; preventivi opportunamente scritti (art. 29).', ['2233','equo compenso','49/2023','preventiv']]
      ],
      aggancio: 'La lettera d\'incarico è anche la tutela del consulente: delimita la responsabilità e prova il compenso.',
      fonti: 'Codice deontologico, artt. 9, 24, 26, 27, 29.'
    },

    'DEO-19': {
      sintesi: 'Nell\'esecuzione dell\'incarico il consulente usa la diligenza e la perizia richieste dalle norme del rapporto professionale e informa con chiarezza il cliente (art. 30 Codice).',
      punti: [
        ['Diligenza e perizia richieste dalle norme che regolano il rapporto, nel luogo e nel tempo in cui si svolge (art. 30, c. 1).', ['diligenza','perizia']],
        ['Informare il cliente con semplicità e chiarezza sugli elementi essenziali, perché sia consapevole della prestazione (art. 30, c. 2).', ['informa','chiarezza','consapevol']],
        ['Rettificare errori, inesattezze od omissioni, a proprio carico se imputabili (art. 30).', ['rettific','errori','omission']],
        ['Non consigliare azioni inutilmente gravose né atti nulli, illeciti o fraudolenti (art. 24, c. 2); la trascuratezza intenzionale degli interessi del cliente è illecito disciplinare (art. 32).', ['inutilmente gravos','trascuratezza']],
        ['Acconti e rendiconto: può chiedere acconti proporzionati e deve consegnare, su richiesta, la nota dettagliata di spese e acconti (art. 34).', ['acconti','rendiconto','nota dettagliata']]
      ],
      aggancio: 'Esempio: un errore in un F24 o in un UniLav va corretto subito, con ravvedimento se serve, informando il cliente; se l\'errore è suo, il costo è del consulente (art. 30).',
      fonti: 'Codice deontologico, artt. 24, 30, 32, 34.'
    },

    'DEO-20': {
      sintesi: 'Quando il cliente lo chiede, il consulente deve restituirgli senza indugio i documenti relativi all\'incarico; può trattenerne solo una copia, e solo per il compenso o per tutelarsi (art. 33 Codice).',
      punti: [
        ['Restituzione senza indugio dei documenti su richiesta del cliente (art. 33, c. 1).', ['restitu','senza indugio']],
        ['Copia trattenibile anche senza consenso solo per liquidare il compenso, fino al saldo, o per tutelare la propria posizione (art. 33, c. 2).', ['copia','saldo','tutela']],
        ['Cessazione: avvisare tempestivamente e interrompere con un preavviso adeguato, senza pregiudizio per il cliente (art. 31, c. 3).', ['preavviso','pregiudizio','cessazione']],
        ['Collaborazione con il collega subentrante (art. 27, c. 4) e segreto che continua dopo l\'incarico (art. 25, c. 2).', ['subentrante','segreto']],
        ['Prima di agire in giudizio contro il cliente, il consulente rinuncia all\'incarico (art. 31, c. 5).', ['rinunci','giudizio']]
      ],
      aggancio: 'Il mancato pagamento non autorizza a trattenere gli originali del cliente: si trattiene al più una copia, e solo fino al saldo.',
      fonti: 'Codice deontologico, artt. 25, 27, 31, 33.'
    },

    'DEO-21': {
      sintesi: 'Il consulente può farsi pubblicità con ogni mezzo, anche sui social, purché sia informativa: su attività, specializzazioni, titoli, struttura dello studio e compensi, funzionale all\'oggetto, veritiera e corretta, rispettosa del segreto e mai equivoca, ingannevole o denigratoria (art. 4 D.P.R. 137/2012; art. 35 Codice deontologico).',
      punti: [
        ['Fondamento: il D.L. 223/2006, conv. L. 248/2006 (art. 2, c. 1, lett. b), ha abrogato i divieti di pubblicità informativa; oggi la regola è l\'art. 4, c. 1, D.P.R. 137/2012, ripresa dall\'art. 35, c. 1, del Codice.', ['248/2006','223/2006','bersani','137/2012','abroga']],
        ['Oggetto ammesso: attività, specializzazioni, titoli attinenti alla professione, struttura dello studio, compensi richiesti; titoli e specializzazioni vanno indicati e comunicati per trasparenza verso l\'utenza (art. 1, c. 152, L. 124/2017).', ['specializzazion','titoli','struttura','compensi','124/2017']],
        ['Limiti, anche su mass media e social network: funzionale all\'oggetto, veritiera e corretta, rispettosa del segreto professionale, non equivoca, ingannevole o denigratoria; completa di titolo professionale e denominazione dello studio; trasparenza verificata dall\'Ordine (art. 35, c. 2-4).', ['social','veritiera','segreto','ingannevol','denigrator','denominazione']],
        ['Vietato aggirare le regole associando, anche indirettamente, la propria immagine a società commerciali o enti terzi; vale anche per il consulente che amministra società di servizi (art. 35, c. 5-6, e art. 20). Con gli organi di informazione: equilibrio e misura (art. 10, c. 4).', ['societa commercial','enti terzi','elud','aggira','media','equilibrio']],
        ['Conseguenze: la violazione dei limiti è illecito disciplinare e insieme violazione del Codice del consumo (D.Lgs. 206/2005) e della disciplina della pubblicità ingannevole (D.Lgs. 145/2007) (art. 4, c. 3, D.P.R. 137/2012); usare titoli non conseguiti è rilevante anche ex art. 15, c. 3, Codice.', ['illecito disciplinare','206/2005','145/2007','consumo','titoli non conseguiti']]
      ],
      aggancio: 'Esempio: un post su LinkedIn con titolo, studio, servizi e compenso per cedolino è lecito; non lo è raccontare il caso di un cliente riconoscibile (segreto, art. 25), screditare un collega o vantare entrature presso l\'Ispettorato (concorrenza sleale, art. 14, c. 2, lett. a ed e). Tema trattato dall\'Ordine di Ancona in un convegno su social media e deontologia (2022).',
      fonti: 'D.P.R. 7/8/2012 n. 137 (G.U. 14/8/2012 n. 189), art. 4, su copia del testo pubblicata da unipg.it e Simone p. 1237; D.L. 4/7/2006 n. 223 conv. L. 4/8/2006 n. 248, art. 2, c. 1, lett. b (allegato alla legge di conversione, cliclavoro.gov.it); L. 124/2017, art. 1, c. 152, come riportato da Simone p. 1237 ed edotto.com (testo non letto in originale); Codice deontologico, artt. 10, 14, 15, 20, 25, 35 (Simone pp. 1248-1254); convegno Ordine di Ancona da edotto.com, 4/5/2022. DA VERIFICARE su Normattiva: testo vigente dell\'art. 4 D.P.R. 137/2012 (non consultabile da qui; nessuna modifica nota).'
    },

    'DEO-X1': {
      sintesi: 'Esercita abusivamente chi svolge senza titolo gli adempimenti riservati dall\'art. 1 L. 12/1979; i CED possono solo calcolare, stampare e svolgere attività accessorie, sempre assistiti da un professionista abilitato.',
      punti: [
        ['Riserva (art. 1, c. 1): consulenti del lavoro e, con comunicazione all\'Ispettorato, avvocati, commercialisti, ragionieri e periti commerciali.', ['riserva','comunicazione','avvocati']],
        ['CED (art. 1, c. 5): calcolo e stampa e attività strumentali e accessorie, assistiti da iscritti agli albi.', ['calcolo e stampa','assistit','ced']],
        ['Restano riservate le attività valutative: CCNL e inquadramento, assunzioni e cessazioni, comunicazioni obbligatorie, LUL, assistenza nelle ispezioni (nota INL n. 4304 del 12/5/2025, riportata da dottrinalavoro.it).', ['valutativ','lul','4304','inquadramento']],
        ['Sanzioni: delitto di esercizio abusivo (art. 348 c.p., reclusione da 6 mesi a 3 anni e multa da 10.000 a 50.000 euro secondo la stessa fonte); l\'ispettore può anche usare la disposizione (art. 14 D.Lgs. 124/2004).', ['348','reclusione','disposizione','124']],
        ['Deontologia: il consulente non può lavorare con soggetti non abilitati (art. 12 Codice) e collabora con l\'Ordine contro l\'abusivismo (art. 18).', ['non abilitat','abusivismo','18']]
      ],
      aggancio: 'È il terreno d\'incontro tra il Presidente (vigilanza INL) e i tre commissari dell\'Ordine: protocollo INL-Consiglio nazionale del 29/3/2023 per mappare i CED.',
      fonti: 'L. 12/1979, art. 1 (Normattiva); nota INL n. 4304/2025 e art. 348 c.p. come riportati da dottrinalavoro.it (testi non letti in originale); Codice deontologico, artt. 12 e 18.'
    },

    'DEO-X2': {
      sintesi: 'L\'Asse.Co. è l\'asseverazione di conformità dei rapporti di lavoro: un sistema terzo, indipendente e qualificato con cui un consulente accreditato verifica la regolarità retributiva e contributiva di un datore di lavoro (Protocollo Ministero del lavoro-Consiglio nazionale del 15/1/2014, rinnovato il 4/3/2016).',
      punti: [
        ['Regolarità retributiva (rispetto del CCNL applicato) e contributiva (denunce e versamenti) verificata sui 12 mesi precedenti; il certificato vale 12 mesi se i requisiti permangono.', ['retributiva','contributiva','12 mesi','dodici mesi']],
        ['Regolamento del Consiglio nazionale approvato il 23/7/2025 (delibera n. 225), in vigore dal 15/9/2025; datore «asseverabile» con almeno un rapporto di lavoro da almeno 6 mesi.', ['225','2025','sei mesi','6 mesi']],
        ['Consulente asseveratore accreditato dal Consiglio nazionale: non dipendente, iscritto da almeno 24 mesi, corso specifico, nessuna sanzione disciplinare definitiva negli ultimi 24 mesi, formazione in regola.', ['accreditat','24 mesi','corso']],
        ['Procedura sulla piattaforma telematica: istruttoria del Comitato di asseverazione, delibera del Consiglio nazionale, notizia all\'INL per la pubblicazione; divieto di altri incarichi dal datore asseverato per 3 anni se cliente di altro consulente.', ['piattaforma','comitato','inl','tre anni','3 anni']],
        ['Il consulente rilascia una dichiarazione di responsabilità ai sensi del D.P.R. 445/2000; la mendacità è illecito disciplinare (art. 38 Codice).', ['445','dichiarazione di responsabilita','mendac']]
      ],
      aggancio: 'Attualità: il TAR Lazio ha respinto il ricorso dei commercialisti contro il diniego dell\'INL di estendere loro l\'asseverazione (sentenza n. 12539 del 9/7/2026, estremi da edotto.com, fonte secondaria).',
      fonti: 'Simone, Deontologia, pp. 1238-1241 (riporta Protocolli e Regolamento Asse.Co.: testi non letti); Codice deontologico, art. 38; TAR Lazio 12539/2026 da edotto.com e fiscal-focus.it.'
    }
  };

  /* ---------- Costruzione dell'elenco ---------- */
  var DOMANDE = [];
  var cont = {};
  function chiave(m, b) {
    var base = m + '-' + b;
    if (m !== 'DL') return base;
    cont[base] = (cont[base] || 0) + 1;
    return base + (cont[base] === 1 ? 'a' : 'b');
  }
  RAW.forEach(function (r) {
    var id = chiave(r[0], r[1]);
    DOMANDE.push({ id: id, m: r[0], busta: r[1], gruppo: r[2], testo: r[3], fonte: 'Ancona 2025, busta ' + r[1], ufficiale: true, serie: 'A25', etichetta: 'busta ' + r[1],
      approf: APPROF_SPEC[id] || APPROF[r[0] + '.' + r[2]] || [], r: RISPOSTE[id] || null });
  });
  EXTRA.forEach(function (r) {
    var id = r[0] + '-' + r[1];
    DOMANDE.push({ id: id, m: r[0], busta: null, gruppo: r[2], testo: r[3], fonte: 'Integrazione 2026 (stima, non domanda ufficiale)', ufficiale: false, serie: 'X26', etichetta: 'integrazione 2026',
      approf: APPROF_EXTRA[id] || APPROF[r[0] + '.' + r[2]] || [], r: RISPOSTE[id] || null });
  });
  var BYID = {};
  DOMANDE.forEach(function (d) { BYID[d.id] = d; });
  S22.forEach(function (r) {
    var id = 'S22-' + r[0] + '-' + r[1], eq = r[4] ? BYID[r[4]] : null;
    DOMANDE.push({ id: id, m: r[0], busta: null, gruppo: r[2], testo: r[3], serie: 'S22', etichetta: 'altra sede 2022',
      fonte: 'Altra sede, sessione 2022 (elenco ufficiale di argomenti, non Ancona; normativa al 2022)', ufficiale: false,
      vedi: eq ? eq.id : null, approf: eq ? eq.approf : (APPROF[r[0] + '.' + r[2]] || []), r: eq ? eq.r : null });
  });

  return {
    versione: '1.3 · 30/10/2026',
    materie: MATERIE,
    commissione: COMMISSIONE,
    domande: DOMANDE,
    buste: 23
  };
})();
