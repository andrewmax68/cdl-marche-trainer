/* ============================================================
   CdL Marche 2026 — Prova orale: banca dati
   Versione dati: 1.0 del 30/10/2026
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
    DOMANDE.push({ id: id, m: r[0], busta: r[1], gruppo: r[2], testo: r[3], fonte: 'Ancona 2025, busta ' + r[1], ufficiale: true,
      approf: APPROF_SPEC[id] || APPROF[r[0] + '.' + r[2]] || [], r: RISPOSTE[id] || null });
  });
  EXTRA.forEach(function (r) {
    var id = r[0] + '-' + r[1];
    DOMANDE.push({ id: id, m: r[0], busta: null, gruppo: r[2], testo: r[3], fonte: 'Integrazione 2026 (stima, non domanda ufficiale)', ufficiale: false,
      approf: APPROF_EXTRA[id] || APPROF[r[0] + '.' + r[2]] || [], r: RISPOSTE[id] || null });
  });

  return {
    versione: '1.0 · 30/10/2026',
    materie: MATERIE,
    commissione: COMMISSIONE,
    domande: DOMANDE,
    buste: 23
  };
})();
