/* ============================================================
   CdL Marche 2026 — Prova orale: banca dati
   Versione dati: 2.1 del 6/11/2026 (+ DL-X7 diffida accertativa e DL-X8 disposizione, con risposta modello)
   Versione dati: 2.2 del 6/11/2026 (+ DL-X9 organi, accesso e verbali; DL-X10 diffide e prescrizione obbligatoria; DL-X11 lavoro nero e maxisanzione)
   Versione dati: 1.7 del 1/11/2026 (+ risposte modello di diritto tributario, lotto 5)
   Versione 1.6.1 del 1/11/2026: correzioni INPS e INAIL dopo revisione indipendente
   Versione 1.6 del 1/11/2026: + risposte modello di ragioneria, lotto 4
   Versione 1.5 del 1/11/2026: + risposte modello INPS e INAIL, lotto 3
   Versione 1.4 del 1/11/2026: + DL-X6 crisi d'impresa, con risposta modello
   Versione 1.3 del 30/10/2026: DEO-21 rivista; + 135 argomenti ufficiali 2022 di altra sede
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
    ['DL','X6','Integrazione 2026','Il ruolo del consulente del lavoro nella crisi d\'impresa (D.Lgs. 14/2019)'],
    ['DL','X7','Vigilanza e illeciti','La diffida accertativa per crediti patrimoniali (art. 12 D.Lgs. 124/2004)'],
    ['DL','X8','Vigilanza e illeciti','La disposizione del personale ispettivo (art. 14 D.Lgs. 124/2004)'],
    ['DL','X9','Vigilanza e illeciti','La vigilanza in materia di lavoro: organi, accesso ispettivo e verbali'],
    ['DL','X10','Vigilanza e illeciti','Diffide e prescrizione obbligatoria: la regolarizzazione degli illeciti amministrativi e penali'],
    ['DL','X11','Vigilanza e illeciti','Il lavoro nero: maxisanzione, diffida e sospensione dell\'attività'],
    ["DL","X12","Contratti flessibili","Il lavoro agile (smart working)"],
    ["DL","X13","Qualificazione","Il lavoro tramite piattaforme digitali: rider e tutele"],
    ["DL","X14","Cessazione del rapporto","Il licenziamento collettivo: presupposti, procedura e sanzioni"],
    ["DL","X15","Tutele specifiche","Il trasferimento d'azienda e la tutela dei lavoratori"],
    ["DL","X16","Diritto sindacale","Le rappresentanze sindacali in azienda (RSA e RSU) e la repressione della condotta antisindacale"],
    ["DL","X17","Salute e sicurezza","I soggetti della sicurezza aziendale e la delega di funzioni"],
    ["DL","X18","Tutele specifiche","Il whistleblowing nel settore privato"],
    ["DL","X19","Svolgimento e retribuzione","La protezione dei dati personali del lavoratore"],
    ["DL","X20","Cessazione del rapporto","La liquidazione giudiziale e i rapporti di lavoro subordinato"],
    ['INPS','X1','Integrazione 2026','Le novità 2026 sulla NASpI e sul congedo parentale'],
    ["INPS","X2","Contribuzione","La gestione separata INPS: iscritti, aliquote e versamenti"],
    ["INPS","X3","Contribuzione","Incentivi ed esoneri contributivi alle assunzioni: regole generali e misure 2026"],
    ["INPS","X4","Prestazioni","Ricongiunzione, totalizzazione e cumulo dei periodi contributivi"],
    ["INPS","X5","Ammortizzatori e sostegno al reddito","Il contributo di licenziamento («ticket NASpI»)"],
    ['TRIB','X1','Integrazione 2026','Il sostituto d\'imposta: chi è, soggetti, obblighi'],
    ["TRIB","X2","Parte generale e procedimento","L'imposta sul valore aggiunto: presupposti, detrazione e adempimenti"],
    ["TRIB","X3","Società e impresa","L'imposta sul reddito delle società (IRES)"],
    ["TRIB","X4","Parte generale e procedimento","L'accertamento delle imposte sui redditi: metodi, termini, contraddittorio e adesione"],
    ["TRIB","X5","Parte generale e procedimento","La riscossione delle imposte: ruolo, cartella, rateazione ed esecuzione"],
    ["TRIB","X6","Parte generale e procedimento","Il processo tributario: giudici, atti impugnabili, ricorso e difesa tecnica"],
    ['PPP','X1','Integrazione 2026','La parità di genere nel lavoro: art. 37 Cost. e Codice delle pari opportunità'],
    ["PPP","X2","Pubblico e costituzionale","Il procedimento amministrativo e il diritto di accesso (L. 241/1990)"],
    ["PPP","X3","Pubblico e costituzionale","Le fonti del diritto dell'Unione europea e il loro rapporto con il diritto interno"],
    ['DEO','X1','Integrazione 2026','L\'esercizio abusivo della professione e i limiti dei CED'],
    ['DEO','X2','Integrazione 2026','L\'asseverazione Asse.Co.'],
    ["DEO","X3","Ordinamento","Gli obblighi antiriciclaggio del consulente del lavoro"],
    ["DEO","X4","Ordinamento","Il praticantato e l'esame di Stato per consulente del lavoro"],
    ["DEO","X5","Ordinamento","La previdenza del consulente del lavoro: l'ENPACL"],
    ["DEO","X6","Ordinamento","La società tra professionisti (STP) e il consulente del lavoro"],
    ["RAG","X1","Bilancio","La nota integrativa e il rendiconto finanziario"],
    ["RAG","X2","Bilancio","Il bilancio in forma abbreviata e il bilancio delle micro-imprese"],
    ["RAG","X3","Bilancio","I criteri di valutazione delle voci di bilancio (art. 2426 c.c.)"]
  ];
  var APPROF_EXTRA = {
    'DL-X1': [[SIMONE_DL, '§ 9.2-9.4, pp. 242-244']],
    'DL-X2': [['Statuto Lavoratori 300_1970.pdf', 'art. 7'], [SIMONE_DL, '«potere disciplinare»'], ['NORMA_Codice_civile_lavoro.md', 'art. 2106 c.c.']],
    'DL-X3': [['P1_Cap01_DL62_2026.docx', ''], ['P1/P1_Mappe_DL62_DLgs96.md', '']],
    'DL-X4': [['P1_Cap02_DLgs96_2026.docx', ''], ['P1/P1_Mappe_DL62_DLgs96.md', '']],
    'DL-X5': [['P1_Cap08_Schede_tradizionali.docx', 'scheda 5'], [SIMONE_DL, 'pp. 234-235']],
    'DL-X6': [['ORALE/ORALE_05_Crisi_impresa_CdL_scheda.md', ''], ['P1_Cap06_Occupazione_crisi.docx', '§ 3.7'], ['NORMA_Codice_civile_lavoro.md', 'art. 2086 c.c.']],
    'DL-X7': [['P1/P1_Mappe_Poteri_ispettivi.md', 'Focus 2 e tabella dei ricorsi'], ['124_2004.pdf', 'art. 12'], ['P1_Cap03_Poteri_ispettivi.docx', ''], ['Rausei_Diffida accertativa e disposizione_lavgiur_2026_8-9.pdf', '']],
    'DL-X8': [['P1/P1_Mappe_Poteri_ispettivi.md', 'Focus 1 e Mappa D'], ['124_2004.pdf', 'art. 14'], ['P1_Cap03_Poteri_ispettivi.docx', ''], ['Rausei_Diffida accertativa e disposizione_lavgiur_2026_8-9.pdf', '']],
    'INPS-X1': [['ORALE/ORALE_02_Commissione_2026_temi.md', 'sezione Gallotta'], ['P1/P1_Cap09_Genitorialita.md', '']],
    'TRIB-X1': [['P2/P2_Mod04_Sostituto_imposta_scalette_v1.1.md', 'scalette A-D']],
    'PPP-X1': [['198_2006.pdf', ''], ['P1_Cap02_DLgs96_2026.docx', ''], ['91_2026.pdf', '']],
    'DEO-X1': [['ORALE/ORALE_02_Commissione_2026_temi.md', '«Abusivismo e CED»'], ['ORALE/ORALE_Simone_Deontologia_OCR.md', '«attività riservate»']],
    'DEO-X2': [['ORALE/ORALE_Simone_Deontologia_OCR.md', '«ASSE.CO»'], ['ORALE/ORALE_02_Commissione_2026_temi.md', 'attualità della professione']],
    "DL-X12": [["P1_Simone_Diritto_Lavoro_OCR_completo[1].md", "pp. 20-22"]],
    "DL-X13": [["P1_Cap07_Piattaforme.docx", ""], ["62_2026.pdf", "artt. 11-bis-15"]],
    "DL-X14": [["P1_Simone_Diritto_Lavoro_OCR_completo[1].md", "licenziamento collettivo"]],
    "DL-X15": [["P1_Simone_Legislazione_Sociale_OCR_completo[1].md", "trasferimento d'azienda"]],
    "DL-X16": [["P1_Simone_Diritto_Lavoro_OCR_completo[1].md", "pp. 44-46"], ["P1_Cap08_Schede_tradizionali.docx", "scheda 6"]],
    "DL-X17": [["81_2008_ESTRATTO_TitoloI_XII.md", "artt. 16-19, 31-50"], ["P1_Cap04_Sicurezza_vigilanza.docx", ""]],
    "DL-X18": [["P1_Simone_Diritto_Lavoro_OCR_completo[1].md", "p. 110"]],
    "DL-X19": [["P1_Simone_Diritto_Lavoro_OCR_completo[1].md", "pp. 136-139"]],
    "DL-X20": [["ORALE/ORALE_05_Crisi_impresa_CdL_scheda.md", ""]],
    "INPS-X2": [["P1_Simone_Legislazione_Sociale_OCR_completo[1].md", "pp. 290-294"]],
    "INPS-X3": [["62_2026.pdf", "artt. 1-4, 6 e 7"], ["P1_Cap01_DL62_2026.docx", ""], ["P1_Simone_Legislazione_Sociale_OCR_completo[1].md", "pp. 277-280"]],
    "INPS-X4": [["P1_Simone_Legislazione_Sociale_OCR_completo[1].md", "pp. 260-262"]],
    "INPS-X5": [["P1_Simone_Legislazione_Sociale_OCR_completo[1].md", "pp. 376-377"]],
    "PPP-X2": [["Rausei_Diffida accertativa e disposizione_lavgiur_2026_8-9.pdf", "termine del procedimento e obbligo di motivazione"]],
    "PPP-X3": [["ORALE/ORALE_03_Pubblico_Penale_scheda.md", "A1, fonti del diritto"]],
    "TRIB-X2": [["ORALE/ORALE_Simone_Diritto_Tributario_OCR.md", "pp. 624-651"]],
    "TRIB-X3": [["917_1986_TUIR.md", "artt. 72-77, 83-84, 95-96"]],
    "TRIB-X4": [["ORALE/ORALE_Simone_Diritto_Tributario_OCR.md", "pp. 496-517"]],
    "TRIB-X5": [["ORALE/ORALE_Simone_Diritto_Tributario_OCR.md", "pp. 504-505 (accertamento esecutivo)"]],
    "TRIB-X6": [["ORALE/ORALE_Simone_Diritto_Tributario_OCR.md", "pp. 549-565"]],
    "DEO-X4": [["ORALE/ORALE_Simone_Deontologia_OCR.md", "pp. 1221-1227"], ["Decreto-esami-consulenti-2026.pdf", "artt. 2-4"]],
    "DEO-X5": [["P2_00_PARAMETRI (1).md", "§ 11"]],
    "DEO-X6": [["ORALE/ORALE_Simone_Deontologia_OCR.md", "pp. 1237-1238"], ["ORALE/ORALE_Simone_Deontologia_OCR.md", "art. 20 Codice deontologico"]]
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
    ['DL',11,'Qualificazione','Lavoro autonomo professionale e occasionale; le collaborazioni coordinate e continuative','DL-6a'],
    ['DL',12,'Contratti flessibili','La somministrazione di lavoro','DL-10a'],
    ['DL',13,'Vigilanza e illeciti','Appalto e distacco genuini e non genuini (artt. 29-30 D.Lgs. 276/2003)','DL-8b'],
    ['DL',14,'Qualificazione','La certificazione dei contratti di lavoro','DL-5a'],
    ['DL',15,'Svolgimento e retribuzione','Le mansioni del lavoratore e i limiti allo ius variandi','DL-13a'],
    ['DL',16,'Svolgimento e retribuzione','L\'orario di lavoro e i tempi di riposo','DL-16a'],
    ['DL',17,'Tutele specifiche','La tutela dei minori sul lavoro','DL-12a'],
    ['DL',18,'Tutele specifiche','La tutela della maternità e della paternità','DL-5b'],
    ['DL',19,'Tutele specifiche','Le misure per l\'occupazione dei lavoratori disabili','DL-10b'],
    ['DL',20,'Svolgimento e retribuzione','La retribuzione, il prospetto paga e la prescrizione dei diritti del lavoratore',null],
    ['DL',21,'Svolgimento e retribuzione','La sospensione del rapporto per impossibilità temporanea del lavoratore',null],
    ['DL',22,'Svolgimento e retribuzione','La sospensione del rapporto per impossibilità temporanea del datore di lavoro',null],
    ['DL',23,'Cessazione del rapporto','Le dimissioni e la risoluzione consensuale',null],
    ['DL',24,'Cessazione del rapporto','Il licenziamento disciplinare e l\'art. 7 dello Statuto dei lavoratori','DL-X2'],
    ['DL',25,'Cessazione del rapporto','Il licenziamento per giustificato motivo oggettivo e la procedura dell\'art. 7 L. 604/1966',null],
    ['DL',26,'Cessazione del rapporto','Il licenziamento illegittimo: tutela obbligatoria, tutela reale, tutele crescenti','DL-X1'],
    ['DL',27,'Cessazione del rapporto','Le conseguenze dei vizi procedurali nei licenziamenti individuali e collettivi','DL-X1'],
    ['DL',28,'Rinunce e conciliazioni','Rinunce, transazioni e conciliazione delle vertenze','DL-13b'],
    ['DL',29,'Rinunce e conciliazioni','Il tentativo di conciliazione facoltativo, obbligatorio e incentivato','DL-21b'],
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
    ['INAIL',4,'Prestazioni e azioni','L\'indennizzo INAIL: danno biologico e danno patrimoniale','INAIL-7'],
    ['INAIL',5,'Obbligo, premi e adempimenti','Il contenzioso amministrativo INAIL (artt. 27-28 delle Modalità di applicazione delle tariffe)',null],
    ['INAIL',6,'Obbligo, premi e adempimenti','Il DURC','INAIL-1'],
    ['INAIL',7,'Obbligo, premi e adempimenti','La costituzione del rapporto assicurativo e gli adempimenti del datore di lavoro','INAIL-2'],
    ['INAIL',8,'Obbligo, premi e adempimenti','La tariffa dei premi: gestioni tariffarie, inquadramento e classificazione','INAIL-23'],
    ['INAIL',9,'Obbligo, premi e adempimenti','L\'oscillazione del tasso di premio','INAIL-5'],
    ['INAIL',10,'Obbligo, premi e adempimenti','Il calcolo e il pagamento del premio','INAIL-3'],
    ['INAIL',11,'Obbligo, premi e adempimenti','Il sostegno alla prevenzione: incentivi ISI e oscillazione per prevenzione (OT23)','INAIL-5'],
    ['INAIL',12,'Obbligo, premi e adempimenti','L\'obbligo assicurativo: requisiti soggettivi e oggettivi','INAIL-16'],
    ['INAIL',13,'Infortunio e malattia professionale','Infortunio sul lavoro e malattia professionale: definizioni e differenze','INAIL-22'],
    ['INAIL',14,'Infortunio e malattia professionale','La malattia professionale: sistema tabellare e sistema misto','INAIL-13'],
    ['INAIL',15,'Infortunio e malattia professionale','Gli adempimenti del datore e del lavoratore dopo un infortunio o una malattia professionale','INAIL-11'],
    // Diritto tributario (20)
    ['TRIB',1,'Parte generale e procedimento','Imposte e tasse: definizione e differenze','TRIB-19'],
    ['TRIB',2,'Lavoro dipendente','La ritenuta alla fonte: nozione e tipologie','TRIB-X1'],
    ['TRIB',3,'Parte generale e procedimento','L\'IRPEF: nozione, soggetti passivi e base imponibile',null],
    ['TRIB',4,'Parte generale e procedimento','L\'IRAP: nozione, soggetti, base imponibile e costo del personale','TRIB-18'],
    ['TRIB',5,'Parte generale e procedimento','Le agevolazioni e semplificazioni IVA per i piccoli contribuenti','TRIB-13'],
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
    ['TRIB',20,'Lavoro dipendente','Il welfare aziendale nel reddito di lavoro dipendente','DL-11a'],
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
    ['PPP',4,'Privato','Possesso e detenzione','PPP-11'],
    ['PPP',5,'Privato','L\'obbligazione: fonti ed elementi','PPP-14'],
    ['PPP',6,'Privato','L\'obbligazione: adempimento e inadempimento','PPP-14'],
    ['PPP',7,'Privato','Il contratto: elementi essenziali','PPP-10'],
    ['PPP',8,'Privato','Il contratto: nullità, annullabilità, risoluzione',null],
    ['PPP',9,'Privato','L\'imprenditore: piccolo, agricolo, commerciale','PPP-17'],
    ['PPP',10,'Privato','Società di persone e società di capitali','PPP-18'],
    ['PPP',11,'Pubblico e costituzionale','I principi fondamentali della Costituzione',null],
    ['PPP',12,'Pubblico e costituzionale','Il Parlamento',null],
    ['PPP',13,'Pubblico e costituzionale','Il Governo','PPP-2'],
    ['PPP',14,'Pubblico e costituzionale','Il Presidente della Repubblica','PPP-8'],
    ['PPP',15,'Pubblico e costituzionale','Il procedimento di formazione delle leggi','PPP-1'],
    ['PPP',16,'Pubblico e costituzionale','La Corte costituzionale','PPP-6'],
    ['PPP',17,'Pubblico e costituzionale','Gli istituti di democrazia diretta','PPP-5'],
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
    ['DEO',8,'Codice deontologico','I doveri generali del consulente del lavoro (artt. 3-11 Codice)','DEO-9'],
    ['DEO',9,'Codice deontologico','La responsabilità patrimoniale (art. 11 Codice)','DEO-13'],
    ['DEO',10,'Codice deontologico','Il segreto professionale (art. 8 Codice e art. 6 L. 12/1979)','DEO-11'],
    ['DEO',11,'Ordinamento','Le sanzioni disciplinari (artt. 27-31 L. 12/1979)','DEO-6'],
    ['DEO',12,'Ordinamento','L\'esercizio della professione (art. 1 L. 12/1979; art. 30 Codice)',null],
    ['DEO',13,'Codice deontologico','Il dovere di competenza e l\'obbligo di formazione (art. 9 Codice)','DEO-12'],
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
        ['Abrogativo: richiesto da 500.000 elettori o 5 Consigli regionali. Richieste depositate dal 1° gennaio al 30 settembre; l\'Ufficio centrale presso la Cassazione ne verifica la regolarità, la Corte costituzionale ne giudica l\'ammissibilità (artt. 32-33 L. 352/1970; art. 2 L. cost. 1/1953).', ['500.000','cinquecentomila','cinque consigli','5 consigli']],
        ['Esclusi: leggi tributarie e di bilancio, amnistia e indulto, autorizzazione a ratificare trattati internazionali.', ['tributari','bilancio','amnistia','indulto','trattati']],
        ['Quorum: partecipazione della maggioranza degli aventi diritto; approvato con la maggioranza dei voti validi.', ['quorum','maggioranza degli aventi','aventi diritto']],
        ['Revisione costituzionale: due deliberazioni per Camera a distanza di almeno 3 mesi, maggioranza assoluta nella seconda (art. 138).', ['tre mesi','3 mesi','maggioranza assoluta','due deliberazioni']],
        ['Referendum costituzionale entro 3 mesi dalla pubblicazione su richiesta di un quinto dei membri di una Camera, 500.000 elettori o 5 Consigli regionali; nessun quorum; escluso se approvata con i due terzi.', ['un quinto','due terzi','senza quorum','nessun quorum','confermativ']]
      ],
      aggancio: 'Il limite delle leggi tributarie riguarda materie che trattiamo ogni giorno (IRPEF e addizionali); i referendum in materia di lavoro sono invece ammessi.',
      fonti: COST + ', artt. 75 e 138. Ufficio centrale presso la Cassazione e giudizio di ammissibilità della Corte: artt. 32-33 L. 352/1970 e art. 2 L. cost. 1/1953, letti su Normattiva il 7/11/2026.'
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
      fonti: COST + ', art. 25; Simone, Diritto penale (scansione del 6/11/2026), p. 972 (artt. 25 Cost., 1 e 199 c.p.; riserva di legge, tassatività, irretroattività). Art. 14 preleggi: da riscontrare sul codice.'
    },

    'PPP-20': {
      sintesi: 'La responsabilità penale è personale (art. 27, c. 1, Cost.): si risponde solo di un fatto proprio e colpevole, mai per fatto altrui.',
      punti: [
        ['Fatto proprio e colpevole: fondamento del principio di colpevolezza, letto dalla Corte costituzionale anche come esclusione della responsabilità oggettiva pura: la colpevolezza è fondamento e misura della pena (Corte cost. 364/1988).', ['fatto proprio','colpevol','personale']],
        ['Presunzione di non colpevolezza fino alla condanna definitiva (art. 27, c. 2).', ['non colpevol','condanna definitiva','presunzione']],
        ['Pene non contrarie al senso di umanità e tese alla rieducazione (art. 27, c. 3); divieto della pena di morte (c. 4).', ['rieducazion','umanita','pena di morte']],
        ['Coscienza e volontà della condotta sempre necessarie (art. 42, c. 1, c.p.).', ['coscienza e volonta']]
      ],
      aggancio: 'Nell\'impresa si individua il responsabile persona fisica: nella sicurezza il D.Lgs. 81/2008 distribuisce obblighi tra datore di lavoro, dirigente e preposto.',
      fonti: COST + ', art. 27; c.p., art. 42 (Brocardi); Simone, Diritto penale (scansione del 6/11/2026), pp. 974-975.'
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
      fonti: COST + ', art. 25; c.p., art. 2 (Brocardi); Simone, Diritto penale (scansione del 6/11/2026), p. 972. Art. 11 preleggi: da riscontrare.'
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
      fonti: 'c.p., artt. 42-43 (Brocardi, 30/10/2026); Simone, Diritto penale (scansione del 6/11/2026), p. 974.'
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
      fonti: 'c.p., artt. 17, 39, 42 (Brocardi, 30/10/2026); D.Lgs. 758/1994 (libreria); Simone, Diritto penale (scansione del 6/11/2026), pp. 973 e 986-988.'
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
        ['Spontaneità: per i tributi dell\'Agenzia delle Entrate è precluso solo dalla notifica di atti di liquidazione o di accertamento (comprese le comunicazioni ex artt. 36-bis e 36-ter D.P.R. 600/1973 e 54-bis D.P.R. 633/1972: art. 13, c. 1-ter).', ['spontane','notific','accertamento','36-bis']],
        ['Pagamento contestuale di tributo, sanzione ridotta e interessi al tasso legale (c. 2). Riduzioni del minimo: 1/10 per il versamento entro 30 giorni; 1/9 entro 90 giorni; 1/8 entro il termine della dichiarazione dell\'anno della violazione; 1/7 oltre; poi 1/6, 1/5 e 1/4 dopo lo schema di atto o il verbale di constatazione (c. 1).', ['contestual','interessi','sanzione ridotta']],
        ['Esteso a tutti i tributi, inclusi i locali; ammesso anche per versamenti frazionati (art. 13-bis).', ['tutti i tributi','frazionat']],
        ['Non impedisce l\'inizio o la prosecuzione dei controlli.', ['controlli','ispezion']]
      ],
      aggancio: 'Per il sostituto d\'imposta il caso tipico è il ravvedimento delle ritenute versate in ritardo con F24; in ambito contributivo esiste un istituto analogo per le sanzioni civili (Simone LS pp. 444-445).',
      fonti: 'Simone, Diritto tributario, pp. 540-541. Art. 13 D.Lgs. 472/1997, testo vigente al 7/11/2026 letto su Normattiva. Dal 1/1/2027 si applica il testo unico delle sanzioni tributarie (D.Lgs. 173/2024, art. 102, come modificato dal D.L. 200/2025).'
    },

    'DL-X1': {
      sintesi: 'Le tutele contro il licenziamento illegittimo dipendono dalla data di assunzione (prima o dal 7/3/2015), dalle dimensioni del datore e dal vizio accertato: art. 18 St. lav. e L. 604/1966 per i vecchi assunti, D.Lgs. 23/2015 per i nuovi.',
      punti: [
        ['Dimensioni (art. 18, c. 8-9, St. lav., valide anche per il D.Lgs. 23/2015): oltre 15 dipendenti nell\'unità produttiva o nel Comune (oltre 5 se agricolo), o oltre 60 in ogni caso.', ['15 dipendenti','quindici','60','unita produttiva']],
        ['Reintegra piena, a prescindere dalle dimensioni: licenziamento nullo, discriminatorio, orale; risarcimento non inferiore a 5 mensilità e contributi.', ['nullo','discriminator','orale','5 mensilita','reintegr']],
        ['Vecchi assunti, sopra soglia: reintegra attenuata (fino a 12 mensilità) se il fatto non sussiste o è punibile con sanzione conservativa; indennità 12-24 mensilità negli altri casi; 6-12 per vizi di motivazione o di procedura (art. 18, c. 4-7).', ['12 mensilita','24','conservativ','procedura','insussistenza']],
        ['Nuovi assunti (D.Lgs. 23/2015): reintegra attenuata solo se è dimostrata in giudizio l\'insussistenza del fatto materiale; negli altri casi indennità tra 6 e 36 mensilità.', ['fatto materiale','36','tutele crescenti','23/2015']],
        ['Corte cost. 194/2018 e 150/2020: illegittimo l\'automatismo legato solo all\'anzianità; il giudice valuta anche altri criteri. Piccoli datori: art. 8 L. 604/1966 (riassunzione o 2,5-6 mensilità) per i vecchi assunti; per i nuovi indennità dimezzate (art. 9, c. 1, D.Lgs. 23/2015), senza più il tetto di 6 mensilità, dichiarato illegittimo da Corte cost. 21/7/2025 n. 118.', ['194','150','anzianita','604','2,5']]
      ],
      aggancio: 'Collegamento col potere disciplinare: la violazione della procedura dell\'art. 7 St. lav. nel licenziamento disciplinare, per i vecchi assunti sopra soglia, porta all\'indennità di 6-12 mensilità (art. 18, c. 6).',
      fonti: 'Simone, Diritto del lavoro 2026, §§ 9.2-9.4, pp. 242-244, e p. 236. Art. 9 D.Lgs. 23/2015 con la nota su Corte cost. 118/2025 (G.U. 1ª s.s. n. 30 del 23/7/2025), letto su Normattiva il 7/11/2026.'
    },

    'DL-X6': {
      sintesi: 'Il Codice della crisi chiede di riconoscere la crisi presto e di gestirla preservando la continuità: il CdL interviene prima (assetti adeguati e segnali di allarme), durante (consultazione sindacale e strumenti del lavoro nel piano) e dentro le procedure (esperto, curatore, rapporti di lavoro nella liquidazione giudiziale).',
      punti: [
        ['Prima: art. 2086, c. 2, c.c. e art. 3 CCII impongono assetti adeguati a rilevare tempestivamente la crisi e la sostenibilità dei debiti per i 12 mesi successivi; due segnali di allarme nascono dai dati del CdL: retribuzioni scadute da almeno 30 giorni per oltre metà del monte mensile e debiti oltre le soglie dell\'art. 25-novies.', ['2086','assetti','segnali','retribuzioni','dodici mesi','12 mesi']],
        ['Segnalazioni dei creditori pubblici qualificati (art. 25-novies): INPS per ritardo oltre 90 giorni nei contributi superiore al 30% del dovuto dell\'anno precedente e a 15.000 euro (imprese con dipendenti); INAIL per premi scaduti da oltre 90 giorni oltre 5.000 euro; invito alla composizione negoziata.', ['25-novies','creditori pubblici','inps','inail','15.000','novanta giorni','90 giorni']],
        ['Durante: art. 4, c. 3, CCII, il datore con più di 15 dipendenti informa per iscritto i sindacati delle determinazioni rilevanti sui rapporti di lavoro; incontro richiesto entro 3 giorni, avvio entro 5, consultazione esaurita dopo 10 giorni.', ['consultazione','informazione','sindaca','quindici','15 dipendenti','articolo 4']],
        ['Strumenti del lavoro nel piano: ammortizzatori (D.Lgs. 148/2015), contratti di prossimità per la gestione delle crisi (art. 8 D.L. 138/2011), trasferimento d\'azienda con accordi in deroga all\'art. 2112 (art. 47 L. 428/1990, c. 4-bis e 5).', ['ammortizzator','cassa integrazione','prossimita','trasferimento','2112','47']],
        ['Ruoli: esperto della composizione negoziata con 5 anni di iscrizione e almeno 3 casi documentati (art. 13, c. 3); curatore, commissario o liquidatore (art. 358, c. 1, lett. a), nomina in cui il tribunale tiene conto dei rapporti di lavoro subordinato in atto (c. 3, lett. d). Nella liquidazione giudiziale l\'art. 189 sospende i rapporti fino a subentro o recesso, con cessazione dopo 4 mesi (prorogabili fino a 8).', ['esperto','cinque anni','5 anni','tre casi','curatore','189','sospe']]
      ],
      aggancio: 'Chiusura deontologica: l\'art. 39 del Codice deontologico impone al CdL che opera nelle procedure della crisi indipendenza, diligenza e preparazione specifica.',
      fonti: 'Art. 2086 c.c. (NORMA_Codice_civile_lavoro); artt. 3 e 4 CCII (miolegale.it, testo dichiarato riscontrato su Normattiva al 13/10/2026); artt. 13 e 25-novies CCII (Brocardi, agg. 12/8/2026); art. 189 CCII e art. 47 L. 428/1990 (P1_Cap06, § 3.7; Simone); art. 8 D.L. 138/2011 (estratto Normattiva); art. 358 CCII (Brocardi, agg. 12/8/2026, riletto il 1/11/2026; c. 1 lett. a e c. 3 lett. d). Scheda: ORALE_05.'
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
        ['Periodo di riferimento biennale con un numero minimo di crediti; corsi, seminari, convegni e formazione a distanza, gestiti sulla piattaforma del Consiglio nazionale (nel biennio 2023-2024 servivano almeno 50 crediti, di cui 6 deontologici, secondo il riepilogo del Consiglio nazionale del 2/10/2024).', ['biennal','crediti','webinar','distanza','piattaforma']],
        ['Organizzatori: Consigli provinciali, Consiglio nazionale, università e altri soggetti autorizzati.', ['consigli provinciali','universita','autorizzat']],
        ['Il Consiglio provinciale segnala l\'inadempiente al Consiglio di disciplina per il procedimento.', ['illecito disciplinare','segnal','consiglio di disciplina']]
      ],
      aggancio: 'Nel lavoro le regole cambiano di continuo (nel 2026: D.L. 62/2026, D.Lgs. 96/2026, legge di bilancio): la formazione è la condizione per il dovere di competenza verso il cliente.',
      fonti: 'D.P.R. 137/2012, art. 7; Codice deontologico, art. 9; Simone, Deontologia, pp. 1235-1236. Crediti del biennio 2023-2024: riepilogo FCO del Consiglio nazionale (consulentidellavoro.it, 2/10/2024). Il numero fissato dal Regolamento del 2024 per il biennio 2025-2026 non è stato letto: il PDF del Consiglio nazionale non è leggibile da qui.'
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
      fonti: 'D.P.R. 7/8/2012 n. 137 (G.U. 14/8/2012 n. 189), art. 4, su copia del testo pubblicata da unipg.it e Simone p. 1237; D.L. 4/7/2006 n. 223 conv. L. 4/8/2006 n. 248, art. 2, c. 1, lett. b (allegato alla legge di conversione, cliclavoro.gov.it); L. 124/2017, art. 1, c. 152, come riportato da Simone p. 1237 ed edotto.com (testo non letto in originale); Codice deontologico, artt. 10, 14, 15, 20, 25, 35 (Simone pp. 1248-1254); convegno Ordine di Ancona da edotto.com, 4/5/2022. Art. 4 D.P.R. 137/2012, testo vigente letto su Normattiva il 7/11/2026 (c. 3: la violazione è illecito disciplinare e integra anche le violazioni del Codice del consumo e del D.Lgs. 145/2007).'
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
    },

    /* ===== Lotto 3 — Legislazione sociale INPS (1/11/2026) ===== */

    'INPS-1': {
      sintesi: "La CIGO integra la retribuzione dei dipendenti delle imprese industriali (e assimilate) in caso di sospensione o riduzione dell'attività per eventi transitori non imputabili o per situazioni temporanee di mercato (artt. 10-18 D.Lgs. 148/2015).",
      punti: [
        ["Campo di applicazione (art. 10): imprese industriali manifatturiere, di trasporti, estrattive, impiantistiche, edili e lapidee, alcune cooperative; causali: eventi transitori non imputabili all'impresa o ai lavoratori, incluse le intemperie, e situazioni temporanee di mercato, con prevedibile ripresa dell'attività (D.M. 95442/2016).", ["industrial","transitor","temporane","non imputabil","intemperie"]],
        ["Beneficiari: subordinati, apprendisti compresi, esclusi i dirigenti, con almeno 30 giorni di effettivo lavoro nell'unità produttiva (art. 1). Misura: 80% della retribuzione globale per le ore non lavorate, entro un massimale mensile aggiornato ogni anno (art. 3, c. 5-bis, D.Lgs. 148/2015; 2026: 1.423,69 euro lordi, circ. INPS 4/2026).", ["30 giorni","80%","dirigenti","massimale","1.423"]],
        ["Durata: 13 settimane continuative, prorogabili fino a 52; limite di 52 settimane nel biennio mobile e di un terzo delle ore lavorabili; dentro la durata massima complessiva di 24 mesi nel quinquennio mobile per CIGO e CIGS insieme (art. 4).", ["13 settimane","52 settimane","biennio mobile","24 mesi","quinquennio"]],
        ["Procedura: informazione e consultazione sindacale (art. 14), da esaurire in 25 giorni (10 fino a 50 dipendenti); domanda telematica all'INPS entro 15 giorni dall'inizio della sospensione (art. 15).", ["consultazione","sindacal","15 giorni","25 giorni","domanda"]],
        ["Finanziamento: contributo ordinario (1,70% fino a 50 dipendenti, 2% oltre, nell'industria) e contributo addizionale in caso di utilizzo (9%, 12%, 15% secondo l'uso nel quinquennio; dal 2025 ridotto al 6% e al 9% per chi non ha usato integrazioni nei 24 mesi precedenti, art. 5, c. 1-ter, D.Lgs. 148/2015). Pagamento di regola anticipato dal datore in busta e conguagliato con UniEmens (art. 7).", ["contributo ordinario","addizional","9%","conguagli","uniemens"]]
      ],
      aggancio: "Per lo studio: la CIGO si anticipa in busta con la retribuzione e si recupera a conguaglio; se l'impresa presenta la domanda in ritardo e i lavoratori perdono il trattamento, deve pagare loro l'equivalente (art. 15, c. 4).",
      fonti: "Simone, Legislazione sociale 2026, pp. 355-362; importo massimo 2026 riscontrato sul testo della circ. INPS 4 del 28/1/2026."
    },

    'INPS-2': {
      sintesi: "La CIGS sostiene il reddito in caso di riorganizzazione, crisi aziendale o contratto di solidarietà, per i datori non coperti dai fondi di solidarietà che nel semestre precedente hanno occupato mediamente più di 15 dipendenti (artt. 19-25-ter D.Lgs. 148/2015).",
      punti: [
        ["Campo (art. 20): tutti i settori, datori con più di 15 dipendenti medi nel semestre non coperti dai fondi di solidarietà; a prescindere dal numero, trasporto aereo e partiti politici. Contributo ordinario 0,90%, di cui 0,30% a carico del lavoratore.", ["15 dipendenti","semestre","fondi di solidarieta","0,90"]],
        ["Causali e durata (artt. 21-22): riorganizzazione, anche per processi di transizione, fino a 24 mesi; crisi aziendale fino a 12 mesi; contratto di solidarietà fino a 24 mesi nel quinquennio mobile.", ["riorganizzazione","crisi aziendale","solidarieta","24 mesi","12 mesi"]],
        ["Sospensioni autorizzabili, per riorganizzazione e crisi, entro l'80% delle ore lavorabili nell'unità produttiva (art. 22, c. 4).", ["80%","ore lavorabili"]],
        ["Procedura: comunicazione ai sindacati ed esame congiunto sul programma, criteri di scelta e rotazione (art. 24), entro 25 giorni (10 fino a 50 dipendenti); domanda al Ministero del Lavoro entro 7 giorni dalla consultazione; decreto di autorizzazione, di regola entro 90 giorni.", ["esame congiunto","programma","rotazione","ministero","decreto"]],
        ["Strumenti collegati: accordo di ricollocazione per gli esuberi (art. 24-bis); condizionalità, con obbligo di formazione pena decurtazione o decadenza (art. 25-ter).", ["ricollocazione","condizionalita","formazione","decadenza"]]
      ],
      aggancio: "Il mancato rispetto dei criteri di rotazione è tra le violazioni per cui Rausei indica la disposizione dell'ispettore (art. 14 D.Lgs. 124/2004): collegamento con i poteri ispettivi.",
      fonti: "Simone, Legislazione sociale 2026, pp. 362-365; P1_Cap06 § 3.7 (rotazione, Cass. 1378/2019, riportata)."
    },

    'INPS-4': {
      sintesi: "Gli ammortizzatori sociali sono le misure di politica passiva che tutelano il reddito del lavoratore e si distinguono in strumenti in costanza di rapporto e strumenti per la disoccupazione.",
      punti: [
        ["In costanza di rapporto (sospensione o riduzione): CIGO e CIGS (D.Lgs. 148/2015), fondi di solidarietà bilaterali e FIS con l'assegno di integrazione salariale, contratti di solidarietà.", ["costanza","cigo","cigs","fis","fondi"]],
        ["In caso di cessazione del rapporto: NASpI per i subordinati e DIS-COLL per i collaboratori (D.Lgs. 22/2015); disoccupazione agricola.", ["naspi","dis-coll","disoccupazione","cessazione"]],
        ["Per gli autonomi: ISCRO, l'indennità straordinaria di continuità reddituale e operativa per gli iscritti alla gestione separata.", ["iscro","autonom","gestione separata"]],
        ["Ammortizzatori in deroga: proroghe della CIGS oltre i limiti, previo accordo in sede governativa, per imprese di rilevanza strategica.", ["deroga","proroga"]],
        ["Accanto alle politiche passive ci sono quelle attive (ricollocazione, formazione), collegate dal principio di condizionalità.", ["politiche attive","condizionalita","passiv"]]
      ],
      aggancio: "Chiedersi sempre prima se l'azienda rientra in CIGO, CIGS, fondo bilaterale o FIS: dipende da settore e dimensione, ed è la prima verifica dello studio in caso di crisi.",
      fonti: "Simone, Legislazione sociale 2026, pp. 355, 365-371, 377-380."
    },

    'INPS-5': {
      sintesi: "Gli ammortizzatori in costanza di rapporto richiedono requisiti di lavoratore, di datore e di causale, e incontrano limiti di misura e di durata fissati dal D.Lgs. 148/2015.",
      punti: [
        ["Lavoratore: subordinato, apprendisti e lavoranti a domicilio compresi, esclusi i dirigenti, con 30 giorni di effettivo lavoro nell'unità produttiva (art. 1).", ["30 giorni","dirigenti","subordinat"]],
        ["Datore e organico: rileva il settore (CIGO) e la media dei dipendenti del semestre (CIGS oltre 15; FIS per chi ha almeno un dipendente); nel computo rientrano anche dirigenti e apprendisti (art. 2-bis).", ["semestre","organico","15","almeno un dipendente"]],
        ["Misura: 80% della retribuzione per le ore non lavorate entro il massimale mensile aggiornato ogni anno (art. 3, c. 5-bis).", ["80%","massimale"]],
        ["Durata massima complessiva: 24 mesi nel quinquennio mobile per unità produttiva, 30 per edilizia e lapidei, fino a 36 con il contratto di solidarietà (art. 4).", ["24 mesi","quinquennio mobile","30 mesi","36"]],
        ["Incompatibilità: per i giorni di altra attività lavorativa non spetta il trattamento; omessa comunicazione preventiva all'INPS comporta la decadenza (art. 8).", ["attivita lavorativa","comunicazione","decadenza"]]
      ],
      aggancio: "Il quinquennio mobile si calcola a ritroso dall'ultimo giorno di trattamento richiesto: in studio è il primo conteggio da fare prima di una nuova domanda.",
      fonti: "Simone, Legislazione sociale 2026, pp. 355-359 (circ. Min. Lav. 17/2017 e 1/2022, riportate)."
    },

    'INPS-6': {
      sintesi: "La NASpI è l'indennità mensile di disoccupazione per i lavoratori subordinati che hanno perso involontariamente il lavoro (D.Lgs. 22/2015).",
      punti: [
        ["Disoccupazione involontaria: licenziamento, anche disciplinare; dimissioni per giusta causa o nel periodo tutelato di maternità; risoluzione consensuale in conciliazione per giustificato motivo oggettivo o per rifiuto di trasferimento oltre 50 km.", ["involontari","giusta causa","licenziamento","risoluzione consensuale"]],
        ["Requisito: almeno 13 settimane di contribuzione nei 4 anni precedenti (art. 3). Dal 2025, se nei 12 mesi prima ci sono state dimissioni o risoluzione consensuale da un tempo indeterminato, le 13 settimane vanno maturate dopo quella cessazione (L. 207/2024).", ["13 settimane","4 anni","quattro anni","dimissioni"]],
        ["Misura: 75% della retribuzione media mensile fino alla soglia (2026: 1.456,72 euro), più 25% della parte eccedente, entro il massimale (2026: 1.584,70 euro); riduzione del 3% al mese dal sesto mese (dall'ottavo per chi ha almeno 55 anni).", ["75%","25%","1.456","1.584","3%"]],
        ["Durata: metà delle settimane contributive degli ultimi 4 anni, al netto di quelle già indennizzate (art. 5): massimo 2 anni.", ["meta","settimane","durata","2 anni","due anni"]],
        ["Domanda telematica entro 68 giorni dalla cessazione; contribuzione figurativa; condizionalità con il patto di servizio; liquidazione anticipata per avviare un'attività, dal 2026 in due rate (70% e 30%).", ["68 giorni","figurativ","condizionalita","liquidazione anticipata"]]
      ],
      aggancio: "Domanda tipica del cliente al momento della cessazione: dimissioni volontarie senza giusta causa non danno NASpI; per chi licenzia c'è il contributo di licenziamento (ticket).",
      fonti: "Simone, Legislazione sociale 2026, pp. 371-374; soglia e massimale 2026 riscontrati sul testo della circ. INPS 4 del 28/1/2026. Termine di 68 giorni a pena di decadenza: art. 6, c. 1, D.Lgs. 22/2015 (Simone, p. 374)."
    },

    'INPS-11': {
      sintesi: "Le misure a sostegno del reddito dei lavoratori si dividono tra integrazioni durante il rapporto e indennità dopo la cessazione, con regole diverse per subordinati, collaboratori e autonomi.",
      punti: [
        ["Durante il rapporto: CIGO e CIGS; fondi di solidarietà bilaterali e FIS con l'assegno di integrazione salariale (13 o 26 settimane nel biennio mobile secondo che i dipendenti siano fino a 5 o di più).", ["cigo","cigs","fis","assegno di integrazione","13","26"]],
        ["Dopo la cessazione: NASpI per i subordinati; DIS-COLL per i collaboratori iscritti alla gestione separata; disoccupazione agricola.", ["naspi","dis-coll","agricol"]],
        ["Per gli autonomi in gestione separata: ISCRO, indennità straordinaria di continuità reddituale e operativa.", ["iscro","autonom"]],
        ["Strumenti di accompagnamento: assegni straordinari dei fondi bilaterali per l'esodo, accordo di ricollocazione nella CIGS.", ["esodo","ricollocazione","assegni straordinari"]],
        ["Tutte le prestazioni sono condizionate alla partecipazione alle politiche attive (principio di condizionalità).", ["condizionalita","politiche attive"]]
      ],
      aggancio: "Il FIS copre anche i piccoli datori del terziario con almeno un dipendente: è la tutela più frequente per i clienti di uno studio di provincia.",
      fonti: "Simone, Legislazione sociale 2026, pp. 355, 367-374, 377-380."
    },

    'INPS-21': {
      sintesi: "Durante la NASpI il lavoro non fa automaticamente perdere l'indennità: conta il tipo di attività, la sua durata e il reddito previsto (artt. 9-10 D.Lgs. 22/2015).",
      punti: [
        ["Lavoro subordinato con reddito annuo superiore al limite esente da imposta: decadenza; se il contratto non supera 6 mesi, la NASpI è solo sospesa d'ufficio per la durata del rapporto (art. 9).", ["sei mesi","6 mesi","sospes","decadenza"]],
        ["Lavoro subordinato con reddito inferiore al limite esente: la NASpI resta ma è ridotta dell'80% del reddito previsto, a condizione di comunicare all'INPS il reddito annuo previsto entro 30 giorni dall'inizio.", ["ridott","30 giorni","reddito annuo"]],
        ["Più rapporti brevi consecutivi che superano complessivamente i 6 mesi fanno decadere (msg. INPS 1162/2018); il lavoro intermittente sospende per la durata o per le sole giornate lavorate.", ["intermittent","consecutiv","1162"]],
        ["Attività autonoma o d'impresa individuale (art. 10): stessa logica di decadenza, perdita o riduzione in funzione del reddito, con comunicazione all'INPS.", ["autonom","impresa individuale","comunicazione"]],
        ["DIS-COLL: sospensione se il lavoro subordinato dura fino a 5 giorni, decadenza oltre.", ["dis-coll","5 giorni","cinque giorni"]]
      ],
      aggancio: "In studio si verifica sempre la NASpI di chi si assume: la comunicazione UniLav vale anche verso l'INPS, ma il reddito previsto lo deve comunicare il lavoratore.",
      fonti: "Simone, Legislazione sociale 2026, pp. 379-380 (msg. INPS 1162/2018, riportato). Riduzione pari all'80% del reddito annuo previsto, ripartito fino alla fine dell'indennità o, se prima, fino al 31/12 (art. 9, c. 2, che rinvia all'art. 10; Brocardi e leggeinchiaro, fonti secondarie)."
    },

    'INPS-3': {
      sintesi: "La contribuzione obbligatoria finanzia le assicurazioni sociali dei lavoratori: l'assicurazione generale obbligatoria per invalidità, vecchiaia e superstiti, le cosiddette assicurazioni minori e le forme sostitutive o esclusive.",
      punti: [
        ["IVS: finanzia le pensioni; per la generalità dei dipendenti l'aliquota del Fondo pensioni lavoratori dipendenti è 33%, di cui 23,81% a carico del datore e 9,19% del lavoratore.", ["ivs","invalidita","vecchiaia","33%","9,19"]],
        ["Assicurazioni minori: malattia, maternità, disoccupazione (NASpI), cassa integrazione, assegni per il nucleo familiare (CUAF), Fondo di garanzia del TFR.", ["minori","malattia","maternita","disoccupazione","cuaf"]],
        ["Dipendenti pubblici: la gestione ex INPDAP è confluita nell'INPS dal 2012, con proprie casse pensionistiche.", ["inpdap","pubblic","2012"]],
        ["Autonomi: gestioni speciali di artigiani, commercianti e coltivatori diretti; gestione separata per collaboratori e professionisti senza cassa (L. 335/1995).", ["artigian","commercianti","gestione separata","335"]],
        ["Liberi professionisti iscritti agli albi: casse private con autonomia (D.Lgs. 509/1994), con contributo soggettivo, integrativo e di maternità. Per i consulenti del lavoro è l'ENPACL.", ["casse","509","soggettivo","integrativo","enpacl"]]
      ],
      aggancio: "Il consulente del lavoro vive tutti e due i lati: gestisce le aliquote INPS dei clienti e versa i propri contributi all'ENPACL, applicando in fattura il contributo integrativo.",
      fonti: "Simone, Legislazione sociale 2026, pp. 256-258, 330-332. Soppressione di INPDAP ed ENPALS e confluenza nell'INPS dal 2012: art. 21 D.L. 201/2011; circ. INPS 3 del 13/1/2012."
    },

    'INPS-8': {
      sintesi: "L'unità produttiva è la sede dotata di autonomia organizzativa capace di svolgere l'intero ciclo produttivo o una sua fase; l'unità operativa è il luogo dove si svolge stabilmente il lavoro dei dipendenti.",
      punti: [
        ["Posizione contributiva unica: il datore ha di regola una sola matricola INPS per tutti i lavoratori, ovunque operino (circ. INPS 172/2010 e 65/2015).", ["unica","matricola","posizione contributiva"]],
        ["Unità operativa: luogo in cui uno o più dipendenti lavorano stabilmente, o sezione produttiva omogenea; può coincidere con la sede legale se vi lavorano dipendenti.", ["unita operativa","stabil","sede legale"]],
        ["Unità produttiva (msg. INPS 1444/2017): autonomia finanziaria o tecnico-funzionale, idoneità a realizzare l'intero ciclo produttivo o una sua fase completa, maestranze adibite in via continuativa.", ["unita produttiva","autonomia","ciclo produttivo","fase completa","maestranze"]],
        ["Rilevanza: gli ammortizzatori (anzianità di 30 giorni, durata massima, CIGO) si misurano per unità produttiva; per questo le unità vanno comunicate all'iscrizione.", ["ammortizzator","30 giorni","durata"]],
        ["Nel diritto del lavoro l'unità produttiva rileva anche per le soglie di tutela (art. 18 St. lav.) e per il trasferimento del lavoratore (art. 2103 c.c.).", ["18","2103","trasferimento"]]
      ],
      aggancio: "Esempio: un'impresa con sede a Fermo e un laboratorio a Macerata con propri addetti stabili apre due unità produttive, e ogni domanda di cassa integrazione va riferita alla singola unità.",
      fonti: "Simone, Legislazione sociale 2026, pp. 263-264, 356 (circ. INPS 9/2017, 56/2017, msg. 1444/2017, riportati)."
    },

    'INPS-12': {
      sintesi: "I contributi previdenziali e assistenziali si prescrivono in cinque anni; una volta prescritti non possono più essere versati (art. 3, c. 9, L. 335/1995).",
      punti: [
        ["Termine unico di 5 anni per il Fondo pensioni lavoratori dipendenti, le altre gestioni pensionistiche obbligatorie e tutte le altre contribuzioni, compresi i premi INAIL.", ["cinque anni","5 anni","quinquennal"]],
        ["Principio di irricevibilità: i contributi prescritti non possono essere versati nemmeno spontaneamente.", ["irricevibil","prescritt"]],
        ["Se il lavoratore o i superstiti presentano denuncia, il termine diventa di 10 anni.", ["denuncia","10 anni","dieci anni"]],
        ["Conseguenza: l'automaticità delle prestazioni (art. 2116 c.c.) opera solo nei limiti della prescrizione; oltre, il datore risponde del danno al lavoratore.", ["automaticita","2116","danno"]],
        ["Il lavoratore danneggiato può chiedere la costituzione della rendita vitalizia (art. 13 L. 1338/1962).", ["rendita vitalizia","1338"]]
      ],
      aggancio: "In un contenzioso o in un'ispezione la prima verifica è il quinquennio: i periodi più vecchi non si recuperano con i contributi ma solo con la rendita vitalizia o il risarcimento.",
      fonti: "Simone, Legislazione sociale 2026, pp. 259-260, 301-302; art. 2116 c.c. (NORMA_Codice_civile_lavoro). Rendita vitalizia (art. 13 L. 1338/1962): Simone, p. 302."
    },

    'INPS-13': {
      sintesi: "I debiti contributivi verso l'INPS non ancora affidati all'agente della riscossione possono essere rateizzati: dal 2025 la legge consente fino a 60 rate mensili (art. 2, c. 11 e 11-bis, D.L. 338/1989).",
      punti: [
        ["Base: art. 2, c. 11, D.L. 338/1989; il c. 11-bis, introdotto dall'art. 23 della L. 203/2024 (collegato lavoro), consente fino a 60 rate; attuato dal decreto interministeriale del 24/10/2025 e dal regolamento INPS (circ. INPS 60 del 21/5/2026).", ["338","60 rate","sessanta","203/2024","collegato"]],
        ["La dilazione richiede una dichiarazione di temporanea difficoltà economico-finanziaria: fino a 36 rate per debiti fino a 500.000 euro, fino a 60 rate oltre (D.I. 24/10/2025).", ["36","500.000","difficolta","60 rate"]],
        ["Debiti ammessi: contributi e accessori non ancora affidati all'agente della riscossione (prima dell'avviso di addebito); esclusi quelli contestati.", ["agente della riscossione","avviso di addebito","contestat"]],
        ["Sulle rate si applicano gli interessi di dilazione; la sanzione civile ridotta è subordinata al pagamento della prima rata.", ["interessi","prima rata","sanzione civile"]],
        ["Revoca per mancato pagamento di tre rate, anche non consecutive, o per perdita della correntezza contributiva; decadenza se l'impresa accede a uno strumento di regolazione della crisi.", ["revoca","tre rate","correntezza","crisi"]]
      ],
      aggancio: "Durante la dilazione regolare il DURC resta positivo: è spesso la ragione pratica per cui lo studio la chiede.",
      fonti: "Simone, Legislazione sociale 2026, p. 445; circ. INPS 60 del 21/5/2026 (testo letto). DURC regolare in pendenza di rateazione dopo il pagamento della prima rata (D.M. 30/1/2015, art. 3, c. 2, lett. a; circ. INPS 60/2026)."
    },

    'INPS-14': {
      sintesi: "L'inquadramento è la classificazione del datore di lavoro in un settore previdenziale, fatta dall'INPS in via esclusiva in base all'attività svolta (art. 49 L. 88/1989); da esso dipendono aliquote e prestazioni.",
      punti: [
        ["Settori dell'art. 49 L. 88/1989: industria, artigianato, agricoltura, terziario, credito e assicurazioni.", ["49","88/1989","industria","artigianato","terziario"]],
        ["L'inquadramento vale a tutti gli effetti previdenziali e assistenziali e vincola anche l'INAIL (D.Lgs. 38/2000).", ["tutti gli effetti","inail","vincol"]],
        ["Iscrizione telematica con il codice ATECO; dal 1/4/2025 l'INPS usa la classificazione ATECO 2025 (circ. INPS 71/2025).", ["ateco","2025","iscrizione"]],
        ["Inquadramento automatizzato sulla base dell'autocertificazione e di un questionario; per le attività complesse lo fa l'INPS dopo istruttoria.", ["automatizzat","autocertificazione","questionario"]],
        ["Posizione contributiva unica con una matricola per tutti i dipendenti; le variazioni dell'attività vanno comunicate.", ["matricola","posizione contributiva","variazion"]]
      ],
      aggancio: "Un inquadramento sbagliato si porta dietro aliquote, CIG e fondi sbagliati: il caso classico è l'impresa agricola che trasforma i propri prodotti, al confine tra agricoltura e industria (art. 2135 c.c.).",
      fonti: "Simone, Legislazione sociale 2026, pp. 263-266 (circ. INPS 71/2025; comunicato INPS 9/10/2025, riportati)."
    },

    'INPS-15': {
      sintesi: "I contributi si calcolano su una retribuzione non inferiore a quella dei contratti collettivi nazionali e, se ci sono più contratti, a quella dei contratti comparativamente più rappresentativi; in ogni caso non sotto il minimale giornaliero di legge.",
      punti: [
        ["Minimale contrattuale (art. 1, c. 1, D.L. 338/1989): la base imponibile non può essere inferiore alla retribuzione dei CCNL delle organizzazioni più rappresentative, anche per chi non li applica.", ["338","minimale","ccnl","non applica"]],
        ["Con più contratti per la stessa categoria vale quello stipulato dalle organizzazioni comparativamente più rappresentative (art. 2, c. 25, L. 549/1995).", ["comparativamente","549","pluralita"]],
        ["Minimale giornaliero di legge: 9,50% del trattamento minimo di pensione; per il 2026 58,13 euro (circ. INPS 6/2026).", ["giornalier","9,50","58,13","trattamento minimo"]],
        ["Senza CCNL per il settore si può usare quello di un settore affine (Cass. 22357/2019, riportata dal Simone).", ["affine","22357"]],
        ["Collegamento 2026: il D.L. 62/2026 (art. 7) assume il trattamento economico complessivo dei CCNL comparativamente più rappresentativi come parametro del salario giusto e come condizione per i benefici.", ["62/2026","trattamento economico complessivo","salario giusto"]]
      ],
      aggancio: "L'impresa che applica un contratto «pirata» paga comunque i contributi sul CCNL leader: in ispezione scatta il recupero delle differenze contributive.",
      fonti: "Simone, Legislazione sociale 2026, pp. 270-271 (circ. INPS 6/2026, riportata); P1_Cap01 (art. 7 D.L. 62/2026)."
    },

    'INPS-18': {
      sintesi: "Omissione ed evasione contributiva sono le due forme di mancato versamento sanzionate con sanzioni civili dall'art. 116, c. 8, L. 388/2000; l'omesso versamento delle ritenute ha anche una sanzione penale o amministrativa.",
      punti: [
        ["Omissione (lett. a): contributi non pagati o pagati in ritardo ma risultanti da denunce e registrazioni. Sanzione: tasso BCE più 5,5 punti all'anno, solo tasso BCE se si paga spontaneamente entro 120 giorni; tetto 40%.", ["omission","denunce","5,5","120 giorni","40%"]],
        ["Evasione (lett. b): denunce omesse o non veritiere con intenzione di non versare, occultando rapporti o retribuzioni. Sanzione: 30% annuo con tetto del 60%.", ["evasion","occult","30%","60%"]],
        ["Ravvedimento nell'evasione: denuncia spontanea entro 12 mesi e pagamento entro 30 giorni (BCE + 5,5) o 90 giorni (BCE + 7,5), tetto 40% (riforma del D.L. 19/2024, dal 1/9/2024).", ["12 mesi","7,5","ravvedimento","19/2024"]],
        ["Dopo un accertamento d'ufficio o ispettivo la sanzione è ridotta al 50% se si paga entro 30 giorni dalla contestazione.", ["50%","30 giorni","ispettiv"]],
        ["Ritenute previdenziali trattenute e non versate (art. 2, c. 1-bis, D.L. 463/1983): oltre 10.000 euro annui reclusione fino a 3 anni e multa fino a 1.032 euro; sotto, sanzione amministrativa da 1,5 a 4 volte l'omesso; non punibile chi paga entro 3 mesi dalla contestazione.", ["ritenute","10.000","reclusione","tre mesi","3 mesi"]]
      ],
      aggancio: "La distinzione conta in ispezione: il lavoratore in nero è evasione, il ritardo su UniEmens regolarmente inviato è omissione. Dal 2026 operano anche gli indici ISAC.",
      fonti: "Simone, Legislazione sociale 2026, pp. 443-448 (circ. INPS 90/2024, circ. INAIL 31/2024 e 32/2022, riportate)."
    },

    'INPS-20': {
      sintesi: "Il DURC attesta, con un'unica interrogazione telematica sul codice fiscale, la regolarità contributiva verso INPS, INAIL e, per l'edilizia, Casse edili (art. 4 D.L. 34/2014; D.M. 30/1/2015).",
      punti: [
        ["Verifica on line in tempo reale; possono chiederla stazioni appaltanti, amministrazioni, l'impresa stessa e, per delega, il consulente del lavoro.", ["telematic","codice fiscale","stazioni appaltanti","consulente"]],
        ["Esito regolare se non ci sono debiti per contributi o sanzioni civili; il documento vale 120 giorni dalla richiesta.", ["120 giorni","regolar","sanzioni civili"]],
        ["In caso di irregolarità l'ente invia via PEC l'invito a regolarizzare; si hanno 15 giorni per farlo, altrimenti si genera il documento di non regolarità.", ["invito","15 giorni","pec","non regolarita"]],
        ["Serve per appalti pubblici, pagamenti della pubblica amministrazione e per tutte le agevolazioni: il codice degli incentivi lo richiede già all'accesso (D.Lgs. 184/2025, art. 9).", ["appalti","agevolazion","benefici","184/2025"]],
        ["Nel settore edile si aggiunge il DURC di congruità sull'incidenza della manodopera.", ["congruita","edil"]]
      ],
      aggancio: "Senza DURC regolare l'impresa perde esoneri e incentivi assunzionali: per questo lo studio controlla l'invito a regolarizzare appena arriva.",
      fonti: "Simone, Legislazione sociale 2026, pp. 281-283 (circ. INPS 126/2015, riportata)."
    },

    'INPS-22': {
      sintesi: "Il rapporto di lavoro subordinato fa sorgere per legge il rapporto contributivo: il datore versa i contributi anche per la quota del lavoratore e ne risponde in via esclusiva (artt. 2114-2116 c.c.).",
      punti: [
        ["Art. 2114 c.c.: le leggi speciali fissano casi, forme, contributi e prestazioni della previdenza obbligatoria.", ["2114","leggi speciali"]],
        ["Art. 2115 c.c.: datore e lavoratore contribuiscono, salvo diverse disposizioni; il datore è responsabile del versamento anche per la parte del lavoratore, con diritto di rivalsa tramite trattenuta.", ["2115","responsabile","rivalsa","trattenuta"]],
        ["È nullo qualsiasi patto diretto a eludere gli obblighi previdenziali (art. 2115, c. 3).", ["nullo","patto","eludere"]],
        ["Il contributo si calcola applicando l'aliquota del settore alla retribuzione imponibile (art. 12 L. 153/1969, in armonia con l'art. 51 TUIR), mai sotto i minimali.", ["aliquota","imponibile","minimal"]],
        ["Tipi di contributi: obbligatori, figurativi (malattia, maternità, CIG), volontari, da riscatto (laurea, D.Lgs. 184/1997).", ["obbligatori","figurativ","volontari","riscatto"]]
      ],
      aggancio: "Per questo il lavoratore non risponde mai dell'omissione del datore: la tutela gli arriva per automaticità (art. 2116) o, se prescritta, come risarcimento.",
      fonti: "Artt. 2114-2116 c.c. (NORMA_Codice_civile_lavoro); Simone, Legislazione sociale 2026, pp. 257-259."
    },

    'INPS-23': {
      sintesi: "Per il principio di automaticità le prestazioni previdenziali spettano al lavoratore subordinato anche se il datore non ha versato i contributi (art. 2116 c.c.), nei limiti della prescrizione.",
      punti: [
        ["Fondamento: art. 2116, c. 1, c.c.; il rischio dell'inadempimento è spostato dal lavoratore all'ente.", ["2116","anche quando","non ha versato"]],
        ["Limite: opera solo per i contributi non prescritti; oltre i 5 anni l'ente non paga e il datore risponde del danno (art. 2116, c. 2).", ["prescri","5 anni","cinque anni","danno"]],
        ["Vale per i rapporti di lavoro subordinato, non per autonomi e professionisti, che versano per sé.", ["subordinat","autonomi","professionisti"]],
        ["Non vale nemmeno per i collaboratori della gestione separata, anche se versa il committente; eccezione: l'indennità di maternità (art. 64-ter D.Lgs. 151/2001).", ["gestione separata","collaborator","maternita","64-ter"]],
        ["Nato nell'assicurazione infortuni, oggi è applicato dalla generalità dei regimi.", ["infortuni","generalita"]]
      ],
      aggancio: "Esempio: il dipendente in nero che si ammala ha diritto all'indennità INPS; l'INPS poi recupera dal datore contributi e sanzioni.",
      fonti: "Simone, Legislazione sociale 2026, p. 301; art. 2116 c.c. (NORMA_Codice_civile_lavoro)."
    },

    'INPS-7': {
      sintesi: "Il Fondo di garanzia dell'INPS paga al lavoratore il TFR e le ultime retribuzioni non corrisposte quando il datore è insolvente (art. 2 L. 297/1982; D.Lgs. 80/1992).",
      punti: [
        ["Datore soggetto a procedure concorsuali: servono cessazione del rapporto, apertura della procedura (liquidazione giudiziale, concordato, LCA) e credito insoluto, di regola ammesso al passivo.", ["concorsual","liquidazione giudiziale","insoluto","cessazione"]],
        ["Datore non fallibile: oltre alla cessazione, serve aver tentato l'esecuzione forzata con esito insufficiente.", ["esecuzione forzata","insufficien","non assoggettabil"]],
        ["Copre anche le retribuzioni degli ultimi 3 mesi del rapporto, se rientrano nei 12 mesi precedenti la procedura o l'esecuzione (art. 2 D.Lgs. 80/1992).", ["ultimi 3 mesi","tre mesi","12 mesi","retribuzioni"]],
        ["Finanziato con un contributo dello 0,20% delle retribuzioni (0,40% per i dirigenti industriali); domanda telematica del lavoratore, pagamento entro 60 giorni su conto corrente.", ["0,20","domanda","60 giorni"]],
        ["Interviene anche nei trasferimenti d'azienda in procedura liquidatoria, dove il TFR diventa esigibile verso il cedente (art. 47, c. 5-bis, L. 428/1990).", ["trasferimento","47","cedente"]]
      ],
      aggancio: "Collegamento con la crisi d'impresa: con l'art. 189 CCII TFR e preavviso sono crediti anteriori ammessi al passivo, e il Fondo li paga al posto del datore (scheda ORALE_05).",
      fonti: "Simone, Legislazione sociale 2026, pp. 388-389, 410-411 (circ. INPS 70/2023, riportata)."
    },

    'INPS-10': {
      sintesi: "Il congedo parentale è il diritto di ciascun genitore di astenersi dal lavoro nei primi 14 anni del figlio, con un'indennità INPS in parte all'80% e in parte al 30% (artt. 32-35 D.Lgs. 151/2001).",
      punti: [
        ["Durata: fino a 6 mesi per la madre e 6 per il padre (7 se ne fruisce almeno 3), 10 mesi di coppia, 11 se il padre ne fruisce almeno 3; 11 mesi al genitore solo.", ["6 mesi","sei mesi","10 mesi","11 mesi"]],
        ["Età del figlio: 14 anni dal 1/1/2026 per i lavoratori dipendenti (L. 199/2025, c. 219; msg. INPS 251/2026); 12 anni restano per la gestione separata.", ["14 anni","quattordici","199/2025","dipendenti"]],
        ["Indennità: 9 mesi indennizzati al 30% (3 non trasferibili per genitore più 3 alternativi); entro i 6 anni del figlio 3 mesi all'80%; oltre i 9 mesi il 30% solo sotto una soglia di reddito.", ["30%","80%","9 mesi","nove mesi","6 anni"]],
        ["Fruizione giornaliera o oraria; preavviso di almeno 5 giorni (2 per quella oraria).", ["oraria","preavviso","5 giorni"]],
        ["Contribuzione figurativa per i periodi di congedo (art. 35); il licenziamento causato dalla domanda o dalla fruizione del congedo è nullo.", ["figurativ","nullo","licenziamento"]]
      ],
      aggancio: "L'indennità è anticipata in busta e conguagliata con l'INPS: in studio conta il conteggio dei mesi già usati da entrambi i genitori.",
      fonti: "Simone, Diritto del lavoro 2026, pp. 121-122; P1_Cap09 § 3.4 (D.Lgs. 151/2001 consolidato; msg. INPS 251/2026). I 3 mesi all'80% sono complessivi per la coppia (o per il genitore solo), alternativi, entro i 6 anni del figlio, per chi termina il congedo di maternità o paternità dopo il 31/12/2024 (art. 34, c. 1, D.Lgs. 151/2001, mod. L. 207/2024, c. 217; circ. INPS 95/2025, da fonte secondaria)."
    },

    'INPS-16': {
      sintesi: "La previdenza complementare è il secondo pilastro volontario che integra la pensione pubblica attraverso fondi pensione finanziati soprattutto dal TFR (D.Lgs. 252/2005).",
      punti: [
        ["Forme: fondi negoziali (istituiti dai contratti collettivi), fondi aperti, PIP assicurativi, fondi preesistenti; iscritti all'albo COVIP, di regola a contribuzione definita.", ["negozial","aperti","pip","covip","contribuzione definita"]],
        ["Fino al 30/6/2026: entro 6 mesi dall'assunzione il lavoratore sceglie; se tace, il TFR va al fondo del contratto collettivo (silenzio-assenso).", ["sei mesi","6 mesi","silenzio","tacit"]],
        ["Dal 1/7/2026 (L. 199/2025, c. 204-205): il lavoratore del settore privato alla prima assunzione aderisce automaticamente (art. 8, c. 7 e 7-quater, D.Lgs. 252/2005) se entro 60 giorni non rinuncia; restano esclusi i domestici.", ["1 luglio 2026","60 giorni","adesione automatica","199/2025"]],
        ["In mancanza di fondo contrattuale il TFR va al fondo residuale COMETA; il datore deve informare il lavoratore su accordi, meccanismo e scelte (art. 8, c. 8).", ["cometa","informativa","residual"]],
        ["Con l'adesione affluiscono TFR, contributo del lavoratore e contributo del datore previsto dal contratto; la contribuzione del lavoratore non è obbligatoria se la retribuzione annua è inferiore all'assegno sociale.", ["contributo del datore","tfr","assegno sociale"]]
      ],
      aggancio: "Dal luglio 2026 lo studio deve gestire per ogni assunto il termine dei 60 giorni e l'informativa scritta: è un adempimento nuovo e verificabile in ispezione.",
      fonti: "Simone, Legislazione sociale 2026, pp. 390-394 (Dossier Legge di bilancio 2026, riportato); Simone, Ragioneria, p. 1112."
    },

    'INPS-17': {
      sintesi: "La malattia sospende il rapporto con conservazione del posto per il periodo di comporto (art. 2110 c.c.); per molte categorie il reddito è garantito da un'indennità INPS integrata dal datore.",
      punti: [
        ["Tutela: conservazione del posto per il comporto fissato dai CCNL; i giorni contano nell'anzianità; indennità o retribuzione secondo legge e contratto.", ["2110","comporto","conservazione del posto"]],
        ["Indennità INPS per operai di industria, artigianato e agricoltura, operai e impiegati del commercio e del terziario: dal 4° giorno (i primi 3 di carenza a carico del datore se il CCNL lo prevede) fino a 180 giorni l'anno.", ["quarto giorno","4","carenza","180"]],
        ["Misura: 50% della retribuzione media giornaliera dal 4° al 20° giorno, 66,66% dal 21° al 180°; i CCNL prevedono integrazioni del datore. Per gli impiegati dell'industria paga interamente il datore.", ["50%","66,66","impiegati","integrazion"]],
        ["Adempimenti: il medico invia il certificato telematico all'INPS; il lavoratore avvisa il datore e indica l'indirizzo di reperibilità.", ["certificato","telematic","reperibilita"]],
        ["Visite di controllo: fasce di reperibilità dalle 10 alle 12 e dalle 17 alle 19, anche festivi; esonero per terapie salvavita o invalidità almeno del 67% (D.M. 11/1/2016).", ["10","12","17","19","fasce"]]
      ],
      aggancio: "L'indennità INPS è anticipata dal datore in busta e conguagliata in UniEmens; i periodi sono coperti da contribuzione figurativa.",
      fonti: "Simone, Diritto del lavoro 2026, pp. 196-199 e 204; percentuali riscontrate sulla Guida INPS «Tutela previdenziale della malattia» (settembre 2024)."
    },

    'INPS-19': {
      sintesi: "La L. 104/1992 riconosce permessi retribuiti al lavoratore con disabilità grave e a chi assiste un familiare con disabilità grave non ricoverato a tempo pieno (art. 33).",
      punti: [
        ["Lavoratore con disabilità grave: 2 ore di permesso al giorno o, in alternativa, 3 giorni al mese (art. 33, c. 6).", ["2 ore","due ore","3 giorni","tre giorni"]],
        ["Assistenza a un familiare: 3 giorni al mese, anche continuativi, per coniuge, unito civilmente, convivente di fatto, parenti e affini entro il secondo grado; il terzo grado solo se mancano o sono anziani o invalidi i più vicini (art. 33, c. 3).", ["familiare","secondo grado","terzo grado","coniuge"]],
        ["Il diritto può essere riconosciuto a più familiari in alternativa tra loro, entro il limite dei 3 giorni (è venuto meno il «referente unico»).", ["alternativa","piu familiari"]],
        ["Genitori di figli con disabilità grave fino a 3 anni: prolungamento del congedo parentale, oppure 2 ore al giorno o 3 giorni al mese; congedo straordinario fino a 2 anni (art. 42 D.Lgs. 151/2001).", ["prolungamento","congedo straordinario","2 anni","42"]],
        ["Tutele collegate: scelta della sede più vicina e divieto di trasferimento senza consenso (art. 33, c. 5); permessi indennizzati dall'INPS e coperti da contribuzione figurativa.", ["sede","trasferimento","consenso","figurativ"]]
      ],
      aggancio: "L'uso dei permessi per finalità diverse dall'assistenza può giustificare il licenziamento: tema frequente nel contenzioso e nei controlli.",
      fonti: "Simone, Diritto del lavoro 2026, pp. 180, 192-193. Più familiari possono fruire dei permessi in alternativa tra loro, fermo il limite di 3 giorni (art. 33, c. 3, L. 104/1992, mod. D.Lgs. 105/2022). Indennità a carico dell'INPS, anticipata dal datore e conguagliata con i contributi: art. 33, c. 4, L. 104/1992 e art. 43 D.Lgs. 151/2001, letti su Normattiva il 7/11/2026."
    },

    'INPS-9': {
      sintesi: "L'UniLav è il modello telematico unificato con cui tutti i datori di lavoro, pubblici e privati, comunicano assunzioni, proroghe, trasformazioni e cessazioni dei rapporti di lavoro.",
      punti: [
        ["Si usa per instaurazione, proroga, trasformazione, cessazione, distacco e trasferimento; lo possono inviare il datore o i soggetti abilitati, come il consulente del lavoro.", ["instaurazione","proroga","trasformazione","cessazione"]],
        ["L'assunzione si comunica entro il giorno precedente l'inizio del rapporto; proroghe, trasformazioni e cessazioni entro 5 giorni.", ["giorno precedente","5 giorni","cinque giorni"]],
        ["Comunicazione pluriefficace: vale verso centri per l'impiego, INPS, INAIL e Ministero del Lavoro.", ["pluriefficac","inps","inail"]],
        ["Modelli collegati: UniSomm per le agenzie di somministrazione; UniUrg per le urgenze, con UniLav entro il primo giorno utile e comunque non oltre 5 giorni; VarDatori per le variazioni del datore.", ["unisomm","uniurg","vardatori"]],
        ["Dal 1/1/2026 l'assunzione si può comunicare anche tramite il SIISL (art. 14, c. 2, D.L. 159/2025, conv. L. 198/2025).", ["siisl","159/2025","2026"]]
      ],
      aggancio: "L'omessa comunicazione preventiva è il presupposto del lavoro nero ai fini della maxisanzione: per lo studio è l'adempimento da non mancare mai.",
      fonti: "Simone, Diritto del lavoro 2026, pp. 75-78: assunzione entro il giorno precedente (art. 9-bis, c. 2, D.L. 510/1996); variazioni entro 5 giorni (art. 4-bis, c. 5, D.Lgs. 181/2000); cessazione entro 5 giorni (art. 21, c. 1, L. 264/1949)."
    },

    'INPS-X1': {
      sintesi: "Le novità 2025-2026 riguardano soprattutto l'accesso alla NASpI dopo dimissioni e la sua liquidazione anticipata, e l'estensione a 14 anni del congedo parentale dei dipendenti.",
      punti: [
        ["NASpI dal 2025: chi nei 12 mesi precedenti si è dimesso o ha risolto consensualmente un rapporto a tempo indeterminato deve maturare le 13 settimane dopo quella cessazione (L. 207/2024, art. 1, c. 171).", ["13 settimane","dimissioni","207/2024","12 mesi"]],
        ["Liquidazione anticipata della NASpI dal 2026 in due rate: 70% subito e 30% alla fine del periodo teorico, entro 6 mesi, se il beneficiario non si è rioccupato.", ["70%","30%","due rate","liquidazione anticipata"]],
        ["Importi 2026 della NASpI: soglia di 1.456,72 euro e massimale di 1.584,70 euro (circ. INPS 4/2026).", ["1.456","1.584","massimale"]],
        ["Congedo parentale: dal 1/1/2026 fruibile fino ai 14 anni del figlio per i dipendenti (L. 199/2025, c. 219; msg. INPS 251/2026), con 3 mesi all'80% entro i 6 anni.", ["14 anni","199/2025","80%","6 anni"]],
        ["Previdenza complementare: dal 1/7/2026 adesione automatica dei neoassunti salvo rinuncia entro 60 giorni (L. 199/2025, c. 204-205).", ["adesione automatica","60 giorni"]]
      ],
      aggancio: "Domanda probabile del commissario INPS: aspettarsi un rilancio sul calcolo dell'importo NASpI con il décalage del 3%.",
      fonti: "Simone, Legislazione sociale 2026, pp. 371-374, 393-394; P1_Cap09; circ. INPS 4 del 28/1/2026. Liquidazione anticipata in due rate: art. 8, c. 3-bis, D.Lgs. 22/2015, inserito dall'art. 1, c. 176, L. 199/2025, per le domande dal 1/1/2026 (msg. INPS 1215 del 7/4/2026); il Simone scrive per refuso «D.Lgs. 148/2015»."
    },

    /* ===== Lotto 3 — Legislazione sociale INAIL (1/11/2026) ===== */

    'INAIL-1': {
      sintesi: "La regolarità verso l'INAIL significa aver denunciato le attività e pagato correttamente i premi; si attesta con il DURC, che verifica insieme INPS, INAIL e Casse edili.",
      punti: [
        ["Presupposti: denuncia di esercizio e delle variazioni, autoliquidazione corretta entro il 16 febbraio con dichiarazione delle retribuzioni, pagamento dei premi o delle rate.", ["denuncia","autoliquidazione","16 febbraio","premi"]],
        ["Verifica: DURC on line su codice fiscale, valido 120 giorni; in caso di debito l'INAIL invia via PEC l'invito a regolarizzare entro 15 giorni.", ["durc","120 giorni","15 giorni","invito"]],
        ["Ritardi e omissioni generano sanzioni civili (art. 116, c. 8, L. 388/2000), uguali per INPS e INAIL; i premi si prescrivono in 5 anni.", ["sanzioni civili","388","5 anni","prescri"]],
        ["Si può rateizzare il debito non ancora iscritto a ruolo (art. 2, c. 11, D.L. 338/1989), mantenendo la regolarità.", ["rateizz","rateazione","ruolo"]],
        ["La regolarità è condizione per le riduzioni del tasso (oscillazione), per gli incentivi alla prevenzione e per ogni agevolazione.", ["oscillazione","riduzion","incentiv"]]
      ],
      aggancio: "Nel 2025 la domanda di busta parlava di «regolarità contributiva INAIL»: il commissario INAIL apprezza il collegamento fra regolarità e accesso alle riduzioni del premio.",
      fonti: "Simone, Legislazione sociale 2026, pp. 259-260, 281-283, 341-344, 443-445."
    },

    'INAIL-2': {
      sintesi: "Chi avvia un'attività soggetta all'obbligo assicurativo, o apre una nuova sede, deve fare telematicamente la denuncia di esercizio all'INAIL, che costituisce il rapporto assicurativo e calcola il premio (art. 12 T.U. D.P.R. 1124/1965; D.I. 27/2/2019).",
      punti: [
        ["Denuncia di iscrizione contestuale all'inizio dell'attività, con lavorazioni svolte e retribuzioni presunte per ogni sede; se l'urgenza non lo consente, entro 5 giorni motivando il ritardo (art. 12, c. 2).", ["denuncia di esercizio","iscrizione","contestual","5 giorni","retribuzioni presunte"]],
        ["L'INAIL attribuisce codice ditta, una PAT per ogni sede, la voce di tariffa e il tasso; entro 30 giorni rilascia il certificato di assicurazione con il premio e la scadenza.", ["codice ditta","pat","posizione assicurativa territoriale","certificato","30 giorni"]],
        ["Il primo premio si paga in via anticipata sulle retribuzioni presunte, poi si regola con l'autoliquidazione.", ["anticipat","presunt","autoliquidazione"]],
        ["Nuova sede o nuova lavorazione: denuncia entro 30 giorni (art. 12, c. 3-4) e, per una sede nuova, una nuova PAT.", ["nuova sede","30 giorni","variazion"]],
        ["La tutela del lavoratore decorre comunque dall'inizio dell'attività, anche senza denuncia, per l'automaticità delle prestazioni (art. 67 T.U.).", ["automaticita","67","inizio"]]
      ],
      aggancio: "Per una nuova impresa la denuncia INAIL passa dalla Comunicazione Unica (ComUnica) insieme a registro imprese, INPS e Agenzia delle Entrate.",
      fonti: "Simone, Legislazione sociale 2026, pp. 263, 336, 338-339."
    },

    'INAIL-4': {
      sintesi: "Ogni variazione dell'attività assicurata, del titolare, della sede o delle lavorazioni va denunciata telematicamente all'INAIL entro 30 giorni (art. 12, c. 3-4, T.U.; art. 14 D.I. 27/2/2019).",
      punti: [
        ["Oggetto: cessazione o avvio di lavorazioni, cambi di titolare, domicilio, residenza o sede dell'azienda.", ["variazion","lavorazion","titolare","sede"]],
        ["Termine: 30 giorni, con modalità esclusivamente telematica.", ["30 giorni","trenta giorni","telematic"]],
        ["La variazione incide sulla voce di tariffa e sul tasso applicato: se il rischio aumenta e la denuncia è tardiva o omessa, l'INAIL recupera la differenza di premio con le sanzioni civili.", ["tasso","premio","differenza","sanzioni civili"]],
        ["Se il rischio diminuisce, la variazione tardiva non produce di regola effetti retroattivi a favore dell'impresa.", ["diminui","retroattiv"]],
        ["Ai premi non pagati per effetto dell'omissione si applicano le sanzioni civili per omissione o evasione (art. 116 L. 388/2000), secondo che i dati risultassero o meno dalle denunce.", ["omission","evasion","116"]]
      ],
      aggancio: "In studio la variazione INAIL va fatta insieme all'aggiornamento della visura e dell'inquadramento INPS, per non avere tassi sbagliati in autoliquidazione.",
      fonti: "Simone, Legislazione sociale 2026, p. 339 (art. 12 T.U.; art. 14 D.I. 2019); pp. 443-445. Art. 12 T.U. (D.P.R. 1124/1965) letto su Normattiva il 7/11/2026."
    },

    'INAIL-6': {
      sintesi: "I premi INAIL non ancora iscritti a ruolo possono essere rateizzati con la stessa disciplina dei contributi INPS: dal 2025 la legge ammette fino a 60 rate mensili (art. 2, c. 11 e 11-bis, D.L. 338/1989).",
      punti: [
        ["Base: art. 2, c. 11, D.L. 338/1989; c. 11-bis introdotto dall'art. 23 L. 203/2024, con decreto interministeriale del 24/10/2025.", ["338","11-bis","203/2024","60 rate"]],
        ["Riguarda i debiti per premi e accessori non ancora affidati all'agente della riscossione; per quelli a ruolo si segue la rateazione dell'agente.", ["non iscritti a ruolo","agente della riscossione","ruolo"]],
        ["Serve una dichiarazione di temporanea difficoltà economico-finanziaria: fino a 36 rate per debiti fino a 500.000 euro, fino a 60 oltre (stesso D.I. per INPS e INAIL).", ["36","500.000","difficolta"]],
        ["La sanzione civile ridotta è subordinata al pagamento della prima rata; il mancato pagamento delle rate successive fa applicare la sanzione ordinaria.", ["prima rata","sanzione civile"]],
        ["La rateazione regolarmente onorata consente di mantenere la regolarità contributiva.", ["regolarita","durc"]]
      ],
      aggancio: "Lo stesso debito d'autoliquidazione si può anche pagare in 4 rate trimestrali senza chiedere nulla: la rateazione serve per il debito già scaduto.",
      fonti: "Simone, Legislazione sociale 2026, pp. 343-345, 445; circ. INPS 60/2026 per la disciplina comune. D.I. 24/10/2025 comune a INPS e INAIL (ecnews, fonte secondaria); regolamento del CdA INAIL non letto."
    },

    'INAIL-16': {
      sintesi: "L'obbligo assicurativo INAIL nasce quando ricorrono insieme un requisito oggettivo, l'attività pericolosa, e uno soggettivo, il lavoratore protetto (artt. 1 e 4 T.U. D.P.R. 1124/1965).",
      punti: [
        ["Requisito oggettivo (art. 1): lavori con macchine, apparecchi a pressione, impianti elettrici o termici, o in ambienti organizzati in cui questi sono usati; più 28 lavorazioni pericolose elencate; in agricoltura tutte le attività.", ["macchine","pericolos","28","ambiente organizzato"]],
        ["Rischio ambientale: sono assicurati anche gli addetti a lavori complementari che entrano in contatto con il rischio.", ["rischio ambientale","complementar"]],
        ["Requisito soggettivo (art. 4): chi presta opera manuale retribuita alle dipendenze altrui, ma la giurisprudenza include gli impiegati esposti al rischio e chi sovrintende al lavoro altrui; compresi dirigenti, parasubordinati in attività pericolose, artigiani, sportivi, giornalisti subordinati.", ["manuale","dipendenze","dirigenti","parasubordinat","artigian"]],
        ["Premio a carico del datore (art. 27); per i parasubordinati 1/3 lavoratore e 2/3 committente.", ["carico del datore","27","un terzo"]],
        ["L'assicurazione opera anche se il datore non ha adempiuto: automaticità delle prestazioni (art. 67), esclusa per gli autonomi.", ["automaticita","67"]]
      ],
      aggancio: "Il D.Lgs. 38/2000 ha esteso tutela e soggetti protetti: è la riforma da citare insieme al T.U.",
      fonti: "Simone, Legislazione sociale 2026, pp. 335-337, 340."
    },

    'INAIL-23': {
      sintesi: "La tariffa ordinaria dei premi INAIL, approvata con decreto interministeriale del 27/2/2019 e in vigore dal 2019, fissa per ogni lavorazione una voce e un tasso medio, distinti per gestione tariffaria.",
      punti: [
        ["Quattro gestioni nell'industria (D.Lgs. 38/2000): industria, artigianato, terziario, altre attività; l'agricoltura ha regole proprie.", ["quattro gestioni","industria","artigianato","terziario","altre attivita"]],
        ["Il datore è inquadrato nella gestione secondo la classificazione INPS (art. 49 L. 88/1989); le singole lavorazioni denunciate sono classificate nelle voci del nomenclatore.", ["classificazione","nomenclatore","voce","49"]],
        ["Premio ordinario = retribuzioni imponibili × tasso della voce (per mille), per ogni PAT.", ["retribuzion","tasso","per mille","pat"]],
        ["Novità 2019: oscillazione per andamento infortunistico basata sulla gravità degli eventi e calcolata sull'intera PAT, non più sulla singola voce.", ["oscillazione","gravita","andamento"]],
        ["Accanto ai premi ordinari esistono premi speciali unitari per alcune categorie (art. 42 T.U.), aggiornati con decreti del 2019 e del 2022.", ["premi speciali","42"]]
      ],
      aggancio: "Un inquadramento sbagliato della lavorazione sposta il tasso per tutti i dipendenti: è la prima cosa da controllare quando un cliente contesta il premio.",
      fonti: "Simone, Legislazione sociale 2026, pp. 336, 339-341 (circ. INAIL 28/2021 e 45/2022, riportate)."
    },

    'INAIL-8': {
      sintesi: "L'infortunio sul lavoro è la lesione causata da una causa violenta in occasione di lavoro, da cui derivi la morte o un'inabilità permanente, oppure un'inabilità temporanea assoluta di oltre tre giorni (art. 2 T.U.).",
      punti: [
        ["Lesione: ogni alterazione dell'organismo fisico o psichico; conseguenze rilevanti la morte e l'inabilità.", ["lesione","morte","inabilita"]],
        ["Causa violenta: fattore esterno che agisce in modo rapido e concentrato; il concorso di cause preesistenti non esclude l'infortunio.", ["causa violenta","rapid","concorso"]],
        ["Occasione di lavoro: nesso tra attività e evento, che dipende da un rischio inerente o connesso al lavoro.", ["occasione di lavoro","nesso"]],
        ["Inabilità: temporanea (sempre assoluta) oltre 3 giorni; permanente assoluta o parziale, indennizzata come danno biologico.", ["temporanea","permanente","tre giorni","3 giorni"]],
        ["Indennizzabilità: rischio specifico e rischio generico aggravato sì, rischio elettivo no.", ["rischio specifico","generico aggravato","elettivo"]]
      ],
      aggancio: "Dal 2000 è compreso anche l'infortunio in itinere: collegare la definizione alle sue estensioni mostra padronanza.",
      fonti: "Simone, Legislazione sociale 2026, pp. 345-346."
    },

    'INAIL-9': {
      sintesi: "L'infortunio in itinere è quello che avviene nel normale percorso tra abitazione e lavoro, tra due luoghi di lavoro o verso il luogo abituale dei pasti se manca la mensa (art. 2 T.U., come modificato dall'art. 12 D.Lgs. 38/2000).",
      punti: [
        ["Tre percorsi tutelati: casa-lavoro e ritorno; tra due luoghi di lavoro per chi ha più rapporti; lavoro-luogo dei pasti senza mensa aziendale.", ["casa","abitazione","due luoghi","pasti","mensa"]],
        ["Esclusi interruzioni e deviazioni non necessitate; sono necessitate quelle per forza maggiore, esigenze essenziali e improrogabili o obblighi penalmente rilevanti.", ["interruzion","deviazion","necessitat","forza maggiore"]],
        ["Mezzo privato tutelato se necessario per distanza o mancanza di mezzi pubblici, tenendo conto anche delle esigenze familiari; la bicicletta è sempre considerata necessitata.", ["mezzo privato","necessari","bicicletta","velocipede"]],
        ["Dal 2025 la tutela copre anche gli studenti nel tragitto da e verso il luogo dei percorsi di formazione scuola-lavoro (art. 7 D.L. 159/2025, conv. L. 198/2025).", ["studenti","scuola-lavoro","159/2025"]],
        ["Restano i requisiti di base: lesione e causa violenta; nel rischio elettivo la tutela viene meno.", ["elettivo","causa violenta"]]
      ],
      aggancio: "Domanda tipica di rilancio: la sosta al bar o per accompagnare i figli a scuola è deviazione necessitata? Dipende dal caso: va spiegato il criterio delle esigenze essenziali.",
      fonti: "Simone, Legislazione sociale 2026, pp. 346-347 (circ. INAIL 1/2026, riportata)."
    },

    'INAIL-10': {
      sintesi: "La distinzione tra rischio specifico, generico ed elettivo serve a stabilire se c'è occasione di lavoro e quindi se l'infortunio è indennizzabile.",
      punti: [
        ["Rischio specifico: legato alla mansione svolta; l'infortunio è indennizzabile.", ["specifico","mansione"]],
        ["Rischio generico: quello che corre chiunque; non indennizzabile, salvo che sia aggravato dalle circostanze del lavoro (Cass. 32473/2021).", ["generico","aggravato","chiunque"]],
        ["Rischio improprio: attività preparatorie o strumentali al lavoro, anch'esse indennizzabili (Cass. 16417/2005).", ["improprio","strumental","preparator"]],
        ["Rischio elettivo: scelta arbitraria del lavoratore per fini personali, che rompe il nesso con il lavoro; esclude l'indennizzo.", ["elettivo","arbitrari","personal"]],
        ["Requisiti del rischio elettivo: atto volontario e abnorme, motivi personali, nessun nesso con il lavoro.", ["abnorme","volontari"]]
      ],
      aggancio: "In agricoltura l'occasione di lavoro si presume fino a prova contraria: utile se il commissario chiede del settore agricolo.",
      fonti: "Simone, Legislazione sociale 2026, pp. 345-346 (giurisprudenza riportata; istruzione operativa INAIL 1/3/2021)."
    },

    'INAIL-19': {
      sintesi: "Perché ci sia infortunio indennizzabile devono coesistere tre elementi: la lesione, la causa violenta e l'occasione di lavoro (art. 2 T.U.).",
      punti: [
        ["Lesione: alterazione dell'organismo fisico o psichico, con morte o inabilità.", ["lesione","organismo"]],
        ["Causa violenta: fatto esterno, rapido e concentrato nel tempo, che produce la lesione; è ciò che distingue l'infortunio dalla malattia professionale, a causa lenta.", ["causa violenta","rapid","lenta"]],
        ["Il concorso di condizioni preesistenti o sopravvenute non esclude la causa violenta.", ["concorso","preesistent"]],
        ["Occasione di lavoro: nesso tra prestazione ed evento, legato al rischio dell'attività (Cass. 29300/2022); è il requisito più delicato.", ["occasione di lavoro","nesso","rischio"]],
        ["Esclusione per rischio elettivo; nessuna esclusione per semplice colpa del lavoratore.", ["elettivo","colpa"]]
      ],
      aggancio: "Nella risposta conviene dire che la colpa del lavoratore non toglie l'indennizzo: lo esclude solo il rischio elettivo o il dolo.",
      fonti: "Simone, Legislazione sociale 2026, pp. 345-346."
    },

    'INAIL-11': {
      sintesi: "Il datore di lavoro deve denunciare all'INAIL, in via telematica, ogni infortunio non guaribile entro tre giorni: entro 2 giorni dalla ricezione dei dati del certificato, entro 24 ore se mortale o con pericolo di morte (art. 53 T.U.).",
      punti: [
        ["Il lavoratore avvisa subito il datore, anche per infortuni lievi; il medico trasmette il certificato all'INAIL in via telematica.", ["avvisa","certificato","medico","telematic"]],
        ["Denuncia entro 2 giorni, che decorrono dal giorno successivo a quello in cui il datore ha ricevuto il numero identificativo del certificato (circ. INAIL 24/2021).", ["2 giorni","due giorni","numero identificativo"]],
        ["Infortunio mortale o con pericolo di morte: denuncia entro 24 ore.", ["24 ore","mortal","pericolo di morte"]],
        ["Comunicazione a fini statistici (SINP) entro 48 ore per gli infortuni con assenza di almeno un giorno oltre quello dell'evento (art. 18, c. 1, lett. r, D.Lgs. 81/2008).", ["comunicazione","48 ore","sinp","un giorno"]],
        ["Dal marzo 2025 il registro infortuni telematico raccoglie denunce e comunicazioni ed è consultabile da ispettori, datori e consulenti delegati.", ["registro infortuni","telematico"]]
      ],
      aggancio: "Denuncia e comunicazione sono due adempimenti diversi, con soglie diverse (oltre 3 giorni e almeno 1 giorno): confonderle è l'errore tipico.",
      fonti: "Simone, Legislazione sociale 2026, pp. 348-349 (circ. INAIL 24/2021, 25/2022, 33/2019, riportate). Sanzione per omessa o tardiva denuncia (artt. 53-54 T.U.): depenalizzata dalla L. 561/1993 (art. 1, lett. d), da 500.000 a 3.000.000 di lire (art. 2, lett. b), importi quintuplicati dall'art. 1, c. 1177, L. 296/2006, pari a 1.291,14-7.746,85 euro; testi letti su Normattiva il 7/11/2026, conversione a 1.936,27 lire per euro."
    },

    'INAIL-12': {
      sintesi: "La malattia professionale va comunicata dal lavoratore al datore entro 15 giorni dalla manifestazione, e il datore la denuncia all'INAIL in via telematica nei 5 giorni successivi (artt. 52-53 T.U.).",
      punti: [
        ["Il lavoratore informa il datore entro 15 giorni dalla manifestazione della malattia.", ["15 giorni","quindici giorni"]],
        ["Il datore presenta la denuncia telematica entro 5 giorni, con il riferimento al certificato medico.", ["5 giorni","cinque giorni","denuncia","certificato"]],
        ["Si applicano le stesse modalità della denuncia di infortunio.", ["stesse modalita","infortunio"]],
        ["Per le malattie tabellate la denuncia entro il periodo massimo di indennizzabilità consente la presunzione del nesso causale.", ["tabellat","periodo massimo","presunzione"]],
        ["Il medico che riconosce una malattia professionale ha un autonomo obbligo di denuncia (art. 139 T.U.).", ["medico","139"]]
      ],
      aggancio: "Per lo studio conta il termine: la denuncia del datore va fatta entro 5 giorni da quando il lavoratore gli ha comunicato la malattia (art. 53 T.U.), ed è anche un segnale da riportare nella valutazione dei rischi.",
      fonti: "Simone, Legislazione sociale 2026, pp. 347-349. Obbligo di denuncia del medico: art. 139 T.U. (Brocardi). Art. 53 T.U. letto su Normattiva il 7/11/2026."
    },

    'INAIL-13': {
      sintesi: "Il sistema delle malattie professionali è misto: per quelle tabellate il nesso con il lavoro si presume, per quelle non tabellate il lavoratore deve provarlo (art. 3 T.U.; Corte cost. 179/1988; art. 10, c. 4, D.Lgs. 38/2000).",
      punti: [
        ["Malattia professionale (tecnopatia): patologia contratta nell'esercizio e a causa di lavorazioni, per esposizione prolungata a fattori di rischio.", ["tecnopatia","esposizione","lavorazion"]],
        ["Tabellate: indicate nelle tabelle di industria e agricoltura insieme alla lavorazione e al periodo massimo di indennizzabilità; presunzione legale del nesso se si prova l'adibizione e la malattia.", ["tabellat","presunzione","periodo massimo"]],
        ["Oltre il periodo massimo la presunzione cade, ma il lavoratore può provare l'origine professionale.", ["oltre","prova"]],
        ["Non tabellate: tutelate dopo Corte cost. 179/1988 e l'art. 10, c. 4, D.Lgs. 38/2000, con onere della prova a carico del lavoratore su malattia, esposizione e nesso.", ["non tabellat","179/1988","38/2000","onere della prova"]],
        ["La distinzione rileva quindi solo sul piano della prova del nesso causale (Cass. S.U. 1919/1990).", ["prova del nesso","1919"]]
      ],
      aggancio: "Per il datore conta anche l'effetto sul premio: le malattie professionali incidono sull'andamento della PAT e quindi sull'oscillazione del tasso.",
      fonti: "Simone, Legislazione sociale 2026, pp. 347-348 (circ. INAIL 35/1992, riportata). Corte cost. 10-18/2/1988 n. 179 (cortecostituzionale.it): illegittimità parziale dell'art. 3, c. 1, T.U."
    },

    'INAIL-20': {
      sintesi: "La colpa del lavoratore non esclude l'indennizzo dell'infortunio: lo escludono solo il rischio elettivo e il dolo, che consente anche l'azione di regresso dell'INAIL contro l'infortunato.",
      punti: [
        ["L'assicurazione copre anche gli infortuni dovuti a negligenza, imprudenza o imperizia del lavoratore: è una tutela sociale, non una responsabilità per colpa.", ["colpa","negligenza","imprudenza"]],
        ["Il rischio elettivo, cioè un comportamento volontario, abnorme e per fini personali estraneo al lavoro, rompe l'occasione di lavoro ed esclude l'indennizzo.", ["elettivo","abnorme","personal"]],
        ["Se l'infortunio è causato dolosamente dal lavoratore, accertato con sentenza penale, l'INAIL può agire in regresso contro di lui (art. 11, c. 4, T.U.).", ["dolo","regresso","sentenza penale"]],
        ["Sul piano della responsabilità del datore, la colpa del lavoratore non lo esonera se l'evento era prevedibile e non ha adottato le misure di sicurezza dovute (art. 2087 c.c.).", ["2087","misure di sicurezza","prevedibil"]],
        ["Il comportamento abnorme del lavoratore può interrompere il nesso causale anche ai fini della responsabilità del datore.", ["nesso","abnorme"]]
      ],
      aggancio: "Domanda insidiosa perché mescola due piani: indennizzo INAIL e responsabilità civile o penale del datore. Distinguerli subito vale metà del voto.",
      fonti: "Simone, Legislazione sociale 2026, pp. 345-346; Simone, Diritto del lavoro 2026, pp. 174-175. Regresso contro l'infortunato per dolo: art. 11, c. 4, T.U. (Brocardi). Art. 65 T.U. letto su Normattiva il 7/11/2026: perde ogni prestazione l'assicurato che ha simulato l'infortunio o ne ha aggravato dolosamente le conseguenze."
    },

    'INAIL-22': {
      sintesi: "Infortunio e malattia professionale hanno la stessa tutela e gli stessi presupposti assicurativi, ma si distinguono per la causa: violenta e concentrata nel primo, lenta e progressiva nella seconda.",
      punti: [
        ["Causa: violenta, esterna e rapida nell'infortunio; lenta, diluita nel tempo, per esposizione prolungata nella malattia professionale.", ["violenta","lenta","progressiva","esposizione"]],
        ["Nesso: occasione di lavoro per l'infortunio; per la malattia la lavorazione deve esserne la causa, con presunzione per le tabellate.", ["occasione di lavoro","causa","tabellat"]],
        ["Termini: denuncia dell'infortunio entro 2 giorni (24 ore se mortale); malattia comunicata dal lavoratore entro 15 giorni e denunciata dal datore entro 5.", ["2 giorni","15 giorni","5 giorni"]],
        ["Stesse prestazioni: inabilità temporanea, danno biologico, rendita, prestazioni ai superstiti.", ["prestazioni","danno biologico","rendita"]],
        ["L'in itinere esiste solo per l'infortunio.", ["itinere"]]
      ],
      aggancio: "Esempio pratico: la lombalgia da sollevamento improvviso è infortunio; quella da movimentazione ripetuta negli anni è malattia professionale.",
      fonti: "Simone, Legislazione sociale 2026, pp. 345-349."
    },

    'INAIL-7': {
      sintesi: "L'INAIL eroga prestazioni economiche (indennità temporanea, indennizzo del danno biologico, rendite, prestazioni ai superstiti), sanitarie e socio-sanitarie per il recupero e il reinserimento.",
      punti: [
        ["Inabilità temporanea assoluta: indennità dal 4° giorno, 60% fino al 90° giorno e 75% dal 91° alla guarigione (art. 68 T.U.; la carenza a carico del datore è nell'art. 73).", ["60%","75%","quarto giorno","inabilita temporanea"]],
        ["Danno biologico (art. 13 D.Lgs. 38/2000): dal 6% al 15% indennizzo in capitale; dal 16% rendita che copre anche le conseguenze patrimoniali; sotto il 6% franchigia.", ["danno biologico","6%","16%","capitale","rendita"]],
        ["In caso di morte: rendita ai superstiti e assegno funerario (art. 85 T.U.).", ["superstiti","assegno funerario","85"]],
        ["Prestazioni accessorie: assegno per assistenza personale continuativa, assegno di incollocabilità.", ["assistenza personale","incollocabilita"]],
        ["Prestazioni sanitarie (cure, protesi, ausili) e reinserimento lavorativo con progetti personalizzati.", ["sanitari","protesi","reinserimento"]]
      ],
      aggancio: "Il giorno dell'infortunio è a carico del datore al 100% e i tre giorni successivi al 60%, salvo migliori condizioni del CCNL.",
      fonti: "Simone, Legislazione sociale 2026, pp. 349-351. Misura: art. 68 T.U.; carenza: art. 73 (Brocardi). Il Simone cita l'art. 73 anche per la misura: impreciso."
    },

    'INAIL-14': {
      sintesi: "Per gli eventi dal 25/7/2000 l'inabilità permanente si indennizza come danno biologico: in capitale dal 6% al 15%, in rendita dal 16% al 100% (art. 13 D.Lgs. 38/2000).",
      punti: [
        ["Il grado di menomazione si accerta con la tabella delle menomazioni; si usano poi la tabella dell'indennizzo del danno biologico e quella dei coefficienti.", ["tabella","menomazion","coefficienti"]],
        ["Dal 6% al 15%: indennizzo in capitale, senza quota per le conseguenze patrimoniali.", ["6%","15%","capitale"]],
        ["Dal 16% al 100%: rendita, con una quota per il danno biologico (non legata al reddito) e una quota per le conseguenze patrimoniali calcolata sulla retribuzione.", ["16%","rendita","patrimonial","retribuzione"]],
        ["Sotto il 6% nessun indennizzo (franchigia).", ["franchigia","6%"]],
        ["Per gli eventi precedenti il 25/7/2000 valeva la rendita per inabilità permanente (dall'11%), legata alla capacità di guadagno.", ["25 luglio 2000","2000","11%","capacita di guadagno"]]
      ],
      aggancio: "Il danno biologico INAIL è «areddituale» nella quota biologica: è il punto che distingue l'indennizzo INAIL dal risarcimento civile, da cui deriva il danno differenziale.",
      fonti: "Simone, Legislazione sociale 2026, pp. 349-350 (circ. INAIL 57/2000, riportata)."
    },

    'INAIL-15': {
      sintesi: "Se l'infortunio o la malattia professionale causano la morte, l'INAIL paga una rendita ai superstiti e un assegno funerario (art. 85 T.U.).",
      punti: [
        ["Beneficiari: coniuge o unito civilmente; figli fino a 18 anni, 21 se studenti delle superiori, 26 se universitari, o inabili; in mancanza, ascendenti se a carico, fratelli e sorelle se conviventi e a carico (art. 85 T.U.).", ["coniuge","figli","18","26","ascendenti"]],
        ["Quote: 50% della retribuzione al coniuge, 20% per ogni figlio (40% se orfano di entrambi i genitori), 20% per ascendenti e collaterali; il totale non supera il 100% della retribuzione.", ["50%","20%","40%","100%"]],
        ["La vivenza a carico per ascendenti e collaterali si valuta con criteri di reddito fissati dalla legge (circ. INAIL 35/2019).", ["vivenza a carico","reddito"]],
        ["Assegno funerario una tantum ai familiari o, in mancanza, a chi ha sostenuto le spese.", ["assegno funerario","una tantum","spese"]],
        ["La rendita del coniuge cessa con un nuovo matrimonio, con il pagamento di un'indennità una tantum.", ["nuovo matrimonio"]]
      ],
      aggancio: "Il caso si collega alla responsabilità penale del datore per omicidio colposo: la rendita la paga sempre l'INAIL, che poi agisce in regresso.",
      fonti: "Simone, Legislazione sociale 2026, pp. 349-350 (circ. INAIL 35/2019, riportata). Quote, limite complessivo e tre annualità al coniuge che si risposa: art. 85 T.U. (Brocardi). Figli: 21 anni se studenti di scuola media o professionale, 26 se universitari."
    },

    'INAIL-17': {
      sintesi: "L'assicurazione INAIL esonera il datore dalla responsabilità civile, salvo che l'infortunio derivi da un reato perseguibile d'ufficio; in quel caso l'INAIL paga e poi agisce in regresso verso i responsabili (artt. 10-11 T.U.).",
      punti: [
        ["Esonero (art. 10, c. 1): le prestazioni sono pagate dall'INAIL indipendentemente dalla colpa del datore.", ["esonero","10","responsabilita civile"]],
        ["Eccezione: condanna penale per reato perseguibile d'ufficio commesso dal datore o da un suo dipendente (Corte cost. 22/1967): il lavoratore può chiedere il risarcimento.", ["reato","d'ufficio","condanna","22/1967"]],
        ["Il lavoratore ottiene solo il danno differenziale, cioè la parte del danno civile che supera l'indennizzo INAIL (art. 10, c. 6-7).", ["danno differenziale","differenzial"]],
        ["Regresso (art. 11): l'INAIL recupera dai responsabili civili le prestazioni pagate e le spese; può agire anche contro l'infortunato se l'evento è dovuto a suo dolo accertato con sentenza penale.", ["regresso","11","recupera","dolo"]],
        ["Accanto al regresso verso il datore esiste la surroga verso il terzo responsabile estraneo al rapporto (art. 1916 c.c.).", ["surroga","terzo","1916"]]
      ],
      aggancio: "Esempio: infortunio per mancanza di protezioni sui macchinari, con condanna per lesioni colpose: l'INAIL indennizza e poi chiede al datore il rimborso di quanto pagato.",
      fonti: "Simone, Diritto del lavoro 2026, pp. 174-175. Surroga verso il terzo estraneo ex art. 1916 c.c.: Cass. S.U. 3288/1997 (massima su Brocardi)."
    },

    'INAIL-18': {
      sintesi: "Le prestazioni INAIL spettano al lavoratore anche se il datore non ha denunciato l'attività o non ha pagato il premio: è il principio di automaticità (art. 67 T.U.).",
      punti: [
        ["Il lavoratore è tutelato dall'inizio dell'attività assicurata, anche senza denuncia di esercizio.", ["inizio","senza denuncia","tutelat"]],
        ["Il principio è nato proprio nell'assicurazione infortuni e poi esteso agli altri regimi.", ["nato","esteso"]],
        ["Eccezioni: non vale per i lavoratori autonomi (art. 59, c. 19, L. 449/1997) né per l'assicurazione degli infortuni domestici (art. 9, c. 3, L. 493/1999).", ["autonomi","449/1997","domestic"]],
        ["L'INAIL recupera dal datore inadempiente premi, sanzioni civili e, se c'è responsabilità, le prestazioni.", ["recupera","sanzioni","premi"]],
        ["Differenza con l'INPS: qui l'automaticità è piena per i subordinati, mentre per l'INPS opera nei limiti della prescrizione dei contributi.", ["prescrizione","inps"]]
      ],
      aggancio: "Esempio: l'apprendista assunto in nero si infortuna al primo giorno; l'INAIL indennizza, e il datore paga premi, sanzioni e maxisanzione.",
      fonti: "Simone, Legislazione sociale 2026, pp. 301, 336, 352-353. Infortuni domestici: L. 3/12/1999 n. 493 (G.U. n. 303 del 28/12/1999); «L. 93/1999» nel Simone è un refuso."
    },

    'INAIL-21': {
      sintesi: "L'indennità per inabilità temporanea assoluta sostituisce la retribuzione quando l'infortunio o la malattia professionale impediscono totalmente il lavoro: spetta dal quarto giorno fino alla guarigione clinica (art. 68 T.U.).",
      punti: [
        ["Decorrenza: dal quarto giorno successivo all'infortunio o alla manifestazione della malattia.", ["quarto giorno","4"]],
        ["Misura: 60% della retribuzione giornaliera fino al 90° giorno; 75% dal 91° giorno fino alla guarigione clinica.", ["60%","75%","90","91"]],
        ["Carenza: il datore paga l'intera retribuzione del giorno dell'infortunio e il 60% dei tre giorni successivi, salvo migliori condizioni del CCNL (art. 73).", ["giorno dell'infortunio","100%","60%","tre giorni","73"]],
        ["L'indennità la paga l'INAIL; il datore deve anticiparla quando l'Istituto glielo chiede, con rimborso a fine mese (art. 70 T.U.); molti contratti integrano fino al 100%.", ["art. 70", "rimborso", "100%"]],
        ["La durata non ha un limite fisso: dura quanto l'inabilità che impedisce totalmente il lavoro.", ["guarigione","durata"]]
      ],
      aggancio: "In busta paga è la voce più frequente in caso di infortunio: il consulente deve distinguere i giorni di carenza a carico azienda dall'indennità INAIL.",
      fonti: "Simone, Legislazione sociale 2026, p. 349; artt. 68 (misura e decorrenza) e 73 (carenza) T.U. riscontrati su Brocardi. Anticipazione da parte del datore, su richiesta dell'INAIL, con rimborso a fine mese: art. 70 T.U., letto su Normattiva il 7/11/2026."
    },

    /* ===== Lotto 4 — Elementi di ragioneria (1/11/2026) ===== */

    'RAG-1': {
      sintesi: "In bilancio l'indennità di malattia a carico dell'INPS, anticipata dal datore in busta paga, non è un costo dell'impresa ma un credito verso l'INPS da recuperare a conguaglio; è costo solo la parte a carico del datore.",
      punti: [
        ["Quota INPS (dal 4° giorno, per le categorie indennizzate): il datore la paga al lavoratore per conto dell'Istituto e se ne rivale compensandola con i contributi dovuti nella denuncia UniEmens.", ["inps","anticipa","conguaglio","uniemens","compens"]],
        ["Scrittura: in dare un credito verso l'INPS (o in diminuzione del debito verso istituti previdenziali) per la quota anticipata; in avere il debito verso il dipendente.", ["credito","istituti previdenziali","dare","avere"]],
        ["Quota a carico del datore (carenza dei primi 3 giorni, integrazione prevista dal CCNL, malattia degli impiegati dell'industria): è costo del personale, voce B9 a) retribuzioni del conto economico (art. 2425 c.c.).", ["carenza","integrazion","b9","salari","retribuzioni"]],
        ["Sulla parte a carico INPS non si versano contributi effettivi: il periodo è coperto da contribuzione figurativa; sull'integrazione del datore i contributi sono dovuti.", ["figurativ","contributi"]],
        ["Ai fini del TFR i periodi di malattia si computano con la retribuzione figurativa che sarebbe spettata (art. 2120, c. 3, c.c.).", ["2120","tfr","figurativ"]]
      ],
      aggancio: "È la stessa logica degli assegni anticipati per conto dell'INPS che il manuale contabilizza in dare del conto «Istituti previdenziali»: l'impresa fa solo da cassa.",
      fonti: "Simone, Ragioneria, pp. 1094-1095 (scrittura degli importi anticipati per l'INPS, per analogia); Simone, Diritto del lavoro 2026, pp. 197-198; artt. 2120 e 2425 c.c. Anticipazione e conguaglio con i contributi: art. 1 D.L. 663/1979, letto su Normattiva il 7/11/2026; l'OIC 12 non tratta il caso in modo specifico."
    },

    'RAG-2': {
      sintesi: "L'indennità di maternità (80% della retribuzione a carico dell'INPS) è anticipata dal datore in busta e recuperata a conguaglio: in bilancio è un credito verso l'INPS, mentre l'eventuale integrazione fino al 100% prevista dal CCNL è costo del personale.",
      punti: [
        ["Indennità INPS: 80% della retribuzione media per tutto il congedo di maternità, anticipata dal datore e conguagliata con i contributi (art. 22 D.Lgs. 151/2001; art. 1 D.L. 663/1979).", ["80%","anticipa","conguagli","151"]],
        ["Scrittura: la quota INPS va in dare di un credito verso l'INPS (o a riduzione del debito verso istituti previdenziali), non tra i costi.", ["credito","inps","non","costi"]],
        ["Integrazione al 100% prevista da molti CCNL: è costo dell'impresa in B9 a) retribuzioni, con i relativi contributi in B9 b).", ["integrazion","100%","b9"]],
        ["Il periodo conta nell'anzianità anche per tredicesima e ferie, ed è coperto da contribuzione figurativa per la parte INPS.", ["anzianita","tredicesima","ferie","figurativ"]],
        ["Ai fini del TFR la maternità rientra nelle sospensioni dell'art. 2110: si accantona sulla retribuzione che sarebbe spettata (art. 2120, c. 3, c.c.).", ["tfr","2120","2110"]]
      ],
      aggancio: "I ratei di tredicesima e ferie maturati durante la maternità restano a carico dell'impresa: in assestamento si stanziano come per i periodi lavorati.",
      fonti: "P1_Cap09 § 3.2 (art. 22 D.Lgs. 151/2001); Simone, Ragioneria, pp. 1094-1095 (per analogia); artt. 2110, 2120 c.c. Anticipazione e conguaglio con i contributi: art. 1 D.L. 663/1979, letto su Normattiva il 7/11/2026; l'OIC 12 non tratta il caso in modo specifico."
    },

    'RAG-5': {
      sintesi: "I contributi a carico del datore sono un costo del personale, voce B9 b) oneri sociali del conto economico; quelli liquidati e non ancora pagati sono un debito, voce D 13) debiti verso istituti di previdenza e di sicurezza sociale dello stato patrimoniale.",
      punti: [
        ["Conto economico (art. 2425 c.c.): B9 a) salari e stipendi; B9 b) oneri sociali (contributi INPS e premi INAIL a carico del datore); B9 c) trattamento di fine rapporto.", ["b9","oneri sociali","2425","inail"]],
        ["Stato patrimoniale (art. 2424 c.c.): i contributi da versare, comprese le quote trattenute ai dipendenti, sono in D 13) debiti verso istituti di previdenza e di sicurezza sociale.", ["d 13","d13","debiti verso istituti","2424"]],
        ["Scrittura di liquidazione: in dare Oneri sociali (quota datore) e, per la quota del lavoratore, il dipendente; in avere Istituti previdenziali c/contributi.", ["liquidazione","oneri sociali","istituti previdenziali"]],
        ["Al pagamento con F24 entro il 16 del mese successivo si chiude il debito; crediti per indennità anticipate per conto dell'INPS si compensano nella denuncia.", ["f24","16","compens"]],
        ["Premio INAIL: acconto e regolazione; a fine anno l'assestamento imputa il costo di competenza in B9 b) e iscrive il debito (D 13) o il credito per il conguaglio.", ["inail","assestamento","competenza","acconto"]]
      ],
      aggancio: "Le ritenute IRPEF trattenute ai dipendenti non vanno in D 13 ma in D 12) debiti tributari: confonderle è l'errore classico.",
      fonti: "Artt. 2424 e 2425 c.c. (testo vigente su miolegale.it, dichiarato verificato su Normattiva al 10/10/2026); Simone, Ragioneria, pp. 1093-1097."
    },

    'RAG-6': {
      sintesi: "Il costo del lavoro dipendente si compone di retribuzione diretta, oneri contrattuali e differiti (mensilità aggiuntive, ferie, TFR) e oneri sociali; in bilancio è la voce B9 del conto economico.",
      punti: [
        ["Retribuzione diretta: minimo contrattuale, scatti, superminimi, indennità e straordinari corrisposti mese per mese.", ["retribuzione diretta","minimo","scatti","straordinar"]],
        ["Oneri contrattuali e differiti: tredicesima e quattordicesima, ferie e permessi maturati e non goduti, premi, quota annua di TFR.", ["tredicesima","quattordicesima","ferie","tfr"]],
        ["Oneri sociali: contributi INPS e premio INAIL a carico del datore; il TFR non è base contributiva.", ["oneri sociali","inps","inail"]],
        ["Schema dell'art. 2425 c.c.: B9 a) salari e stipendi, b) oneri sociali, c) trattamento di fine rapporto, d) trattamento di quiescenza e simili, e) altri costi.", ["b9","salari e stipendi","quiescenza","altri costi"]],
        ["Fuori dalla B9: i compensi ad amministratori, sindaci e revisori vanno in B7 tra i costi per servizi. Il costo del lavoro interinale (somministrato), invece, secondo l'OIC 12 si iscrive in B9.", ["b7","servizi","somministra","amministratori"]]
      ],
      aggancio: "Per il cliente il costo orario reale è quasi il doppio del netto in busta: è il calcolo che lo studio fa per i preventivi di assunzione.",
      fonti: "Simone, Ragioneria, pp. 1012-1013, 1093-1094 (cita anche l'indennità di contingenza, ormai conglobata nei minimi); art. 2425 c.c. (miolegale.it, verificato su Normattiva al 10/10/2026). OIC 12 (2024), par. 63 (B7) e 66 (B9, compreso il lavoro interinale)."
    },

    'RAG-7': {
      sintesi: "Alla cessazione il TFR accumulato viene pagato al lavoratore: in contabilità si chiude il fondo TFR per la quota maturata, si rileva la quota dell'anno in corso e si trattengono le imposte come sostituto d'imposta.",
      punti: [
        ["Si calcola la quota dell'ultimo anno (retribuzione/13,5 meno lo 0,50%) e la rivalutazione per la frazione d'anno, che si iscrivono a costo B9 c) e ad incremento del fondo.", ["13,5","0,50","frazione","rivalutazione"]],
        ["Liquidazione: in dare Fondo TFR (passivo C dello stato patrimoniale) per l'intero importo; in avere un debito verso il dipendente c/liquidazione TFR.", ["fondo tfr","dare","debito","liquidazione"]],
        ["Imposte: il TFR è a tassazione separata (artt. 17 e 19 TUIR); la ritenuta va in avere a Erario c/ritenute e si versa con F24, il netto si paga al lavoratore.", ["tassazione separata","17","19","erario","ritenut"]],
        ["Se il TFR è stato versato a un fondo pensione o al Fondo di Tesoreria INPS, per quelle quote paga il fondo o l'INPS, non l'impresa.", ["fondo pensione","tesoreria","inps"]],
        ["Anticipazioni già erogate (art. 2120 c.c.: dopo 8 anni, fino al 70%) si detraggono dal TFR finale.", ["anticipazion","70%","8 anni","detratt"]]
      ],
      aggancio: "In caso di insolvenza del datore il TFR lo paga il Fondo di garanzia INPS: collegamento con la legislazione sociale.",
      fonti: "Art. 2120 c.c. (NORMA_Codice_civile_lavoro); Simone, Ragioneria, pp. 1110-1114; P2_00_PARAMETRI § 10."
    },

    'RAG-9': {
      sintesi: "Il conto «Personale c/retribuzioni» (o Dipendenti c/retribuzioni) è un conto finanziario di debito che accoglie in avere le retribuzioni lorde maturate e in dare le trattenute, gli acconti e il pagamento del netto.",
      punti: [
        ["Natura: debito di regolamento verso i dipendenti, rilevato nella sezione avere quando matura la retribuzione.", ["debito","avere","matura"]],
        ["Rilevazione della paga: in dare Salari e stipendi (costo B9 a), in avere Personale c/retribuzioni per il lordo.", ["salari e stipendi","lordo","b9"]],
        ["In dare si chiudono: le ritenute previdenziali a carico del lavoratore (contro Istituti previdenziali), l'IRPEF trattenuta (contro Erario c/ritenute), gli acconti già pagati.", ["ritenute","istituti previdenziali","erario","acconti"]],
        ["Il saldo residuo è il netto in busta, che si paga con banca: dopo il pagamento il conto si chiude a zero.", ["netto","banca","zero","pagamento"]],
        ["Se il pagamento avviene il mese successivo, il saldo a fine esercizio va in stato patrimoniale tra i debiti, voce D 14) altri debiti.", ["d 14","d14","altri debiti","fine esercizio"]]
      ],
      aggancio: "Per lo studio paghe è il ponte tra cedolino e contabilità: il riepilogo del libro unico dà i totali di lordo, trattenute e netto da registrare.",
      fonti: "Simone, Ragioneria, pp. 1094-1095; art. 2424 c.c. (voce D 14)."
    },

    'RAG-17': {
      sintesi: "I compensi ad amministratori e sindaci non sono costi del personale dipendente ma costi per servizi (voce B7 del conto economico); per gli amministratori sono fiscalmente deducibili nell'esercizio in cui sono pagati (art. 95, c. 5, TUIR).",
      punti: [
        ["Classificazione civilistica: B7 costi per servizi, compresi i contributi alla gestione separata INPS a carico della società.", ["b7","servizi","gestione separata"]],
        ["Amministratori: il compenso, se non professionale, è reddito assimilato a quello di lavoro dipendente (art. 50, c. 1, lett. c-bis, TUIR) con ritenute come per i dipendenti; contributi in gestione separata, 2/3 a carico della società e 1/3 dell'amministratore.", ["assimilat","50","c-bis","due terzi","2/3"]],
        ["Deducibilità: per cassa, nell'esercizio in cui sono corrisposti (art. 95, c. 5, TUIR); il compenso di competenza non pagato si riprende in aumento in dichiarazione.", ["95","corrisposti","cassa","deducibil"]],
        ["Sindaci e revisori: se professionisti, emettono fattura; il costo è in B7 per competenza.", ["sindaci","fattura","competenza"]],
        ["Il compenso è stabilito all'atto della nomina dall'organo competente, salvo diversa disposizione dello statuto (art. 2389 c.c.).", ["compenso", "statuto", "2389"]]
      ],
      aggancio: "Il CdL gestisce il cedolino dell'amministratore e il flusso UniEmens della gestione separata, ma il costo non va mai in B9.",
      fonti: "Art. 95, c. 5, TUIR (917_1986_TUIR.md in libreria); art. 2425 c.c. OIC 12 (2024), par. 63 (B7); art. 50, c. 1, lett. c-bis, TUIR (libreria); art. 2389 c.c. letto su Normattiva il 7/11/2026."
    },

    'RAG-21': {
      sintesi: "«Salari e stipendi» è il conto economico di costo che accoglie le retribuzioni lorde di competenza dei dipendenti; confluisce nella voce B9 a) del conto economico.",
      punti: [
        ["Natura: conto di reddito acceso a un costo; si movimenta in dare quando matura la retribuzione, in contropartita al debito verso i dipendenti.", ["costo","dare","matura","debito"]],
        ["Contenuto: retribuzione lorda (minimi, scatti, superminimi, straordinari, indennità), mensilità aggiuntive, ferie e permessi maturati.", ["lorda","mensilita","straordinar","ferie"]],
        ["Restano fuori: contributi a carico del datore (Oneri sociali, B9 b), quota TFR (B9 c), indennità pagate per conto dell'INPS.", ["oneri sociali","tfr","per conto"]],
        ["In assestamento si integra con i ratei di tredicesima, quattordicesima e ferie maturati e non ancora pagati.", ["assestamento","ratei","tredicesima"]],
        ["A fine esercizio si chiude al conto economico; nel bilancio è esposto in B9 a) salari e stipendi (art. 2425 c.c.).", ["b9","2425","conto economico"]]
      ],
      aggancio: "Distinguere sempre il costo lordo (Salari e stipendi) dal debito netto verso i dipendenti (Personale c/retribuzioni).",
      fonti: "Simone, Ragioneria, pp. 1094-1095, 1110-1111; art. 2425 c.c."
    },

    'RAG-22': {
      sintesi: "Il fondo TFR è la passività che accoglie il TFR maturato dai dipendenti e rimasto in azienda (voce C del passivo, art. 2424 c.c.): aumenta con le quote annue e le rivalutazioni, diminuisce con l'imposta sostitutiva, le anticipazioni e le liquidazioni.",
      punti: [
        ["Natura e iscrizione: debito certo verso i dipendenti, iscritto per l'importo calcolato a norma dell'art. 2120 c.c. (art. 2424-bis c.c.).", ["2424-bis","2120","debito","passivo"]],
        ["Incrementi: quota annua (retribuzione/13,5, meno lo 0,50% recuperato dall'INPS) e rivalutazione al 31/12 (1,5% fisso più 75% dell'aumento ISTAT) sul fondo dell'anno precedente.", ["quota annua","13,5","1,5","75%","rivalutazione"]],
        ["Decrementi: imposta sostitutiva del 17% sulla rivalutazione (acconto 16 dicembre, saldo 16 febbraio); anticipazioni; liquidazioni alla cessazione.", ["17%","imposta sostitutiva","anticipazion","liquidazion"]],
        ["Quote destinate a fondi pensione o al Fondo di Tesoreria INPS: sono costo B9 c) ma non incrementano il fondo; diventano un debito da versare.", ["fondo pensione","tesoreria","debito"]],
        ["Nel conto economico il costo dell'esercizio (quota più rivalutazione) è in B9 c).", ["b9","conto economico"]]
      ],
      aggancio: "Dal 2007 nelle imprese con 50 o più dipendenti il TFR non destinato ai fondi va al Fondo di Tesoreria INPS: in quelle imprese il fondo TFR resta solo per le quote ante 2007. Dal 2026 l'obbligo vale anche per chi raggiunge i 50 addetti dopo l'inizio dell'attività (media dell'anno precedente; per il 2026-2027 solo se la media è almeno 60); dal 2032 la soglia scende a 40 addetti (art. 1, c. 756, L. 296/2006).",
      fonti: "Artt. 2120, 2424, 2424-bis c.c.; Simone, Ragioneria, pp. 1110-1114; P2_00_PARAMETRI § 10 (imposta sostitutiva 17%: L. 190/2014 da fonte secondaria). Fondo di Tesoreria: art. 1, c. 755-756, L. 296/2006, testo vigente letti su Normattiva il 7/11/2026."
    },

    'RAG-23': {
      sintesi: "La quota annua di TFR è pari alla retribuzione dell'anno divisa per 13,5, ridotta dello 0,50% della retribuzione imponibile versato all'INPS (art. 2120 c.c.; L. 297/1982).",
      punti: [
        ["Calcolo: retribuzione annua utile ÷ 13,5; frazioni di mese di almeno 15 giorni contano come mese intero.", ["13,5","15 giorni","retribuzione annua"]],
        ["Retribuzione utile: tutte le somme corrisposte a titolo non occasionale, comprese le prestazioni in natura, esclusi i rimborsi spese, salvo diversa previsione dei contratti collettivi.", ["non occasional","rimborsi spese","contratti collettivi","natura"]],
        ["Nei periodi di malattia, infortunio, maternità e cassa integrazione si computa la retribuzione che sarebbe spettata (art. 2120, c. 3).", ["malattia","maternita","cassa integrazione","sarebbe spettata"]],
        ["Dalla quota si detrae il contributo dello 0,50% già versato all'INPS (art. 3 L. 297/1982).", ["0,50","297"]],
        ["Contabilmente: in dare Accantonamento TFR (B9 c), in avere Fondo TFR o, se destinata altrove, debito verso fondo pensione o INPS.", ["accantonamento","b9","fondo tfr"]]
      ],
      aggancio: "Esempio: retribuzione annua 27.000 euro → 27.000 / 13,5 = 2.000 euro, meno 0,50% di 27.000 = 135 euro: quota netta 1.865 euro.",
      fonti: "Art. 2120 c.c. (NORMA_Codice_civile_lavoro); Simone, Ragioneria, pp. 1110-1113; P2_00_PARAMETRI § 10."
    },

    'RAG-3': {
      sintesi: "Il bene strumentale è il bene destinato a essere utilizzato durevolmente nell'attività dell'impresa: si iscrive tra le immobilizzazioni al costo e si ammortizza in base alla residua possibilità di utilizzazione (artt. 2424-bis e 2426 c.c.).",
      punti: [
        ["Definizione: elementi patrimoniali destinati a essere utilizzati durevolmente (art. 2424-bis, c. 1); è la destinazione, non la natura del bene, a fare l'immobilizzazione.", ["durevolmente","2424-bis","destinazione"]],
        ["Iscrizione al costo di acquisto, compresi gli oneri accessori (trasporto, montaggio, notaio), o al costo di produzione interno (art. 2426, n. 1).", ["costo","accessori","produzione","2426"]],
        ["Ammortamento sistematico in relazione alla residua possibilità di utilizzazione (art. 2426, n. 2); inizia quando il bene è pronto per l'uso.", ["ammortamento","sistematic","residua possibilita","pronto per l'uso"]],
        ["In stato patrimoniale: B II immobilizzazioni materiali, esposte al netto del fondo ammortamento; la quota annua va in B10 b) del conto economico.", ["b ii","fondo ammortamento","b10"]],
        ["Alla cessione si elimina il valore netto contabile e la differenza con il prezzo è plusvalenza o minusvalenza.", ["plusvalenza","minusvalenza","valore netto contabile"]]
      ],
      aggancio: "Fiscalmente l'ammortamento segue i coefficienti ministeriali (art. 102 TUIR, D.M. 31/12/1988): può divergere da quello civilistico.",
      fonti: "Artt. 2424-bis e 2426 c.c. (miolegale.it e filodiritto.com, testo vigente); Simone, Ragioneria, pp. 1072-1073, 1134-1138 (OIC 16). Art. 102, c. 2, TUIR (libreria); D.M. 31/12/1988, G.U. n. 27 del 2/2/1989, S.O. 8 (gazzettaufficiale.it)."
    },

    'RAG-4': {
      sintesi: "I costi pluriennali sono costi sostenuti in un esercizio ma con utilità per più esercizi: si iscrivono tra le immobilizzazioni immateriali e si ripartiscono con l'ammortamento (art. 2426, n. 5, c.c.).",
      punti: [
        ["Esempi: costi di impianto e di ampliamento, costi di sviluppo, software, migliorie su beni di terzi.", ["impianto","ampliamento","sviluppo","migliorie"]],
        ["Iscrizione nell'attivo con il consenso del collegio sindacale, ove esistente, solo se hanno utilità pluriennale (art. 2426, n. 5).", ["collegio sindacale","consenso","utilita pluriennale"]],
        ["Ammortamento: impianto e ampliamento entro 5 anni; sviluppo secondo la vita utile o, se non stimabile, entro 5 anni.", ["5 anni","cinque anni","vita utile"]],
        ["Finché non sono ammortizzati si possono distribuire dividendi solo se restano riserve disponibili sufficienti a coprirli.", ["dividendi","riserve"]],
        ["Dal 2016 la pubblicità e la ricerca non sono più capitalizzabili (D.Lgs. 139/2015): la ricerca di base è costo di periodo (OIC 24, par. 47) e la pubblicità resta nell'attivo solo se ha i requisiti dei costi di impianto e ampliamento (par. 100).", ["pubblicita","ricerca","139/2015"]]
      ],
      aggancio: "Esempio pratico: le spese notarili di costituzione di una S.r.l. cliente sono costi di impianto da ammortizzare in massimo 5 anni.",
      fonti: "Art. 2426, n. 5, c.c. (miolegale.it, testo vigente dal 2016); art. 2424 c.c. (voce B I); Simone, Ragioneria, pp. 1012, 1073-1074 (che elenca ancora la pubblicità: dato superato). OIC 24 (2019): par. 47 (ricerca di base, costo di periodo), 49 (sviluppo), 65 (impianto e ampliamento entro 5 anni), 100 (pubblicità tolta da BI2)."
    },

    'RAG-8': {
      sintesi: "Le immobilizzazioni sono beni destinati a un uso durevole e si dividono in materiali, immateriali e finanziarie (art. 2424 c.c., voce B dell'attivo); le prime due si ammortizzano.",
      punti: [
        ["Materiali (B II): terreni e fabbricati, impianti e macchinari, attrezzature, altri beni, immobilizzazioni in corso; hanno consistenza fisica.", ["materiali","b ii","fabbricati","impianti"]],
        ["Immateriali (B I): costi di impianto e ampliamento, costi di sviluppo, brevetti, concessioni, licenze e marchi, avviamento; prive di consistenza fisica.", ["immateriali","b i","brevetti","avviamento"]],
        ["Valutazione al costo di acquisto o di produzione, con ammortamento sistematico (art. 2426, n. 1-2); svalutazione se il valore durevolmente si riduce.", ["costo","ammortamento","svalutazion"]],
        ["Avviamento: iscrivibile solo se acquisito a titolo oneroso, con il consenso del collegio sindacale; ammortamento secondo la vita utile o, se non stimabile, entro 10 anni (art. 2426, n. 6).", ["titolo oneroso","10 anni","dieci anni","vita utile"]],
        ["Le quote annue vanno in B10 a) e b) del conto economico.", ["b10","conto economico"]]
      ],
      aggancio: "Il terreno non si ammortizza: in un fabbricato acquistato va scorporato il valore dell'area.",
      fonti: "Artt. 2424, 2424-bis, 2426 c.c. (testo vigente); Simone, Ragioneria, pp. 1072-1074, 1134-1137. OIC 16 (2019), par. 60: i terreni non si ammortizzano e il valore del fabbricato va scorporato, anche in base a stime."
    },

    'RAG-10': {
      sintesi: "Il bilancio d'esercizio è costituito da stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa, e deve rappresentare in modo veritiero e corretto la situazione patrimoniale, finanziaria e il risultato dell'esercizio (art. 2423 c.c.).",
      punti: [
        ["Composizione (art. 2423, c. 1): stato patrimoniale (art. 2424), conto economico (art. 2425), rendiconto finanziario (art. 2425-ter), nota integrativa (art. 2427).", ["stato patrimoniale","conto economico","rendiconto finanziario","nota integrativa"]],
        ["Clausola generale: chiarezza e rappresentazione veritiera e corretta (art. 2423, c. 2).", ["chiarezza","veritiera e corretta"]],
        ["Principi di redazione (art. 2423-bis): prudenza, continuità aziendale, prevalenza della sostanza, competenza, valutazione separata, costanza dei criteri.", ["prudenza","continuita","sostanza","competenza"]],
        ["Forma abbreviata (art. 2435-bis) se non si superano per due esercizi due di questi limiti: attivo 5.500.000 euro, ricavi 11.000.000 euro, 50 dipendenti medi; esonero dal rendiconto finanziario.", ["abbreviat","5.500.000","11.000.000","50"]],
        ["Micro-imprese (art. 2435-ter): attivo 220.000 euro, ricavi 440.000 euro, 5 dipendenti; esonero anche dalla nota integrativa a certe condizioni.", ["micro","220.000","440.000","5 dipendenti"]]
      ],
      aggancio: "Il bilancio è redatto dagli amministratori, approvato dall'assemblea entro 120 giorni dalla chiusura dell'esercizio (180 se la società redige il consolidato o per particolari esigenze) e depositato al registro delle imprese.",
      fonti: "Artt. 2423, 2435-bis, 2435-ter c.c. (miolegale.it, testo in vigore dal 10/8/2025, verificato su Normattiva al 10/10/2026); Simone, Ragioneria, p. 1046; Simone, Ragioneria, cap. 8 sul bilancio (scansione del 6/11/2026), pp. 1156-1158 (art. 2423-bis), 1171-1174 (limiti 5.500.000 e 11.000.000; micro 220.000 e 440.000, dopo la dir. UE 2023/2775) e 1190 (approvazione entro 120 giorni, 180 con bilancio consolidato o particolari esigenze)."
    },

    'RAG-11': {
      sintesi: "Il capitale netto (patrimonio netto) è la differenza tra attività e passività: rappresenta i mezzi propri dell'impresa ed è esposto nella voce A del passivo dello stato patrimoniale (art. 2424 c.c.).",
      punti: [
        ["Formula: patrimonio netto = attività − passività; se negativo si parla di deficit patrimoniale.", ["attivita","passivita","deficit"]],
        ["Composizione (voce A, I-X): capitale, riserva da sovrapprezzo, riserve di rivalutazione, riserva legale, riserve statutarie, altre riserve, riserva per copertura di flussi, utili o perdite portati a nuovo, utile o perdita dell'esercizio, riserva negativa per azioni proprie.", ["capitale","riserva legale","riserve","utile"]],
        ["Origine: esterna (conferimenti dei soci) o interna (utili non distribuiti, autofinanziamento).", ["conferimenti","utili non distribuiti","autofinanziamento"]],
        ["Capitale minimo: 50.000 euro per S.p.A. e S.a.p.a.; per la S.r.l. il manuale indica 10.000 euro, ma la legge consente anche un capitale inferiore, da almeno 1 euro: in tal caso conferimenti solo in denaro, versati per intero, e riserva di almeno un quinto degli utili fino a 10.000 euro (art. 2463 c.c.).", ["50.000","10.000","1 euro"]],
        ["Le riserve si distinguono dai fondi rischi: le riserve sono parti del patrimonio netto, i fondi sono passività per oneri determinati (art. 2424-bis, c. 3).", ["fondi rischi","2424-bis","passivita"]]
      ],
      aggancio: "Collegamento con la crisi d'impresa: la riduzione del capitale per perdite oltre un terzo obbliga gli amministratori a convocare l'assemblea (artt. 2446 e 2482-bis c.c.).",
      fonti: "Art. 2424 c.c. (testo vigente); Simone, Ragioneria, pp. 1022-1023. Artt. 2327, 2446, 2463 e 2482-bis c.c. letti su Normattiva il 7/11/2026."
    },

    'RAG-13': {
      sintesi: "Lo stato patrimoniale rappresenta a fine esercizio attività, passività e patrimonio netto secondo lo schema obbligatorio a sezioni contrapposte dell'art. 2424 c.c.",
      punti: [
        ["Attivo: A crediti verso soci per versamenti dovuti; B immobilizzazioni (I immateriali, II materiali, III finanziarie); C attivo circolante (I rimanenze, II crediti, III attività finanziarie, IV disponibilità liquide); D ratei e risconti.", ["immobilizzazioni","attivo circolante","rimanenze","disponibilita liquide"]],
        ["Passivo: A patrimonio netto; B fondi per rischi e oneri; C trattamento di fine rapporto di lavoro subordinato; D debiti; E ratei e risconti.", ["patrimonio netto","fondi per rischi","trattamento di fine rapporto","debiti"]],
        ["Tra i debiti: 12) debiti tributari (anche le ritenute IRPEF), 13) debiti verso istituti di previdenza e di sicurezza sociale, 14) altri debiti (anche verso i dipendenti).", ["12","13","14","tributari","previdenza"]],
        ["Crediti e debiti indicano separatamente gli importi esigibili oltre l'esercizio successivo.", ["esigibil","oltre l'esercizio"]],
        ["Le immobilizzazioni sono esposte al netto dei fondi di ammortamento e svalutazione.", ["netto","ammortamento"]]
      ],
      aggancio: "Il consulente del lavoro alimenta tre voci: il fondo TFR (C), i debiti verso istituti previdenziali (D 13) e le ritenute da versare (D 12).",
      fonti: "Art. 2424 c.c. (miolegale.it, testo in vigore dal 1/1/2016, verificato su Normattiva al 10/10/2026); Simone, Ragioneria, cap. 8 sul bilancio (scansione del 6/11/2026), pp. 1159-1163."
    },

    'RAG-14': {
      sintesi: "Il conto economico espone i costi e i ricavi di competenza dell'esercizio in forma scalare secondo l'art. 2425 c.c., fino al risultato d'esercizio.",
      punti: [
        ["A) valore della produzione: ricavi delle vendite e prestazioni, variazioni delle rimanenze, incrementi per lavori interni, altri ricavi e contributi in conto esercizio.", ["valore della produzione","ricavi","rimanenze"]],
        ["B) costi della produzione: 6 materie, 7 servizi, 8 godimento beni di terzi, 9 personale (a salari e stipendi, b oneri sociali, c TFR, d quiescenza, e altri), 10 ammortamenti e svalutazioni, 11-14 rimanenze, accantonamenti, oneri diversi.", ["costi della produzione","personale","servizi","ammortamenti"]],
        ["Differenza A − B: risultato della gestione caratteristica.", ["differenza","a - b","a-b"]],
        ["C) proventi e oneri finanziari; D) rettifiche di valore di attività e passività finanziarie; risultato prima delle imposte; 20) imposte; 21) utile o perdita.", ["finanziari","rettifiche","imposte","utile"]],
        ["Dal 2016 non esiste più l'area straordinaria (ex E): proventi e oneri straordinari sono distribuiti nelle altre voci (D.Lgs. 139/2015).", ["straordinari","139/2015","2016"]]
      ],
      aggancio: "Per l'orale basta saper collocare con sicurezza il costo del lavoro: B9 per i dipendenti, B7 per collaboratori e amministratori.",
      fonti: "Art. 2425 c.c. (miolegale.it, testo in vigore dal 1/1/2016, verificato su Normattiva); Simone, Ragioneria, cap. 8 sul bilancio (scansione del 6/11/2026), pp. 1164-1168. Eliminazione dell'area straordinaria: implicita nello schema vigente, che non la prevede."
    },

    'RAG-16': {
      sintesi: "Il piano dei conti è l'elenco ordinato e codificato dei conti che l'impresa usa per registrare i fatti di gestione, costruito in modo da produrre il bilancio e le informazioni per il controllo.",
      punti: [
        ["Funzioni: determinare reddito e capitale; seguire cassa, crediti e debiti; riclassificare i dati nello stato patrimoniale e nel conto economico.", ["reddito","capitale","riclassifica"]],
        ["Classi: conti finanziari (attivi e passivi), conti economici di reddito (costi e ricavi d'esercizio, pluriennali, rimanenze), conti di patrimonio netto.", ["finanziari","economici","patrimonio netto"]],
        ["Ogni conto ha un codice che ne indica il livello: mastro, conto, sottoconto.", ["codice","mastro","sottoconto"]],
        ["Varia da azienda ad azienda, ma deve essere raccordato agli schemi degli artt. 2424 e 2425 c.c.", ["2424","2425","raccord"]],
        ["Strumenti collegati: prima nota, libro giornale, libro mastro, bilanci di verifica (art. 2214 c.c.).", ["libro giornale","mastro","bilancio di verifica","2214"]]
      ],
      aggancio: "Per il costo del personale il piano dei conti separa salari, oneri sociali e TFR proprio per alimentare direttamente le sottovoci di B9.",
      fonti: "Simone, Ragioneria, pp. 1049-1050, 1055-1056."
    },

    'RAG-19': {
      sintesi: "Per il principio di competenza costi e ricavi si imputano all'esercizio a cui si riferiscono economicamente, indipendentemente da incasso e pagamento (art. 2423-bis, c. 1, n. 3, c.c.); il principio di cassa guarda invece al momento del movimento di denaro.",
      punti: [
        ["Competenza civilistica: si tiene conto dei proventi e degli oneri di competenza indipendentemente dalla data di incasso o di pagamento.", ["competenza","indipendentemente","incasso","pagamento"]],
        ["Strumenti di competenza: ratei e risconti, fatture da emettere e da ricevere, accantonamenti, ammortamenti, rimanenze.", ["ratei","risconti","fatture da ricevere","accantonamenti"]],
        ["Correlazione: i costi si imputano all'esercizio dei ricavi che hanno contribuito a produrre.", ["correlazione","ricavi"]],
        ["Cassa: rileva solo incassi e pagamenti; è il criterio fiscale per il reddito di lavoro autonomo (art. 54 TUIR) e per alcune voci, come i compensi agli amministratori (art. 95, c. 5, TUIR).", ["cassa","54","lavoro autonomo","95"]],
        ["Per il reddito d'impresa vale di regola la competenza fiscale (art. 109 TUIR).", ["109","reddito d'impresa"]]
      ],
      aggancio: "Esempio di lavoro: la tredicesima pagata a dicembre è competenza dell'anno, mentre gli straordinari di dicembre pagati a gennaio vanno stanziati a fine anno.",
      fonti: "Simone, Ragioneria, pp. 1117-1124 (art. 2423-bis c.c., OIC 11); art. 95, c. 5, TUIR (libreria). Artt. 54 e 109 TUIR: in libreria, contenuto da riscontrare."
    },

    'RAG-12': {
      sintesi: "La fattura deve contenere gli elementi dell'art. 21 D.P.R. 633/1972: data e numero progressivo, dati del cedente e del cessionario, natura e quantità dell'operazione, imponibile, aliquota e imposta.",
      punti: [
        ["Data e numero progressivo che la identifichi in modo univoco.", ["data","numero progressivo"]],
        ["Dati del fornitore (ditta, residenza o domicilio, partita IVA) e del cliente (dati identificativi, partita IVA o codice fiscale).", ["partita iva","codice fiscale","cliente"]],
        ["Natura, qualità e quantità dei beni o servizi; corrispettivi e altri dati per la base imponibile.", ["natura","quantita","corrispettiv","imponibile"]],
        ["Aliquota, ammontare dell'imposta e, per le operazioni senza IVA, la norma di riferimento (forfettario, esenzione, non imponibilità).", ["aliquota","imposta","norma"]],
        ["Per i servizi la fattura si emette al pagamento del corrispettivo (art. 6, c. 3); la fattura immediata va trasmessa entro 12 giorni dall'operazione.", ["pagamento","12 giorni"]]
      ],
      aggancio: "Nella fattura del CdL: onorario, contributo integrativo ENPACL 4%, IVA 22% su entrambi, ritenuta 20% sul solo onorario se il cliente è sostituto d'imposta.",
      fonti: "P2/P2_Mod05_Fattura_CdL_v2 (lezioni 1-2, 7); art. 21, c. 2 e 4, D.P.R. 633/1972, testo vigente letti su Normattiva il 7/11/2026. Dal 1/1/2027 si applica il testo unico IVA (D.Lgs. 19/1/2026 n. 10, art. 171)."
    },

    'RAG-20': {
      sintesi: "Dal 1° gennaio 2019 la fattura tra operatori residenti è di regola elettronica: è un file XML trasmesso attraverso il Sistema di Interscambio (SdI) dell'Agenzia delle Entrate; dal 2024 l'obbligo riguarda anche i forfettari.",
      punti: [
        ["Obbligo generalizzato dal 1/1/2019 per le operazioni tra soggetti residenti, anche verso privati consumatori (art. 1, c. 3, D.Lgs. 127/2015).", ["1/1/2019", "residenti", "consumatori"]],
        ["Formato XML e trasmissione obbligatoria tramite SdI, che controlla il file e lo recapita al cliente; la fattura si considera emessa solo se lo SdI la accetta.", ["xml","sistema di interscambio","sdi","recapit"]],
        ["Forfettari: obbligati dal 1/7/2022 se con ricavi o compensi oltre 25.000 euro, e da tutti dal 1/1/2024 (D.L. 36/2022).", ["forfettari","25.000","2024","36/2022"]],
        ["Termini: fattura immediata entro 12 giorni; differita entro il 15 del mese successivo; conservazione digitale a norma.", ["12 giorni","differita","15 del mese","conservazione"]],
        ["Restano fuori dall'obbligo le operazioni con l'estero (per le quali si comunicano i dati) e, per ragioni di riservatezza, le prestazioni sanitarie inviate al Sistema tessera sanitaria.", ["estero","sanitari","tessera sanitaria"]]
      ],
      aggancio: "Il bollo sulle fatture elettroniche senza IVA si assolve in modo virtuale: l'Agenzia delle Entrate integra con procedure automatizzate le fatture prive dell'annotazione e comunica le somme non versate (art. 12-novies D.L. 34/2019).",
      fonti: "P2/P2_Mod05 (lezioni 1, 7); ORALE_Simone_Diritto_Tributario_OCR («fattura elettronica»). Art. 1, c. 3, D.Lgs. 127/2015; art. 18, c. 2-3, D.L. 36/2022 (soglia di 25.000 euro); art. 21, c. 4, D.P.R. 633/1972 (12 giorni e 15 del mese successivo); art. 12-novies D.L. 34/2019 (bollo virtuale): testi vigenti letti su Normattiva il 7/11/2026."
    },

    'RAG-15': {
      sintesi: "Chi esercita arti e professioni tiene scritture semplificate per cassa (art. 19 D.P.R. 600/1973), con facoltà di optare per la contabilità ordinaria; i forfettari sono esonerati dalla tenuta delle scritture contabili.",
      punti: [
        ["Scritture: registro cronologico delle somme percepite (importo, ritenuta subita, chi ha pagato, fattura) e delle spese di cui si chiede la deduzione; uno o più conti correnti dedicati; compensi incassati con mezzi tracciabili, salvo importi unitari sotto 100 euro (art. 19 D.P.R. 600/1973).", ["registro cronologico", "conti correnti", "100 euro"]],
        ["Le somme annotate devono passare dai conti correnti dedicati, sui quali affluiscono i compensi e da cui si pagano le spese (art. 19).", ["conti correnti", "compensi", "spese"]],
        ["Il reddito di lavoro autonomo si determina per cassa: compensi incassati meno spese pagate (art. 54 TUIR).", ["cassa","54","compensi","spese"]],
        ["Restano gli obblighi IVA: fattura elettronica, liquidazioni periodiche, dichiarazione annuale; il professionista con dipendenti è anche sostituto d'imposta.", ["iva","fattura elettronica","liquidazion","sostituto"]],
        ["Forfettario (L. 190/2014): niente scritture contabili né IVA, ma conservazione dei documenti e fatturazione elettronica.", ["forfettario","190/2014","conservazione"]]
      ],
      aggancio: "È il regime contabile del consulente del lavoro stesso: un professionista in forfettario fattura con il 4% ENPACL ma senza IVA né ritenuta.",
      fonti: "P2/P2_Mod05 (lezione 6); art. 54 TUIR (libreria). Art. 19 D.P.R. 600/1973, testo vigente letti su Normattiva il 7/11/2026; dal 1/1/2027 si applica il testo unico adempimenti e accertamento (D.Lgs. 5/8/2026 n. 141, art. 368)."
    },

    'RAG-18': {
      sintesi: "La contabilità ordinaria (art. 14 D.P.R. 600/1973) è obbligatoria per le società di capitali e per le imprese oltre i limiti di ricavi; sotto i limiti le imprese individuali e le società di persone possono tenere la contabilità semplificata (art. 18).",
      punti: [
        ["Ordinaria: libro giornale, libro degli inventari, registri IVA, scritture di magazzino oltre certe soglie, registro dei beni ammortizzabili (artt. 14-16 D.P.R. 600/1973; art. 2214 c.c.).", ["libro giornale","inventari","registri iva","beni ammortizzabili"]],
        ["Obbligatoria per società di capitali ed enti commerciali, a prescindere dai ricavi.", ["societa di capitali","obbligatori"]],
        ["Semplificata: ammessa per imprese individuali e società di persone con ricavi annui fino a 500.000 euro per i servizi e 800.000 euro per le altre attività (art. 18, c. 1, D.P.R. 600/1973).", ["500.000", "800.000", "semplificata"]],
        ["Nella semplificata il reddito si determina con criterio misto di cassa e competenza (art. 66 TUIR); si può optare per l'ordinaria, con vincolo di almeno tre anni (art. 18, c. 8).", ["cassa", "competenza", "tre anni"]],
        ["Il superamento delle soglie fa passare all'ordinaria dall'anno successivo.", ["anno successivo","superamento"]]
      ],
      aggancio: "Dal 2027 queste regole confluiscono nel testo unico adempimenti e accertamento (D.Lgs. 141/2026, art. 23 per la semplificata), ma all'esame si cita ancora il D.P.R. 600/1973.",
      fonti: "Simone, Ragioneria, pp. 1055, 1116 (art. 2214 c.c.); soglie da ecnews.it (28/12/2023) e dall'art. 23 D.Lgs. 141/2026 su miolegale.it (fonti secondarie). Artt. 14 e 18, c. 1 e 8, D.P.R. 600/1973 (soglie e opzione) letti su Normattiva il 7/11/2026; art. 66 TUIR (libreria); decorrenza del testo unico adempimenti e accertamento dal 1/1/2027 (D.Lgs. 141/2026, art. 368)."
    },

    "TRIB-1": {
      sintesi: "Il reddito di lavoro dipendente nasce da un rapporto di lavoro alle dipendenze e sotto la direzione di altri (art. 49 TUIR) ed è formato da tutto ciò che il lavoratore percepisce nell'anno in relazione al rapporto (art. 51, c. 1).",
      punti: [
        ["Presupposto: rapporto di lavoro subordinato con qualsiasi qualifica, compreso il lavoro a domicilio quando è subordinato; sono redditi di lavoro dipendente anche le pensioni e le somme dell'art. 429 c.p.c. (art. 49).", ["49", "subordinat", "pensioni", "dipendenze"]],
        ["Onnicomprensività: concorrono tutte le somme e i valori, a qualunque titolo, anche come erogazioni liberali, percepiti in relazione al rapporto (art. 51, c. 1).", ["onnicomprensiv", "qualunque titolo", "erogazioni liberali"]],
        ["Criterio di cassa allargata: le somme pagate entro il 12 gennaio si considerano percepite nell'anno precedente.", ["cassa", "12 gennaio"]],
        ["Eccezioni e soglie: contributi obbligatori, fondi sanitari fino a 3.615,20 euro, mensa e buoni pasto, welfare per la generalità, fringe benefit entro soglia, trasferte (art. 51, c. 2-5).", ["3.615,20", "buoni pasto", "fringe", "trasfert", "welfare"]],
        ["Redditi sostitutivi (indennità di malattia, cassa integrazione) sono della stessa categoria (art. 6, c. 2); i redditi assimilati sono nell'art. 50.", ["sostitutiv", "assimilat", "50"]]
      ],
      aggancio: "È la base di ogni busta paga: imponibile fiscale = retribuzione imponibile meno i contributi a carico del lavoratore e le voci escluse dall'art. 51.",
      fonti: "Artt. 6, 49, 50 e 51 TUIR (917_1986_TUIR in libreria, vigente al 4/10/2026); P2_Mod04, scaletta B; P2_00_PARAMETRI § 6."
    },

    "TRIB-2": {
      sintesi: "Il modello 730 è la dichiarazione semplificata dei lavoratori dipendenti, dei pensionati e di chi ha redditi assimilati: si presenta entro il 30 settembre al sostituto d'imposta, a un CAF o a un professionista abilitato, oppure direttamente in precompilata.",
      punti: [
        ["Possono usarlo dipendenti, pensionati, percettori di indennità sostitutive, soci di cooperative, collaboratori coordinati e continuativi e altri assimilati, anche con redditi fondiari, di capitale, autonomi occasionali e alcuni redditi a tassazione separata (art. 13 D.M. 164/1999).", ["dipendenti", "pensionati", "assimilat", "164/1999"]],
        ["Lavoratori a termine: tramite CAF se il contratto dura almeno dal mese di presentazione al terzo mese successivo.", ["tempo determinato", "terzo mese", "termine"]],
        ["Esclusi: chi ha redditi d'impresa o di lavoro autonomo professionale abituale, e chi dichiara per conto di altri (deceduti, minori, interdetti).", ["esclus", "impresa", "professional"]],
        ["Termine: 30 settembre dell'anno successivo; integrativo entro il 10 novembre se a favore del contribuente; precompilata disponibile dal 30 aprile (dal 2026 entro il 20 maggio).", ["30 settembre", "10 novembre", "precompilat"]],
        ["Dal 2024 anche chi ha un sostituto può scegliere di ricevere il rimborso dall'Agenzia o pagare con F24 (art. 2 D.Lgs. 1/2024); con sostituto, conguaglio dal mese successivo al ricevimento del 730-4.", ["730-4", "conguagli", "1/2024", "f24"]]
      ],
      aggancio: "Il consulente del lavoro è tra i professionisti abilitati all'assistenza fiscale e appone il visto di conformità; come intermediario del datore gestisce i 730-4 in busta paga.",
      fonti: "Simone, Diritto tributario, pp. 485-486 (modello 730, art. 19 D.M. 164/1999) e pp. 491-492 (art. 13 D.M. 164/1999, soggetti ed esclusi)."
    },

    "TRIB-3": {
      sintesi: "Gli oneri deducibili riducono il reddito complessivo prima del calcolo dell'IRPEF (art. 10 TUIR); gli oneri detraibili riducono l'imposta lorda, di regola del 19% della spesa (art. 15 TUIR).",
      punti: [
        ["Deducibili (art. 10): contributi previdenziali obbligatori e volontari, assegni periodici al coniuge separato, spese mediche e di assistenza dei disabili, contributi alla previdenza complementare, contributi a fondi sanitari fino a 3.615,20 euro, alcune erogazioni liberali.", ["deducibil", "10", "previdenza complementare", "assegni"]],
        ["Detraibili al 19% (art. 15): interessi del mutuo per l'abitazione principale fino a 4.000 euro, spese sanitarie sulla parte oltre 129,11 euro, istruzione, attività sportive dei figli, assicurazioni vita e infortuni, spese funebri e veterinarie.", ["19%", "detraibil", "129,11", "4.000", "mutuo"]],
        ["Effetto diverso: la deduzione vale di più per chi ha l'aliquota marginale più alta; la detrazione vale la stessa percentuale per tutti.", ["aliquota marginale", "effetto"]],
        ["Tracciabilità: dal 2020 la detrazione al 19% spetta solo con pagamenti tracciabili, salvo medicinali, dispositivi medici e prestazioni di strutture pubbliche o accreditate (L. 160/2019, art. 1, c. 679; eccezioni al c. 680).", ["tracciabil", "160/2019"]],
        ["Limiti per redditi alti: oltre 75.000 euro le detrazioni sono ammesse entro 14.000 o 8.000 euro per un coefficiente legato ai figli, escluse le spese sanitarie (art. 16-ter).", ["75.000", "16-ter", "14.000"]]
      ],
      aggancio: "In busta paga il sostituto riconosce solo gli oneri che passano da lui (fondo pensione, fondo sanitario contrattuale): gli altri si fanno valere con il 730.",
      fonti: "Artt. 10, 15 e 16-ter TUIR (917_1986_TUIR in libreria; all'art. 15, c. 1, il file riportava per errore «22 per cento», corretto in 19 il 1/11/2026 su Brocardi). Tracciabilità: L. 160/2019, art. 1, c. 679-680, testo vigente letto su Normattiva il 7/11/2026."
    },

    "TRIB-4": {
      sintesi: "Le detrazioni per carichi di famiglia (art. 12 TUIR) spettano per il coniuge, per i figli dai 21 ai 29 anni (o disabili dai 30) e per gli ascendenti conviventi, se il familiare ha un reddito non superiore a 2.840,51 euro (4.000 per i figli fino a 24 anni).",
      punti: [
        ["Coniuge: 800 euro meno 110 per reddito/15.000 fino a 15.000 euro; 690 euro tra 15.000 e 40.000; poi decrescente fino ad azzerarsi a 80.000 (art. 12, c. 1, lett. a).", ["coniuge", "800", "690", "80.000"]],
        ["Figli: dal 2022 sotto i 21 anni c'è l'assegno unico; la detrazione di 950 euro resta per i figli dai 21 ai 29 anni e per i figli disabili dai 30, decrescente fino a 95.000 euro, ripartita al 50% tra i genitori salvo accordo (lett. c).", ["950", "21", "95.000", "assegno unico", "50%"]],
        ["Altri familiari: dal 2025 solo gli ascendenti conviventi, 750 euro decrescenti fino a 80.000 euro (lett. d).", ["ascendenti", "750", "convivent"]],
        ["Limite di reddito del familiare: 2.840,51 euro lordi; 4.000 euro per i figli fino a 24 anni (art. 12, c. 2).", ["2.840,51", "4.000", "24 anni"]],
        ["Non spettano per i familiari residenti all'estero dei contribuenti non cittadini UE o SEE (c. 2-bis); in busta paga il lavoratore le chiede con dichiarazione al sostituto.", ["2-bis", "estero", "dichiarazione"]]
      ],
      aggancio: "Ogni anno il consulente raccoglie le dichiarazioni dei carichi di famiglia: un familiare che supera il limite fa recuperare tutta la detrazione al conguaglio.",
      fonti: "Art. 12 TUIR (917_1986_TUIR in libreria); L. 207/2024, c. 11 (c. 2-bis); P2_Mod07 v6.1 (regole per fascia)."
    },

    "TRIB-6": {
      sintesi: "La base imponibile del lavoratore dipendente è il reddito determinato con l'art. 51 TUIR, al netto dei contributi previdenziali a suo carico e degli oneri deducibili riconosciuti dal sostituto; su di essa si applica l'IRPEF a scaglioni.",
      punti: [
        ["Si parte dalla retribuzione imponibile: tutte le somme e i valori percepiti in relazione al rapporto, con cassa allargata al 12 gennaio (art. 51, c. 1).", ["retribuzione", "12 gennaio", "51"]],
        ["Si tolgono i contributi previdenziali obbligatori a carico del lavoratore (art. 51, c. 2, lett. a) e le voci escluse o esenti (buoni pasto, welfare, fringe entro soglia).", ["contributi", "esclus", "esent"]],
        ["Si tolgono gli oneri deducibili che passano dal sostituto: previdenza complementare, contributi ai fondi sanitari contrattuali (art. 10 TUIR).", ["oneri deducibili", "previdenza complementare", "10"]],
        ["Si applicano gli scaglioni IRPEF (2026: 23% fino a 28.000, 33% fino a 50.000, 43% oltre) e poi le detrazioni (artt. 12 e 13 TUIR, ulteriore detrazione L. 207/2024).", ["23%", "33%", "43%", "detrazioni"]],
        ["Restano fuori dall'IRPEF ordinaria i redditi a tassazione separata (TFR, arretrati) e quelli a imposta sostitutiva.", ["tassazione separata", "sostitutiv", "tfr"]]
      ],
      aggancio: "Nella busta paga la catena è: imponibile previdenziale, contributi a carico del lavoratore, imponibile fiscale, IRPEF lorda, detrazioni, IRPEF netta.",
      fonti: "Artt. 10, 11, 51 TUIR (917_1986_TUIR in libreria, art. 11 vigente al 4/10/2026: 23/33/43%); P2_Mod04, scaletta B; P2_00_PARAMETRI §§ 1-6."
    },

    "TRIB-7": {
      sintesi: "La trasferta è lo spostamento temporaneo del dipendente fuori dalla sede di lavoro: le indennità e i rimborsi hanno un regime fiscale di favore fuori dal comune, mentre nel comune sono imponibili salvo i rimborsi di trasporto documentati (art. 51, c. 5, TUIR).",
      punti: [
        ["Indennità forfettaria fuori comune: esente fino a 46,48 euro al giorno in Italia e 77,47 all'estero.", ["46,48", "77,47", "forfettari"]],
        ["Se sono rimborsati o forniti gratuitamente vitto o alloggio, la quota esente scende di un terzo; se sono rimborsati entrambi, di due terzi.", ["un terzo", "due terzi", "vitto", "alloggio"]],
        ["Rimborso analitico a piè di lista: non è reddito; dal 2025 vitto, alloggio, viaggio e taxi in Italia solo se pagati con mezzi tracciabili; altre spese non documentabili fino a 15,49 euro al giorno (25,82 all'estero).", ["analitic", "tracciabil", "15,49"]],
        ["Rimborso misto: indennità ridotta più rimborso documentato delle spese.", ["misto"]],
        ["Trasferta nel comune della sede: indennità e rimborsi imponibili, salvo i rimborsi delle spese di trasporto documentate.", ["comune", "imponibil", "trasporto"]]
      ],
      aggancio: "Va distinta dal trasfertismo (art. 51, c. 6: lavoratori senza sede fissa, indennità imponibile al 50%) e dal trasferimento della sede.",
      fonti: "Art. 51, c. 5 e 6, TUIR (917_1986_TUIR in libreria); P2_00_PARAMETRI § 6 (L. 207/2024, c. 81 e 83; D.L. 84/2025)."
    },

    "TRIB-10": {
      sintesi: "La detrazione per lavoro dipendente (art. 13 TUIR) riduce l'imposta lorda in misura decrescente al crescere del reddito complessivo e si rapporta ai giorni di lavoro dell'anno; si affiancano l'ulteriore detrazione del cuneo e il trattamento integrativo.",
      punti: [
        ["Fino a 15.000 euro: 1.955 euro (minimo 690; 1.380 per i contratti a termine).", ["1.955", "15.000", "690"]],
        ["Da 15.000 a 28.000: 1.910 + 1.190 × (28.000 − reddito)/13.000; da 28.000 a 50.000: 1.910 × (50.000 − reddito)/22.000; oltre 50.000 zero.", ["1.910", "28.000", "50.000"]],
        ["Maggiorazione di 65 euro tra 25.000 e 35.000 euro (art. 13, c. 1.1), non ragguagliata ai giorni.", ["65", "25.000", "35.000"]],
        ["Ulteriore detrazione dal 2025 (L. 207/2024, c. 6): 1.000 euro tra 20.000 e 32.000, decrescente fino a 40.000; sotto 20.000 c'è una somma esente in percentuale del reddito.", ["ulteriore detrazione", "1.000", "20.000", "40.000"]],
        ["Trattamento integrativo fino a 1.200 euro per redditi fino a 15.000 se c'è capienza (D.L. 3/2020).", ["trattamento integrativo", "1.200"]]
      ],
      aggancio: "In busta paga la detrazione è stimata mese per mese sul reddito annuo presunto: il conguaglio di fine anno la ricalcola sul reddito effettivo.",
      fonti: "Art. 13 TUIR (917_1986_TUIR in libreria); P2_00_PARAMETRI §§ 2-4 (L. 207/2024, c. 4-9; D.L. 3/2020; circ. AdE 4/E/2022)."
    },

    "TRIB-11": {
      sintesi: "Il conguaglio fiscale è il ricalcolo, da parte del sostituto, dell'imposta dovuta sull'intero reddito corrisposto nell'anno, confrontata con le ritenute già operate: si fa entro il 28 febbraio dell'anno successivo o alla cessazione del rapporto (art. 23, c. 3, D.P.R. 600/1973).",
      punti: [
        ["Si ricalcolano imposta lorda annua, detrazioni sui giorni effettivi e sui familiari, spettanza di cuneo e trattamento integrativo.", ["ricalcol", "detrazioni", "annu"]],
        ["Se il lavoratore lo chiede consegnando la CU entro il 12 gennaio, si tiene conto anche dei redditi di altri rapporti dell'anno (art. 23, c. 4).", ["12 gennaio", "altri rapporti", "cu"]],
        ["Benefici non spettanti: trattamento integrativo recuperato in 8 rate e cuneo in 10 rate se superano 60 euro.", ["8 rate", "10 rate", "60"]],
        ["Si determinano le addizionali: regionale e saldo comunale in massimo 11 rate dell'anno dopo; acconto comunale del 30% in massimo 9 rate da marzo.", ["addizional", "11 rate", "30%"]],
        ["Incapienza: il lavoratore versa la differenza o autorizza il prelievo sulle retribuzioni successive con interesse dello 0,50% mensile; gli esiti confluiscono nella CU.", ["incapienza", "0,50%"]]
      ],
      aggancio: "C'è anche il conguaglio da 730: il sostituto esegue il 730-4 sulla prima retribuzione utile e comunque su quella del mese successivo al ricevimento (art. 19 D.M. 164/1999).",
      fonti: "Art. 23, c. 3 e 4, D.P.R. 600/1973 (da fonti secondarie, come in P2_Mod04, scaletta D); Simone, Diritto tributario, p. 485 (art. 19 D.M. 164/1999); P2_00_PARAMETRI § 7."
    },

    "TRIB-12": {
      sintesi: "I redditi assimilati a quelli di lavoro dipendente (art. 50 TUIR) nascono da rapporti diversi dalla subordinazione ma sono tassati con le stesse regole: ritenuta del sostituto, detrazioni, conguaglio.",
      punti: [
        ["Collaborazioni coordinate e continuative e uffici di amministratore, sindaco o revisore di società, salvo che rientrino nell'attività professionale del contribuente (lett. c-bis).", ["collaborazion", "amministratore", "c-bis"]],
        ["Compensi dei soci lavoratori di cooperative entro i salari correnti maggiorati del 20% (lett. a).", ["cooperativ", "20"]],
        ["Borse di studio e assegni per studio o addestramento a chi non è dipendente dell'ente erogatore (lett. c).", ["borse di studio", "addestramento"]],
        ["Indennità per cariche pubbliche elettive e pubbliche funzioni, compensi ai giudici tributari, remunerazioni dei sacerdoti (lett. d, f, g).", ["cariche", "pubbliche funzioni", "sacerdoti"]],
        ["Prestazioni della previdenza complementare, lavori socialmente utili, rendite vitalizie e altri assegni periodici (lett. h-bis, i, l).", ["previdenza complementare", "socialmente utili", "rendite"]]
      ],
      aggancio: "Il caso più frequente in studio è il compenso dell'amministratore di s.r.l.: assimilato per il fisco, contributi alla gestione separata INPS.",
      fonti: "Art. 50 TUIR (917_1986_TUIR in libreria). Gestione separata per gli amministratori: art. 2, c. 26, L. 335/1995 (non riletto)."
    },

    "TRIB-15": {
      sintesi: "Il modello 770 è la dichiarazione annuale dei sostituti d'imposta: riepiloga ritenute operate, versamenti, compensazioni e dati non già trasmessi con la Certificazione Unica; si presenta per via telematica entro il 31 ottobre (art. 4 D.P.R. 322/1998).",
      punti: [
        ["Chi lo presenta: i soggetti dell'art. 23 D.P.R. 600/1973 che hanno corrisposto redditi soggetti a ritenuta (datori di lavoro, imprese, professionisti, condomini, enti).", ["sostituti", "23", "datori"]],
        ["Contenuto: ritenute su lavoro dipendente, autonomo, redditi di capitale e altri; versamenti con F24 e crediti compensati; i dati dei singoli percipienti sono già nella CU.", ["ritenute", "versamenti", "compensa", "cu"]],
        ["Termine: 31 ottobre dell'anno successivo a quello in cui sono state operate le ritenute.", ["31 ottobre"]],
        ["Funzione di controllo: incrocio tra ritenute certificate, ritenute dichiarate e versamenti.", ["incrocio", "controllo"]],
        ["Sanzioni: omessa dichiarazione del sostituto, 120% delle ritenute non versate con un minimo di 250 euro, oppure da 250 a 2.000 euro se le ritenute sono state versate; dichiarazione infedele, 70% delle ritenute non versate sulla differenza (art. 2, c. 1-2, D.Lgs. 471/1997). Ritenute risultanti dalla certificazione e non versate entro il 31 dicembre dell'anno successivo, oltre 150.000 euro per periodo d'imposta: reato dell'art. 10-bis D.Lgs. 74/2000.", ["150.000", "10-bis", "sanzion"]]
      ],
      aggancio: "Lo studio del consulente lo predispone e trasmette come intermediario, partendo dalle CU e dagli F24 dell'anno.",
      fonti: "P2_Mod04, scaletta A (art. 4 D.P.R. 322/1998); art. 2, c. 1-2, D.Lgs. 471/1997 e art. 10-bis D.Lgs. 74/2000, testi vigenti letti su Normattiva il 7/11/2026."
    },

    "TRIB-9": {
      sintesi: "Con il principio di cassa un componente conta nell'anno in cui è incassato o pagato; con quello di competenza nell'anno in cui matura, a prescindere dal pagamento. Il TUIR usa la cassa per i redditi di lavoro e la competenza per il reddito d'impresa.",
      punti: [
        ["Lavoro dipendente: cassa allargata, le somme pagate entro il 12 gennaio valgono per l'anno precedente (art. 51, c. 1).", ["cassa", "12 gennaio", "dipendente"]],
        ["Lavoro autonomo: cassa, compensi percepiti e spese sostenute nel periodo (art. 54, c. 1); dal 2025 le somme pagate dal sostituto nell'anno successivo si imputano all'anno dell'obbligo di ritenuta.", ["autonom", "54", "percepit"]],
        ["Reddito d'impresa: competenza, salvo i componenti non ancora certi o determinabili, che concorrono quando lo diventano (art. 109, c. 1-2).", ["competenza", "109", "impresa"]],
        ["Bilancio civilistico: competenza economica, indipendentemente dalla data di incasso o pagamento (art. 2423-bis c.c.).", ["bilancio", "2423-bis"]],
        ["Contributi previdenziali: competenza, retribuzioni maturate nel periodo; il regime forfettario segue invece la cassa.", ["contribut", "maturat", "forfettari"]]
      ],
      aggancio: "Il caso classico in busta paga: la tredicesima pagata il 10 gennaio è reddito fiscale dell'anno prima (cassa allargata) e contributivamente dell'anno in cui è maturata.",
      fonti: "Artt. 51, 54 e 109 TUIR (917_1986_TUIR in libreria); art. 2423-bis c.c. (non nell'estratto in libreria: citazione da riscontrare); P2_Mod04, scaletta B (fisco a cassa, contributi a competenza)."
    },

    "TRIB-13": {
      sintesi: "Il regime forfettario (L. 190/2014, c. 54-89) è riservato alle persone fisiche che esercitano impresa, arti o professioni con ricavi o compensi non superiori a 85.000 euro e senza cause di esclusione: il reddito si determina con un coefficiente e paga un'imposta sostitutiva del 15% (5% per le nuove attività).",
      punti: [
        ["Requisiti: ricavi o compensi dell'anno precedente fino a 85.000 euro; spese per lavoro dipendente e collaboratori fino a 20.000 euro lordi.", ["85.000", "20.000", "persone fisiche"]],
        ["Uscita: dall'anno dopo se si superano 85.000 euro; nello stesso anno se si superano 100.000 euro.", ["100.000", "uscita"]],
        ["Cause ostative: partecipazioni in società di persone o controllo di s.r.l. con attività riconducibili; attività svolta prevalentemente verso l'ex datore di lavoro dei due anni precedenti; redditi di lavoro dipendente o pensione oltre 30.000 euro (35.000 per il 2025 e il 2026).", ["ex datore", "35.000", "partecipazion", "ostativ"]],
        ["Determinazione: ricavi incassati per il coefficiente di redditività dell'attività (per esempio 78% per i professionisti), meno i contributi versati; imposta sostitutiva del 15%, 5% per i primi cinque anni se l'attività è nuova.", ["coefficiente", "15%", "5%", "cinque anni"]],
        ["Niente IVA in fattura e niente ritenuta d'acconto subita; esonero dall'IRAP.", ["iva", "ritenuta", "irap"]]
      ],
      aggancio: "Il forfettario che assume dipendenti resta sostituto d'imposta e deve operare le ritenute; il limite dei 20.000 euro di spese per personale va monitorato.",
      fonti: "L. 207/2024, c. 12 (35.000 euro per il 2025 e il 2026: testo in libreria); requisiti, cause ostative, imposta sostitutiva, ritenuta e uscita: L. 190/2014, art. 1, c. 54, 57, 64, 65, 67 e 71, testo in vigore fino al 31/12/2026 letti su Normattiva il 7/11/2026. Dal 1/1/2027 la disciplina passa nel testo unico imposte sui redditi (D.Lgs. 19/6/2026 n. 117, art. 377)."
    },

    "TRIB-14": {
      sintesi: "Il TUIR classifica i redditi delle persone fisiche in sei categorie (art. 6): fondiari, di capitale, di lavoro dipendente, di lavoro autonomo, d'impresa e diversi; ogni categoria ha le proprie regole di determinazione e la somma forma il reddito complessivo.",
      punti: [
        ["Fondiari: redditi di terreni e fabbricati, determinati di regola su base catastale.", ["fondiari", "catastal"]],
        ["Di capitale (interessi, dividendi) e di lavoro dipendente e assimilati.", ["capitale", "dipendente"]],
        ["Di lavoro autonomo (arti e professioni) e d'impresa.", ["autonomo", "impresa"]],
        ["Diversi: categoria residuale (plusvalenze, attività commerciali o di lavoro autonomo occasionali, redditi di natura fondiaria non altrimenti classificabili).", ["diversi", "residual", "occasional"]],
        ["Regole di confine: i proventi sostitutivi di redditi e gli interessi moratori seguono la categoria del reddito sostituito (art. 6, c. 2); i redditi di s.n.c. e s.a.s. sono sempre d'impresa (c. 3); i proventi illeciti rientrano nelle categorie o tra i diversi.", ["sostitutiv", "interessi moratori", "illecit"]]
      ],
      aggancio: "Esempio in busta paga: l'indennità di malattia pagata dall'INPS sostituisce la retribuzione e quindi è reddito di lavoro dipendente.",
      fonti: "Art. 6 TUIR e nota di aggiornamento sull'art. 14, c. 4, L. 537/1993 (917_1986_TUIR in libreria)."
    },

    "TRIB-16": {
      sintesi: "L'autotutela è il potere dell'Amministrazione finanziaria di annullare o rinunciare ai propri atti illegittimi o infondati; dal 2024 lo Statuto del contribuente distingue un'autotutela obbligatoria (art. 10-quater) e una facoltativa (art. 10-quinquies), introdotte dal D.Lgs. 219/2023.",
      punti: [
        ["Obbligatoria, anche senza istanza, in pendenza di giudizio o su atti definitivi, per errori manifesti: errore di persona, di calcolo, sul tributo, sul presupposto, errore materiale del contribuente, pagamenti ignorati, documenti poi sanati.", ["obbligatori", "10-quater", "errore"]],
        ["Limiti: non c'è obbligo se c'è un giudicato favorevole all'Amministrazione o dopo un anno dalla definitività dell'atto non impugnato.", ["giudicato", "un anno", "definitiv"]],
        ["Facoltativa: fuori da quei casi, l'Amministrazione può comunque annullare o rinunciare se l'atto è illegittimo o infondato (art. 10-quinquies).", ["facoltativ", "10-quinquies", "illegittim"]],
        ["Impugnabili davanti alla Corte di giustizia tributaria il rifiuto espresso o tacito sull'autotutela obbligatoria e il rifiuto espresso sulla facoltativa (art. 19 D.Lgs. 546/1992).", ["impugn", "546/1992", "rifiuto"]],
        ["La responsabilità contabile dei funzionari per le valutazioni di fatto è limitata al dolo.", ["dolo", "responsabilita contabile"]]
      ],
      aggancio: "Per lo studio è la via più rapida contro un avviso palesemente sbagliato, per esempio ritenute versate ma non considerate; i termini per il ricorso però continuano a correre.",
      fonti: "Simone, Diritto tributario, pp. 473-474 (artt. 10-quater e 10-quinquies L. 212/2000; art. 19 D.Lgs. 546/1992)."
    },

    "TRIB-18": {
      sintesi: "L'IRAP è l'imposta regionale sulle attività produttive (D.Lgs. 446/1997): colpisce il valore della produzione netta delle attività autonomamente organizzate di società, enti e amministrazioni pubbliche; dal 2022 non la pagano le persone fisiche.",
      punti: [
        ["Presupposto: esercizio abituale di un'attività autonomamente organizzata diretta alla produzione o allo scambio di beni o servizi.", ["autonomamente organizzat", "presupposto"]],
        ["Soggetti: società di capitali e di persone, enti commerciali e non commerciali, amministrazioni pubbliche; esclusi dal 2022 imprenditori individuali e professionisti persone fisiche, e i forfettari.", ["societa", "enti", "persone fisiche", "2022"]],
        ["Base imponibile: valore della produzione netta; per le società di capitali la differenza tra valore e costi della produzione, senza dedurre costo del personale, svalutazioni, accantonamenti e interessi (art. 5).", ["valore della produzione", "base imponibile", "personale"]],
        ["Costo del lavoro: deducibile per intero quello dei dipendenti a tempo indeterminato (art. 11, c. 4-octies); per i contratti a termine solo deduzioni specifiche (per esempio 1.850 euro per dipendente fino a 5, con ricavi fino a 400.000, e il 70% per gli stagionali).", ["tempo indeterminato", "4-octies", "1.850", "stagional"]],
        ["Aliquota ordinaria del 3,9% (art. 16), che le Regioni possono variare fino a 0,92 punti (c. 3); per il 2026-2027 è aumentata di 2 punti per alcuni settori (D.L. 21/2026, art. 3) e dal 2026 per banche e assicurazioni (L. 199/2025, c. 74); gettito destinato alle Regioni.", ["3,9%", "regioni", "aliquota"]]
      ],
      aggancio: "Per il consulente il tema tocca la scelta del contratto: l'assunzione a tempo indeterminato riduce l'IRAP, il contratto a termine no.",
      fonti: "Edotto, «Il costo del lavoro nel modello Irap 2025» (28/8/2025) e MEF, Dipartimento Finanze, novità normative IRAP 2022 (fonti secondaria e ufficiale). Artt. 3, 5, 11 (c. 4-bis.1 e 4-octies) e 16 D.Lgs. 446/1997 letti su Normattiva il 7/11/2026: il testo dell'art. 16, c. 1, riporta ancora il 3,50% di una modifica del D.L. 66/2014 abrogata dalla L. 190/2014 (nota di aggiornamento 47), perciò l'aliquota ordinaria resta il 3,9%. Persone fisiche escluse: art. 1, c. 8, L. 234/2021."
    },

    "TRIB-19": {
      sintesi: "Il tributo è la prestazione patrimoniale imposta dallo Stato o da un ente pubblico per finanziare la spesa pubblica (artt. 23 e 53 Cost.); si distingue in imposte, tasse e contributi.",
      punti: [
        ["Imposta: prestazione coattiva dovuta senza alcuna controprestazione dell'ente, al verificarsi del presupposto stabilito dalla legge (per esempio IRPEF, IVA).", ["imposta", "controprestazione", "presupposto"]],
        ["Classificazioni: dirette e indirette; personali e reali; proporzionali, progressive e regressive.", ["dirette", "indirette", "progressiv"]],
        ["Tassa: dovuta da chi chiede un servizio pubblico speciale e divisibile, senza corrispondenza con il costo del servizio (per esempio tasse scolastiche o di concessione).", ["tassa", "servizio", "divisibil"]],
        ["Contributo: dovuto da chi trae un vantaggio particolare da un'opera o attività pubblica (contributi di miglioria) o ne provoca una maggiore spesa (contributi di utenza).", ["contributo", "vantaggio", "miglioria"]],
        ["Principi costituzionali: riserva di legge relativa (art. 23), capacità contributiva e progressività del sistema (art. 53), divieto di referendum sulle leggi tributarie (art. 75).", ["23", "53", "riserva di legge", "capacita contributiva"]]
      ],
      aggancio: "Attenzione al lessico: i contributi previdenziali INPS non sono tributi in senso stretto ma prestazioni patrimoniali imposte destinate alla previdenza (art. 38 Cost.).",
      fonti: "Simone, Diritto tributario, pp. 451-453. Natura dei contributi previdenziali: inquadramento dottrinale, citare con cautela."
    },

    "TRIB-8": {
      sintesi: "La cedolare secca è un regime facoltativo con cui il proprietario persona fisica tassa i canoni di locazione abitativa con un'imposta sostitutiva, al posto dell'IRPEF e delle addizionali (art. 3 D.Lgs. 23/2011).",
      punti: [
        ["Chi e che cosa: persone fisiche che locano immobili abitativi (categorie da A/1 a A/11, esclusa A/10) e relative pertinenze, fuori dall'attività d'impresa o professionale.", ["persone fisiche", "abitativ", "a/10"]],
        ["Aliquote: 21% sul canone annuo; 10% per i contratti a canone concordato nei comuni ad alta tensione abitativa o colpiti da calamità.", ["21%", "10%", "concordato"]],
        ["Sostituisce IRPEF e addizionali sul canone, l'imposta di registro e il bollo sul contratto (registrazione, risoluzioni e proroghe).", ["irpef", "addizional", "registro", "bollo"]],
        ["Contropartita: per tutta la durata dell'opzione il locatore rinuncia agli aggiornamenti del canone, anche ISTAT.", ["rinuncia", "aggiornament", "istat"]],
        ["I canoni restano fuori dal reddito complessivo ai fini della progressività, ma contano per i familiari a carico, le detrazioni e l'ISEE.", ["progressivita", "familiari a carico", "isee"]]
      ],
      aggancio: "Per il consulente pesa sul 730 del dipendente proprietario: il reddito da cedolare non fa salire lo scaglione ma può far perdere lo status di familiare a carico.",
      fonti: "Art. 3, c. 1, 2, 7 e 11, D.Lgs. 23/2011, testo vigente letti su Normattiva il 7/11/2026 (non nel manuale in libreria)."
    },

    "TRIB-5": {
      sintesi: "Le società di persone commerciali producono reddito d'impresa che è tassato in capo ai soci per trasparenza (art. 5 TUIR); le società di capitali sono soggetti IRES e pagano l'imposta sul proprio reddito (artt. 73 e 77 TUIR).",
      punti: [
        ["Società di persone (s.n.c., s.a.s.): reddito d'impresa qualunque sia l'oggetto (art. 6, c. 3); imputato a ciascun socio in proporzione alla quota di utili, anche se non percepito (art. 5).", ["trasparenza", "quota", "non percepit", "5"]],
        ["Società semplice: produce redditi delle varie categorie (non d'impresa), anch'essi imputati ai soci; associazioni professionali equiparate (art. 5, c. 3).", ["societa semplice", "categorie", "associazioni professionali"]],
        ["Società di capitali (s.p.a., s.r.l., s.a.p.a., cooperative): soggetti IRES con aliquota del 24%; gli utili distribuiti sono poi tassati in capo ai soci come dividendi.", ["ires", "24", "dividend"]],
        ["Le s.r.l. a ristretta base proprietaria possono optare per la trasparenza (artt. 115-116 TUIR).", ["opzione", "115", "ristretta"]],
        ["Entrambe sono soggette all'IRAP sul valore della produzione netta e, se hanno dipendenti, agli obblighi del sostituto d'imposta.", ["irap", "sostituto"]]
      ],
      aggancio: "Per il consulente cambia il trattamento dei soci che lavorano: il socio che partecipa personalmente al lavoro aziendale con abitualità e prevalenza si iscrive alla gestione INPS dei commercianti se ne ha i requisiti (art. 1, c. 203, L. 662/1996), l'amministratore di s.r.l. può avere un compenso assimilato al lavoro dipendente.",
      fonti: "Artt. 5, 6, 73 e 77 TUIR (917_1986_TUIR in libreria). Artt. 115-116 TUIR (917_1986_TUIR in libreria). Contributi dei soci: art. 1, c. 203, L. 662/1996, letti su Normattiva il 7/11/2026."
    },

    "TRIB-20": {
      sintesi: "L'impresa familiare è l'impresa individuale in cui collaborano in modo continuativo il coniuge, i parenti entro il terzo grado e gli affini entro il secondo (art. 230-bis c.c.); ai fini fiscali fino al 49% del reddito può essere imputato ai familiari collaboratori (art. 5, c. 4, TUIR).",
      punti: [
        ["Diritti civilistici del familiare: mantenimento, partecipazione agli utili, ai beni acquistati con essi e agli incrementi dell'azienda in proporzione al lavoro prestato; decisioni straordinarie a maggioranza; prelazione.", ["mantenimento", "utili", "maggioranza", "prelazione"]],
        ["È un istituto residuale: si applica salvo che sia configurabile un diverso rapporto (per esempio lavoro subordinato o società).", ["residual", "diverso rapporto"]],
        ["Fisco: l'imprenditore resta titolare; il reddito si imputa ai familiari fino al 49% del reddito dichiarato, in proporzione alle quote (art. 5, c. 4, TUIR).", ["49", "imputat", "titolare"]],
        ["Condizioni fiscali: atto pubblico o scrittura privata autenticata anteriore all'inizio del periodo d'imposta, attestazione delle quote nella dichiarazione dell'imprenditore e lavoro continuativo e prevalente di ciascun familiare.", ["atto pubblico", "scrittura privata", "prevalent"]],
        ["Familiari ai fini fiscali: coniuge, parenti entro il terzo grado, affini entro il secondo (art. 5, c. 5, TUIR). Sul piano civile la Corte cost. 25/7/2024 n. 148 ha dichiarato illegittimo l'art. 230-bis, c. 3, c.c. nella parte in cui non comprende il convivente di fatto, e in conseguenza anche l'art. 230-ter c.c.", ["coniuge", "terzo grado", "convivente"]]
      ],
      aggancio: "Per il consulente il punto delicato è distinguere il familiare collaboratore, iscritto alla gestione INPS dell'imprenditore, dal familiare assunto come dipendente.",
      fonti: "Art. 230-bis c.c. (filodiritto.com, testo vigente; non nell'estratto in libreria); art. 5, c. 4 e 5, TUIR (917_1986_TUIR in libreria). Artt. 230-bis e 230-ter c.c. con le note sulla Corte cost. 148/2024 (G.U. 1ª s.s. n. 31 del 31/7/2024), letti su Normattiva il 7/11/2026."
    },

    "TRIB-21": {
      sintesi: "Il codice civile distingue le società di persone (società semplice, in nome collettivo, in accomandita semplice), le società di capitali (per azioni, a responsabilità limitata, in accomandita per azioni) e le società cooperative.",
      punti: [
        ["Società di persone: autonomia patrimoniale imperfetta, i soci rispondono delle obbligazioni sociali con il proprio patrimonio (società semplice art. 2251, s.n.c. art. 2291, s.a.s. art. 2313).", ["persone", "autonomia patrimoniale imperfetta", "2291"]],
        ["Società semplice: solo attività non commerciali, tipicamente agricole o di gestione immobiliare.", ["societa semplice", "non commercial", "agricol"]],
        ["Società di capitali: personalità giuridica e autonomia patrimoniale perfetta, per le obbligazioni risponde solo la società (s.p.a. art. 2325, s.r.l. art. 2462, s.a.p.a. art. 2452).", ["capitali", "personalita giuridica", "perfetta", "2462"]],
        ["S.r.l. anche unipersonale o semplificata; s.a.p.a. con soci accomandatari illimitatamente responsabili.", ["unipersonal", "semplificata", "s.a.p.a"]],
        ["Cooperative: scopo mutualistico anziché lucrativo (art. 2511), con regole proprie sui soci lavoratori.", ["cooperativ", "mutualistic", "2511"]]
      ],
      aggancio: "La forma della società decide chi è il datore di lavoro, come si tassano i soci che lavorano e a quale gestione INPS sono iscritti.",
      fonti: "Articoli del codice civile citati da fonti secondarie (studiocataldi.it e manuali); non nell'estratto in libreria: riscontro su Normattiva consigliato. Fisco delle società: TRIB-5."
    },

    "TRIB-23": {
      sintesi: "Nella società in accomandita semplice convivono due categorie di soci: gli accomandatari, che amministrano e rispondono illimitatamente e solidalmente delle obbligazioni sociali, e gli accomandanti, che rispondono nei limiti della quota conferita (art. 2313 c.c.).",
      punti: [
        ["Accomandatari: responsabilità solidale e illimitata; l'amministrazione spetta solo a loro (art. 2318).", ["accomandatari", "illimitat", "amministrazione"]],
        ["Accomandanti: responsabilità limitata alla quota conferita.", ["accomandanti", "limitata", "quota"]],
        ["Divieto di immistione: l'accomandante che compie atti di amministrazione o tratta affari in nome della società senza procura speciale perde il beneficio e risponde illimitatamente verso i terzi; può essere escluso (art. 2320).", ["immistione", "2320", "procura speciale"]],
        ["L'accomandante può dare autorizzazioni e pareri e ha diritto di ricevere il bilancio e controllarlo.", ["pareri", "bilancio"]],
        ["Ragione sociale: almeno il nome di un accomandatario; l'accomandante che vi consente il proprio nome risponde illimitatamente (art. 2314).", ["ragione sociale", "2314"]]
      ],
      aggancio: "Ai fini contributivi conta l'art. 1, c. 203, L. 662/1996: si iscrive alla gestione commercianti chi partecipa personalmente al lavoro aziendale con abitualità e prevalenza e ha la piena responsabilità dell'impresa (requisito non richiesto ai soci di s.r.l.). L'accomandante può prestare la sua opera sotto la direzione degli amministratori, ma se compie atti di amministrazione risponde illimitatamente (art. 2320 c.c.).",
      fonti: "Artt. 2313, 2318 e 2320 c.c. letti su Normattiva il 7/11/2026; art. 1, c. 203, L. 662/1996 (Normattiva). Fisco: art. 5 TUIR (TRIB-5)."
    },

    "TRIB-X1": {
      sintesi: "Il sostituto d'imposta è chi, per legge, è obbligato al pagamento di imposte in luogo di altri, per fatti o situazioni a questi riferibili, anche a titolo d'acconto, e deve esercitare la rivalsa (art. 64 D.P.R. 600/1973); nel lavoro dipendente è il datore di lavoro.",
      punti: [
        ["Soggetti: società ed enti, società di persone, persone fisiche che esercitano imprese o arti e professioni, condomini e gli altri soggetti dell'art. 23 D.P.R. 600/1973 quando corrispondono redditi di lavoro dipendente.", ["23", "societa", "condomini"]],
        ["Ritenuta d'acconto mensile: aliquote per scaglioni ragguagliate al periodo di paga e detrazioni rapportate al periodo; versamento con F24 entro il 16 del mese successivo.", ["ritenuta", "acconto", "16", "f24"]],
        ["Adempimenti annuali: conguaglio entro il 28 febbraio o alla cessazione; CU al lavoratore e all'Agenzia entro il 16 marzo; modello 770 entro il 31 ottobre; esecuzione dei 730-4.", ["28 febbraio", "16 marzo", "31 ottobre", "770"]],
        ["Sanzioni: omesso versamento 25% (art. 13 D.Lgs. 471/1997), omessa ritenuta 20% (art. 14); CU omessa o errata 100 euro ciascuna; reato oltre 150.000 euro di ritenute certificate non versate (art. 10-bis D.Lgs. 74/2000).", ["25%", "20%", "150.000", "10-bis"]],
        ["Il sostituito risponde in solido solo per le ritenute a titolo d'imposta non operate né versate (art. 35 D.P.R. 602/1973; Cass. S.U. 10378/2019).", ["solido", "35", "10378"]]
      ],
      aggancio: "È il terreno su cui il consulente lavora ogni mese: cedolini, F24, CU e 770 sono adempimenti del sostituto che lo studio esegue come intermediario.",
      fonti: "P2_Mod04, scaletta A (artt. 23 e 64 D.P.R. 600/1973; art. 35 D.P.R. 602/1973); artt. 13-14 D.Lgs. 471/1997 e art. 10-bis D.Lgs. 74/2000, testi vigenti letti su Normattiva il 7/11/2026; P2_00_PARAMETRI § 8."
    },

    "PPP-9": {
      sintesi: "La capacità giuridica è l'attitudine a essere titolari di diritti e doveri e si acquista con la nascita (art. 1 c.c.); la capacità di agire è l'idoneità a compiere da sé atti giuridici validi e si acquista con la maggiore età, a 18 anni (art. 2 c.c.).",
      punti: [
        ["Capacità giuridica: dalla nascita, purché il nato sia vivo, senza requisito di vitalità; si perde con la morte; se più persone muoiono nello stesso evento si presume la commorienza.", ["nascita", "vivo", "commorienza"]],
        ["Capacità di agire: generale e piena a 18 anni; per atti particolari la legge fissa età diverse, per esempio il minore di 16 anni ammesso al matrimonio dal tribunale, che diventa emancipato.", ["18 anni", "emancipat", "matrimonio"]],
        ["Incapacità legale: interdizione per abituale infermità di mente (incapacità totale, tutore, atti annullabili) e inabilitazione (incapacità parziale, curatore, solo ordinaria amministrazione da sé).", ["interdizione", "inabilitazione", "tutore", "curatore"]],
        ["Incapacità naturale (art. 428): chi era incapace di intendere o di volere al momento dell'atto può farlo annullare; per i contratti serve anche la mala fede dell'altro contraente.", ["incapacita naturale", "428", "mala fede"]],
        ["Amministrazione di sostegno: misura flessibile decisa dal giudice tutelare; il beneficiario conserva la capacità per tutti gli atti non riservati all'amministratore.", ["amministrazione di sostegno", "giudice tutelare", "conserva"]]
      ],
      aggancio: "L'art. 2 c.c. fa salve le leggi speciali che fissano un'età inferiore per prestare lavoro: il minore che lavora esercita da sé i diritti e le azioni che nascono dal contratto di lavoro. È il ponte con l'età minima e il lavoro dei minori (Simone DL pp. 115-117).",
      fonti: "Art. 2 c.c., testo letto su avvocato.it (fonte secondaria, 6/11/2026); artt. 1, 414, 428 c.c. come riportati da Simone, Diritto privato, pp. 699-704."
    },

    "PPP-10": {
      sintesi: "Il contratto è l'accordo di due o più parti per costituire, regolare o estinguere tra loro un rapporto giuridico patrimoniale (art. 1321 c.c.); i suoi requisiti sono l'accordo, la causa, l'oggetto e la forma quando è prescritta a pena di nullità (art. 1325).",
      punti: [
        ["Accordo: incontro di proposta e accettazione; il contratto è concluso quando il proponente ha conoscenza dell'accettazione; nelle trattative le parti devono comportarsi secondo buona fede, a pena di responsabilità precontrattuale (art. 1337).", ["accordo", "proposta", "accettazione", "1337"]],
        ["Causa: funzione economico-sociale del contratto; se manca o è illecita il contratto è nullo; i motivi individuali di regola non contano. Per l'autonomia contrattuale si possono fare anche contratti atipici, se meritevoli di tutela (art. 1322).", ["causa", "funzione", "1322", "atipic"]],
        ["Oggetto: deve essere possibile, lecito, determinato o determinabile.", ["oggetto", "possibile", "lecito", "determinat"]],
        ["Forma: vale la libertà di forma; la forma ad substantiam è richiesta a pena di nullità (per esempio per trasferire immobili), quella ad probationem solo per provare il contratto.", ["forma", "ad substantiam", "ad probationem"]],
        ["Effetti: il contratto ha forza di legge tra le parti (art. 1372) e non produce effetti verso i terzi, salvo i casi previsti dalla legge come il contratto a favore di terzo (art. 1411).", ["forza di legge", "1372", "terzi"]]
      ],
      aggancio: "Il contratto di lavoro ha gli stessi requisiti, con una deroga importante sull'invalidità: la nullità o l'annullamento non producono effetto per il periodo in cui il rapporto è stato eseguito, salvo illiceità dell'oggetto o della causa (art. 2126 c.c.; Simone DL pp. 33-34).",
      fonti: "Artt. 1321, 1322, 1325, 1337, 1372, 1411 c.c. come riportati da Simone, Diritto privato, pp. 741-749; art. 2126 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "PPP-12": {
      sintesi: "Gli elementi accidentali sono clausole che le parti possono aggiungere al contratto per incidere sulla sua efficacia: la condizione, il termine e il modo (o onere).",
      punti: [
        ["Condizione: avvenimento futuro e incerto a cui le parti subordinano l'efficacia o la risoluzione del contratto (art. 1353); è sospensiva o risolutiva. Non la tollerano gli atti legittimi, come il matrimonio o l'accettazione dell'eredità.", ["condizione", "futuro e incerto", "sospensiva", "risolutiva"]],
        ["La condizione sospensiva meramente potestativa, che dipende dalla mera volontà di una parte, rende nullo il contratto (art. 1355); la condizione illecita è contraria a norme imperative, ordine pubblico o buon costume (art. 1354).", ["meramente potestativa", "1355", "illecita"]],
        ["Quando la condizione si avvera, gli effetti retroagiscono ex tunc al momento della conclusione del contratto.", ["retroag", "ex tunc"]],
        ["Termine: avvenimento futuro e certo da cui dipende l'inizio (termine iniziale) o la fine (termine finale) degli effetti.", ["termine", "futuro e certo", "iniziale", "finale"]],
        ["Modo o onere: si appone solo agli atti a titolo gratuito (donazione, testamento); se impossibile o illecito si considera non apposto, salvo che sia stato il solo motivo determinante.", ["modo", "onere", "gratuit"]]
      ],
      aggancio: "Nel lavoro l'elemento accidentale tipico è il termine finale: il contratto a tempo determinato (D.Lgs. 81/2015; Simone DL pp. 205-208), con limiti di durata e causali fissati dalla legge e non dalla sola volontà delle parti.",
      fonti: "Art. 1353 c.c., testo letto su miolegale.it (fonte secondaria, 6/11/2026); artt. 1354-1355 c.c. come riportati da Simone, Diritto privato, pp. 743-744."
    },

    "PPP-13": {
      sintesi: "Nullità e annullabilità sono le due forme di invalidità del contratto: la nullità colpisce i vizi più gravi ed è insanabile; l'annullabilità protegge una parte e il contratto produce effetti finché non è annullato.",
      punti: [
        ["Cause di nullità (art. 1418): contrasto con norme imperative; mancanza di un requisito dell'art. 1325; causa illecita o motivo illecito comune e determinante; oggetto impossibile, illecito o indeterminabile; altri casi previsti dalla legge.", ["1418", "norme imperative", "requisit"]],
        ["Regime della nullità: nessun effetto; la fa valere chiunque vi abbia interesse; il giudice la rileva d'ufficio (art. 1421); l'azione è imprescrittibile (art. 1422); niente convalida (art. 1423). Può essere parziale (art. 1419) e il contratto nullo può convertirsi in un altro di cui ha i requisiti.", ["ufficio", "1421", "imprescrittibil", "convalida", "1419"]],
        ["Cause di annullabilità: incapacità legale o naturale della parte (art. 1425) e vizi del consenso: errore essenziale e riconoscibile, violenza morale, dolo determinante (artt. 1427-1440).", ["1425", "errore", "violenza", "dolo"]],
        ["Regime dell'annullabilità: la chiede solo la parte protetta (art. 1441); l'azione si prescrive in cinque anni (art. 1442); il contratto si può convalidare (art. 1444); l'annullamento non pregiudica i terzi di buona fede che hanno acquistato a titolo oneroso, salvo l'incapacità legale (art. 1445).", ["1441", "cinque anni", "convalid", "1445"]],
        ["La sentenza è dichiarativa per la nullità e costitutiva per l'annullamento.", ["dichiarativa", "costitutiva"]]
      ],
      aggancio: "Nel lavoro: per il periodo in cui il rapporto è stato eseguito, la nullità non toglie retribuzione e diritti (art. 2126 c.c.); e i patti nulli perché contrari a norme imperative, come quelli che violano l'art. 2103 sulle mansioni, sono tipici casi di nullità parziale.",
      fonti: "Artt. 1418-1445 c.c. come riportati da Simone, Diritto privato, pp. 751-753; artt. 2103 e 2126 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "PPP-14": {
      sintesi: "L'obbligazione è il rapporto per cui il debitore deve al creditore una prestazione suscettibile di valutazione economica (art. 1174 c.c.); si estingue normalmente con l'adempimento, cioè con l'esatta esecuzione della prestazione.",
      punti: [
        ["Fonti (art. 1173): contratto, fatto illecito e ogni altro atto o fatto idoneo secondo l'ordinamento. Il debitore risponde con tutti i suoi beni presenti e futuri (art. 2740).", ["1173", "contratto", "fatto illecito", "2740"]],
        ["Elementi: debito, credito e prestazione (art. 1174); debitore e creditore devono comportarsi secondo correttezza (art. 1175) e buona fede.", ["prestazione", "1174", "correttezza", "buona fede"]],
        ["Adempimento: con la diligenza del buon padre di famiglia (art. 1176); può adempiere anche un terzo (art. 1180); luogo e tempo fissati dalle parti o dalla legge (artt. 1182-1183); con il consenso del creditore il debitore può liberarsi con una prestazione diversa, la datio in solutum (art. 1197).", ["diligenza", "1176", "buon padre", "1197"]],
        ["Altri modi di estinzione: satisfattori (compensazione, confusione) e non satisfattori (novazione, remissione, impossibilità sopravvenuta per causa non imputabile, art. 1256).", ["compensazione", "confusione", "novazione", "remissione"]],
        ["Inadempimento: il debitore risarcisce il danno se non prova che dipende da causa a lui non imputabile (art. 1218), cioè danno emergente e lucro cessante (art. 1223); la mora del debitore richiede di regola la costituzione in mora (art. 1219); c'è anche la mora del creditore che rifiuta senza motivo il pagamento (art. 1206).", ["1218", "danno emergente", "lucro cessante", "mora"]]
      ],
      aggancio: "Nel lavoro la diligenza è più precisa: il lavoratore deve usare quella richiesta dalla natura della prestazione e dall'interesse dell'impresa (art. 2104 c.c.), che è la stessa regola dell'art. 1176, c. 2, per le attività professionali (Simone DL p. 109).",
      fonti: "Artt. 1173-1223, 1256, 2740 c.c. come riportati da Simone, Diritto privato, pp. 731-739; art. 2104 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "PPP-16": {
      sintesi: "La rescissione tutela chi ha concluso un contratto a condizioni inique per stato di pericolo o di bisogno (artt. 1447-1448 c.c.); la risoluzione scioglie un contratto valido quando sopravvengono inadempimento, impossibilità o eccessiva onerosità.",
      punti: [
        ["Rescissione per stato di pericolo (art. 1447): condizioni inique accettate per salvare sé o altri da un pericolo attuale di danno grave alla persona, noto all'altra parte; il giudice può assegnare un equo compenso.", ["1447", "pericolo", "inique", "equo compenso"]],
        ["Rescissione per lesione (art. 1448): sproporzione oltre la metà (lesione ultra dimidium), stato di bisogno e approfittamento; l'azione si prescrive in un anno (art. 1449) e il contratto non si può convalidare (art. 1451).", ["1448", "ultra dimidium", "bisogno", "un anno"]],
        ["Risoluzione per inadempimento (art. 1453): nei contratti a prestazioni corrispettive la parte fedele sceglie tra adempimento e risoluzione, con il risarcimento; l'inadempimento non deve essere di scarsa importanza. Opera di diritto con la clausola risolutiva espressa, la diffida ad adempiere (termine di almeno 15 giorni) e il termine essenziale (art. 1457).", ["1453", "clausola risolutiva", "diffida", "15 giorni", "termine essenziale"]],
        ["Impossibilità sopravvenuta: la parte liberata non può chiedere la controprestazione (art. 1463); se l'impossibilità è parziale, l'altra parte ha diritto a una riduzione.", ["impossibilita sopravvenuta", "1463", "riduzione"]],
        ["Eccessiva onerosità: nei contratti di durata o a esecuzione differita, per avvenimenti straordinari e imprevedibili; la controparte può evitarla offrendo di modificare equamente il contratto (reductio ad aequitatem).", ["eccessiva onerosita", "straordinari", "imprevedibili", "equamente"]],
        ["Autotutela: eccezione di inadempimento (art. 1460) e sospensione della prestazione se le condizioni patrimoniali dell'altra parte mettono in pericolo la controprestazione (art. 1461).", ["1460", "eccezione", "1461"]]
      ],
      aggancio: "Nel lavoro la risoluzione di diritto comune è sostituita da regole speciali: il licenziamento per giusta causa (art. 2119 c.c.) e quello disciplinare seguono l'art. 7 dello Statuto e il regime delle tutele, non l'art. 1453 (Simone DL pp. 235-246).",
      fonti: "Artt. 1447-1463 c.c. come riportati da Simone, Diritto privato, pp. 753-755; art. 2119 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "PPP-17": {
      sintesi: "È imprenditore chi esercita professionalmente un'attività economica organizzata al fine della produzione o dello scambio di beni o di servizi (art. 2082 c.c.).",
      punti: [
        ["Requisiti: attività economica (ricavi che coprono i costi; lo scopo di lucro non è necessario), organizzazione (anche solo di capitali e lavoro proprio), professionalità (abitualità, anche stagionale), esercizio in nome proprio con il relativo rischio.", ["economic", "organizzazione", "professionalita", "rischio"]],
        ["Classificazioni: per oggetto, imprenditore agricolo (art. 2135) e commerciale (art. 2195); per dimensione, piccolo imprenditore (art. 2083: coltivatori diretti, artigiani, piccoli commercianti, prevalenza del lavoro proprio e dei familiari); per forma, individuale o collettivo.", ["2135", "2195", "2083", "piccolo"]],
        ["Imprenditore agricolo: coltivazione del fondo, silvicoltura, allevamento e attività connesse; esonerato dalle scritture contabili; la figura dell'imprenditore agricolo professionale (IAP) è nel D.Lgs. 99/2004.", ["agricolo", "connesse", "iap", "99/2004"]],
        ["Imprenditore commerciale: iscrizione nel registro delle imprese, scritture contabili (libro giornale e libro degli inventari, art. 2214), soggezione alla liquidazione giudiziale e alle altre procedure concorsuali.", ["registro delle imprese", "scritture contabili", "liquidazione giudiziale"]],
        ["Doveri: l'imprenditore in forma societaria o collettiva deve istituire un assetto organizzativo, amministrativo e contabile adeguato, anche per rilevare tempestivamente la crisi (art. 2086, modificato dal Codice della crisi); ogni imprenditore tutela l'integrità fisica e la personalità morale dei collaboratori (art. 2087).", ["2086", "assetto", "crisi", "2087"]]
      ],
      aggancio: "L'art. 2087 c.c. è la norma madre della sicurezza sul lavoro; l'art. 2086 apre al ruolo del consulente nella crisi d'impresa (DL-X6 e ORALE_05). Per l'impresa familiare vedi l'art. 230-bis c.c. e TRIB-20.",
      fonti: "Artt. 2082, 2083, 2086, 2087, 2135, 2195 c.c. come riportati da Simone, Diritto privato, pp. 782-787; art. 2214 c.c. come riportato da Simone, Ragioneria, p. 1055; D.Lgs. 99/2004 come riportato da Simone, Diritto privato, p. 783."
    },

    "PPP-18": {
      sintesi: "L'impresa è l'attività dell'imprenditore e l'azienda è il complesso dei beni organizzati per esercitarla (art. 2555 c.c.); la società è il contratto con cui due o più persone conferiscono beni o servizi per l'esercizio in comune di un'attività economica allo scopo di dividerne gli utili (art. 2247 c.c.).",
      punti: [
        ["Impresa e azienda: l'impresa è l'attività, l'azienda lo strumento (beni materiali e immateriali); il maggior valore dei beni organizzati è l'avviamento.", ["azienda", "2555", "avviamento"]],
        ["Contratto di società (art. 2247): conferimenti, esercizio in comune di un'attività economica, scopo di dividere gli utili; le cooperative hanno invece scopo mutualistico.", ["2247", "conferiscono", "utili", "mutualistic"]],
        ["Società di persone (semplice, in nome collettivo, in accomandita semplice): autonomia patrimoniale imperfetta, i soci rispondono illimitatamente delle obbligazioni sociali, salvo gli accomandanti.", ["persone", "imperfetta", "illimitat", "accomandanti"]],
        ["Società di capitali (per azioni, a responsabilità limitata, in accomandita per azioni): personalità giuridica e autonomia patrimoniale perfetta, per i debiti risponde solo la società.", ["capitali", "personalita giuridica", "perfetta"]],
        ["Trasferimento d'azienda: prova scritta per le imprese soggette a registrazione (art. 2556); divieto di concorrenza dell'alienante per 5 anni (art. 2557); l'acquirente subentra nei contratti non personali (art. 2558) e risponde dei debiti risultanti dai libri contabili (art. 2560); per i dipendenti il rapporto continua con il cessionario (art. 2112).", ["2557", "2558", "2560", "2112", "cessionario"]]
      ],
      aggancio: "La forma della società decide chi è il datore di lavoro e come sono inquadrati i soci che lavorano (TRIB-5, TRIB-21, TRIB-23); nel trasferimento d'azienda il consulente gestisce il passaggio dei dipendenti ex art. 2112 c.c. e la solidarietà per i crediti di lavoro.",
      fonti: "Art. 2247 c.c., testo letto su miolegale.it (fonte secondaria, 6/11/2026); artt. 2555-2560 e 2112 c.c. come riportati da Simone, Diritto privato, pp. 789-791; tipi di società: TRIB-21 (fonti secondarie). Le pagine del Simone sulle società (pp. 796-815) non sono in libreria."
    },

    "PPP-X1": {
      sintesi: "L'art. 37 Cost. riconosce alla donna lavoratrice gli stessi diritti e, a parità di lavoro, le stesse retribuzioni del lavoratore; il Codice delle pari opportunità (D.Lgs. 198/2006) attua il principio con divieti di discriminazione, tutela giudiziaria rafforzata e strumenti di promozione.",
      punti: [
        ["Nozioni (art. 25): discriminazione diretta, cioè trattamento meno favorevole in ragione del sesso, anche verso i candidati in selezione; indiretta, cioè criteri o prassi apparentemente neutri che svantaggiano un sesso, salvo requisiti essenziali perseguiti con mezzi appropriati e necessari. Il c. 2-bis vi include i trattamenti legati a esigenze di cura, gravidanza, maternità o paternità.", ["diretta", "indiretta", "25", "2-bis"]],
        ["Molestie e molestie sessuali sono discriminazioni (art. 26): gli atti conseguenti sono nulli; chi denuncia non può essere sanzionato, demansionato, licenziato o trasferito per la denuncia e il licenziamento ritorsivo è nullo (c. 3-bis).", ["molestie", "26", "ritorsiv", "nullo"]],
        ["Divieti: nell'accesso al lavoro e nella selezione (art. 27); nella retribuzione per lo stesso lavoro o per un lavoro di pari valore (art. 28); nelle mansioni e nella carriera (art. 29). È nullo il licenziamento per causa di matrimonio, presunto dalla richiesta delle pubblicazioni a un anno dalle nozze (art. 35).", ["27", "28", "pari valore", "matrimonio"]],
        ["Tutela: conciliazione e ricorso anche tramite la consigliera di parità (artt. 36-37); procedura sommaria in cui il giudice, entro due giorni, decide con decreto motivato immediatamente esecutivo (art. 38); onere della prova alleggerito: se il ricorrente porta elementi di fatto anche statistici, tocca al datore provare l'assenza di discriminazione (art. 40); revoca dei benefici pubblici (art. 41).", ["consigliera", "38", "40", "onere della prova"]],
        ["Strumenti: rapporto biennale sul personale per le aziende con oltre 50 dipendenti, con sanzione da 1.000 a 5.000 euro se mendace o incompleto (art. 46); certificazione della parità di genere dal 2022 (art. 46-bis); trasparenza retributiva con il D.Lgs. 96/2026; nuovo Organismo per la parità con il D.Lgs. 91/2026.", ["46", "50 dipendenti", "46-bis", "96/2026"]]
      ],
      aggancio: "Per il consulente: rapporto biennale, inquadramenti neutri, annunci e selezioni senza riferimenti al sesso. La violazione dell'art. 28 era punita con l'ammenda (art. 41, c. 2), oggi sanzione amministrativa da 5.000 a 10.000 euro dopo la depenalizzazione del D.Lgs. 8/2016 (P1_Cap02).",
      fonti: "Art. 37 Cost. (testi Senato e Corte cost., verificati il 30/10/2026); D.Lgs. 198/2006, artt. 25-46-bis (198_2006 in libreria, vigente al 27/9/2026); P1_Cap02 (D.Lgs. 96/2026; sanzioni dopo il D.Lgs. 8/2016); D.Lgs. 91/2026 (91_2026 in libreria)."
    },

    "DL-1a": {
      sintesi: "Per l'art. 2094 c.c. è prestatore di lavoro subordinato chi si obbliga, mediante retribuzione, a collaborare nell'impresa prestando il proprio lavoro intellettuale o manuale alle dipendenze e sotto la direzione dell'imprenditore. Gli elementi sono tre: collaborazione, onerosità ed eterodirezione.",
      punti: [
        ["Il cuore della fattispecie è il vincolo di subordinazione: soggezione personale del lavoratore al potere direttivo, di controllo e disciplinare del datore (artt. 2104 e 2106 c.c.).", ["subordinazione", "potere direttivo", "disciplinare"]],
        ["Obblighi del lavoratore: diligenza richiesta dalla natura della prestazione e obbedienza alle disposizioni del datore (art. 2104); fedeltà, cioè divieto di concorrenza e di divulgare notizie riservate (art. 2105).", ["diligenza", "obbedienza", "fedelta", "2105"]],
        ["Quando la subordinazione non è evidente, la giurisprudenza usa indici sussidiari da valutare insieme: collaborazione, continuità, orario determinato, retribuzione fissa a cadenze regolari, inserimento nell'organizzazione del datore, assenza di rischio e di struttura imprenditoriale (Cass. 25711/2018, 23816/2021, 1095/2023).", ["indici", "orario", "rischio", "25711/2018"]],
        ["Il nomen iuris scelto dalle parti non è decisivo: prevale il concreto svolgimento del rapporto, e il nome conta solo in via sussidiaria nei casi incerti.", ["nomen iuris", "concreto"]],
        ["Confini: lavoro autonomo (art. 2222 c.c.), collaborazioni coordinate e continuative (art. 409 c.p.c.) e collaborazioni etero-organizzate, alle quali si applica la disciplina del lavoro subordinato (art. 2, c. 1, D.Lgs. 81/2015).", ["2222", "409", "etero-organizzat"]]
      ],
      aggancio: "In ispezione il rapporto si qualifica per come si svolge: se è subordinato si recuperano differenze retributive e contributi. La maxisanzione per lavoro nero non si applica se gli adempimenti contributivi mostrano che il datore non voleva occultare il rapporto, anche se lo aveva qualificato in modo diverso (Simone LS p. 440). Per prevenire il contenzioso il consulente può ricorrere alla certificazione (artt. 75 ss. D.Lgs. 276/2003).",
      fonti: "Artt. 2094, 2104, 2105, 2106 c.c. (NORMA_Codice_civile_lavoro); Simone, Diritto del lavoro, pp. 15-20; Simone, Legislazione sociale, p. 440."
    },

    "DL-4b": {
      sintesi: "Le collaborazioni coordinate e continuative sono rapporti di lavoro autonomo che si concretano in una prestazione d'opera continuativa e prevalentemente personale, coordinata con il committente (art. 409, n. 3, c.p.c.): il collaboratore organizza da sé l'attività, nel rispetto delle modalità di coordinamento stabilite di comune accordo.",
      punti: [
        ["Requisiti della co.co.co. genuina: continuità, prevalente personalità, coordinamento concordato, autonomia nell'organizzare tempi e luoghi. Il collaboratore si coordina con l'organizzazione del committente, ma non è questi a stabilire il quando e il dove.", ["continuita", "personalita", "coordinamento", "autonom"]],
        ["Collaborazioni etero-organizzate: se le modalità di esecuzione sono organizzate dal committente, anche tramite piattaforme digitali (per esempio i rider), si applica la disciplina del lavoro subordinato (art. 2, c. 1, D.Lgs. 81/2015).", ["etero-organizzat", "piattaform", "subordinato"]],
        ["Eccezioni (art. 2, c. 2): tra le altre, le professioni intellettuali che richiedono l'iscrizione in albi. Le parti possono far certificare l'assenza di etero-organizzazione davanti alle commissioni di certificazione.", ["albi", "certificazione"]],
        ["Previdenza e fisco: il collaboratore è iscritto alla gestione separata INPS (art. 2, c. 26, L. 335/1995); i compensi sono redditi assimilati a quelli di lavoro dipendente (art. 50, c. 1, lett. c-bis, TUIR).", ["gestione separata", "assimilat", "c-bis"]],
        ["Processo: le controversie seguono il rito del lavoro, per l'estensione dell'art. 409 c.p.c. operata dalla L. 533/1973.", ["rito del lavoro", "533/1973"]]
      ],
      aggancio: "Il consulente verifica in concreto chi decide orari e luoghi: se li decide il committente, la co.co.co. è etero-organizzata e il rapporto va trattato come subordinato, con differenze retributive e contributive. Nel dubbio conviene certificare il contratto.",
      fonti: "Art. 409 c.p.c. e art. 2 D.Lgs. 81/2015 come riportati da Simone, Diritto del lavoro, p. 20; art. 2, c. 26, L. 335/1995 come riportato da Simone, Legislazione sociale, p. 290; art. 50 TUIR (917_1986_TUIR, vigente al 4/10/2026)."
    },

    "DL-6a": {
      sintesi: "Il lavoro autonomo ha il suo modello nel contratto d'opera: chi si obbliga a compiere, verso un corrispettivo, un'opera o un servizio, con lavoro prevalentemente proprio e senza vincolo di subordinazione verso il committente (art. 2222 c.c.).",
      punti: [
        ["Elementi: un'opera o un servizio come risultato dovuto; lavoro prevalentemente proprio; assenza di subordinazione; corrispettivo.", ["opera o un servizio", "prevalentemente proprio", "subordinazione", "corrispettivo"]],
        ["Il prestatore decide tempi e modi dell'esecuzione e sopporta il rischio economico dell'attività; il committente può verificare il risultato, non dirigere la prestazione.", ["tempi e modi", "rischio"]],
        ["Tutele della L. 81/2017 (art. 3): sono abusive e prive di effetto le clausole che consentono al committente di modificare da solo le condizioni o di recedere senza congruo preavviso, e quelle con termini di pagamento oltre 60 giorni; è abusivo anche il rifiuto della forma scritta; spetta il risarcimento dei danni.", ["81/2017", "abusiv", "60 giorni", "forma scritta"]],
        ["Forme: lavoro autonomo abituale (redditi di lavoro autonomo, art. 53 TUIR, con cassa professionale o gestione separata); occasionale (redditi diversi, art. 67, c. 1, lett. l, TUIR); collaborazioni coordinate e continuative (art. 409 c.p.c.).", ["abituale", "occasionale", "53", "67"]],
        ["Il confine con il lavoro subordinato si traccia con il vincolo di subordinazione e, nei casi dubbi, con gli indici sussidiari; il nome dato al contratto non basta.", ["vincolo di subordinazione", "indici"]]
      ],
      aggancio: "Per il consulente il rischio tipico è la falsa partita IVA: se il prestatore lavora con orario, mezzi e direttive del committente, l'ispezione riqualifica il rapporto come subordinato. Il contratto scritto con oggetto e risultato definiti, e senza direttive sui tempi, è la prima difesa.",
      fonti: "Art. 2222 c.c. e L. 81/2017 come riportati da Simone, Diritto del lavoro, pp. 18-19; artt. 53 e 67 TUIR (917_1986_TUIR, vigente al 4/10/2026); Simone, Legislazione sociale, p. 290."
    },

    "DL-7a": {
      sintesi: "Il lavoratore autonomo occasionale svolge un'opera o un servizio ex art. 2222 c.c. con lavoro prevalentemente proprio, senza subordinazione, senza coordinamento con il committente e in modo non abituale. Non va confuso con le prestazioni occasionali dell'art. 54-bis D.L. 50/2017, gestite sulla piattaforma INPS.",
      punti: [
        ["Caratteri (circ. INPS 103/2004): nessun coordinamento con l'attività del committente; nessun inserimento nell'organizzazione aziendale; episodicità; piena autonomia su tempo e modo della prestazione.", ["103/2004", "coordinamento", "episodic", "autonomia"]],
        ["Obbligo del committente: comunicare l'avvio dell'attività all'ITL prima che inizi, con modalità informatiche (art. 14, c. 1, D.Lgs. 81/2008). Se la comunicazione è omessa o tardiva: sanzione da 500 a 2.500 euro per ciascun lavoratore, senza diffida. Sono escluse le attività intermediate dalle piattaforme digitali.", ["comunicazione", "itl", "500", "2.500", "diffida"]],
        ["Fisco e contributi: il compenso è reddito diverso (art. 67, c. 1, lett. l, TUIR); la gestione separata INPS scatta solo per il reddito annuo oltre 5.000 euro.", ["reddito diverso", "67", "gestione separata", "5.000"]],
        ["Limiti e rischi: se mancano i caratteri dell'occasionalità, l'ispezione riqualifica il rapporto. Gli autonomi occasionali inquadrati senza le condizioni di legge contano anche per la sospensione dell'attività, che scatta con almeno il 10% di lavoratori irregolari (art. 14, c. 1).", ["riqualific", "sospensione", "10%"]],
        ["Prestazioni occasionali (art. 54-bis): tetti annui di 5.000 euro per prestatore, 10.000 per utilizzatore, 2.500 tra stesso prestatore e stesso utilizzatore, 280 ore; superati il tetto di 2.500 euro o le 280 ore, il rapporto si trasforma in subordinato a tempo pieno e indeterminato.", ["54-bis", "10.000", "280 ore", "trasforma"]]
      ],
      aggancio: "Il consulente prepara la lettera di incarico con oggetto e risultato, fa la comunicazione preventiva all'ITL, controlla la soglia dei 5.000 euro per la gestione separata e che l'incarico resti davvero episodico.",
      fonti: "Art. 14, c. 1, D.Lgs. 81/2008 (81_2008_ESTRATTO_TitoloI_XII); Simone, Diritto del lavoro, pp. 19 e 23; art. 67 TUIR (917_1986_TUIR); Simone, Legislazione sociale, pp. 290-291; Rausei, slide Fermo 2026, p. 137 (dottrina)."
    },

    "DL-19a": {
      sintesi: "La distinzione passa per il vincolo di subordinazione: il lavoratore subordinato mette a disposizione le proprie energie sotto la direzione del datore (art. 2094 c.c.); l'autonomo si obbliga a un'opera o a un servizio, con lavoro prevalentemente proprio e organizzando da sé tempi e modi (art. 2222 c.c.).",
      punti: [
        ["Subordinato: eterodirezione, cioè soggezione al potere direttivo, di controllo e disciplinare; rischio a carico del datore; retribuzione periodica.", ["eterodirezione", "potere direttivo", "retribuzione"]],
        ["Autonomo: obbligo di risultato, autonomia organizzativa, rischio economico a carico del prestatore, corrispettivo pattuito per l'opera.", ["risultato", "autonomia", "rischio"]],
        ["Nei casi dubbi decidono gli indici sussidiari valutati insieme: orario, continuità, retribuzione fissa, inserimento nell'organizzazione, assenza di struttura imprenditoriale (Cass. 25711/2018, 23816/2021, 1095/2023); il nomen iuris non è decisivo.", ["indici", "nomen iuris"]],
        ["Zona intermedia: co.co.co. genuine (art. 409 c.p.c.) e collaborazioni etero-organizzate, a cui si applica la disciplina del lavoro subordinato (art. 2 D.Lgs. 81/2015).", ["409", "etero-organizzat"]],
        ["Conseguenze: al subordinato spettano retribuzione minima (art. 36 Cost.), limiti all'orario, tutela contro il licenziamento, contribuzione INPS e INAIL a carico del datore; fiscalmente sono redditi di lavoro dipendente (art. 49 TUIR), mentre il lavoro autonomo abituale produce redditi di lavoro autonomo (art. 53 TUIR).", ["36 cost", "licenziamento", "49", "53"]]
      ],
      aggancio: "È il tema delle riqualificazioni ispettive e della certificazione dei contratti: il consulente deve saper spiegare perché un rapporto è autonomo guardando a come si svolge, non a come è stato chiamato.",
      fonti: "Artt. 2094 e 2222 c.c. come riportati da Simone, Diritto del lavoro, pp. 15-20; artt. 49 e 53 TUIR (917_1986_TUIR); Cost. (testi Senato e Corte cost., verificati il 30/10/2026)."
    },

    "DL-2a": {
      sintesi: "Il contratto di lavoro è un contratto di scambio tra prestazione di lavoro e retribuzione; i suoi requisiti sono quelli dell'art. 1325 c.c.: accordo delle parti, causa, oggetto e forma quando è prescritta.",
      punti: [
        ["Capacità: per lavorare servono 16 anni e l'assolvimento dell'obbligo di istruzione, salvo eccezioni di legge; il minore che può lavorare esercita i diritti e le azioni che nascono dal contratto (art. 2 c.c.).", ["16 anni", "obbligo di istruzione", "art. 2"]],
        ["Accordo: incontro di proposta e accettazione (art. 1326 c.c.); causa: lo scambio tra lavoro e retribuzione; oggetto: la prestazione, che deve essere possibile, lecita, determinata o determinabile.", ["accordo", "1326", "causa", "scambio", "oggetto"]],
        ["Forma: di regola libera. Fanno eccezione il patto di prova scritto (art. 2096 c.c.), il part-time scritto ai fini della prova (art. 5 D.Lgs. 81/2015) e il termine, che è privo di effetto se non risulta da atto scritto, salvo i rapporti fino a 12 giorni: il rapporto è allora a tempo indeterminato (art. 19, c. 4, e art. 1 D.Lgs. 81/2015).", ["forma", "libera", "2096", "ai fini della prova", "atto scritto"]],
        ["Elementi accidentali: termine finale, condizione, patto di prova. Il datore deve inoltre fornire per iscritto le informazioni sul rapporto (D.Lgs. 152/1997).", ["accidentali", "termine", "152/1997"]],
        ["Invalidità: per il periodo in cui il rapporto è stato eseguito la nullità non ha effetto, salvo illiceità dell'oggetto o della causa (art. 2126 c.c.).", ["2126", "illiceita"]]
      ],
      aggancio: "All'assunzione il consulente cura la lettera con le informazioni del D.Lgs. 152/1997, la comunicazione obbligatoria preventiva e la forma scritta dove serve; mancanze di forma su termine o part-time portano rispettivamente al tempo indeterminato e, su domanda del lavoratore, al tempo pieno.",
      fonti: "Simone, Diritto del lavoro, pp. 29-31; artt. 2, 2096, 2126 c.c. (NORMA_Codice_civile_lavoro); D.Lgs. 81/2015, artt. 5 e 19 (81_2015 in libreria)."
    },

    "DL-3a": {
      sintesi: "Il patto di prova subordina l'assunzione definitiva all'esito positivo di un esperimento, nel reciproco interesse delle parti (art. 2096 c.c.): il datore verifica capacità e idoneità del lavoratore, il lavoratore la convenienza del posto.",
      punti: [
        ["Forma: atto scritto, firmato da entrambe le parti, anteriore o al massimo contestuale all'inizio del rapporto; senza forma scritta il patto è nullo e l'assunzione è definitiva dall'inizio.", ["atto scritto", "anteriore", "contestuale"]],
        ["Durata massima di 6 mesi, salvo durata inferiore prevista dai contratti collettivi (art. 7 D.Lgs. 104/2022). Nei contratti a termine, salvo CCNL più favorevole, un giorno di effettiva prestazione ogni 15 di calendario: da 2 a 15 giorni se il contratto dura fino a 6 mesi, non oltre 30 se dura tra 6 e 12 mesi (art. 13 L. 203/2024).", ["6 mesi", "104/2022", "15 giorni", "203/2024"]],
        ["Nel rinnovo per le stesse mansioni non si può pattuire una nuova prova; malattia, infortunio, maternità e le altre assenze previste prolungano la prova per la durata dell'assenza.", ["rinnovo", "stesse mansioni", "prolungano"]],
        ["Recesso: durante la prova ciascuna parte può recedere senza preavviso né indennità e senza motivazione, salvo che sia pattuita una durata minima.", ["recesso", "senza preavviso", "durata minima"]],
        ["Compiuta la prova senza recesso, l'assunzione diventa definitiva e il periodo conta nell'anzianità; se il rapporto cessa, spettano comunque TFR e ferie maturate o la relativa indennità.", ["definitiva", "anzianita", "tfr", "ferie"]]
      ],
      aggancio: "Errori tipici da evitare nella lettera di assunzione: prova firmata dopo l'inizio del lavoro, durata superiore al CCNL, nuova prova nel rinnovo per le stesse mansioni. Le dimissioni in prova della lavoratrice in gravidanza vanno comunque convalidate all'ITL (Simone DL p. 234).",
      fonti: "Art. 2096 c.c. (NORMA_Codice_civile_lavoro); Simone, Diritto del lavoro, pp. 31-32 e 234 (art. 7 D.Lgs. 104/2022, art. 13 L. 203/2024, nota Min. Lav. 14744/2025)."
    },

    "DL-4a": {
      sintesi: "La prestazione di fatto è il lavoro eseguito in base a un contratto nullo o annullato: per l'art. 2126 c.c. la nullità o l'annullamento non producono effetto per il periodo in cui il rapporto ha avuto esecuzione, salvo che la nullità derivi dall'illiceità dell'oggetto o della causa.",
      punti: [
        ["Deroga al diritto comune: di regola la nullità travolge tutto ex tunc; nel lavoro, invece, per il periodo eseguito restano dovuti retribuzione e trattamenti, perché la prestazione non si può restituire.", ["deroga", "ex tunc", "retribuzione"]],
        ["Eccezione: se il contratto è nullo per illiceità dell'oggetto o della causa (per esempio un'attività criminosa), la tutela non opera e resta solo l'azione di arricchimento senza causa (art. 2041 c.c.).", ["illiceita", "oggetto", "causa", "2041"]],
        ["Contro-eccezione (art. 2126, c. 2): se il lavoro è stato prestato violando norme poste a tutela del lavoratore, la retribuzione spetta in ogni caso.", ["tutela del lavoratore", "in ogni caso"]],
        ["Esempio tipico: il minore sotto l'età minima di ammissione al lavoro. Il contratto è nullo per contrasto con una norma imperativa, ma il minore ha comunque diritto alla retribuzione.", ["minore", "eta minima", "nullo"]],
        ["Gli effetti cessano solo per il futuro: la sentenza o la scoperta della nullità chiudono il rapporto da quel momento.", ["futuro"]]
      ],
      aggancio: "In sede ispettiva, anche se il rapporto è nullo, il lavoratore ha diritto alle differenze retributive per il periodo lavorato, recuperabili con la diffida accertativa (art. 12 D.Lgs. 124/2004).",
      fonti: "Art. 2126 c.c. (NORMA_Codice_civile_lavoro); Simone, Diritto del lavoro, pp. 33-34; art. 12 D.Lgs. 124/2004 (124_2004 in libreria)."
    },

    "DL-5a": {
      sintesi: "La certificazione (artt. 75-81 D.Lgs. 276/2003) è una procedura volontaria con cui le parti fanno attestare da una commissione che il contratto con cui si scambia una prestazione di lavoro ha i requisiti di forma e contenuto richiesti dalla legge. Lo scopo è dare certezza alla qualificazione e ridurre il contenzioso.",
      punti: [
        ["Commissioni (art. 76): enti bilaterali, sedi territoriali dell'INL, università registrate nell'albo ministeriale, Consigli provinciali dei consulenti del lavoro (solo per i contratti instaurati nel loro territorio), Ministero del lavoro.", ["76", "enti bilaterali", "universita", "consulenti del lavoro"]],
        ["Procedimento (art. 78): istanza scritta comune che indica gli effetti civili, amministrativi, previdenziali o fiscali richiesti; avvio comunicato all'ITL, che informa INPS, INAIL e Agenzia delle Entrate; conclusione entro 30 giorni; atto motivato con indicazione del termine e dell'autorità a cui ricorrere.", ["istanza", "30 giorni", "motivato"]],
        ["Effetti (art. 79): permangono tra le parti e verso i terzi, compresi INPS e organi di vigilanza, fino a una sentenza che accolga l'impugnazione. L'ispettore può controllare, ma non può adottare provvedimenti fondati su una qualificazione diversa. Per i contratti in corso gli effetti retroagiscono all'inizio, se la commissione ha verificato che l'attuazione era conforme.", ["79", "terzi", "sentenza", "retroag"]],
        ["Impugnazione (art. 80), davanti al giudice del lavoro, solo per tre motivi: erronea qualificazione, vizio del consenso (solo le parti), difformità tra programma certificato e attuazione. Prima occorre il tentativo di conciliazione davanti alla stessa commissione; per i vizi del procedimento si ricorre al TAR.", ["erronea qualificazione", "vizio del consenso", "difformita", "conciliazione", "tar"]],
        ["Altri usi: rinunzie e transazioni (art. 2113 c.c.), appalti, regolamenti delle cooperative, co.co.co. senza etero-organizzazione, patti di demansionamento (art. 2103 c.c.), clausole elastiche, conciliazione nelle tutele crescenti, dimissioni.", ["2113", "appalt", "2103", "clausole elastiche"]]
      ],
      aggancio: "È uno strumento della professione: la commissione presso il Consiglio provinciale dell'Ordine certifica i contratti del proprio territorio. All'orale conviene citarla anche nelle domande su co.co.co., appalto e rinunzie.",
      fonti: "Simone, Diritto del lavoro, pp. 34-37 (artt. 75-81 D.Lgs. 276/2003)."
    },

    "DL-9b": {
      sintesi: "Il contratto collettivo nazionale è un contratto di diritto comune, perché l'art. 39 Cost., seconda parte, non è stato attuato: vincola solo gli iscritti alle associazioni firmatarie (art. 1372 c.c.). La sua efficacia si è allargata per altre vie.",
      punti: [
        ["Efficacia oggettiva: il contratto individuale non può derogare in peggio al CCNL; la clausola difforme è nulla ed è sostituita da quella collettiva, mentre le condizioni più favorevoli al lavoratore sono valide (derogabilità in melius).", ["in peggio", "sostituita", "in melius"]],
        ["Estensione ai non iscritti: adesione o richiamo nel contratto individuale; applicazione di fatto; uso giurisprudenziale dei minimi del CCNL come parametro della retribuzione sufficiente (art. 36 Cost. e art. 2099 c.c.).", ["non iscritti", "richiamo", "36 cost", "2099"]],
        ["Regole sindacali (accordi interconfederali del 2011, 2013 e Testo unico del 10/1/2014): per negoziare serve almeno il 5% di rappresentatività. Il CCNL è efficace ed esigibile se firmato da sindacati che rappresentano il 50% più uno e approvato dai lavoratori con consultazione certificata.", ["testo unico", "5%", "50%", "consultazione"]],
        ["Contratti aziendali: efficaci per tutti se approvati dalla maggioranza della RSU, o dalle RSA delle associazioni che hanno la maggioranza delle deleghe. Diverso è il contratto di prossimità (art. 8 D.L. 138/2011), che ha efficacia generale per legge.", ["rsu", "rsa", "maggioranza", "prossimita"]],
        ["Il D.L. 62/2026 (art. 7) usa il TEC del CCNL leader come parametro della retribuzione giusta; negli appalti l'art. 29, c. 1-bis, D.Lgs. 276/2003 rinvia già al CCNL comparativamente più rappresentativo del settore e della zona.", ["62/2026", "tec"]]
      ],
      aggancio: "Per il consulente la scelta del CCNL da applicare incide su minimi, contributi (minimale contributivo) e appalti: un CCNL poco rappresentativo espone a recuperi e diffide accertative. Per il D.L. 62/2026 vedi il dossier P1, Cap. 1.",
      fonti: "Simone, Diritto del lavoro, pp. 46-54; Cost. (testi Senato e Corte cost., verificati il 30/10/2026); P1_Cap01_DL62_2026 e P1_Cap05_Prossimita."
    },

    "DL-12b": {
      sintesi: "L'art. 8 D.L. 138/2011, convertito dalla L. 148/2011, consente a contratti aziendali o territoriali di derogare anche alla legge e ai CCNL, in materie tassative e per finalità tipiche, con efficacia verso tutti i lavoratori interessati. È una norma eccezionale (Corte cost. 221/2012).",
      punti: [
        ["Soggetti: associazioni dei lavoratori comparativamente più rappresentative sul piano nazionale o territoriale, o le loro rappresentanze in azienda; firma con criterio maggioritario, che dà l'efficacia generale.", ["comparativamente", "maggioritario", "efficacia"]],
        ["Finalità da dichiarare e documentare: occupazione, qualità dei contratti, partecipazione, emersione, competitività e salario, gestione delle crisi, investimenti.", ["finalita", "occupazione", "crisi"]],
        ["Materie (c. 2, elenco tassativo): impianti audiovisivi e nuove tecnologie; mansioni e inquadramento; contratti a termine, a orario ridotto, flessibile, somministrazione, solidarietà negli appalti; orario; assunzioni, disciplina del rapporto e conseguenze del recesso, esclusi i licenziamenti discriminatori e quelli per matrimonio, maternità, congedi, adozione.", ["tassativ", "mansioni", "orario", "discriminatori"]],
        ["Limiti (c. 2-bis): Costituzione, vincoli europei e convenzioni internazionali. La retribuzione non è una materia derogabile: il mero contenimento retributivo non vi rientra (Corte cost. 52/2023).", ["costituzione", "europe", "52/2023"]],
        ["Novità del D.L. 62/2026, art. 7-bis, in vigore dal 28/6/2026: deposito presso Ministero e CNEL; nelle imprese fino a 15 dipendenti le intese peggiorative si firmano presso l'ITL; informativa scritta ai lavoratori entro 3 giorni.", ["7-bis", "cnel", "15 dipendenti", "3 giorni"]]
      ],
      aggancio: "Non confonderlo con l'art. 51 D.Lgs. 81/2015, che consente ai contratti aziendali di integrare la legge solo dove questa rinvia. Il consulente redige l'intesa indicando finalità, norme derogate, durata, e cura firma presso l'ITL, informativa e deposito. Per Rausei (dottrina) l'ITL deve verificare che le riduzioni non siano sproporzionate e siano a tempo.",
      fonti: "P1_Cap05_Prossimita v6 (art. 8 D.L. 138/2011 da 138_2011_ESTRATTO_art8; art. 7-bis D.L. 62/2026 da 62_2026; Corte cost. 221/2012 e 52/2023 lette su giurcost.org); Rausei, lezione 19/10/2026 (dottrina)."
    },

    "DL-16b": {
      sintesi: "Lo sciopero è l'astensione collettiva e concertata dal lavoro per la tutela di interessi collettivi; è un diritto costituzionale (art. 40 Cost.) di titolarità individuale e di esercizio collettivo, che si esercita nell'ambito delle leggi che lo regolano.",
      punti: [
        ["Manca una legge generale: l'unica disciplina attuativa è la L. 146/1990 sui servizi pubblici essenziali (prestazioni indispensabili, preavviso, codici di autoregolamentazione, Commissione di garanzia).", ["146/1990", "servizi pubblici essenziali", "preavviso", "commissione di garanzia"]],
        ["Finalità legittime: interessi economici in senso ampio, cioè tutti i rapporti economici degli artt. 35-47 Cost. (Corte cost. 1/1974); anche lo sciopero politico, se non mira a sovvertire l'ordinamento costituzionale (Corte cost. 290/1974); lo sciopero di solidarietà, se c'è comunanza di interessi (Cass. 2283/1963).", ["1/1974", "290/1974", "solidarieta", "2283/1963"]],
        ["Effetti: sospende le due prestazioni principali; non è inadempimento né illecito disciplinare. È legittima la trattenuta proporzionale di retribuzione, tredicesima e ferie; restano le prestazioni previdenziali; non è coperto l'infortunio durante lo sciopero.", ["sospende", "disciplinare", "tredicesima", "ferie"]],
        ["Forme anomale (a singhiozzo, a scacchiera): la loro legittimità resta controversa in dottrina e giurisprudenza.", ["singhiozzo", "scacchiera"]],
        ["Serrata: la Costituzione non la prevede; la dottrina la ritiene lecita come espressione della libertà di iniziativa economica (art. 41 Cost.), ma non esiste un diritto di serrata.", ["serrata", "41"]]
      ],
      aggancio: "Per il datore: è vietato assumere a termine o con contratto intermittente per sostituire lavoratori in sciopero (artt. 20 e 14 D.Lgs. 81/2015); il comportamento che lede il diritto di sciopero è contrastabile con il ricorso per condotta antisindacale (art. 28 St. lav.).",
      fonti: "Simone, Diritto del lavoro, pp. 54-56 e 205, 221; Cost. (testi Senato e Corte cost., verificati il 30/10/2026); art. 28 L. 300/1970 (Statuto Lavoratori 300_1970 in libreria)."
    },

    "DL-X2": {
      sintesi: "Il potere disciplinare è la facoltà del datore di sanzionare il lavoratore che viola gli obblighi di diligenza, obbedienza e fedeltà (artt. 2104-2105 c.c.), secondo la gravità dell'infrazione (art. 2106 c.c.). L'art. 7 St. lav. ne fissa le garanzie sostanziali e procedurali.",
      punti: [
        ["Codice disciplinare: infrazioni, sanzioni e procedure devono essere portate a conoscenza dei lavoratori mediante affissione in luogo accessibile a tutti, applicando quanto stabilito dai contratti collettivi (art. 7, c. 1).", ["codice disciplinare", "affissione", "contratti collettivi"]],
        ["Procedimento: contestazione scritta, specifica e immediata dell'addebito; audizione del lavoratore che la chiede, anche assistito da un sindacalista; nessuna sanzione più grave del rimprovero verbale prima di 5 giorni dalla contestazione (art. 7, c. 2, 3 e 5).", ["contestazione", "specifica", "sindaca", "5 giorni"]],
        ["Limiti alle sanzioni: proporzionalità (art. 2106); niente mutamenti definitivi del rapporto; multa fino a 4 ore di retribuzione base; sospensione dal servizio e dalla retribuzione fino a 10 giorni; le sanzioni non contano più dopo 2 anni dalla loro applicazione (art. 7, c. 4 e 8).", ["proporzionalita", "4 ore", "10 giorni", "2 anni"]],
        ["Impugnazione: ricorso al giudice, che non sospende la sanzione; oppure, entro 20 giorni, collegio di conciliazione e arbitrato tramite l'ITL, con sanzione sospesa fino alla pronuncia; se il datore non nomina il suo arbitro entro 10 giorni la sanzione non ha effetto (art. 7, c. 6-7).", ["20 giorni", "arbitrato", "sospesa", "10 giorni"]],
        ["Licenziamento disciplinare: le garanzie dei commi 1-3 si applicano anche al licenziamento per motivi disciplinari (Corte cost. 204/1982).", ["licenziamento", "204/1982"]]
      ],
      aggancio: "Ricollegalo all'elaborato scritto: se il fatto contestato non sussiste o il CCNL lo punisce con una sanzione conservativa, l'art. 18 St. lav. prevede la reintegra; per gli assunti dal 7/3/2015 la reintegra è prevista per l'insussistenza del fatto materiale (art. 3, c. 2, D.Lgs. 23/2015). Il consulente cura codice affisso, contestazione e rispetto dei termini.",
      fonti: "Art. 7 L. 300/1970 e nota su Corte cost. 204/1982 (Statuto Lavoratori 300_1970 in libreria); artt. 2104-2106 c.c. (NORMA_Codice_civile_lavoro); Simone, Diritto del lavoro, pp. 133-136; P1_Cap08, scheda 1."
    },

    "DL-1b": {
      sintesi: "Il contratto a tempo determinato è un contratto di lavoro subordinato con un termine finale, alla cui scadenza il rapporto si estingue automaticamente. È disciplinato dagli artt. 19-29 D.Lgs. 81/2015; la forma comune resta il tempo indeterminato.",
      punti: [
        ["Durata: libera fino a 12 mesi; fino a 24 solo con una condizione: casi previsti dai contratti collettivi dell'art. 51; in loro assenza, entro il 31/12/2026, esigenze tecniche, organizzative o produttive individuate dalle parti; sostituzione di altri lavoratori. Tetto complessivo di 24 mesi tra le stesse parti per mansioni di pari livello, salvo CCNL; poi un ultimo contratto fino a 12 mesi presso l'ITL (art. 19).", ["12 mesi", "24 mesi", "31/12/2026", "sostituzione", "itl"]],
        ["Forma: il termine è privo di effetto se non risulta da atto scritto, salvo rapporti fino a 12 giorni. Proroghe e rinnovi liberi nei primi 12 mesi, poi solo con le condizioni; massimo 4 proroghe in 24 mesi; tra un contratto e l'altro intervalli di 10 o 20 giorni, salvo stagionali (art. 21).", ["atto scritto", "12 giorni", "4 proroghe", "10", "20 giorni"]],
        ["Divieti (art. 20): sostituire scioperanti; unità con licenziamenti collettivi nei 6 mesi precedenti o con integrazione salariale per le stesse mansioni; imprese senza valutazione dei rischi. Limite quantitativo del 20% dei lavoratori a tempo indeterminato al 1° gennaio, salvo CCNL ed esenzioni; la violazione comporta una sanzione amministrativa, non la trasformazione (art. 23).", ["sciopera", "valutazione dei rischi", "20%", "sanzione amministrativa"]],
        ["Prosecuzione oltre la scadenza: fino a 30 giorni (contratti sotto 6 mesi) o 50 giorni, con maggiorazione del 20% fino al decimo giorno e del 40% dopo; oltre quei limiti il contratto diventa a tempo indeterminato (art. 22). Parità di trattamento con i comparabili a tempo indeterminato, in proporzione al periodo lavorato (art. 25).", ["30 giorni", "50 giorni", "40%", "25"]],
        ["Precedenza nelle assunzioni a tempo indeterminato per chi ha lavorato più di 6 mesi, entro 12 mesi, se la chiede per iscritto entro 6 mesi (art. 24). Impugnazione entro 180 giorni dalla cessazione; con la conversione, indennità onnicomprensiva da 2,5 a 12 mensilità (art. 28).", ["precedenza", "180 giorni", "2,5", "12 mensilita"]]
      ],
      aggancio: "Dal D.L. 62/2026 (art. 16-quinquies) nel tetto dei 24 mesi si contano le missioni dei somministrati assunti a termine; i somministrati a tempo indeterminato hanno un limite proprio di 36 mesi presso lo stesso utilizzatore (art. 19, c. 2-bis). Il consulente controlla durata, proroghe, causali e percentuali prima di ogni rinnovo.",
      fonti: "Simone, Diritto del lavoro, pp. 205-209; D.Lgs. 81/2015, art. 19 (81_2015 in libreria); P1_Cap08, scheda 3; art. 16-quinquies D.L. 62/2026 (62_2026 in libreria)."
    },

    "DL-2b": {
      sintesi: "Il part-time è un rapporto di lavoro subordinato, a tempo indeterminato o determinato, con orario inferiore al tempo pieno (40 ore settimanali o il minore orario del CCNL). È disciplinato dagli artt. 4-12 D.Lgs. 81/2015.",
      punti: [
        ["Forma scritta ai fini della prova, con indicazione puntuale della durata e della collocazione dell'orario per giorno, settimana, mese e anno (art. 5). Se manca la durata, su domanda del lavoratore il giudice dichiara il tempo pieno; se manca solo la collocazione, la determina il giudice; in entrambi i casi spetta un risarcimento (art. 10).", ["ai fini della prova", "collocazione", "tempo pieno", "risarcimento"]],
        ["Lavoro supplementare (oltre l'orario concordato ed entro il normale): se il CCNL non lo regola, fino al 25% delle ore settimanali, con maggiorazione del 15%; il lavoratore può rifiutarlo per comprovate esigenze di lavoro, salute, famiglia o formazione (art. 6, c. 2). Oltre l'orario normale si applica lo straordinario.", ["supplementare", "25%", "15%", "rifiut"]],
        ["Clausole elastiche, per spostare la collocazione o aumentare la durata: accordo scritto; preavviso di almeno 2 giorni; compensazioni; senza disciplina del CCNL, patto davanti alle commissioni di certificazione, aumento entro il 25% della prestazione annua e maggiorazione del 15%. Il lavoratore malato oncologico, con figlio fino a 13 anni o con figlio disabile può revocare il consenso.", ["clausole elastiche", "2 giorni", "certificazione", "revoca"]],
        ["Trattamento: non discriminazione (stessa retribuzione oraria, ferie, prova, maternità) e proporzionalità per gli istituti legati all'orario. Nel computo dei dipendenti il part-time conta in proporzione all'orario (art. 9).", ["non discriminazione", "proporzionalita", "computo"]],
        ["Trasformazioni: il rifiuto del lavoratore di passare al part-time o al tempo pieno non è giustificato motivo di licenziamento (art. 8, c. 1); diritto al part-time per patologie oncologiche o cronico-degenerative; priorità per chi assiste familiari gravemente malati e, dal 2026, per i genitori con almeno 3 figli conviventi (L. 199/2025).", ["rifiuto", "oncologic", "priorita", "199/2025"]]
      ],
      aggancio: "In busta paga: maggiorazioni del supplementare e delle clausole elastiche, minimale contributivo orario (art. 11 D.Lgs. 81/2015) e retribuzione INAIL pari a quella tabellare del tempo pieno su base oraria. In ispezione, il part-time senza orario scritto o con ore di fatto superiori è una delle irregolarità più frequenti.",
      fonti: "D.Lgs. 81/2015, artt. 5, 6, 10, 11 (81_2015 in libreria); Simone, Diritto del lavoro, pp. 215-219 (art. 1, c. 214, L. 199/2025)."
    },

    "DL-3b": {
      sintesi: "Il lavoro intermittente, o a chiamata, è un contratto di lavoro subordinato, a tempo determinato o indeterminato, con cui il lavoratore si mette a disposizione del datore, che lo chiama quando ne ha bisogno (artt. 13-18 D.Lgs. 81/2015).",
      punti: [
        ["Causali (art. 13): oggettiva, per prestazioni discontinue o intermittenti individuate dai contratti collettivi o, in mancanza, da decreto ministeriale; soggettiva, con lavoratori con meno di 24 anni o più di 55. Limite di 400 giornate di effettivo lavoro in 3 anni solari tra le stesse parti, salvo turismo, pubblici esercizi e spettacolo; il superamento trasforma il rapporto in tempo pieno e indeterminato.", ["causali", "24 anni", "55", "400 giornate", "turismo"]],
        ["Divieti (art. 14): sostituire scioperanti; unità con licenziamenti collettivi, sospensioni o riduzioni d'orario nei 6 mesi precedenti per le stesse mansioni; imprese senza valutazione dei rischi.", ["divieti", "sciopera", "valutazione dei rischi"]],
        ["Forma scritta ai fini della prova, con contenuti obbligatori: durata e causali, luogo e modalità della disponibilità, trattamento e indennità, preavviso di chiamata (almeno un giorno lavorativo), misure di sicurezza (art. 15, c. 1).", ["forma scritta", "preavviso", "giorno lavorativo"]],
        ["Comunicazione preventiva all'ITL prima di ogni prestazione o ciclo fino a 30 giorni; se omessa, sanzione da 400 a 2.400 euro per lavoratore, senza diffida (art. 15, c. 3). Informativa annuale alle RSA o alla RSU (art. 15, c. 2).", ["comunicazione", "30 giorni", "400", "2.400", "diffida"]],
        ["Con obbligo di risposta spetta l'indennità mensile di disponibilità, fissata dai CCNL e non inferiore al minimo ministeriale, imponibile ai fini contributivi; il rifiuto ingiustificato può risolvere il contratto. Senza obbligo, nulla è dovuto per i periodi di attesa (art. 16). Nel computo dei dipendenti conta in proporzione all'orario svolto nel semestre (art. 18).", ["indennita", "disponibilita", "rifiuto", "semestre"]]
      ],
      aggancio: "Il consulente deve garantire le comunicazioni preventive a ogni chiamata e tenere il conto delle 400 giornate. In ispezione la mancanza della comunicazione si sanziona per ogni lavoratore, senza possibilità di diffida.",
      fonti: "D.Lgs. 81/2015, artt. 15-16 (81_2015 in libreria); Simone, Diritto del lavoro, pp. 220-222; P1_Cap05, § 5 (art. 18)."
    },

    "DL-21a": {
      sintesi: "L'apprendistato è un contratto di lavoro a tempo indeterminato finalizzato alla formazione e all'occupazione dei giovani, con causa mista: lavoro in cambio di retribuzione e formazione. Il professionalizzante (secondo livello) serve a conseguire una qualificazione professionale ai fini contrattuali (artt. 41-47 D.Lgs. 81/2015).",
      punti: [
        ["Soggetti e durata: giovani da 18 a 29 anni, da 17 se già in possesso di una qualifica professionale; tutti i settori privati e pubblici; durata formativa fissata dai CCNL entro 3 anni, 5 per i profili dell'artigianato (art. 44); durata minima di 6 mesi (art. 42, c. 2).", ["18", "29 anni", "17", "3 anni", "6 mesi"]],
        ["Forma: contratto scritto ai fini della prova con piano formativo individuale anche sintetico; tutor o referente aziendale. Formazione interna secondo il CCNL, più l'offerta pubblica regionale per le competenze di base e trasversali, fino a 120 ore nel triennio.", ["ai fini della prova", "piano formativo", "tutor", "120 ore"]],
        ["Limiti: 3 apprendisti ogni 2 qualificati; sotto 10 dipendenti rapporto del 100%; senza qualificati o con meno di 3, al massimo 3 apprendisti. Con almeno 50 dipendenti, nuove assunzioni solo se nei 36 mesi precedenti è stato stabilizzato almeno il 20% degli apprendisti (art. 42, c. 7-8).", ["ogni 2 qualificati", "100%", "50 dipendenti", "20%"]],
        ["Retribuzione e inquadramento: fino a due livelli sotto quello di destinazione oppure retribuzione percentualizzata, in alternativa; divieto di cottimo. Gli apprendisti sono esclusi dal computo dei dipendenti (art. 47, c. 3) e hanno malattia INPS, maternità, NASpI e integrazioni salariali.", ["due livelli", "percentual", "cottimo", "computo"]],
        ["Recesso: durante la formazione solo per giusta causa o giustificato motivo; al termine ciascuna parte può recedere con preavviso dalla fine del periodo formativo (art. 2118 c.c.), altrimenti il rapporto prosegue a tempo indeterminato ordinario (art. 42, c. 4).", ["giusta causa", "giustificato motivo", "preavviso", "2118"]]
      ],
      aggancio: "Se il datore non fa formazione per sua esclusiva responsabilità, restituisce la differenza tra contributi versati e dovuti al livello finale, maggiorata del 100%, senza trasformazione del contratto; per i contratti in corso l'ispettore adotta una disposizione con un termine per adempiere (art. 47, c. 1).",
      fonti: "Simone, Diritto del lavoro, pp. 209-214 (artt. 41-47 D.Lgs. 81/2015)."
    },

    "DL-X5": {
      sintesi: "Il Collegato lavoro (art. 19 L. 203/2024) ha aggiunto il c. 7-bis all'art. 26 D.Lgs. 151/2015: se l'assenza ingiustificata dura oltre il termine del CCNL o, in mancanza, oltre 15 giorni, il datore può comunicarla all'ITL e il rapporto si intende risolto per volontà del lavoratore, senza la procedura telematica delle dimissioni.",
      punti: [
        ["Regola generale: dimissioni e risoluzioni consensuali sono efficaci solo con i moduli telematici del Ministero, revocabili entro 7 giorni; sono esclusi tra gli altri i lavoratori in prova e i domestici; le dimissioni dei genitori nei primi 3 anni di vita del bambino si convalidano all'ITL.", ["moduli telematici", "7 giorni", "convalid"]],
        ["Presupposti: assenza ingiustificata oltre il termine del CCNL o, se il CCNL tace, oltre 15 giorni; comunicazione del datore alla sede territoriale dell'INL, che può verificarne la veridicità.", ["assenza ingiustificata", "15 giorni", "comunicazione", "veridicita"]],
        ["È una facoltà, non un obbligo del datore (circ. Min. Lav. 6/2025): in alternativa può procedere disciplinarmente, se il CCNL lo prevede.", ["facolta", "6/2025", "disciplinar"]],
        ["L'effetto risolutivo non si produce se l'ITL accerta che la comunicazione non è veritiera, o se il lavoratore prova di non aver potuto comunicare i motivi dell'assenza per forza maggiore o per fatto del datore (nota INL 579/2025).", ["veritiera", "forza maggiore", "579/2025"]],
        ["Conseguenze: niente NASpI, che spetta invece in caso di licenziamento o di dimissioni per giusta causa; le dimissioni per giusta causa presentate dal lavoratore prevalgono sulla procedura avviata dal datore (circ. INPS 154/2025).", ["naspi", "giusta causa", "154/2025"]]
      ],
      aggancio: "La ratio è contrastare le assenze volute per farsi licenziare e ottenere la NASpI. Il consulente verifica il termine del CCNL, invia la comunicazione all'ITL e la comunicazione obbligatoria di cessazione.",
      fonti: "Simone, Diritto del lavoro, pp. 233-235 (art. 26 D.Lgs. 151/2015; art. 19 L. 203/2024; nota INL 579/2025; msg. INPS 639/2025; circ. Min. Lav. 6/2025; circ. INPS 154/2025); P1_Cap08, scheda 5."
    },

    "DL-9a": {
      sintesi: "Il distacco si ha quando un datore di lavoro, per soddisfare un proprio interesse, mette temporaneamente uno o più lavoratori a disposizione di un altro soggetto per l'esecuzione di una determinata attività (art. 30 D.Lgs. 276/2003).",
      punti: [
        ["Requisiti: interesse specifico, concreto e persistente del distaccante per tutta la durata, anche non economico; temporaneità, intesa come non definitività e non come brevità (Cass. 23933/2010); attività determinata e funzionale a quell'interesse (interpello Min. Lav. 1/2011).", ["interesse", "temporaneita", "23933/2010"]],
        ["Il rapporto resta con il distaccante, che continua a rispondere del trattamento economico e normativo; il distaccatario esercita il potere direttivo per la durata del distacco.", ["distaccante", "trattamento economico", "direttivo"]],
        ["Garanzie: se cambiano le mansioni serve il consenso del lavoratore; il distacco in un'unità a più di 50 km è ammesso solo per comprovate ragioni tecniche, organizzative, produttive o sostitutive.", ["consenso", "50 km", "comprovate ragioni"]],
        ["Distacco privo dei requisiti: è somministrazione illecita. Il lavoratore può chiedere il rapporto con chi ha utilizzato la prestazione (art. 30, c. 4-bis); c'è solidarietà retributiva e contributiva; utilizzatore e distaccante rispondono con l'arresto fino a un mese o l'ammenda di 60 euro per lavoratore e giornata, tra 5.000 e 60.000 euro.", ["somministrazione illecita", "4-bis", "60 euro", "5.000"]],
        ["Novità del D.L. 62/2026 (art. 16-quater), in via sperimentale fino al 31/12/2029: previo accordo sindacale, il distacco è ammesso anche senza interesse proprio del distaccante e tra imprese di settori o CCNL diversi, se serve a salvaguardare l'occupazione o la continuità produttiva, o a evitare sospensioni, riduzioni d'orario, ammortizzatori o esuberi.", ["16-quater", "31/12/2029", "accordo sindacale", "occupazion"]]
      ],
      aggancio: "È lo strumento richiamato da Rausei per la gestione delle crisi senza licenziamenti. Il consulente documenta per iscritto l'interesse del distaccante e la durata; in ispezione il distacco senza interesse proprio, fuori dall'art. 16-quater, viene trattato come somministrazione illecita.",
      fonti: "Simone, Diritto del lavoro, pp. 100-102; art. 16-quater D.L. 62/2026 conv. L. 112/2026 (62_2026 in libreria)."
    },

    "DL-10a": {
      sintesi: "La somministrazione è la forma lecita di fornitura di manodopera: un'agenzia autorizzata mette a disposizione di un utilizzatore lavoratori propri dipendenti, che per tutta la missione lavorano nell'interesse e sotto la direzione e il controllo dell'utilizzatore (art. 30 D.Lgs. 81/2015).",
      punti: [
        ["Due contratti: quello commerciale di somministrazione tra agenzia e utilizzatore, in forma scritta con i contenuti dell'art. 33 (a pena di nullità: i lavoratori si considerano dipendenti dell'utilizzatore, art. 38); quello di lavoro tra agenzia e lavoratore, a tempo indeterminato o determinato.", ["commerciale", "forma scritta", "nullita", "38"]],
        ["Limiti quantitativi, salvo CCNL dell'utilizzatore: somministrati a tempo indeterminato non oltre il 20% dei lavoratori a tempo indeterminato al 1° gennaio; a termine e somministrati a termine insieme non oltre il 30%, con le esenzioni previste (svantaggiati, stagionali, sostituzioni, over 50).", ["20%", "30%", "1° gennaio", "esenzioni"]],
        ["Divieti (art. 32): sostituire scioperanti; unità con licenziamenti collettivi nei 6 mesi precedenti o con integrazione salariale per le stesse mansioni; imprese senza valutazione dei rischi.", ["32", "sciopera", "valutazione dei rischi"]],
        ["Parità di trattamento con i dipendenti di pari livello dell'utilizzatore; solidarietà dell'utilizzatore per retribuzioni e contributi; potere direttivo all'utilizzatore, potere disciplinare all'agenzia.", ["parita", "solidarieta", "disciplinare"]],
        ["Somministrazione irregolare (fuori dai limiti e requisiti): il lavoratore può chiedere il rapporto alle dipendenze dell'utilizzatore. Fraudolenta, se diretta a eludere norme inderogabili: arresto fino a 3 mesi o ammenda di 100 euro per lavoratore e giorno (art. 18, c. 5-ter, D.Lgs. 276/2003).", ["irregolare", "fraudolenta", "100 euro", "5-ter"]]
      ],
      aggancio: "Dal D.L. 62/2026 (art. 16-quinquies) i somministrati assunti a tempo indeterminato possono lavorare a termine presso lo stesso utilizzatore fino a 36 mesi complessivi, salvo diverso limite del CCNL dell'utilizzatore (art. 19, c. 2-bis, D.Lgs. 81/2015).",
      fonti: "Simone, Diritto del lavoro, pp. 94-98; art. 16-quinquies D.L. 62/2026 (62_2026 in libreria)."
    },

    "DL-8b": {
      sintesi: "L'appalto è genuino se l'appaltatore organizza i mezzi necessari, anche solo esercitando il potere organizzativo e direttivo sui lavoratori, e assume il rischio d'impresa (art. 1655 c.c.; art. 29, c. 1, D.Lgs. 276/2003). Se questi requisiti mancano, l'appalto è illecito: è una somministrazione abusiva di manodopera.",
      punti: [
        ["Indici di genuinità: chi dirige e organizza i lavoratori, di chi sono i mezzi, chi sopporta il rischio. Negli appalti ad alta intensità di manodopera l'organizzazione può ridursi alla direzione del personale.", ["dirige", "mezzi", "rischio"]],
        ["Tutela del lavoratore: azione per la costituzione del rapporto alle dipendenze del committente che ha utilizzato la prestazione (art. 29, c. 3-bis); solidarietà di committente, appaltatore e subappaltatori per retribuzioni, TFR, contributi e premi (art. 29, c. 2).", ["3-bis", "committente", "solidarieta"]],
        ["Sanzioni (art. 18, c. 5-bis): utilizzatore e pseudo-appaltatore puniti con l'arresto fino a un mese o l'ammenda di 60 euro per lavoratore e giornata, comunque tra 5.000 e 60.000 euro; più 20% se recidivi nel triennio (nota INL 1091/2024 sul cumulo con la maggiorazione della L. 145/2018).", ["5-bis", "60 euro", "60.000", "1091/2024"]],
        ["Anche nell'appalto genuino: solidarietà entro 2 anni dalla cessazione per retribuzioni e contributi, esclusa per il committente persona fisica non imprenditore; trattamento non inferiore a quello del CCNL leader del settore e della zona (art. 29, c. 1-bis).", ["2 anni", "persona fisica", "1-bis"]],
        ["Procedura: le contravvenzioni con pena alternativa si estinguono con la prescrizione obbligatoria del D.Lgs. 758/1994 (P1_Cap08, scheda 2).", ["prescrizione obbligatoria", "758/1994"]]
      ],
      aggancio: "Il c. 1-bis (introdotto dal D.L. 19/2024) è il precedente diretto del salario giusto dell'art. 7 D.L. 62/2026. In ispezione l'appalto non genuino porta a imputare i rapporti al committente, con recupero di retribuzioni e contributi; il consulente verifica contratto, mezzi, direzione del personale e DURC dell'appaltatore.",
      fonti: "Simone, Diritto del lavoro, pp. 98-100; P1_Cap08, scheda 2."
    },

    "DL-13a": {
      sintesi: "Le mansioni sono i compiti concreti che il lavoratore deve svolgere e che il datore può pretendere. Per l'art. 2103 c.c. il lavoratore va adibito alle mansioni per cui è stato assunto, a quelle del superiore inquadramento acquisito o a mansioni dello stesso livello e categoria legale delle ultime svolte: entro questi limiti il datore esercita lo ius variandi.",
      punti: [
        ["Mobilità orizzontale: mansioni dello stesso livello e della stessa categoria legale, con pari retribuzione.", ["orizzontale", "stesso livello", "categoria legale"]],
        ["Mansioni superiori: spetta il trattamento corrispondente; l'assegnazione diventa definitiva dopo il periodo fissato dai CCNL o, in mancanza, dopo 6 mesi continuativi, salvo che sostituisca un lavoratore assente o che il lavoratore vi rinunci.", ["superiori", "definitiva", "6 mesi", "sostituisca"]],
        ["Mansioni inferiori unilaterali: per modifica degli assetti organizzativi che incide sulla posizione del lavoratore, o nei casi previsti dai contratti collettivi; solo un livello sotto e nella stessa categoria legale; comunicazione scritta a pena di nullità; conservazione di livello e retribuzione, salvo le voci legate alle precedenti modalità di lavoro.", ["assetti organizzativi", "scritta", "nullita", "conservazione"]],
        ["Patto di demansionamento: in sede protetta (art. 2113 c.c.: giudice, ITL, commissioni di certificazione), con l'assistenza anche di un consulente del lavoro, nell'interesse del lavoratore a conservare l'occupazione, acquisire un'altra professionalità o migliorare le condizioni di vita; si può modificare anche livello, categoria e retribuzione.", ["sede protetta", "2113", "consulente del lavoro", "conservare l'occupazione"]],
        ["Casi di legge: lavoratrice in gravidanza e fino a 7 mesi dopo il parto spostata da mansioni pregiudizievoli (art. 7 D.Lgs. 151/2001); lavoratore divenuto inidoneo ricollocato anche in mansioni inferiori con la retribuzione precedente (art. 42 D.Lgs. 81/2008).", ["7 mesi", "inidone", "42"]]
      ],
      aggancio: "Ogni patto contrario all'art. 2103 è nullo. Il consulente cura la comunicazione scritta del demansionamento e, per l'accordo individuale, la sede protetta, che può essere la commissione di certificazione del proprio Ordine. Nella prossimità le mansioni sono derogabili (art. 8, c. 2, lett. b, D.L. 138/2011).",
      fonti: "Art. 2103 c.c. (NORMA_Codice_civile_lavoro); Simone, Diritto del lavoro, pp. 105-108; P1_Cap05 (prossimità)."
    },

    "DL-8a": {
      sintesi: "Il patto di non concorrenza è l'accordo con cui il lavoratore si obbliga a non svolgere attività in concorrenza con il datore per un periodo successivo alla fine del rapporto (art. 2125 c.c.). È diverso dal divieto di concorrenza dell'art. 2105, che vale solo durante il rapporto.",
      punti: [
        ["Requisiti a pena di nullità: atto scritto; corrispettivo a favore del lavoratore; limiti di oggetto, di tempo e di luogo.", ["atto scritto", "corrispettivo", "oggetto", "luogo"]],
        ["Durata massima: 5 anni per i dirigenti, 3 anni per gli altri lavoratori; se è pattuita una durata maggiore, si riduce automaticamente a quella di legge.", ["5 anni", "3 anni", "riduce"]],
        ["Durante il rapporto vale l'obbligo di fedeltà (art. 2105): divieto di trattare affari in concorrenza, per conto proprio o di terzi, e di divulgare notizie sull'organizzazione e sui metodi di produzione; la riservatezza dura anche dopo, per il tempo in cui l'interesse al segreto permane.", ["2105", "fedelta", "riservatezza"]],
        ["Diverso dalla concorrenza sleale (art. 2598 c.c.): quella non presuppone un contratto e la responsabilità è extracontrattuale; la violazione del patto è invece un inadempimento contrattuale.", ["2598", "extracontrattuale", "inadempimento"]],
        ["Tutela penale del segreto aziendale: artt. 621-623 c.p. (rivelazione di segreti professionali, scientifici o commerciali).", ["621", "segret"]]
      ],
      aggancio: "Il consulente redige il patto con corrispettivo congruo e limiti precisi: un corrispettivo simbolico o un ambito troppo esteso lo espongono alla nullità.",
      fonti: "Art. 2125 c.c. come riportato da Simone, Diritto del lavoro, p. 110; art. 2105 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "DL-14a": {
      sintesi: "All'assunzione il datore deve informare il lavoratore per iscritto sulle condizioni applicabili al contratto e al rapporto (art. 1 D.Lgs. 152/1997, riscritto dal Decreto trasparenza, D.Lgs. 104/2022).",
      punti: [
        ["Contenuto: identità delle parti; luogo di lavoro; inquadramento, livello e qualifica; data di inizio e tipologia; durata della prova e diritto alla formazione; ferie e congedi retribuiti; preavviso; retribuzione iniziale e modalità di pagamento; programmazione dell'orario e straordinario; CCNL applicato con le parti firmatarie; enti che ricevono i contributi.", ["identita", "inquadramento", "retribuzione", "ccnl", "contributi"]],
        ["Lavoro con organizzazione imprevedibile: variabilità della programmazione, ore minime retribuite garantite, giorni e ore di riferimento, preavviso minimo.", ["imprevedibil", "ore minime", "preavviso"]],
        ["Tempi e modi: consegna del contratto scritto o della copia della comunicazione di assunzione prima dell'inizio dell'attività; le informazioni mancanti per iscritto entro 7 giorni; alcune (ferie, congedi, CCNL) entro un mese; si può rinviare alla norma o al contratto collettivo.", ["prima dell'inizio", "7 giorni", "un mese", "rinviare"]],
        ["Sistemi decisionali o di monitoraggio automatizzati (art. 1-bis): informazioni aggiuntive su scopi, logica, dati e misure di controllo, da dare anche alle RSA o alla RSU; per l'IA l'informativa deve essere chiara e tempestiva.", ["1-bis", "automatizzat", "rsa"]],
        ["D.L. 62/2026: l'informativa deve indicare anche il codice del CCNL applicato (lett. q-bis), come il prospetto paga.", ["62/2026", "codice", "q-bis"]]
      ],
      aggancio: "È la lettera di assunzione che il consulente prepara ogni giorno. Il D.Lgs. 96/2026 sulla trasparenza retributiva usa la stessa informativa come canale ordinario per comunicare i criteri retributivi (P1_Mappe).",
      fonti: "Simone, Diritto del lavoro, pp. 79-80 (art. 1 e 1-bis D.Lgs. 152/1997); 152_1997 in libreria; P1_Cap01 (lett. q-bis); P1/P1_Mappe_DL62_DLgs96."
    },

    "DL-15a": {
      sintesi: "L'art. 4 St. lav. vieta che il controllo a distanza dei lavoratori sia l'unica finalità di impianti e strumenti. Impianti audiovisivi e altri strumenti da cui deriva anche un controllo a distanza sono ammessi solo per esigenze organizzative e produttive, per la sicurezza del lavoro o per la tutela del patrimonio, previo accordo sindacale o autorizzazione dell'ITL.",
      punti: [
        ["Procedura: accordo collettivo con RSA o RSU; in mancanza, autorizzazione dell'Ispettorato territoriale del lavoro.", ["accordo", "rsa", "autorizzazione"]],
        ["Nessun accordo né autorizzazione per gli strumenti usati per rendere la prestazione (pc, telefono aziendale) e per quelli di rilevazione degli accessi e delle presenze.", ["strumenti", "prestazione", "presenze"]],
        ["Le informazioni raccolte sono utilizzabili a tutti i fini del rapporto, anche disciplinari, solo se il lavoratore ha ricevuto adeguata informazione sulle modalità d'uso e sui controlli e nel rispetto della normativa privacy (D.Lgs. 196/2003 e GDPR).", ["informazione", "privacy", "disciplinar"]],
        ["Gli altri limiti dello Statuto: guardie giurate solo a tutela del patrimonio (art. 2); nominativi del personale di vigilanza comunicati (art. 3); visite personali solo se indispensabili (art. 6); divieto di indagini sulle opinioni (art. 8).", ["guardie giurate", "visite", "opinioni"]],
        ["Sanzioni: la violazione dell'art. 4 è punita penalmente con l'ammenda o l'arresto (art. 38 St. lav., richiamato dagli artt. 113-114 D.Lgs. 196/2003, come riportati da Simone p. 989).", ["38", "ammenda", "arresto"]]
      ],
      aggancio: "Nella prossimità gli impianti audiovisivi sono una delle materie derogabili (art. 8, c. 2, lett. a, D.L. 138/2011), fermi i limiti di privacy. Il consulente prepara l'istanza all'ITL e l'informativa ai lavoratori prima di installare telecamere o geolocalizzatori.",
      fonti: "Simone, Diritto del lavoro, pp. 134 e 137 (Statuto e D.Lgs. 196/2003); Simone, Diritto penale, p. 989 (art. 38 St. lav.); P1_Cap05."
    },

    "DL-18a": {
      sintesi: "Per l'art. 36 Cost. il lavoratore ha diritto a una retribuzione proporzionata alla quantità e qualità del suo lavoro e in ogni caso sufficiente ad assicurare a sé e alla famiglia un'esistenza libera e dignitosa. Proporzionalità e sufficienza sono requisiti inderogabili.",
      punti: [
        ["La norma è immediatamente precettiva: ogni patto contrario è nullo e il giudice determina la retribuzione (art. 2099, c. 2, c.c.), di regola usando come parametro i minimi del contratto collettivo di categoria.", ["precettiva", "nullo", "2099", "giudice"]],
        ["Proporzionalità: equivalenza alla quantità e qualità del lavoro (orario, mansioni). Sufficienza: soglia minima per un'esistenza libera e dignitosa del lavoratore e della famiglia.", ["proporzional", "sufficien", "dignitosa"]],
        ["Per l'art. 36 Cost. la giurisprudenza estende di fatto i minimi del CCNL anche ai non iscritti, perché l'art. 39 Cost. non è attuato e il contratto collettivo vincola solo gli iscritti.", ["non iscritti", "39 cost"]],
        ["Salario giusto (art. 7 D.L. 62/2026): nessun salario minimo legale, ma rinvio al trattamento economico complessivo (TEC) del CCNL leader, cioè quello delle organizzazioni comparativamente più rappresentative; il c. 4-bis definisce le voci del TEC; nei settori senza CCNL si applica quello più connesso all'attività.", ["62/2026", "tec", "ccnl leader", "4-bis"]],
        ["Il giudice conserva il controllo di sufficienza anche sul TEC del CCNL leader (Cass. 27711/2023); per il Consiglio di Stato l'ITL può contestare l'inadeguatezza della retribuzione con la disposizione (n. 4969/2026, riportata da Rausei).", ["27711/2023", "4969/2026", "disposizione"]]
      ],
      aggancio: "È il cuore dei temi del Presidente: in ispezione il confronto con il TEC del CCNL leader porta a diffida accertativa per le differenze e al recupero dei contributi sul minimale. Il consulente sceglie il CCNL e controlla il TEC prima di ogni assunzione.",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), art. 36; Simone, Diritto del lavoro, p. 141; P1_Cap01 (art. 7 D.L. 62/2026); P1/P1_Mappe_DL62_DLgs96; P1/P1_Scheda_Sentenze_Salario."
    },

    "DL-18b": {
      sintesi: "La retribuzione si compone di elementi fissi stabiliti dal CCNL e di elementi accessori; il superminimo è la parte di retribuzione che supera i minimi tariffari, concessa individualmente (ad personam) o collettivamente.",
      punti: [
        ["Elementi fissi: paga base o minimo tabellare del livello, con gli scatti di anzianità fissati dai CCNL; elemento distinto della retribuzione (EDR) di 10,33 euro per 13 mensilità.", ["paga base", "scatti", "edr", "10,33"]],
        ["Superminimo: incremento individuale o collettivo oltre i minimi; il contratto individuale può solo migliorare il CCNL (art. 2077 c.c.).", ["superminimo", "individuale", "2077"]],
        ["Elementi accessori retributivi: maggiorazioni per straordinario, notturno e festivo; premi di produzione; gratifiche come la tredicesima; indennità per lavori disagiati, di turno, di cassa, di reperibilità; compensi per ferie e festività non godute. Se continuativi entrano nella retribuzione a ogni effetto (art. 2121 c.c.).", ["maggiorazioni", "tredicesima", "indennita", "2121"]],
        ["Elementi non retributivi: rimborsi spese forfettari per trasferte e riunioni, salvo che compensino un disagio.", ["rimborsi spese", "trasferte"]],
        ["Divieto di trattamenti economici collettivi discriminatori (art. 16 St. lav.): il datore è condannato a versare al Fondo pensioni lavoratori dipendenti una somma pari ai trattamenti di maggior favore illegittimi, per un massimo di un anno.", ["16", "discriminatori", "un anno"]]
      ],
      aggancio: "In busta paga le voci fisse formano la retribuzione ordinaria, base di calcolo per tredicesima, ferie, TFR e contributi. Il D.L. 62/2026 include nel TEC del CCNL leader anche voci accessorie: va verificato confrontando il trattamento in atto con quel parametro.",
      fonti: "Simone, Diritto del lavoro, pp. 142-146; P1_Cap01 (TEC, art. 7, c. 4-bis, D.L. 62/2026)."
    },

    "DL-19b": {
      sintesi: "Il prospetto paga è il documento analitico che il datore consegna a ogni pagamento, con le voci della retribuzione e tutte le ritenute (art. 1 L. 4/1953); il libro unico del lavoro (LUL) registra per ogni lavoratore dati del rapporto, presenze e trattamento economico (artt. 39-40 D.L. 112/2008).",
      punti: [
        ["Prospetto paga: voci retributive, ritenute fiscali e previdenziali; può consegnarlo il consulente del lavoro su delega. La firma del lavoratore sulla busta paga non prova il pagamento (art. 1, c. 912, L. 205/2017; Cass. 21699/2018).", ["ritenute", "firma", "912"]],
        ["LUL obbligatorio per tutti i datori privati, escluso il datore domestico; vi si iscrivono subordinati, somministrati, lavoratori a domicilio e co.co.co.", ["obbligatorio", "domestico", "co.co.co"]],
        ["Contenuto: dati anagrafici e del rapporto; dati economici (somme in denaro e in natura, rimborsi, straordinari, trattenute, detrazioni, prestazioni previdenziali); calendario delle presenze con le ore lavorate ogni giorno, straordinari, assenze, ferie e riposi.", ["anagrafici", "presenze", "straordinari"]],
        ["Tempi: registrazione entro la fine del mese successivo; conservazione per 5 anni dall'ultima registrazione; tenuta solo meccanografica o informatica, con numerazione sequenziale.", ["fine del mese successivo", "5 anni", "numerazione"]],
        ["Tenuta presso lo studio del consulente del lavoro, con comunicazione preventiva all'ITL; il consulente può usare un libro unificato per tutti i clienti, previa delega e autorizzazione INAIL.", ["consulente del lavoro", "itl", "unificato", "inail"]]
      ],
      aggancio: "Dal D.L. 62/2026 il prospetto paga deve indicare anche il codice del CCNL applicato (P1_Cap01). In ispezione il LUL è il primo documento richiesto: le registrazioni omesse o infedeli sono sanzionate (art. 39, c. 6-7, D.L. 112/2008: da 500 a 2.500 euro per la mancata istituzione o tenuta; da 200 a 2.000 euro per l'omessa esibizione; da 150 a 1.500 euro per l'omessa o infedele registrazione con effetti retributivi, previdenziali o fiscali, che sale oltre 5 o 10 lavoratori e oltre 6 o 12 mesi).",
      fonti: "Simone, Diritto del lavoro, p. 147; Simone, Legislazione sociale, pp. 267-268; P1_Cap01."
    },

    "DL-20a": {
      sintesi: "Dalla legge di bilancio 2018 è vietato pagare la retribuzione in contanti direttamente al lavoratore: i datori e i committenti devono usare strumenti tracciabili tramite banca o ufficio postale (art. 1, c. 910 ss., L. 205/2017).",
      punti: [
        ["Strumenti ammessi: bonifico sul conto del lavoratore identificato dall'IBAN; strumenti di pagamento elettronico; contanti allo sportello dove il datore ha un conto di tesoreria con mandato di pagamento; assegno consegnato direttamente al lavoratore.", ["bonifico", "iban", "elettronico", "assegno"]],
        ["Ambito: ogni rapporto di lavoro subordinato, le collaborazioni coordinate e continuative e i rapporti con i soci di cooperativa.", ["subordinato", "coordinate", "soci"]],
        ["Riguarda solo le somme dovute a titolo di retribuzione: le somme a diverso titolo, come vitto e alloggio, possono essere pagate in contanti (nota INL 7369/2018).", ["retribuzione", "diverso titolo", "7369/2018"]],
        ["La firma del lavoratore sulla busta paga non costituisce prova del pagamento (c. 912): conta la tracciabilità.", ["firma", "prova"]],
        ["La violazione è punita con la sanzione amministrativa da 1.000 a 5.000 euro (art. 1, c. 913, L. 205/2017).", ["sanzione amministrativa", "913"]]
      ],
      aggancio: "Il consulente conserva le contabili dei bonifici con il prospetto paga: in ispezione e nelle vertenze sono la prova dell'avvenuto pagamento.",
      fonti: "Simone, Diritto del lavoro, p. 147 (art. 1, c. 910-913, L. 205/2017)."
    },

    "DL-11a": {
      sintesi: "Il welfare aziendale è l'insieme di beni, servizi e somme che il datore eroga ai dipendenti con finalità sociali (educazione, assistenza, salute, conciliazione vita-lavoro), in tutto o in parte esclusi dal reddito di lavoro dipendente e dai contributi (art. 51 TUIR).",
      punti: [
        ["Opere e servizi offerti alla generalità o a categorie di dipendenti e ai familiari per educazione, istruzione, ricreazione, assistenza sociale e sanitaria o culto, volontariamente o in base a contratto, accordo o regolamento (art. 51, c. 2, lett. f).", ["generalita", "categorie", "educazione", "assistenza"]],
        ["Somme e servizi per l'istruzione dei figli (scuole, mense, centri estivi, borse di studio), per l'assistenza a familiari anziani o non autosufficienti, polizze per non autosufficienza e gravi patologie (lett. f-bis, f-ter, f-quater).", ["istruzione", "non autosufficien", "f-quater"]],
        ["Fringe benefit: per il 2025-2027 esenti fino a 1.000 euro, 2.000 con figli a carico (L. 207/2024, c. 390); se si supera la soglia, tutto il valore è tassato.", ["fringe benefit", "1.000", "2.000", "tutto il valore"]],
        ["Welfare di produttività: i premi di risultato previsti da contratti aziendali o territoriali possono essere convertiti in welfare esente, anziché subire l'imposta sostitutiva (L. 208/2015, c. 182 ss.; reddito di lavoro dipendente dell'anno prima fino a 80.000 euro).", ["premi di risultato", "convertit", "80.000"]],
        ["Contributi: non sono imponibili le somme che non concorrono al reddito; per i premi di produttività esistono sgravi contributivi specifici (L. 247/2007; L. 208/2015, c. 189).", ["contribut", "sgravi"]]
      ],
      aggancio: "Il consulente struttura il piano con regolamento o accordo, rivolto alla generalità o a categorie di dipendenti, per non trasformare il welfare in retribuzione imponibile. Nella CU i fringe esenti vanno nei punti 474-475, non nel punto 1.",
      fonti: "Simone, Diritto del lavoro, pp. 149-150; P2/P2_Mod07 (soglie fringe e premi 2025-2027); P2/P2_Mod01 (punti CU 474-475, 571-602); art. 51 TUIR (917_1986_TUIR)."
    },

    "DL-14b": {
      sintesi: "Le ferie annuali retribuite sono un diritto irrinunciabile del lavoratore (art. 36, c. 3, Cost.; art. 2109 c.c.): servono a recuperare le energie psicofisiche e a partecipare alla vita familiare e sociale. Il D.Lgs. 66/2003 (art. 10) ne fissa il minimo in 4 settimane.",
      punti: [
        ["Spettano a ogni lavoratore subordinato, qualunque sia il contratto e l'anzianità (Corte cost. 66/1963 ha eliminato il requisito di un anno di servizio); maturano per ratei mensili e anche durante malattia, infortunio e maternità, secondo i CCNL.", ["ogni lavoratore", "66/1963", "ratei", "malattia"]],
        ["Fruizione: almeno 2 settimane nell'anno di maturazione, consecutive se il lavoratore lo chiede; le altre 2 entro i 18 mesi successivi alla fine dell'anno, salvo termine più lungo del CCNL.", ["2 settimane", "consecutive", "18 mesi"]],
        ["Divieto di monetizzazione delle 4 settimane legali: l'indennità sostitutiva è ammessa solo alla cessazione del rapporto o nei contratti a termine brevi; i giorni ulteriori previsti dai CCNL si possono monetizzare.", ["monetizzazione", "cessazione", "indennita sostitutiva"]],
        ["Il periodo lo fissa il datore, contemperando le esigenze dell'impresa con gli interessi del lavoratore (art. 2109 c.c.; Corte cost. 543/1990). Le ferie si possono cedere gratuitamente ai colleghi che assistono figli minori gravemente malati, oltre il minimo legale (art. 24 D.Lgs. 151/2015).", ["datore", "543/1990", "cedere", "151/2015"]],
        ["Contributi: sulle ferie non godute si versano i contributi entro il diciottesimo mese successivo all'anno di maturazione; se poi vengono fruite si recuperano con UniEmens (circ. INPS 156/2025).", ["diciottesimo mese", "uniemens", "156/2025"]]
      ],
      aggancio: "In busta paga il consulente tiene il conto dei ratei maturati, goduti e residui e, al diciottesimo mese, assoggetta a contributi le ferie non godute. All'informativa del D.Lgs. 152/1997 va indicata la durata delle ferie.",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), art. 36; Simone, Diritto del lavoro, pp. 185-187 (art. 10 D.Lgs. 66/2003)."
    },

    "DL-16a": {
      sintesi: "Il D.Lgs. 66/2003 definisce orario di lavoro qualsiasi periodo in cui il lavoratore è al lavoro, a disposizione del datore e nell'esercizio delle sue funzioni (art. 1, c. 2, lett. a). Fissa l'orario normale, il limite massimo medio, i riposi e le pause; ai CCNL lascia ampi spazi.",
      punti: [
        ["Orario normale: 40 ore settimanali (art. 3); i CCNL possono ridurlo o riferirlo alla media di un periodo fino a un anno (orario multiperiodale), senza che le ore in più di alcune settimane siano straordinario.", ["40 ore", "multiperiodale", "anno"]],
        ["Durata massima: 48 ore ogni 7 giorni, compreso lo straordinario, come media su 4 mesi, elevabili dai CCNL a 6 o, per ragioni obiettive, tecniche o organizzative, a 12 (art. 4).", ["48 ore", "4 mesi", "12"]],
        ["Riposo giornaliero di 11 ore consecutive ogni 24 (art. 7), da cui una giornata massima di 13 ore; pausa se l'orario supera le 6 ore, di almeno 10 minuti in mancanza di CCNL (art. 8).", ["11 ore", "13 ore", "6 ore", "10 minuti"]],
        ["Riposo settimanale di almeno 24 ore consecutive ogni 7 giorni, di regola la domenica, calcolato come media su 14 giorni (art. 9); è irrinunciabile (art. 36 Cost.).", ["24 ore", "domenica", "14 giorni", "irrinunciabil"]],
        ["Esclusi dalle regole sulla durata i lavoratori il cui orario non è misurabile: dirigenti e personale direttivo, manodopera familiare, lavoratori a domicilio e telelavoro (art. 17, c. 5). Le violazioni su durata massima e riposi hanno sanzioni maggiorate del 20% e raddoppiate in caso di recidiva (L. 145/2018).", ["dirigenti", "20%", "recidiva"]]
      ],
      aggancio: "I CCNL comparativamente più rappresentativi possono adattare media e riposi con compensazioni (artt. 4 e 17): non è una deroga di prossimità. Andare oltre questi spazi richiede l'art. 8 D.L. 138/2011, entro i limiti europei (P1_Cap05). Il consulente registra le ore sul LUL ogni mese.",
      fonti: "Simone, Diritto del lavoro, pp. 181-184 (D.Lgs. 66/2003); P1_Cap05, § 4 e caso pratico."
    },

    "DL-17a": {
      sintesi: "Lo straordinario è il lavoro prestato oltre l'orario normale di 40 ore settimanali (art. 1, c. 2, lett. c, D.Lgs. 66/2003); il supplementare è il lavoro del part-time oltre l'orario concordato ma entro l'orario normale (art. 6 D.Lgs. 81/2015).",
      punti: [
        ["Straordinario: va contenuto (art. 5); lo regolano i CCNL. Senza CCNL serve l'accordo tra le parti e non si superano 250 ore l'anno; è sempre ammesso, salvo diversa disciplina del CCNL, per eccezionali esigenze tecnico-produttive, forza maggiore o pericolo grave, eventi particolari come mostre e fiere.", ["contenuto", "accordo", "250 ore", "forza maggiore"]],
        ["Compenso: maggiorazioni fissate dai CCNL oppure, in alternativa o in aggiunta, riposi compensativi; restano i limiti delle 48 ore medie e delle 11 ore di riposo.", ["maggiorazioni", "riposi compensativi", "48 ore"]],
        ["Lo «straordinario contrattuale» tra l'orario del CCNL (per esempio 36 ore) e le 40 ore legali segue le regole del contratto collettivo.", ["contrattuale", "36 ore"]],
        ["Supplementare nel part-time: se il CCNL non lo disciplina, fino al 25% delle ore settimanali concordate, con maggiorazione del 15%; il lavoratore può rifiutarlo per comprovate esigenze di lavoro, salute, famiglia o formazione. Oltre l'orario normale si torna allo straordinario.", ["25%", "15%", "rifiutar"]],
        ["Fisco 2026: sulle maggiorazioni per notturno, festivo e turni è prevista un'imposta sostitutiva del 15% per i redditi di lavoro dipendente 2025 fino a 40.000 euro (L. 199/2025; fonte secondaria, P2_Mod07).", ["sostitutiva", "15%", "40.000"]]
      ],
      aggancio: "In busta paga lo straordinario si calcola sulla retribuzione oraria con la maggiorazione del CCNL ed entra nell'imponibile fiscale e contributivo del mese. In ispezione il riscontro tra LUL, presenze e buste paga fa emergere lo straordinario non pagato, recuperabile con diffida accertativa.",
      fonti: "Simone, Diritto del lavoro, pp. 184-185 (D.Lgs. 66/2003); D.Lgs. 81/2015, art. 6 (81_2015 in libreria); P2/P2_Mod07."
    },

    "DL-5b": {
      sintesi: "Il congedo di maternità è l'astensione obbligatoria della lavoratrice nei due mesi prima della data presunta del parto e nei tre mesi dopo (art. 16 D.Lgs. 151/2001), con un'indennità INPS dell'80% della retribuzione. Attua la protezione della madre e del bambino voluta dagli artt. 31 e 37 Cost.",
      punti: [
        ["Flessibilità: un mese prima e quattro dopo (art. 20), oppure tutto dopo il parto entro i cinque mesi successivi, con attestazione del medico del SSN e del medico competente che escludano rischi; i giorni non goduti prima di un parto anticipato si aggiungono dopo.", ["un mese prima", "quattro dopo", "dopo il parto", "medico competente"]],
        ["Indennità INPS dell'80%, anticipata dal datore in busta paga e conguagliata con i contributi (art. 22; art. 1 D.L. 663/1979); molti CCNL integrano fino al 100%. Il periodo conta nell'anzianità, anche per tredicesima e ferie.", ["80%", "anticipata", "conguagliata", "anzianita"]],
        ["Interdizione anticipata o prolungata per complicanze o lavori pregiudizievoli (art. 17). Adibire la lavoratrice al lavoro durante il congedo è reato: arresto fino a sei mesi (art. 18).", ["interdizione", "arresto", "sei mesi"]],
        ["Adozione e affidamento: cinque mesi (adozione) o tre mesi (affidamento) dall'ingresso del minore in famiglia (art. 26).", ["adozione", "affidamento", "ingresso"]],
        ["Garanzie: divieto di licenziamento dall'inizio della gravidanza fino a un anno del bambino, a pena di nullità (art. 54); dimissioni e risoluzioni consensuali nei primi tre anni del bambino efficaci solo dopo la convalida dell'ITL (art. 55, c. 4).", ["licenziamento", "nullita", "convalida", "tre anni"]]
      ],
      aggancio: "Nella busta paga il consulente trattiene le giornate, anticipa l'indennità all'80% e l'eventuale integrazione del CCNL e la conguaglia in UniEmens. Nel contratto a termine l'indennità spetta anche se il rapporto scade durante il congedo (Simone p. 208).",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), artt. 31 e 37; P1/P1_Cap09_Genitorialita (D.Lgs. 151/2001, testo consolidato Brocardi al 1/1/2026; circ. INPS 106/2026, msg. INPS 251/2026); Simone, Diritto del lavoro, pp. 118 e 208."
    },

    "DL-6b": {
      sintesi: "L'interdizione anticipata dal lavoro è il provvedimento che estende l'astensione obbligatoria della lavoratrice prima dei due mesi antecedenti il parto, o la prolunga dopo, quando la gravidanza o il lavoro mettono a rischio la salute della madre o del bambino (art. 17 D.Lgs. 151/2001).",
      punti: [
        ["Casi: gravi complicanze della gravidanza o forme morbose che si presume aggravate dalla gravidanza; condizioni di lavoro o ambientali pregiudizievoli; lavori vietati quando la lavoratrice non può essere spostata ad altre mansioni.", ["complicanze", "pregiudizievoli", "spostata"]],
        ["Lavori vietati (art. 7): trasporto e sollevamento pesi, lavori pericolosi, faticosi e insalubri; la lavoratrice va spostata ad altre mansioni, anche inferiori, conservando retribuzione e qualifica. Il divieto vale durante la gravidanza e fino a sette mesi dopo il parto.", ["lavori vietati", "sollevamento", "conservando", "sette mesi"]],
        ["Se lo spostamento è impossibile, l'Ispettorato territoriale del lavoro dispone l'interdizione dal lavoro (art. 17).", ["ispettorato", "impossibile"]],
        ["Durante l'interdizione spetta l'indennità di maternità dell'80%, come nel congedo; il periodo è tutelato dal divieto di licenziamento.", ["80%", "divieto di licenziamento"]],
        ["Chi adibisce la lavoratrice a lavori vietati o durante i periodi di interdizione è punito con l'arresto fino a sei mesi (artt. 7, c. 7, e 18); trattandosi del solo arresto non si applica la prescrizione obbligatoria del D.Lgs. 758/1994.", ["arresto", "prescrizione obbligatoria"]]
      ],
      aggancio: "Il consulente, con il medico competente e la valutazione dei rischi, verifica se la mansione è compatibile; se non lo è e non c'è un'alternativa, prepara l'istanza di interdizione all'ITL.",
      fonti: "P1/P1_Cap09_Genitorialita (D.Lgs. 151/2001, testo consolidato Brocardi al 1/1/2026; circ. INPS 106/2026, msg. INPS 251/2026) (artt. 7, 17, 18); Simone, Diritto del lavoro, pp. 108 e 118-124."
    },

    "DL-7b": {
      sintesi: "Il congedo di paternità obbligatorio spetta al padre lavoratore dipendente per 10 giorni lavorativi (20 in caso di parto plurimo), fruibili anche in modo non continuativo dai due mesi prima ai cinque mesi dopo il parto, con un'indennità INPS del 100% (art. 27-bis D.Lgs. 151/2001, introdotto dal D.Lgs. 105/2022).",
      punti: [
        ["Ratio: la condivisione dei compiti di cura tra i genitori (dir. UE 2019/1158); è un diritto autonomo del padre, distinto dal congedo della madre.", ["condivisione", "2019/1158"]],
        ["Preavviso scritto al datore di almeno cinque giorni; chiedere il rispetto del preavviso non è ostacolo al congedo (nota INL 2414/2022).", ["preavviso", "cinque giorni", "2414/2022"]],
        ["Spetta anche alla madre intenzionale nella coppia di donne iscritte come genitori nei registri dello stato civile (Corte cost. 115/2025).", ["madre intenzionale", "115/2025"]],
        ["Congedo di paternità alternativo (art. 28): per la durata residua del congedo della madre, in caso di morte o grave infermità, abbandono o affidamento esclusivo al padre; indennità all'80%.", ["alternativo", "28", "80%"]],
        ["Sanzioni (art. 31-bis): rifiuto, opposizione od ostacolo sono puniti con la sanzione amministrativa da 516 a 2.582 euro e, se accertati nei due anni precedenti, impediscono la certificazione della parità di genere. Il divieto di licenziamento si estende al padre che fruisce del congedo (art. 54, c. 7).", ["516", "2.582", "parita di genere", "54"]]
      ],
      aggancio: "Il datore non può negarlo per esigenze produttive: è un diritto del lavoratore nei limiti di legge. In busta paga l'indennità al 100% è anticipata dal datore e conguagliata con l'INPS.",
      fonti: "P1/P1_Cap09_Genitorialita (D.Lgs. 151/2001, testo consolidato Brocardi al 1/1/2026; circ. INPS 106/2026, msg. INPS 251/2026) (artt. 27-bis, 28, 29, 31-bis, 54); Simone, Diritto del lavoro, p. 119."
    },

    "DL-12a": {
      sintesi: "L'art. 37 Cost. affida alla legge il limite minimo di età per il lavoro salariato e garantisce ai minori, a parità di lavoro, la parità di retribuzione. La disciplina è la L. 977/1967, adeguata alla dir. 94/33/CE dal D.Lgs. 345/1999: l'età minima coincide con la fine dell'obbligo di istruzione.",
      punti: [
        ["Età minima: 16 anni, con almeno 10 anni di istruzione obbligatoria (art. 1, c. 622, L. 296/2006). Eccezioni: apprendistato di primo livello da 15 anni (14 nello sport dilettantistico) e professionalizzante sportivo da 15.", ["16 anni", "10 anni", "296/2006", "15 anni"]],
        ["Bambini (sotto i 15 anni o ancora soggetti all'obbligo scolastico) e adolescenti (15-18 anni): i bambini possono lavorare solo in attività culturali, artistiche, sportive, pubblicitarie e dello spettacolo, con il consenso dei genitori e l'autorizzazione dell'ITL.", ["bambini", "adolescenti", "spettacolo", "autorizzazione"]],
        ["Lavori vietati agli adolescenti quelli pregiudizievoli per lo sviluppo (art. 6 e Allegato I), ammessi solo per formazione e sotto sorveglianza, con autorizzazione dell'ITL; valutazione dei rischi specifica per l'età e visite mediche preassuntive e periodiche.", ["lavori vietati", "formazione", "valutazione dei rischi", "visite"]],
        ["Orario: massimo 7 ore al giorno e 35 a settimana per i bambini, 8 e 40 per gli adolescenti; lavoro notturno vietato; riposo settimanale di almeno 2 giorni, possibilmente consecutivi e con la domenica.", ["7 ore", "8", "notturno", "2 giorni"]],
        ["Il contratto con un minore sotto l'età minima è nullo per illiceità dell'oggetto, ma la retribuzione per il lavoro svolto è dovuta (art. 2126, c. 2, c.c.).", ["nullo", "2126"]]
      ],
      aggancio: "Per il consulente: verificare età e assolvimento dell'obbligo prima dell'assunzione e chiedere la visita preassuntiva. L'impiego di minori in età non lavorativa aggrava del 20% la maxisanzione per lavoro nero e non è diffidabile (Simone LS pp. 439-440).",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), art. 37; Simone, Diritto del lavoro, pp. 34 e 116-118; Simone, Legislazione sociale, pp. 439-440."
    },

    "DL-10b": {
      sintesi: "La L. 68/1999 ha sostituito il vecchio collocamento obbligatorio con il collocamento mirato: valorizzare le capacità residue delle persone con disabilità e inserirle nel posto più adatto, con un obbligo di assunzione per i datori da 15 dipendenti in su.",
      punti: [
        ["Beneficiari (art. 1): invalidi civili con riduzione della capacità lavorativa oltre il 45%; invalidi del lavoro oltre il 33%; non vedenti e sordi; invalidi di guerra e per servizio; orfani per crimini domestici. Quote a parte per orfani e coniugi superstiti di vittime del lavoro, del terrorismo e della criminalità (art. 18).", ["45%", "33%", "non vedenti", "18"]],
        ["Quota di riserva (art. 3): un lavoratore tra 15 e 35 dipendenti; due tra 36 e 50; il 7% oltre 50. Nel computo entrano i subordinati, compresi i contratti a termine oltre 6 mesi (art. 4).", ["quota di riserva", "15", "7%", "6 mesi"]],
        ["Adempimenti: richiesta di assunzione entro 60 giorni dall'insorgere dell'obbligo, con richiesta nominativa o convenzione (art. 7); prospetto informativo telematico entro il 31 gennaio se nell'anno è cambiata la situazione occupazionale (art. 9, c. 6).", ["60 giorni", "nominativa", "prospetto informativo", "31 gennaio"]],
        ["Flessibilità: esonero parziale per le attività che non consentono l'impiego (D.M. 7/7/2000 n. 357), sospensione per temporanea difficoltà produttiva (art. 3, c. 5), compensazioni territoriali; convenzioni di inserimento anche con cooperative sociali (artt. 11-12).", ["esonero", "sospension", "convenzion"]],
        ["Senza assunzione gli uffici avviano d'ufficio secondo la graduatoria (avviamento numerico); il rifiuto di assumere è verbalizzato dall'ITL; le sanzioni sono amministrative, mai penali.", ["numerico", "itl", "amministrative"]]
      ],
      aggancio: "Il D.Lgs. 62/2024 sostituisce i termini «handicap» e «disabile» con «persona con disabilità» e introduce un nuovo accertamento, a regime dal 2027. Il consulente monitora la base di computo, invia il prospetto informativo e valuta convenzioni ed esoneri prima che scattino le sanzioni.",
      fonti: "Simone, Diritto del lavoro, pp. 70-72 e 81-82 (L. 68/1999; D.Lgs. 62/2024). Esoneri parziali: D.M. 7/7/2000 n. 357 (regolamento attuativo dell'art. 5, c. 4, L. 68/1999), letto su Normattiva il 7/11/2026; il «n. 35» del testo OCR del Simone è un errore."
    },

    "DL-11b": {
      sintesi: "Il caporalato è il reclutamento e l'impiego illecito di lavoratori sottoposti a sfruttamento, approfittando del loro stato di bisogno. Lo punisce l'art. 603-bis c.p. (intermediazione illecita e sfruttamento del lavoro), che colpisce sia il caporale sia il datore che utilizza la manodopera.",
      punti: [
        ["Condotte: reclutare manodopera per destinarla a terzi in condizioni di sfruttamento, approfittando dello stato di bisogno; utilizzare, assumere o impiegare manodopera, anche tramite intermediari, sottoponendola a sfruttamento. Pena: reclusione da 1 a 6 anni e multa da 500 a 1.000 euro per lavoratore; con violenza o minaccia da 5 a 8 anni e multa da 1.000 a 2.000 euro.", ["reclut", "stato di bisogno", "1 a 6 anni", "violenza"]],
        ["Indici di sfruttamento: retribuzioni reiteratamente difformi dai CCNL o sproporzionate; violazioni reiterate di orario, riposi, ferie; violazioni delle norme di sicurezza; condizioni di lavoro, sorveglianza o alloggio degradanti.", ["indici", "ccnl", "sicurezza", "degradanti"]],
        ["Aggravanti, con pena aumentata da un terzo alla metà: più di 3 lavoratori reclutati; minori in età non lavorativa; esposizione a grave pericolo.", ["aggravant", "3 lavoratori", "minori"]],
        ["Misure sull'impresa: sequestro o, se l'interruzione danneggia occupazione e valore dell'azienda, controllo giudiziario; indennizzo statale alle vittime.", ["sequestro", "controllo giudiziario"]],
        ["Tutela degli stranieri vittime: permesso di soggiorno «casi speciali» di un anno, rinnovabile, che consente di lavorare e può convertirsi in permesso per lavoro (art. 18-ter D.Lgs. 286/1998, introdotto dal D.L. 145/2024).", ["casi speciali", "18-ter", "145/2024"]]
      ],
      aggancio: "Diverso dall'interposizione illecita (appalto o distacco non genuini, art. 18 D.Lgs. 276/2003): il caporalato richiede sfruttamento e approfittamento del bisogno. In ispezione gli indici dell'art. 603-bis coincidono con violazioni che il consulente previene ogni giorno: retribuzione sotto il CCNL, orari, sicurezza.",
      fonti: "Simone, Diritto del lavoro, pp. 62-64 (art. 603-bis c.p.; D.L. 145/2024)."
    },

    "DL-20b": {
      sintesi: "Il lavoro sommerso comprende il lavoro «nero», cioè il rapporto del tutto sconosciuto alle autorità perché manca la comunicazione preventiva di assunzione, e il lavoro «grigio», formalmente dichiarato ma irregolare nello svolgimento. Il lavoro nero è punito con la maxisanzione dell'art. 3 D.L. 12/2002.",
      punti: [
        ["Lavoro grigio: falsa qualificazione del rapporto (false collaborazioni), appalti e distacchi non genuini, orario dichiarato inferiore a quello reale (abuso di part-time e intermittente).", ["grigio", "qualificazione", "part-time"]],
        ["Maxisanzione per ciascun lavoratore in nero, a fasce di durata: da 1.950 a 11.700 euro fino a 30 giorni di lavoro effettivo; da 3.900 a 23.400 tra 31 e 60 giorni; da 7.800 a 46.800 oltre 60 giorni. Importi raddoppiati in caso di recidiva nel triennio e aumentati del 20% per stranieri senza permesso, minori in età non lavorativa, beneficiari dell'Assegno di inclusione o del Supporto per la formazione e il lavoro.", ["1.950", "46.800", "recidiva", "20%"]],
        ["Non si applica se dagli adempimenti contributivi già fatti risulta la volontà di non occultare il rapporto, anche se qualificato in modo diverso, o se il datore ha regolarizzato spontaneamente per l'intera durata.", ["non occultare", "spontaneamente"]],
        ["Diffida obbligatoria: il datore regolarizza assumendo il lavoratore con contratto ammesso e mantenendolo per almeno 90 giorni, pagando il minimo; esclusa per stranieri irregolari e minori in età non lavorativa.", ["diffida", "90 giorni", "stranieri", "minori"]],
        ["Strumenti di contrasto: sospensione dell'attività con almeno il 10% di irregolari tra i presenti (art. 14 D.Lgs. 81/2008); Portale nazionale del sommerso, che raccoglie gli esiti delle ispezioni di INL, INPS, INAIL, Carabinieri e Guardia di finanza; decurtazione della patente a crediti nei cantieri.", ["sospensione", "10%", "portale nazionale del sommerso", "patente"]]
      ],
      aggancio: "Per il consulente la prevenzione è la comunicazione obbligatoria (UniLav) inviata entro il giorno precedente l'inizio del rapporto. Il recupero dei contributi evasi e le sanzioni civili si aggiungono alla maxisanzione.",
      fonti: "Simone, Legislazione sociale, pp. 437-440 (art. 3 D.L. 12/2002; L. 145/2018); P1/P1_Mappe_Poteri_ispettivi (diffida, sospensione); P1_Cap04 (patente a crediti)."
    },

    "DL-22a": {
      sintesi: "Il provvedimento di sospensione dell'attività d'impresa (art. 14 D.Lgs. 81/2008) è un potere vincolato dell'Ispettorato, esercitabile anche dalle ASL per la sicurezza: si adotta quando almeno il 10% dei lavoratori presenti all'accesso è irregolare o quando si riscontra una grave violazione di sicurezza dell'Allegato I.",
      punti: [
        ["Lavoro irregolare: lavoratori senza comunicazione preventiva di assunzione o autonomi occasionali inquadrati senza le condizioni di legge; la regolarizzazione durante l'ispezione non conta. Esclusa se l'irregolare è l'unico occupato, che va però allontanato.", ["comunicazione preventiva", "regolarizzazione", "unico occupato"]],
        ["Sicurezza: basta una violazione dell'Allegato I, in qualunque settore (per esempio mancanza del DVR, del piano di emergenza, della formazione, dei DPI anticaduta).", ["allegato i", "dvr", "formazione"]],
        ["Effetti: stop della parte di attività interessata dalle 12 del giorno lavorativo successivo, o subito se c'è pericolo; restano dovute retribuzioni e contributi; divieto di contrattare con la pubblica amministrazione.", ["12 del giorno", "retribuzion", "pubblica amministrazione"]],
        ["Revoca: regolarizzazione più somma aggiuntiva (lavoro irregolare 2.500 euro fino a cinque irregolari, 5.000 oltre; per la sicurezza importi per violazione), raddoppiata se c'è stata un'altra sospensione nei cinque anni; si può pagare subito il 20% e il resto entro sei mesi, maggiorato del 5%.", ["revoca", "2.500", "5.000", "20%"]],
        ["Difesa: per il lavoro irregolare ricorso all'Ispettorato interregionale entro 30 giorni (se tace 30 giorni, la sospensione perde efficacia); nessun ricorso amministrativo per la sicurezza. L'inottemperanza è reato.", ["interregionale", "30 giorni", "inottemperanza"]]
      ],
      aggancio: "La sospensione si somma alla maxisanzione per ciascun lavoratore in nero. Il consulente, chiamato in ispezione, regolarizza subito le posizioni per arrivare alla revoca e valuta il ricorso solo se il calcolo del 10% è sbagliato.",
      fonti: "Art. 14 D.Lgs. 81/2008 (81_2008_ESTRATTO_TitoloI_XII); P1/P1_Mappe_Poteri_ispettivi, Focus 3 (circ. INL 3/2021; nota INL 162/2023)."
    },

    "DL-22b": {
      sintesi: "La conciliazione monocratica (art. 11 D.Lgs. 124/2004) è un tentativo di accordo davanti a un solo funzionario dell'Ispettorato territoriale del lavoro, per le questioni di natura patrimoniale tra lavoratore e datore: serve a prevenire il contenzioso e a chiudere l'ispezione con il pagamento.",
      punti: [
        ["Due forme: preventiva, su richiesta di intervento del lavoratore o di chi ne ha il mandato; contestuale, avviata dall'ispettore durante la vigilanza con il consenso delle parti. Le parti possono farsi assistere da sindacati o professionisti.", ["preventiva", "contestuale", "consenso"]],
        ["Non si usa se emergono indizi di reato, se l'ispettore ha già accertato le violazioni o per i rapporti certificati (per questi c'è il tentativo davanti alla commissione di certificazione).", ["reato", "accertato", "certificati"]],
        ["L'accordo deve riconoscere un periodo di lavoro effettivo: non sono ammessi accordi solo transattivi (circ. Min. Lav. 36/2009); il funzionario può rifiutare la firma se il consenso del lavoratore non è libero.", ["periodo di lavoro", "transattivi", "rifiutare"]],
        ["Il verbale non è impugnabile (art. 2113 c.c.) e diventa titolo esecutivo con decreto del giudice (art. 11, c. 3-bis); i contributi si calcolano sulla somma conciliata, non sotto i minimali.", ["2113", "titolo esecutivo", "minimali"]],
        ["Il pagamento delle somme e il versamento di contributi e premi estinguono il procedimento ispettivo senza sanzioni; se l'accordo non arriva, l'ispezione prosegue.", ["estinguono", "sanzioni", "prosegue"]]
      ],
      aggancio: "È l'occasione tipica in cui il consulente assiste il datore all'ITL: valuta se conciliare conviene rispetto al rischio di diffida accertativa e sanzioni, e cura subito il versamento dei contributi sulla somma conciliata.",
      fonti: "Simone, Legislazione sociale, p. 433 (art. 11 D.Lgs. 124/2004; circ. Min. Lav. 24/2004 e 36/2009); 124_2004 in libreria; P1/P1_Mappe_Poteri_ispettivi."
    },

    "DL-23a": {
      sintesi: "Dal 1° ottobre 2024 le imprese e i lavoratori autonomi che operano nei cantieri temporanei o mobili devono avere la patente a crediti, rilasciata in formato digitale dall'INL (art. 27 D.Lgs. 81/2008; D.M. 132/2024).",
      punti: [
        ["Requisiti autocertificati: iscrizione alla Camera di commercio; adempimento degli obblighi formativi; DURC valido; DVR e nomina del RSPP nei casi previsti; regolarità fiscale nei casi previsti. Si chiede sul portale INL, anche tramite un delegato.", ["camera di commercio", "formativi", "durc", "dvr"]],
        ["Punteggio: 30 crediti iniziali, fino a 100 con i crediti aggiuntivi (storicità dell'impresa, assenza di decurtazioni, altri criteri del D.M.). Si lavora solo con almeno 15 crediti; sotto, si può completare un appalto già eseguito oltre il 30%.", ["30 crediti", "100", "15 crediti", "30%"]],
        ["Decurtazioni per i provvedimenti definitivi elencati nell'Allegato I-bis; per il lavoro nero, dal 2026, 5 crediti per ciascun lavoratore già alla notifica del verbale (D.L. 159/2025, come riportato nel P1_Cap04).", ["allegato i-bis", "5 crediti", "lavoro nero"]],
        ["Sospensione cautelare fino a 12 mesi in caso di infortunio mortale o con inabilità permanente imputabile almeno a colpa grave; revoca per dichiarazioni non veritiere, con nuova domanda dopo 12 mesi.", ["sospensione", "12 mesi", "colpa grave", "revoca"]],
        ["Senza patente o con meno di 15 crediti: sanzione pari al 10% del valore dei lavori, non inferiore a 12.000 euro, senza diffida, ed esclusione dai lavori pubblici per sei mesi (c. 11). Esenti le imprese con attestazione SOA dalla III classifica e chi fa solo forniture o prestazioni intellettuali.", ["10%", "12.000", "soa", "intellettual"]]
      ],
      aggancio: "Il consulente può presentare la domanda su delega e tenere sotto controllo i requisiti (formazione, DURC, DVR) da cui dipendono i crediti. In ispezione la patente si consulta sul Portale nazionale del sommerso.",
      fonti: "Art. 27 D.Lgs. 81/2008 (81_2008_ESTRATTO_TitoloI_XII); Simone, Diritto del lavoro, pp. 162-164; P1_Cap04, § 3.7."
    },

    "DL-13b": {
      sintesi: "Le norme del lavoro sono inderogabili e i diritti che ne derivano indisponibili: per questo l'art. 2113 c.c. rende invalide le rinunzie e le transazioni del lavoratore su diritti nati da norme inderogabili di legge o di contratto collettivo, salvo che siano fatte in una sede protetta.",
      punti: [
        ["Rinunzia: atto unilaterale con cui il lavoratore dismette un diritto; transazione (art. 1965 c.c.): contratto con cui le parti, con reciproche concessioni, chiudono o prevengono una lite.", ["rinunzia", "transazione", "1965", "reciproche concessioni"]],
        ["Impugnazione: con qualsiasi atto scritto, anche stragiudiziale, entro 6 mesi dalla cessazione del rapporto o dalla rinunzia o transazione, se successiva. Termine di decadenza.", ["atto scritto", "6 mesi", "decadenza"]],
        ["Sedi protette, dove l'atto non è impugnabile (art. 2113, c. 4): commissione di conciliazione dell'ITL (art. 410 c.p.c.); sede sindacale (art. 412-ter); collegio di conciliazione e arbitrato (art. 412-quater); giudice (art. 420); commissioni di certificazione (art. 82 D.Lgs. 276/2003).", ["sedi protette", "410", "sindacale", "certificazione"]],
        ["Sono inoppugnabili anche l'offerta di conciliazione delle tutele crescenti (art. 6 D.Lgs. 23/2015), il verbale di conciliazione monocratica e l'accordo di negoziazione assistita, in cui il lavoratore può farsi assistere anche da un consulente del lavoro.", ["tutele crescenti", "monocratica", "negoziazione assistita"]],
        ["Diverse le quietanze a saldo: dichiarazioni generiche di non avere più nulla a pretendere, che valgono come semplice dichiarazione di scienza e non come rinunzia: i crediti si possono far valere nel termine di prescrizione, senza la decadenza dell'art. 2113.", ["quietanze a saldo", "nulla a pretendere", "dichiarazione di scienza"]]
      ],
      aggancio: "Il consulente assiste le parti nelle sedi protette nel rispetto dell'art. 40 del Codice deontologico: interesse esclusivo dell'assistito, nessun atto nullo o fraudolento, astensione in caso di conflitto. Un accordo firmato in azienda, senza sede protetta, resta impugnabile per sei mesi.",
      fonti: "Art. 2113 c.c. (NORMA_Codice_civile_lavoro); Simone, Legislazione sociale, pp. 405-407 e 418-420."
    },

    "DL-21b": {
      sintesi: "Gli accordi conciliativi in sede protetta sono le conciliazioni concluse davanti a soggetti terzi che garantiscono la genuinità della volontà del lavoratore: per questo le rinunzie e le transazioni che contengono non sono impugnabili (art. 2113, c. 4, c.c.).",
      punti: [
        ["Commissione di conciliazione dell'ITL (art. 410 c.p.c.): richiesta all'ITL e alla controparte; se questa aderisce, memoria entro 20 giorni e convocazione; se la conciliazione fallisce, la commissione formula una proposta di cui il giudice terrà conto. La richiesta interrompe la prescrizione e sospende le decadenze fino a 20 giorni dopo la fine del tentativo.", ["410", "20 giorni", "proposta", "prescrizione"]],
        ["Sede sindacale (art. 412-ter c.p.c.): procedure dei contratti collettivi; il verbale si deposita all'ITL e in tribunale per l'esecutività.", ["sindacale", "412-ter", "esecutiv"]],
        ["Commissioni di certificazione, compresa quella del Consiglio provinciale dei consulenti del lavoro; per i contratti certificati il tentativo davanti alla commissione che ha certificato è obbligatorio prima del giudizio.", ["certificazione", "consulenti del lavoro", "obbligatorio"]],
        ["Offerta di conciliazione nelle tutele crescenti (art. 6 D.Lgs. 23/2015): entro il termine per impugnare il licenziamento, una mensilità per anno di servizio, da 3 a 27, con assegno circolare in sede protetta, esente da IRPEF e contributi; l'accettazione estingue il rapporto e rinuncia all'impugnazione. Per i datori sotto soglia l'importo è dimezzato.", ["offerta", "3 a 27", "esente", "dimezzat"]],
        ["Altri strumenti: arbitrato presso la commissione dell'ITL o il collegio dell'art. 412-quater, con lodo vincolante come un contratto; clausola compromissoria solo se prevista dai CCNL e certificata, mai per la risoluzione del rapporto; negoziazione assistita da avvocati, con possibile assistenza del consulente del lavoro.", ["arbitrato", "412-quater", "clausola compromissoria", "negoziazione assistita"]]
      ],
      aggancio: "Dopo Corte cost. 118/2025 il tetto di 6 mensilità per i piccoli datori è caduto: per l'offerta resta il dimezzamento, ma la misura esatta è una lettura del testo (P1_Cap08). Il consulente assiste in sede protetta secondo l'art. 40 del Codice deontologico.",
      fonti: "Simone, Legislazione sociale, pp. 417-420 (artt. 410-412-quater c.p.c.; art. 6 D.Lgs. 23/2015; D.L. 132/2014); art. 2113 c.c. (NORMA_Codice_civile_lavoro); P1_Cap08, scheda 1."
    },

    "DL-15b": {
      sintesi: "Il mobbing è una nozione di dottrina e giurisprudenza, senza una norma specifica: una serie di condotte persecutorie, sistematiche e prolungate, del datore, dei superiori o dei colleghi, che lede la salute, la personalità o la dignità del lavoratore, spesso per estrometterlo dall'azienda.",
      punti: [
        ["Elementi per la Cassazione: pluralità di comportamenti persecutori, anche leciti se presi da soli, ripetuti nel tempo; evento lesivo della salute, della personalità o della dignità; nesso causale; intento persecutorio unificante, provabile anche con presunzioni (Cass. 30583/2021, 33639/2022).", ["persecutori", "evento lesivo", "nesso", "intento persecutorio"]],
        ["Tutela civile: responsabilità contrattuale del datore per violazione dell'art. 2087 c.c., che gli impone di tutelare integrità fisica e personalità morale anche impedendo le vessazioni dei colleghi; in aggiunta, responsabilità extracontrattuale (art. 2043 c.c.).", ["2087", "contrattuale", "2043"]],
        ["Anche se il mobbing non è provato, il giudice deve verificare se il datore ha violato l'art. 2087 non adottando le misure necessarie (Cass. 3822/2024); per la Cassazione mobbing e straining hanno valore solo sociologico: conta l'illecito dell'art. 2087 (Cass. 31912/2024).", ["3822/2024", "31912/2024", "straining"]],
        ["Straining: forma attenuata, anche una sola azione con effetti duraturi o un ambiente di lavoro stressogeno mantenuto colposamente dal datore.", ["stressogen", "una sola azione"]],
        ["Nessun reato specifico: possono rilevare maltrattamenti (art. 572 c.p.) nei rapporti di tipo para-familiare, lesioni (artt. 582-583), violenza sessuale, atti persecutori (art. 612-bis, stalking occupazionale).", ["572", "lesioni", "612-bis"]]
      ],
      aggancio: "Il mobbing può giustificare le dimissioni per giusta causa, con NASpI (circ. INPS 163/2003, riportata da Simone pp. 232 e 235). Per il consulente: la valutazione del rischio stress lavoro-correlato nel DVR e procedure contro molestie e violenze (art. 15 D.Lgs. 81/2008) sono la prevenzione.",
      fonti: "Simone, Diritto del lavoro, pp. 157, 175-178 e 232; art. 2087 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "DL-17b": {
      sintesi: "L'art. 15 D.Lgs. 81/2008 elenca le misure generali di tutela della salute e della sicurezza: è il programma della prevenzione, che parte dalla valutazione dei rischi e dà priorità all'eliminazione del rischio alla fonte. Si collega all'obbligo generale di sicurezza dell'art. 2087 c.c.",
      punti: [
        ["Valutazione di tutti i rischi e programmazione della prevenzione, integrando condizioni tecniche, organizzazione e ambiente di lavoro.", ["valutazione", "programmazione"]],
        ["Eliminazione dei rischi o, se impossibile, riduzione al minimo secondo il progresso tecnico; riduzione alla fonte; sostituzione di ciò che è pericoloso; principi ergonomici; minimo numero di esposti.", ["eliminazione", "fonte", "sostituzione", "ergonomic"]],
        ["Priorità della protezione collettiva su quella individuale; controllo sanitario e allontanamento del lavoratore dall'esposizione per motivi sanitari, con altra mansione se possibile.", ["collettiva", "individuale", "controllo sanitario"]],
        ["Informazione, formazione e istruzioni per lavoratori, dirigenti, preposti e RLS; partecipazione e consultazione dei lavoratori e dei loro rappresentanti.", ["formazione", "preposti", "rls", "consultazione"]],
        ["Misure di emergenza (primo soccorso, antincendio, evacuazione), segnaletica, manutenzione regolare di ambienti e impianti, prevenzione di condotte violente o moleste.", ["emergenza", "manutenzione", "moleste"]]
      ],
      aggancio: "L'art. 2087 c.c. resta la norma di chiusura: impone la massima sicurezza tecnicamente possibile secondo particolarità del lavoro, esperienza e tecnica. Il T.U. si applica a tutti i settori e a tutti i lavoratori, anche autonomi e co.co.co. con regole proprie (artt. 3 e 21).",
      fonti: "Art. 15 D.Lgs. 81/2008 (81_2008_ESTRATTO_TitoloI_XII); Simone, Diritto del lavoro, pp. 157-159; art. 2087 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "DL-23b": {
      sintesi: "La valutazione dei rischi è l'adempimento centrale della sicurezza: il datore deve valutare tutti i rischi per la salute e la sicurezza dei lavoratori e riportarne l'esito nel documento di valutazione dei rischi, il DVR (artt. 17 e 28 D.Lgs. 81/2008). È un obbligo che il datore non può delegare.",
      punti: [
        ["Oggetto (art. 28, c. 1): tutti i rischi, compresi quelli di gruppi particolari: lavoratrici in gravidanza, differenze di genere, età, provenienza da altri Paesi, tipologia contrattuale; stress lavoro-correlato.", ["tutti i rischi", "gravidanza", "stress lavoro-correlato"]],
        ["Chi: il datore, in collaborazione con il RSPP e con il medico competente quando c'è sorveglianza sanitaria, previa consultazione del RLS (art. 29); obbligo non delegabile (art. 17).", ["rspp", "medico competente", "rls", "non delegabile"]],
        ["Contenuto del DVR (art. 28, c. 2): relazione con i criteri seguiti; misure di prevenzione e DPI; programma di miglioramento; procedure e ruoli; nomi di RSPP, RLS e medico competente; mansioni a rischio specifico.", ["dvr", "dpi", "programma", "mansioni"]],
        ["Forma: data certa, anche informatica; conservazione nell'unità produttiva; aggiornamento entro 30 giorni dalle modifiche che lo richiedono (per esempio nuovi macchinari o nuove tecniche di lavoro).", ["data certa", "30 giorni", "aggiornamento"]],
        ["Conseguenze: senza DVR è vietato ricorrere a contratti a termine, somministrazione e intermittente; la mancanza del DVR è causa di sospensione dell'attività (Allegato I) ed è una contravvenzione, estinguibile con prescrizione e pagamento di un quarto del massimo dell'ammenda.", ["contratti a termine", "sospensione", "contravvenzione", "un quarto"]]
      ],
      aggancio: "Negli appalti interni il committente redige anche il DUVRI per i rischi da interferenza (art. 26). Per il consulente la verifica del DVR viene prima di ogni assunzione a termine o intermittente, perché la sua mancanza converte il contratto.",
      fonti: "Artt. 17, 26, 28, 29 D.Lgs. 81/2008 (81_2008_ESTRATTO_TitoloI_XII); Simone, Diritto del lavoro, pp. 160-162, 205 e 221; P1/P1_Mappe_Poteri_ispettivi (sospensione e prescrizione)."
    },

    "DL-X3": {
      sintesi: "Il D.L. 30/4/2026 n. 62, convertito dalla L. 25/6/2026 n. 112, non introduce un salario minimo legale: per il settore privato fa della contrattazione collettiva comparativamente più rappresentativa la misura della retribuzione giusta dell'art. 36 Cost., attraverso il trattamento economico complessivo (TEC) del CCNL leader (art. 7).",
      punti: [
        ["Art. 7, c. 1-3: riferimento al TEC dei CCNL stipulati dalle organizzazioni comparativamente più rappresentative, per settore, attività prevalente, dimensione e natura del datore; il TEC dei CCNL diversi «non può essere inferiore». Nei settori senza contratto vale il CCNL leader più connesso (c. 4).", ["tec", "comparativamente", "non puo essere inferiore", "connesso"]],
        ["Art. 7, c. 4-bis (aggiunto in conversione): nel TEC entrano le voci fisse e continuative, dirette, indirette e differite, le mensilità aggiuntive, le indennità fisse e continuative, il welfare per la generalità dei dipendenti; restano fuori gli elementi discrezionali e variabili individuali.", ["4-bis", "fisse e continuative", "welfare", "variabili"]],
        ["Art. 7, c. 5: i benefici previsti dal decreto spettano solo se il trattamento individuale non è inferiore al TEC; c. 6: annunci sul SIISL con codice del CCNL e retribuzione.", ["benefici", "siisl"]],
        ["Art. 10: se il CCNL non è rinnovato entro 9 mesi dalla scadenza, anticipazione del 50% dell'IPCA-NEI; per i CCNL già scaduti la regola vale dal 1/1/2027. Art. 11: codice alfanumerico del CCNL nell'informativa (lett. q-bis D.Lgs. 152/1997) e nel prospetto paga.", ["9 mesi", "ipca", "1/1/2027", "codice"]],
        ["Nodi aperti: la norma richiama la proporzionalità ma non la sufficienza, che il giudice continua a controllare anche sul CCNL leader (Cass. 27711/2023); il c. 3 si avvicina all'efficacia generale vietata dall'art. 39 Cost.; confronto globale o voce per voce tra TEC e trattamento individuale.", ["sufficienza", "27711/2023", "39 cost", "confronto"]]
      ],
      aggancio: "È il tema del Presidente. In ispezione le differenze rispetto al TEC si recuperano con la diffida accertativa (pochi lavoratori) o con la disposizione (molti), sulla linea di Cons. Stato 10382/2025 e 4969/2026 riportata da Rausei. Il consulente mappa le voci retributive del cliente rispetto al TEC del CCNL leader.",
      fonti: "P1/P1_Mappe_DL62_DLgs96 (testi 62_2026 e 96_2026 in libreria, vigenti al 24/9/2026); P1_Cap01_DL62_2026; P1/P1_Mappe_Poteri_ispettivi; Rausei, lezione 19/10/2026 (dottrina)."
    },

    "DL-X4": {
      sintesi: "Il D.Lgs. 7/5/2026 n. 96, in vigore dal 7/6/2026, attua la dir. (UE) 2023/970 sulla trasparenza retributiva: rende verificabile il principio della parità di retribuzione tra uomini e donne per lo stesso lavoro o per un lavoro di pari valore (art. 37 Cost.; art. 157 TFUE). Si applica al lavoro pubblico e privato.",
      punti: [
        ["Definizioni e pari valore (artt. 3-4): retribuzione in senso ampio, anche variabile e in natura, e livello retributivo fisso e continuativo; il CCNL leader fa presumere, ma solo in modo relativo, la conformità; criteri: competenze, responsabilità, condizioni di lavoro.", ["pari valore", "presumere", "ccnl leader", "competenze"]],
        ["Prima dell'assunzione (art. 5): retribuzione iniziale o fascia e CCNL negli avvisi e nei bandi; vietato chiedere al candidato la retribuzione pregressa; linguaggio neutro.", ["avvisi", "fascia", "retribuzione pregressa"]],
        ["Durante il rapporto (artt. 6-7): criteri retributivi accessibili, di regola con l'informativa del D.Lgs. 152/1997; sotto i 50 dipendenti nessun obbligo sui criteri di progressione; diritto del lavoratore a conoscere i livelli medi per sesso della propria categoria, con risposta scritta entro 2 mesi; nulle le clausole di riservatezza sulla retribuzione.", ["criteri", "50 dipendenti", "2 mesi", "riservatezza"]],
        ["Dati sul divario (art. 9): da 100 dipendenti; entro il 7/6/2027 per chi ne ha almeno 150, entro il 7/6/2031 tra 100 e 149. Valutazione congiunta con i rappresentanti se il divario del livello retributivo medio è almeno del 5%, non giustificato e non corretto entro 6 mesi (art. 10).", ["100", "7/6/2027", "5%", "valutazione congiunta"]],
        ["Tutele (artt. 12-13): tutela giudiziaria del Codice delle pari opportunità con onere della prova attenuato (art. 40 D.Lgs. 198/2006), divieto di ritorsioni, revoca dei benefici; la sanzione dell'art. 41, c. 2, D.Lgs. 198/2006 è oggi amministrativa da 5.000 a 10.000 euro, non più l'ammenda riportata dal codice.", ["onere della prova", "ritorsion", "5.000", "10.000"]]
      ],
      aggancio: "Ponte con il D.L. 62: entrambi usano il CCNL leader come misura della retribuzione corretta (parametro nel 62, presunzione relativa nel 96). Il consulente aggiorna annunci e informative, mappa i livelli per sesso e prepara i dati dove scatta la soglia.",
      fonti: "P1/P1_Mappe_DL62_DLgs96 (testi 62_2026 e 96_2026 in libreria, vigenti al 24/9/2026); P1_Cap02_DLgs96_2026."
    },

    "DL-X7": {
      sintesi: "La diffida accertativa (art. 12 D.Lgs. 124/2004) è il provvedimento con cui l'ispettore, quando nella vigilanza emergono inosservanze della disciplina contrattuale da cui derivano crediti patrimoniali dei lavoratori, diffida il datore a pagare gli importi accertati. Se il datore non concilia e non ricorre, la diffida diventa titolo esecutivo a favore del lavoratore.",
      punti: [
        ["Oggetto (c. 1): crediti patrimoniali nati dall'inosservanza della disciplina contrattuale (differenze retributive, straordinari, mensilità aggiuntive, TFR); per la prassi devono essere certi, liquidi ed esigibili. Per la Cassazione anche da contratto individuale (Cass. 20830/2025, riportata da Rausei).", ["crediti patrimoniali", "contrattuale", "certi", "liquidi", "esigibili"]],
        ["Destinatari: il datore di lavoro e, dal D.L. 76/2020, anche chi utilizza le prestazioni, solidalmente responsabile dei crediti accertati (committente negli appalti, utilizzatore nella somministrazione).", ["datore", "utilizza", "solidal", "76/2020"]],
        ["Entro 30 giorni dalla notifica, in alternativa (c. 2): tentativo di conciliazione presso l'Ispettorato, e con l'accordo a verbale la diffida perde efficacia e il verbale non è impugnabile ex art. 2113 c.c.; oppure ricorso al direttore dell'ufficio che l'ha adottata, notificato anche al lavoratore, che sospende l'esecutività ed è deciso entro 60 giorni (per la prassi, senza silenzio-rigetto: circ. INL 6/2020).", ["30 giorni", "conciliazione", "ricorso", "direttore", "sospende", "60 giorni"]],
        ["Titolo esecutivo (c. 3): se i 30 giorni passano senza iniziative, se la conciliazione fallisce o se il ricorso è respinto. Dal D.L. 76/2020 non serve più la validazione del direttore (c. 4 abrogato): il lavoratore può procedere direttamente all'esecuzione forzata.", ["titolo esecutivo", "validazione", "esecuzione"]],
        ["Limiti: il titolo esecutivo non passa in giudicato, quindi il datore può contestare il credito in giudizio, con l'opposizione all'esecuzione davanti al giudice del lavoro verso il lavoratore creditore (Cass. 20826/2025, riportata da Rausei). Per la prassi è lo strumento privilegiato quando i lavoratori sono pochi; se sono molti si usa la disposizione.", ["giudicato", "opposizione", "pochi", "disposizione"]]
      ],
      aggancio: "Collegamento con il D.L. 62/2026: la differenza tra quanto pagato e il TEC del CCNL leader (art. 7) è il tipico credito da diffida accertativa. Il consulente ricontrolla i conteggi dell'ispettore, sceglie entro 30 giorni tra conciliazione e ricorso e cura la regolarizzazione contributiva delle somme. Non confonderla con la diffida precettiva dell'art. 13 (illeciti amministrativi sanabili) né con la diffida amministrativa del D.Lgs. 103/2024.",
      fonti: "Art. 12 D.Lgs. 124/2004 (124_2004.pdf in libreria, vigente al 27/9/2026: testo riletto); P1/P1_Mappe_Poteri_ispettivi, Focus 2 e tabella dei ricorsi (prassi INL e sentenze riportate da Rausei al convegno di Fermo del 18/9/2026, testo delle sentenze non letto)."
    },

    "DL-X8": {
      sintesi: "La disposizione (art. 14 D.Lgs. 124/2004, riscritto dall'art. 12-bis D.L. 76/2020) è il provvedimento immediatamente esecutivo con cui l'ispettore dell'INL ordina al datore di rimuovere irregolarità in materia di lavoro e legislazione sociale che non sono già punite con sanzioni penali o amministrative. È un potere discrezionale («può adottare») che rende effettive le norme prive di sanzione.",
      punti: [
        ["Presupposto (c. 1): irregolarità non già soggette a sanzioni penali o amministrative. Per la prassi riguarda le norme di legge senza sanzione e le norme del CCNL applicato anche di fatto, non gli obblighi di fonte solo individuale (circ. INL 5/2020).", ["non gia soggette", "sanzioni", "ccnl", "di fatto", "discrezional"]],
        ["Esempi della prassi (nota INL 4539/2020): part-time senza collocazione oraria; diritto di precedenza; formazione dell'apprendista recuperabile; clausola sociale negli appalti; parte economica del CCNL leader quando i lavoratori interessati sono molti; TFR non versato al fondo; omessa consegna della CU.", ["part-time", "precedenza", "apprendist", "molti", "cu"]],
        ["Ricorso (c. 2): entro 15 giorni al direttore dell'ITL, che decide nei 15 giorni successivi; se tace, il ricorso si intende respinto. Il ricorso non sospende l'esecutività. Dopo la decisione, secondo Rausei, resta la via del TAR o del ricorso straordinario.", ["15 giorni", "direttore", "respinto", "non sospende"]],
        ["Inottemperanza (c. 3): sanzione amministrativa da 500 a 3.000 euro, senza la diffida obbligatoria dell'art. 13, c. 2.", ["500", "3.000", "senza diffida"]],
        ["Giurisprudenza: i TAR la leggevano in modo restrittivo; il Consiglio di Stato (2778/2024, 7853/2025, 10382/2025, 4969/2026, riportate da Rausei) l'ha estesa alle violazioni dei contratti collettivi e all'adeguatezza della retribuzione ex art. 36 Cost. In senso più restrittivo TAR Marche, Ancona, 1/7/2026 n. 857 (riportata da Rausei): la disposizione è residuale e non si adotta se la legge o il CCNL non prevedono un obbligo. La dottrina critica obietta il principio di legalità e la libertà sindacale (art. 39 Cost.).", ["consiglio di stato", "tar", "36", "39"]]
      ],
      aggancio: "Come si sceglie lo strumento: irregolarità senza sanzione → disposizione; illecito amministrativo sanabile → diffida precettiva; contravvenzione → prescrizione (art. 15 e D.Lgs. 758/1994); crediti di pochi lavoratori → diffida accertativa. La disposizione non dà nulla direttamente al lavoratore: è un ordine assistito da una sanzione. Con il D.L. 62/2026 è lo strumento per riallineare al TEC molti lavoratori. Il consulente controlla che il verbale motivi l'irregolarità (per un diverso inquadramento, le declaratorie del CCNL: Trib. Cosenza 6/5/2025, riportato da Rausei) e valuta il ricorso nei 15 giorni.",
      fonti: "Art. 14 D.Lgs. 124/2004 (124_2004.pdf in libreria, vigente al 27/9/2026: testo riletto); P1/P1_Mappe_Poteri_ispettivi, Focus 1, Mappa D e tabella degli strumenti (circ. INL 5/2020, nota INL 4539/2020 e sentenze riportate da Rausei al convegno di Fermo del 18/9/2026, testi non letti; Cons. Stato 22/6/2026 n. 4969 e TAR Marche 1/7/2026 n. 857 riportati da Rausei)."
    },

    "PPP-11": {
      sintesi: "La proprietà è il diritto di godere e disporre delle cose in modo pieno ed esclusivo, entro i limiti e con l'osservanza degli obblighi stabiliti dall'ordinamento (art. 832 c.c.); il possesso è invece una situazione di fatto: il potere sulla cosa che si manifesta come esercizio della proprietà o di un altro diritto reale, anche senza esserne titolari.",
      punti: [
        ["Proprietà: diritto reale pieno, garantito e limitato dalla legge per assicurarne la funzione sociale (art. 42 Cost.); si acquista a titolo originario (per esempio usucapione) o derivativo (contratto, successione).", ["42 cost", "funzione sociale", "originario"]],
        ["Possesso: corpus possessionis (disponibilità materiale) e animus possidendi (intenzione di comportarsi come titolare del diritto). Diverso dalla detenzione, in cui si ha la cosa senza quell'intenzione (per esempio il conduttore o il depositario).", ["corpus", "animus", "detenzione"]],
        ["Tutela del possesso con le azioni possessorie: reintegrazione o spoglio, contro chi sottrae il possesso; manutenzione, contro le molestie e le turbative.", ["reintegrazione", "spoglio", "manutenzione"]],
        ["Azioni di nunciazione, cautelari: denuncia di nuova opera e di danno temuto.", ["nuova opera", "danno temuto"]],
        ["Usucapione: acquisto a titolo originario della proprietà o di un diritto reale di godimento con il possesso continuo, ininterrotto, non violento né clandestino per il tempo fissato dalla legge.", ["usucapione", "continuo", "clandestino"]]
      ],
      aggancio: "Per il Presidente il tema è poco pertinente alla professione: basta la distinzione tra diritto (proprietà) e fatto (possesso). Aggancio possibile: gli strumenti di lavoro dati al dipendente sono in sua detenzione, non in suo possesso.",
      fonti: "Art. 832 c.c. (testo riportato da studiocataldi.it, fonte secondaria, 6/11/2026); Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), art. 42; Simone, Diritto privato (ORALE_Simone_Diritto_Privato_OCR), p. 730 (sintesi del capitolo sul possesso). Articoli su azioni possessorie e termini dell'usucapione: da riscontrare sul codice."
    },

    "PPP-15": {
      sintesi: "I diritti reali sono diritti assoluti su una cosa, opponibili a tutti e tipici (solo quelli previsti dalla legge). Accanto alla proprietà ci sono i diritti reali su cosa altrui: di godimento, che consentono di usare il bene altrui, e di garanzia, che vincolano un bene all'adempimento di un credito.",
      punti: [
        ["Caratteri: immediatezza (potere diretto sulla cosa), assolutezza (valgono verso tutti), inerenza (seguono la cosa), tipicità (numero chiuso).", ["immediatezza", "assolut", "tipicita"]],
        ["Diritti reali di godimento: superficie, enfiteusi, usufrutto, uso, abitazione, servitù prediali.", ["usufrutto", "superficie", "servitu", "abitazione"]],
        ["Usufrutto: diritto di godere della cosa altrui, rispettandone la destinazione economica, per un tempo non oltre la vita dell'usufruttuario; uso e abitazione sono forme più ristrette, limitate ai bisogni del titolare e della famiglia.", ["destinazione economica", "vita", "bisogni"]],
        ["Diritti reali di garanzia: pegno, sui beni mobili, con lo spossessamento del debitore; ipoteca, su beni immobili o mobili registrati, che si costituisce con l'iscrizione nei registri immobiliari.", ["pegno", "ipoteca", "iscrizione"]],
        ["Garanzie e prelazione: pegno e ipoteca, insieme ai privilegi, sono cause legittime di prelazione rispetto agli altri creditori; restano distinte dalle garanzie personali come la fideiussione.", ["prelazione", "privilegi", "fideiussione"]]
      ],
      aggancio: "Aggancio al lavoro: i crediti di lavoro sono assistiti da privilegio generale sui mobili del datore (art. 2751-bis c.c.), che li fa pagare prima dei creditori chirografari nelle procedure concorsuali (Simone LS p. 404; ORALE_05).",
      fonti: "Indice del Simone, Diritto privato, capp. 4 e 10, pp. 717-726 e 775-781 (pagine non in libreria: testi da riscontrare sul codice); Simone, Diritto privato (ORALE_Simone_Diritto_Privato_OCR); Simone, Legislazione sociale, p. 404 (privilegio dell'art. 2751-bis c.c.)."
    },

    "S22-PPP-11": {
      sintesi: "I principi fondamentali (artt. 1-12 Cost.) disegnano l'identità della Repubblica: democrazia fondata sul lavoro, diritti inviolabili, uguaglianza, diritto al lavoro, autonomie, apertura internazionale e pace.",
      punti: [
        ["Principio democratico e lavorista: l'Italia è una Repubblica democratica fondata sul lavoro e la sovranità appartiene al popolo (art. 1); il lavoro è diritto e dovere, e la Repubblica promuove le condizioni per renderlo effettivo (art. 4).", ["democratica", "fondata sul lavoro", "sovranita", "art. 4"]],
        ["Principio personalista e solidarista: la Repubblica riconosce e garantisce i diritti inviolabili dell'uomo e richiede l'adempimento dei doveri di solidarietà politica, economica e sociale (art. 2).", ["inviolabili", "solidarieta"]],
        ["Uguaglianza formale e sostanziale (art. 3): pari dignità sociale senza distinzioni di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali; compito della Repubblica rimuovere gli ostacoli economici e sociali.", ["uguaglianza", "pari dignita", "rimuovere gli ostacoli"]],
        ["Autonomie e minoranze: Repubblica una e indivisibile che riconosce e promuove le autonomie locali (art. 5); tutela delle minoranze linguistiche (art. 6); rapporti con la Chiesa cattolica e libertà delle confessioni religiose (artt. 7-8).", ["autonomie", "minoranze", "confessioni"]],
        ["Cultura, ambiente, apertura internazionale: tutela del paesaggio, dell'ambiente, della biodiversità e degli animali (art. 9, riformato nel 2022); adeguamento al diritto internazionale e condizione dello straniero (art. 10); ripudio della guerra e limitazioni di sovranità per la pace e la giustizia tra le Nazioni (art. 11).", ["ambiente", "art. 10", "ripudi"]]
      ],
      aggancio: "Per l'orale del CdL il ponte è il principio lavorista: art. 1, art. 4 e art. 35 ss. Cost. sono la base di tutta la legislazione del lavoro; l'art. 3, c. 2, fonda le azioni positive e la parità di trattamento.",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), artt. 1-12; indice del Simone, Diritto pubblico, cap. 3, pp. 909-913 (pagine non in libreria)."
    },

    "S22-PPP-12": {
      sintesi: "Il Parlamento è composto dalla Camera dei deputati e dal Senato della Repubblica (art. 55 Cost.), con bicameralismo perfetto: le due Camere hanno le stesse funzioni, legislativa e di indirizzo e controllo sul Governo.",
      punti: [
        ["Composizione dopo la L. cost. 1/2020: 400 deputati e 200 senatori elettivi, più i senatori a vita; legislatura di cinque anni.", ["400", "200", "senatori a vita", "cinque anni"]],
        ["Funzioni: legislativa (artt. 70 ss.), con l'iter in commissione e in aula; fiducia al Governo e controllo politico con interrogazioni, interpellanze, mozioni e commissioni d'inchiesta.", ["legislativa", "fiducia", "interpellanz"]],
        ["Parlamento in seduta comune: elegge il Presidente della Repubblica, un terzo dei membri del CSM e cinque giudici costituzionali; mette in stato d'accusa il Presidente della Repubblica.", ["seduta comune", "presidente della repubblica", "csm"]],
        ["Garanzie dei parlamentari: rappresentano la Nazione senza vincolo di mandato (art. 67); insindacabilità per le opinioni e i voti espressi; autorizzazione della Camera per perquisizioni, arresti e intercettazioni (art. 68).", ["vincolo di mandato", "insindacabilita", "68"]],
        ["Ogni Camera ha un proprio regolamento, approvato a maggioranza assoluta, che disciplina l'organizzazione interna.", ["regolamento", "maggioranza assoluta"]]
      ],
      aggancio: "Per il consulente: le leggi del lavoro nascono qui o per delega del Parlamento al Governo (decreti legislativi come il D.Lgs. 81/2015 o il D.Lgs. 96/2026); il D.L. 62/2026 è stato convertito dal Parlamento con modifiche (L. 112/2026).",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), artt. 55-82; Simone, Diritto pubblico (ORALE_Simone_Diritto_Pubblico_OCR), pp. 926-929."
    },

    "S22-PPP-18": {
      sintesi: "Gli enti pubblici territoriali sono i Comuni, le Province, le Città metropolitane e le Regioni, che con lo Stato costituiscono la Repubblica (art. 114 Cost., riformato dalla L. cost. 3/2001). Sono enti autonomi con propri statuti, poteri e funzioni.",
      punti: [
        ["Regioni: ordinarie e a statuto speciale; potestà legislativa nelle materie concorrenti e in quelle residuali; lo Stato ha la legislazione esclusiva nelle materie dell'art. 117, c. 2, tra cui l'ordinamento civile e quindi il rapporto di lavoro privato.", ["regioni", "117", "concorrenti", "ordinamento civile"]],
        ["Funzioni amministrative attribuite di regola ai Comuni, secondo sussidiarietà, differenziazione e adeguatezza (art. 118).", ["comuni", "sussidiarieta", "118"]],
        ["Autonomia finanziaria di entrata e di spesa, con tributi propri e compartecipazioni (art. 119).", ["autonomia finanziaria", "119"]],
        ["Organi del Comune: Consiglio, Giunta e Sindaco; della Regione: Consiglio regionale, Giunta e Presidente.", ["consiglio", "giunta", "sindaco", "presidente"]],
        ["Poteri sostitutivi dello Stato in caso di inadempienze gravi (art. 120) e controlli; le Province sono state ridimensionate dalla L. 56/2014, che le qualifica enti territoriali di area vasta e istituisce le Città metropolitane nelle grandi aree urbane (art. 1, c. 2-3).", ["poteri sostitutivi", "56/2014", "citta metropolitane"]]
      ],
      aggancio: "Per il lavoro: tutela e sicurezza del lavoro sono materia concorrente, mentre la disciplina del rapporto privato è statale; alle Regioni spettano politiche attive, centri per l'impiego e formazione (per esempio l'apprendistato).",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), artt. 114-133; indice del Simone, Diritto pubblico, cap. 5, pp. 949-968 (pagine non in libreria). L. 56/2014, art. 1, c. 2-3, letto su Normattiva il 7/11/2026."
    },

    "S22-PPP-19": {
      sintesi: "La Costituzione fissa i principi della pubblica amministrazione soprattutto negli artt. 97 e 98: legalità, imparzialità e buon andamento, con equilibrio di bilancio, accesso per concorso e servizio esclusivo della Nazione.",
      punti: [
        ["Riserva di legge sull'organizzazione dei pubblici uffici, perché siano assicurati il buon andamento e l'imparzialità dell'amministrazione (art. 97, c. 2).", ["riserva di legge", "buon andamento", "imparzialita"]],
        ["Equilibrio dei bilanci e sostenibilità del debito pubblico (art. 97, c. 1, dalla L. cost. 1/2012).", ["equilibrio", "debito"]],
        ["Accesso agli impieghi pubblici mediante concorso, salvo i casi stabiliti dalla legge (art. 97, ult. c.).", ["concorso"]],
        ["I pubblici impiegati sono al servizio esclusivo della Nazione (art. 98); responsabilità diretta di funzionari e dipendenti per gli atti compiuti in violazione dei diritti, estesa allo Stato (art. 28).", ["servizio esclusivo", "98", "28"]],
        ["Tutela contro gli atti della PA sempre ammessa davanti al giudice ordinario o amministrativo (art. 113); sussidiarietà e decentramento (artt. 5 e 118).", ["113", "giudice", "sussidiarieta"]]
      ],
      aggancio: "Il D.L. 62/2026 si applica solo al lavoro privato, mentre il D.Lgs. 96/2026 vale anche per il pubblico. L'ITL è una pubblica amministrazione: il buon andamento e l'imparzialità sono la misura dei suoi atti e il fondamento dei ricorsi.",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), artt. 28, 97, 98, 113; P1/P1_Mappe_DL62_DLgs96 (ambiti dei due decreti)."
    },

    "S22-PPP-20": {
      sintesi: "La magistratura costituisce un ordine autonomo e indipendente da ogni altro potere (art. 104 Cost.). La giurisdizione si divide tra giudice ordinario, civile e penale, e giudici speciali previsti dalla Costituzione: amministrativo (TAR e Consiglio di Stato), contabile (Corte dei conti), tributario e militare.",
      punti: [
        ["Garanzie: giudice naturale precostituito per legge (art. 25); soggezione soltanto alla legge (art. 101); inamovibilità (art. 107); obbligatorietà dell'azione penale per il pubblico ministero (art. 112).", ["precostituito", "soltanto alla legge", "inamovibilita", "112"]],
        ["CSM: presieduto dal Presidente della Repubblica, con membri di diritto ed elettivi (due terzi eletti dai magistrati, un terzo dal Parlamento); governa carriere e disciplina dei magistrati (artt. 104-105).", ["csm", "due terzi", "carriere"]],
        ["Giusto processo (art. 111): contraddittorio in parità, giudice terzo e imparziale, ragionevole durata; ricorso in Cassazione sempre ammesso per violazione di legge contro sentenze e provvedimenti sulla libertà personale.", ["giusto processo", "terzo", "ragionevole durata", "cassazione"]],
        ["Giustizia amministrativa: tutela degli interessi legittimi e, nelle materie indicate dalla legge, dei diritti soggettivi; TAR in primo grado, Consiglio di Stato in appello (art. 103 e 125).", ["interessi legittimi", "tar", "consiglio di stato"]],
        ["Il referendum costituzionale del 22-23 marzo 2026 sulla separazione delle carriere ha respinto la riforma (No al 53,7%): l'assetto degli artt. 104-107 resta quello vigente.", ["referendum", "separazione delle carriere", "respinto"]]
      ],
      aggancio: "Per il consulente: le controversie di lavoro privato vanno al giudice ordinario in funzione di giudice del lavoro; il ricorso contro un atto dell'ITL privo di rimedio specifico (per esempio la disposizione) può andare al TAR, come ricorda Rausei.",
      fonti: "Costituzione (testi Senato e Corte cost., verificati il 30/10/2026), artt. 24-25, 101-113; Simone, Diritto pubblico (ORALE_Simone_Diritto_Pubblico_OCR), pp. 940-946; esito del referendum: ilpost.it e pagellapolitica.it, 23/3/2026 (fonti secondarie concordanti); P1/P1_Mappe_Poteri_ispettivi."
    },

    "S22-PPP-26": {
      sintesi: "Denuncia, querela ed esposto sono i modi con cui un fatto viene portato all'autorità. La denuncia riguarda i reati perseguibili d'ufficio; la querela è la condizione di procedibilità per i reati che la legge rimette alla volontà della persona offesa; l'esposto è una segnalazione con cui si chiede l'intervento dell'autorità, senza una forma tipica.",
      punti: [
        ["Denuncia: chiunque può presentarla, oralmente o per iscritto, al pubblico ministero o alla polizia giudiziaria (art. 333 c.p.p.); è obbligatoria per i pubblici ufficiali e gli incaricati di pubblico servizio (art. 331 c.p.p.). Non ha termini e non si può ritirare.", ["denuncia", "333", "331", "obbligatoria"]],
        ["Querela: la presenta solo la persona offesa, manifestando la volontà che si proceda (art. 336 c.p.p.); va proposta entro tre mesi dalla notizia del fatto (art. 124 c.p.); si può rinunciare, anche tacitamente, e di regola rimettere.", ["persona offesa", "tre mesi", "124", "rinuncia"]],
        ["Esposto: segnalazione non tipizzata di un fatto, anche non reato, perché l'autorità valuti se intervenire (per esempio la richiesta di intervento all'ITL).", ["esposto", "segnalazione"]],
        ["Nel lavoro: le lesioni colpose gravi o gravissime commesse con violazione delle norme antinfortunistiche, sull'igiene del lavoro o che determinano una malattia professionale si procedono d'ufficio, non a querela (art. 590, ultimo comma, c.p.).", ["d'ufficio", "590", "malattia professionale"]],
        ["Gli ispettori del lavoro, come ufficiali di polizia giudiziaria, trasmettono la notizia di reato al PM (art. 347 c.p.p.) quando accertano una contravvenzione, prima di impartire la prescrizione.", ["polizia giudiziaria", "347", "prescrizione"]]
      ],
      aggancio: "Per il consulente: la richiesta di intervento del lavoratore all'ITL è la porta della conciliazione monocratica; l'infortunio grave con violazione di norme di sicurezza apre comunque un procedimento penale d'ufficio.",
      fonti: "Artt. 331, 333, 336 c.p.p. come riportati da miolegale.it (fonte secondaria, 6/11/2026); art. 124 c.p. (avvocato.it, 6/11/2026); art. 590 c.p. (miolegale.it, 6/11/2026); Simone, Legislazione sociale, p. 437 (art. 347 c.p.p.)."
    },

    "S22-PPP-27": {
      sintesi: "L'omicidio colposo (art. 589 c.p.) e le lesioni personali colpose (art. 590 c.p.) sono i delitti tipici dell'infortunio sul lavoro: la violazione delle norme per la prevenzione degli infortuni è una circostanza aggravante, e la colpa del datore è di regola colpa specifica.",
      punti: [
        ["Omicidio colposo: reclusione da sei mesi a cinque anni; se il fatto è commesso con violazione delle norme per la prevenzione degli infortuni sul lavoro, da due a sette anni (art. 589, c. 2).", ["589", "sei mesi", "due a sette anni"]],
        ["Lesioni colpose con violazione delle norme antinfortunistiche: per le gravi reclusione da tre mesi a un anno o multa da 500 a 2.000 euro; per le gravissime reclusione da uno a tre anni (art. 590, c. 3). In questi casi si procede d'ufficio.", ["590", "gravi", "gravissime", "d'ufficio"]],
        ["Colpa specifica: inosservanza di leggi, regolamenti, ordini o discipline, come il D.Lgs. 81/2008; il datore risponde anche per omissione, perché ha l'obbligo giuridico di impedire l'evento (art. 40, c. 2, c.p.; art. 2087 c.c.).", ["colpa specifica", "omissione", "2087"]],
        ["Responsabilità dell'ente: omicidio colposo e lesioni gravi o gravissime da violazione delle norme di sicurezza sono reati presupposto della responsabilità amministrativa della società (D.Lgs. 231/2001), salvo modello organizzativo efficace.", ["231/2001", "modello organizzativo"]],
        ["Altre conseguenze: azione di regresso dell'INAIL verso il datore responsabile, risarcimento del danno differenziale, sospensione della patente a crediti nei cantieri.", ["regresso", "inail", "patente a crediti"]]
      ],
      aggancio: "Il D.Lgs. 81/2008 serve a evitare proprio questi reati: DVR, formazione, DPI e vigilanza del preposto sono gli elementi su cui si valuta la colpa del datore. Il consulente collabora alla parte documentale e formativa.",
      fonti: "Art. 589 c.p. (filodiritto.com, 6/11/2026) e art. 590 c.p. (miolegale.it, 6/11/2026), fonti secondarie concordanti con Simone, Diritto penale (scansione del 6/11/2026), pp. 984-987; Simone, Diritto del lavoro, pp. 174-175 (regresso INAIL) e 164 (patente)."
    },

    "S22-PPP-28": {
      sintesi: "Il datore che trattiene le ritenute previdenziali e assistenziali dalla retribuzione del lavoratore e non le versa all'INPS commette il reato dell'art. 2, c. 1-bis, D.L. 463/1983, ma solo se l'importo omesso supera 10.000 euro l'anno; sotto questa soglia è un illecito amministrativo (D.Lgs. 8/2016).",
      punti: [
        ["Sopra i 10.000 euro annui: reclusione fino a tre anni e multa fino a 1.032 euro.", ["10.000", "reclusione", "tre anni"]],
        ["Fino a 10.000 euro: sanzione amministrativa da 10.000 a 50.000 euro.", ["sanzione amministrativa", "50.000"]],
        ["Causa di non punibilità: il datore non è punibile, né soggetto alla sanzione, se versa le ritenute entro tre mesi dalla contestazione o dalla notifica dell'accertamento.", ["non punibil", "tre mesi", "contestazione"]],
        ["Si tratta delle sole ritenute a carico del lavoratore: l'omesso versamento della quota a carico del datore non è reato, ma comporta sanzioni civili e recupero contributivo.", ["a carico del lavoratore", "sanzioni civili"]],
        ["È uno dei pochi delitti del diritto penale del lavoro, accanto alla rimozione od omissione dolosa di cautele (art. 437 c.p.) e alle falsità nelle denunce contributive (art. 37 L. 689/1981).", ["437", "37", "689/1981"]]
      ],
      aggancio: "Per il consulente: il mancato versamento delle trattenute è il segnale classico della crisi d'impresa. Va gestito subito con rateazione e versamento entro i tre mesi dalla contestazione, per evitare il penale (ORALE_05).",
      fonti: "Simone, Diritto penale (scansione del 6/11/2026), p. 987; Simone, Legislazione sociale, pp. 447-448 (art. 2, c. 1-bis, D.L. 463/1983: soglie, sanzione e causa di non punibilità)."
    },

    "S22-PPP-29": {
      sintesi: "L'oblazione è una causa di estinzione delle contravvenzioni: pagando una somma prima del dibattimento o del decreto di condanna, il contravventore fa estinguere il reato. Nel diritto penale del lavoro si affianca alla prescrizione obbligatoria del D.Lgs. 758/1994.",
      punti: [
        ["Oblazione ordinaria (art. 162 c.p.): per le contravvenzioni punite con la sola ammenda; si paga un terzo del massimo più le spese; è un diritto, il giudice non può negarla.", ["162", "sola ammenda", "un terzo"]],
        ["Oblazione speciale (art. 162-bis c.p.): per le contravvenzioni punite con arresto o ammenda in alternativa; si paga la metà del massimo dell'ammenda; il giudice può negarla per gravità del fatto, recidiva, abitualità o se restano conseguenze dannose eliminabili.", ["162-bis", "alternativa", "meta", "negarla"]],
        ["Prescrizione obbligatoria (artt. 19-24 D.Lgs. 758/1994; art. 301 D.Lgs. 81/2008): l'organo di vigilanza impone la regolarizzazione entro un termine fino a 6 mesi; verificato l'adempimento, il contravventore paga un quarto del massimo dell'ammenda in sede amministrativa e il reato si estingue.", ["758/1994", "6 mesi", "un quarto"]],
        ["Non si applica alle contravvenzioni punite con il solo arresto o con arresto e ammenda congiunti; per le prime il giudice può sostituire la pena con una somma se il rischio è stato eliminato e non c'è stato un infortunio grave (art. 302 D.Lgs. 81/2008).", ["solo arresto", "congiunt", "302"]],
        ["Effetto: estinzione del reato, a differenza della diffida per gli illeciti amministrativi, che li estingue con il pagamento del minimo.", ["estinzione", "diffida"]]
      ],
      aggancio: "Nella vigilanza INL la regola è la prescrizione obbligatoria, che premia chi regolarizza; l'oblazione del codice penale resta per i casi residui. Il consulente segue i termini della prescrizione e il pagamento entro 30 giorni dalla verifica.",
      fonti: "Simone, Diritto penale (scansione del 6/11/2026), pp. 980 e 987-988; Simone, Diritto del lavoro, p. 175; Simone, Legislazione sociale, p. 437; 758_1994 in libreria; P1/P1_Mappe_Poteri_ispettivi."
    },

    "S22-PPP-30": {
      sintesi: "Un reato può essere anche illecito civile: l'art. 185 c.p. obbliga il colpevole alle restituzioni e al risarcimento del danno patrimoniale e non patrimoniale, insieme alle persone che per legge devono rispondere per lui.",
      punti: [
        ["Restituzioni: restituire il maltolto e ripristinare la situazione precedente.", ["restituzion", "ripristin"]],
        ["Risarcimento: danno patrimoniale (danno emergente e lucro cessante) e non patrimoniale (sofferenza morale e lesione di interessi non economici); tra i concorrenti nel reato la responsabilità è solidale.", ["danno emergente", "lucro cessante", "non patrimoniale", "solidal"]],
        ["Responsabile civile: risponde anche chi deve rispondere del fatto altrui, come il datore di lavoro per il fatto del dipendente (art. 2049 c.c.); la persona offesa può costituirsi parte civile nel processo penale.", ["responsabile civile", "datore di lavoro", "parte civile"]],
        ["Obbligazione civile per le pene pecuniarie (artt. 196-197 c.p.): se il condannato è insolvente, paga chi doveva vigilare o l'ente nel cui interesse il dipendente ha agito.", ["196", "insolvente", "ente"]],
        ["Garanzie: sequestro conservativo, cauzione e revocatoria penale (artt. 189-195 c.p.); rimborso allo Stato delle spese di mantenimento in carcere (art. 188).", ["sequestro conservativo", "188"]]
      ],
      aggancio: "Nell'infortunio sul lavoro: il datore condannato risponde del danno differenziale oltre l'indennizzo INAIL, e l'INAIL agisce in regresso per le prestazioni erogate.",
      fonti: "Simone, Diritto penale (scansione del 6/11/2026), pp. 981-982 e 984; Simone, Diritto del lavoro, pp. 174-175. Art. 2049 c.c.: da riscontrare sul codice."
    },

    "S22-RAG-1": {
      sintesi: "L'azienda è il complesso dei beni organizzati dall'imprenditore per l'esercizio dell'impresa (art. 2555 c.c.). L'impresa si fa riconoscere sul mercato con tre segni distintivi: la ditta (il nome dell'imprenditore), l'insegna (il segno del locale) e il marchio (il segno dei prodotti o dei servizi).",
      punti: [
        ["Ditta: unico segno obbligatorio, il nome sotto cui l'imprenditore opera; principi di verità (deve contenere almeno il cognome o la sigla dell'imprenditore) e di novità (non deve confondersi con altre); non si trasferisce senza l'azienda.", ["ditta", "obbligatori", "verita", "novita"]],
        ["Insegna: segno facoltativo che distingue il locale; può coincidere con la ditta o essere una denominazione, una figura o un simbolo, purché originale, vero e nuovo.", ["insegna", "locale", "facoltativ"]],
        ["Marchio: segno facoltativo che distingue i prodotti o i servizi da quelli dei concorrenti; disciplinato dagli artt. 2569-2574 c.c. e dal Codice della proprietà industriale (D.Lgs. 30/2005); la registrazione dà il diritto di uso esclusivo.", ["marchio", "2569", "30/2005", "esclusiv"]],
        ["La legge tutela i segni distintivi riconoscendo l'uso esclusivo e il potere di impedire che altri li usino; gli atti confusori sono concorrenza sleale (art. 2598 c.c.).", ["uso esclusivo", "concorrenza sleale"]],
        ["Trasferimento d'azienda: per i lavoratori vale l'art. 2112 c.c., che conserva i rapporti di lavoro e i diritti maturati presso il cessionario, con solidarietà per i crediti.", ["2112", "cessionario", "solidarieta"]]
      ],
      aggancio: "In contabilità l'avviamento e i marchi acquistati sono immobilizzazioni immateriali da ammortizzare; per il consulente il trasferimento d'azienda è soprattutto la procedura dell'art. 2112 e, sopra i 15 dipendenti, la consultazione sindacale.",
      fonti: "Simone, Diritto privato, pp. 789-792 (ORALE_Simone_Diritto_Privato_OCR); art. 2112 c.c. (NORMA_Codice_civile_lavoro); Simone, Legislazione sociale, pp. 408-410."
    },

    "S22-RAG-5": {
      sintesi: "L'ammortamento è il procedimento con cui si ripartisce sistematicamente il costo di un'immobilizzazione di utilizzo limitato nel tempo tra gli esercizi della sua vita utile, per imputare a ciascuno il costo di competenza, indipendentemente dai risultati economici (OIC 16).",
      punti: [
        ["Piano di ammortamento: valore da ammortizzare, residua possibilità di utilizzazione (vita utile economica, di regola più breve di quella fisica) e metodo; va rivisto se cambiano le stime.", ["piano", "vita utile", "metodo"]],
        ["Metodi: a quote costanti, il più diffuso; decrescenti se il bene è sfruttato di più all'inizio; per unità di prodotto. Non sono ammesse quote crescenti né quote legate ai ricavi.", ["quote costanti", "decrescenti", "crescenti"]],
        ["Inizio quando il bene è disponibile e pronto all'uso, anche se temporaneamente inutilizzato; stop quando il valore residuo stimato raggiunge il valore netto contabile.", ["pronto all'uso", "valore residuo"]],
        ["Rilevazione indiretta: in dare il costo «Ammortamento» (conto economico, voce B10), in avere il «Fondo ammortamento», che in bilancio rettifica il costo storico: l'immobilizzazione è esposta al netto.", ["fondo ammortamento", "b10", "al netto"]],
        ["Fiscalmente le quote sono deducibili nei limiti dei coefficienti ministeriali (art. 102 TUIR): civilistica e fiscale possono divergere.", ["coefficienti", "102"]]
      ],
      aggancio: "Il requisito della sistematicità impedisce di usare gli ammortamenti per politiche di bilancio. Per il consulente il collegamento è con i beni dati ai dipendenti (auto, telefoni), il cui uso privato genera un fringe benefit.",
      fonti: "Simone, Ragioneria (ORALE_Simone_Ragioneria_Generale_OCR), pp. 1134-1137 (OIC 16); Simone, Ragioneria, cap. 8 sul bilancio (scansione del 6/11/2026), p. 1164 (voce B10). Art. 102 TUIR: 917_1986_TUIR, da riscontrare sul testo."
    },

    "S22-RAG-7": {
      sintesi: "Ratei e risconti sono scritture di assestamento che applicano la competenza economica ai costi e ricavi di contratti di durata a cavallo di due esercizi: i ratei integrano costi o ricavi maturati ma non ancora pagati o incassati; i risconti stornano costi o ricavi già rilevati ma di competenza futura.",
      punti: [
        ["Ratei: quote maturate nell'esercizio di costi o ricavi la cui manifestazione finanziaria avverrà dopo (pagamento posticipato), come interessi su mutui o affitti pagati a fine periodo.", ["ratei", "maturat", "posticipat"]],
        ["Rateo attivo: credito presunto per un ricavo maturato (per esempio un fitto attivo da incassare); rateo passivo: debito presunto per un costo maturato (per esempio interessi passivi da pagare).", ["rateo attivo", "rateo passivo", "presunt"]],
        ["Risconti: quote di costi o ricavi già rilevati per intero ma di competenza degli esercizi successivi (pagamento anticipato), come un premio assicurativo annuale pagato in corso d'anno; attivi se riferiti a costi, passivi se riferiti a ricavi.", ["risconti", "anticipat", "competenza"]],
        ["Calcolo per proporzione temporale: quota = importo × giorni (o mesi) di competenza ÷ durata complessiva.", ["proporzione", "durata"]],
        ["In bilancio: voce D dell'attivo (ratei e risconti attivi) e voce E del passivo (ratei e risconti passivi) dello stato patrimoniale.", ["voce d", "voce e", "stato patrimoniale"]]
      ],
      aggancio: "Per il personale le scritture tipiche di fine anno non sono ratei ma stanziamenti: ratei di tredicesima e quattordicesima maturati, ferie non godute e quota di TFR, che il consulente comunica al contabile per l'assestamento.",
      fonti: "Simone, Ragioneria (ORALE_Simone_Ragioneria_Personale_OCR), pp. 1120-1124; Simone, Ragioneria, cap. 8 sul bilancio (scansione del 6/11/2026), pp. 1159-1163 (voci dello stato patrimoniale)."
    },

    "S22-RAG-8": {
      sintesi: "L'inventario d'esercizio è il documento che, a fine anno, rileva, descrive e valuta tutti gli elementi attivi e passivi del patrimonio aziendale; è la base delle scritture di assestamento, compreso l'ammortamento, e del bilancio (art. 2217 c.c.).",
      punti: [
        ["Fasi: ricerca degli elementi, loro classificazione e descrizione, valutazione; inventario generale, ordinario e a valori.", ["ricerca", "classificazione", "valutazione"]],
        ["Libro degli inventari (art. 2214 c.c.): obbligatorio con il libro giornale per l'imprenditore commerciale; contiene l'inventario iniziale e quelli annuali, con attività e passività e il bilancio; va sottoscritto entro tre mesi dal termine per la dichiarazione dei redditi (art. 2217).", ["libro degli inventari", "2214", "tre mesi", "2217"]],
        ["Ammortamento in sede di inventario: si verifica il valore dei cespiti e si rileva la quota di competenza, che riduce il valore netto contabile.", ["ammortamento", "quota", "valore netto"]],
        ["Scrittura: Ammortamento (costo, B10 del conto economico) a Fondo ammortamento (rettifica dell'attivo); in alternativa, raramente, l'ammortamento diretto in diminuzione del conto del bene.", ["fondo ammortamento", "b10", "diretto"]],
        ["Tra gli altri valori di fine esercizio: rimanenze di magazzino, ratei e risconti, fondi rischi e oneri, quota TFR.", ["rimanenze", "ratei", "tfr"]]
      ],
      aggancio: "Dal punto di vista dottrinale inventario e stato patrimoniale coincidono nel contenuto e differiscono solo nella forma. Il consulente fornisce i dati del personale (TFR, ratei, ferie) che entrano nell'inventario.",
      fonti: "Simone, Ragioneria (ORALE_Simone_Ragioneria_Personale_OCR), pp. 1115-1117; Simone, Ragioneria (ORALE_Simone_Ragioneria_Generale_OCR), pp. 1134-1137."
    },

    "S22-RAG-9": {
      sintesi: "Plusvalenze e minusvalenze sono le differenze positive o negative tra il prezzo di cessione di un'immobilizzazione e il suo valore netto contabile, cioè il costo storico meno il fondo ammortamento.",
      punti: [
        ["Dismissione dell'immobilizzazione: vendita, permuta, rottamazione, distruzione involontaria, cessione gratuita.", ["dismissione", "vendita", "rottamazione"]],
        ["Calcolo: valore netto contabile = costo originario − fondo ammortamento; plusvalenza se il prezzo è maggiore, minusvalenza se è minore. Un bene già interamente ammortizzato genera una plusvalenza pari a tutto il ricavo.", ["valore netto contabile", "plusvalenza", "minusvalenza"]],
        ["Esempio del Simone: macchinario da 5.000 euro ammortizzato per 4.000, venduto a 1.200 più IVA: valore netto 1.000, plusvalenza 200.", ["5.000", "1.200", "200"]],
        ["Scritture: si chiude il fondo ammortamento contro il conto del bene; si rileva il credito verso il cliente con l'IVA, il bene per il valore residuo e la plusvalenza (o la minusvalenza) per la differenza.", ["fondo ammortamento", "iva"]],
        ["In bilancio dal 2016 non c'è più l'area straordinaria: plusvalenze e minusvalenze vanno nella gestione caratteristica (A5 altri ricavi, B14 oneri diversi).", ["area straordinaria", "a5", "b14"]]
      ],
      aggancio: "Distinguere dalle plusvalenze e minusvalenze da valutazione, che il principio di prudenza ammette solo in negativo. Per il consulente è materia contabile di contorno: basta il meccanismo del valore netto.",
      fonti: "Simone, Ragioneria (ORALE_Simone_Ragioneria_Personale_OCR), p. 1097 (dismissioni) e pp. 1092-1093 (titoli e prudenza); RAG-14 del simulatore (art. 2425 c.c., area straordinaria eliminata). Collocazione: OIC 12 (2024), par. 56 (A5) e 84 (B14)."
    },

    "S22-RAG-10": {
      sintesi: "Il premio INAIL è a carico esclusivo del datore e si paga in autoliquidazione: entro il 16 febbraio si versano la rata del premio anticipato per l'anno in corso, calcolato sulle retribuzioni dell'anno prima, e il conguaglio dell'anno precedente sulle retribuzioni effettive. In contabilità serve una scrittura di assestamento per imputare il costo all'esercizio di competenza.",
      punti: [
        ["Pagamento con F24, in un'unica soluzione o in quattro rate (16 febbraio, maggio, agosto e novembre), con interessi sulle rate.", ["f24", "quattro rate", "16 febbraio"]],
        ["Al versamento dell'acconto: Acconti INAIL (credito) a Banca c/c.", ["acconti inail", "banca"]],
        ["Al 31/12, determinato il premio effettivo dell'anno: Oneri sociali INAIL (costo, voce B9 b del conto economico) per il premio di competenza, contro Acconti INAIL e, per la differenza, Contributi INAIL a debito (passivo D13) o a credito (attivo circolante).", ["oneri sociali inail", "b9", "d13"]],
        ["L'anno dopo, il saldo a debito si versa con il nuovo acconto; il saldo a credito si scomputa dal nuovo acconto.", ["saldo", "nuovo acconto"]],
        ["Base: retribuzioni imponibili dei dipendenti e tassi della tariffa per voce di rischio; la dichiarazione delle retribuzioni si trasmette telematicamente entro il 28 febbraio, indicando anche se si sceglie il pagamento in quattro rate (Guida INAIL 2025/2026).", ["retribuzioni", "tariffa", "dichiarazione delle retribuzioni"]]
      ],
      aggancio: "Il consulente calcola l'autoliquidazione e passa al contabile i dati per l'assestamento: premio di competenza, acconto versato e saldo. Il mancato o tardivo pagamento genera sanzioni civili e la perdita della regolarità contributiva (DURC).",
      fonti: "Simone, Ragioneria (ORALE_Simone_Ragioneria_Personale_OCR), pp. 1095-1097; INAIL-3 del simulatore (autoliquidazione). Termini e rate: come riportati dal Simone; dichiarazione delle retribuzioni telematica entro il 28 febbraio (nel 2026 il 2 marzo) e rate 2026 (16 febbraio, 18 maggio, 20 agosto, 16 novembre): Guida INAIL all'autoliquidazione 2025/2026."
    },

    "S22-DL-2": {
      sintesi: "Il diritto di precedenza è il diritto di un lavoratore a essere preferito ad altri nelle nuove assunzioni del datore. Nasce soprattutto dal contratto a termine (art. 24 D.Lgs. 81/2015) e dal part-time. Ha un effetto diretto sugli incentivi: l'assunzione che viola il diritto di precedenza di un altro lavoratore non dà diritto ai benefici (art. 31 D.Lgs. 150/2015).",
      punti: [
        ["Contratto a termine (art. 24): chi ha lavorato più di 6 mesi, con uno o più contratti a termine presso la stessa azienda, ha precedenza nelle assunzioni a tempo indeterminato entro i 12 mesi successivi alla cessazione, per le mansioni già svolte; i contratti collettivi possono disporre diversamente.", ["6 mesi", "12 mesi", "tempo indeterminato", "mansioni"]],
        ["Lavoratrici: il congedo di maternità fruito durante il contratto a termine conta per i 6 mesi; hanno precedenza anche nelle nuove assunzioni a termine entro 12 mesi. Stagionali: precedenza nelle nuove assunzioni a termine per le stesse attività stagionali, senza requisito dei 6 mesi.", ["maternita", "stagional"]],
        ["Forma e termini: il diritto va richiamato per iscritto nel contratto; il lavoratore lo esercita manifestando la volontà per iscritto entro 6 mesi dalla cessazione (3 mesi per gli stagionali).", ["richiamato", "per iscritto", "3 mesi"]],
        ["Part-time: il lavoratore passato da tempo pieno a part-time ha precedenza nelle assunzioni a tempo pieno per mansioni uguali o di pari livello; non spetta a chi è stato assunto fin dall'origine a part-time.", ["part-time", "tempo pieno", "origine"]],
        ["Incentivi (art. 31 D.Lgs. 150/2015): non spettano se l'assunzione viola il diritto di precedenza di un altro lavoratore, se attua un obbligo di legge o di contratto, se ci sono sospensioni in atto per crisi o riorganizzazione, o se riguarda lavoratori licenziati nei 6 mesi precedenti da un datore collegato; servono inoltre il DURC e il rispetto dei contratti collettivi (art. 1, c. 1175, L. 296/2006).", ["viola", "obbligo", "durc", "1175"]]
      ],
      aggancio: "Prima di chiedere un incentivo il consulente controlla l'elenco dei lavoratori a termine cessati negli ultimi 12 mesi che hanno esercitato la precedenza. Se la precedenza non è rispettata, l'ITL può intervenire con la disposizione (nota INL 4539/2020, riportata da Rausei) e il beneficio non spetta. Dal 1° aprile 2026, per chiedere benefici all'assunzione la posizione va pubblicata sul SIISL (art. 14 D.L. 159/2025).",
      fonti: "Simone, Diritto del lavoro, pp. 88 e 208 (precedenza nel termine), 218-219 (part-time); P1/P1_Mappe_Poteri_ispettivi (disposizione)."
    },

    "S22-DL-6": {
      sintesi: "L'assunzione di uno straniero segue regole diverse secondo la cittadinanza. Il cittadino UE gode della libera circolazione e si assume come un italiano. Il cittadino extra UE residente all'estero entra di regola nelle quote del decreto flussi, con nulla osta dello Sportello unico per l'immigrazione e contratto di soggiorno (D.Lgs. 286/1998, artt. 21-27).",
      punti: [
        ["Cittadini UE: libera circolazione e diritto di svolgere qualsiasi attività autonoma o subordinata, salvo quelle riservate ai cittadini italiani (art. 19 D.Lgs. 30/2007): nessuna autorizzazione, solo la comunicazione obbligatoria.", ["libera circolazione", "riservate", "comunicazione"]],
        ["Extra UE dall'estero: verifica al centro per l'impiego dell'indisponibilità di lavoratori già presenti (8 giorni); richiesta nominativa di nulla osta allo Sportello unico, con proposta di contratto di soggiorno, alloggio e asseverazione di congruità del consulente o dell'associazione (art. 24-bis).", ["8 giorni", "nulla osta", "sportello unico", "asseverazione"]],
        ["Il nulla osta si rilascia entro 60 giorni (silenzio-assenso se la Questura non segnala ostacoli, con eccezioni per i Paesi a rischio) e vale 6 mesi; poi visto d'ingresso e, entro 15 giorni dall'ingresso, firma del contratto di soggiorno.", ["60 giorni", "6 mesi", "15 giorni", "contratto di soggiorno"]],
        ["Permesso di soggiorno per lavoro: fino a 9 mesi per lo stagionale, 1 anno per il tempo determinato, 2 anni per l'indeterminato; la perdita del lavoro non comporta la revoca. Lo straniero già regolarmente soggiornante con permesso che consente il lavoro si assume con la sola comunicazione obbligatoria.", ["9 mesi", "2 anni", "perdita del lavoro", "regolarmente"]],
        ["Chi occupa stranieri senza permesso di soggiorno, o con permesso scaduto, revocato o annullato e non rinnovato, commette reato (art. 22, c. 12, D.Lgs. 286/1998): reclusione da 6 mesi a 3 anni e multa di 5.000 euro per ogni lavoratore, con aggravanti per più di tre lavoratori, minori o sfruttamento.", ["reato", "5.000", "minori"]]
      ],
      aggancio: "Ruolo del consulente: precompila le domande, assevera la congruità tra fabbisogno e capacità dell'impresa (art. 24-bis) e controlla il permesso prima di ogni assunzione, perché senza permesso valido il rapporto è penalmente rilevante. Collegamento con il caporalato: permesso speciale per le vittime che collaborano (art. 18-ter, D.L. 145/2024).",
      fonti: "Simone, Diritto del lavoro, pp. 72-73 e 83-87; art. 22, c. 12, D.Lgs. 286/1998: pena riportata da fonte secondaria (money.it), testo da verificare su Normattiva."
    },

    "S22-DL-8": {
      sintesi: "Il tirocinio è un percorso formativo di alternanza tra studio e lavoro, per l'orientamento e la formazione professionale; non è un rapporto di lavoro (art. 1, c. 720-726, L. 234/2021). È curriculare se serve a conseguire un titolo di studio; extracurriculare negli altri casi, con disciplina regionale sulla base di linee guida concordate tra Stato e Regioni.",
      punti: [
        ["Definizione (c. 720): alternanza tra studio e lavoro, finalità di orientamento e formazione; curriculare se funzionale a un titolo di studio riconosciuto, extracurriculare altrimenti.", ["alternanza", "curriculare", "titolo di studio"]],
        ["Linee guida per gli extracurriculari (c. 721): soggetti con difficoltà di inclusione sociale, congrua indennità di partecipazione, durata massima, limiti numerici secondo le dimensioni dell'impresa, bilancio e certificazione delle competenze, misure contro l'uso distorto. Fino al recepimento valgono le discipline regionali.", ["indennita", "durata massima", "limiti numerici", "regional"]],
        ["Sanzioni: mancata indennità, sanzione amministrativa da 1.000 a 6.000 euro (c. 722); tirocinio usato in modo fraudolento al posto del lavoro dipendente, ammenda di 50 euro per tirocinante e per giorno, estinguibile con la prescrizione obbligatoria (c. 723).", ["1.000", "6.000", "50 euro", "fraudolent"]],
        ["Riqualificazione: su domanda del tirocinante il giudice può riconoscere un rapporto di lavoro subordinato dalla pronuncia giudiziale (c. 723).", ["subordinato", "pronuncia"]],
        ["Obblighi del soggetto ospitante: comunicazione obbligatoria per i tirocini extracurriculari (c. 724); integrale rispetto del D.Lgs. 81/2008, perché il tirocinante è equiparato al lavoratore (c. 725). La trasformazione del tirocinio in rapporto di lavoro va comunicata entro 5 giorni.", ["comunicazione obbligatoria", "81/2008", "equiparato", "5 giorni"]]
      ],
      aggancio: "Da non confondere con il praticantato per l'esame da consulente del lavoro: è un tirocinio professionale di 18 mesi, regolato dall'Ordine, che non crea rapporto di lavoro subordinato (Simone, Deontologia, pp. 1222-1223). In ispezione, il tirocinio non comunicato e riqualificato come lavoro subordinato è trattato come lavoro nero.",
      fonti: "Art. 1, c. 720-726, L. 234/2021, come sintetizzati dalla nota INL 21/3/2022 (prot. 530), ispettorato.gov.it; Simone, Diritto del lavoro, pp. 76-78 (comunicazioni) e 158 (equiparazione nel D.Lgs. 81/2008); Simone, Legislazione sociale (omessa comunicazione e riqualificazione in subordinato)."
    },

    "S22-DL-10": {
      sintesi: "Le prestazioni occasionali (art. 54-bis D.L. 50/2017, conv. L. 96/2017) sono attività di ridotta entità entro limiti annui di compenso e di durata, gestite con la piattaforma INPS. Hanno due canali: il Libretto famiglia per le persone fisiche fuori dall'attività d'impresa o professionale, il contratto di prestazione occasionale (PrestO) per gli altri utilizzatori.",
      punti: [
        ["Limiti annui: ogni prestatore fino a 5.000 euro da tutti gli utilizzatori; ogni utilizzatore fino a 10.000 euro (15.000 in congressi, fiere, eventi, terme e parchi divertimento); tra lo stesso prestatore e lo stesso utilizzatore fino a 2.500 euro; massimo 280 ore. Se si superano 2.500 euro o 280 ore il rapporto diventa a tempo pieno e indeterminato.", ["5.000", "10.000", "2.500", "280 ore", "tempo pieno e indeterminato"]],
        ["Divieto: non può lavorare in modo occasionale chi ha o ha avuto da meno di 6 mesi un rapporto subordinato o una co.co.co. con lo stesso utilizzatore.", ["6 mesi", "co.co.co"]],
        ["Libretto famiglia: titoli da 10 euro per prestazioni fino a un'ora, solo per piccoli lavori domestici, assistenza a bambini, anziani, malati o disabili, insegnamento privato supplementare; comunicazione entro il giorno 3 del mese successivo.", ["10 euro", "domestic", "giorno 3"]],
        ["PrestO: compenso minimo di 9 euro l'ora; dichiarazione all'INPS almeno un'ora prima dell'inizio, anche tramite il consulente; vietato a chi ha più di 10 dipendenti a tempo indeterminato (25 nei settori di congressi, fiere, eventi, terme e parchi) e alle imprese del settore agricolo.", ["9 euro", "un'ora prima", "10 dipendenti", "agricol"]],
        ["Tutele: riposo giornaliero, pause e riposi settimanali; oneri contributivi e assicurativi (anche INAIL) pagati con la provvista versata sulla piattaforma; il compenso non fa perdere lo stato di disoccupazione.", ["riposo", "inail", "disoccupazione"]]
      ],
      aggancio: "Da distinguere dal lavoro autonomo occasionale dell'art. 2222 c.c. (DL-7a), che richiede la comunicazione preventiva all'ITL. Se la prestazione ha i caratteri della subordinazione e manca la comunicazione preventiva, o è inviata durante l'accesso ispettivo, o è revocata per una giornata effettivamente lavorata, si applica la maxisanzione per lavoro sommerso (Simone, Legislazione sociale, elenco dei casi di lavoro nero).",
      fonti: "Simone, Diritto del lavoro, pp. 23-25 (art. 54-bis D.L. 50/2017); Simone, Legislazione sociale (casi di lavoro sommerso)."
    },

    "S22-DL-21": {
      sintesi: "Quando il lavoratore non può lavorare per una causa che non gli è imputabile, il rapporto non si estingue ma resta sospeso. Le regole civilistiche dell'impossibilità sopravvenuta (artt. 1256 e 1463 c.c.) sono corrette dall'art. 2110 c.c.: conservazione del posto, anzianità e tutela economica per malattia, infortunio, gravidanza e puerperio.",
      punti: [
        ["Art. 2110 c.c.: diritto alla conservazione del posto per il periodo di comporto fissato dai contratti collettivi, durante il quale il lavoratore non può essere licenziato; i giorni di assenza contano nell'anzianità.", ["2110", "comporto", "anzianita"]],
        ["Tutela economica: retribuzione o indennità a carico dell'INPS o dell'INAIL secondo i casi; per gli impiegati dell'industria il trattamento di malattia è tutto a carico del datore (art. 6 R.D.L. 1825/1924).", ["indennita", "inail", "1825/1924"]],
        ["Malattia: sospende il rapporto solo se rende impossibile la prestazione, con incapacità concreta e attuale. Le ferie chieste durante la malattia interrompono il comporto (Cass. ord. 582/2024).", ["concreta", "attuale", "582/2024"]],
        ["Altre cause: richiamo alle armi (art. 2111 c.c.), con divieto di licenziamento fino a 3 mesi dalla ripresa; congedi per gravi motivi familiari e per formazione (L. 53/2000), senza retribuzione e con conservazione del posto; maternità, paternità e congedi parentali (D.Lgs. 151/2001).", ["2111", "3 mesi", "53/2000", "151/2001"]],
        ["Se l'impossibilità diventa definitiva (per esempio inidoneità permanente alla mansione), il rapporto non si risolve da solo: serve il licenziamento per giustificato motivo oggettivo, dopo aver verificato il repêchage, anche in mansioni inferiori.", ["definitiva", "licenziamento", "repechage"]]
      ],
      aggancio: "Il superamento del comporto è una causa autonoma di licenziamento, esclusa dalla procedura dell'art. 7 L. 604/1966 (art. 7, c. 6). Il consulente tiene il conteggio del comporto secondo il CCNL (secco o per sommatoria).",
      fonti: "Simone, Diritto del lavoro, pp. 171 (inidoneità), 195-197, 230, 239-240 e 242; artt. 2110-2111 c.c. (NORMA_Codice_civile_lavoro); artt. 1256 e 1463 c.c. su Normattiva."
    },

    "S22-DL-22": {
      sintesi: "Quando è il datore a non poter ricevere la prestazione, la regola di fondo è che il rischio dell'impresa resta a suo carico: se rifiuta la prestazione offerta senza un motivo legittimo è in mora (art. 1206 c.c.) e deve la retribuzione. Il rapporto può essere sospeso senza retribuzione solo per cause non imputabili, e il sostegno al reddito passa per la cassa integrazione o i fondi di solidarietà.",
      punti: [
        ["Regola civile e correttivo lavoristico: l'impossibilità sopravvenuta non estingue automaticamente il rapporto (Simone p. 230); se è temporanea, l'obbligato non risponde del ritardo finché dura (art. 1256, c. 2, c.c.). Esempi di forza maggiore: distruzione degli impianti per terremoto o inondazione.", ["non estingue", "temporanea", "forza maggiore"]],
        ["Se la causa rientra nella sfera organizzativa del datore (calo di ordini, scelte gestionali, mancanza di materie prime evitabile), il datore che rifiuta la prestazione resta obbligato a pagare la retribuzione (mora del creditore, art. 1206 c.c.).", ["sfera organizzativa", "mora del creditore", "1206"]],
        ["Strumento tipico: CIGO per eventi transitori non imputabili all'impresa o ai dipendenti, incluse le intemperie, e per situazioni temporanee di mercato; CIGS per crisi e riorganizzazione; FIS e fondi di solidarietà per i datori fuori dalla CIG.", ["cigo", "non imputabili", "cigs", "fis"]],
        ["Ordine dell'autorità (factum principis): per esempio la sospensione disposta dall'ITL o un provvedimento amministrativo. Attenzione: nella sospensione ispettiva per lavoro irregolare o sicurezza retribuzione e contributi restano dovuti (art. 14 D.Lgs. 81/2008).", ["autorita", "sospensione", "restano dovuti"]],
        ["Liquidazione giudiziale: i rapporti restano sospesi finché il curatore decide se subentrare o recedere; dopo 4 mesi senza subentro cessano dalla data di apertura (art. 189 D.Lgs. 14/2019); il lavoratore che si dimette nel periodo di sospensione ha giusta causa.", ["curatore", "4 mesi", "189", "giusta causa"]]
      ],
      aggancio: "Il consulente non sospende mai la retribuzione senza un titolo: prima la consultazione sindacale e la domanda di CIG o FIS, poi la sospensione. Collegamento con INPS-1 (CIGO), INPS-2 (CIGS) e S22-INPS-14 (fondi e FIS).",
      fonti: "Simone, Diritto del lavoro, pp. 230, 232-233 (art. 189 CCII); Simone, Legislazione sociale, pp. 360-362 (causali CIGO); P1/P1_Mappe_Poteri_ispettivi (sospensione ispettiva); artt. 1206 e 1256 c.c. su Normattiva."
    },

    "S22-DL-23": {
      sintesi: "Le dimissioni sono il recesso del lavoratore; la risoluzione consensuale è l'accordo tra le parti per chiudere il rapporto. Per entrambe vale, a pena di inefficacia, la procedura telematica dell'art. 26 D.Lgs. 151/2015, con 7 giorni per revocare. Le dimissioni richiedono il preavviso (art. 2118 c.c.), salvo la giusta causa (art. 2119 c.c.).",
      punti: [
        ["Procedura: moduli del Ministero del lavoro trasmessi al datore e all'ITL, anche tramite patronati, sindacati, enti bilaterali, commissioni di certificazione, consulenti del lavoro; entro 7 giorni il lavoratore può revocare con le stesse modalità.", ["moduli", "7 giorni", "revocare", "consulenti del lavoro"]],
        ["Esclusi dalla procedura: lavoratrice in gravidanza e genitori nei primi 3 anni del bambino (convalida dell'ITL, art. 55, c. 4, D.Lgs. 151/2001, anche in prova); domestici; lavoratori in prova; pubblico impiego; marittimi; atti fatti in sede protetta o davanti alle commissioni di certificazione.", ["convalida", "3 anni", "domestic", "sede protetta"]],
        ["Preavviso e giusta causa: chi si dimette deve il preavviso o la relativa indennità; non lo deve in caso di giusta causa, per esempio retribuzione non pagata, molestie, mobbing, demansionamento, trasferimento illegittimo (circ. INPS 163/2003). Con la giusta causa spetta la NASpI, che non spetta per le dimissioni semplici.", ["preavviso", "giusta causa", "163/2003", "naspi"]],
        ["Dimissioni per fatti concludenti (art. 26, c. 7-bis, da L. 203/2024): assenza ingiustificata oltre il termine del CCNL o, in mancanza, oltre 15 giorni; il datore lo comunica all'ITL, che può verificare. Nessun effetto se l'ITL accerta che la comunicazione non è vera o se il lavoratore prova di non aver potuto comunicare i motivi.", ["fatti concludenti", "15 giorni", "non e vera"]],
        ["Risoluzione consensuale: di norma niente NASpI, salvo tre casi: offerta di conciliazione delle tutele crescenti (art. 6 D.Lgs. 23/2015), rifiuto del trasferimento a più di 50 km dalla residenza o a 80 minuti o più con i mezzi pubblici, esito positivo della procedura dell'art. 7 L. 604/1966.", ["consensuale", "50 km", "80 minuti", "art. 7"]]
      ],
      aggancio: "Il consulente del lavoro può trasmettere i moduli, mentre agli altri professionisti della L. 12/1979 non è consentito (interpello 24/2016, riportato da Simone, Deontologia, p. 1235). Le dimissioni in bianco sono il fenomeno che la procedura telematica vuole impedire.",
      fonti: "Simone, Diritto del lavoro, pp. 232-234 e 241; Simone, Legislazione sociale, pp. 312-314 e 371 (NASpI); Simone, Deontologia, p. 1235; artt. 2118-2119 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "S22-DL-25": {
      sintesi: "Il giustificato motivo oggettivo comprende le ragioni inerenti all'attività produttiva, all'organizzazione del lavoro e al suo regolare funzionamento (art. 3 L. 604/1966). Il datore deve provare la ragione organizzativa effettiva, il nesso con il posto soppresso e l'impossibilità di ricollocare il lavoratore (repêchage). Nelle imprese con più di 15 dipendenti, per gli assunti prima del 7 marzo 2015, va prima esperita la procedura dell'art. 7 L. 604/1966 presso l'ITL.",
      punti: [
        ["Contenuto: soppressione del posto o del reparto per scelte effettive e non simulate, anche senza crisi (Cass. 24882/2017, 25201/2016): esternalizzazione, redistribuzione delle mansioni, innovazione tecnologica, migliore efficienza (Cass. 1514/2021). La scelta organizzativa è libera (art. 41 Cost.), il giudice controlla solo che sia reale.", ["soppressione", "simulate", "esternalizzazione", "41 cost"]],
        ["Rientrano nel motivo oggettivo anche fatti del lavoratore non colpevoli che incidono sull'organizzazione: perdita di un titolo abilitante, inidoneità fisica permanente.", ["titolo", "inidoneita"]],
        ["Repêchage: obbligo di creazione giurisprudenziale di verificare un'altra utilizzazione possibile del lavoratore prima di licenziarlo. Con 5 licenziamenti in 120 giorni si applica la disciplina dei licenziamenti collettivi (L. 223/1991).", ["repechage", "5 licenziamenti", "120 giorni"]],
        ["Procedura dell'art. 7 L. 604/1966: comunicazione all'ITL, e per conoscenza al lavoratore, con i motivi e le misure di ricollocazione; convocazione davanti alla commissione provinciale di conciliazione entro 7 giorni; conclusione entro 20 giorni; parti assistite anche da un consulente del lavoro; sospensione fino a 15 giorni per impedimento documentato del lavoratore.", ["itl", "7 giorni", "20 giorni", "consulente del lavoro"]],
        ["Esiti: la risoluzione consensuale raggiunta in sede di conciliazione dà diritto alla NASpI; se fallisce, il datore può licenziare e il licenziamento ha effetto dal giorno in cui è stata avviata la procedura. Esclusi: superamento del comporto, cambi d'appalto con riassunzione, fine cantiere nell'edilizia.", ["naspi", "effetto", "comporto", "cantiere"]]
      ],
      aggancio: "Per gli assunti dal 7 marzo 2015 (tutele crescenti) la procedura non si applica e il licenziamento per motivo oggettivo ingiustificato dà di regola solo l'indennità; per i vecchi assunti vale l'art. 18 St. lav. (vedi DL-X1). Il consulente documenta la riorganizzazione e la ricerca di posizioni alternative prima di intimare il recesso.",
      fonti: "Simone, Diritto del lavoro, pp. 238-242; art. 7 L. 604/1966; vedi DL-X1 per le tutele."
    },

    "S22-DL-30": {
      sintesi: "La vigilanza in materia di lavoro e legislazione sociale spetta principalmente all'INL, attraverso ITL e IAM (artt. 6-7 D.Lgs. 124/2004), con INPS e INAIL per i profili previdenziali e le ASL per la sicurezza. La logica del decreto è prima regolarizzare e poi sanzionare: la diffida è lo strumento centrale. Il consulente del lavoro è l'interlocutore qualificato degli ispettori.",
      punti: [
        ["Accesso e verbale di primo accesso (art. 13, c. 1): identificazione dei lavoratori presenti, attività svolte, dichiarazioni del datore o di chi lo assiste, richieste di documenti. Le dichiarazioni dei lavoratori si raccolgono senza la presenza del datore; il verbale fa piena prova solo per i fatti avvenuti davanti all'ispettore.", ["primo accesso", "dichiarazioni", "piena prova"]],
        ["Diffida precettiva (art. 13, c. 2): per gli illeciti amministrativi materialmente sanabili, 30 giorni per regolarizzare e 15 per pagare il minimo o un quarto della sanzione fissa; estingue il procedimento. Diffida amministrativa (art. 6 D.Lgs. 103/2024): per illeciti fino a 5.000 euro, la prima volta nel quinquennio, 20 giorni e nessuna sanzione.", ["30 giorni", "minimo", "un quarto", "103/2024"]],
        ["Diffida accertativa (art. 12): per i crediti retributivi certi, liquidi ed esigibili; entro 30 giorni conciliazione o ricorso al direttore (che sospende); altrimenti diventa titolo esecutivo, ma non giudicato (Cass. 20826/2025, riportata da Rausei).", ["accertativa", "titolo esecutivo", "20826/2025"]],
        ["Altri strumenti: prescrizione per le contravvenzioni (pagamento di un quarto del massimo dell'ammenda), disposizione per le irregolarità senza sanzione, sospensione dell'attività per lavoro irregolare o gravi violazioni di sicurezza, conciliazione monocratica.", ["prescrizione", "disposizione", "sospensione", "monocratica"]],
        ["Ruolo del consulente: assiste il datore durante l'accesso e nei rapporti con gli ispettori; può tenere il LUL e i documenti nel proprio studio, previa comunicazione all'ITL; valuta conciliazione o ricorso e i termini; cura la regolarizzazione.", ["assiste", "lul", "studio", "regolarizzazione"]]
      ],
      aggancio: "Per i ricorsi: art. 16 (direttore, 30 giorni), art. 17 (Comitato per i rapporti di lavoro, sulla qualificazione del rapporto), art. 18 L. 689/1981 (scritti difensivi). Collegamento con il D.L. 62/2026: le differenze rispetto al TEC si recuperano con diffida accertativa o disposizione.",
      fonti: "P1/P1_Mappe_Poteri_ispettivi; D.Lgs. 124/2004 (124_2004.pdf in libreria), artt. 12-13; Simone, Legislazione sociale, pp. 268 (tenuta del LUL presso il consulente) e 430-431 (accertamento e verbali)."
    },

    "S22-INPS-1": {
      sintesi: "Il sistema previdenziale pubblico è a ripartizione: i contributi dei lavoratori attivi pagano le pensioni in corso. L'INPS gestisce l'assicurazione generale obbligatoria (AGO) per i dipendenti privati (FPLD), le gestioni speciali degli autonomi (artigiani, commercianti, coltivatori diretti), la gestione separata e le gestioni ex INPDAP dei pubblici; i liberi professionisti ordinistici hanno le proprie Casse. Le due pensioni strutturali sono la vecchiaia e l'anticipata (riforma Fornero, art. 24 D.L. 201/2011).",
      punti: [
        ["Gestioni: FPLD per i dipendenti privati; tre gestioni speciali (coltivatori diretti e IAP, artigiani, commercianti); gestione separata per professionisti senza Cassa e collaboratori; Casse private per i professionisti iscritti agli albi.", ["fpld", "gestioni speciali", "gestione separata", "casse"]],
        ["Finanziamento: primo pilastro pubblico a ripartizione, secondo pilastro complementare a capitalizzazione. Contributi obbligatori, figurativi, volontari, da riscatto; prescrizione in 5 anni.", ["ripartizione", "capitalizzazione", "figurativi", "5 anni"]],
        ["Pensione di vecchiaia: 67 anni e almeno 20 anni di contributi fino al 31/12/2026; poi 67 anni e 1 mese dal 2027 e 67 anni e 3 mesi dal 2028 (art. 1, c. 185, L. 199/2025). Per i contributivi puri serve anche un importo almeno pari all'assegno sociale, salvo l'accesso a 71 anni con 5 anni di contributi effettivi.", ["67 anni", "20 anni", "199/2025", "assegno sociale", "71 anni"]],
        ["Pensione anticipata ordinaria, a qualsiasi età: 42 anni e 10 mesi di contributi per gli uomini, 41 anni e 10 mesi per le donne fino al 2026; un mese in più dal 2027 e tre in più dal 2028.", ["42 anni e 10 mesi", "41 anni e 10 mesi", "qualsiasi eta"]],
        ["Altre prestazioni: pensioni di invalidità e inabilità, pensione ai superstiti; il diritto alla pensione è imprescrittibile, i ratei si prescrivono in 5 anni. Per sommare i contributi di gestioni diverse: ricongiunzione, totalizzazione, cumulo gratuito.", ["inabilita", "superstiti", "imprescrittibile", "cumulo"]]
      ],
      aggancio: "Collegamento con l'automaticità delle prestazioni (art. 2116 c.c., INPS-23): per i dipendenti la pensione spetta anche se il datore non ha versato, nei limiti della prescrizione; dopo, resta la rendita vitalizia dell'art. 13 L. 1338/1962.",
      fonti: "Simone, Legislazione sociale, pp. 301-305 e 309-311."
    },

    "S22-INPS-2": {
      sintesi: "Accanto a vecchiaia e anticipata ordinaria esistono canali d'uscita con requisiti diversi: strutturali (anticipata contributiva, precoci, usuranti) o sperimentali e ormai a esaurimento (quota 103, opzione donna), oltre all'APE sociale. Il principio di cristallizzazione consente di usare un requisito maturato entro la scadenza anche dopo.",
      punti: [
        ["Pensione anticipata contributiva (solo contributivi puri): 64 anni, 20 anni di contributi, importo almeno pari a 3 volte l'assegno sociale (2,8 con un figlio, 2,6 con due o più figli; 3,2 volte dal 2030); fino all'età di vecchiaia importo massimo pari a 5 volte il minimo.", ["64 anni", "3 volte", "2,6", "3,2"]],
        ["Precoci: con almeno 12 mesi di lavoro effettivo prima dei 19 anni, pensione con 41 anni di contributi se disoccupati, caregiver, invalidi almeno al 74%, addetti a lavori gravosi o usuranti (L. 232/2016).", ["12 mesi", "19 anni", "41 anni", "74%"]],
        ["Quota 103 (62 anni e 41 di contributi) e opzione donna non sono state prorogate dalla L. 199/2025: restano solo per chi ha maturato i requisiti entro le scadenze (31/12/2025 per quota 103, 31/12/2024 per opzione donna), grazie alla cristallizzazione.", ["quota 103", "62 anni", "opzione donna", "cristallizzazione"]],
        ["APE sociale: indennità ponte fino alla vecchiaia, da 63 anni e 5 mesi, per disoccupati, caregiver, invalidi e gravosi; prorogata per chi matura i requisiti entro il 31/12/2026; non cumulabile con redditi da lavoro salvo l'autonomo occasionale fino a 5.000 euro.", ["ape sociale", "63 anni e 5 mesi", "5.000"]],
        ["Incentivo al posticipo: chi matura i requisiti dell'anticipata ordinaria entro il 31/12/2026 può restare al lavoro e ricevere in busta paga la quota di contributi a proprio carico (art. 1, c. 194, L. 199/2025). Gli usuranti sono esclusi dall'aumento dei requisiti per il 2027-2028.", ["posticipo", "busta paga", "194", "usuranti"]]
      ],
      aggancio: "Per il consulente l'incentivo al posticipo è un tema di busta paga: la quota IVS a carico del lavoratore non si versa e si eroga al dipendente. Verificare sempre i requisiti sull'estratto conto contributivo.",
      fonti: "Simone, Legislazione sociale, pp. 303-304 e 309-314."
    },

    "S22-INPS-3": {
      sintesi: "I sistemi di calcolo sono tre: retributivo (media delle ultime retribuzioni), contributivo (contributi versati in tutta la vita, introdotto dalla L. 335/1995) e misto. Quale si applica dipende dai contributi posseduti al 31/12/1995; dal 2012 tutti passano al contributivo per le anzianità successive (riforma Fornero).",
      punti: [
        ["Retributivo: retribuzione annua pensionabile per aliquota di rendimento per anni di contribuzione; l'importo annuo diviso 13 dà il rateo mensile.", ["retribuzione annua pensionabile", "rendimento", "13"]],
        ["Contributivo: ogni anno si accantona il 33% della retribuzione imponibile (24% per artigiani e commercianti), rivalutato con la media quinquennale del PIL nominale; il montante si moltiplica per il coefficiente di trasformazione legato all'età (5,608% a 67 anni nel 2025-2026, D.M. 20/11/2024).", ["33%", "24%", "pil", "montante", "5,608%"]],
        ["Chi rientra in quale sistema: nessun contributo al 31/12/1995, contributivo puro; meno di 18 anni, misto (retributivo fino al 1995, contributivo dopo); almeno 18 anni, retributivo fino al 2011 e contributivo dal 2012.", ["31/12/1995", "18 anni", "misto", "2012"]],
        ["Opzione per il contributivo: per chi ha meno di 18 anni al 1995, con almeno 15 anni di contributi di cui 5 dopo il 1995 (art. 1, c. 23, L. 335/1995); di regola irrevocabile.", ["opzione", "15 anni", "irrevocabile"]],
        ["Correttivi: adeguamento dei requisiti alla speranza di vita, con aumento massimo di 3 mesi per volta; coefficienti di trasformazione rivisti ogni due anni; dal 2025 i neoiscritti possono versare fino a 2 punti di aliquota in più (L. 207/2024).", ["speranza di vita", "3 mesi", "coefficienti", "2 punti"]]
      ],
      aggancio: "Nel contributivo la pensione dipende dai contributi effettivamente versati: per questo la regolarità contributiva e l'imponibile corretto in busta paga hanno effetto diretto sul futuro del lavoratore. Collegamento con il minimale settimanale per l'accredito (40% del trattamento minimo).",
      fonti: "Simone, Legislazione sociale, pp. 302-309."
    },

    "S22-INPS-4": {
      sintesi: "Prima di andare dal giudice, contro i provvedimenti dell'INPS si propone ricorso amministrativo ai Comitati dell'Istituto. Per le prestazioni dei dipendenti privati il ricorso al Comitato provinciale è condizione di procedibilità della domanda giudiziale (artt. 46-47 L. 88/1989). Le regole operative sono nel Regolamento dei ricorsi del 18/1/2023, illustrato dalla circolare INPS 48/2023.",
      punti: [
        ["Organi: Comitati provinciali e centrali per la gestione dei privati; Comitati di vigilanza delle gestioni autonome; Commissioni CISOA; Comitati dei fondi di solidarietà e del FIS; Comitato regionale per i rapporti di lavoro per i lavori usuranti.", ["comitati provinciali", "comitati di vigilanza", "cisoa", "fis"]],
        ["Termini per ricorrere: di regola 90 giorni dal provvedimento; se l'INPS non risponde alla domanda, il termine decorre dal 121° giorno (silenzio-rigetto a 120 giorni, art. 7 L. 533/1973). 30 giorni per i Comitati di vigilanza, per i fondi di solidarietà e il FIS e per il rigetto della CIGO.", ["90 giorni", "121", "120 giorni", "30 giorni"]],
        ["Decisione entro 90 giorni dalla ricezione; il ricorso si presenta solo in via telematica, direttamente o tramite patronato o intermediario (anche il consulente del lavoro).", ["telematica", "patronato", "intermediario"]],
        ["Il ricorso non sospende automaticamente il recupero dei contributi ed è inammissibile se è già stato notificato un avviso di addebito sullo stesso oggetto; contro l'avviso di addebito o la cartella si fa opposizione al giudice del lavoro entro 40 giorni (art. 24 D.Lgs. 46/1999).", ["non sospende", "avviso di addebito", "40 giorni"]],
        ["Rapporto con il giudizio: per i privati il decorso dei 90 giorni è condizione di procedibilità; per i Comitati di vigilanza il ricorso non è presupposto per agire in giudizio. Il processo previdenziale segue il rito del lavoro.", ["procedibilita", "rito del lavoro"]]
      ],
      aggancio: "Per i verbali ispettivi INPS vale anche il ricorso al Comitato per i rapporti di lavoro quando si contesta la qualificazione del rapporto (art. 17 D.Lgs. 124/2004). Il consulente valuta i termini, sempre brevi, e se conviene ricorrere o pagare.",
      fonti: "Circ. INPS 48/2023 (Regolamento dei ricorsi amministrativi, delibera CdA 8 del 18/1/2023), letta su ance.it; artt. 46-47 L. 88/1989; P1/P1_Mappe_Poteri_ispettivi (art. 17). Argomento non trattato dal Simone in libreria."
    },

    "S22-INPS-5": {
      sintesi: "UniEmens è il flusso telematico mensile con cui il datore di lavoro, o il consulente delegato, trasmette all'INPS i dati retributivi e contributivi individuali di ogni lavoratore (art. 44 D.L. 269/2003, conv. L. 326/2003). È la base del conto assicurativo del lavoratore e del calcolo dei contributi.",
      punti: [
        ["Contenuto: imponibile, contributi, eventi (malattia, maternità, CIG), conguagli di prestazioni anticipate, agevolazioni; dati per dipendenti e parasubordinati.", ["imponibile", "eventi", "conguagli", "parasubordinati"]],
        ["Termine: entro l'ultimo giorno del mese successivo a quello di competenza; per i dipendenti conta il mese della busta paga, per i collaboratori il mese in cui il compenso è pagato; se l'ultimo giorno è festivo, primo giorno lavorativo del mese dopo.", ["ultimo giorno", "mese successivo", "busta paga", "festivo"]],
        ["Principio di nettizzazione: i contributi si espongono e si versano al netto degli esoneri e degli sgravi spettanti, riducendo l'aliquota.", ["nettizzazione", "esoneri", "aliquota"]],
        ["Collegamento con il versamento: i contributi esposti nel flusso si pagano con l'F24 entro il 16 del mese successivo al periodo di paga, mentre il flusso si invia entro la fine dello stesso mese.", ["f24", "16", "fine"]],
        ["Funzioni: alimenta l'estratto conto contributivo e l'automaticità delle prestazioni, il DURC e i controlli sulle agevolazioni.", ["estratto conto", "durc", "agevolazioni"]]
      ],
      aggancio: "Errori tipici: imponibile non coincidente con il LUL, codice di agevolazione errato, eventi non esposti. Il consulente quadra ogni mese LUL, UniEmens e F24.",
      fonti: "Simone, Legislazione sociale, pp. 266 e 293 (UniEmens per i collaboratori)."
    },

    "S22-INPS-10": {
      sintesi: "La Comunicazione Unica (ComUnica) è la pratica telematica unica con cui chi avvia un'impresa assolve insieme gli adempimenti verso Registro delle imprese, Agenzia delle Entrate, INPS e INAIL (art. 9 D.L. 7/2007, conv. L. 40/2007). Si presenta all'ufficio del Registro delle imprese, che la smista agli enti.",
      punti: [
        ["Adempimenti assolti: dichiarazione di inizio attività IVA e codice fiscale o partita IVA; iscrizione al Registro delle imprese; denuncia di iscrizione all'INAIL; iscrizione all'INPS; iscrizione all'Albo delle imprese artigiane.", ["iva", "registro delle imprese", "inail", "albo delle imprese artigiane"]],
        ["Forma: fascicolo elettronico firmato digitalmente, solo per via telematica.", ["fascicolo elettronico", "firma", "telematica"]],
        ["Effetti: la ricevuta del Registro è titolo per avviare subito l'attività, se ci sono i presupposti di legge; gli enti comunicano poi i dati definitivi.", ["ricevuta", "avviare"]],
        ["Risposte degli enti: l'INAIL comunica codice ditta e PAT ed emette il certificato di assicurazione; l'INPS comunica la matricola e l'inquadramento aziendale (art. 49 L. 88/1989), che vale per tutti gli effetti previdenziali e anche per l'INAIL.", ["pat", "matricola", "inquadramento", "49"]],
        ["Inquadramento: di regola automatico sulla base dell'attività dichiarata (codice ATECO 2025 dal 1/4/2025); se le dichiarazioni erano inesatte, la variazione ha effetto retroattivo.", ["automatico", "ateco", "retroattivo"]]
      ],
      aggancio: "L'invio della ComUnica rientra tra gli adempimenti che il consulente del lavoro cura per il cliente (Simone, Deontologia, p. 1233). Per l'impresa con dipendenti seguono la comunicazione preventiva di assunzione e il primo UniEmens.",
      fonti: "Simone, Legislazione sociale, pp. 263-265; Simone, Deontologia, p. 1233."
    },

    "S22-INPS-11": {
      sintesi: "I contributi INPS si pagano con il modello F24, che consente anche la compensazione con crediti fiscali e previdenziali. Le scadenze cambiano secondo la categoria: per i dipendenti il giorno 16 del mese successivo al periodo di paga; per artigiani e commercianti rate fisse sul minimale e saldo e acconti con le imposte; per la gestione separata dipende da chi deve versare.",
      punti: [
        ["Dipendenti: il datore versa i contributi, anche la quota del lavoratore che trattiene in busta paga, entro il 16 del mese successivo; se il 16 è festivo o sabato, primo giorno lavorativo successivo.", ["16", "quota del lavoratore", "festivo"]],
        ["Compensazione in F24: il credito per indennità anticipate per conto dell'INPS (malattia, maternità) o un credito fiscale può compensare i contributi (art. 17 D.Lgs. 241/1997); chi compensa deve usare i servizi telematici dell'Agenzia delle Entrate.", ["compensazione", "241/1997", "telematici"]],
        ["Artigiani e commercianti: contributi sul minimale in quattro rate (per il 2026: 18 maggio, 20 agosto, 16 novembre, 16 febbraio 2027); contributi sul reddito eccedente il minimale con i termini delle imposte sui redditi, come saldo e acconti; aliquota IVS 2026 del 24%.", ["minimale", "quattro rate", "eccedente", "24%"]],
        ["Gestione separata: per i collaboratori versa il committente entro il 16 del mese successivo al pagamento del compenso (2/3 a suo carico, 1/3 del collaboratore); i professionisti senza Cassa versano da sé con le scadenze delle imposte.", ["committente", "2/3", "1/3", "professionisti"]],
        ["Mancato o tardivo pagamento: sanzioni civili; le ritenute previdenziali trattenute e non versate oltre la soglia annua sono reato (art. 2, c. 1-bis, D.L. 463/1983), con causa di non punibilità se si paga entro 3 mesi dalla contestazione.", ["sanzioni civili", "ritenute", "3 mesi"]]
      ],
      aggancio: "Le date esatte dell'anno si prendono dalla circolare INPS annuale (per il 2026 circ. INPS 14/2026). Collegamento con S22-TRIB-12 (compensazione in F24) e con S22-PPP-28 sull'omesso versamento delle ritenute.",
      fonti: "Simone, Legislazione sociale, pp. 266, 288-289 e 293; soglia e non punibilità delle ritenute non versate: Simone, Legislazione sociale (già verificato nella risposta PPP sulle ritenute)."
    },

    "S22-INPS-13": {
      sintesi: "L'assegno unico e universale (AUU, D.Lgs. 230/2021) è il sostegno economico mensile per i figli a carico, pagato direttamente dall'INPS su domanda. Ha sostituito assegni al nucleo familiare per chi ha figli, detrazioni per figli under 21 e altri bonus; l'importo dipende dall'ISEE.",
      punti: [
        ["Per chi: ogni figlio minorenne, e i nuovi nati dal settimo mese di gravidanza; i figli maggiorenni fino a 21 anni se studiano, fanno tirocinio o lavorano con reddito sotto 8.000 euro, sono disoccupati iscritti ai servizi per l'impiego o fanno servizio civile; i figli con disabilità senza limiti di età.", ["settimo mese", "21", "8.000", "disabilita"]],
        ["Requisiti del richiedente: cittadinanza UE o permesso di lungo periodo o titoli equivalenti; pagare l'imposta sul reddito in Italia; residenza e domicilio in Italia; residenza da almeno 2 anni oppure contratto di lavoro di almeno 6 mesi.", ["lungo periodo", "residenza", "2 anni", "6 mesi"]],
        ["Domanda telematica all'INPS dal 1° gennaio, per il periodo da marzo a febbraio; la domanda accolta prosegue d'ufficio negli anni successivi, salvo le variazioni; senza ISEE spetta l'importo minimo; DSU entro il 30 giugno per avere gli arretrati da marzo.", ["marzo", "febbraio", "d'ufficio", "importo minimo", "30 giugno"]],
        ["Maggiorazioni: +50% per i figli sotto un anno; per i nuclei con 3 o più figli tra 1 e 3 anni; maggiorazioni per i figli dal terzo in poi, per i figli disabili, per madri sotto i 21 anni, se entrambi i genitori lavorano, per i nuclei vedovili; forfait per 4 o più figli.", ["50%", "entrambi i genitori", "4 o piu figli"]],
        ["Pagamento: direttamente dall'INPS su IBAN o in contanti alla posta, diviso a metà tra i genitori o al genitore affidatario. Non passa in busta paga, a differenza dell'ANF, che resta solo per i nuclei senza figli e che il datore anticipa.", ["iban", "affidatario", "busta paga", "anf"]]
      ],
      aggancio: "In busta paga resta l'ANF solo per i nuclei senza figli (coniugi, fratelli, sorelle, nipoti), anticipato dal datore e conguagliato con l'INPS. Nella CU la detrazione per figli a carico resta solo per i figli dai 21 ai 29 anni e per i figli disabili dai 30 (vedi TRIB-4).",
      fonti: "Simone, Legislazione sociale, pp. 330-333."
    },

    "S22-INPS-14": {
      sintesi: "Per i datori di lavoro che non rientrano nella cassa integrazione ordinaria, la tutela in caso di sospensione o riduzione dell'attività è affidata ai fondi di solidarietà (D.Lgs. 148/2015, artt. 26 ss.): fondi bilaterali di settore istituiti dalla contrattazione collettiva, fondi alternativi (artigianato e somministrazione) e, in via residuale, il Fondo di integrazione salariale (FIS) presso l'INPS. Dal 2022 l'obbligo riguarda i datori con almeno un dipendente.",
      punti: [
        ["Fondi bilaterali: istituiti dai contratti collettivi presso l'INPS; obbligatori per i datori fuori dalla CIGO con almeno un dipendente; pagano l'assegno di integrazione salariale per le stesse causali di CIGO e CIGS.", ["contratti collettivi", "almeno un dipendente", "assegno di integrazione salariale"]],
        ["Funzioni aggiuntive: prestazioni integrative della NASpI o della cassa, assegni straordinari per l'esodo di chi raggiunge la pensione entro 5 anni, formazione e riqualificazione, staffetta generazionale con contributi per chi va in pensione entro 3 anni e assunzione di giovani fino a 35 anni.", ["integrative", "esodo", "5 anni", "staffetta"]],
        ["Finanziamento: aliquota fissata dal regolamento del fondo, per 2/3 a carico del datore e per 1/3 del lavoratore (art. 33 D.Lgs. 148/2015), più il contributo straordinario per l'esodo.", ["2/3", "1/3", "33"]],
        ["Fondi alternativi: artigianato e somministrazione, non istituiti presso l'INPS, con prestazioni di misura e durata pari all'assegno di integrazione salariale.", ["artigianato", "somministrazione", "non istituiti"]],
        ["FIS (art. 29): per i datori con almeno un dipendente, fuori dalla CIGO e senza un fondo; assegno per 13 settimane in un biennio mobile fino a 5 dipendenti, 26 settimane oltre 5; contributo ordinario dello 0,50% (0,30% per i piccoli che non lo usano da 24 mesi) o dello 0,80%, più il 4% della retribuzione persa se lo si usa; domanda sulla piattaforma OMNIA IS.", ["13 settimane", "26 settimane", "0,50%", "0,80%", "4%"]]
      ],
      aggancio: "Per gli studi professionali, compreso quello del consulente, c'è il Fondo di solidarietà bilaterale per le attività professionali (D.M. 21/5/2024). Il ricorso contro il rigetto dell'assegno del FIS va ai Comitati del fondo entro 30 giorni (circ. INPS 48/2023). Collegamento con INPS-4 e INPS-5.",
      fonti: "Simone, Legislazione sociale, pp. 367-371; circ. INPS 48/2023 (termine di ricorso)."
    },

    "S22-INAIL-5": {
      sintesi: "Contro i provvedimenti dell'INAIL in materia di tariffa dei premi il datore può proporre ricorso amministrativo (artt. 27-28 delle Modalità di applicazione delle tariffe, D.M. 27/2/2019, e D.P.R. 314/2001). Dal 12 gennaio 2025, per effetto dell'art. 2 L. 203/2024 (Collegato lavoro), i ricorsi non vanno più al Presidente o al Consiglio di amministrazione ma alle Direzioni regionali (circ. INAIL 4/2025).",
      punti: [
        ["Oggetto: classificazione delle lavorazioni, oscillazione del tasso medio per prevenzione, decorrenza dell'inquadramento, inquadramento diretto dei datori non classificati dall'INPS: competente la Direzione regionale (a Trento e Bolzano la Direzione provinciale, ad Aosta la sede regionale).", ["classificazione", "prevenzione", "decorrenza", "direzione regionale"]],
        ["Oscillazione del tasso per andamento infortunistico: il ricorso resta alla sede territoriale che ha emesso il provvedimento.", ["andamento infortunistico", "sede territoriale"]],
        ["Termini: ricorso solo telematico entro 30 giorni dalla ricezione del provvedimento; decisione entro 120 giorni (sede territoriale) o 180 giorni (Direzione regionale); se la decisione non arriva c'è silenzio-rigetto e non ci sono altri gradi amministrativi.", ["30 giorni", "120 giorni", "180 giorni", "silenzio-rigetto"]],
        ["Effetto sospensivo: il ricorso tempestivo sospende il provvedimento impugnato; intanto il datore paga i premi con il tasso in vigore prima del provvedimento, salvo conguaglio con interessi (art. 45, c. 2, D.P.R. 1124/1965).", ["sospensivo", "tasso in vigore", "conguaglio"]],
        ["Inammissibili: i ricorsi contro il verbale unico di accertamento invece che contro il provvedimento di variazione o rettifica, e quelli su imponibile, obbligo assicurativo o rapporti di lavoro che non riguardano anche classificazione o inquadramento. Resta sempre possibile l'annullamento in autotutela.", ["verbale unico", "imponibile", "autotutela"]]
      ],
      aggancio: "I ricorsi sulle prestazioni (indennità, rendite) seguono un'altra disciplina, che qui non si tratta. Il consulente controlla ogni anno la voce di tariffa e il tasso comunicati con l'autoliquidazione: l'errore di classificazione pesa su tutti i premi futuri.",
      fonti: "Circ. INAIL 4/2025 (29/1/2025), testo riprodotto da studiocerbone.com (fonte secondaria; verificare su inail.it); art. 2 L. 203/2024; artt. 27-28 Modalità di applicazione delle tariffe (D.M. 27/2/2019). Argomento non trattato dal Simone in libreria."
    },

    "S22-DEO-14": {
      sintesi: "L'art. 20 del Codice deontologico regola il consulente che partecipa a società commerciali o collabora con imprese che offrono servizi nel settore dell'amministrazione del personale, cioè i centri di elaborazione dati e i servizi delle associazioni di categoria dell'art. 1, c. 4 e 5, L. 12/1979. La regola di fondo: il consulente porta con sé il Codice anche dentro la società e ne risponde.",
      punti: [
        ["Il consulente amministratore di una società commerciale che eroga servizi nel settore dell'art. 1, c. 4 e 5, L. 12/1979 deve svolgere le sue funzioni nel rispetto del Codice (c. 1).", ["amministratore", "art. 1", "rispetto del codice"]],
        ["Se la società compie atti rilevanti per il Codice, ne risponde il consulente che la amministra, salvo funzioni attribuite in concreto a un altro amministratore o fatti dolosi o esclusivi di terzi (c. 2).", ["ne risponde", "altro amministratore", "terzi"]],
        ["Chi amministra o assiste queste imprese è responsabile se, conoscendo fatti rilevanti, non agisce per impedirli o attenuarne le conseguenze (c. 3); risponde anche il socio che ha autorizzato o concorso alla decisione (c. 4, con rinvio agli artt. 2364, 2468 e 2479 c.c.).", ["impedirli", "socio", "2364", "2479"]],
        ["Deve assicurarsi che l'impresa comunichi il conferimento dell'incarico al Consiglio provinciale dell'Ordine e all'Ispettorato del lavoro competenti (c. 5).", ["comunichi", "consiglio provinciale", "ispettorato"]],
        ["Le stesse regole valgono per chi opera in una STP; il socio di STP che altera la maggioranza dei due terzi dei soci professionisti e non la ripristina entro 6 mesi risponde disciplinarmente (c. 6-7, art. 10, c. 4, lett. b, L. 183/2011).", ["stp", "due terzi", "6 mesi"]]
      ],
      aggancio: "Collegamento con DEO-X1: i CED possono fare solo calcolo e stampa e devono essere assistiti da un professionista abilitato. Con l'art. 35, c. 6, anche la pubblicità di queste società deve rispettare il Codice: il consulente non può farsi pubblicità attraverso una società commerciale per aggirare le regole.",
      fonti: "Simone, Deontologia (testo del Codice deontologico, delibera CNO 101/2021 modificata dalla 49/2024), pp. 1250-1251 (art. 20) e 1254 (art. 35, c. 6); Simone, Deontologia, p. 1221 (art. 1, c. 4-5, L. 12/1979)."
    },

    "S22-DEO-15": {
      sintesi: "L'art. 36 del Codice deontologico riguarda il consulente iscritto all'Albo che lavora come dipendente, per esempio in un'azienda, in un'associazione di categoria o in uno studio. Il rapporto di subordinazione non lo esonera dal Codice: se gli si chiede una condotta contraria, deve dissentire per iscritto e prima.",
      punti: [
        ["Comma 1: il consulente dipendente a cui si chiede una condotta non conforme al Codice deve comunicare preventivamente e per iscritto il proprio dissenso a chi gli è gerarchicamente superiore.", ["dipendente", "preventivamente", "per iscritto", "dissenso"]],
        ["Comma 2: è un'aggravante la condotta del consulente che ha preteso dai colleghi suoi subordinati comportamenti contrari al Codice.", ["aggravante", "subordinati"]],
        ["Coordinamento con l'art. 4: dignità e decoro valgono anche nell'attività svolta nell'ambito del rapporto di lavoro subordinato.", ["art. 4", "dignita", "decoro"]],
        ["Coordinamento con l'art. 14: la concorrenza sleale si valuta fatto salvo l'art. 36, cioè tenendo conto della posizione del dipendente.", ["art. 14", "concorrenza sleale"]],
        ["Limiti esterni: l'iscrizione all'Albo è incompatibile con il lavoro alle dipendenze di enti pubblici, patronati e sindacati dei lavoratori (art. 4 L. 12/1979); il consulente dipendente di un'associazione di categoria può organizzare i servizi per le piccole imprese associate.", ["incompatibile", "enti pubblici", "patronati", "associazione di categoria"]]
      ],
      aggancio: "Il dipendente non può essere accreditato come asseveratore Asse.Co., che richiede di non svolgere lavoro dipendente (Reg. Asse.Co., art. 1, c. 4), né far parte del Consiglio di disciplina territoriale.",
      fonti: "Simone, Deontologia (testo del Codice deontologico, delibera CNO 101/2021 modificata dalla 49/2024), pp. 1247 (art. 4), 1249 (art. 14) e 1254 (art. 36); Simone, Deontologia, pp. 1221, 1227, 1239 e 1245."
    },

    "S22-TRIB-3": {
      sintesi: "L'IRPEF è l'imposta personale e progressiva sul reddito delle persone fisiche (TUIR, D.P.R. 917/1986), espressione della capacità contributiva e della progressività dell'art. 53 Cost. Il presupposto è il possesso di redditi in denaro o in natura delle sei categorie dell'art. 6; la base imponibile è il reddito complessivo al netto degli oneri deducibili.",
      punti: [
        ["Presupposto (art. 1): possesso di redditi fondiari, di capitale, di lavoro dipendente, di lavoro autonomo, d'impresa e diversi (art. 6).", ["possesso", "art. 6", "diversi"]],
        ["Soggetti passivi (art. 2): persone fisiche residenti e non residenti. Residente è chi per la maggior parte del periodo d'imposta ha in Italia la residenza civilistica, il domicilio (luogo delle relazioni personali e familiari) o vi è presente; si presume residente, salvo prova contraria, l'iscritto all'anagrafe. Il residente è tassato su tutti i redditi ovunque prodotti, il non residente solo su quelli prodotti in Italia.", ["residenti", "maggior parte", "domicilio", "anagrafe"]],
        ["Base imponibile (art. 3): reddito complessivo al netto degli oneri deducibili (art. 10). Restano fuori i redditi esenti, quelli soggetti a ritenuta a titolo d'imposta o a imposta sostitutiva e quelli a tassazione separata (art. 17).", ["reddito complessivo", "oneri deducibili", "esenti", "tassazione separata"]],
        ["Calcolo: imposta lorda per scaglioni (art. 11: nel 2026 23% fino a 28.000, 33% fino a 50.000, 43% oltre; nel 2025 la seconda aliquota era 35%), meno le detrazioni (artt. 12-16: carichi di famiglia, lavoro, oneri), meno crediti d'imposta e ritenute d'acconto.", ["23%", "33%", "43%", "detrazioni", "ritenute"]],
        ["Periodo d'imposta: anno solare; obbligazione autonoma per ogni anno. Riscossione con ritenute del sostituto, acconti e saldo in dichiarazione; sull'IRPEF si calcolano le addizionali regionale e comunale.", ["anno solare", "sostituto", "acconti", "addizionali"]]
      ],
      aggancio: "Per il consulente l'IRPEF è il cuore del cedolino e del conguaglio (TRIB-11) e della CU (seconda prova). Attenzione alla regola dell'anno: CU 2026 sui redditi 2025 con aliquota del 35%; cedolini 2026 con il 33%.",
      fonti: "Artt. 1-3, 6, 11 TUIR (917_1986_TUIR (testo vigente al 4/10/2026)); P2_00_PARAMETRI v5, § 1."
    },

    "S22-TRIB-6": {
      sintesi: "Le addizionali regionale e comunale all'IRPEF sono tributi propri derivati che si applicano sulla stessa base dell'IRPEF: regionale art. 50 D.Lgs. 446/1997 (aliquote art. 6 D.Lgs. 68/2011), comunale art. 1 D.Lgs. 360/1998. Sono dovute solo se per lo stesso anno è dovuta l'IRPEF, cioè se l'imposta netta è positiva.",
      punti: [
        ["Base: reddito complessivo al netto degli oneri deducibili; per il sostituto, i redditi di lavoro dipendente e assimilati della CU, esclusi quelli a tassazione separata, a ritenuta a titolo d'imposta o a imposta sostitutiva.", ["reddito complessivo", "oneri deducibili", "tassazione separata"]],
        ["Ente: Regione e Comune del domicilio fiscale al 1° gennaio dell'anno di riferimento.", ["domicilio fiscale", "1° gennaio"]],
        ["Aliquote: regionale di base 1,23%, maggiorabile dalla Regione fino a 2,1 punti e articolabile per scaglioni (Marche: 1,23% fino a 15.000, 1,53% fino a 28.000, 1,70% fino a 50.000, 1,73% oltre); comunale fino allo 0,8%, con eventuale soglia di esenzione deliberata dal Comune.", ["1,23%", "2,1 punti", "1,73%", "0,8%", "soglia di esenzione"]],
        ["Versamento tramite sostituto: regionale e saldo comunale si calcolano al conguaglio e si trattengono nell'anno successivo in massimo 11 rate (gennaio-novembre); l'acconto comunale è il 30% dell'addizionale sul reddito dell'anno precedente, in massimo 9 rate (marzo-novembre). Alla cessazione del rapporto si trattengono in un'unica soluzione.", ["11 rate", "30%", "9 rate", "unica soluzione"]],
        ["F24 del sostituto: codici tributo 3802 (regionale), 3847 (acconto comunale), 3848 (saldo comunale). Chi presenta la dichiarazione le versa con saldo e acconti.", ["3802", "3847", "3848"]]
      ],
      aggancio: "Esercizio tipico della seconda prova: addizionale regionale Marche calcolata a fasce. In CU i punti 22, 26, 27 e 29. Aliquote dei singoli comuni: dato di traccia.",
      fonti: "P2_00_PARAMETRI v5, § 7 (MEF, scheda addizionale regionale Marche; istruzioni CU 2026; Simone, Diritto tributario, pp. 687 e 693)."
    },

    "S22-TRIB-8": {
      sintesi: "Il reddito di lavoro autonomo professionale (art. 54 TUIR, riformato dal D.Lgs. 192/2024) è la differenza tra tutte le somme percepite nel periodo d'imposta in relazione all'attività e le spese sostenute nello stesso periodo: vale il principio di cassa e quello di onnicomprensività. Le regole sulla deducibilità delle spese sono negli artt. 54-bis-54-octies.",
      punti: [
        ["Principio di cassa e onnicomprensività (art. 54, c. 1): conta ogni somma o valore percepito a qualunque titolo; le somme pagate da un sostituto d'imposta e incassate l'anno dopo si imputano all'anno in cui il sostituto doveva operare la ritenuta.", ["cassa", "qualunque titolo", "sostituto"]],
        ["Non sono reddito (c. 2): i contributi previdenziali di legge a carico del committente (per il consulente, il contributo integrativo ENPACL del 4%) e i rimborsi di spese per l'incarico addebitati analiticamente; dal 2025 i rimborsi di vitto, alloggio, viaggio e taxi in Italia restano esclusi solo se pagati con mezzi tracciabili (c. 2-bis).", ["contributi previdenziali", "4%", "analiticamente", "tracciabili"]],
        ["Beni strumentali (art. 54-quinquies): ammortamento con i coefficienti ministeriali, ridotti alla metà il primo anno; deduzione integrale per beni fino a 516,40 euro; beni e immobili a uso promiscuo al 50%.", ["ammortamento", "516,40", "promiscu", "50"]],
        ["Altre spese (art. 54-septies): alberghi e ristoranti al 75% e comunque entro il 2% dei compensi; rappresentanza entro l'1% dei compensi e solo con pagamenti tracciabili; formazione, master e convegni fino a 10.000 euro l'anno; non deducibili i compensi a coniuge, figli minori o inabili e ascendenti.", ["75%", "2%", "1%", "10.000", "coniuge"]],
        ["Ritenuta d'acconto del 20% sull'onorario se il committente è sostituto d'imposta (art. 25 D.P.R. 600/1973); alternativa per chi ha i requisiti: regime forfettario con coefficiente di redditività e imposta sostitutiva (TRIB-13).", ["20%", "sostituto", "forfettario"]]
      ],
      aggancio: "È il reddito del consulente del lavoro libero professionista: collegamento con la fattura del CdL (seconda prova), dove contributo integrativo, IVA, ritenuta e rimborsi spese hanno trattamenti diversi.",
      fonti: "Artt. 54, 54-ter, 54-quinquies, 54-septies TUIR (917_1986_TUIR (testo vigente al 4/10/2026)); P2_00_PARAMETRI v5, § 11 (ritenuta e ENPACL)."
    },

    "S22-TRIB-10": {
      sintesi: "La dichiarazione dei redditi è l'atto con cui il contribuente comunica all'Amministrazione redditi, imponibile e imposta per un periodo d'imposta (D.P.R. 600/1973 e D.P.R. 322/1998). Il modello Redditi (ex Unico) è obbligatorio per tutte le persone fisiche che hanno conseguito redditi, salvo i casi di esonero; chi ha solo redditi di lavoro dipendente, assimilati o pensione può usare il 730.",
      punti: [
        ["Obbligati: tutti i soggetti passivi che nel periodo d'imposta hanno conseguito redditi; gli obbligati alla tenuta delle scritture contabili anche in mancanza di reddito (società, imprenditori, professionisti).", ["soggetti passivi", "scritture contabili", "mancanza di reddito"]],
        ["Esonerati (art. 1, c. 4, D.P.R. 600/1973): solo persone fisiche senza scritture contabili con specifici requisiti di reddito, per esempio chi ha solo redditi di lavoro dipendente da un unico sostituto che ha fatto il conguaglio; possono comunque presentarla per far valere un credito.", ["esonerati", "unico sostituto", "credito"]],
        ["Termini e forma: modello Redditi PF per via telematica dal 30 aprile al 31 ottobre dell'anno successivo, direttamente o tramite intermediari abilitati; cartaceo solo per chi non può usare il 730 (senza datore di lavoro né pensione), dal 30 aprile al 30 giugno.", ["31 ottobre", "telematica", "intermediari", "30 giugno"]],
        ["Modello 730: per dipendenti, pensionati e assimilati, tramite sostituto, CAF o professionista abilitato (anche il consulente del lavoro), entro il 30 settembre; visto di conformità; rimborso o trattenuta in busta paga.", ["730", "caf", "consulente del lavoro", "30 settembre"]],
        ["Versamenti: saldo e primo acconto entro il 30 giugno (o 30 luglio con lo 0,40%), secondo acconto entro novembre. Dichiarazione integrativa entro i termini dell'accertamento; non è omessa quella presentata entro 90 giorni dalla scadenza, salvo sanzioni.", ["30 giugno", "0,40%", "novembre", "integrativa", "90 giorni"]]
      ],
      aggancio: "Dichiarazioni collegate per il sostituto d'imposta: CU e 770 (TRIB-15). Le società di persone presentano il modello Redditi SP e i redditi si imputano ai soci per trasparenza.",
      fonti: "Simone, Diritto tributario, pp. 482-488."
    },

    "S22-TRIB-12": {
      sintesi: "Con il modello F24 il contribuente può compensare crediti e debiti tributari e contributivi (art. 17 D.Lgs. 241/1997). La compensazione è verticale se il credito si usa per un debito della stessa imposta, orizzontale se si usa per tributi o contributi diversi. L'orizzontale ha limiti e controlli più stretti.",
      punti: [
        ["Verticale: credito e debito della stessa imposta (per esempio credito IVA contro IVA). Orizzontale: imposta diversa o contributi (credito IVA contro IRPEF o contributi INPS); è possibile anche tra enti impositori diversi.", ["verticale", "orizzontale", "enti"]],
        ["Limite annuo: 2.000.000 di euro di crediti compensabili (art. 1, c. 72, L. 234/2021). Obbligo di usare i servizi telematici dell'Agenzia delle Entrate per presentare F24 con compensazioni.", ["2.000.000", "234/2021", "telematici"]],
        ["Controlli: per i crediti IVA oltre 5.000 euro annui serve il visto di conformità (art. 10 D.L. 78/2009); i crediti IVA, delle imposte sui redditi, delle sostitutive e dell'IRAP oltre 5.000 euro si compensano dal decimo giorno successivo alla presentazione della dichiarazione da cui emergono (art. 17, c. 1, D.Lgs. 241/1997).", ["5.000", "visto di conformita", "decimo giorno"]],
        ["Blocco: chi ha iscrizioni a ruolo o carichi affidati all'agente della riscossione per imposte erariali oltre 50.000 euro, scaduti e non sospesi, non può compensare in F24, salvo alcuni crediti (art. 37, c. 49-quinquies, D.L. 223/2006, testo vigente).", ["50.000", "ruolo", "compensare"]],
        ["Datore di lavoro: se le indennità anticipate per conto dell'INPS (malattia, maternità) superano i contributi dovuti, il credito si recupera compensandolo in F24 con i tributi. L'uso di crediti non spettanti o inesistenti è sanzionato e, oltre certe soglie, è reato (art. 10-quater D.Lgs. 74/2000).", ["indennita anticipate", "inps", "inesistenti", "10-quater"]]
      ],
      aggancio: "Collegamento con S22-INPS-11. Per il consulente: prima di compensare verificare l'esistenza del credito, il visto, i termini e l'assenza di ruoli scaduti oltre soglia.",
      fonti: "Simone, Legislazione sociale, p. 266 (art. 17 D.Lgs. 241/1997); Simone, Diritto tributario, pp. 500 e 545 (crediti non spettanti, art. 10-quater); limite di 2 milioni (art. 34 L. 388/2000, elevato dall'art. 1, c. 72, L. 234/2021), visto e decimo giorno (art. 10 D.L. 78/2009; art. 17, c. 1, D.Lgs. 241/1997), blocco per ruoli oltre 50.000 euro (art. 37, c. 49-quinquies, D.L. 223/2006): testi vigenti letti su Normattiva il 7/11/2026."
    },

    "S22-TRIB-13": {
      sintesi: "Alcuni redditi di lavoro dipendente maturati in più anni o legati alla cessazione del rapporto non si sommano al reddito dell'anno in cui sono pagati ma si tassano separatamente (art. 17 TUIR), con un'aliquota media che evita l'effetto della progressività. Oltre al TFR (TRIB-14), riguarda soprattutto gli arretrati e le altre indennità di fine rapporto.",
      punti: [
        ["Altre indennità di cessazione (lett. a): indennità di preavviso, somme per il patto di non concorrenza (art. 2125 c.c.), incentivi all'esodo, somme da sentenze o transazioni sulla risoluzione del rapporto, al netto delle spese legali.", ["preavviso", "non concorrenza", "transazioni"]],
        ["Arretrati (lett. b): emolumenti per anni precedenti pagati in base a leggi, contratti collettivi, sentenze o atti amministrativi sopravvenuti, o per altre cause non dipendenti dalla volontà delle parti.", ["arretrati", "anni precedenti", "volonta delle parti"]],
        ["Aliquota (art. 21): quella corrispondente alla metà del reddito complessivo netto del biennio precedente l'anno di percezione; se manca reddito in un anno si usa l'altro, se in entrambi la prima aliquota. Per gli arretrati l'imposta si riduce delle detrazioni non fruite negli anni di riferimento (art. 21, c. 4).", ["meta", "biennio", "prima aliquota", "detrazioni"]],
        ["Altre indennità connesse alla cessazione (art. 19, c. 2): tassate con l'aliquota media del TFR; le indennità di fine collaborazione coordinata e continuativa sono a tassazione separata se il diritto risulta da atto di data certa anteriore all'inizio del rapporto (art. 17, lett. c).", ["aliquota media", "data certa"]],
        ["Riliquidazione: per TFR, altre indennità e arretrati gli uffici riliquidano l'imposta o la fanno concorrere al reddito complessivo dell'anno se è più favorevole (art. 17, c. 3). Queste somme non entrano nella base delle addizionali.", ["riliquid", "piu favorevole", "addizionali"]]
      ],
      aggancio: "In CU gli arretrati vanno nei punti della tassazione separata e non nei punti 1-2. In busta paga si tassano a parte, con l'aliquota dell'art. 21 calcolata dal sostituto.",
      fonti: "Artt. 17, 19, 21 TUIR (917_1986_TUIR (testo vigente al 4/10/2026)); P2_00_PARAMETRI v5, § 7 (base delle addizionali)."
    },

    "S22-TRIB-14": {
      sintesi: "Il trattamento di fine rapporto è una retribuzione differita che il lavoratore subordinato riceve alla cessazione del rapporto (art. 2120 c.c.). Si forma anno per anno accantonando una quota della retribuzione, che si rivaluta; fiscalmente è a tassazione separata con aliquota media (artt. 17 e 19 TUIR).",
      punti: [
        ["Formazione: quota annua pari alla retribuzione annua utile divisa per 13,5, meno il contributo dello 0,50% (L. 297/1982); rivalutazione al 31 dicembre dell'1,5% fisso più il 75% dell'aumento dell'indice ISTAT.", ["13,5", "0,50%", "1,5%", "75%"]],
        ["Anticipazione: dopo almeno 8 anni di servizio, fino al 70% del TFR maturato, per spese sanitarie straordinarie, prima casa per sé o i figli, congedi parentali e formativi (art. 2120, c. 6-11, c.c.).", ["8 anni", "70%", "prima casa"]],
        ["Destinazione: il lavoratore sceglie entro 6 mesi se lasciarlo in azienda o versarlo alla previdenza complementare; in caso di silenzio si va al fondo (D.Lgs. 252/2005; nuovo silenzio-assenso dal 1/7/2026, L. 199/2025). Se resta in azienda e il datore supera la soglia dimensionale, le quote vanno al Fondo di Tesoreria INPS: 60 addetti nel 2026-2027, 50 nel 2028-2031, 40 dal 2032.", ["6 mesi", "previdenza complementare", "silenzio", "tesoreria", "60 addetti"]],
        ["Tassazione (art. 19 TUIR): sul TFR al netto delle rivalutazioni già tassate si applica l'aliquota corrispondente al reddito di riferimento (TFR diviso gli anni di servizio, per 12); poi l'Agenzia riliquida con l'aliquota media dei 5 anni precedenti. Sulle rivalutazioni annue si paga un'imposta sostitutiva del 17%.", ["reddito di riferimento", "12", "5 anni", "17%"]],
        ["Tutela: in caso di insolvenza del datore il TFR è pagato dal Fondo di garanzia INPS (INPS-7).", ["fondo di garanzia", "insolvenza"]]
      ],
      aggancio: "Ragioneria: accantonamento annuo in conto economico (B9c) e debito per TFR nel passivo (voce C), al netto delle quote versate a fondi e Tesoreria (RAG del costo del personale). In CU i punti 801-813.",
      fonti: "Art. 2120 c.c.; P2_00_PARAMETRI v5, § 10; Simone, Legislazione sociale, pp. 384-396; artt. 17 e 19 TUIR (917_1986_TUIR (testo vigente al 4/10/2026))."
    },

    "S22-TRIB-17": {
      sintesi: "I fringe benefit sono i compensi in natura: beni e servizi che il datore dà al dipendente o ai suoi familiari (art. 51, c. 3, TUIR). Concorrono al reddito al valore normale, salvo i valori convenzionali previsti per auto, prestiti e fabbricati (c. 4). Sono esenti sotto una soglia annua, che per il 2025-2027 è aumentata.",
      punti: [
        ["Valutazione: valore normale (art. 9 TUIR); per i beni e servizi prodotti o scambiati dall'azienda, prezzo mediamente praticato o, in mancanza, costo sostenuto. Possono essere erogati anche con buoni (documenti di legittimazione, c. 3-bis).", ["valore normale", "prezzo mediamente praticato", "buoni"]],
        ["Soglia di esenzione: ordinariamente 258,23 euro nel periodo d'imposta; per il 2025-2027 1.000 euro, 2.000 euro con figli a carico (L. 207/2024, c. 390). Se si supera la soglia, tutto il valore è tassato, non solo l'eccedenza.", ["258,23", "1.000", "2.000", "tutto il valore"]],
        ["Auto in uso promiscuo (c. 4, lett. a, testo vigente): 50% del costo chilometrico ACI per 15.000 km, ridotto al 10% per le auto elettriche e al 20% per le ibride plug-in, al netto di quanto trattenuto al dipendente; +50% dopo il quinto anno dall'immatricolazione; +5% per accessori non valorizzati. Le maggiorazioni per l'anzianità del veicolo e per gli accessori sono del D.Lgs. 7/8/2026 n. 148, con decorrenza dal 2026 e regole particolari per i veicoli concessi nel 2025 (art. 2, c. 4-5).", ["15.000", "50%", "10%", "20%", "aci"]],
        ["Prestiti (lett. b): 50% della differenza tra gli interessi al tasso ufficiale di riferimento e quelli applicati. Fabbricati (lett. c): differenza tra rendita catastale più spese e quanto paga il dipendente; 30% se c'è l'obbligo di dimorare nell'alloggio.", ["prestiti", "tasso ufficiale", "rendita catastale", "30%"]],
        ["Contributi: per i fringe benefit vale la stessa base imponibile previdenziale del reddito fiscale (art. 12 L. 153/1969 come armonizzato); vanno nel LUL e in busta paga come voce figurativa.", ["previdenziale", "lul", "figurativa"]]
      ],
      aggancio: "Distinguere i fringe benefit dal welfare dell'art. 51, c. 2 (DL-11a): il welfare offerto alla generalità o a categorie è escluso senza soglia; i fringe sono individuali e contano fino alla soglia.",
      fonti: "Art. 51, c. 3, 3-bis e 4 TUIR (917_1986_TUIR (testo vigente al 4/10/2026)); P2_00_PARAMETRI v5, § 6 (soglie 2025-2027); armonizzazione contributiva: P2_00_PARAMETRI v5, § 12 (art. 12 L. 153/1969 non nei codici)."
    },

    "S22-TRIB-18": {
      sintesi: "Il vitto fornito dal datore è un caso particolare di compenso in natura: l'art. 51, c. 2, lett. c), TUIR lo esclude dal reddito di lavoro dipendente se è somministrato direttamente o in mensa, e fino a importi giornalieri fissi se è sostitutivo (buoni pasto e indennità). Fuori da queste ipotesi, l'indennità di mensa in denaro è reddito.",
      punti: [
        ["Esclusi senza limiti: il vitto somministrato dal datore e i pasti nelle mense organizzate direttamente dal datore o gestite da terzi.", ["somministra", "mense", "terzi"]],
        ["Prestazioni sostitutive (buoni pasto): esenti fino a 4 euro al giorno se cartacei, 10 euro se elettronici (dal 2026; 8 euro nel 2025); la parte eccedente è reddito.", ["4 euro", "10 euro", "8 euro", "eccedente"]],
        ["Indennità sostitutive in denaro: esenti fino a 5,29 euro al giorno solo per gli addetti ai cantieri edili, ad altre strutture temporanee o a unità produttive in zone senza servizi di ristorazione; negli altri casi l'indennità di mensa in denaro è interamente imponibile.", ["5,29", "cantieri", "ristorazione", "imponibile"]],
        ["Trasferte: vitto e alloggio entrano nelle regole dell'art. 51, c. 5 (indennità forfettaria ridotta di un terzo se c'è rimborso di vitto o alloggio; rimborsi analitici esenti solo se pagati con mezzi tracciabili dal 2025).", ["trasferte", "un terzo", "tracciabili"]],
        ["Effetti: le stesse esclusioni valgono ai fini contributivi; nel LUL e in busta paga la parte esente e quella imponibile vanno distinte.", ["contributivi", "busta paga"]]
      ],
      aggancio: "Domanda tipica della seconda prova: buoni pasto elettronici da 12 euro per 20 giorni → esenti 10 euro al giorno, imponibili 2 euro al giorno, 40 euro nel mese. Distinguere i buoni pasto dai fringe benefit: non rientrano nella soglia dei fringe.",
      fonti: "Art. 51, c. 2, lett. c), e c. 5 TUIR (917_1986_TUIR (testo vigente al 4/10/2026)); P2_00_PARAMETRI v5, § 6. L'esclusione anche contributiva deriva dall'armonizzazione delle basi imponibili (P2_00_PARAMETRI v5, § 12)."
    },

    "DL-X9": {
      sintesi: "La vigilanza in materia di lavoro e legislazione sociale rende effettive le tutele degli artt. 35 e 36 Cost. ed è regolata dal D.Lgs. 124/2004. La esercita principalmente l'Ispettorato nazionale del lavoro (INL), con gli ITL e gli IAM; INPS e INAIL vigilano sul versante contributivo e assicurativo; ASL e INL, in modo paritario, sulla sicurezza. La logica del decreto è prima regolarizzare, poi sanzionare.",
      punti: [
        ["Organi: INL, agenzia istituita dal D.Lgs. 149/2015, con 3 Direzioni interregionali, gli Ispettorati di area metropolitana (IAM) e gli Ispettorati territoriali (ITL). Il D.L. 19/2024 ha tolto all'INL l'esclusiva e ha restituito a INPS e INAIL i propri ispettori, lasciando all'INL il coordinamento. Gli ispettori INL sono ufficiali di polizia giudiziaria; quelli INPS e INAIL no (art. 6, c. 3).", ["149/2015", "19/2024", "coordinamento", "polizia giudiziaria"]],
        ["Accesso: l'ispettore si identifica con il tesserino; il datore può farsi assistere da un professionista abilitato, per esempio il consulente del lavoro. Si identificano i presenti e si raccolgono le dichiarazioni dei lavoratori senza il datore né i superiori.", ["tesserino", "professionista abilitato", "dichiarazioni"]],
        ["Verbali: verbale di primo accesso (art. 13, c. 1) con lavoratori trovati, attività svolte, dichiarazioni e documenti richiesti; eventuale verbale interlocutorio; alla fine verbale unico di accertamento e notificazione, con illeciti e fonti di prova, diffida, possibilità di pagare in misura ridotta e mezzi di difesa. Se non ci sono violazioni, comunicazione scritta di definizione.", ["primo accesso", "interlocutorio", "verbale unico", "definizione"]],
        ["Valore probatorio: il verbale fa piena prova fino a querela di falso solo per i fatti avvenuti davanti all'ispettore e per la provenienza delle dichiarazioni, non per il loro contenuto (Cass. 37764/2021).", ["querela di falso", "37764/2021"]],
        ["Gli strumenti dipendono da che cosa trova l'ispettore: illecito amministrativo sanabile, diffida; contravvenzione, prescrizione; irregolarità senza sanzione, disposizione; crediti dei lavoratori, diffida accertativa o conciliazione monocratica; lavoro nero o gravi violazioni di sicurezza, sospensione (vedi DL-X7 diffida accertativa, DL-X8 disposizione, DL-X10, DL-X11, DL-22a e DL-22b).", ["diffida", "prescrizione", "disposizione", "sospensione"]]
      ],
      aggancio: "Difese contro gli atti ispettivi: ricorso al direttore della sede contro gli atti di accertamento (art. 16, 30 giorni) e al Comitato per i rapporti di lavoro sulla qualificazione del rapporto (art. 17); scritti difensivi in 30 giorni contro la contestazione (art. 18 L. 689/1981); opposizione all'ordinanza-ingiunzione in tribunale. Interpello al Ministero (art. 9): chi si adegua alla risposta non è sanzionato.",
      fonti: "Simone, Legislazione sociale, pp. 425-431; P1/P1_Mappe_Poteri_ispettivi (dal convegno di Rausei a Fermo, 18/9/2026); D.Lgs. 124/2004 (124_2004.pdf in libreria, testo vigente), artt. 6-7, 9, 13, 16-17."
    },

    "DL-X10": {
      sintesi: "Il sistema premia chi regolarizza. Per gli illeciti amministrativi sanabili c'è la diffida (art. 13 D.Lgs. 124/2004) e, prima ancora, la diffida amministrativa del D.Lgs. 103/2024; per le contravvenzioni c'è la prescrizione obbligatoria (art. 15 D.Lgs. 124/2004 e artt. 20-25 D.Lgs. 758/1994), che porta all'estinzione del reato. Chi non regolarizza riceve la contestazione e paga in misura ridotta.",
      punti: [
        ["Diffida amministrativa (art. 6 D.Lgs. 103/2024): per sanzioni con massimo fino a 5.000 euro, prima violazione nel quinquennio, materialmente sanabile, mai in materia di sicurezza né per obblighi di origine europea (per esempio l'informativa sulle condizioni di lavoro); 20 giorni per sanare e nessuna sanzione.", ["5.000", "quinquennio", "sicurezza", "20 giorni"]],
        ["Diffida obbligatoria (art. 13, c. 2-3): è condizione di procedibilità per gli illeciti amministrativi sanabili; 30 giorni per regolarizzare e 15 per pagare il minimo della sanzione o un quarto di quella fissa; il pagamento estingue il procedimento per quelle violazioni.", ["condizione di procedibilita", "30 giorni", "15", "un quarto"]],
        ["Se il datore non regolarizza, lo stesso verbale vale come contestazione: pagamento in misura ridotta (un terzo del massimo o il doppio del minimo) entro 60 giorni, oppure scritti difensivi in 30 giorni e poi ordinanza-ingiunzione (artt. 14, 16, 18 L. 689/1981).", ["contestazione", "un terzo", "60 giorni", "ordinanza"]],
        ["Prescrizione obbligatoria: per le contravvenzioni punite con arresto o ammenda alternativi o con la sola ammenda, anche in materia di sicurezza (art. 301 D.Lgs. 81/2008); non per arresto e ammenda congiunti. L'ispettore impartisce le prescrizioni, con un termine fino a 6 mesi prorogabile una volta, e comunica la notizia di reato al PM; il procedimento penale resta sospeso.", ["contravvenzioni", "alternativi", "6 mesi", "pm"]],
        ["Verifica entro 60 giorni dalla scadenza; se il datore ha adempiuto, paga un quarto del massimo dell'ammenda entro 30 giorni e il reato si estingue. Su contravvenzioni non si usano né diffida né disposizione (art. 25 D.Lgs. 758/1994).", ["60 giorni", "un quarto del massimo", "estingue", "758/1994"]]
      ],
      aggancio: "Errori da evitare all'orale: confondere le tre diffide (amministrativa, obbligatoria o precettiva, accertativa); dire che la diffida vale per le contravvenzioni. Il consulente cura la regolarizzazione nei termini, perché il risparmio sulla sanzione è grande.",
      fonti: "Simone, Legislazione sociale, pp. 435-437; P1/P1_Mappe_Poteri_ispettivi (dal convegno di Rausei a Fermo, 18/9/2026) (tabella degli strumenti); D.Lgs. 124/2004 (124_2004.pdf in libreria, testo vigente), artt. 13 e 15."
    },

    "DL-X11": {
      sintesi: "Il lavoro nero è l'impiego di lavoratori subordinati senza la comunicazione preventiva di assunzione. Oltre al recupero di contributi e premi, comporta la maxisanzione per ciascun lavoratore (art. 3, c. 3-5, D.L. 12/2002) e, se riguarda almeno il 10% dei presenti, la sospensione dell'attività (art. 14 D.Lgs. 81/2008). Si distingue dal lavoro grigio, formalmente dichiarato ma irregolare nei fatti.",
      punti: [
        ["Presupposti: mancata comunicazione preventiva e requisiti della subordinazione; esclusi i datori domestici. Rientrano anche l'autonomo occasionale o il PrestO che nascondono un rapporto subordinato, il tirocinio non comunicato e riqualificato, l'appalto, il distacco e la somministrazione illeciti, contestati all'utilizzatore (nota INL 856/2022).", ["comunicazione preventiva", "domestic", "tirocinio", "utilizzatore"]],
        ["Importi per ciascun lavoratore (aumentati del 30% dal D.L. 19/2024): da 1.950 a 11.700 euro fino a 30 giorni di lavoro effettivo; da 3.900 a 23.400 euro da 31 a 60 giorni; da 7.800 a 46.800 euro oltre 60 giorni. Maggiorazioni raddoppiate in caso di recidiva nel triennio; ulteriore 20% per stranieri senza permesso, minori in età non lavorativa, beneficiari dell'Assegno di inclusione o del Supporto per la formazione e il lavoro.", ["1.950", "11.700", "46.800", "recidiva", "20%"]],
        ["Diffida speciale: entro 120 giorni dal verbale unico il datore deve regolarizzare contributi e retribuzioni, assumere il lavoratore (tempo indeterminato, anche part-time non sotto il 50%, apprendistato, o tempo pieno determinato di almeno 3 mesi; non l'intermittente), tenerlo in servizio almeno 90 giorni dall'accesso e pagare la sanzione minima. Esclusa per stranieri irregolari e minori.", ["120 giorni", "50%", "90 giorni", "intermittente"]],
        ["Non si applica se dagli adempimenti contributivi già fatti risulta che il datore non voleva occultare il rapporto, o se ha regolarizzato spontaneamente e per intero prima dell'accertamento. È aggiuntiva rispetto alle altre sanzioni, ma assorbe quella per la mancata comunicazione di cessazione se il rapporto è stato tutto in nero.", ["occultare", "spontaneamente", "aggiuntiva", "cessazione"]],
        ["Sospensione dell'attività (art. 14 D.Lgs. 81/2008): obbligatoria con almeno il 10% di lavoratori in nero tra i presenti all'accesso; esclusa se l'irregolare è l'unico occupato; revoca con regolarizzazione e somma aggiuntiva di 2.500 euro fino a cinque irregolari o 5.000 euro oltre (vedi DL-22a).", ["10%", "unico occupato", "2.500", "5.000"]]
      ],
      aggancio: "Per il consulente: mai far iniziare un lavoratore prima della comunicazione al centro per l'impiego, inviata entro il giorno precedente. Collegamenti: S22-DL-6 (stranieri senza permesso, anche reato), S22-DL-10 (PrestO), S22-DL-8 (tirocinio), INPS sulle sanzioni civili per evasione contributiva.",
      fonti: "Simone, Legislazione sociale, pp. 437-441; P1/P1_Mappe_Poteri_ispettivi (dal convegno di Rausei a Fermo, 18/9/2026) (Focus 3); art. 3 D.L. 12/2002 come riportato da Simone."
    },

    "S22-DL-1": {
      sintesi: "Il rapporto di lavoro subordinato nasce con un contratto a forma di regola libera, ma la legge lo accompagna con una serie di documenti obbligatori: la comunicazione preventiva di assunzione, l'informativa scritta sulle condizioni di lavoro, l'iscrizione nel libro unico e il prospetto paga. Se manca la comunicazione preventiva il rapporto è «in nero» e scatta la maxisanzione dell'art. 3 D.L. 12/2002.",
      punti: [
        ["Assunzione diretta per tutti i datori privati (art. 4-bis D.Lgs. 181/2000); forma del contratto di regola libera, scritta solo nei casi previsti, a pena di nullità (per esempio il termine, art. 19 D.Lgs. 81/2015) o a fini di prova (part-time, art. 5).", ["assunzione diretta", "forma", "libera", "termine"]],
        ["Comunicazione obbligatoria telematica al Ministero del lavoro entro le 24 del giorno precedente l'inizio del rapporto, anche se festivo; vale anche per INPS, INAIL e Ispettorato (pluriefficacia). Eccezioni: urgenza (entro 5 giorni, con informativa il giorno prima), forza maggiore, agenzie di somministrazione (entro il 20 del mese successivo). Trasformazioni, proroghe e cessazioni: entro 5 giorni.", ["giorno precedente", "pluriefficacia", "urgenza", "5 giorni"]],
        ["Informativa sulle condizioni di lavoro (art. 1 D.Lgs. 152/1997, come modificato dal D.Lgs. 104/2022): contratto scritto o copia della comunicazione all'assunzione; le informazioni mancanti entro 7 giorni, alcune entro un mese. Dal 2026 contiene anche il codice alfanumerico del CCNL (lett. q-bis, aggiunta dall'art. 11 D.L. 62/2026, solo per i datori privati).", ["informativa", "7 giorni", "un mese", "codice alfanumerico"]],
        ["Documentazione nel rapporto: iscrizione nel libro unico del lavoro, con registrazione entro la fine del mese successivo, e prospetto paga a ogni pagamento (vedi DL-19b).", ["libro unico", "mese successivo", "prospetto paga"]],
        ["Sanzioni: l'omessa comunicazione è punita con la sanzione amministrativa da 100 a 500 euro per ogni lavoratore interessato (art. 19, c. 3, D.Lgs. 276/2003), diffidabile (art. 13 D.Lgs. 124/2004; circ. INL 1/2017); se manca la comunicazione preventiva il lavoratore è in nero e si aggiunge la maxisanzione per ciascun lavoratore (art. 3 D.L. 12/2002, aumentata dal D.L. 19/2024), con diffida a regolarizzare e, dal 10% di irregolari tra i presenti, la sospensione dell'attività (art. 14 D.Lgs. 81/2008).", ["276/2003", "maxisanzione", "diffida", "sospensione"]]
      ],
      aggancio: "Importi e casi di esclusione della maxisanzione sono nella scheda DL-X11. Per il consulente: nessun lavoratore inizia prima della ricevuta della comunicazione, che fa fede di data e ora di invio.",
      fonti: "Simone, Diritto del lavoro, pp. 30-31 (forma), 75-77 (comunicazioni obbligatorie e sanzione), 79-80 (informativa); Simone, Legislazione sociale, p. 267 (LUL) e pp. 437-441 (maxisanzione); art. 11 D.L. 62/2026 (62_2026.pdf); art. 19, c. 3, D.Lgs. 276/2003 nel testo pubblicato dal Ministero del lavoro (lavoro.gov.it); circ. INL 1/2017 (diffidabilità)."
    },

    "S22-DL-20": {
      sintesi: "La retribuzione è la prestazione fondamentale del datore: deve essere proporzionata e sufficiente (art. 36 Cost.), va documentata con il prospetto paga e pagata con strumenti tracciabili. I crediti retributivi si prescrivono in cinque anni, che oggi decorrono dalla cessazione del rapporto.",
      punti: [
        ["Caratteri: proporzionalità e sufficienza (art. 36 Cost.), con potere del giudice di fissare la misura ex art. 2099, c. 2, c.c. usando le tabelle del contratto collettivo; corrispettività, obbligatorietà, determinabilità e continuità. Forme: a tempo, a cottimo, con partecipazione agli utili o ai prodotti, con provvigione, in natura (art. 2099 c.c.).", ["proporzionalita", "sufficienza", "2099", "cottimo"]],
        ["Prospetto paga a ogni pagamento, con tutte le voci e le ritenute (art. 1 L. 4/1953) e, dal 2026, il codice alfanumerico del CCNL; la firma del lavoratore sulla busta paga non prova il pagamento (art. 1, c. 912, L. 205/2017; Cass. 21699/2018).", ["prospetto paga", "codice alfanumerico", "firma", "912"]],
        ["Pagamento tracciabile: vietato pagare la retribuzione in contanti direttamente al lavoratore; si paga tramite banca o posta con bonifico, strumenti elettronici, contanti allo sportello con mandato o assegno (art. 1, c. 910 ss., L. 205/2017). La violazione è punita con sanzione amministrativa.", ["contanti", "bonifico", "910"]],
        ["Prescrizione estintiva: 5 anni per retribuzioni e indennità di fine rapporto (art. 2948, nn. 4 e 5, c.c.), 10 anni per i diritti non retributivi, come la qualifica superiore (art. 2946). Dopo la L. 92/2012 e il D.Lgs. 23/2015 il rapporto a tempo indeterminato non è più stabile: la prescrizione dei crediti retributivi decorre dalla cessazione (Cass. 26246/2022 e 1989/2023, riportate dal Simone).", ["5 anni", "10 anni", "cessazione", "26246/2022"]],
        ["Prescrizione presuntiva: si presume pagato il credito non reclamato entro 1 anno per le retribuzioni a periodi non superiori al mese (art. 2955, n. 2) ed entro 3 anni per quelle a periodi superiori, come la tredicesima (art. 2956, n. 1).", ["presuntiva", "2955", "2956", "tredicesima"]]
      ],
      aggancio: "Per il consulente: conservare i cedolini con la prova del bonifico, perché la busta firmata non basta.",
      fonti: "Simone, Diritto del lavoro, pp. 141-143 (retribuzione) e 147-148 (pagamento e prospetto); Simone, Legislazione sociale, pp. 407-408 (prescrizione); art. 11 D.L. 62/2026."
    },

    "S22-DEO-1": {
      sintesi: "Il dovere di fedeltà (art. 6 del Codice deontologico) impone al consulente di svolgere l'incarico con fedeltà verso il cliente e di anteporre gli interessi del cliente ai propri, nel rispetto della legge e del Codice. La sua violazione più tipica è la trascuratezza intenzionale degli interessi del cliente, che l'art. 32 qualifica come inadempimento disciplinare.",
      punti: [
        ["Art. 6, c. 1-2: fedeltà verso il cliente; prevalenza dei suoi interessi su quelli del consulente, ma sempre nel rispetto della legge e del Codice. Il richiamo dell'art. 7, c. 1 («fatto salvo l'art. 6, c. 2») coordina fedeltà e indipendenza di giudizio.", ["fedelta", "prevalenza", "indipendenza"]],
        ["Limite della fedeltà: il consulente non suggerisce atti nulli, illeciti o fraudolenti e rifiuta l'incarico che concorre a un'operazione illecita (art. 24, c. 2 e 4); deve astenersi in caso di conflitto di interessi (art. 26).", ["illeciti", "art. 24", "conflitto di interessi"]],
        ["Art. 32: costituisce inadempimento disciplinare l'intenzionale trascuratezza degli interessi del cliente. Serve l'intenzionalità, coerente con l'art. 45: la responsabilità disciplinare nasce da una condotta volontaria, omissiva o commissiva.", ["art. 32", "intenzionale", "art. 45", "volontaria"]],
        ["Doveri collegati: diligenza e perizia nell'esecuzione (art. 30), rettifica a proprie spese degli errori imputabili (art. 30, c. 2, lett. b), restituzione senza indugio dei documenti richiesti (art. 33), preavviso adeguato quando si interrompe l'incarico (art. 31, c. 3).", ["art. 30", "rettifica", "art. 33", "preavviso"]],
        ["Conseguenze: procedimento davanti al Consiglio di disciplina territoriale e sanzioni proporzionate alla gravità (censura, sospensione fino a 2 anni, radiazione); restano distinte la responsabilità civile verso il cliente, coperta dall'assicurazione obbligatoria (art. 11), e quella penale.", ["consiglio di disciplina", "censura", "assicurazione"]]
      ],
      aggancio: "Esempio: il consulente che, per inerzia voluta, lascia scadere il termine per impugnare un verbale o per chiedere la cassa integrazione del cliente. Differenza da spiegare: l'errore colposo è un problema di diligenza (art. 30), la trascuratezza intenzionale è l'illecito dell'art. 32.",
      fonti: "Simone, Deontologia (testo del Codice deontologico, delibera CNO 101/2021 modificata dalla 49/2024), pp. 1248 (artt. 6-7), 1249 (art. 11), 1252-1254 (artt. 24, 26, 30-33), 1256-1257 (artt. 44-45); Simone, Deontologia, p. 1244 (sanzioni)."
    },

    "S22-DEO-12": {
      sintesi: "L'art. 1 L. 12/1979 stabilisce chi può curare gli adempimenti di lavoro, previdenza e assistenza per conto dei datori: oltre al datore stesso, solo i consulenti del lavoro iscritti all'albo e gli altri professionisti indicati dalla legge. L'art. 30 del Codice deontologico regola invece come l'incarico va eseguito: con diligenza, perizia e chiarezza verso il cliente.",
      punti: [
        ["Art. 1 L. 12/1979: gli adempimenti per l'amministrazione del personale dipendente, se non li cura il datore direttamente o con propri dipendenti, possono essere svolti solo dai consulenti del lavoro iscritti all'albo e da avvocati, dottori commercialisti, ragionieri e periti commerciali, che devono però comunicarlo all'Ispettorato territoriale.", ["datore", "iscritti", "avvocati", "comunicarlo"]],
        ["Art. 1, c. 4-5: le imprese artigiane e le piccole imprese possono affidarsi ai servizi delle associazioni di categoria, organizzabili tramite consulenti del lavoro anche dipendenti; possono usare centri di elaborazione dati solo per calcolo e stampa, assistiti da un professionista abilitato.", ["artigiane", "associazioni di categoria", "calcolo e stampa"]],
        ["Il titolo di consulente del lavoro spetta solo a chi è abilitato e iscritto all'albo (art. 15 del Codice); il datore resta comunque responsabile dei propri obblighi anche quando affida gli adempimenti al consulente (art. 7 L. 12/1979).", ["titolo", "art. 15", "responsabile", "art. 7"]],
        ["Art. 30 del Codice: il consulente usa la diligenza e la perizia richieste dalle norme del luogo e del tempo; illustra al cliente, con semplicità e chiarezza, gli elementi essenziali dell'incarico; dà le informazioni necessarie a una piena consapevolezza della prestazione; si adopera per rettificare errori, inesattezze od omissioni, a proprio carico se a lui imputabili.", ["diligenza", "perizia", "chiarezza", "rettificare"]],
        ["Collegamenti: incarico per iscritto con oggetto, compensi e polizza (art. 27), divieto di collaborare con soggetti non abilitati in prestazioni riservate (art. 12), segreto professionale (art. 6 L. 12/1979, art. 25 del Codice).", ["art. 27", "non abilitati", "segreto"]]
      ],
      aggancio: "Collegamenti: DEO-1 (oggetto della professione), DEO-X1 (CED e associazioni), S22-DEO-1 (fedeltà e trascuratezza).",
      fonti: "Simone, Deontologia, pp. 1221 (art. 1 L. 12/1979) e 1233-1234; Simone, Deontologia (testo del Codice deontologico, delibera CNO 101/2021 modificata dalla 49/2024), pp. 1249-1250 (artt. 12 e 15), 1252-1253 (artt. 25, 27 e 30). Testo dell'art. 1 L. 12/1979: vedi le fonti di DEO-1."
    },

    "S22-TRIB-9": {
      sintesi: "Il compenso per un'attività di lavoro autonomo svolta in modo non abituale è un reddito diverso (art. 67, c. 1, lett. l, TUIR), non un reddito di lavoro autonomo. Si tassa sul netto tra compensi incassati e spese specificamente inerenti, concorre al reddito complessivo e, se il committente è sostituto d'imposta, subisce una ritenuta d'acconto del 20%.",
      punti: [
        ["Definizione: redditi derivanti da attività di lavoro autonomo non esercitate abitualmente o dall'assunzione di obblighi di fare, non fare o permettere (art. 67, c. 1, lett. l, TUIR). Manca l'abitualità che caratterizza il lavoro autonomo dell'art. 53.", ["non esercitate abitualmente", "obblighi di fare", "art. 53"]],
        ["Determinazione: differenza tra quanto percepito nel periodo d'imposta (principio di cassa) e le spese specificamente inerenti alla produzione (art. 71, c. 2, TUIR); il reddito concorre al reddito complessivo ed è tassato con l'IRPEF progressiva.", ["percepito", "spese specificamente inerenti", "art. 71"]],
        ["Ritenuta: se il committente è sostituto d'imposta, trattiene il 20% del compenso a titolo d'acconto (art. 25 D.P.R. 600/1973), la versa con F24 entro il 16 del mese successivo e la certifica nella CU, da consegnare e trasmettere entro il 16 marzo (il termine del 30 aprile vale solo per il lavoro autonomo abituale).", ["20%", "titolo d'acconto", "f24"]],
        ["Obblighi del percettore: dichiara il reddito nella dichiarazione annuale e scomputa la ritenuta subita. Niente partita IVA, perché manca l'abitualità; per il fisco non c'è una soglia di esenzione.", ["dichiara", "scomputa", "partita iva"]],
        ["Contributi: iscrizione alla gestione separata INPS solo per la parte di reddito annuo oltre 5.000 euro (art. 44 D.L. 269/2003). Sul piano lavoristico il committente comunica l'avvio all'Ispettorato prima dell'inizio (art. 14 D.Lgs. 81/2008): vedi DL-7a.", ["gestione separata", "5.000", "ispettorato"]]
      ],
      aggancio: "Da non confondere con le prestazioni occasionali dell'art. 54-bis D.L. 50/2017 (libretto famiglia e contratto di prestazione occasionale), i cui compensi sono esenti da imposizione fiscale (art. 54-bis, c. 4, D.L. 50/2017). Collegamento con la seconda prova: la CU del lavoro autonomo occasionale.",
      fonti: "Artt. 53, 67, c. 1, lett. l, e 71, c. 2, TUIR (917_1986_TUIR, vigente al 4/10/2026); Simone, Legislazione sociale, pp. 290-291 (gestione separata); P2_00_PARAMETRI §§ 8 e 11, P2_Mod01 e P2_Mod04 (ritenuta, F24 e termini CU, dalle istruzioni CU 2026 dell'Agenzia delle Entrate, p. 2). Ritenuta del 20% a titolo d'acconto: art. 25 D.P.R. 600/1973, ripreso dall'art. 38, c. 1, D.Lgs. 33/2025 (testo unico versamenti e riscossione, G.U. n. 71 del 26/3/2025, S.O. 8/L). Esenzione dei compensi PrestO: Ministero del lavoro, pagina «Prestazioni occasionali» (lavoro.gov.it)."
    },

    "S22-PPP-8": {
      sintesi: "Nullità, annullabilità e risoluzione sono rimedi diversi: nullità e annullabilità colpiscono il contratto nato viziato (momento genetico); la risoluzione scioglie un contratto valido quando un evento successivo altera l'equilibrio tra le prestazioni (momento funzionale).",
      punti: [
        ["Nullità (artt. 1418-1424): contrasto con norme imperative, mancanza di un requisito dell'art. 1325, causa o motivo comune illecito, oggetto impossibile, illecito o indeterminabile. Nessun effetto, chiunque vi abbia interesse può farla valere, rilevabile d'ufficio, imprescrittibile, non convalidabile; può essere parziale e il contratto nullo può convertirsi.", ["norme imperative", "d'ufficio", "imprescrittibile", "convertirsi"]],
        ["Annullabilità (artt. 1425-1446): incapacità legale o naturale e vizi del consenso (errore essenziale e riconoscibile, violenza, dolo determinante). Il contratto produce effetti finché non è annullato; agisce solo la parte protetta, entro 5 anni; è convalidabile; la sentenza è costitutiva e non pregiudica i terzi di buona fede a titolo oneroso, salvo l'incapacità legale.", ["vizi del consenso", "5 anni", "convalidabile", "costitutiva"]],
        ["Risoluzione per inadempimento (art. 1453 ss.): nei contratti a prestazioni corrispettive la parte adempiente sceglie tra adempimento e risoluzione, oltre al risarcimento. Risoluzione di diritto con clausola risolutiva espressa, diffida ad adempiere di almeno 15 giorni o termine essenziale; altrimenti giudiziale. Serve un inadempimento imputabile e non di scarsa importanza.", ["corrispettive", "clausola risolutiva espressa", "15 giorni", "scarsa importanza"]],
        ["Risoluzione per impossibilità sopravvenuta (art. 1463): opera di diritto e la parte liberata non può chiedere la controprestazione; se l'impossibilità è parziale si riduce la prestazione. Risoluzione per eccessiva onerosità (art. 1467): contratti di durata o a esecuzione differita, eventi straordinari e imprevedibili; l'altra parte può evitarla offrendo di modificare equamente il contratto.", ["impossibilita sopravvenuta", "eccessiva onerosita", "imprevedibili", "equamente"]],
        ["Effetti della risoluzione: retroattivi tra le parti, ma non pregiudicano i diritti acquistati dai terzi prima della domanda giudiziale, salvi gli effetti della trascrizione. Rimedi di autotutela: eccezione d'inadempimento (art. 1460) e sospensione per mutate condizioni patrimoniali (art. 1461).", ["retroattivi", "terzi", "eccezione d'inadempimento", "1461"]]
      ],
      aggancio: "Nel lavoro: la nullità del contratto non toglie la retribuzione per il lavoro già prestato (art. 2126 c.c.); il licenziamento non è una risoluzione ex art. 1453 ma un recesso con regole proprie (L. 604/1966). Collegamento con PPP-13.",
      fonti: "Artt. 1418-1467 c.c. come riportati da Simone, Diritto privato, pp. 751-755 (nullità, annullabilità, convalida, rescissione e risoluzione); art. 2126 c.c. (NORMA_Codice_civile_lavoro)."
    },

    "S22-PPP-1": {
      sintesi: "Sono soggetti di diritto la persona fisica, cioè ogni individuo dotato di capacità giuridica, e la persona giuridica, cioè un complesso organizzato di persone e beni con uno scopo lecito a cui l'ordinamento riconosce la personalità. La differenza chiave per la persona giuridica è l'autonomia patrimoniale perfetta.",
      punti: [
        ["Persona fisica: capacità giuridica dalla nascita, purché il nato sia vivo (art. 1 c.c.), persa con la morte; capacità di agire a 18 anni (art. 2), limitata da interdizione, inabilitazione, emancipazione e incapacità naturale; protezione con tutela, curatela e amministrazione di sostegno (vedi PPP-9).", ["nascita", "18 anni", "interdizione", "amministrazione di sostegno"]],
        ["Sede della persona: domicilio (sede principale di affari e interessi), residenza (dimora abituale), dimora (presenza occasionale); domicilio e residenza sono definiti dall'art. 43 c.c. Incertezza sull'esistenza: scomparsa, assenza e morte presunta, con termini dimezzati dalla L. 182/2025 secondo il Simone.", ["domicilio", "residenza", "morte presunta"]],
        ["Persona giuridica: elemento materiale (persone e beni organizzati per uno scopo lecito) ed elemento formale (riconoscimento). Corporazioni, in cui prevalgono le persone (associazioni e società), e istituzioni, in cui prevale il patrimonio (fondazioni e comitati); enti pubblici e privati.", ["elemento formale", "corporazioni", "fondazioni", "enti pubblici"]],
        ["Autonomia patrimoniale perfetta: i beni appartengono all'ente, il creditore dell'ente di regola non aggredisce i beni dei membri e il creditore del singolo membro non aggredisce il patrimonio dell'ente.", ["autonomia patrimoniale perfetta", "creditore"]],
        ["Acquisto della personalità: le società di capitali e le cooperative con l'iscrizione nel registro delle imprese, che per loro ha efficacia costitutiva; associazioni, fondazioni e altre istituzioni private con il riconoscimento, determinato dall'iscrizione nel registro delle persone giuridiche istituito presso le prefetture, salvo i casi degli artt. 7 e 9 (art. 1, c. 1, D.P.R. 361/2000).", ["registro delle imprese", "costitutiva", "riconoscimento", "361/2000"]]
      ],
      aggancio: "Per il consulente: il datore di lavoro può essere persona fisica o giuridica: la differenza conta per capire chi risponde dei debiti verso i lavoratori e gli enti.",
      fonti: "Simone, Diritto privato, pp. 699-707 (persona fisica, apertura del cap. 2) e 788 (efficacia costitutiva dell'iscrizione); art. 1, c. 1, D.P.R. 361/2000 letto sul testo della Gazzetta Ufficiale (gazzettaufficiale.it). Il cap. 2 sulle persone giuridiche (pp. 708 ss.) non è in libreria."
    },

    "S22-RAG-3": {
      sintesi: "In contabilità generale il costo del personale si rileva in partita doppia in più momenti: la retribuzione lorda come costo (Salari e stipendi), i contributi a carico dell'azienda (Oneri sociali), le ritenute e i contributi trattenuti come debiti verso Erario e istituti, il pagamento del netto e poi il versamento con F24. A fine anno si aggiungono gli stanziamenti di competenza: TFR, ratei di mensilità aggiuntive e ferie.",
      punti: [
        ["Acconti: Dipendenti c/acconti a Banca c/c; non toccano il conto economico e si recuperano al pagamento della retribuzione.", ["acconti", "conto economico"]],
        ["Retribuzione lorda: Salari e stipendi (costo, B9 a) a Dipendenti c/retribuzioni. Contributi a carico azienda: Oneri sociali (B9 b) a Istituti previdenziali.", ["salari e stipendi", "oneri sociali", "istituti previdenziali"]],
        ["Pagamento: Dipendenti c/retribuzioni a diversi: Dipendenti c/acconti, Istituti previdenziali (quota del lavoratore), Erario c/ritenute da versare (IRPEF e addizionali), Banca c/c (netto). Versamento con F24 entro il 16 del mese successivo: Istituti previdenziali ed Erario c/ritenute a Banca c/c.", ["erario c/ritenute", "netto", "16 del mese successivo"]],
        ["INAIL: acconto versato in autoliquidazione (16 febbraio) in Acconti INAIL; al 31/12 si rileva il premio di competenza in Oneri sociali INAIL, con conguaglio a debito o a credito verso l'Istituto.", ["autoliquidazione", "16 febbraio", "conguaglio"]],
        ["Fine esercizio: quota annua di TFR (retribuzione annua / 13,5 meno lo 0,50%) e rivalutazione (1,5% + 75% dell'indice ISTAT), Accantonamento TFR (B9 c) a Fondo TFR; imposta sostitutiva del 17% sulla rivalutazione trattenuta al dipendente (Fondo TFR a Erario c/ritenute), quindi non è un costo per l'azienda. Se il TFR va al Fondo di tesoreria INPS o alla previdenza complementare, il debito è verso l'INPS o il fondo. Ferie maturate e non godute: Salari e stipendi a Dipendenti c/ferie da liquidare.", ["13,5", "17%", "fondo di tesoreria", "ferie"]]
      ],
      aggancio: "Attenzione: il Simone usa ancora esempi superati, come l'assegno per il nucleo familiare (per i figli oggi c'è l'assegno unico, pagato direttamente dall'INPS) e la fiscalizzazione degli oneri sociali; all'orale citali come istituti storici. Collegamento con RAG-6 (voci della B9).",
      fonti: "Simone, Ragioneria, pp. 1093-1097 (scritture del personale e INAIL) e 1110-1114 (TFR); P2_00_PARAMETRI § 10 (TFR e imposta sostitutiva); schema dell'art. 2425 c.c. come in RAG-6. Le scritture del manuale sono lette da OCR: importi da controllare sulla scansione."
    },

    "DL-X12": {
      sintesi: "Il lavoro agile è una modalità di esecuzione del rapporto di lavoro subordinato, decisa con accordo tra le parti: la prestazione si svolge in parte nei locali aziendali e in parte all'esterno, senza postazione fissa e senza precisi vincoli di orario o di luogo, entro i soli limiti di durata massima dell'orario di lavoro (art. 18 L. 81/2017).",
      punti: [
        ["Accordo scritto (art. 19): regola la prestazione all'esterno, il potere direttivo, gli strumenti, i tempi di riposo e le misure per la disconnessione. Può essere a termine o a tempo indeterminato; il recesso richiede almeno 30 giorni di preavviso (90 per il datore, se il lavoratore è disabile), oppure nessun preavviso se c'è un giustificato motivo.", ["accordo", "scritt", "disconnession", "30 giorni", "giustificato motivo"]],
        ["Parità di trattamento: trattamento economico e normativo non inferiore a quello di chi svolge le stesse mansioni solo in azienda (art. 20). Il datore risponde della sicurezza e del buon funzionamento degli strumenti tecnologici (art. 18, c. 2) e consegna, almeno una volta l'anno, un'informativa scritta sui rischi al lavoratore e al RLS (art. 22).", ["non inferiore", "strumenti", "informativa", "rischi"]],
        ["Controllo e disciplina (art. 21): l'accordo regola il controllo sulla prestazione resa fuori dall'azienda nel rispetto dell'art. 4 dello Statuto dei lavoratori e indica le condotte che danno luogo a sanzioni disciplinari.", ["controllo", "art. 4", "sanzioni disciplinari"]],
        ["Priorità (art. 18, c. 3-bis): va data alle richieste di chi ha figli fino a 12 anni (senza limiti di età se il figlio è disabile grave), dei lavoratori con disabilità grave e dei caregiver. Chi chiede il lavoro agile non può essere sanzionato, demansionato, licenziato o trasferito: le misure ritorsive sono nulle. Il rifiuto impedisce al datore la certificazione della parità di genere (c. 3-ter).", ["priorit", "12 anni", "caregiver", "null", "parita di genere"]],
        ["Adempimenti e tutela INAIL (art. 23): comunicazione telematica al Ministero del lavoro entro 5 giorni dall'avvio, o dalla modifica o cessazione del periodo; se manca, sanzione da 100 a 500 euro per lavoratore (art. 19, c. 3, D.Lgs. 276/2003). Il lavoratore è assicurato contro gli infortuni anche nel tragitto verso il luogo prescelto, se la scelta è ragionevole.", ["comunicazione", "5 giorni", "100 a 500", "infortuni", "tragitto"]]
      ],
      aggancio: "Per lo studio: l'accordo individuale è il documento chiave (luoghi, fasce di contattabilità, strumenti, condotte sanzionabili), la comunicazione al Ministero va fatta entro 5 giorni e le richieste dei genitori con figli sotto i 12 anni hanno la precedenza.",
      fonti: "L. 81/2017, artt. 18-23, testo vigente letto su Normattiva il 9/11/2026; art. 19, c. 3, D.Lgs. 276/2003 (Normattiva, stessa data); Simone, Diritto del lavoro, pp. 20-22 (anche Protocollo nazionale sul lavoro agile del 7/12/2021)."
    },

    "DL-X13": {
      sintesi: "Per chi lavora tramite piattaforme digitali la qualificazione dipende dalle concrete modalità della prestazione, non dal nome del contratto: se emergono poteri di direzione e controllo, anche esercitati tramite algoritmi, il rapporto si presume subordinato salvo prova contraria (art. 12 D.L. 62/2026); i rider davvero autonomi hanno le tutele minime del capo V-bis del D.Lgs. 81/2015.",
      punti: [
        ["Tre ipotesi: subordinazione (art. 2094 c.c.), anche con poteri esercitati tramite algoritmo; collaborazione etero-organizzata, a cui si applica la disciplina del lavoro subordinato «anche» se l'organizzazione passa per piattaforme (art. 2, c. 1, D.Lgs. 81/2015; Cass. 1663/2020 sui rider Foodora); rider autonomo con tutele minime (artt. 47-bis e seguenti).", ["subordinazione", "etero-organizzat", "art. 2", "1663/2020", "autonom"]],
        ["Presunzione (art. 12 D.L. 62/2026, solo per i rider del capo V-bis): contano le modalità effettive, compresi i dati dei sistemi di monitoraggio e decisionali automatizzati; quando emergono fatti che indicano direzione e controllo, il rapporto si presume subordinato e la piattaforma deve provare il contrario.", ["presum", "subordinat", "provare il contrario", "monitoraggio", "automatizzat"]],
        ["Tutele minime dei rider autonomi: contratto provato per iscritto e informazioni, anche sui sistemi automatizzati (art. 47-ter; art. 1-bis D.Lgs. 152/1997); compenso secondo i contratti delle organizzazioni comparativamente più rappresentative, altrimenti minimo orario e non a consegna, con indennità di almeno il 10% per notte, festivi e maltempo (art. 47-quater); divieto di discriminazione e di esclusione per i rifiuti (art. 47-quinquies); assicurazione INAIL e sicurezza a carico del committente (art. 47-septies).", ["per iscritto", "compenso", "10%", "esclusione", "inail"]],
        ["Novità 2026: diritto a informazioni chiare sugli algoritmi e al riesame umano delle decisioni che limitano o chiudono l'account o negano il compenso (art. 14 D.L. 62/2026); dati su accessi, assegnazioni, rifiuti e compensi conservati 5 anni e accessibili a lavoratore e ispettori (art. 13); dal 1/7/2026 il committente redige e consegna il LUL con numero di consegne e importo del mese (art. 47-quater, c. 3-bis).", ["riesame", "umano", "5 anni", "lul", "consegne"]],
        ["Account personali (art. 47-bis, c. 2-bis e 2-ter): accesso con SPID, CIE o CNS o account legato a un solo codice fiscale; cedere l'account costa da 800 a 1.200 euro, più account o prestazioni inconciliabili alla stessa persona da 1.000 a 1.500 euro. Lo scopo è colpire il caporalato digitale. La direttiva (UE) 2024/2831 va recepita entro il 2/12/2026: lo schema di decreto è ancora in itinere.", ["account", "codice fiscale", "800", "caporalato", "2024/2831"]]
      ],
      aggancio: "In ispezione la riqualificazione del rider come subordinato comporta il recupero di contributi e premi e le sanzioni per comunicazioni, LUL e prospetti mancanti; il consulente che assiste una piattaforma deve verificare come funziona l'algoritmo, perché turni imposti e penalità per i rifiuti sono indici di subordinazione.",
      fonti: "D.L. 62/2026 conv. L. 112/2026, artt. 12-15, e D.Lgs. 81/2015, artt. 47-quater (c. 3-bis) e 47-quinquies, testo vigente letto su Normattiva il 9/11/2026; P1_Cap07_Piattaforme (dossier verificato, con Cass. 24/1/2020 n. 1663 e stato della dir. UE 2024/2831); Simone, Diritto del lavoro, pp. 20 e 22."
    },

    "DL-X14": {
      sintesi: "Si ha licenziamento collettivo quando un datore con più di 15 dipendenti, per riduzione o trasformazione dell'attività o cessazione, intende effettuare almeno 5 licenziamenti nell'arco di 120 giorni nella stessa unità produttiva o in più unità della stessa provincia (art. 24 L. 223/1991): prima di licenziare deve svolgere la procedura sindacale e amministrativa dell'art. 4 e scegliere i lavoratori con i criteri dell'art. 5.",
      punti: [
        ["Presupposti (art. 24, c. 1): più di 15 dipendenti; almeno 5 licenziamenti in 120 giorni; stessa unità produttiva o più unità nella stessa provincia; causa riconducibile a riduzione, trasformazione o cessazione dell'attività. Tutti i recessi nel periodo per la stessa causa si sommano.", ["15 dipendenti", "5 licenziamenti", "120 giorni", "provincia", "cessazione"]],
        ["Procedura (art. 4): comunicazione scritta preventiva a RSA o RSU e alle associazioni di categoria, con motivi dell'eccedenza, numero e profili del personale, tempi e misure sociali; copia all'ITL. Su richiesta entro 7 giorni si apre l'esame congiunto: fase sindacale fino a 45 giorni, poi fase in sede amministrativa fino a 30 giorni; i termini sono dimezzati se gli esuberi sono meno di 10.", ["comunicazione", "esame congiunto", "7 giorni", "45 giorni", "30 giorni", "dimezzat"]],
        ["Criteri di scelta (art. 5): quelli dell'accordo sindacale oppure, in mancanza, in concorso tra loro carichi di famiglia, anzianità ed esigenze tecnico-produttive e organizzative; non si può licenziare una quota di donne superiore a quella occupata nelle mansioni interessate. Esaurita la procedura, il datore intima i recessi con preavviso e entro 7 giorni comunica agli uffici l'elenco dei licenziati con i criteri applicati (art. 4, c. 9).", ["criteri", "carichi di famiglia", "anzianit", "tecnico-produttiv", "elenco"]],
        ["Sanzioni: per gli assunti prima del 7/3/2015 (art. 5, c. 3) recesso senza forma scritta = reintegra piena; violazione della procedura = indennità da 12 a 24 mensilità; violazione dei criteri di scelta = reintegra con indennità fino a 12 mensilità. Per gli assunti dal 7/3/2015 (art. 10 D.Lgs. 23/2015) solo il recesso orale dà la reintegra; procedura o criteri violati = indennità da 6 a 36 mensilità. Dirigenti: indennità da 12 a 24 mensilità (art. 24, c. 1-quinquies).", ["reintegra", "12 a 24", "criteri di scelta", "6 a 36", "dirigenti"]],
        ["Casi particolari: nella liquidazione giudiziale la procedura è abbreviata (art. 189, c. 6, CCII: consultazione di 10 giorni); le imprese con almeno 250 dipendenti che vogliono chiudere una sede con almeno 50 licenziamenti devono prima seguire la procedura della L. 234/2021, c. 224-238 (comunicazione 180 giorni prima e piano per limitare le ricadute). Il datore versa il contributo di licenziamento (ticket) per ogni lavoratore.", ["liquidazione giudiziale", "189", "250 dipendenti", "180 giorni", "ticket"]]
      ],
      aggancio: "Per il consulente: la lettera di avvio procedura deve essere completa (i suoi vizi la rendono illegittima), i termini vanno calcolati con cura e l'elenco finale con i punteggi dei criteri va comunicato nei 7 giorni; per i recessi successivi al 7/3/2015 conta la data di assunzione di ciascun lavoratore.",
      fonti: "L. 23/7/1991 n. 223, artt. 4, 5 e 24, testo vigente letto su Normattiva il 9/11/2026; D.Lgs. 23/2015, art. 10 (Normattiva); D.Lgs. 14/2019 (CCII), art. 189, c. 6-7 (Normattiva); L. 234/2021, art. 1, c. 224-238."
    },

    "DL-X15": {
      sintesi: "Nel trasferimento d'azienda, cioè ogni operazione che cambia il titolare di un'attività economica organizzata che conserva la propria identità (compresi affitto e usufrutto, anche di un ramo), il rapporto di lavoro continua con il cessionario e il lavoratore conserva tutti i diritti maturati (art. 2112 c.c.); nelle aziende con più di 15 dipendenti cedente e cessionario devono prima informare e consultare i sindacati (art. 47 L. 428/1990).",
      punti: [
        ["Continuità e solidarietà (art. 2112 c.c., c. 1-2): il rapporto prosegue senza bisogno del consenso del lavoratore; cedente e cessionario rispondono in solido dei crediti esistenti al momento del trasferimento; il lavoratore può liberare il cedente solo con una conciliazione nelle sedi degli artt. 410 e 411 c.p.c.", ["prosegue", "cessionario", "in solido", "crediti", "410"]],
        ["Contratto collettivo (c. 3): il cessionario applica i contratti nazionali, territoriali e aziendali in vigore fino alla scadenza, salvo che siano sostituiti da altri contratti applicabili alla sua impresa, ma solo dello stesso livello.", ["contratti nazionali", "scadenza", "sostituit", "stesso livello"]],
        ["Licenziamento e dimissioni (c. 4): il trasferimento non è di per sé motivo di licenziamento; chi subisce una modifica sostanziale delle condizioni nei 3 mesi successivi può dimettersi con gli effetti della giusta causa (art. 2119 c.c.). Ramo d'azienda (c. 5): articolazione funzionalmente autonoma, identificata da cedente e cessionario al momento del trasferimento; se poi c'è appalto sul ramo ceduto, vale la solidarietà dell'art. 29 D.Lgs. 276/2003.", ["di per se", "3 mesi", "giusta causa", "ramo", "funzionalmente autonoma"]],
        ["Procedura (art. 47 L. 428/1990): con più di 15 occupati, comunicazione scritta almeno 25 giorni prima dell'atto o dell'intesa vincolante a RSU o RSA e sindacati di categoria (data, motivi, conseguenze, misure); su richiesta entro 7 giorni esame congiunto entro altri 7, che si esaurisce dopo 10 giorni senza accordo. La violazione è condotta antisindacale (art. 28 St. lav.).", ["25 giorni", "esame congiunto", "10 giorni", "antisindacale", "art. 28"]],
        ["Imprese in crisi (art. 47, c. 4-bis, 5 e 5-bis; art. 191 CCII): nel concordato in continuità indiretta e negli accordi di ristrutturazione non liquidatori un accordo sindacale può limitare l'applicazione dell'art. 2112 sulle condizioni di lavoro; nella liquidazione giudiziale o nel concordato liquidatorio senza continuazione dell'attività i rapporti passano al cessionario, ma i contratti collettivi dell'art. 51 D.Lgs. 81/2015 possono derogare all'art. 2112, c. 1, 3 e 4, non si applica la solidarietà e il TFR è subito esigibile verso il cedente (con intervento del Fondo di garanzia INPS).", ["crisi", "continuit", "liquidazione giudiziale", "derog", "fondo di garanzia"]]
      ],
      aggancio: "Per il consulente: verificare se l'operazione è davvero un trasferimento (identità dell'attività), rispettare i 25 giorni della comunicazione sindacale, gestire il passaggio del CCNL e far firmare in sede protetta le eventuali rinunce o liberatorie del cedente.",
      fonti: "Art. 2112 c.c., testo vigente letto su Normattiva il 9/11/2026; L. 29/12/1990 n. 428, art. 47 (Normattiva, stessa data, con le modifiche del D.Lgs. 136/2024); D.Lgs. 14/2019 (CCII), art. 191 (Normattiva)."
    },

    "DL-X16": {
      sintesi: "Le rappresentanze sindacali aziendali sono costituite su iniziativa dei lavoratori in ogni unità produttiva (con più di 15 dipendenti) nell'ambito dei sindacati che firmano i contratti collettivi applicati, che hanno partecipato alle trattative (C. cost. 231/2013) o che sono comparativamente più rappresentativi sul piano nazionale (C. cost. 156/2025); le RSU sono invece elette da tutti i lavoratori secondo gli accordi interconfederali; contro i comportamenti antisindacali il sindacato ha il ricorso d'urgenza dell'art. 28 dello Statuto dei lavoratori.",
      punti: [
        ["Art. 19 St. lav.: dopo il referendum del 1995 il criterio era solo la firma di contratti collettivi applicati nell'unità produttiva. La Corte costituzionale lo ha esteso ai sindacati che hanno partecipato alle trattative (sent. 231/2013) e, con sent. 30/10/2025 n. 156, a quelli comparativamente più rappresentativi sul piano nazionale, per evitare che firma o trattativa diventino strumenti di esclusione (artt. 3 e 39 Cost.).", ["firma", "referendum", "231/2013", "n. 156", "comparativamente"]],
        ["RSU: previste dal Protocollo del 23/7/1993 e dal Testo unico sulla rappresentanza del 10/1/2014; si costituiscono nelle unità con più di 15 dipendenti mediante elezione a suffragio universale e voto segreto tra liste, con criterio proporzionale; durano 3 anni e hanno gli stessi diritti delle RSA.", ["rsu", "testo unico", "elezion", "proporzional", "3 anni"]],
        ["Diritti e tutele (titolo III St. lav.): assemblea retribuita, affissione, locali, permessi retribuiti e non retribuiti (artt. 23-24); il dirigente sindacale si trasferisce solo con il nulla osta del sindacato (art. 22) e, se licenziato, può ottenere la reintegra in via d'urgenza.", ["assemblea", "permessi", "nulla osta", "art. 22", "reintegra"]],
        ["Condotta antisindacale (art. 28 St. lav.): sono antisindacali i comportamenti che impediscono o limitano la libertà e l'attività sindacale o il diritto di sciopero. Ricorrono gli organismi locali dei sindacati nazionali interessati; il giudice, nei 2 giorni successivi, sentite le parti, ordina con decreto motivato e subito esecutivo la cessazione del comportamento e la rimozione degli effetti; opposizione entro 15 giorni.", ["antisindacal", "organismi locali", "2 giorni", "decreto", "15 giorni"]],
        ["Inottemperanza: il datore che non esegue il decreto o la sentenza di opposizione è punito ai sensi dell'art. 650 c.p., con pubblicazione della sentenza penale. Esempi tipici: omessa informazione e consultazione nel trasferimento d'azienda (art. 47, c. 3, L. 428/1990) o nei licenziamenti collettivi, sostituzione di scioperanti, rifiuto dei diritti di assemblea.", ["650", "pubblicazione", "trasferimento", "sciop", "assemblea"]]
      ],
      aggancio: "Per il consulente: prima di negare a un sindacato i diritti del titolo III (assemblea, permessi, RSA) occorre verificare tutti e tre i criteri dell'art. 19 come risultano dopo le sentenze della Corte costituzionale; un diniego sbagliato espone l'azienda al ricorso dell'art. 28.",
      fonti: "L. 300/1970, artt. 19 e 28, testo vigente letto su Normattiva il 9/11/2026 (con la nota sulla sent. C. cost. 8-30/10/2025 n. 156, G.U. 1a s.s. 5/11/2025 n. 45); L. 428/1990, art. 47, c. 3 (Normattiva); Simone, Diritto del lavoro, pp. 44-46 (C. cost. 231/2013, Protocollo 1993, Testo unico 10/1/2014)."
    },

    "DL-X17": {
      sintesi: "Il sistema di prevenzione del D.Lgs. 81/2008 ruota attorno al datore di lavoro, che può delegare molte funzioni ma non la valutazione dei rischi con il DVR né la nomina del RSPP (art. 17); accanto a lui operano dirigenti e preposti (artt. 18-19), il servizio di prevenzione e protezione, il medico competente e il rappresentante dei lavoratori per la sicurezza.",
      punti: [
        ["Obblighi non delegabili (art. 17): valutazione di tutti i rischi con elaborazione del documento dell'art. 28 (DVR) e designazione del responsabile del servizio di prevenzione e protezione (RSPP).", ["non delegabil", "valutazione", "dvr", "rspp"]],
        ["Delega di funzioni (art. 16): atto scritto con data certa; delegato con professionalità ed esperienza adeguate; poteri di organizzazione, gestione e controllo; autonomia di spesa; accettazione scritta; adeguata e tempestiva pubblicità. Il datore resta obbligato a vigilare, obbligo che si considera assolto con un modello di organizzazione e controllo efficacemente attuato (art. 30, c. 4). La subdelega è ammessa una sola volta, d'intesa con il datore (c. 3-bis).", ["data certa", "autonomia di spesa", "accettazione", "vigilare", "subdelega"]],
        ["Dirigenti e preposti: il datore deve individuare i preposti (art. 18, c. 1, lett. b-bis); il preposto sovrintende e vigila sui lavoratori, interviene sui comportamenti non conformi e, se l'inosservanza persiste o rileva condizioni di pericolo, interrompe l'attività (art. 19, lett. a e f-bis). Chi esercita di fatto i poteri di queste figure ne assume gli obblighi (art. 299).", ["preposto", "vigil", "interrompe", "di fatto", "299"]],
        ["RSPP e medico competente: il RSPP coordina il servizio di prevenzione e protezione (artt. 31-33); il datore può svolgerne direttamente i compiti nei casi dell'allegato II (art. 34). Il medico competente, nominato nei casi di sorveglianza sanitaria obbligatoria, collabora alla valutazione dei rischi e fa le visite e i giudizi di idoneità (artt. 25 e 41).", ["rspp", "art. 34", "medico competente", "sorveglianza sanitaria", "idoneit"]],
        ["RLS (art. 47): c'è in tutte le aziende o unità produttive. Fino a 15 lavoratori è di norma eletto direttamente dai lavoratori o è territoriale (RLST, art. 48); oltre 15 è eletto o designato nell'ambito delle rappresentanze sindacali. Numero, modalità e ore retribuite li fissa la contrattazione collettiva; l'RLS è consultato sulla valutazione dei rischi e riceve il DVR (art. 50).", ["rls", "15 lavoratori", "rlst", "contrattazione", "consultat"]]
      ],
      aggancio: "In ispezione la prima verifica riguarda il DVR, la nomina del RSPP, la formazione e l'individuazione dei preposti: una delega priva dei requisiti dell'art. 16 (data certa, autonomia di spesa, accettazione) non trasferisce la responsabilità e lascia il datore esposto alle contravvenzioni, estinguibili con la prescrizione del D.Lgs. 758/1994.",
      fonti: "D.Lgs. 81/2008, artt. 16, 17, 18, 19 e 47, testo vigente letto su Normattiva il 9/11/2026; estratto 81_2008_ESTRATTO_TitoloI_XII in libreria (artt. 25, 31-34, 41, 48, 50, 299); Simone, Diritto del lavoro, pp. 164-171."
    },

    "DL-X18": {
      sintesi: "Il D.Lgs. 24/2023, che recepisce la direttiva (UE) 2019/1937, protegge chi segnala violazioni di norme nazionali o europee apprese nel contesto di lavoro: le imprese obbligate devono attivare canali interni riservati, il segnalante può in certi casi rivolgersi all'ANAC e ogni ritorsione nei suoi confronti è nulla.",
      punti: [
        ["Soggetti privati obbligati (art. 2, c. 1, lett. q): imprese che nell'ultimo anno hanno impiegato in media almeno 50 lavoratori subordinati; imprese dei settori europei sensibili (servizi finanziari, antiriciclaggio, trasporti, ambiente) a prescindere dal numero; imprese che adottano il modello organizzativo del D.Lgs. 231/2001.", ["50 lavoratori", "settori", "231/2001", "modell"]],
        ["Canale interno (artt. 4-5): deve garantire la riservatezza del segnalante; il gestore rilascia avviso di ricevimento entro 7 giorni e dà riscontro entro 3 mesi. Nelle imprese con sindacati vanno sentite le rappresentanze sindacali prima di attivarlo.", ["canale interno", "riservatezza", "7 giorni", "3 mesi"]],
        ["Canale esterno ANAC (art. 6): solo se il canale interno manca o non è conforme, se la segnalazione interna non ha avuto seguito, se si teme che non lo avrà o che porti ritorsioni, oppure se c'è un pericolo imminente per l'interesse pubblico. Sono previste anche la divulgazione pubblica e la denuncia all'autorità giudiziaria.", ["anac", "esterno", "seguito", "ritorsion", "pericolo"]],
        ["Divieto di ritorsioni (artt. 17 e 19): si presume che gli atti sfavorevoli siano conseguenza della segnalazione e il datore deve provare il contrario; gli atti ritorsivi sono nulli e chi è licenziato ha diritto alla reintegra secondo l'art. 18 St. lav. o l'art. 2 D.Lgs. 23/2015.", ["presume", "provare il contrario", "null", "reintegr"]],
        ["Sanzioni ANAC (art. 21): da 10.000 a 50.000 euro per ritorsioni, ostacolo alla segnalazione o violazione della riservatezza, e per la mancata istituzione dei canali o di procedure conformi; da 500 a 2.500 euro al segnalante in mala fede, salvo condanna per diffamazione o calunnia.", ["10.000", "50.000", "riservatezza", "500", "calunnia"]]
      ],
      aggancio: "Per il consulente: nelle aziende clienti con almeno 50 dipendenti medi o con modello 231 va verificata l'esistenza del canale interno, della procedura scritta e del gestore designato; un licenziamento disciplinare vicino a una segnalazione deve poggiare su ragioni documentate, perché l'onere della prova è invertito.",
      fonti: "D.Lgs. 10/3/2023 n. 24, artt. 2, 5, 6, 17, 19 e 21, testo vigente letto su Normattiva il 9/11/2026; Simone, Diritto del lavoro, p. 110."
    },

    "DL-X19": {
      sintesi: "Il datore di lavoro tratta i dati dei dipendenti come titolare del trattamento secondo il Regolamento UE 2016/679 (GDPR) e il Codice privacy (D.Lgs. 196/2003), che per il rapporto di lavoro rinvia ai divieti di indagine dell'art. 8 e alle regole sui controlli a distanza dell'art. 4 dello Statuto dei lavoratori.",
      punti: [
        ["Principi del GDPR (art. 5): liceità, correttezza e trasparenza, limitazione delle finalità, minimizzazione, protezione dei dati fin dalla progettazione (art. 25). Il lavoratore riceve l'informativa (art. 13); per i dati necessari al contratto e agli obblighi di legge non serve il consenso.", ["liceit", "minimizzazione", "informativa", "consenso"]],
        ["Divieti di indagine (art. 113 Codice privacy, che rinvia all'art. 8 St. lav. e all'art. 10 D.Lgs. 276/2003): nessuna indagine, anche tramite terzi, su opinioni politiche, religiose o sindacali o su fatti non rilevanti per l'attitudine professionale, né in assunzione né durante il rapporto.", ["113", "art. 8", "opinioni", "attitudine professionale"]],
        ["Controlli a distanza (art. 114 Codice privacy, che rinvia all'art. 4 St. lav.): impianti e strumenti da cui deriva anche la possibilità di controllo solo per esigenze organizzative e produttive, sicurezza o tutela del patrimonio, previo accordo sindacale o autorizzazione dell'ITL; non servono per gli strumenti di lavoro e di rilevazione delle presenze. I dati sono utilizzabili a tutti i fini del rapporto solo con adeguata informazione al lavoratore e nel rispetto del Codice privacy (art. 4, c. 3).", ["114", "accordo", "autorizzazione", "strumenti", "informazione"]],
        ["Dati particolari (art. 9 GDPR; art. 2-septies Codice): dati sanitari, biometrici, sindacali sono vietati salvo eccezioni, tra cui l'adempimento di obblighi di diritto del lavoro e della sicurezza sociale e la valutazione della capacità lavorativa; servono misure di garanzia. Le regole di dettaglio per il lavoro possono venire da legge o contratti collettivi (art. 88 GDPR).", ["dati particolari", "sanitari", "biometric", "eccezion", "art. 88"]],
        ["Sanzioni e nuovi strumenti: la violazione degli artt. 4, c. 1, e 8 St. lav. è punita con le sanzioni penali dell'art. 38 St. lav. (art. 171 Codice privacy); le altre violazioni del GDPR danno sanzioni amministrative del Garante. Per i sistemi di intelligenza artificiale usati nel lavoro valgono gli obblighi di sicurezza, trasparenza e riservatezza (art. 11 L. 132/2025) e gli obblighi informativi dell'art. 1-bis D.Lgs. 152/1997.", ["171", "art. 38", "garante", "intelligenza artificiale", "132/2025"]]
      ],
      aggancio: "Per il consulente, che di regola tratta i dati dei dipendenti del cliente come responsabile del trattamento: servono la nomina scritta (art. 28 GDPR), misure di sicurezza adeguate e attenzione al LUL e alle buste paga, che contengono dati sanitari (malattia, infortunio, invalidità).",
      fonti: "D.Lgs. 196/2003, artt. 113, 114 e 171, e L. 300/1970, artt. 4 e 8, testo vigente letto su Normattiva il 9/11/2026; Simone, Diritto del lavoro, pp. 136-139 (GDPR artt. 4, 5, 9, 13, 25; art. 2-septies Codice; L. 132/2025; D.M. 180/2025)."
    },

    "DL-X20": {
      sintesi: "L'apertura della liquidazione giudiziale non scioglie i rapporti di lavoro ma li sospende: entro 4 mesi (con possibile proroga fino a 8 mesi decisa dal giudice delegato) il curatore, autorizzato, decide se subentrare o recedere; senza decisione i rapporti cessano dalla data di apertura e la cessazione dà diritto alla NASpI (artt. 189-190 CCII).",
      punti: [
        ["Sospensione (art. 189, c. 1-2): dall'apertura i rapporti restano sospesi finché il curatore, con l'autorizzazione del giudice delegato e sentito il comitato dei creditori, comunica il subentro o il recesso; il recesso ha effetto dalla data di apertura, il subentro dalla comunicazione. Se non c'è esercizio provvisorio né possibilità di trasferire l'azienda, il curatore comunica per iscritto il recesso (c. 3).", ["sospes", "curatore", "subentr", "recesso", "data di apertura"]],
        ["Termine di 4 mesi (c. 3-4): se il curatore non subentra entro 4 mesi dall'apertura, i rapporti cessano dalla data di apertura e il lavoratore non restituisce le somme assistenziali o previdenziali percepite nella sospensione. Su istanza del curatore o anche dei singoli lavoratori, se ci sono elementi concreti per l'esercizio dell'impresa o per il trasferimento dell'azienda, il giudice delegato può assegnare un nuovo termine non superiore a 8 mesi dal suo provvedimento.", ["4 mesi", "cessano", "restitu", "istanza", "8 mesi"]],
        ["Dimissioni (c. 5): quelle rassegnate durante la sospensione si considerano per giusta causa, con effetto dalla data di apertura; restano salvi i trattamenti di integrazione salariale del D.Lgs. 148/2015.", ["dimission", "giusta causa", "148/2015"]],
        ["Licenziamento collettivo (c. 6-8): procedura semplificata rispetto alla L. 223/1991 (comunicazione a sindacati e ITL, richiesta di esame congiunto entro 7 giorni, consultazione chiusa dopo 10 giorni, prorogabili di altri 10); non si applica la procedura per le chiusure di sede della L. 234/2021, né nell'amministrazione straordinaria.", ["licenziamento collettivo", "7 giorni", "10 giorni", "234/2021"]],
        ["Crediti e prestazioni (art. 189, c. 9; artt. 190-191): spettano indennità di mancato preavviso e TFR, ammessi al passivo come crediti anteriori (privilegio dell'art. 2751-bis c.c.); il ticket di licenziamento è anch'esso credito anteriore. La cessazione è perdita involontaria del lavoro ai fini NASpI e il termine per la domanda decorre dalla comunicazione del curatore o dalle dimissioni. TFR e ultime 3 mensilità sono garantiti dal Fondo di garanzia INPS (L. 297/1982; D.Lgs. 80/1992). In caso di cessione dell'azienda si applica l'art. 47 L. 428/1990.", ["mancato preavviso", "passivo", "2751-bis", "naspi", "fondo di garanzia"]]
      ],
      aggancio: "Per il consulente: in questa fase si collabora con il curatore (prospetti per l'insinuazione al passivo, comunicazioni di cessazione, Uniemens, CU) e si indirizzano i lavoratori a domanda di NASpI e, dopo l'esecutività dello stato passivo, al Fondo di garanzia INPS.",
      fonti: "D.Lgs. 12/1/2019 n. 14 (CCII), artt. 189, 190 e 191, testo vigente letto su Normattiva il 9/11/2026; art. 47 L. 428/1990 (Normattiva); ORALE_05_Crisi_impresa_CdL_scheda in libreria; L. 297/1982, art. 2, e D.Lgs. 80/1992, art. 2 (richiamati dall'art. 47, c. 5-bis, L. 428/1990)."
    },

    "INPS-X2": {
      sintesi: "La gestione separata, istituita presso l'INPS dal 1996 (art. 2, c. 26, L. 335/1995), assicura per invalidità, vecchiaia e superstiti i lavoratori che non hanno un'altra gestione obbligatoria per quell'attività: collaboratori coordinati e continuativi e figure assimilate (amministratori, sindaci, dottorandi), professionisti senza cassa e autonomi occasionali oltre 5.000 euro annui.",
      punti: [
        ["Iscritti: co.co.co., amministratori, sindaci e revisori di società, dottorandi e assegnisti, partecipanti a collegi e commissioni; professionisti senza cassa o, se iscritti a una cassa, per i redditi non assoggettati a essa; autonomi occasionali e venditori a domicilio con reddito annuo oltre 5.000 euro; dal 2025 anche i content creator con attività professionale (circ. INPS 44/2025).", ["co.co.co", "amministrator", "senza cassa", "occasional", "5.000"]],
        ["Aliquote 2026 per collaboratori e assimilati (circ. INPS 8/2026): 35,03% (33% IVS + 0,72% + 1,31% DIS-COLL) se è dovuto il contributo DIS-COLL; 33,72% se non è dovuto; 24% per pensionati e per chi ha già un'altra copertura obbligatoria.", ["35,03%", "33,72%", "24%", "dis-coll", "8/2026"]],
        ["Riparto e versamento per collaboratori: 2/3 a carico del committente e 1/3 del collaboratore; il committente versa tutto con F24 entro il 16 del mese successivo al pagamento (principio di cassa, con il criterio del 12 gennaio) e trasmette i dati con UniEmens.", ["2/3", "1/3", "committente", "16 del mese", "uniemens"]],
        ["Professionisti: aliquota complessiva 26,07% (25% IVS + 0,72% + 0,35% ISCRO), 24% se pensionati o assicurati altrove; contributi interamente a loro carico, versati con F24 alle scadenze delle imposte sui redditi, con facoltà di addebitare al committente la rivalsa del 4% sui compensi lordi (art. 1, c. 212, L. 662/1996).", ["26,07%", "iscro", "loro carico", "scadenze", "rivalsa"]],
        ["Limiti e tutele: i contributi si calcolano fino al massimale annuo e l'anno è accreditato per intero solo se si raggiunge il minimale di reddito degli artigiani e commercianti (art. 2, c. 18 e 29, L. 335/1995; art. 1, c. 3, L. 233/1990). Prestazioni: DIS-COLL per i collaboratori, ISCRO per i professionisti, maternità, malattia e ANF.", ["massimale", "minimale", "dis-coll", "iscro", "maternit"]]
      ],
      aggancio: "Per il consulente: nel cedolino del collaboratore la quota di un terzo si trattiene come contributo, il compenso è reddito assimilato (art. 50 TUIR) e va indicato in CU; occorre verificare se il collaboratore è già pensionato o iscritto ad altra forma, perché cambia l'aliquota.",
      fonti: "Simone, Legislazione sociale, pp. 290-294 (L. 335/1995, art. 2, c. 26-29; circ. INPS 8/2026, 44/2025 e 12/2023; L. 234/2021, art. 1, c. 223). Rivalsa del 4% sui compensi: art. 1, c. 212, L. 662/1996, letto su Normattiva il 9/11/2026."
    },

    "INPS-X3": {
      sintesi: "Gli incentivi all'occupazione riducono o azzerano i contributi a carico del datore che assume o stabilizza determinate categorie di lavoratori; spettano solo se il datore rispetta i principi generali dell'art. 31 D.Lgs. 150/2015, è in regola con il DURC e i contratti collettivi (art. 1, c. 1175, L. 296/2006) e, dal 2026, se il trattamento economico individuale non è inferiore a quello del CCNL di riferimento (art. 7, c. 5, D.L. 62/2026).",
      punti: [
        ["Condizioni generali: regolarità contributiva (DURC), rispetto delle norme di tutela del lavoro e dei contratti collettivi delle organizzazioni comparativamente più rappresentative (art. 1, c. 1175, L. 296/2006); dal D.L. 62/2026 i benefici spettano solo se la retribuzione individuale non è inferiore al trattamento economico complessivo del CCNL di riferimento (art. 7, c. 5).", ["durc", "1175", "contratti collettivi", "art. 7", "trattamento economico complessivo"]],
        ["Principi dell'art. 31 D.Lgs. 150/2015: niente incentivo se l'assunzione attua un obbligo di legge o di contratto, se viola un diritto di precedenza, se il datore ha sospensioni in corso per crisi (salvo livelli o unità diverse), o per lavoratori licenziati nei 6 mesi precedenti da un datore con assetti proprietari coincidenti o collegato.", ["obbligo", "precedenza", "sospension", "6 mesi", "assetti proprietari"]],
        ["Bonus 2026 del D.L. 62/2026 (assunzioni a tempo indeterminato dal 1/1 al 31/12/2026, esonero del 100% dei contributi datoriali esclusi i premi INAIL, per 24 mesi): donne svantaggiate, fino a 650 euro al mese, 800 nella ZES (art. 1); giovani sotto i 35 anni senza impiego regolare da 24 mesi (o 12 se svantaggiati), fino a 500 euro, 650 se la sede è nella ZES o nelle Marche e in Umbria (art. 2); assunzioni nella ZES unica, fino a 650 euro (art. 3).", ["100", "24 mesi", "donne", "35 anni", "marche"]],
        ["Stabilizzazione (art. 4): trasformazioni a tempo indeterminato dal 1/8 al 31/12/2026 di contratti a termine non superiori a 12 mesi, nati entro il 30/4/2026, di under 35 mai assunti a tempo indeterminato; esonero fino a 500 euro al mese per 24 mesi. Per il bonus giovani occorre anche non aver fatto licenziamenti per GMO o collettivi nei 6 mesi precedenti nella stessa unità produttiva (art. 2, c. 7).", ["trasformazion", "12 mesi", "under 35", "500 euro", "licenziamenti"]],
        ["Altri esoneri: certificazione della parità di genere, fino all'1% dei contributi datoriali e 50.000 euro annui (art. 5 L. 162/2021); aziende con certificazioni di conciliazione famiglia-lavoro, stesso limite, per il 2026-2028 (art. 6 D.L. 62/2026); per le lavoratrici madri l'esonero della quota IVS a loro carico slitta al 2027 e nel 2026 c'è un'integrazione di 60 euro mensili (L. 199/2025). Gli esoneri non toccano l'aliquota di computo della pensione.", ["parit", "50.000", "conciliazione", "madri", "aliquota di computo"]]
      ],
      aggancio: "Per il consulente: prima di assumere con un incentivo si fa la verifica preventiva (DURC, CCNL applicato e retribuzione rispetto al TEC, precedenze, licenziamenti nei 6 mesi, cumulabilità); la domanda all'INPS va fatta nei tempi e un incentivo indebito, scoperto in ispezione, comporta il recupero dei contributi con le sanzioni civili.",
      fonti: "D.L. 30/4/2026 n. 62 conv. L. 112/2026, artt. 1, 2, 3, 4, 6 e 7, e D.Lgs. 150/2015, art. 31, testo vigente letto su Normattiva il 9/11/2026; Simone, Legislazione sociale, pp. 277-279 (parità di genere, L. 162/2021; lavoratrici madri, L. 199/2025, art. 1, c. 206-207)."
    },

    "INPS-X4": {
      sintesi: "Chi ha versato contributi in più gestioni previdenziali può unirli per ottenere un'unica pensione con tre istituti: la ricongiunzione, che trasferisce materialmente i contributi in una sola gestione ed è onerosa; la totalizzazione e il cumulo, che sono gratuiti e sommano i periodi non coincidenti, con pensione calcolata pro quota da ciascuna gestione.",
      punti: [
        ["Ricongiunzione dei dipendenti e autonomi (L. 29/1979): trasferimento dei contributi nell'AGO dell'INPS o nella gestione di iscrizione attuale o in quella con almeno 8 anni di contributi; vale per il diritto e per la misura della pensione, ma è a titolo oneroso, a carico del lavoratore.", ["29/1979", "trasfer", "8 anni", "oneroso", "misura"]],
        ["Ricongiunzione con le casse professionali (L. 45/1990): in entrata o in uscita dalle casse dei liberi professionisti; anch'essa onerosa. Dal 2026 l'INPS la ammette anche tra gestione separata e casse professionali (circ. INPS 15/2026, riportata da Simone).", ["45/1990", "casse", "gestione separata", "15/2026"]],
        ["Totalizzazione (D.Lgs. 42/2006): gratuita, per chi non è già titolare di pensione in una delle gestioni; somma i periodi non coincidenti, che vanno totalizzati tutti e per intero; ogni gestione calcola la sua quota e l'INPS paga la pensione in modo unitario.", ["42/2006", "gratuit", "non coincidenti", "per intero", "quota"]],
        ["Cumulo gratuito (art. 1, c. 239 ss., L. 228/2012, ampliato dalla L. 232/2016): per gli iscritti a due o più gestioni, anche gestione separata e casse professionali, non già pensionati; serve a raggiungere i requisiti della pensione di vecchiaia o anticipata; calcolo pro quota secondo le regole di ciascuna gestione (circ. INPS 140/2017).", ["228/2012", "cumulo", "casse professionali", "vecchiaia", "pro quota"]],
        ["Cumulo per i contributivi puri (art. 1 D.Lgs. 184/1997): per chi ha il calcolo interamente contributivo; i periodi nelle casse professionali contano solo per il diritto, non per la misura (circ. INPS 103/2017). Regola pratica: ricongiunzione se conviene il calcolo più favorevole di una sola gestione e se ne vale il costo; altrimenti cumulo, che di regola è più vantaggioso della totalizzazione.", ["184/1997", "contributiv", "diritto", "costo", "vantaggios"]]
      ],
      aggancio: "Per il consulente: per i clienti con carriere miste (dipendente, artigiano, professionista) si chiede all'INPS l'estratto conto certificato e si confrontano costo e beneficio prima di scegliere; l'ultima frase del punto 5 è una regola di prudenza, da verificare caso per caso.",
      fonti: "Simone, Legislazione sociale, pp. 260-262 (L. 29/1979, artt. 1-2; L. 45/1990, art. 1; D.Lgs. 42/2006; L. 228/2012, art. 1, c. 239 ss.; L. 232/2016, art. 1, c. 195 ss.; D.Lgs. 184/1997, art. 1; circ. INPS 69/2006, 60/2017, 103/2017, 140/2017, 15/2026)."
    },

    "INPS-X5": {
      sintesi: "Il ticket di licenziamento è una somma una tantum a carico del datore di lavoro, destinata a finanziare la NASpI, dovuta quando un rapporto a tempo indeterminato cessa per una causa che darebbe diritto alla NASpI, a prescindere dal fatto che il lavoratore abbia i requisiti contributivi o la chieda davvero (art. 2, c. 31, L. 92/2012).",
      punti: [
        ["Quando è dovuto: licenziamento individuale o collettivo, dimissioni per giusta causa, dimissioni nel periodo tutelato di maternità e, per il padre, nel periodo di paternità fino a un anno del figlio (circ. INPS 32/2023); anche per le interruzioni dell'apprendistato diverse dalle dimissioni (c. 32). Non è dovuto per le dimissioni volontarie ordinarie.", ["licenziamento", "giusta causa", "maternit", "apprendistato", "dimissioni volontarie"]],
        ["Importo: 41% del massimale mensile NASpI per ogni 12 mesi di anzianità aziendale negli ultimi 3 anni (massimo 3 quote), proporzionato ai mesi per periodi inferiori (mese intero se di almeno 15 giorni); non dipende dalla retribuzione né dal part-time. Con il massimale 2026 di 1.584,70 euro: circa 649,73 euro per anno, al massimo circa 1.949 euro.", ["41%", "12 mesi", "3 anni", "part-time", "1.584,70"]],
        ["Anzianità: si contano anche i periodi con contratti diversi dal tempo indeterminato se il rapporto è proseguito senza interruzione o se è stato restituito il contributo addizionale (c. 31).", ["anzianit", "senza interruzione", "addizionale"]],
        ["Licenziamenti collettivi: dal 2017 il ticket è triplicato se la dichiarazione di eccedenza non è stata oggetto di accordo sindacale (c. 35); dal 2018 per i datori tenuti alla CIGS l'aliquota è dell'82% per ogni licenziamento collettivo (art. 1, c. 137, L. 205/2017).", ["triplicat", "accordo sindacale", "82%", "cigs"]],
        ["Esclusioni e versamento: non è dovuto nei cambi di appalto con riassunzione in base a clausole sociali dei CCNL e nell'edilizia per fine lavori e chiusura del cantiere (c. 34). Si versa in un'unica soluzione, senza rateazione, con la denuncia contributiva successiva alla cessazione (circ. INPS 44/2013). Nella liquidazione giudiziale è ammesso al passivo come credito anteriore (art. 189, c. 9, CCII).", ["appalto", "clausole sociali", "cantiere", "unica soluzione", "passivo"]]
      ],
      aggancio: "Per il consulente: il ticket va sempre stimato prima di un licenziamento, perché è un costo di uscita certo; in una procedura collettiva l'accordo sindacale evita la triplicazione, e questo pesa nelle trattative.",
      fonti: "L. 28/6/2012 n. 92, art. 2, c. 31-35, testo vigente letto su Normattiva il 9/11/2026; Simone, Legislazione sociale, pp. 376-377 (circ. INPS 44/2013 e 32/2023; L. 205/2017, art. 1, c. 137); massimale NASpI 2026 da Simone, Legislazione sociale (1.584,70 euro); D.Lgs. 14/2019, art. 189, c. 9 (Normattiva)."
    },

    "PPP-X2": {
      sintesi: "La L. 241/1990 regola come la pubblica amministrazione decide: l'attività amministrativa segue i criteri di economicità, efficacia, imparzialità, pubblicità e trasparenza (art. 1), ogni procedimento ha un responsabile e un termine certo di conclusione con provvedimento espresso e motivato, e gli interessati possono partecipare e accedere ai documenti.",
      punti: [
        ["Termine e motivazione: il procedimento si conclude con provvedimento espresso entro il termine fissato o, in mancanza, entro 30 giorni (art. 2); ogni provvedimento è motivato con i presupposti di fatto e le ragioni giuridiche (art. 3); l'amministrazione nomina un responsabile del procedimento (artt. 4-6).", ["espresso", "30 giorni", "motiva", "responsabile del procedimento"]],
        ["Partecipazione: comunicazione di avvio agli interessati (art. 7), facoltà di presentare memorie e documenti (art. 10); nei procedimenti a istanza di parte, prima del diniego, preavviso dei motivi ostativi con 10 giorni per le osservazioni (art. 10-bis).", ["avvio", "memorie", "10-bis", "motivi ostativi", "10 giorni"]],
        ["Semplificazione e patologia: segnalazione certificata di inizio attività (art. 19) e silenzio assenso (art. 20); il provvedimento viziato da violazione di legge, incompetenza o eccesso di potere è annullabile (art. 21-octies) e l'amministrazione può annullarlo d'ufficio per interesse pubblico entro un termine ragionevole, non superiore a sei mesi per autorizzazioni e vantaggi economici (art. 21-nonies, testo vigente).", ["segnalazione certificata", "silenzio assenso", "annullabil", "d'ufficio", "sei mesi"]],
        ["Accesso documentale (artt. 22-25): spetta a chi ha un interesse diretto, concreto e attuale collegato al documento; la richiesta non accolta entro 30 giorni si intende respinta e si può ricorrere al TAR o alla Commissione per l'accesso. Va comunque garantito l'accesso necessario a difendere i propri interessi giuridici (art. 24, c. 7). Diverso è l'accesso civico generalizzato (art. 5 D.Lgs. 33/2013), aperto a chiunque.", ["interesse diretto", "30 giorni", "tar", "difendere", "accesso civico"]],
        ["Documenti ispettivi: il D.M. 757/1994 (art. 2) sottrae all'accesso, tra l'altro, la programmazione della vigilanza, le richieste di intervento e le notizie acquisite nelle ispezioni quando la loro divulgazione può esporre i lavoratori a discriminazioni, pressioni o pregiudizi; il bilanciamento con il diritto di difesa del datore è affidato al giudice amministrativo caso per caso.", ["757/1994", "vigilanza", "richieste di intervento", "pressioni", "difesa"]]
      ],
      aggancio: "Nel lavoro la L. 241/1990 si applica al provvedimento di disposizione degli ispettori (art. 14 D.Lgs. 124/2004): il termine di 30 giorni è ordinatorio e la motivazione può rinviare ai verbali e alle dichiarazioni, purché siano citati e resi accessibili (Cons. Stato 2778/2024, riportata da Rausei). Dopo un verbale il consulente chiede l'accesso agli atti; le dichiarazioni dei lavoratori sono spesso negate in base al D.M. 757/1994, e va spiegato perché servono alla difesa.",
      fonti: "L. 7/8/1990 n. 241, artt. 2, 10-bis, 21-nonies, 22, 24 e 25, testo vigente letto su Normattiva il 9/11/2026; D.M. Lavoro 4/11/1994 n. 757, art. 2 (Normattiva); art. 1, 3-7, 10, 19-20 e 21-octies L. 241/1990 (stessa fonte, impianto generale); D.Lgs. 33/2013, art. 5; Rausei, Diffida accertativa e disposizione, Lav. giur. 8-9/2026 (Cons. Stato, sez. III, 21/3/2024 n. 2778)."
    },

    "PPP-X3": {
      sintesi: "Il diritto dell'Unione europea comprende i Trattati (TUE e TFUE) e la Carta dei diritti fondamentali come fonti primarie, e regolamenti, direttive e decisioni come fonti derivate (art. 288 TFUE); prevale sul diritto nazionale incompatibile grazie alle limitazioni di sovranità consentite dagli artt. 11 e 117, c. 1, Cost.",
      punti: [
        ["Istituzioni (art. 13 TUE): Parlamento europeo, Consiglio europeo, Consiglio, Commissione europea, Corte di giustizia dell'Unione europea, Banca centrale europea e Corte dei conti. Nella procedura legislativa ordinaria la Commissione propone e Parlamento e Consiglio adottano insieme.", ["parlamento europeo", "consiglio", "commissione", "corte di giustizia", "procedura legislativa"]],
        ["Atti (art. 288 TFUE): il regolamento ha portata generale, è obbligatorio in tutti i suoi elementi e direttamente applicabile; la direttiva vincola lo Stato quanto al risultato e lascia la scelta di forma e mezzi; la decisione è obbligatoria per i destinatari; raccomandazioni e pareri non sono vincolanti.", ["regolamento", "direttamente applicabile", "direttiva", "risultato", "decisione"]],
        ["Primato: il giudice nazionale non applica la norma interna incompatibile con una norma europea direttamente applicabile (C. giust. Costa/ENEL 1964; C. cost. 170/1984, Granital). In caso di dubbio sull'interpretazione il giudice rimette la questione alla Corte di giustizia con il rinvio pregiudiziale (art. 267 TFUE).", ["primato", "non applica", "170/1984", "rinvio pregiudiziale", "267"]],
        ["Direttive non attuate: le disposizioni chiare, precise e incondizionate di una direttiva scaduta possono essere invocate contro lo Stato (efficacia diretta verticale); lo Stato inadempiente risarcisce i danni ai singoli (C. giust. Francovich, 1991).", ["efficacia diretta", "verticale", "scadut", "francovich", "risarc"]],
        ["Recepimento in Italia (L. 234/2012): ogni anno la legge di delegazione europea delega il Governo ad attuare le direttive con decreti legislativi e la legge europea corregge le norme in contrasto. Esempi nel lavoro: D.Lgs. 96/2026 (trasparenza retributiva, dir. 2023/970), D.Lgs. 24/2023 (whistleblowing, dir. 2019/1937); la dir. 2024/2831 sulle piattaforme va recepita entro il 2/12/2026.", ["234/2012", "delegazione europea", "legge europea", "96/2026", "2024/2831"]]
      ],
      aggancio: "Per il diritto del lavoro: molte riforme recenti nascono da direttive (trasparenza, whistleblowing, piattaforme, salari minimi adeguati); quando il recepimento tarda, il consulente deve sapere che la direttiva scaduta può già produrre effetti nei rapporti con lo Stato e con le pubbliche amministrazioni.",
      fonti: "TUE, art. 13, e TFUE, artt. 267 e 288 (versioni consolidate, EUR-Lex); Cost., artt. 11 e 117, c. 1; L. 24/12/2012 n. 234, artt. 29-30; C. cost. 170/1984; C. giust. 15/7/1964, causa 6/64 (Costa/ENEL) e 19/11/1991, cause C-6/90 e C-9/90 (Francovich); D.Lgs. 96/2026 e D.Lgs. 24/2023 (Normattiva). Termine di recepimento della dir. 2024/2831 da P1_Cap07_Piattaforme."
    },

    "TRIB-X2": {
      sintesi: "L'IVA è un'imposta indiretta sui consumi, che colpisce il valore aggiunto in ogni fase della produzione e dello scambio: il soggetto passivo addebita l'imposta al cliente (rivalsa) e detrae quella pagata sugli acquisti, così che il peso grava sul consumatore finale (D.P.R. 633/1972).",
      punti: [
        ["Tre presupposti: oggettivo, cessioni di beni e prestazioni di servizi (artt. 2-3); soggettivo, esercizio di impresa, arti o professioni (artt. 4-5); territoriale, operazioni effettuate in Italia (artt. 7 ss.). Se ne manca uno l'operazione è fuori campo IVA.", ["oggettivo", "soggettivo", "territorial", "fuori campo"]],
        ["Tipi di operazioni: imponibili, non imponibili (esportazioni e cessioni intracomunitarie, che danno diritto alla detrazione), esenti (art. 10, di regola senza detrazione), escluse. Aliquote: ordinaria 22%, ridotte 10%, 5% e 4% secondo la tabella A.", ["imponibil", "non imponibil", "esenti", "22%", "4%"]],
        ["Detrazione (art. 19): il diritto nasce quando l'imposta diventa esigibile e si esercita al più tardi con la dichiarazione dell'anno in cui è sorto; non spetta per gli acquisti destinati a operazioni esenti, con il pro rata se l'attività è mista. Reverse charge (art. 17): in alcuni settori l'imposta la versa il cliente.", ["detrazione", "esigibil", "pro rata", "reverse charge"]],
        ["Adempimenti: fattura elettronica tramite il Sistema di interscambio; registrazione delle fatture emesse entro il 15 del mese successivo; liquidazioni e versamenti mensili, oppure trimestrali per chi nell'anno precedente non ha superato 500.000 euro (servizi e professioni) o 800.000 euro (altre attività); dichiarazione annuale dal 1° febbraio al 30 aprile.", ["fattura elettronica", "15 del mese", "trimestral", "500.000", "30 aprile"]],
        ["Novità: il Testo unico IVA (D.Lgs. 19/1/2026 n. 10, 171 articoli) riordina la disciplina secondo l'impianto della direttiva 2006/112/CE e si applica dal 1° gennaio 2027; fino ad allora resta il D.P.R. 633/1972. Il regime forfettario è fuori dall'IVA: niente rivalsa né detrazione.", ["testo unico", "n. 10", "2027", "forfettario"]]
      ],
      aggancio: "Per il consulente del lavoro: la fattura si emette al pagamento (art. 6, c. 3); l'IVA al 22% si calcola su onorario più contributo integrativo ENPACL del 4%, la ritenuta del 20% solo sull'onorario e solo se il cliente è sostituto d'imposta; le anticipazioni in nome e per conto del cliente restano fuori dalla base IVA (art. 15).",
      fonti: "Simone, Diritto tributario, pp. 624-651 (D.P.R. 633/1972, artt. 2-5, 7, 10, 15, 17, 19; D.P.R. 542/1999, art. 7; D.Lgs. 10/2026); P2_Mod05_Fattura_CdL_v2 e P2_00_PARAMETRI, § 11, in libreria per la fattura del consulente (contributo integrativo: regolamento ENPACL, art. 38, c. 2)."
    },

    "TRIB-X3": {
      sintesi: "L'IRES è l'imposta proporzionale sul reddito delle società di capitali, degli enti commerciali e non commerciali e dei non residenti (art. 73 TUIR); si applica con aliquota del 24% (art. 77) sul reddito complessivo netto, che per le società si determina partendo dall'utile o dalla perdita del conto economico (art. 83).",
      punti: [
        ["Soggetti passivi (art. 73): S.p.A., S.a.p.A., S.r.l., cooperative e mutue assicuratrici residenti; enti pubblici e privati e trust con attività commerciale esclusiva o principale; enti non commerciali; società ed enti non residenti. Le società di persone non pagano IRES: il loro reddito è imputato ai soci per trasparenza (art. 5).", ["art. 73", "cooperative", "enti", "non residenti", "trasparenza"]],
        ["Presupposto e periodo (artt. 72 e 76): possesso di redditi in denaro o in natura; l'imposta è dovuta per periodi d'imposta, ciascuno con un'obbligazione autonoma, che coincidono con l'esercizio sociale.", ["presupposto", "possesso", "periodi d'imposta", "esercizio"]],
        ["Base imponibile (art. 83): principio di derivazione dal bilancio, utile o perdita del conto economico corretti con variazioni in aumento e in diminuzione previste dal TUIR; competenza, certezza e inerenza (art. 109). Le perdite si riportano senza limiti di tempo ma nel limite dell'80% del reddito di ogni anno, tranne quelle dei primi tre periodi (art. 84).", ["derivazione", "variazioni", "competenza", "80%", "primi tre"]],
        ["Costi del personale e interessi: le spese per lavoro dipendente sono deducibili, comprese le liberalità ai lavoratori, nei limiti dell'art. 100 per le opere di utilità sociale (art. 95); gli interessi passivi netti sono deducibili entro il 30% del ROL (art. 96).", ["art. 95", "liberalit", "art. 100", "30%", "rol"]],
        ["Aliquota e adempimenti: 24% (art. 77); dichiarazione con il modello Redditi SC; saldo e acconti alle scadenze delle imposte sui redditi. Ai fini IRAP, la società paga anche l'imposta regionale sul valore della produzione, in cui il costo del personale a tempo indeterminato è deducibile.", ["24%", "redditi sc", "acconti", "irap", "tempo indeterminato"]]
      ],
      aggancio: "Per il consulente: il costo del lavoro che elabora (retribuzioni, contributi, TFR, welfare) entra nel conto economico e quindi nella base IRES; deve sapere quali erogazioni sono deducibili per l'azienda e insieme esenti per il lavoratore (art. 51 TUIR) e quali no.",
      fonti: "D.P.R. 917/1986 (TUIR), artt. 5, 72, 73, 75, 76, 77, 83, 84, 95, 96 e 109, testo vigente al 4/10/2026 in libreria (917_1986_TUIR); deducibilità IRAP del costo del personale a tempo indeterminato: art. 11, c. 4-octies, D.Lgs. 446/1997 (già nel simulatore, scheda IRAP)."
    },

    "TRIB-X4": {
      sintesi: "L'accertamento è l'atto con cui l'amministrazione finanziaria, dopo l'istruttoria, rettifica il reddito dichiarato o lo determina se la dichiarazione manca; l'avviso deve essere motivato, preceduto a pena di annullabilità da un contraddittorio informato ed effettivo (art. 6-bis L. 212/2000) e notificato entro i termini di decadenza dell'art. 43 D.P.R. 600/1973.",
      punti: [
        ["Metodi per le persone fisiche (art. 38): analitico, per singole categorie di reddito; sintetico, in base alle spese sostenute, ammesso solo se il reddito accertabile supera di almeno un quinto quello dichiarato. Per le imprese (art. 39): analitico contabile; analitico-induttivo con presunzioni gravi, precise e concordanti; induttivo extracontabile se le scritture sono inattendibili o mancano.", ["analitico", "sintetico", "un quinto", "gravi, precise e concordanti", "induttivo"]],
        ["Contraddittorio preventivo (art. 6-bis L. 212/2000, dal 2024): l'ufficio comunica lo schema di atto e assegna almeno 60 giorni per osservazioni o accesso al fascicolo; l'atto finale motiva sulle osservazioni non accolte. Escluso per gli atti automatizzati e di controllo formale e per il fondato pericolo per la riscossione.", ["6-bis", "schema", "60 giorni", "osservazioni", "automatizzat"]],
        ["Avviso di accertamento: motivazione e dispositivo con imponibile, aliquote, imposte, ritenute e crediti (art. 42); notifica a mano, con raccomandata o via PEC entro il 31 dicembre del quinto anno successivo alla dichiarazione, del settimo se è omessa o nulla (art. 43). È esecutivo dopo il termine per ricorrere (art. 29 D.L. 78/2010).", ["motivazione", "art. 42", "quinto anno", "settimo", "esecutivo"]],
        ["Accertamento con adesione (D.Lgs. 218/1997): accordo in contraddittorio, attivabile dall'ufficio o dal contribuente; l'atto non è impugnabile né modificabile e riduce le sanzioni a un terzo del minimo; lo schema di atto del contraddittorio contiene l'invito a chiederla.", ["adesione", "218/1997", "impugnabile", "un terzo", "invito"]],
        ["Istruttoria: accessi, ispezioni e verifiche nei locali (art. 33 D.P.R. 600/1973; art. 52 D.P.R. 633/1972), indagini finanziarie senza segreto bancario, questionari; a fine verifica il processo verbale di constatazione, che apre 60 giorni per osservazioni (art. 12, c. 7, L. 212/2000).", ["accessi", "indagini finanziarie", "processo verbale", "60 giorni"]]
      ],
      aggancio: "Per il consulente del lavoro: lo stesso schema vale per le ritenute del sostituto d'imposta, accertate sulla base di CU, 770 e LUL; davanti a uno schema di atto si valutano subito osservazioni o adesione, perché il contraddittorio è la sede migliore per ridurre la pretesa e le sanzioni.",
      fonti: "Simone, Diritto tributario, pp. 496-517 (D.P.R. 600/1973, artt. 33, 38, 39, 42, 43; L. 212/2000, artt. 6-bis e 12; D.L. 78/2010, art. 29; D.Lgs. 218/1997 come modificato dal D.Lgs. 13/2024); art. 38, c. 4-5, D.P.R. 600/1973, testo vigente letto su Normattiva il 9/11/2026."
    },

    "TRIB-X5": {
      sintesi: "Le imposte non versate spontaneamente si riscuotono in via coattiva tramite l'Agenzia delle entrate-Riscossione: con il ruolo e la cartella di pagamento per le somme da liquidazione e controllo delle dichiarazioni, oppure direttamente con l'avviso di accertamento esecutivo, che diventa titolo dopo il termine per ricorrere.",
      punti: [
        ["Ruolo e cartella: la cartella si notifica, a pena di decadenza, entro il 31 dicembre del terzo anno successivo alla dichiarazione per le somme da liquidazione automatica (art. 36-bis D.P.R. 600/1973), con termini più lunghi per il controllo formale e gli accertamenti (art. 25 D.P.R. 602/1973). Si paga entro 60 giorni dalla notifica.", ["cartella", "terzo anno", "36-bis", "art. 25", "60 giorni"]],
        ["Accertamento esecutivo (art. 29 D.L. 78/2010): trascorso il termine per il ricorso e altri 30 giorni il carico passa all'agente della riscossione; l'esecuzione forzata resta sospesa per 180 giorni dall'affidamento, salvo eccezioni.", ["esecutivo", "30 giorni", "agente della riscossione", "180 giorni"]],
        ["Rateazione (art. 19 D.P.R. 602/1973, dopo il D.Lgs. 110/2024): per debiti fino a 120.000 euro, con la sola dichiarazione di temporanea difficoltà, fino a 84 rate mensili per le richieste del 2025-2026 (96 nel 2027-2028, 108 dal 2029); documentando la difficoltà fino a 120 rate, che diventano l'unico tetto sopra 120.000 euro. Il mancato pagamento di 8 rate, anche non consecutive, fa decadere dal piano.", ["120.000", "84 rate", "difficolt", "120 rate", "8 rate"]],
        ["Esecuzione e misure cautelari: se l'espropriazione non inizia entro un anno dalla cartella serve un'intimazione ad adempiere entro 5 giorni (art. 50); ipoteca sugli immobili (art. 77), fermo dei beni mobili registrati (art. 86), pignoramento dei crediti presso terzi, anche di stipendi e conti (art. 72-bis). Ipoteca e fermo sono atti impugnabili (art. 19 D.Lgs. 546/1992).", ["intimazione", "ipoteca", "fermo", "pignoramento", "impugnabil"]],
        ["Riforma: il Testo unico versamenti e riscossione (D.Lgs. 24/3/2025 n. 33) si applicherà dal 1° gennaio 2027, per il rinvio disposto dal D.L. 200/2025 (art. 4, c. 4) convertito dalla L. 26/2026; nel 2026 restano in vigore il D.P.R. 602/1973 e le altre norme vigenti.", ["testo unico", "n. 33", "2027", "200/2025"]]
      ],
      aggancio: "Per il consulente del lavoro: le ritenute non versate dal sostituto d'imposta emergono dal controllo automatizzato del 770 e arrivano con cartella; prima di chiedere la rateazione conviene verificare se si può ancora usare il ravvedimento operoso, che costa meno.",
      fonti: "D.P.R. 29/9/1973 n. 602, artt. 19, 25 e 50, testo vigente letto su Normattiva il 9/11/2026; D.Lgs. 546/1992, art. 19 (Normattiva); D.L. 31/12/2025 n. 200, art. 4, c. 1-5 (Normattiva); Simone, Diritto tributario, pp. 504-505 (art. 29 D.L. 78/2010). Artt. 72-bis, 77 e 86 D.P.R. 602/1973 citati per rubrica: il manuale Simone in libreria non contiene le pp. 518-534 sulla riscossione."
    },

    "TRIB-X6": {
      sintesi: "Le liti sui tributi si decidono davanti alle Corti di giustizia tributaria di primo grado (in ogni capoluogo di provincia) e di secondo grado (in ogni capoluogo di regione), con ricorso finale in Cassazione; il processo è regolato dal D.Lgs. 546/1992 e comincia con il ricorso contro uno degli atti impugnabili dell'art. 19, entro 60 giorni dalla notifica.",
      punti: [
        ["Atti impugnabili (art. 19): avviso di accertamento e di liquidazione, provvedimento di irrogazione delle sanzioni, ruolo e cartella, avviso di mora, ipoteca e fermo, rifiuto espresso o tacito di rimborso e di autotutela, e gli altri atti indicati dalla legge.", ["art. 19", "avviso di accertamento", "cartella", "ipoteca", "rimborso"]],
        ["Ricorso (artt. 18 e 21): a pena di inammissibilità entro 60 giorni dalla notifica dell'atto; contro il silenzio sul rimborso dopo 90 giorni dalla domanda. Il reclamo-mediazione (art. 17-bis) è stato abrogato dal D.Lgs. 220/2023. Il primo grado decide in composizione monocratica le liti fino a 10.000 euro (art. 4-bis, testo vigente).", ["60 giorni", "inammissibilit", "90 giorni", "17-bis", "10.000"]],
        ["Difesa tecnica (art. 12): obbligatoria sopra 3.000 euro di valore (tributo al netto di interessi e sanzioni); sono abilitati, tra gli altri, avvocati, commercialisti della sezione A e consulenti del lavoro, per tutte le materie.", ["3.000", "avvocati", "commercialisti", "consulenti del lavoro", "abilitat"]],
        ["Svolgimento e strumenti: sospensione dell'atto impugnato su istanza cautelare; udienza anche a distanza; conciliazione giudiziale con riduzione delle sanzioni; appello alla Corte di secondo grado e ricorso per Cassazione per motivi di legittimità.", ["sospensione", "conciliazione", "appello", "cassazione"]],
        ["Riforma: il Testo unico della giustizia tributaria (D.Lgs. 14/11/2024 n. 175) riprende la disciplina in forma organica (la difesa tecnica è all'art. 57); si applicherà dal 1° gennaio 2027 per il rinvio del D.L. 200/2025, art. 4, c. 3. Nel 2026 si cita ancora il D.Lgs. 546/1992.", ["testo unico", "n. 175", "art. 57", "2027"]]
      ],
      aggancio: "Il consulente del lavoro è abilitato a difendere il contribuente davanti alle Corti di giustizia tributaria in tutte le materie (art. 12, c. 3, lett. c, D.Lgs. 546/1992): è una competenza da citare all'orale tra le prerogative della professione, utile per le liti su ritenute, IRAP e sanzioni del sostituto d'imposta.",
      fonti: "D.Lgs. 31/12/1992 n. 546, artt. 4-bis, 12, 17-bis, 19 e 21, testo vigente letto su Normattiva il 9/11/2026; D.L. 31/12/2025 n. 200, art. 4, c. 3 (Normattiva); Simone, Diritto tributario, pp. 549-565; art. 57 del TU 175/2024 riscontrato su miolegale.it (fonte secondaria)."
    },

    "RAG-X1": {
      sintesi: "Il bilancio d'esercizio è composto da stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa (art. 2423 c.c.): la nota integrativa spiega e integra i numeri dei prospetti con le informazioni dell'art. 2427, il rendiconto finanziario mostra da dove arriva e dove va la liquidità dell'esercizio (art. 2425-ter).",
      punti: [
        ["Funzione della nota integrativa: illustra i criteri di valutazione applicati (art. 2427, n. 1), i movimenti delle immobilizzazioni, la composizione delle voci principali, crediti e debiti oltre 5 anni e assistiti da garanzie, impegni e fatti di rilievo dopo la chiusura; motiva le eventuali deroghe ai principi di redazione.", ["criteri di valutazione", "n. 1", "immobilizzazioni", "deroghe"]],
        ["Informazioni sul personale e sugli organi: numero medio dei dipendenti ripartito per categoria (art. 2427, n. 15) e compensi, anticipazioni e crediti di amministratori e sindaci (n. 16), più i corrispettivi del revisore legale (n. 16-bis). È la parte che interessa di più al consulente del lavoro.", ["numero medio dei dipendenti", "n. 15", "amministratori", "sindaci", "revisore"]],
        ["Rendiconto finanziario (art. 2425-ter): indica, per l'esercizio e per quello precedente, le disponibilità liquide iniziali e finali e i flussi dell'attività operativa, di investimento e di finanziamento, con separata indicazione delle operazioni con i soci; lo schema di riferimento è l'OIC 10.", ["disponibilit", "operativa", "investimento", "finanziamento", "oic 10"]],
        ["Metodo indiretto: si parte dall'utile, si aggiungono i costi che non generano uscite (ammortamenti, accantonamento al TFR) e si correggono le variazioni del capitale circolante (crediti, rimanenze, debiti verso fornitori e dipendenti); il TFR pagato ai dipendenti cessati è invece un'uscita.", ["indiretto", "ammortamenti", "tfr", "circolante"]],
        ["Esoneri: le società in forma abbreviata non redigono il rendiconto finanziario e danno una nota integrativa ridotta (art. 2435-bis); le micro-imprese non redigono né rendiconto né nota integrativa se in calce allo stato patrimoniale indicano garanzie e impegni e i compensi agli amministratori (art. 2435-ter).", ["abbreviata", "ridott", "micro", "in calce"]]
      ],
      aggancio: "Il costo del personale elaborato dal consulente si ritrova in tre punti: voce B9 del conto economico, debiti verso dipendenti e fondo TFR nello stato patrimoniale, numero medio dei dipendenti in nota integrativa; i dati devono quadrare con LUL e Uniemens.",
      fonti: "Codice civile, artt. 2423, 2425-ter, 2427 (numeri 1, 15 e 16), 2435-bis e 2435-ter, testo vigente letto su Normattiva il 9/11/2026; OIC 10 (Rendiconto finanziario), citato per nome."
    },

    "RAG-X2": {
      sintesi: "Le società che non hanno titoli quotati possono redigere il bilancio in forma abbreviata se nel primo esercizio o per due esercizi consecutivi non superano due su tre dei limiti dell'art. 2435-bis c.c. (attivo 5.500.000 euro, ricavi 11.000.000 euro, 50 dipendenti medi); sotto soglie più basse sono micro-imprese (art. 2435-ter: 220.000 euro, 440.000 euro, 5 dipendenti).",
      punti: [
        ["Soglie dell'abbreviato (art. 2435-bis, c. 1, come aggiornate dal D.Lgs. 125/2024): totale attivo 5.500.000 euro; ricavi delle vendite e delle prestazioni 11.000.000 euro; 50 dipendenti occupati in media. Si torna all'ordinario quando si superano due limiti per il secondo esercizio consecutivo.", ["5.500.000", "11.000.000", "50", "due", "secondo esercizio"]],
        ["Semplificazioni: stato patrimoniale con le sole voci indicate da lettere maiuscole e numeri romani; voci del conto economico raggruppabili; niente rendiconto finanziario; nota integrativa ridotta; niente relazione sulla gestione se la nota integrativa dà le informazioni dell'art. 2428, nn. 3-4, sulle azioni proprie.", ["lettere maiuscole", "raggruppabil", "rendiconto", "nota integrativa", "relazione sulla gestione"]],
        ["Criteri facoltativi: in deroga all'art. 2426 l'abbreviato può iscrivere i titoli al costo, i crediti al presumibile realizzo e i debiti al valore nominale, senza il costo ammortizzato.", ["costo ammortizzato", "presumibile realizzo", "valore nominale"]],
        ["Micro-imprese (art. 2435-ter): attivo 220.000 euro, ricavi 440.000 euro, 5 dipendenti medi (due limiti su tre); esonero da rendiconto, nota integrativa e relazione sulla gestione se le informazioni richieste stanno in calce allo stato patrimoniale; non si applicano la deroga del quinto comma dell'art. 2423 né il fair value dei derivati.", ["220.000", "440.000", "5", "in calce", "fair value"]],
        ["Approvazione e deposito: l'assemblea approva entro 120 giorni dalla chiusura (180 nei casi previsti dallo statuto) e gli amministratori depositano il bilancio al Registro delle imprese entro 30 giorni dall'approvazione (artt. 2364 e 2435).", ["120 giorni", "180", "deposit", "30 giorni"]]
      ],
      aggancio: "Il numero medio dei dipendenti è uno dei tre parametri di classificazione: il consulente del lavoro è la fonte del dato (calcolato sui rapporti dell'anno, di regola in unità equivalenti a tempo pieno secondo la prassi contabile) e un errore può cambiare il tipo di bilancio dovuto.",
      fonti: "Codice civile, artt. 2435-bis e 2435-ter, testo vigente letto su Normattiva il 9/11/2026 (soglie con le modifiche del D.Lgs. 6/9/2024 n. 125); artt. 2364 e 2435 c.c. per approvazione e deposito. Il metodo di calcolo dei dipendenti medi segue la prassi contabile (OIC): DA VERIFICARE prima di citarlo come regola."
    },

    "RAG-X3": {
      sintesi: "L'art. 2426 c.c. stabilisce come si valutano le voci del bilancio: la regola di base è il costo storico (di acquisto o di produzione), corretto con ammortamenti e svalutazioni, nel rispetto dei principi di prudenza, competenza e continuità dei criteri dell'art. 2423-bis.",
      punti: [
        ["Immobilizzazioni (n. 1-3): iscritte al costo di acquisto, con gli oneri accessori, o di produzione; se la loro utilizzazione è limitata nel tempo si ammortizzano sistematicamente in base alla residua possibilità di utilizzazione; si svalutano se il valore risulta durevolmente inferiore e si ripristinano se vengono meno i motivi (salvo l'avviamento).", ["costo", "oneri accessori", "ammortizzan", "durevolmente", "svaluta"]],
        ["Avviamento (n. 6): iscrivibile solo se acquisito a titolo oneroso, nei limiti del costo e con il consenso del collegio sindacale se esiste; si ammortizza in base alla vita utile, o in non più di 10 anni se questa non è stimabile.", ["avviamento", "titolo oneroso", "collegio sindacale", "10 anni"]],
        ["Crediti e debiti (n. 8): costo ammortizzato, tenendo conto del fattore temporale e, per i crediti, del presumibile realizzo (fondo svalutazione). Le società in forma abbreviata possono non applicarlo.", ["costo ammortizzato", "fattore temporale", "presumibile realizzo"]],
        ["Rimanenze (n. 9-10): al minore tra costo e valore di realizzo desumibile dal mercato; per i beni fungibili il costo si calcola con la media ponderata, il FIFO o il LIFO, indicando in nota integrativa la differenza rilevante rispetto ai costi correnti.", ["rimanenze", "minore", "media ponderata", "fifo", "lifo"]],
        ["Principi generali (art. 2423-bis): prudenza, continuità aziendale, prevalenza della sostanza, competenza, valutazione separata degli elementi, costanza dei criteri, che si possono cambiare solo in casi eccezionali motivati in nota integrativa. I principi contabili OIC specificano l'applicazione.", ["prudenza", "continuit", "sostanza", "competenza", "costanza"]]
      ],
      aggancio: "Le voci di bilancio che dipendono dal consulente del lavoro sono il fondo TFR (art. 2120 c.c., debito valutato secondo la legge, non con il costo ammortizzato), i ratei per ferie, permessi e mensilità aggiuntive maturati e non goduti e i debiti verso enti previdenziali: tutte voci di competenza dell'esercizio.",
      fonti: "Codice civile, artt. 2423-bis e 2426 (numeri 1, 2, 3, 6, 8, 9, 10), testo vigente letto su Normattiva il 9/11/2026; art. 2120 c.c. (estratto NORMA_Codice_civile_lavoro in libreria). La regola sul TFR fuori dal costo ammortizzato è prassi contabile (OIC 31): DA VERIFICARE prima di citarla come norma."
    },

    "DEO-X3": {
      sintesi: "Il consulente del lavoro è espressamente tra i professionisti obbligati dalla normativa antiriciclaggio (art. 3, c. 4, lett. a, D.Lgs. 231/2007), in forma individuale, associata o societaria: deve verificare il cliente, conservare i dati, segnalare le operazioni sospette e rispettare i limiti all'uso del contante; vigila il Consiglio nazionale dell'Ordine come organismo di autoregolamentazione.",
      punti: [
        ["Destinatari (art. 3, c. 4, lett. a): gli iscritti agli albi dei dottori commercialisti ed esperti contabili e dei consulenti del lavoro, anche se esercitano in studio associato o in STP. L'Ordine, come organismo di autoregolamentazione, promuove e controlla l'osservanza degli obblighi (art. 11).", ["art. 3", "consulenti del lavoro", "studio associato", "autoregolamentazione", "art. 11"]],
        ["Adeguata verifica (artt. 17 ss.): identificare il cliente e il titolare effettivo, verificarne l'identità, acquisire informazioni su scopo e natura della prestazione e controllare il rapporto nel tempo; in modo semplificato se il rischio è basso, rafforzato se è alto. Se non si riesce a completarla bisogna astenersi.", ["adeguata verifica", "titolare effettivo", "scopo", "rafforzat", "astener"]],
        ["Conservazione (artt. 31-32): documenti, dati e informazioni si conservano per 10 anni dalla fine della prestazione o del rapporto, con modalità che ne garantiscano l'integrità e la consultabilità.", ["conserva", "10 anni", "integrit"]],
        ["Segnalazione delle operazioni sospette (artt. 35 e 37): quando si sa, si sospetta o si hanno motivi ragionevoli di sospettare riciclaggio o finanziamento del terrorismo, si segnala senza ritardo all'UIF, direttamente o tramite il Consiglio nazionale, che la trasmette senza il nome del segnalante. Il segnalante è tutelato dalla riservatezza; l'obbligo non riguarda le informazioni apprese per difendere il cliente o valutarne la posizione giuridica.", ["segnalazione", "uif", "sospett", "consiglio nazionale", "riservatezza"]],
        ["Contante (art. 49): divieto di trasferimenti di denaro contante tra soggetti diversi pari o superiori a 5.000 euro dal 1° gennaio 2023 (c. 3-bis). Il consulente che ne viene a conoscenza nell'incarico deve comunicarlo alla Ragioneria territoriale dello Stato (art. 51). Le retribuzioni non si pagano in contanti in ogni caso (art. 1, c. 910, L. 205/2017).", ["contante", "5.000", "art. 49", "ragioneria", "retribuzioni"]]
      ],
      aggancio: "Nello studio del consulente l'adeguata verifica si fa all'accettazione dell'incarico (con il mandato professionale) e va aggiornata; incassi di onorari in contanti oltre soglia, clienti con titolari effettivi non chiari o pagamenti di stipendi in contanti sono segnali da valutare.",
      fonti: "D.Lgs. 21/11/2007 n. 231, artt. 3, 11, 31, 35, 37 e 49, testo vigente letto su Normattiva il 9/11/2026; artt. 17 ss. e 51 citati per contenuto generale; L. 205/2017, art. 1, c. 910 (tracciabilità delle retribuzioni, già nel simulatore)."
    },

    "DEO-X4": {
      sintesi: "Per diventare consulente del lavoro occorre un titolo di studio idoneo, un tirocinio di 18 mesi presso un consulente iscritto da almeno 5 anni, il superamento dell'esame di Stato indetto ogni anno dal Ministero del lavoro e infine l'iscrizione all'albo provinciale (L. 12/1979; D.P.R. 137/2012; Regolamento sul tirocinio del 2015).",
      punti: [
        ["Tirocinio (Regolamento CNO 2015, per i tirocini dal 1/1/2015; art. 6 D.P.R. 137/2012): 18 mesi non prorogabili, con iscrizione al Registro dei praticanti presso il Consiglio provinciale; fino a 6 mesi possono essere svolti con corsi di formazione autorizzati di almeno 200 ore; si può anticipare all'ultimo anno di università in base a convenzioni.", ["18 mesi", "registro dei praticanti", "6 mesi", "200 ore", "universit"]],
        ["Affidatario e svolgimento: consulente iscritto all'albo da almeno 5 anni, in regola con la formazione continua, di regola con non più di 3 praticanti; fascicolo formativo convalidato dal professionista; sospensioni fino a 9 mesi complessivi; l'interruzione ingiustificata oltre 3 mesi annulla il periodo svolto.", ["5 anni", "3 praticanti", "fascicolo formativo", "9 mesi", "3 mesi"]],
        ["Certificato di compiuta pratica: rilasciato dal Consiglio provinciale entro 60 giorni; perde efficacia se entro 5 anni non si supera l'esame di Stato.", ["compiuta pratica", "60 giorni", "5 anni"]],
        ["Esame di Stato 2026 (decreto del Ministero del lavoro): due prove scritte di 7 ore, un elaborato di diritto del lavoro e legislazione sociale e una prova teorico-pratica di diritto tributario, con i soli testi di legge non commentati; prova orale su diritto del lavoro, legislazione sociale, tributario e ragioneria, privato, pubblico e penale, ordinamento e deontologia. Commissioni presso gli ispettorati del lavoro.", ["due prove scritte", "7 ore", "teorico-pratica", "prova orale", "ispettorat"]],
        ["Valutazione: ogni commissario dà fino a 10 punti per prova; si è ammessi all'orale con almeno 6/10 in ciascuno scritto e abilitati con almeno 6/10 all'orale. Poi l'iscrizione all'albo, su cui il Consiglio provinciale decide entro 2 mesi, che dà il titolo e la riserva di attività.", ["10 punti", "6/10", "abilitat", "albo", "2 mesi"]]
      ],
      aggancio: "All'orale conviene collegare la domanda alla propria esperienza: dove si è svolto il tirocinio, che cosa si è imparato su adempimenti e deontologia e perché il dominus deve insegnare anche le regole deontologiche (art. 22 Codice deontologico).",
      fonti: "Simone, Ordinamento e deontologia, pp. 1221-1227 (Regolamento sul tirocinio del 2015, delibera CNO 23/10/2014 n. 327; D.P.R. 137/2012, art. 6; L. 12/1979); Decreto del Ministero del lavoro per gli esami di Stato 2026, artt. 2-4 (in libreria)."
    },

    "DEO-X5": {
      sintesi: "L'ENPACL (Ente nazionale di previdenza e assistenza per i consulenti del lavoro) è la cassa di previdenza obbligatoria dei consulenti iscritti all'albo, ente di diritto privato secondo il D.Lgs. 509/1994: si finanzia con il contributo soggettivo sul reddito professionale, il contributo integrativo del 4% sui compensi e il contributo di maternità, e paga pensioni calcolate con il sistema contributivo per le anzianità dal 2013.",
      punti: [
        ["Contributo soggettivo: 12% del reddito professionale entro un tetto annuo, con un minimo dovuto in ogni caso (importi rivalutati ogni anno dall'Ente); chi si iscrive prima dei 35 anni paga in misura ridotta per i primi anni; sono ammessi versamenti aggiuntivi volontari.", ["soggettivo", "12%", "minimo", "35 anni", "aggiuntiv"]],
        ["Contributo integrativo: maggiorazione del 4% su tutti i compensi che formano il volume d'affari IVA, ripetibile verso il cliente e indicata in fattura (soggetta a IVA, esclusa dalla ritenuta); è dovuto un minimo anche senza volume d'affari (art. 38 Regolamento).", ["integrativo", "4%", "volume d'affari", "ripetibil", "fattura"]],
        ["Contributo di maternità a carico di ogni iscritto, in misura fissa annua; la dichiarazione annuale dei redditi e dei volumi d'affari si presenta per via telematica entro il termine fissato dall'Ente (nel 2026 entro il 30 settembre, secondo le fonti di stampa), anche se il reddito è zero.", ["maternit", "dichiarazione", "telematic", "reddito"]],
        ["Pensioni: calcolo contributivo per le anzianità dal 1° gennaio 2013 (montante per coefficiente di trasformazione), con quote aggiuntive per gli anni precedenti; vecchiaia da 66 anni con almeno 5 anni di contribuzione, vecchiaia anticipata, inabilità, invalidità e superstiti, secondo il Regolamento.", ["contributivo", "2013", "vecchiaia", "66 anni", "superstiti"]],
        ["Rapporti con le altre gestioni: i periodi ENPACL si possono unire a quelli versati all'INPS o ad altre casse con il cumulo gratuito (L. 228/2012), la totalizzazione (D.Lgs. 42/2006) o la ricongiunzione onerosa (L. 45/1990): vedi la scheda INPS-X4.", ["cumulo", "totalizzazione", "ricongiunzione", "45/1990"]]
      ],
      aggancio: "Il contributo integrativo è il punto di contatto con la seconda prova: va in fattura come maggiorazione del 4% sull'onorario, prima dell'IVA, e non entra nella base della ritenuta d'acconto. Gli importi minimi e le scadenze cambiano ogni anno: vanno letti sulla circolare dell'Ente.",
      fonti: "Regolamento di previdenza e assistenza ENPACL in vigore dal 1/1/2018 (areariservata.enpacl.it: artt. 5, 36, 37, 38, 40, 45, 46), letto il 9/11/2026; importi e scadenze 2026 da fonti di stampa (partitaiva.it, mysolution.it): DA VERIFICARE sulla circolare ENPACL; P2_00_PARAMETRI, § 11, in libreria (art. 38, c. 2, Regolamento)."
    },

    "DEO-X6": {
      sintesi: "Il consulente del lavoro può esercitare anche in forma societaria tramite una società tra professionisti (art. 10, c. 3 ss., L. 183/2011; D.M. 8/2/2013 n. 34): una società di persone, di capitali o cooperativa con oggetto esclusivo l'attività professionale, in cui i soci professionisti devono avere la maggioranza dei due terzi e che è iscritta in una sezione speciale dell'albo.",
      punti: [
        ["Modelli e oggetto (art. 10, c. 3-4 e 8): qualsiasi tipo societario dei titoli V e VI del libro V del codice civile (le cooperative con almeno tre soci); esercizio esclusivo dell'attività professionale da parte dei soci; ammessa la STP multidisciplinare per più professioni.", ["titoli v e vi", "cooperativ", "esclusiv", "multidisciplinar"]],
        ["Soci (art. 10, c. 4, lett. b): professionisti iscritti ad albi, cittadini UE con titolo abilitante e soci non professionisti solo per prestazioni tecniche o per investimento; i professionisti devono avere la maggioranza dei due terzi nelle decisioni dei soci, altrimenti la società si scioglie e viene cancellata se non ripristina la condizione entro 6 mesi.", ["soci", "investimento", "due terzi", "scioglie", "6 mesi"]],
        ["Atto costitutivo e cliente (art. 10, c. 4-5; art. 4 D.M. 34/2013): l'incarico è eseguito solo dai soci abilitati; il cliente può scegliere il professionista e riceve per iscritto l'elenco dei soci e l'informativa sui conflitti di interesse; polizza obbligatoria per la responsabilità civile; la denominazione contiene la dicitura «società tra professionisti».", ["soci abilitati", "scegliere", "conflitt", "polizza", "denominazione"]],
        ["Iscrizione e disciplina (art. 10, c. 6-7): iscrizione nella sezione speciale dell'albo; il socio non può partecipare ad altra STP; soci e società sono soggetti al codice deontologico e al potere disciplinare dell'Ordine; la società risponde con il professionista se la violazione deriva da sue direttive.", ["sezione speciale", "altra stp", "disciplinare", "direttive"]],
        ["Codice deontologico (art. 20, c. 6-7): al consulente che opera in STP si applicano le regole per chi amministra società di servizi; il socio che contribuisce ad alterare la maggioranza dei due terzi e non la ripristina entro 6 mesi ne risponde disciplinarmente. Restano possibili lo studio associato e gli altri modelli già esistenti (art. 10, c. 9).", ["art. 20", "due terzi", "disciplinar", "studio associato"]]
      ],
      aggancio: "La STP serve a crescere con altri professionisti (commercialisti, avvocati) o con soci di capitale; il limite dei due terzi e l'esecuzione personale dell'incarico da parte del socio abilitato tutelano l'indipendenza della professione e la riserva dell'art. 1 L. 12/1979.",
      fonti: "L. 12/11/2011 n. 183, art. 10, c. 3-9, testo vigente letto su Normattiva il 9/11/2026; D.M. Giustizia 8/2/2013 n. 34, art. 4 (riportato da Simone); Simone, Ordinamento e deontologia, pp. 1237-1238 e testo del Codice deontologico, art. 20."
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
      vedi: eq ? eq.id : null, approf: eq ? eq.approf : (APPROF[r[0] + '.' + r[2]] || []), r: eq ? eq.r : (RISPOSTE[id] || null) });
  });

  return {
    versione: '2.5 · 9/11/2026',
    materie: MATERIE,
    commissione: COMMISSIONE,
    domande: DOMANDE,
    buste: 23
  };
})();
