/* ============================================================
   CdL Marche 2026 — Prova orale: simulazione della Commissione 2026
   Versione 1.0 del 22/11/2026.
   155 domande SIMULATE (5 righe della busta × 31), composte come le
   comporrebbe ciascun commissario secondo una STIMA per ruolo:
   riga 1 Rausei e CdL; riga 2 Gallotta (INPS) e Sassi (INAIL);
   riga 3 Terzoni; riga 4 CdL; riga 5 Rausei e CdL.
   Non sono le domande reali. Risposta sintetica di Claude; punti,
   aggancio e fonti dalle schede collegate (campo "schede").
   star = priorità alta (stima). buste = 31 buste fisse, una domanda
   per riga (permutazione con seme fisso).
   ============================================================ */
window.ORALE_SIM26 = {
"versione": "1.0 · 22/11/2026",
"righe": [
{
"num": 1,
"nome": "Diritto del lavoro",
"ids": [
"C26-1.01",
"C26-1.02",
"C26-1.03",
"C26-1.04",
"C26-1.05",
"C26-1.06",
"C26-1.07",
"C26-1.08",
"C26-1.09",
"C26-1.10",
"C26-1.11",
"C26-1.12",
"C26-1.13",
"C26-1.14",
"C26-1.15",
"C26-1.16",
"C26-1.17",
"C26-1.18",
"C26-1.19",
"C26-1.20",
"C26-1.21",
"C26-1.22",
"C26-1.23",
"C26-1.24",
"C26-1.25",
"C26-1.26",
"C26-1.27",
"C26-1.28",
"C26-1.29",
"C26-1.30",
"C26-1.31"
]
},
{
"num": 2,
"nome": "Legislazione sociale INPS e INAIL",
"ids": [
"C26-2.01",
"C26-2.02",
"C26-2.03",
"C26-2.04",
"C26-2.05",
"C26-2.06",
"C26-2.07",
"C26-2.08",
"C26-2.09",
"C26-2.10",
"C26-2.11",
"C26-2.12",
"C26-2.13",
"C26-2.14",
"C26-2.15",
"C26-2.16",
"C26-2.17",
"C26-2.18",
"C26-2.19",
"C26-2.20",
"C26-2.21",
"C26-2.22",
"C26-2.23",
"C26-2.24",
"C26-2.25",
"C26-2.26",
"C26-2.27",
"C26-2.28",
"C26-2.29",
"C26-2.30",
"C26-2.31"
]
},
{
"num": 3,
"nome": "Elementi di diritto privato, pubblico e penale",
"ids": [
"C26-3.01",
"C26-3.02",
"C26-3.03",
"C26-3.04",
"C26-3.05",
"C26-3.06",
"C26-3.07",
"C26-3.08",
"C26-3.09",
"C26-3.10",
"C26-3.11",
"C26-3.12",
"C26-3.13",
"C26-3.14",
"C26-3.15",
"C26-3.16",
"C26-3.17",
"C26-3.18",
"C26-3.19",
"C26-3.20",
"C26-3.21",
"C26-3.22",
"C26-3.23",
"C26-3.24",
"C26-3.25",
"C26-3.26",
"C26-3.27",
"C26-3.28",
"C26-3.29",
"C26-3.30",
"C26-3.31"
]
},
{
"num": 4,
"nome": "Diritto tributario ed elementi di ragioneria",
"ids": [
"C26-4.01",
"C26-4.02",
"C26-4.03",
"C26-4.04",
"C26-4.05",
"C26-4.06",
"C26-4.07",
"C26-4.08",
"C26-4.09",
"C26-4.10",
"C26-4.11",
"C26-4.12",
"C26-4.13",
"C26-4.14",
"C26-4.15",
"C26-4.16",
"C26-4.17",
"C26-4.18",
"C26-4.19",
"C26-4.20",
"C26-4.21",
"C26-4.22",
"C26-4.23",
"C26-4.24",
"C26-4.25",
"C26-4.26",
"C26-4.27",
"C26-4.28",
"C26-4.29",
"C26-4.30",
"C26-4.31"
]
},
{
"num": 5,
"nome": "Ordinamento professionale e deontologia",
"ids": [
"C26-5.01",
"C26-5.02",
"C26-5.03",
"C26-5.04",
"C26-5.05",
"C26-5.06",
"C26-5.07",
"C26-5.08",
"C26-5.09",
"C26-5.10",
"C26-5.11",
"C26-5.12",
"C26-5.13",
"C26-5.14",
"C26-5.15",
"C26-5.16",
"C26-5.17",
"C26-5.18",
"C26-5.19",
"C26-5.20",
"C26-5.21",
"C26-5.22",
"C26-5.23",
"C26-5.24",
"C26-5.25",
"C26-5.26",
"C26-5.27",
"C26-5.28",
"C26-5.29",
"C26-5.30",
"C26-5.31"
]
}
],
"domande": [
{
"id": "C26-1.01",
"riga": 1,
"n": 1,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Il D.L. 62/2026 ha introdotto un salario minimo legale? Che cos'è il trattamento economico complessivo (TEC)?",
"sintesi": "No. Per il lavoro subordinato privato il D.L. 30/4/2026 n. 62, convertito dalla L. 25/6/2026 n. 112, fa della contrattazione collettiva comparativamente più rappresentativa la misura della retribuzione giusta dell'art. 36 Cost. (art. 7, c. 1-2): si guarda al TEC dei CCNL stipulati dalle organizzazioni comparativamente più rappresentative, per settore, attività prevalente, dimensione e natura del datore; il TEC dei CCNL diversi «non può essere inferiore» (c. 3). Il TEC comprende le voci fisse e continuative (dirette, indirette e differite), le mensilità aggiuntive, le indennità fisse e continuative e il welfare per la generalità; restano fuori gli elementi discrezionali e variabili individuali (c. 4-bis). Nodo: la norma richiama la proporzionalità ma non la sufficienza, che il giudice continua a controllare anche sul CCNL leader (Cass. 27711/2023).",
"schede": [
"DL-X3"
]
},
{
"id": "C26-1.02",
"riga": 1,
"n": 2,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Un'azienda applica un CCNL firmato da sigle minori, con minimi inferiori a quelli del CCNL leader. Che cosa rischia se arriva l'ispezione?",
"sintesi": "Le differenze tra quanto pagato e il TEC del CCNL leader sono crediti dei lavoratori: se i lavoratori sono pochi l'ispettore adotta la diffida accertativa (art. 12 D.Lgs. 124/2004), se sono molti la disposizione (art. 14), sulla linea di Cons. Stato 10382/2025 e 4969/2026 (riportate da Rausei). Sul piano contributivo l'INPS recupera sul minimale del CCNL comparativamente più rappresentativo (art. 1, c. 1, D.L. 338/1989; art. 2, c. 25, L. 549/1995). L'azienda perde i benefici del decreto se il trattamento individuale è inferiore al TEC (art. 7, c. 5) e, in generale, i benefici normativi e contributivi condizionati al rispetto dei contratti (art. 1, c. 1175, L. 296/2006).",
"schede": [
"DL-X3",
"DL-X7",
"DL-X8",
"INPS-15"
]
},
{
"id": "C26-1.03",
"riga": 1,
"n": 3,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "I contratti di prossimità: che cosa possono derogare e con quali limiti?",
"sintesi": "L'art. 8 D.L. 138/2011 (conv. L. 148/2011) consente a contratti aziendali o territoriali, firmati da associazioni comparativamente più rappresentative o dalle loro rappresentanze in azienda con criterio maggioritario, di derogare anche alla legge e al CCNL, con efficacia verso tutti i lavoratori interessati. Servono finalità dichiarate (occupazione, emersione, gestione delle crisi, investimenti, ecc.) e materie tassative: impianti audiovisivi, mansioni e inquadramento, contratti a termine, a orario ridotto, somministrazione, orario, assunzioni e conseguenze del recesso, esclusi i licenziamenti discriminatori e quelli per matrimonio, maternità e congedi. Limiti: Costituzione, vincoli UE e convenzioni internazionali (c. 2-bis). È norma eccezionale (C. cost. 221/2012) e la retribuzione non è materia derogabile (C. cost. 52/2023).",
"schede": [
"DL-12b"
]
},
{
"id": "C26-1.04",
"riga": 1,
"n": 4,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Un'impresa di 10 dipendenti vuole firmare un'intesa di prossimità peggiorativa sull'orario. Come si procede dopo il D.L. 62/2026?",
"sintesi": "L'art. 7-bis D.L. 62/2026 (in vigore dal 28/6/2026) ha aggiunto tre regole all'art. 8: nelle imprese fino a 15 dipendenti le intese che derogano con trattamenti peggiorativi si sottoscrivono presso l'ITL (c. 2-ter); i lavoratori ricevono un'informativa scritta entro 3 giorni, anche via e-mail (c. 2-quater); contratti e intese vanno depositati presso il Ministero del lavoro e l'archivio CNEL (c. 1-bis). Sotto i 15 dipendenti non ci sono RSA (art. 35 St. lav.): firmano le strutture territoriali dei sindacati, e la firma presso l'ITL non sana il difetto del firmatario. L'orario è materia ammessa. Le conseguenze del mancato deposito o della firma fuori dall'ITL non sono dette dalla legge: questione aperta.",
"schede": [
"DL-12b"
]
},
{
"id": "C26-1.05",
"riga": 1,
"n": 5,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Che differenza c'è tra il contratto di prossimità e i contratti collettivi dell'art. 51 D.Lgs. 81/2015?",
"sintesi": "L'art. 51 D.Lgs. 81/2015 individua i contratti collettivi (nazionali, territoriali o aziendali, delle organizzazioni comparativamente più rappresentative) ai quali la legge rinvia: integrano la disciplina legale solo dove la legge lo consente, per esempio nelle condizioni del contratto a termine. Il contratto di prossimità dell'art. 8 D.L. 138/2011 può invece derogare anche alla legge, ma solo nelle materie e per le finalità tassative e con efficacia generale per legge. Il CCNL ordinario resta un contratto di diritto comune, efficace per gli iscritti e per chi lo applica, perché l'art. 39 Cost., seconda parte, non è attuato.",
"schede": [
"DL-12b",
"DL-9b",
"DL-1b"
]
},
{
"id": "C26-1.06",
"riga": 1,
"n": 6,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "La diffida accertativa per crediti patrimoniali: presupposti, procedimento ed effetti.",
"sintesi": "L'ispettore che accerta crediti patrimoniali dei lavoratori nati dall'inosservanza della disciplina contrattuale (differenze retributive, straordinari, mensilità aggiuntive, TFR) diffida il datore a pagarli (art. 12 D.Lgs. 124/2004); dal D.L. 76/2020 la diffida si rivolge anche al responsabile solidale (committente, utilizzatore). Entro 30 giorni il datore può conciliare presso l'Ispettorato (il verbale non è impugnabile) o ricorrere al direttore dell'ufficio, che decide in 60 giorni; il ricorso sospende l'esecutività. In mancanza, o se il ricorso è respinto, la diffida diventa titolo esecutivo senza più validazione del direttore. Non passa in giudicato: il datore può contestare il credito con l'opposizione all'esecuzione (Cass. 20826/2025, riportata da Rausei).",
"schede": [
"DL-X7"
]
},
{
"id": "C26-1.07",
"riga": 1,
"n": 7,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "La disposizione del personale ispettivo (art. 14 D.Lgs. 124/2004).",
"sintesi": "È il provvedimento immediatamente esecutivo con cui l'ispettore ordina di rimuovere irregolarità in materia di lavoro e legislazione sociale non già punite con sanzioni penali o amministrative (testo riscritto dall'art. 12-bis D.L. 76/2020). Riguarda norme di legge senza sanzione e norme del CCNL applicato (circ. INL 5/2020). Ricorso entro 15 giorni al direttore dell'ITL, che decide nei 15 giorni successivi, altrimenti è respinto; il ricorso non sospende. L'inottemperanza costa da 500 a 3.000 euro, senza diffida. Il Consiglio di Stato (fino a 4969/2026, riportata da Rausei) la estende alla violazione dei CCNL e all'adeguatezza della retribuzione; più restrittivo TAR Marche 857/2026 (riportata da Rausei).",
"schede": [
"DL-X8"
]
},
{
"id": "C26-1.08",
"riga": 1,
"n": 8,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Diffida obbligatoria, diffida amministrativa e prescrizione obbligatoria: come si distinguono?",
"sintesi": "Il sistema premia chi regolarizza. Diffida amministrativa (art. 6 D.Lgs. 103/2024): sanzioni con massimo fino a 5.000 euro, prima violazione nel quinquennio, illecito sanabile e mai in materia di sicurezza; 20 giorni per sanare e nessuna sanzione. Diffida obbligatoria (art. 13, c. 2-3, D.Lgs. 124/2004): illeciti amministrativi sanabili, 30 giorni per regolarizzare e 15 per pagare il minimo; altrimenti il verbale vale come contestazione con pagamento in misura ridotta (L. 689/1981). Prescrizione obbligatoria (art. 15 D.Lgs. 124/2004; artt. 20-25 D.Lgs. 758/1994): contravvenzioni punite con ammenda o con pena alternativa; l'ispettore prescrive, se il datore adempie paga un quarto del massimo dell'ammenda e il reato si estingue.",
"schede": [
"DL-X10"
]
},
{
"id": "C26-1.09",
"riga": 1,
"n": 9,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Il lavoro nero: maxisanzione, diffida e sospensione dell'attività.",
"sintesi": "È l'impiego di lavoratori subordinati senza comunicazione preventiva di assunzione. Oltre al recupero di contributi e premi, scatta la maxisanzione per ciascun lavoratore (art. 3 D.L. 12/2002, importi aumentati del 30% dal D.L. 19/2024): da 1.950 a 11.700 euro fino a 30 giorni, da 3.900 a 23.400 da 31 a 60, da 7.800 a 46.800 oltre 60. Con la diffida speciale il datore, entro 120 giorni, regolarizza e assume il lavoratore, tenendolo almeno 90 giorni, e paga il minimo. Non si applica se dagli adempimenti contributivi risulta che non voleva occultare il rapporto. Con almeno il 10% di irregolari tra i presenti scatta la sospensione dell'attività (art. 14 D.Lgs. 81/2008).",
"schede": [
"DL-X11",
"DL-20b"
]
},
{
"id": "C26-1.10",
"riga": 1,
"n": 10,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Il provvedimento di sospensione dell'attività d'impresa.",
"sintesi": "È un potere vincolato dell'Ispettorato (anche delle ASL per la sicurezza): si adotta quando almeno il 10% dei lavoratori presenti all'accesso è irregolare o quando c'è una grave violazione di sicurezza dell'Allegato I (art. 14 D.Lgs. 81/2008); escluso se l'irregolare è l'unico occupato. Ferma la parte di attività interessata dalle 12 del giorno lavorativo successivo, o subito in caso di pericolo; retribuzioni e contributi restano dovuti e c'è divieto di contrattare con la PA. Revoca con regolarizzazione e somma aggiuntiva (2.500 euro fino a cinque irregolari, 5.000 oltre). Per il lavoro irregolare ricorso all'Ispettorato interregionale entro 30 giorni; l'inottemperanza è reato.",
"schede": [
"DL-22a"
]
},
{
"id": "C26-1.11",
"riga": 1,
"n": 11,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "La conciliazione monocratica.",
"sintesi": "È un tentativo di accordo davanti a un solo funzionario dell'ITL per le questioni patrimoniali tra lavoratore e datore (art. 11 D.Lgs. 124/2004): preventiva, su richiesta di intervento del lavoratore, o contestuale, avviata dall'ispettore durante l'accesso con il consenso delle parti, che possono farsi assistere anche da un professionista. Non si usa se emergono indizi di reato. L'accordo deve riconoscere un periodo di lavoro effettivo; il verbale non è impugnabile (art. 2113 c.c.) e diventa titolo esecutivo con decreto del giudice. Pagamento delle somme e versamento di contributi e premi, calcolati sulla somma conciliata, estinguono il procedimento ispettivo.",
"schede": [
"DL-22b"
]
},
{
"id": "C26-1.12",
"riga": 1,
"n": 12,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "La patente a crediti nei cantieri.",
"sintesi": "Dal 1/10/2024 imprese e lavoratori autonomi che operano nei cantieri temporanei o mobili devono avere la patente a crediti rilasciata dall'INL (art. 27 D.Lgs. 81/2008; D.M. 132/2024). Requisiti autocertificati: iscrizione alla Camera di commercio, formazione, DURC, DVR e RSPP, regolarità fiscale. Si parte da 30 crediti e si lavora con almeno 15; decurtazioni per provvedimenti definitivi; dal 2026, per il lavoro nero, 5 crediti per lavoratore già alla notifica del verbale (D.L. 159/2025). Senza patente o sotto 15 crediti: sanzione del 10% del valore dei lavori, non inferiore a 12.000 euro, ed esclusione dai lavori pubblici per sei mesi. Esenti le imprese con SOA dalla III classifica.",
"schede": [
"DL-23a"
]
},
{
"id": "C26-1.13",
"riga": 1,
"n": 13,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Appalto genuino e appalto illecito: criteri e conseguenze.",
"sintesi": "L'appalto è genuino se l'appaltatore organizza i mezzi, anche solo dirigendo i lavoratori, e assume il rischio d'impresa (art. 1655 c.c.; art. 29, c. 1, D.Lgs. 276/2003); altrimenti è somministrazione abusiva. Nell'appalto illecito il lavoratore può chiedere la costituzione del rapporto con il committente (art. 29, c. 3-bis); utilizzatore e pseudo-appaltatore sono puniti con l'arresto fino a un mese o l'ammenda di 60 euro per lavoratore e giornata, tra 5.000 e 60.000 euro (art. 18, c. 5-bis), estinguibile con prescrizione obbligatoria. Anche nell'appalto genuino c'è solidarietà del committente per due anni per retribuzioni e contributi e trattamento non inferiore al CCNL leader del settore (art. 29, c. 1-bis e 2).",
"schede": [
"DL-8b"
]
},
{
"id": "C26-1.14",
"riga": 1,
"n": 14,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Il caporalato e l'intermediazione illecita (art. 603-bis c.p.).",
"sintesi": "Punisce chi recluta manodopera per destinarla a terzi in condizioni di sfruttamento, approfittando dello stato di bisogno, e chi la utilizza, assume o impiega, anche tramite intermediari: reclusione da 1 a 6 anni e multa da 500 a 1.000 euro per lavoratore. Indici di sfruttamento: retribuzioni reiteratamente difformi dai CCNL o sproporzionate, violazioni reiterate di orario, riposi e ferie, violazioni della sicurezza, condizioni degradanti. Aggravanti: più di 3 lavoratori, minori, grave pericolo. Sull'impresa sequestro o controllo giudiziario; per gli stranieri vittime permesso «casi speciali» (art. 18-ter D.Lgs. 286/1998).",
"schede": [
"DL-11b"
]
},
{
"id": "C26-1.15",
"riga": 1,
"n": 15,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Il potere disciplinare: procedimento e garanzie dell'art. 7 dello Statuto dei lavoratori.",
"sintesi": "Il datore può sanzionare le violazioni di diligenza, obbedienza e fedeltà (artt. 2104-2105 c.c.) in proporzione alla gravità (art. 2106). Garanzie dell'art. 7 St. lav.: codice disciplinare affisso in luogo accessibile; contestazione scritta, specifica e immediata; diritto di difesa anche con assistenza sindacale; nessuna sanzione più grave del rimprovero verbale prima di 5 giorni. Limiti: multa fino a 4 ore di retribuzione base, sospensione fino a 10 giorni, niente mutamenti definitivi; delle sanzioni non si tiene conto dopo 2 anni dalla loro applicazione. Impugnazione davanti al giudice o, entro 20 giorni, al collegio di conciliazione e arbitrato tramite l'ITL, con sanzione sospesa; se il datore non nomina il suo arbitro entro 10 giorni la sanzione non ha effetto. Le garanzie valgono anche per il licenziamento disciplinare (C. cost. 204/1982).",
"schede": [
"DL-X2"
]
},
{
"id": "C26-1.16",
"riga": 1,
"n": 16,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Licenziamento disciplinare illegittimo: quali tutele per chi è stato assunto prima e dopo il 7 marzo 2015?",
"sintesi": "Dipende da data di assunzione, dimensioni e vizio. Reintegra piena per tutti se il licenziamento è nullo, discriminatorio o orale. Vecchi assunti nelle aziende sopra soglia (oltre 15 dipendenti nell'unità o nel Comune, o oltre 60): reintegra attenuata, con indennità fino a 12 mensilità, se il fatto non sussiste o il CCNL lo punisce con sanzione conservativa; altrimenti indennità da 12 a 24 mensilità; da 6 a 12 per vizi di procedura, compresa la violazione dell'art. 7 (art. 18 St. lav.). Nuovi assunti (D.Lgs. 23/2015): reintegra attenuata solo se è provata l'insussistenza del fatto materiale; altrimenti indennità da 6 a 36 mensilità, senza automatismo sull'anzianità (C. cost. 194/2018). Piccoli datori: art. 8 L. 604/1966 per i vecchi assunti; per i nuovi indennità dimezzate senza il tetto di 6 mensilità (C. cost. 118/2025).",
"schede": [
"DL-X1"
]
},
{
"id": "C26-1.17",
"riga": 1,
"n": 17,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "La trasparenza retributiva nel D.Lgs. 96/2026: obblighi prima e durante il rapporto.",
"sintesi": "Il D.Lgs. 7/5/2026 n. 96, in vigore dal 7/6/2026, attua la dir. (UE) 2023/970 per rendere verificabile la parità retributiva tra uomini e donne (art. 37 Cost.); vale per il lavoro pubblico e privato. Prima dell'assunzione: retribuzione iniziale o fascia e CCNL negli avvisi; vietato chiedere al candidato la retribuzione pregressa (art. 5). Durante il rapporto: criteri retributivi accessibili, di regola con l'informativa del D.Lgs. 152/1997 (sotto 50 dipendenti nessun obbligo sui criteri di progressione); diritto del lavoratore a conoscere i livelli medi per sesso della sua categoria, risposta scritta entro 2 mesi; nulle le clausole di riservatezza sulla retribuzione (artt. 6-7). Da 100 dipendenti dati sul divario (2027 o 2031); valutazione congiunta se il divario è almeno del 5% (artt. 9-10). Sanzione dell'art. 41, c. 2, D.Lgs. 198/2006: oggi amministrativa da 5.000 a 10.000 euro.",
"schede": [
"DL-X4"
]
},
{
"id": "C26-1.18",
"riga": 1,
"n": 18,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Il lavoro tramite piattaforme digitali: che cosa cambia con l'art. 12 del D.L. 62/2026?",
"sintesi": "La qualificazione dipende dalle modalità effettive: subordinazione anche con poteri esercitati tramite algoritmo; collaborazione etero-organizzata, con la disciplina del lavoro subordinato (art. 2 D.Lgs. 81/2015; Cass. 1663/2020); rider autonomo con le tutele minime del capo V-bis D.Lgs. 81/2015. Per i rider l'art. 12 D.L. 62/2026 introduce una presunzione: se emergono fatti che indicano direzione e controllo, anche dai dati dei sistemi automatizzati, il rapporto si presume subordinato e la piattaforma deve provare il contrario. Novità connesse: riesame umano delle decisioni automatizzate (art. 14) e conservazione dei dati per 5 anni (art. 13). La dir. (UE) 2024/2831 va ancora recepita: norma in itinere.",
"schede": [
"DL-X13"
]
},
{
"id": "C26-1.19",
"riga": 1,
"n": 19,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Le dimissioni per fatti concludenti.",
"sintesi": "Il Collegato lavoro (art. 19 L. 203/2024) ha aggiunto il c. 7-bis all'art. 26 D.Lgs. 151/2015: se l'assenza ingiustificata supera il termine del CCNL o, in mancanza, 15 giorni, il datore può comunicarla all'ITL e il rapporto si intende risolto per volontà del lavoratore, senza procedura telematica. È una facoltà (circ. Min. Lav. 6/2025): in alternativa resta la via disciplinare. L'effetto non si produce se l'ITL accerta che la comunicazione non è veritiera o se il lavoratore prova la forza maggiore o il fatto del datore (nota INL 579/2025). Niente NASpI.",
"schede": [
"DL-X5"
]
},
{
"id": "C26-1.20",
"riga": 1,
"n": 20,
"m": "DL",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Il D.L. 62/2026 e i rinnovi contrattuali: anticipazione per i CCNL scaduti e codice alfanumerico del CCNL.",
"sintesi": "Se il CCNL non è rinnovato entro 9 mesi dalla scadenza spetta un'anticipazione forfettaria del 50% dell'IPCA-NEI, salvo pattuizioni; dopo 12 mesi si ferma il contributo di assistenza contrattuale; per i CCNL già scaduti la regola vale dal 1/1/2027 (art. 10). Il codice alfanumerico unico del CCNL applicato va indicato nell'informativa all'assunzione (art. 1, c. 1, lett. q-bis, D.Lgs. 152/1997) e nel prospetto paga (art. 1 L. 4/1953): art. 11. Serve al monitoraggio e alla vigilanza sul CCNL effettivamente applicato.",
"schede": [
"DL-X3"
]
},
{
"id": "C26-1.21",
"riga": 1,
"n": 21,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": true,
"testo": "La nozione di lavoro subordinato e gli indici della subordinazione.",
"sintesi": "Per l'art. 2094 c.c. è subordinato chi si obbliga, mediante retribuzione, a collaborare nell'impresa prestando il proprio lavoro alle dipendenze e sotto la direzione dell'imprenditore: collaborazione, onerosità, eterodirezione. Il cuore è la soggezione al potere direttivo, di controllo e disciplinare (artt. 2104 e 2106). Se non è evidente, il giudice valuta insieme indici sussidiari: continuità, orario, retribuzione fissa, inserimento nell'organizzazione, assenza di rischio e di struttura propria. Il nome dato dalle parti non è decisivo. Confini: lavoro autonomo (art. 2222 c.c.), co.co.co. (art. 409 c.p.c.), collaborazioni etero-organizzate, a cui si applica la disciplina del subordinato (art. 2 D.Lgs. 81/2015).",
"schede": [
"DL-1a",
"DL-19a"
]
},
{
"id": "C26-1.22",
"riga": 1,
"n": 22,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": true,
"testo": "Il contratto a tempo determinato: durata, condizioni, proroghe e rinnovi.",
"sintesi": "Disciplinato dagli artt. 19-29 D.Lgs. 81/2015. Durata libera fino a 12 mesi; fino a 24 solo con una condizione: casi dei contratti collettivi dell'art. 51, in loro assenza (entro il 31/12/2026) esigenze tecniche, organizzative o produttive individuate dalle parti, sostituzione di altri lavoratori. Termine per iscritto, salvo rapporti fino a 12 giorni; massimo 4 proroghe in 24 mesi; intervalli di 10 o 20 giorni tra un contratto e l'altro. Limite del 20% dei dipendenti a tempo indeterminato, salvo CCNL. Divieti: sostituire scioperanti, unità con licenziamenti collettivi o integrazione salariale, imprese senza valutazione dei rischi. Precedenza per chi ha lavorato più di 6 mesi; impugnazione entro 180 giorni.",
"schede": [
"DL-1b"
]
},
{
"id": "C26-1.23",
"riga": 1,
"n": 23,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "Il part-time: forma, lavoro supplementare e clausole elastiche.",
"sintesi": "È un rapporto subordinato con orario inferiore al tempo pieno (artt. 4-12 D.Lgs. 81/2015). Forma scritta ai fini della prova con durata e collocazione dell'orario; se manca la durata il giudice può dichiarare il tempo pieno. Lavoro supplementare (oltre l'orario concordato ed entro il normale): se il CCNL tace, fino al 25% delle ore settimanali con maggiorazione del 15%, rifiutabile per comprovate esigenze. Clausole elastiche per spostare la collocazione o aumentare la durata: accordo scritto e preavviso di almeno 2 giorni. Principi di non discriminazione e proporzionalità; il rifiuto della trasformazione non è motivo di licenziamento.",
"schede": [
"DL-2b",
"DL-17a"
]
},
{
"id": "C26-1.24",
"riga": 1,
"n": 24,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": false,
"testo": "L'apprendistato professionalizzante.",
"sintesi": "Contratto a tempo indeterminato a causa mista, lavoro e formazione, per conseguire una qualificazione ai fini contrattuali (artt. 41-47 D.Lgs. 81/2015). Giovani da 18 a 29 anni (17 con qualifica); durata formativa fissata dai CCNL entro 3 anni (5 nell'artigianato), minimo 6 mesi. Forma scritta con piano formativo individuale e tutor; formazione pubblica fino a 120 ore nel triennio. Limiti numerici rispetto ai qualificati; sopra 50 dipendenti nuove assunzioni solo se è stato stabilizzato almeno il 20% degli apprendisti nei 36 mesi precedenti. Sottoinquadramento fino a due livelli o retribuzione percentualizzata; recesso in formazione solo per giusta causa o giustificato motivo; al termine recesso con preavviso, altrimenti si prosegue.",
"schede": [
"DL-21a"
]
},
{
"id": "C26-1.25",
"riga": 1,
"n": 25,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "Le mansioni e lo ius variandi dopo la riforma dell'art. 2103 c.c.",
"sintesi": "Il lavoratore va adibito alle mansioni di assunzione, a quelle del superiore inquadramento acquisito o a mansioni dello stesso livello e categoria legale. Mansioni superiori: diventano definitive dopo il periodo del CCNL o, in mancanza, 6 mesi continuativi, salvo sostituzione di un assente. Mansioni inferiori unilaterali: per modifica degli assetti organizzativi o nei casi dei CCNL, un solo livello sotto e nella stessa categoria legale, con comunicazione scritta a pena di nullità e conservazione di livello e retribuzione. Patto di demansionamento solo in sede protetta, anche con l'assistenza di un consulente del lavoro, per conservare l'occupazione, acquisire altra professionalità o migliorare le condizioni di vita.",
"schede": [
"DL-13a"
]
},
{
"id": "C26-1.26",
"riga": 1,
"n": 26,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": true,
"testo": "Le informazioni da dare al lavoratore all'assunzione.",
"sintesi": "Il datore informa per iscritto il lavoratore sulle condizioni del contratto e del rapporto (art. 1 D.Lgs. 152/1997, riscritto dal D.Lgs. 104/2022): parti, luogo, inquadramento, inizio e tipologia, prova, formazione, ferie e congedi, preavviso, retribuzione e modalità di pagamento, orario e straordinario, CCNL applicato, enti previdenziali. Consegna del contratto o della copia della comunicazione di assunzione prima dell'inizio; alcune informazioni entro 7 giorni o un mese; si può rinviare al CCNL. Per i sistemi decisionali o di monitoraggio automatizzati servono informazioni aggiuntive (art. 1-bis). Novità 2026: il codice alfanumerico del CCNL (lett. q-bis, art. 11 D.L. 62/2026) e, per il D.Lgs. 96/2026, l'informativa come veicolo dei criteri retributivi.",
"schede": [
"DL-14a"
]
},
{
"id": "C26-1.27",
"riga": 1,
"n": 27,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": false,
"testo": "Orario di lavoro, riposi e lavoro straordinario.",
"sintesi": "Il D.Lgs. 66/2003 fissa l'orario normale in 40 ore settimanali (art. 3), anche come media multiperiodale fissata dai CCNL; la durata massima è di 48 ore ogni 7 giorni, straordinario compreso, come media su 4 mesi, elevabile dai CCNL (art. 4). Riposo giornaliero di 11 ore consecutive (art. 7), pausa oltre le 6 ore (art. 8), riposo settimanale di 24 ore come media su 14 giorni (art. 9). Lo straordinario lo regolano i CCNL; in mancanza serve l'accordo e il limite è di 250 ore annue; si compensa con maggiorazioni e, se previsto, con riposi compensativi. Esclusi dai limiti di durata dirigenti e lavoratori con orario non misurabile.",
"schede": [
"DL-16a",
"DL-17a"
]
},
{
"id": "C26-1.28",
"riga": 1,
"n": 28,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "Impianti audiovisivi e controlli a distanza (art. 4 St. lav.).",
"sintesi": "Il controllo a distanza non può essere la finalità degli impianti: impianti e strumenti da cui deriva anche un controllo sono ammessi solo per esigenze organizzative e produttive, sicurezza del lavoro o tutela del patrimonio, previo accordo con RSA o RSU o, in mancanza, autorizzazione dell'ITL. Non servono accordo né autorizzazione per gli strumenti usati per rendere la prestazione e per quelli di rilevazione di accessi e presenze. Le informazioni sono utilizzabili a tutti i fini, anche disciplinari, solo con adeguata informazione al lavoratore e nel rispetto della normativa privacy. La violazione è punita penalmente (art. 38 St. lav.).",
"schede": [
"DL-15a"
]
},
{
"id": "C26-1.29",
"riga": 1,
"n": 29,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "Rinunce e transazioni del lavoratore; la conciliazione in sede protetta.",
"sintesi": "Le rinunzie e transazioni su diritti nati da norme inderogabili di legge o di contratto collettivo sono invalide (art. 2113 c.c.) e si impugnano con qualsiasi atto scritto entro 6 mesi dalla cessazione o dall'atto, se successivo. Non sono impugnabili se concluse in sede protetta: commissione di conciliazione dell'ITL (art. 410 c.p.c.), sede sindacale (art. 412-ter), collegio di conciliazione e arbitrato (art. 412-quater), giudice, commissioni di certificazione (anche quella del Consiglio provinciale dei consulenti del lavoro). Inoppugnabili anche l'offerta di conciliazione del D.Lgs. 23/2015 e il verbale di conciliazione monocratica. Le quietanze a saldo generiche valgono solo come dichiarazioni di scienza.",
"schede": [
"DL-13b",
"DL-21b"
]
},
{
"id": "C26-1.30",
"riga": 1,
"n": 30,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": true,
"testo": "Il licenziamento per giustificato motivo oggettivo e la procedura dell'art. 7 L. 604/1966.",
"sintesi": "Il GMO consiste in ragioni inerenti all'attività produttiva, all'organizzazione del lavoro e al suo regolare funzionamento (art. 3 L. 604/1966): il datore prova la ragione effettiva, il nesso con il posto soppresso e l'impossibilità di ricollocare il lavoratore (repêchage). Nelle imprese sopra 15 dipendenti, per gli assunti prima del 7/3/2015, prima si comunica l'intenzione all'ITL, che convoca le parti entro 7 giorni; la procedura si chiude in 20 giorni e le parti possono farsi assistere anche da un consulente del lavoro. La risoluzione consensuale raggiunta in quella sede dà diritto alla NASpI; se fallisce, il licenziamento ha effetto dall'avvio della procedura. Con 5 licenziamenti in 120 giorni si applica la L. 223/1991.",
"schede": [
"S22-DL-25"
]
},
{
"id": "C26-1.31",
"riga": 1,
"n": 31,
"m": "DL",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "Il trasferimento d'azienda e la tutela dei lavoratori.",
"sintesi": "Nel trasferimento d'azienda o di ramo (anche affitto e usufrutto) il rapporto continua con il cessionario senza consenso del lavoratore, che conserva i diritti maturati; cedente e cessionario rispondono in solido dei crediti esistenti (art. 2112 c.c.). Il cessionario applica i contratti collettivi in vigore fino alla scadenza, salvo sostituzione con altri dello stesso livello. Il trasferimento non è di per sé motivo di licenziamento; chi subisce una modifica sostanziale nei 3 mesi successivi può dimettersi per giusta causa. Sopra 15 dipendenti comunicazione scritta ai sindacati almeno 25 giorni prima ed esame congiunto su richiesta (art. 47 L. 428/1990); deroghe possibili nelle imprese in crisi.",
"schede": [
"DL-X15"
]
},
{
"id": "C26-2.01",
"riga": 2,
"n": 1,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "La cassa integrazione guadagni ordinaria: campo di applicazione, causali, misura e durata.",
"sintesi": "La CIGO integra la retribuzione dei dipendenti delle imprese industriali e assimilate (manifatturiere, edili, lapidee, estrattive, trasporti) in caso di sospensione o riduzione dell'attività per eventi transitori non imputabili, comprese le intemperie, o per situazioni temporanee di mercato, con prevedibile ripresa (artt. 10-18 D.Lgs. 148/2015). Spetta ai subordinati, apprendisti compresi, con almeno 30 giorni di lavoro effettivo nell'unità produttiva. Misura: 80% della retribuzione per le ore non lavorate, entro un massimale aggiornato ogni anno. Durata: 13 settimane prorogabili fino a 52, limite di 52 nel biennio mobile, dentro i 24 mesi nel quinquennio per CIGO e CIGS insieme. Consultazione sindacale e domanda telematica entro 15 giorni dall'inizio della sospensione.",
"schede": [
"INPS-1"
]
},
{
"id": "C26-2.02",
"riga": 2,
"n": 2,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "La cassa integrazione guadagni straordinaria e le sue causali.",
"sintesi": "La CIGS (artt. 19-25-ter D.Lgs. 148/2015) riguarda i datori di tutti i settori che nel semestre precedente hanno occupato mediamente più di 15 dipendenti e non sono coperti dai fondi di solidarietà. Causali: riorganizzazione aziendale, anche per processi di transizione, fino a 24 mesi; crisi aziendale fino a 12 mesi; contratto di solidarietà fino a 24 mesi nel quinquennio mobile. Sospensioni autorizzabili entro l'80% delle ore lavorabili. Procedura: comunicazione ai sindacati ed esame congiunto, domanda al Ministero del lavoro entro 7 giorni dalla consultazione, decreto di autorizzazione. Collegati l'accordo di ricollocazione e la condizionalità formativa.",
"schede": [
"INPS-2"
]
},
{
"id": "C26-2.03",
"riga": 2,
"n": 3,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "I fondi di solidarietà bilaterali e il Fondo di integrazione salariale.",
"sintesi": "Per i datori che non rientrano nella CIGO la tutela in caso di sospensione o riduzione dell'attività è affidata ai fondi di solidarietà (artt. 26 ss. D.Lgs. 148/2015): fondi bilaterali di settore istituiti dalla contrattazione collettiva, fondi alternativi (artigianato e somministrazione) e, in via residuale, il FIS presso l'INPS. Dal 2022 l'obbligo di copertura riguarda i datori con almeno un dipendente. Il FIS eroga l'assegno di integrazione salariale finanziato con un'aliquota contributiva a carico di datore e lavoratori.",
"schede": [
"S22-INPS-14"
]
},
{
"id": "C26-2.04",
"riga": 2,
"n": 4,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "La NASpI: requisiti, misura, durata e novità 2025-2026.",
"sintesi": "È l'indennità mensile di disoccupazione per i subordinati che hanno perso involontariamente il lavoro (D.Lgs. 22/2015): licenziamento anche disciplinare, dimissioni per giusta causa o nel periodo tutelato di maternità, risoluzione consensuale nella procedura dell'art. 7 L. 604/1966. Requisito: 13 settimane di contribuzione nei 4 anni precedenti; dal 2025, se nei 12 mesi prima ci sono state dimissioni o risoluzione consensuale da un tempo indeterminato, le 13 settimane vanno maturate dopo quella cessazione (L. 207/2024). Misura: 75% della retribuzione media fino alla soglia più 25% dell'eccedenza, entro il massimale, con riduzione del 3% al mese dal sesto mese. Durata: metà delle settimane contributive degli ultimi 4 anni, massimo 2 anni. Domanda entro 68 giorni. Dal 2026 la liquidazione anticipata si paga in due rate, 70% e 30%.",
"schede": [
"INPS-6",
"INPS-X1"
]
},
{
"id": "C26-2.05",
"riga": 2,
"n": 5,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "Si può lavorare mentre si percepisce la NASpI?",
"sintesi": "Sì, il lavoro non fa automaticamente perdere l'indennità: conta tipo di attività, durata e reddito previsto (artt. 9-10 D.Lgs. 22/2015). Lavoro subordinato con reddito annuo superiore al limite esente da imposta: decadenza, ma se il contratto non supera 6 mesi la NASpI è solo sospesa per la durata del rapporto. Reddito inferiore al limite esente: la NASpI resta, ridotta dell'80% del reddito previsto, se il lavoratore comunica all'INPS il reddito annuo previsto entro 30 giorni dall'inizio. Più rapporti brevi che superano complessivamente 6 mesi fanno decadere. Per l'attività autonoma o d'impresa vale la stessa logica, con comunicazione del reddito (art. 10).",
"schede": [
"INPS-21"
]
},
{
"id": "C26-2.06",
"riga": 2,
"n": 6,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "Il minimale contributivo e il CCNL comparativamente più rappresentativo.",
"sintesi": "I contributi si calcolano su una retribuzione non inferiore a quella dei CCNL delle organizzazioni più rappresentative, anche per chi non li applica (art. 1, c. 1, D.L. 338/1989); se per la stessa categoria ci sono più contratti vale quello delle organizzazioni comparativamente più rappresentative (art. 2, c. 25, L. 549/1995). In ogni caso non si scende sotto il minimale giornaliero di legge, pari al 9,50% del trattamento minimo di pensione. Collegamento 2026: il D.L. 62/2026 usa lo stesso criterio (TEC del CCNL leader) come misura del salario giusto e come condizione dei benefici, quindi chi applica un CCNL «minore» subisce recuperi sia retributivi sia contributivi.",
"schede": [
"INPS-15"
]
},
{
"id": "C26-2.07",
"riga": 2,
"n": 7,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "Omissione ed evasione contributiva: differenze e sanzioni civili.",
"sintesi": "Omissione (art. 116, c. 8, lett. a, L. 388/2000): contributi non pagati o pagati in ritardo ma risultanti da denunce e registrazioni; sanzione pari al tasso BCE più 5,5 punti annui, tetto 40%, solo tasso BCE se si paga spontaneamente entro 120 giorni. Evasione (lett. b): denunce omesse o non veritiere con intenzione di occultare rapporti o retribuzioni; 30% annuo con tetto 60%, ridotta se il datore denuncia spontaneamente entro 12 mesi e paga nei termini (D.L. 19/2024). Dopo un accertamento la sanzione si riduce al 50% se si paga entro 30 giorni. Le ritenute previdenziali trattenute e non versate oltre 10.000 euro annui sono reato (art. 2, c. 1-bis, D.L. 463/1983); sotto, illecito amministrativo; non punibile chi paga entro 3 mesi dalla contestazione.",
"schede": [
"INPS-18",
"S22-PPP-28"
]
},
{
"id": "C26-2.08",
"riga": 2,
"n": 8,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "La prescrizione dei contributi previdenziali.",
"sintesi": "I contributi previdenziali e assistenziali si prescrivono in cinque anni (art. 3, c. 9, L. 335/1995) e, una volta prescritti, non possono più essere versati, neppure spontaneamente (irricevibilità). Il termine vale anche per i premi INAIL; diventa di 10 anni se il lavoratore o i superstiti presentano denuncia. Oltre la prescrizione l'automaticità delle prestazioni non opera: il datore risponde del danno al lavoratore (art. 2116, c. 2, c.c.), che può chiedere la costituzione della rendita vitalizia (art. 13 L. 1338/1962).",
"schede": [
"INPS-12"
]
},
{
"id": "C26-2.09",
"riga": 2,
"n": 9,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "Il principio di automaticità delle prestazioni.",
"sintesi": "Le prestazioni previdenziali spettano al lavoratore subordinato anche se il datore non ha versato i contributi (art. 2116 c.c.): il lavoratore non può subire le conseguenze dell'inadempimento del datore, che risponde in via esclusiva del versamento anche della quota a carico del lavoratore. Il limite è la prescrizione: per i contributi prescritti l'automaticità non opera e resta il risarcimento a carico del datore. Non vale per autonomi e professionisti, che versano per sé, né per i collaboratori della gestione separata, salvo l'indennità di maternità.",
"schede": [
"INPS-23",
"INPS-22"
]
},
{
"id": "C26-2.10",
"riga": 2,
"n": 10,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "Il DURC: che cosa attesta e a che cosa serve.",
"sintesi": "Il documento unico di regolarità contributiva attesta, con un'unica interrogazione telematica sul codice fiscale, la regolarità dei versamenti verso INPS, INAIL e, per l'edilizia, Casse edili (art. 4 D.L. 34/2014; D.M. 30/1/2015). Serve per appalti pubblici, per i benefici normativi e contributivi (art. 1, c. 1175, L. 296/2006) e per la patente a crediti nei cantieri. Il documento vale 120 giorni e può chiederlo anche il consulente del lavoro su delega. Se emergono irregolarità l'ente invia via PEC l'invito a regolarizzare entro 15 giorni, altrimenti si genera il documento di non regolarità.",
"schede": [
"INPS-20"
]
},
{
"id": "C26-2.11",
"riga": 2,
"n": 11,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "La rateazione dei debiti contributivi verso l'INPS.",
"sintesi": "I debiti contributivi non ancora affidati all'agente della riscossione si possono dilazionare in via amministrativa con l'INPS: fino a 60 rate mensili dal c. 11-bis dell'art. 2 D.L. 338/1989, introdotto dalla L. 203/2024 e attuato dal D.I. 24/10/2025: con dichiarazione di temporanea difficoltà, fino a 36 rate per debiti fino a 500.000 euro e fino a 60 oltre. Si applicano gli interessi di dilazione; la revoca scatta con il mancato pagamento di tre rate. Per i debiti già iscritti a ruolo la rateazione si chiede all'Agenzia delle entrate-Riscossione. Stessa disciplina per i premi INAIL non iscritti a ruolo.",
"schede": [
"INPS-13",
"INAIL-6"
]
},
{
"id": "C26-2.12",
"riga": 2,
"n": 12,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "L'inquadramento aziendale ai fini previdenziali.",
"sintesi": "L'inquadramento è la classificazione del datore in un settore previdenziale (industria, artigianato, commercio, agricoltura, credito, ecc.), fatta dall'INPS in via esclusiva in base all'attività effettivamente svolta (art. 49 L. 88/1989). Da esso dipendono le aliquote contributive e le prestazioni accessibili, per esempio CIGO o fondi di solidarietà. L'inquadramento vincola anche l'INAIL; l'iscrizione si fa telematicamente con il codice ATECO (ATECO 2025 dal 1/4/2025) e la posizione contributiva ha una matricola unica per tutti i dipendenti.",
"schede": [
"INPS-14"
]
},
{
"id": "C26-2.13",
"riga": 2,
"n": 13,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "Gli incentivi alle assunzioni: condizioni generali e misure 2026.",
"sintesi": "Gli incentivi spettano solo se il datore è in regola con il DURC e rispetta le norme di tutela e i contratti collettivi delle organizzazioni comparativamente più rappresentative (art. 1, c. 1175, L. 296/2006) e se rispetta i principi dell'art. 31 D.Lgs. 150/2015 (niente incentivo se l'assunzione attua un obbligo, viola un diritto di precedenza o riguarda lavoratori licenziati nei 6 mesi prima da un datore collegato). Dal 2026 i benefici del D.L. 62/2026 richiedono un trattamento individuale non inferiore al TEC (art. 7, c. 5). Misure 2026: esonero per donne svantaggiate (fino a 650 euro al mese, 800 nella ZES), giovani under 35 (500 euro, 650 nella ZES e in Marche e Umbria), ZES unica, stabilizzazione dei contratti a termine.",
"schede": [
"INPS-X3"
]
},
{
"id": "C26-2.14",
"riga": 2,
"n": 14,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "La malattia del lavoratore: adempimenti e indennità.",
"sintesi": "La malattia sospende il rapporto con conservazione del posto per il periodo di comporto fissato dai CCNL (art. 2110 c.c.). Il medico trasmette telematicamente il certificato all'INPS; il lavoratore comunica l'assenza al datore e deve rispettare le fasce di reperibilità per le visite di controllo. Per operai e per impiegati del commercio e del terziario l'INPS paga un'indennità dal quarto giorno fino a 180 giorni l'anno: 50% della retribuzione media giornaliera dal 4° al 20° giorno, 66,66% dal 21°; è anticipata dal datore in busta paga e recuperata a conguaglio. Carenza dei primi tre giorni e integrazioni a carico del datore se il CCNL lo prevede; per gli impiegati dell'industria paga interamente il datore. Fasce di reperibilità 10-12 e 17-19.",
"schede": [
"INPS-17",
"RAG-1"
]
},
{
"id": "C26-2.15",
"riga": 2,
"n": 15,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": true,
"testo": "Congedo parentale e congedo di paternità: le regole 2026.",
"sintesi": "Il congedo parentale spetta a ciascun genitore: fino a 6 mesi la madre e 6 il padre (7 se ne fruisce almeno 3), 10 mesi di coppia (11 se il padre ne fruisce almeno 3), 11 al genitore solo (artt. 32-35 D.Lgs. 151/2001). Dal 1/1/2026 per i dipendenti è fruibile fino ai 14 anni del figlio (L. 199/2025). Indennità: 9 mesi al 30%, di cui 3 mesi all'80% entro i 6 anni del figlio; contribuzione figurativa; licenziamento per la fruizione nullo. Il congedo di paternità obbligatorio è di 10 giorni lavorativi (20 per parto plurimo) dai due mesi prima ai cinque mesi dopo il parto, indennizzato al 100% (art. 27-bis).",
"schede": [
"INPS-10",
"INPS-X1",
"DL-7b"
]
},
{
"id": "C26-2.16",
"riga": 2,
"n": 16,
"m": "INPS",
"gruppo": "INPS",
"comm": "gallotta",
"star": false,
"testo": "La previdenza complementare e l'adesione automatica dal 1° luglio 2026.",
"sintesi": "È il secondo pilastro che integra la pensione pubblica con fondi negoziali, aperti, PIP e preesistenti vigilati dalla COVIP (D.Lgs. 252/2005), finanziati soprattutto dal TFR. Fino al 30/6/2026 il lavoratore sceglie entro 6 mesi; se tace il TFR va al fondo contrattuale. Dal 1/7/2026 il lavoratore privato alla prima assunzione aderisce automaticamente se entro 60 giorni non rinuncia (L. 199/2025; art. 8 D.Lgs. 252/2005); esclusi i domestici. Con l'adesione affluiscono TFR, contributo del lavoratore e contributo del datore previsto dal contratto. Il datore deve informare il lavoratore.",
"schede": [
"INPS-16",
"INPS-X1"
]
},
{
"id": "C26-2.17",
"riga": 2,
"n": 17,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "L'obbligo assicurativo INAIL: chi e che cosa si assicura.",
"sintesi": "L'obbligo nasce quando coesistono un requisito oggettivo, cioè un'attività protetta perché si usano macchine o si svolgono lavorazioni pericolose, e un requisito soggettivo, cioè un lavoratore protetto (artt. 1 e 4 T.U. D.P.R. 1124/1965): chi presta opera manuale retribuita alle dipendenze altrui e, per la giurisprudenza, anche gli impiegati esposti al rischio; inoltre dirigenti, parasubordinati in attività pericolose, artigiani. Il premio è a carico del datore (per i parasubordinati 1/3 lavoratore e 2/3 committente); la tutela opera anche se il datore non ha denunciato l'attività (automaticità, art. 67).",
"schede": [
"INAIL-16"
]
},
{
"id": "C26-2.18",
"riga": 2,
"n": 18,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "L'infortunio sul lavoro: elementi costitutivi.",
"sintesi": "È infortunio la lesione causata da una causa violenta in occasione di lavoro, da cui derivano la morte, un'inabilità permanente o un'inabilità temporanea assoluta di oltre tre giorni (art. 2 T.U.). Causa violenta: fattore esterno rapido e concentrato; il concorso di cause preesistenti non esclude l'infortunio. Occasione di lavoro: nesso tra attività e evento, da un rischio inerente o connesso al lavoro. Sono indennizzabili il rischio specifico e quello generico aggravato, non il rischio elettivo.",
"schede": [
"INAIL-8",
"INAIL-19"
]
},
{
"id": "C26-2.19",
"riga": 2,
"n": 19,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "L'infortunio in itinere.",
"sintesi": "È tutelato l'infortunio nel normale percorso tra abitazione e luogo di lavoro, tra due luoghi di lavoro e verso il luogo abituale dei pasti se manca la mensa (art. 2 T.U., modificato dall'art. 12 D.Lgs. 38/2000). Esclusi interruzioni e deviazioni non necessitate. Il mezzo privato è coperto se necessario per distanza o mancanza di mezzi pubblici, anche per esigenze familiari; la bicicletta è sempre considerata necessitata. Dal 2025 la tutela copre anche gli studenti nel tragitto da e verso i percorsi di formazione scuola-lavoro (D.L. 159/2025).",
"schede": [
"INAIL-9"
]
},
{
"id": "C26-2.20",
"riga": 2,
"n": 20,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": false,
"testo": "Rischio elettivo e colpa del lavoratore: quando l'infortunio non è indennizzabile?",
"sintesi": "La colpa del lavoratore, anche grave, non esclude l'indennizzo: l'assicurazione copre proprio gli eventi dovuti a imprudenza o disattenzione. Lo esclude il rischio elettivo, cioè il rischio creato dal lavoratore con una scelta arbitraria, estranea alle finalità del lavoro e dettata da impulsi personali. Se l'infortunio è dovuto a dolo del lavoratore accertato con sentenza penale, l'INAIL può agire in regresso contro di lui (art. 11 T.U.).",
"schede": [
"INAIL-10",
"INAIL-20"
]
},
{
"id": "C26-2.21",
"riga": 2,
"n": 21,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "Malattie professionali tabellate e non tabellate.",
"sintesi": "La malattia professionale è contratta nell'esercizio e a causa delle lavorazioni, con causa lenta e progressiva (art. 3 T.U.). Il sistema è misto: per le malattie in tabella, contratte nelle lavorazioni indicate ed entro il periodo massimo di indennizzabilità, il nesso causale si presume; per quelle non tabellate il lavoratore deve provarlo (Corte cost. 179/1988; art. 10, c. 4, D.Lgs. 38/2000). La differenza con l'infortunio sta nella causa: violenta e concentrata nell'infortunio, lenta e diluita nella malattia.",
"schede": [
"INAIL-13",
"INAIL-22"
]
},
{
"id": "C26-2.22",
"riga": 2,
"n": 22,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "La denuncia d'infortunio: chi la fa e in quali termini.",
"sintesi": "Il lavoratore avverte subito il datore; il medico trasmette il certificato all'INAIL. Il datore denuncia telematicamente all'INAIL ogni infortunio non guaribile entro tre giorni: entro 2 giorni dalla ricezione dei dati del certificato; entro 24 ore se mortale o con pericolo di morte (art. 53 T.U.). A fini statistici (SINP) comunica entro 48 ore anche gli infortuni con assenza di almeno un giorno oltre quello dell'evento (art. 18 D.Lgs. 81/2008).",
"schede": [
"INAIL-11"
]
},
{
"id": "C26-2.23",
"riga": 2,
"n": 23,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": false,
"testo": "La denuncia di malattia professionale.",
"sintesi": "Il lavoratore deve comunicare la malattia al datore entro 15 giorni dalla manifestazione; il datore la denuncia telematicamente all'INAIL nei 5 giorni successivi, con il certificato medico (artt. 52-53 T.U.). Il medico che riconosce una malattia professionale ha inoltre un obbligo autonomo di denuncia a fini preventivi e statistici (art. 139 T.U.).",
"schede": [
"INAIL-12"
]
},
{
"id": "C26-2.24",
"riga": 2,
"n": 24,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "L'autoliquidazione del premio INAIL.",
"sintesi": "Il datore calcola e versa da sé il premio: entro il 16 febbraio paga la regolazione dell'anno precedente e la rata anticipata dell'anno in corso, entrambe calcolate sulle retribuzioni effettive dell'anno prima, e versa la somma algebrica positiva con F24, in unica soluzione o in quattro rate (16/2, 16/5, 16/8, 16/11) con interessi. Entro il 28 febbraio trasmette telematicamente la dichiarazione delle retribuzioni. Il premio è retribuzioni imponibili per il tasso della voce di tariffa, eventualmente ridotto per oscillazione.",
"schede": [
"INAIL-3",
"S22-RAG-10"
]
},
{
"id": "C26-2.25",
"riga": 2,
"n": 25,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "Le riduzioni del tasso di premio: andamento infortunistico e prevenzione.",
"sintesi": "Il tasso medio della voce può essere ridotto (artt. 19-23 D.I. 27/2/2019). Oscillazione per andamento infortunistico: dopo i primi due anni di attività, bonus o malus secondo la sinistrosità della PAT nel triennio; dal 2026 revisione delle aliquote ed esclusione dei condannati in via definitiva per gravi violazioni di sicurezza (D.L. 159/2025, conv. L. 198/2025). Oscillazione per prevenzione (OT23): a chi è in regola con DURC e sicurezza e ha fatto interventi migliorativi oltre gli obblighi, domanda telematica entro il 28 febbraio; 8% nei primi due anni, poi 28%, 18%, 10% o 5% secondo i lavoratori-anno. Le due riduzioni si sommano.",
"schede": [
"INAIL-5"
]
},
{
"id": "C26-2.26",
"riga": 2,
"n": 26,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": false,
"testo": "Gli adempimenti INAIL per l'avvio di una nuova attività o di una nuova sede.",
"sintesi": "Chi avvia un'attività soggetta all'obbligo, o apre una nuova sede, presenta telematicamente la denuncia di esercizio all'INAIL, di regola contestualmente all'inizio dell'attività, anche tramite la Comunicazione Unica (art. 12 T.U.; D.I. 27/2/2019). L'INAIL apre la posizione assicurativa territoriale (PAT), classifica le lavorazioni nelle voci di tariffa e calcola il primo premio anticipato sulle retribuzioni presunte, poi regolato su quelle effettive. Le variazioni vanno denunciate entro 30 giorni.",
"schede": [
"INAIL-2",
"INAIL-4"
]
},
{
"id": "C26-2.27",
"riga": 2,
"n": 27,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": false,
"testo": "La tariffa dei premi INAIL.",
"sintesi": "La tariffa ordinaria, approvata con D.I. 27/2/2019 e in vigore dal 2019, fissa per ogni lavorazione una voce e un tasso medio, distinti per quattro gestioni tariffarie (industria, artigianato, terziario, altre attività). La classificazione delle lavorazioni determina il tasso applicato alle retribuzioni; contro i provvedimenti in materia di tariffa c'è il ricorso amministrativo, che dal 2025 si propone alle Direzioni regionali (L. 203/2024; circ. INAIL 4/2025).",
"schede": [
"INAIL-23",
"S22-INAIL-5"
]
},
{
"id": "C26-2.28",
"riga": 2,
"n": 28,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "L'indennità per inabilità temporanea assoluta e le altre prestazioni INAIL.",
"sintesi": "L'INAIL eroga prestazioni economiche, sanitarie e socio-sanitarie. L'indennità per inabilità temporanea assoluta sostituisce la retribuzione quando l'evento impedisce totalmente il lavoro: spetta dal quarto giorno fino alla guarigione clinica, nella misura del 60% della retribuzione media giornaliera per i primi 90 giorni e del 75% dopo (art. 68 T.U.); per la carenza il datore paga l'intera retribuzione del giorno dell'infortunio e il 60% dei tre giorni successivi, salvo CCNL migliori (art. 73). Seguono l'indennizzo del danno biologico, le rendite, le prestazioni ai superstiti e l'assegno funerario.",
"schede": [
"INAIL-21",
"INAIL-7"
]
},
{
"id": "C26-2.29",
"riga": 2,
"n": 29,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": false,
"testo": "Il danno biologico: indennizzo in capitale e in rendita.",
"sintesi": "Per gli eventi dal 25/7/2000 l'inabilità permanente si indennizza come danno biologico (art. 13 D.Lgs. 38/2000): sotto il 6% non c'è indennizzo; dal 6% al 15% indennizzo in capitale; dal 16% al 100% rendita, con una quota per il danno biologico e una quota per le conseguenze patrimoniali calcolata sulla retribuzione. Il grado si accerta con la tabella delle menomazioni. In caso di morte l'INAIL paga la rendita ai superstiti e l'assegno funerario (art. 85 T.U.).",
"schede": [
"INAIL-14",
"INAIL-15"
]
},
{
"id": "C26-2.30",
"riga": 2,
"n": 30,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": true,
"testo": "L'esonero del datore dalla responsabilità civile e l'azione di regresso.",
"sintesi": "L'assicurazione esonera il datore dalla responsabilità civile per gli infortuni (art. 10 T.U.), salvo condanna penale per un reato perseguibile d'ufficio commesso da lui o da un suo dipendente (per esempio lesioni gravi o omicidio colposo per violazione delle norme di sicurezza). In quel caso il lavoratore ottiene il danno differenziale, cioè la parte del danno civile che supera l'indennizzo INAIL, e l'INAIL agisce in regresso verso i responsabili per recuperare quanto ha pagato (art. 11). Verso il terzo estraneo responsabile c'è la surroga (art. 1916 c.c.).",
"schede": [
"INAIL-17",
"S22-PPP-27"
]
},
{
"id": "C26-2.31",
"riga": 2,
"n": 31,
"m": "INAIL",
"gruppo": "INAIL",
"comm": "sassi",
"star": false,
"testo": "L'automaticità delle prestazioni INAIL.",
"sintesi": "Le prestazioni spettano al lavoratore anche se il datore non ha denunciato l'attività o non ha pagato il premio (art. 67 T.U.): il rapporto assicurativo nasce per legge. L'INAIL paga e poi recupera dal datore premi e sanzioni civili. Non vale per gli autonomi né per l'assicurazione degli infortuni domestici. Differenza con l'INPS: qui l'automaticità è piena per i subordinati, all'INPS opera nei limiti della prescrizione dei contributi.",
"schede": [
"INAIL-18"
]
},
{
"id": "C26-3.01",
"riga": 3,
"n": 1,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "I principi fondamentali della Costituzione: quali riguardano il lavoro?",
"sintesi": "Gli artt. 1-12 Cost. disegnano l'identità della Repubblica. Per il lavoro: Repubblica democratica fondata sul lavoro (art. 1); diritti inviolabili e doveri di solidarietà (art. 2); uguaglianza formale e sostanziale, con il compito di rimuovere gli ostacoli economici e sociali che limitano il pieno sviluppo della persona e la partecipazione dei lavoratori (art. 3); diritto al lavoro e dovere di svolgere un'attività che concorra al progresso della società (art. 4). Li completano i diritti del Titolo III: tutela del lavoro (35), retribuzione proporzionata e sufficiente (36), parità della donna lavoratrice e tutela dei minori (37), previdenza e assistenza (38), libertà sindacale (39), sciopero (40), libertà di iniziativa economica nei limiti dell'utilità sociale (41).",
"schede": [
"S22-PPP-11",
"DL-18a"
]
},
{
"id": "C26-3.02",
"riga": 3,
"n": 2,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "Il procedimento legislativo ordinario.",
"sintesi": "La funzione legislativa spetta collettivamente alle due Camere, che devono approvare lo stesso testo (art. 70 Cost.). Iniziativa: Governo, ciascun parlamentare, organi ed enti previsti da legge costituzionale (CNEL, Consigli regionali), popolo con almeno 50.000 elettori (art. 71). Esame in commissione e in Assemblea, articolo per articolo e votazione finale; riserva di Assemblea per leggi costituzionali, elettorali, di delega, di ratifica e di bilancio (art. 72). Il Presidente della Repubblica promulga entro un mese e può chiedere una nuova deliberazione, ma se le Camere riapprovano deve promulgare (artt. 73-74). Pubblicazione in Gazzetta ed entrata in vigore il quindicesimo giorno, salvo diverso termine.",
"schede": [
"PPP-1"
]
},
{
"id": "C26-3.03",
"riga": 3,
"n": 3,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "Il decreto-legge: presupposti, conversione, limiti. Un esempio nel diritto del lavoro 2026.",
"sintesi": "È un atto provvisorio con forza di legge adottato dal Governo, sotto la sua responsabilità, in casi straordinari di necessità e urgenza (art. 77 Cost.); deliberato dal Consiglio dei ministri ed emanato dal Presidente della Repubblica, va presentato subito alle Camere e perde efficacia fin dall'inizio se non è convertito entro 60 giorni dalla pubblicazione. Limiti dell'art. 15 L. 400/1988: niente deleghe, niente materie riservate all'Assemblea, niente reiterazione, contenuto omogeneo e di immediata applicazione. Esempio: D.L. 30/4/2026 n. 62, convertito con modificazioni dalla L. 25/6/2026 n. 112; l'art. 7-bis sulla prossimità è stato inserito proprio in conversione.",
"schede": [
"PPP-3"
]
},
{
"id": "C26-3.04",
"riga": 3,
"n": 4,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "Il decreto legislativo delegato. Un esempio di recepimento di una direttiva.",
"sintesi": "È un atto con forza di legge che il Governo adotta su delega del Parlamento: la legge delega deve fissare principi e criteri direttivi, tempo limitato e oggetti definiti (art. 76 Cost.) ed è a riserva di Assemblea. Il decreto è emanato dal Presidente della Repubblica; se la delega supera i due anni servono i pareri delle Camere (art. 14 L. 400/1988). Il vizio tipico è l'eccesso di delega, giudicato dalla Corte costituzionale. Esempio: D.Lgs. 96/2026, che recepisce la dir. (UE) 2023/970 sulla trasparenza retributiva; ogni anno la legge di delegazione europea delega il Governo ad attuare le direttive (L. 234/2012).",
"schede": [
"PPP-4",
"PPP-X3"
]
},
{
"id": "C26-3.05",
"riga": 3,
"n": 5,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": false,
"testo": "Referendum abrogativo e referendum costituzionale.",
"sintesi": "Il referendum abrogativo (art. 75 Cost.) è chiesto da 500.000 elettori o 5 Consigli regionali per abrogare in tutto o in parte una legge o un atto con forza di legge; esclusi leggi tributarie e di bilancio, amnistia e indulto, autorizzazione a ratificare trattati. La Corte costituzionale ne giudica l'ammissibilità; è valido se vota la maggioranza degli aventi diritto. Il referendum costituzionale (art. 138) è eventuale e confermativo: entro 3 mesi dalla pubblicazione di una legge di revisione approvata senza i due terzi, su richiesta di un quinto dei membri di una Camera, 500.000 elettori o 5 Consigli regionali; non c'è quorum.",
"schede": [
"PPP-5"
]
},
{
"id": "C26-3.06",
"riga": 3,
"n": 6,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "La Corte costituzionale: composizione, competenze ed effetti delle sentenze.",
"sintesi": "È l'organo di garanzia che giudica la legittimità costituzionale di leggi e atti con forza di legge di Stato e Regioni, i conflitti di attribuzione e le accuse al Presidente della Repubblica (art. 134 Cost.). 15 giudici, un terzo nominati dal Presidente della Repubblica, un terzo dal Parlamento in seduta comune, un terzo dalle supreme magistrature; mandato di 9 anni non rinnovabile (art. 135). Accesso in via incidentale, quando un giudice solleva la questione, o principale, con ricorso di Stato o Regione entro 60 giorni. La norma dichiarata illegittima cessa di avere efficacia dal giorno dopo la pubblicazione della decisione (art. 136). Esempi nel lavoro: C. cost. 221/2012 sulla prossimità, 194/2018 sulle tutele crescenti.",
"schede": [
"PPP-6"
]
},
{
"id": "C26-3.07",
"riga": 3,
"n": 7,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "Legge statale e legge regionale: come si ripartisce la competenza in materia di lavoro?",
"sintesi": "Il rapporto non è gerarchico ma di competenza, secondo l'art. 117 Cost. Potestà esclusiva dello Stato: tra l'altro ordinamento civile e penale e previdenza sociale (c. 2): quindi il rapporto di lavoro privato e la previdenza obbligatoria sono materia statale. Potestà concorrente: tutela e sicurezza del lavoro, previdenza complementare e integrativa, con principi fondamentali fissati dallo Stato (c. 3). Residuale alle Regioni tutto il resto (c. 4), per esempio formazione professionale e tirocini extracurricolari. Il Governo può impugnare la legge regionale e la Regione la legge statale davanti alla Corte costituzionale entro 60 giorni (art. 127).",
"schede": [
"PPP-7"
]
},
{
"id": "C26-3.08",
"riga": 3,
"n": 8,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": false,
"testo": "Il Presidente della Repubblica.",
"sintesi": "È il capo dello Stato e rappresenta l'unità nazionale; organo di garanzia eletto dal Parlamento in seduta comune integrato dai delegati regionali, con i due terzi nei primi tre scrutini e poi la maggioranza assoluta (art. 83 Cost.). Cittadino di almeno 50 anni, mandato di 7 anni (artt. 84-85). Promulga le leggi, emana decreti-legge, decreti legislativi e regolamenti, indice le elezioni, presiede il CSM, concede la grazia (art. 87). I suoi atti richiedono la controfirma dei ministri proponenti, che ne assumono la responsabilità (art. 89); risponde solo per alto tradimento e attentato alla Costituzione (art. 90).",
"schede": [
"PPP-8"
]
},
{
"id": "C26-3.09",
"riga": 3,
"n": 9,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": false,
"testo": "La formazione del Governo e il rapporto di fiducia.",
"sintesi": "Il Governo è formato dal Presidente del Consiglio e dai ministri, che insieme costituiscono il Consiglio dei ministri. Dopo le consultazioni (prassi), il Presidente della Repubblica nomina il Presidente del Consiglio e, su sua proposta, i ministri (art. 92 Cost.); giurano prima di assumere le funzioni (art. 93). Entro 10 giorni il Governo si presenta alle Camere per la fiducia, con mozione motivata votata per appello nominale; la sfiducia richiede una mozione firmata da almeno un decimo dei componenti, discussa non prima di 3 giorni; un voto contrario su una proposta del Governo non obbliga alle dimissioni (art. 94).",
"schede": [
"PPP-2"
]
},
{
"id": "C26-3.10",
"riga": 3,
"n": 10,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": true,
"testo": "Le fonti del diritto dell'Unione europea: regolamenti e direttive. Che effetto ha una direttiva non ancora recepita?",
"sintesi": "Fonti primarie sono i Trattati (TUE e TFUE) e la Carta dei diritti fondamentali; fonti derivate regolamenti, direttive e decisioni (art. 288 TFUE). Il regolamento è obbligatorio in tutti i suoi elementi e direttamente applicabile; la direttiva vincola lo Stato quanto al risultato e lascia la scelta di forma e mezzi. Il diritto UE prevale su quello interno incompatibile (artt. 11 e 117, c. 1, Cost.; C. cost. 170/1984). Le norme chiare, precise e incondizionate di una direttiva scaduta possono essere invocate contro lo Stato (efficacia diretta verticale) e lo Stato inadempiente risarcisce i danni (Francovich). Esempio: la dir. (UE) 2024/2831 sul lavoro mediante piattaforme, ancora da recepire.",
"schede": [
"PPP-X3"
]
},
{
"id": "C26-3.11",
"riga": 3,
"n": 11,
"m": "PPP",
"gruppo": "Pubblico e costituzionale",
"comm": "terzoni",
"star": false,
"testo": "Il procedimento amministrativo e il diritto di accesso (L. 241/1990): perché interessa il consulente del lavoro?",
"sintesi": "La L. 241/1990 regola come decide la pubblica amministrazione: economicità, efficacia, imparzialità, pubblicità e trasparenza (art. 1); ogni procedimento ha un responsabile e un termine certo e si chiude con un provvedimento espresso e motivato; gli interessati possono partecipare e accedere ai documenti. Per il consulente sono le regole che valgono nei rapporti con ITL, INPS e INAIL: richiesta di accesso agli atti ispettivi, memorie difensive, motivazione dei provvedimenti.",
"schede": [
"PPP-X2"
]
},
{
"id": "C26-3.12",
"riga": 3,
"n": 12,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": false,
"testo": "Capacità giuridica e capacità di agire; le incapacità.",
"sintesi": "La capacità giuridica è l'attitudine a essere titolari di diritti e doveri e si acquista con la nascita (art. 1 c.c.); la capacità di agire è l'idoneità a compiere da sé atti validi e si acquista a 18 anni (art. 2), salvo età diverse fissate dalla legge, come per il lavoro, dove conta l'età minima di accesso. Incapacità legale: interdizione (tutore, incapacità totale) e inabilitazione (curatore, solo ordinaria amministrazione); incapacità naturale (art. 428): l'atto compiuto da chi era incapace di intendere o di volere è annullabile. L'amministrazione di sostegno è la misura flessibile decisa dal giudice tutelare.",
"schede": [
"PPP-9"
]
},
{
"id": "C26-3.13",
"riga": 3,
"n": 13,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": true,
"testo": "Il contratto e i suoi elementi essenziali. Applicalo al contratto di lavoro.",
"sintesi": "Il contratto è l'accordo di due o più parti per costituire, regolare o estinguere un rapporto giuridico patrimoniale (art. 1321 c.c.); requisiti: accordo, causa, oggetto e forma quando è prescritta a pena di nullità (art. 1325). L'accordo nasce dall'incontro di proposta e accettazione, con buona fede nelle trattative; la causa è la funzione economico-sociale; l'oggetto deve essere possibile, lecito, determinato o determinabile; vale la libertà di forma, salvo forma ad substantiam o ad probationem. Il contratto ha forza di legge tra le parti (art. 1372). Nel lavoro: contratto di scambio tra prestazione e retribuzione; forma libera, ma la legge chiede l'atto scritto per esempio per il termine, il patto di prova e il part-time.",
"schede": [
"PPP-10",
"DL-2a"
]
},
{
"id": "C26-3.14",
"riga": 3,
"n": 14,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": false,
"testo": "Gli elementi accidentali del contratto: condizione, termine e modo.",
"sintesi": "Sono clausole che le parti possono aggiungere per incidere sull'efficacia del contratto. Condizione: avvenimento futuro e incerto da cui dipende l'efficacia (sospensiva) o la risoluzione (risolutiva) del contratto (art. 1353); la condizione sospensiva meramente potestativa rende nullo il contratto (art. 1355); avverata, retroagisce. Termine: avvenimento futuro e certo da cui dipende l'inizio o la fine degli effetti, come nel contratto di lavoro a tempo determinato. Modo o onere: solo negli atti a titolo gratuito, come donazione e testamento.",
"schede": [
"PPP-12"
]
},
{
"id": "C26-3.15",
"riga": 3,
"n": 15,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": true,
"testo": "Nullità e annullabilità del contratto. Che cosa succede se è nullo un contratto di lavoro già eseguito?",
"sintesi": "La nullità colpisce i vizi più gravi: contrasto con norme imperative, mancanza di un requisito, causa o motivo comune illecito, oggetto impossibile o illecito (art. 1418); il contratto non produce effetti, la fa valere chiunque vi abbia interesse, il giudice la rileva d'ufficio, l'azione è imprescrittibile e non c'è convalida. L'annullabilità protegge una parte (incapacità, errore, violenza, dolo): la chiede solo la parte protetta entro 5 anni e il contratto si può convalidare. Nel lavoro la nullità o l'annullamento non producono effetto per il periodo in cui il rapporto ha avuto esecuzione, salvo illiceità dell'oggetto o della causa (art. 2126 c.c.): il lavoratore conserva retribuzione e contributi.",
"schede": [
"PPP-13",
"DL-4a"
]
},
{
"id": "C26-3.16",
"riga": 3,
"n": 16,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": true,
"testo": "L'obbligazione: fonti, adempimento e inadempimento.",
"sintesi": "L'obbligazione è il rapporto per cui il debitore deve al creditore una prestazione suscettibile di valutazione economica (art. 1174 c.c.). Fonti: contratto, fatto illecito e ogni altro atto o fatto idoneo (art. 1173). Si adempie con la diligenza del buon padre di famiglia (art. 1176), secondo correttezza e buona fede (art. 1175). L'obbligazione si estingue con l'adempimento o con altri modi (compensazione, confusione, novazione, remissione, impossibilità sopravvenuta non imputabile). Il debitore inadempiente risarcisce il danno, danno emergente e lucro cessante, se non prova che l'inadempimento dipende da causa a lui non imputabile (art. 1218). Il debitore risponde con tutti i suoi beni (art. 2740).",
"schede": [
"PPP-14"
]
},
{
"id": "C26-3.17",
"riga": 3,
"n": 17,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": false,
"testo": "Rescissione e risoluzione del contratto.",
"sintesi": "La rescissione tutela chi ha concluso un contratto a condizioni inique per stato di pericolo (art. 1447) o per lesione oltre la metà, con stato di bisogno e approfittamento (art. 1448); l'azione si prescrive in un anno. La risoluzione scioglie un contratto valido per fatti sopravvenuti: inadempimento non di scarsa importanza, con scelta della parte fedele tra adempimento e risoluzione più il risarcimento (art. 1453); impossibilità sopravvenuta (art. 1463); eccessiva onerosità per eventi straordinari e imprevedibili, evitabile con un'offerta di modifica equa. Rimedi di autotutela: eccezione di inadempimento (art. 1460).",
"schede": [
"PPP-16"
]
},
{
"id": "C26-3.18",
"riga": 3,
"n": 18,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": true,
"testo": "La nozione di imprenditore e le sue categorie.",
"sintesi": "È imprenditore chi esercita professionalmente un'attività economica organizzata al fine della produzione o dello scambio di beni o di servizi (art. 2082 c.c.): economicità, organizzazione, professionalità. Per oggetto si distingue l'imprenditore agricolo (art. 2135) da quello commerciale (art. 2195), soggetto a registro delle imprese, scritture contabili e procedure concorsuali; per dimensione il piccolo imprenditore (art. 2083), con prevalenza del lavoro proprio e dei familiari. L'imprenditore in forma societaria o collettiva deve istituire assetti organizzativi, amministrativi e contabili adeguati, anche per rilevare tempestivamente la crisi (art. 2086).",
"schede": [
"PPP-17"
]
},
{
"id": "C26-3.19",
"riga": 3,
"n": 19,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": false,
"testo": "Impresa, azienda e società.",
"sintesi": "L'impresa è l'attività, l'azienda è il complesso dei beni organizzati per esercitarla (art. 2555 c.c.). La società è il contratto con cui due o più persone conferiscono beni o servizi per l'esercizio in comune di un'attività economica allo scopo di dividerne gli utili (art. 2247); le cooperative hanno scopo mutualistico. Nelle società di persone (semplice, s.n.c., s.a.s.) l'autonomia patrimoniale è imperfetta e i soci rispondono illimitatamente, salvo gli accomandanti; le società di capitali (s.p.a., s.r.l., s.a.p.a.) hanno personalità giuridica e autonomia patrimoniale perfetta. Nel trasferimento d'azienda l'acquirente subentra nei contratti non personali (art. 2558) e, per i lavoratori, vale l'art. 2112.",
"schede": [
"PPP-18",
"DL-X15"
]
},
{
"id": "C26-3.20",
"riga": 3,
"n": 20,
"m": "PPP",
"gruppo": "Privato",
"comm": "terzoni",
"star": false,
"testo": "Persona fisica e persona giuridica.",
"sintesi": "Sono soggetti di diritto la persona fisica, cioè ogni individuo dotato di capacità giuridica, e la persona giuridica, cioè un complesso organizzato di persone e beni con uno scopo lecito al quale l'ordinamento riconosce la personalità. Il tratto chiave della persona giuridica è l'autonomia patrimoniale perfetta: per le obbligazioni dell'ente risponde solo il suo patrimonio. È il caso delle società di capitali, che nel rapporto di lavoro sono il datore e il sostituto d'imposta.",
"schede": [
"S22-PPP-1"
]
},
{
"id": "C26-3.21",
"riga": 3,
"n": 21,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": true,
"testo": "Il principio di legalità penale.",
"sintesi": "Nessuno può essere punito se non in forza di una legge entrata in vigore prima del fatto commesso (art. 25, c. 2, Cost.) e per un fatto espressamente previsto come reato, con le pene da essa stabilite (art. 1 c.p.). Corollari: riserva di legge (solo la legge o un atto con forza di legge creano reati e pene), tassatività e determinatezza della fattispecie, divieto di analogia in materia penale e irretroattività della norma sfavorevole.",
"schede": [
"PPP-19"
]
},
{
"id": "C26-3.22",
"riga": 3,
"n": 22,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": false,
"testo": "L'irretroattività della legge penale e la successione di leggi nel tempo.",
"sintesi": "Nessuno può essere punito per un fatto che, quando è stato commesso, non era reato (art. 25 Cost.; art. 2, c. 1, c.p.). Retroagisce invece la legge più favorevole: se il fatto non è più reato cessano esecuzione ed effetti penali della condanna, anche definitiva (abolitio criminis, c. 2); se cambia solo la pena si applica la legge più favorevole, salvo sentenza irrevocabile (c. 4). Esempio nel lavoro: le depenalizzazioni del D.Lgs. 8/2016, che hanno trasformato in illeciti amministrativi molte contravvenzioni, come l'omesso versamento di ritenute previdenziali fino a 10.000 euro annui; quando poi il D.L. 48/2023 ha ridotto quella sanzione amministrativa, l'INPS ha ricalcolato in autotutela la sanzione più mite anche per i procedimenti pendenti (msg. INPS 1932/2023, riportato da fonte secondaria).",
"schede": [
"PPP-21",
"S22-PPP-28"
]
},
{
"id": "C26-3.23",
"riga": 3,
"n": 23,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": false,
"testo": "La personalità della responsabilità penale.",
"sintesi": "La responsabilità penale è personale (art. 27, c. 1, Cost.): si risponde solo di un fatto proprio e colpevole, mai per fatto altrui; la colpevolezza è fondamento e misura della pena (C. cost. 364/1988). L'imputato non è considerato colpevole fino alla condanna definitiva (c. 2); le pene devono tendere alla rieducazione (c. 3). Nel lavoro: la delega di funzioni in materia di sicurezza sposta la responsabilità sul delegato solo se effettiva, scritta e con poteri e mezzi adeguati, mentre restano al datore gli obblighi non delegabili.",
"schede": [
"PPP-20",
"DL-X17"
]
},
{
"id": "C26-3.24",
"riga": 3,
"n": 24,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": true,
"testo": "Dolo e colpa. Colpa generica e colpa specifica nella sicurezza sul lavoro.",
"sintesi": "Sono le forme dell'elemento psicologico (art. 43 c.p.). Dolo: l'evento è previsto e voluto come conseguenza della propria azione od omissione. Colpa: l'evento non è voluto e si verifica per negligenza, imprudenza o imperizia (colpa generica) o per inosservanza di leggi, regolamenti, ordini o discipline (colpa specifica). Preterintenzione: evento più grave di quello voluto. I delitti sono punibili di regola solo per dolo; le contravvenzioni per dolo o colpa (art. 42). Nell'infortunio sul lavoro la colpa del datore è di regola specifica, per violazione del D.Lgs. 81/2008.",
"schede": [
"PPP-22",
"S22-PPP-27"
]
},
{
"id": "C26-3.25",
"riga": 3,
"n": 25,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": true,
"testo": "Delitti e contravvenzioni. Come si estinguono le contravvenzioni in materia di lavoro?",
"sintesi": "I reati si distinguono secondo la specie della pena (art. 39 c.p.): i delitti sono puniti con ergastolo, reclusione e multa; le contravvenzioni con arresto e ammenda (art. 17). Le contravvenzioni di lavoro e sicurezza punite con ammenda o con pena alternativa si estinguono con la prescrizione obbligatoria: l'organo di vigilanza impone la regolarizzazione e, se il contravventore adempie, paga un quarto del massimo dell'ammenda (artt. 20-24 D.Lgs. 758/1994). Fuori da quel percorso c'è l'oblazione: un terzo del massimo per le contravvenzioni con sola ammenda (art. 162 c.p.), metà per quelle con pena alternativa (art. 162-bis).",
"schede": [
"PPP-23",
"S22-PPP-29"
]
},
{
"id": "C26-3.26",
"riga": 3,
"n": 26,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": true,
"testo": "Omicidio colposo e lesioni colpose per violazione delle norme di sicurezza sul lavoro.",
"sintesi": "Sono i delitti tipici dell'infortunio sul lavoro: la violazione delle norme antinfortunistiche è un'aggravante. Omicidio colposo: da due a sette anni (art. 589, c. 2, c.p.); lesioni gravi e gravissime con violazione delle norme di sicurezza: procedibili d'ufficio (art. 590, c. 3). La colpa è di regola specifica e il datore risponde anche per omissione, perché ha l'obbligo giuridico di impedire l'evento (art. 40, c. 2, c.p.; art. 2087 c.c.). Sono reati presupposto della responsabilità dell'ente (D.Lgs. 231/2001), salvo modello organizzativo efficace; seguono il regresso INAIL e il danno differenziale.",
"schede": [
"S22-PPP-27"
]
},
{
"id": "C26-3.27",
"riga": 3,
"n": 27,
"m": "PPP",
"gruppo": "Penale",
"comm": "terzoni",
"star": false,
"testo": "Il reato di omesso versamento delle ritenute previdenziali.",
"sintesi": "Il datore che trattiene le ritenute previdenziali e assistenziali dalla retribuzione e non le versa all'INPS commette reato se l'importo omesso supera 10.000 euro annui (art. 2, c. 1-bis, D.L. 463/1983): reclusione fino a 3 anni e multa fino a 1.032 euro. Sotto la soglia è un illecito amministrativo (depenalizzazione del D.Lgs. 8/2016): la sanzione, in origine da 10.000 a 50.000 euro, dal 5/5/2023 va da una volta e mezza a quattro volte l'importo omesso (art. 23 D.L. 48/2023, conv. L. 85/2023). Non è punibile chi versa entro 3 mesi dalla contestazione o notifica dell'accertamento.",
"schede": [
"S22-PPP-28",
"INPS-18"
]
},
{
"id": "C26-3.28",
"riga": 3,
"n": 28,
"m": "PPP",
"gruppo": "Parità di genere",
"comm": "terzoni",
"star": true,
"testo": "La parità tra uomo e donna nel lavoro: art. 37 Cost. e Codice delle pari opportunità.",
"sintesi": "L'art. 37 Cost. riconosce alla donna lavoratrice gli stessi diritti e, a parità di lavoro, le stesse retribuzioni del lavoratore, e condizioni di lavoro che le consentano l'adempimento della funzione familiare. Il D.Lgs. 198/2006 definisce la discriminazione diretta (trattamento meno favorevole in ragione del sesso) e indiretta (criteri apparentemente neutri che svantaggiano un sesso), comprese quelle legate a cura, gravidanza, maternità e paternità (art. 25). Vieta le discriminazioni nell'accesso, nella retribuzione per lavoro uguale o di pari valore, nelle mansioni e nella carriera (artt. 27-29); è nullo il licenziamento per causa di matrimonio (art. 35).",
"schede": [
"PPP-X1"
]
},
{
"id": "C26-3.29",
"riga": 3,
"n": 29,
"m": "PPP",
"gruppo": "Parità di genere",
"comm": "terzoni",
"star": true,
"testo": "Molestie sul lavoro e tutela di chi le denuncia.",
"sintesi": "Molestie e molestie sessuali sono considerate discriminazioni (art. 26 D.Lgs. 198/2006): gli atti conseguenti sono nulli. Chi denuncia non può essere sanzionato, demansionato, licenziato o trasferito per la denuncia, e il licenziamento ritorsivo è nullo (c. 3-bis). Tutela: conciliazione e ricorso anche tramite la consigliera di parità; procedura d'urgenza con decreto immediatamente esecutivo (art. 38); onere della prova alleggerito: se il ricorrente porta elementi di fatto, anche statistici, tocca al datore provare l'assenza di discriminazione (art. 40). Sul piano della sicurezza, il datore deve valutare tutti i rischi, compresi lo stress lavoro-correlato e quelli connessi alle differenze di genere (art. 28 D.Lgs. 81/2008).",
"schede": [
"PPP-X1",
"DL-23b"
]
},
{
"id": "C26-3.30",
"riga": 3,
"n": 30,
"m": "PPP",
"gruppo": "Parità di genere",
"comm": "terzoni",
"star": false,
"testo": "Gli strumenti di promozione della parità: rapporto biennale, certificazione e trasparenza retributiva.",
"sintesi": "Le aziende con oltre 50 dipendenti redigono ogni due anni il rapporto sulla situazione del personale maschile e femminile, con sanzione se mendace o incompleto (art. 46 D.Lgs. 198/2006). Dal 2022 esiste la certificazione della parità di genere (art. 46-bis), che dà diritto a un esonero contributivo fino all'1% e 50.000 euro annui. Il D.Lgs. 96/2026 aggiunge la trasparenza retributiva: avvisi con la retribuzione, diritto a conoscere i livelli medi per sesso, dati sul divario da 100 dipendenti e valutazione congiunta se il divario è almeno del 5%. Il D.Lgs. 91/2026 istituisce l'Organismo per la parità, operativo dal 2027.",
"schede": [
"PPP-X1",
"DL-X4",
"INPS-X3"
]
},
{
"id": "C26-3.31",
"riga": 3,
"n": 31,
"m": "PPP",
"gruppo": "Parità di genere",
"comm": "terzoni",
"star": false,
"testo": "La tutela della lavoratrice madre: congedo di maternità, divieto di licenziamento e convalida delle dimissioni.",
"sintesi": "Il congedo di maternità obbliga all'astensione nei due mesi prima della data presunta del parto e nei tre mesi dopo (art. 16 D.Lgs. 151/2001), con flessibilità (un mese prima e quattro dopo, o tutto dopo il parto con attestazioni mediche) e indennità INPS dell'80%, anticipata dal datore. Adibire la lavoratrice al lavoro durante il congedo è reato. È vietato licenziarla dall'inizio della gravidanza fino a un anno del bambino, a pena di nullità (art. 54); dimissioni e risoluzioni consensuali nei primi tre anni del bambino sono efficaci solo dopo la convalida dell'ITL (art. 55, c. 4). È la traduzione legislativa degli artt. 31 e 37 Cost.",
"schede": [
"DL-5b"
]
},
{
"id": "C26-4.01",
"riga": 4,
"n": 1,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "diiulio",
"star": true,
"testo": "Il reddito di lavoro dipendente: presupposto e principio di onnicomprensività.",
"sintesi": "È reddito di lavoro dipendente quello che deriva da un rapporto di lavoro alle dipendenze e sotto la direzione di altri, comprese le pensioni (art. 49 TUIR). Per l'art. 51, c. 1, concorrono tutte le somme e i valori percepiti a qualunque titolo nel periodo d'imposta in relazione al rapporto, anche come erogazioni liberali (onnicomprensività), con il criterio di cassa allargata: le somme pagate entro il 12 gennaio si considerano percepite nell'anno precedente. Le eccezioni sono tassative (art. 51, c. 2-5): contributi obbligatori, fondi sanitari entro soglia, mensa e buoni pasto, welfare per la generalità, fringe benefit entro soglia, trasferte. Le indennità sostitutive, come malattia e cassa integrazione, sono della stessa categoria (art. 6, c. 2).",
"schede": [
"TRIB-1"
]
},
{
"id": "C26-4.02",
"riga": 4,
"n": 2,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "morganti",
"star": true,
"testo": "Il sostituto d'imposta: chi è, quali soggetti e quali obblighi.",
"sintesi": "È chi per legge è obbligato al pagamento di imposte in luogo di altri, per fatti o situazioni a questi riferibili, anche a titolo d'acconto, e deve esercitare la rivalsa (art. 64 D.P.R. 600/1973). Sono sostituti i soggetti dell'art. 23 D.P.R. 600/1973 (società ed enti, imprenditori, professionisti, condomini) quando corrispondono redditi di lavoro dipendente. Obblighi: ritenuta d'acconto mensile e versamento con F24 entro il 16 del mese successivo; conguaglio entro il 28 febbraio o alla cessazione; CU al lavoratore e all'Agenzia entro il 16 marzo; modello 770 entro il 31 ottobre; esecuzione dei 730-4. Sanzioni: omesso versamento 25%, omessa ritenuta 20%; reato oltre 150.000 euro di ritenute certificate non versate (art. 10-bis D.Lgs. 74/2000).",
"schede": [
"TRIB-X1"
]
},
{
"id": "C26-4.03",
"riga": 4,
"n": 3,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "bucchini",
"star": true,
"testo": "Il conguaglio fiscale di fine anno e quello alla cessazione del rapporto.",
"sintesi": "È il ricalcolo, da parte del sostituto, dell'imposta dovuta sull'intero reddito corrisposto nell'anno, confrontata con le ritenute già operate, entro il 28 febbraio dell'anno successivo o alla cessazione del rapporto (art. 23, c. 3, D.P.R. 600/1973). Si ricalcolano imposta lorda, detrazioni per lavoro e per familiari sui giorni effettivi, ulteriore detrazione e trattamento integrativo; se il lavoratore consegna la CU di altri rapporti entro il 12 gennaio si tiene conto anche di quei redditi (c. 4). Benefici non spettanti recuperati a rate se superano 60 euro. Si determinano le addizionali (regionale e saldo comunale in massimo 11 rate dell'anno dopo, acconto comunale del 30% da marzo). Gli esiti confluiscono nella CU.",
"schede": [
"TRIB-11"
]
},
{
"id": "C26-4.04",
"riga": 4,
"n": 4,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "diiulio",
"star": true,
"testo": "La Certificazione Unica e il modello 770.",
"sintesi": "La CU è il documento con cui il sostituto certifica al percipiente i redditi corrisposti, le ritenute operate, le detrazioni e i contributi, e la trasmette telematicamente all'Agenzia delle Entrate entro il 16 marzo, che la usa anche per la precompilata. Il 770 è la dichiarazione annuale dei sostituti d'imposta: riepiloga ritenute operate, versamenti con F24 e compensazioni e i dati non già trasmessi con la CU; si presenta telematicamente entro il 31 ottobre (art. 4 D.P.R. 322/1998). Serve all'incrocio tra ritenute certificate, dichiarate e versate. Sanzioni: per ogni CU omessa, tardiva o errata 100 euro; per il 770 omesso 120% delle ritenute non versate, minimo 250 euro.",
"schede": [
"TRIB-15",
"TRIB-X1"
]
},
{
"id": "C26-4.05",
"riga": 4,
"n": 5,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "morganti",
"star": true,
"testo": "Le detrazioni per lavoro dipendente, l'ulteriore detrazione e il trattamento integrativo.",
"sintesi": "La detrazione per lavoro dipendente (art. 13 TUIR) riduce l'imposta lorda in misura decrescente al crescere del reddito complessivo e si rapporta ai giorni di lavoro: 1.955 euro fino a 15.000 (minimo 690, 1.380 per i contratti a termine), poi formule decrescenti fino a zero a 50.000; maggiorazione di 65 euro tra 25.000 e 35.000. Dal 2025 il cuneo fiscale si traduce in una somma esente sotto 20.000 euro e in un'ulteriore detrazione di 1.000 euro tra 20.000 e 32.000, decrescente fino a 40.000 (L. 207/2024). Il trattamento integrativo fino a 1.200 euro spetta ai redditi fino a 15.000 euro se c'è capienza (D.L. 3/2020).",
"schede": [
"TRIB-10"
]
},
{
"id": "C26-4.06",
"riga": 4,
"n": 6,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "bucchini",
"star": false,
"testo": "Le detrazioni per carichi di famiglia.",
"sintesi": "Spettano (art. 12 TUIR) per il coniuge (800 euro decrescenti; 690 tra 15.000 e 40.000; zero a 80.000), per i figli dai 21 ai 29 anni e per quelli disabili dai 30 (950 euro decrescenti fino a 95.000, di regola al 50% tra i genitori), e dal 2025 solo per gli ascendenti conviventi tra gli altri familiari. Per i figli sotto i 21 anni c'è l'assegno unico. Il familiare è a carico se ha un reddito non superiore a 2.840,51 euro, 4.000 per i figli fino a 24 anni. In busta paga il lavoratore le chiede al sostituto con una dichiarazione.",
"schede": [
"TRIB-4"
]
},
{
"id": "C26-4.07",
"riga": 4,
"n": 7,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "diiulio",
"star": false,
"testo": "Oneri deducibili e oneri detraibili: differenza e quali passano dal sostituto.",
"sintesi": "Gli oneri deducibili riducono il reddito complessivo prima del calcolo dell'IRPEF (art. 10 TUIR): contributi previdenziali obbligatori e volontari, previdenza complementare, contributi a fondi sanitari fino a 3.615,20 euro, assegni al coniuge separato. Gli oneri detraibili riducono l'imposta lorda, di regola del 19% della spesa (art. 15): interessi del mutuo per l'abitazione principale, spese sanitarie oltre 129,11 euro, istruzione, sport dei figli; dal 2020 serve il pagamento tracciabile, salvo eccezioni. La deduzione vale di più per chi ha l'aliquota marginale più alta. In busta paga il sostituto riconosce solo gli oneri che passano da lui (fondo pensione, fondo sanitario contrattuale); gli altri si fanno valere con il 730.",
"schede": [
"TRIB-3"
]
},
{
"id": "C26-4.08",
"riga": 4,
"n": 8,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "morganti",
"star": true,
"testo": "La trasferta: regime fiscale delle indennità e dei rimborsi.",
"sintesi": "Fuori dal comune della sede l'indennità forfettaria è esente fino a 46,48 euro al giorno in Italia e 77,47 all'estero, ridotti di un terzo se è rimborsato o fornito vitto o alloggio e di due terzi se lo sono entrambi. Il rimborso analitico a piè di lista non è reddito; dal 2025 vitto, alloggio, viaggio e taxi in Italia si rimborsano esenti solo se pagati con mezzi tracciabili; altre spese non documentabili fino a 15,49 euro al giorno (25,82 all'estero). Nel comune della sede indennità e rimborsi sono imponibili, salvo il trasporto documentato (art. 51, c. 5, TUIR). Diverso il trasfertismo (c. 6), imponibile al 50%.",
"schede": [
"TRIB-7"
]
},
{
"id": "C26-4.09",
"riga": 4,
"n": 9,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "bucchini",
"star": true,
"testo": "I fringe benefit: valutazione, soglia di esenzione e auto aziendale.",
"sintesi": "Sono compensi in natura, beni e servizi dati al dipendente o ai familiari (art. 51, c. 3, TUIR), valutati al valore normale, salvo i valori convenzionali per auto, prestiti e fabbricati (c. 4). Soglia di esenzione ordinaria 258,23 euro annui; per il 2025-2027 1.000 euro, 2.000 con figli a carico (art. 1, c. 390-391, L. 207/2024), e nella soglia speciale rientrano anche le somme erogate o rimborsate per utenze domestiche (acqua, luce, gas), affitto o interessi del mutuo dell'abitazione principale: se si supera la soglia, è tassato tutto il valore. Auto in uso promiscuo concessa con contratti dal 2025: 50% del costo chilometrico ACI per 15.000 km, ridotto al 10% per le elettriche e al 20% per le ibride plug-in (art. 51, c. 4, lett. a), al netto di quanto trattenuto al dipendente. La base è la stessa anche ai fini contributivi.",
"schede": [
"S22-TRIB-17"
]
},
{
"id": "C26-4.10",
"riga": 4,
"n": 10,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "diiulio",
"star": false,
"testo": "Il welfare aziendale: perché non è tassato e a quali condizioni.",
"sintesi": "Sono opere, servizi e somme con finalità sociali offerti alla generalità o a categorie di dipendenti e ai familiari, volontariamente o in base a contratto, accordo o regolamento (art. 51, c. 2, lett. f, f-bis, f-ter, f-quater, TUIR): educazione, istruzione dei figli, assistenza a familiari anziani o non autosufficienti, ricreazione, sanità. Non concorrono al reddito e quindi neppure ai contributi. I premi di risultato dei contratti aziendali o territoriali possono essere convertiti in welfare esente invece di subire l'imposta sostitutiva (L. 208/2015), per redditi fino a 80.000 euro. Condizione chiave: offerta a categorie omogenee, non ad personam.",
"schede": [
"DL-11a"
]
},
{
"id": "C26-4.11",
"riga": 4,
"n": 11,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "morganti",
"star": true,
"testo": "Il TFR: formazione e tassazione separata.",
"sintesi": "Il TFR è una retribuzione differita (art. 2120 c.c.): ogni anno si accantona la retribuzione annua utile divisa per 13,5, meno lo 0,50% versato all'INPS, e il fondo si rivaluta dell'1,5% fisso più il 75% dell'aumento ISTAT; sulla rivalutazione c'è un'imposta sostitutiva del 17%. Alla cessazione il TFR è a tassazione separata (artt. 17 e 19 TUIR): si applica l'aliquota corrispondente al reddito di riferimento (TFR diviso gli anni di servizio, moltiplicato per 12), poi l'Agenzia riliquida con l'aliquota media degli ultimi 5 anni. Anticipazione dopo 8 anni, fino al 70%, per spese sanitarie, prima casa, congedi.",
"schede": [
"S22-TRIB-14",
"RAG-23"
]
},
{
"id": "C26-4.12",
"riga": 4,
"n": 12,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "bucchini",
"star": false,
"testo": "Le addizionali regionale e comunale all'IRPEF.",
"sintesi": "Si applicano sulla stessa base imponibile dell'IRPEF e sono dovute solo se è dovuta l'IRPEF netta: regionale (art. 50 D.Lgs. 446/1997), con aliquota di base 1,23% maggiorabile dalla Regione e articolabile per scaglioni (nelle Marche 1,23%, 1,53%, 1,70%, 1,73%); comunale (D.Lgs. 360/1998) fino allo 0,8%, con eventuale soglia di esenzione. Ente: Regione e Comune del domicilio fiscale al 1° gennaio. Il sostituto calcola a conguaglio regionale e saldo comunale e li trattiene nell'anno successivo in massimo 11 rate; l'acconto comunale è il 30% e si trattiene da marzo in massimo 9 rate. Codici tributo 3802, 3847, 3848.",
"schede": [
"S22-TRIB-6"
]
},
{
"id": "C26-4.13",
"riga": 4,
"n": 13,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "diiulio",
"star": false,
"testo": "I redditi assimilati a quelli di lavoro dipendente. Un esempio: il compenso dell'amministratore.",
"sintesi": "Sono redditi di rapporti diversi dalla subordinazione ma tassati con le stesse regole (art. 50 TUIR): ritenute del sostituto, detrazioni, conguaglio. Tra i principali: co.co.co. e compensi di amministratori, sindaci e revisori, salvo che rientrino nell'attività professionale del contribuente (lett. c-bis); soci lavoratori di cooperative; borse di studio; indennità per cariche pubbliche; prestazioni della previdenza complementare. L'amministratore non professionista riceve un reddito assimilato, con contributi alla gestione separata per 2/3 a carico della società e 1/3 suo; per la società il compenso è deducibile nell'esercizio in cui è pagato (art. 95, c. 5, TUIR).",
"schede": [
"TRIB-12",
"RAG-17"
]
},
{
"id": "C26-4.14",
"riga": 4,
"n": 14,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "morganti",
"star": false,
"testo": "Il modello 730: chi può presentarlo e come.",
"sintesi": "È la dichiarazione semplificata dei lavoratori dipendenti, dei pensionati e di chi ha redditi assimilati; si presenta entro il 30 settembre al sostituto d'imposta che presta assistenza, a un CAF o a un professionista abilitato, oppure direttamente in precompilata. Con il sostituto, rimborso o trattenuta passano in busta paga dal mese successivo al ricevimento del 730-4; dal 2024 si può scegliere di ricevere il rimborso dall'Agenzia o di pagare con F24 (D.Lgs. 1/2024). Esclusi chi ha redditi d'impresa o di lavoro autonomo professionale abituale, che usa il modello Redditi (art. 13 D.M. 164/1999).",
"schede": [
"TRIB-2",
"S22-TRIB-10"
]
},
{
"id": "C26-4.15",
"riga": 4,
"n": 15,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "bucchini",
"star": true,
"testo": "Il ravvedimento operoso.",
"sintesi": "Consente di regolarizzare spontaneamente una violazione tributaria pagando insieme tributo, interessi al tasso legale e sanzione ridotta (art. 13 D.Lgs. 472/1997). La riduzione cresce con la tempestività: 1/10 del minimo entro 30 giorni, 1/9 entro 90 giorni, 1/8 entro il termine della dichiarazione dell'anno della violazione, 1/7 oltre, e così via. Per i tributi dell'Agenzia delle Entrate è precluso solo dalla notifica di atti di liquidazione o accertamento, comprese le comunicazioni degli esiti dei controlli automatici; non impedisce l'inizio dei controlli. Caso tipico del sostituto: ritenute versate in ritardo con F24.",
"schede": [
"TRIB-22"
]
},
{
"id": "C26-4.16",
"riga": 4,
"n": 16,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "diiulio",
"star": false,
"testo": "L'interpello del contribuente.",
"sintesi": "È l'istanza con cui il contribuente chiede all'Amministrazione finanziaria una risposta preventiva su un caso concreto e personale (art. 11 L. 212/2000, riformulato dal D.Lgs. 219/2023). Tipi: interpretativo (obiettiva incertezza), qualificatorio, antiabuso, disapplicativo, probatorio. Risposta scritta e motivata entro 90 giorni; se manca, la soluzione del contribuente si intende condivisa e gli atti difformi sono annullabili. La risposta vincola l'Amministrazione solo per quella questione e quel richiedente, non è impugnabile e l'istanza non sospende termini e scadenze. Diverso l'interpello in materia di lavoro al Ministero (art. 9 D.Lgs. 124/2004), che può presentare anche il Consiglio nazionale dei consulenti del lavoro.",
"schede": [
"TRIB-17"
]
},
{
"id": "C26-4.17",
"riga": 4,
"n": 17,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "morganti",
"star": false,
"testo": "Il regime forfettario: requisiti e determinazione del reddito.",
"sintesi": "È riservato alle persone fisiche che esercitano impresa, arti o professioni con ricavi o compensi dell'anno precedente fino a 85.000 euro e spese per lavoro dipendente e collaboratori fino a 20.000 euro (L. 190/2014, c. 54-89); si esce dall'anno dopo se si superano 85.000 euro, nello stesso anno oltre 100.000. Cause ostative: partecipazioni in società di persone o controllo di s.r.l. con attività riconducibili, attività prevalente verso l'ex datore di lavoro dei due anni precedenti, redditi di lavoro dipendente oltre la soglia di legge. Il reddito è pari ai ricavi incassati per il coefficiente di redditività, meno i contributi; imposta sostitutiva del 15%, 5% per i primi cinque anni. Niente IVA in fattura, niente ritenuta subita, niente IRAP.",
"schede": [
"TRIB-13"
]
},
{
"id": "C26-4.18",
"riga": 4,
"n": 18,
"m": "TRIB",
"gruppo": "Tributario",
"comm": "bucchini",
"star": false,
"testo": "L'IRAP e il costo del lavoro.",
"sintesi": "È l'imposta regionale sulle attività produttive (D.Lgs. 446/1997): colpisce il valore della produzione netta delle attività autonomamente organizzate di società, enti e amministrazioni pubbliche; dal 2022 non la pagano imprenditori individuali e professionisti persone fisiche, né i forfettari. Per le società di capitali la base è la differenza tra valore e costi della produzione senza dedurre costo del personale, accantonamenti e interessi; ma il costo dei dipendenti a tempo indeterminato è deducibile per intero (art. 11, c. 4-octies), mentre per i contratti a termine restano deduzioni specifiche. Aliquota ordinaria 3,9%, che le Regioni possono variare.",
"schede": [
"TRIB-18"
]
},
{
"id": "C26-4.19",
"riga": 4,
"n": 19,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "diiulio",
"star": true,
"testo": "La rilevazione contabile delle retribuzioni e dei contributi nel mese.",
"sintesi": "Retribuzione lorda: in dare Salari e stipendi (costo, B9 a del conto economico) e in avere Dipendenti c/retribuzioni. Contributi a carico dell'azienda: in dare Oneri sociali (B9 b) e in avere Istituti previdenziali. Pagamento: Dipendenti c/retribuzioni a diversi, cioè Istituti previdenziali per la quota del lavoratore, Erario c/ritenute per IRPEF e addizionali, eventuali acconti, Banca per il netto. Il 16 del mese successivo il versamento con F24 chiude i debiti verso Erario e istituti. A fine anno si aggiungono gli stanziamenti di competenza: quota TFR, ratei di mensilità aggiuntive e ferie.",
"schede": [
"S22-RAG-3",
"RAG-9",
"RAG-21"
]
},
{
"id": "C26-4.20",
"riga": 4,
"n": 20,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "morganti",
"star": true,
"testo": "Le voci del costo del personale nel conto economico e i debiti verso gli istituti nello stato patrimoniale.",
"sintesi": "Il costo del lavoro dipendente è la voce B9 del conto economico (art. 2425 c.c.): a) salari e stipendi, b) oneri sociali, c) trattamento di fine rapporto, d) trattamento di quiescenza e simili, e) altri costi. I contributi liquidati e non ancora pagati sono debiti verso istituti di previdenza e di sicurezza sociale (D 13 del passivo); le ritenute fiscali non versate sono debiti tributari (D 12); il fondo TFR rimasto in azienda è nella voce C del passivo. I compensi ad amministratori e sindaci non sono costo del personale ma costi per servizi (B7).",
"schede": [
"RAG-5",
"RAG-6",
"RAG-17"
]
},
{
"id": "C26-4.21",
"riga": 4,
"n": 21,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "bucchini",
"star": true,
"testo": "La quota annua di TFR e la movimentazione del fondo.",
"sintesi": "La quota annua è la retribuzione annua utile divisa per 13,5, meno lo 0,50% della retribuzione imponibile già versato all'INPS (art. 2120 c.c.; L. 297/1982); nei periodi di malattia, infortunio, maternità e cassa integrazione si computa la retribuzione che sarebbe spettata. Il fondo aumenta con la quota e con la rivalutazione al 31/12 (1,5% fisso più 75% dell'aumento ISTAT) e diminuisce con l'imposta sostitutiva del 17% sulla rivalutazione, le anticipazioni e le liquidazioni. Scrittura: Accantonamento TFR (B9 c) a Fondo TFR; le quote destinate a fondi pensione o al Fondo di Tesoreria INPS sono costo B9 c ma diventano un debito da versare, non incrementano il fondo.",
"schede": [
"RAG-23",
"RAG-22"
]
},
{
"id": "C26-4.22",
"riga": 4,
"n": 22,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "diiulio",
"star": false,
"testo": "La liquidazione del TFR alla cessazione del rapporto: le scritture.",
"sintesi": "Si calcola la quota dell'ultimo anno e la rivalutazione per la frazione d'anno, che vanno a costo (B9 c) e a incremento del fondo. Poi si giroconta l'intero importo: in dare Fondo TFR, in avere un debito verso il dipendente per la liquidazione. Il TFR è a tassazione separata: la ritenuta si accredita a Erario c/ritenute e si versa con F24, il netto si paga al lavoratore. Le anticipazioni già erogate si detraggono. Per le quote versate a un fondo pensione o al Fondo di Tesoreria INPS paga il fondo o l'INPS, non l'impresa.",
"schede": [
"RAG-7"
]
},
{
"id": "C26-4.23",
"riga": 4,
"n": 23,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "morganti",
"star": true,
"testo": "L'indennità di malattia anticipata per conto dell'INPS: come si rileva in bilancio?",
"sintesi": "Non è un costo dell'impresa ma un credito verso l'INPS: il datore la paga in busta paga per conto dell'Istituto e la recupera compensandola con i contributi dovuti nella denuncia mensile. Scrittura: in dare il credito verso l'INPS (o la diminuzione del debito verso gli istituti), in avere il debito verso il dipendente. È invece costo del personale (B9 a) la parte a carico del datore: carenza, integrazione del CCNL, malattia degli impiegati dell'industria. Sulla quota INPS non si versano contributi, perché il periodo è coperto da contribuzione figurativa; ai fini del TFR conta la retribuzione che sarebbe spettata.",
"schede": [
"RAG-1"
]
},
{
"id": "C26-4.24",
"riga": 4,
"n": 24,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "bucchini",
"star": false,
"testo": "L'indennità di maternità in contabilità.",
"sintesi": "L'indennità dell'80% a carico dell'INPS è anticipata dal datore in busta paga e recuperata a conguaglio con i contributi: in bilancio è un credito verso l'INPS, non un costo. L'eventuale integrazione fino al 100% prevista dal CCNL è invece costo del personale. Il periodo di congedo conta nell'anzianità, anche per tredicesima e ferie, e per il TFR si computa la retribuzione che sarebbe spettata.",
"schede": [
"RAG-2",
"DL-5b"
]
},
{
"id": "C26-4.25",
"riga": 4,
"n": 25,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "diiulio",
"star": true,
"testo": "Il premio INAIL: autoliquidazione e scritture di assestamento.",
"sintesi": "Il premio è a carico esclusivo del datore e si paga in autoliquidazione entro il 16 febbraio (o in quattro rate): rata anticipata dell'anno in corso più regolazione dell'anno precedente. Al versamento: Acconti INAIL (credito) a Banca. Al 31/12, determinato il premio effettivo, si rileva il costo di competenza in Oneri sociali INAIL (B9 b) contro Acconti INAIL e, per la differenza, un debito verso l'INAIL (D 13) o un credito. L'anno dopo il saldo a debito si versa con il nuovo acconto, quello a credito si scomputa. È la classica scrittura di assestamento per competenza.",
"schede": [
"S22-RAG-10"
]
},
{
"id": "C26-4.26",
"riga": 4,
"n": 26,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "morganti",
"star": false,
"testo": "I compensi ad amministratori e sindaci: classificazione e deducibilità.",
"sintesi": "Non sono costi del personale ma costi per servizi (B7 del conto economico), compresi i contributi alla gestione separata a carico della società. Per l'amministratore non professionista il compenso è reddito assimilato a quello di lavoro dipendente (art. 50, c. 1, lett. c-bis, TUIR), con le stesse ritenute; contributi alla gestione separata per 2/3 a carico della società e 1/3 dell'amministratore. Fiscalmente il compenso degli amministratori è deducibile nell'esercizio in cui è pagato (art. 95, c. 5, TUIR): quello di competenza non pagato si riprende in aumento. Sindaci e revisori professionisti emettono fattura e il costo segue la competenza.",
"schede": [
"RAG-17"
]
},
{
"id": "C26-4.27",
"riga": 4,
"n": 27,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "bucchini",
"star": true,
"testo": "Il bilancio d'esercizio: composizione e principi di redazione.",
"sintesi": "È costituito da stato patrimoniale (art. 2424 c.c.), conto economico (art. 2425), rendiconto finanziario (art. 2425-ter) e nota integrativa (art. 2427), e deve rappresentare in modo chiaro, veritiero e corretto la situazione patrimoniale e finanziaria e il risultato dell'esercizio (art. 2423). Principi (art. 2423-bis): prudenza, continuità aziendale, prevalenza della sostanza, competenza, valutazione separata, costanza dei criteri. Le società che non superano due dei limiti dell'art. 2435-bis (attivo 5.500.000 euro, ricavi 11.000.000, 50 dipendenti medi) possono redigerlo in forma abbreviata, senza rendiconto finanziario; più semplice ancora il bilancio delle micro-imprese (art. 2435-ter).",
"schede": [
"RAG-10",
"RAG-X2"
]
},
{
"id": "C26-4.28",
"riga": 4,
"n": 28,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "diiulio",
"star": false,
"testo": "Il principio di competenza; ratei e risconti, con un esempio sul personale.",
"sintesi": "Per il principio di competenza costi e ricavi si imputano all'esercizio a cui si riferiscono economicamente, a prescindere da incasso e pagamento (art. 2423-bis, c. 1, n. 3, c.c.). Ratei: quote maturate di costi o ricavi che si pagheranno o incasseranno dopo; risconti: quote di costi o ricavi già rilevati ma di competenza futura. Si calcolano in proporzione al tempo e vanno nella voce D dell'attivo ed E del passivo. Nel personale, a fine anno si stanziano i ratei di mensilità aggiuntive, ferie e permessi maturati e non goduti, con i relativi contributi, come costo dell'esercizio.",
"schede": [
"S22-RAG-7",
"RAG-19",
"S22-RAG-3"
]
},
{
"id": "C26-4.29",
"riga": 4,
"n": 29,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "morganti",
"star": false,
"testo": "Le immobilizzazioni e l'ammortamento.",
"sintesi": "Le immobilizzazioni sono beni destinati a un uso durevole, divisi in materiali, immateriali e finanziarie (voce B dell'attivo, art. 2424 c.c.). Si iscrivono al costo di acquisto o di produzione e, se hanno utilizzo limitato nel tempo, si ammortizzano: il costo si ripartisce sistematicamente tra gli esercizi della vita utile in base alla residua possibilità di utilizzazione (art. 2426 c.c.; OIC 16), a prescindere dai risultati economici. Scrittura: Ammortamento (costo, B10) a Fondo ammortamento; in bilancio il bene compare al netto del fondo. I costi pluriennali si iscrivono tra le immateriali e si ammortizzano allo stesso modo.",
"schede": [
"RAG-8",
"S22-RAG-5",
"RAG-4"
]
},
{
"id": "C26-4.30",
"riga": 4,
"n": 30,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "bucchini",
"star": true,
"testo": "La fattura: elementi essenziali e fattura elettronica. Pensa alla fattura del consulente del lavoro.",
"sintesi": "La fattura deve indicare (art. 21 D.P.R. 633/1972): data e numero progressivo, dati di fornitore e cliente con partita IVA o codice fiscale, natura, qualità e quantità dei servizi, corrispettivi e base imponibile, aliquota e imposta o, per le operazioni senza IVA, la norma di riferimento. Per i servizi si emette al pagamento del corrispettivo; la fattura immediata va trasmessa entro 12 giorni. Dal 2019 è elettronica: file XML trasmesso tramite SdI, che la considera emessa solo se l'accetta; dal 2024 l'obbligo vale anche per i forfettari. Nella fattura del consulente: compenso, contributo integrativo ENPACL del 4%, IVA sull'imponibile comprensivo del contributo, ritenuta d'acconto del 20% sul solo onorario se il cliente è sostituto d'imposta, bollo di 2 euro se gli importi senza IVA superano 77,47 euro (per esempio nel forfettario, che non applica né IVA né ritenuta).",
"schede": [
"RAG-12",
"RAG-20",
"DEO-X5",
"S22-TRIB-9"
]
},
{
"id": "C26-4.31",
"riga": 4,
"n": 31,
"m": "RAG",
"gruppo": "Ragioneria",
"comm": "diiulio",
"star": false,
"testo": "Contabilità ordinaria e semplificata; gli obblighi contabili dei professionisti.",
"sintesi": "La contabilità ordinaria (art. 14 D.P.R. 600/1973) è obbligatoria per le società di capitali e per le imprese oltre i limiti di ricavi; sotto i limiti imprese individuali e società di persone possono tenere la semplificata (art. 18). Chi esercita arti e professioni tiene scritture semplificate per cassa (art. 19), con facoltà di optare per l'ordinaria; i forfettari sono esonerati dalla tenuta delle scritture. Il reddito professionale si determina per cassa, quello d'impresa per competenza.",
"schede": [
"RAG-18",
"RAG-15",
"TRIB-9"
]
},
{
"id": "C26-5.01",
"riga": 5,
"n": 1,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": true,
"testo": "L'oggetto della professione di consulente del lavoro.",
"sintesi": "Il consulente svolge, per conto di qualsiasi datore di lavoro, tutti gli adempimenti previsti dalle norme vigenti per l'amministrazione del personale dipendente (art. 2 L. 12/1979): buste paga e LUL, comunicazioni obbligatorie, denunce contributive e fiscali, calcolo del costo del lavoro e del TFR; inoltre, su delega, ogni funzione affine, connessa e conseguente, e l'assistenza fiscale per chi non ha redditi d'impresa o di lavoro autonomo. Altri ambiti: certificazione dei contratti presso le commissioni dei Consigli provinciali, assistenza in conciliazione, consulenze tecniche d'ufficio, Asse.Co., funzioni nelle procedure della crisi d'impresa. Il titolo è riservato a chi è abilitato e iscritto all'albo.",
"schede": [
"DEO-1"
]
},
{
"id": "C26-5.02",
"riga": 5,
"n": 2,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "La riserva dell'art. 1 L. 12/1979: chi può curare gli adempimenti di lavoro per conto dei datori?",
"sintesi": "Se non li cura direttamente il datore, gli adempimenti in materia di lavoro, previdenza e assistenza dei dipendenti possono essere affidati solo ai consulenti del lavoro iscritti all'albo e ad avvocati, dottori commercialisti, ragionieri e periti commerciali, che devono darne comunicazione all'Ispettorato del lavoro (art. 1, c. 1). Le imprese artigiane e le piccole imprese possono affidarli ai servizi delle associazioni di categoria, organizzabili tramite consulenti del lavoro (c. 4). I CED possono svolgere solo calcolo e stampa e le attività strumentali, sempre assistiti da iscritti agli albi (c. 5). Chi esercita senza titolo commette il delitto di esercizio abusivo (art. 348 c.p.).",
"schede": [
"DEO-2"
]
},
{
"id": "C26-5.03",
"riga": 5,
"n": 3,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "L'esercizio abusivo della professione e i limiti dei centri elaborazione dati.",
"sintesi": "Esercita abusivamente chi svolge senza titolo gli adempimenti riservati dall'art. 1 L. 12/1979. I CED possono solo calcolare e stampare e svolgere attività accessorie, sempre assistiti da un professionista abilitato; restano riservate le attività valutative: scelta del CCNL e inquadramento, assunzioni e cessazioni, comunicazioni obbligatorie, tenuta del LUL, assistenza nelle ispezioni (nota INL n. 4304 del 12/5/2025, riportata da fonte secondaria). Sanzioni: delitto di esercizio abusivo (art. 348 c.p.) e, sul piano ispettivo, anche la disposizione (art. 14 D.Lgs. 124/2004). Sul piano deontologico il consulente non può accettare incarichi insieme a soggetti non abilitati, né favorirne l'attività (art. 12 Codice), e collabora con l'Ordine contro l'abusivismo.",
"schede": [
"DEO-X1"
]
},
{
"id": "C26-5.04",
"riga": 5,
"n": 4,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "Le incompatibilità con l'iscrizione all'albo.",
"sintesi": "L'iscrizione è incompatibile con alcuni rapporti e professioni indicati dall'art. 4 L. 12/1979: dipendenti di Stato, Regioni, Province, Comuni e altri enti pubblici; dipendenti di istituti di patronato o di associazioni sindacali dei lavoratori; esattori di tributi, notai, giornalisti professionisti. La conseguenza è la cancellazione dall'albo disposta dal Consiglio provinciale; cessata l'incompatibilità si può chiedere la reiscrizione. Il lavoro subordinato privato non è di per sé incompatibile: il consulente dipendente resta però soggetto al Codice deontologico (art. 36).",
"schede": [
"DEO-3",
"S22-DEO-15"
]
},
{
"id": "C26-5.05",
"riga": 5,
"n": 5,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "L'albo dei consulenti del lavoro e le condizioni per l'iscrizione.",
"sintesi": "L'albo è tenuto in ogni provincia dal Consiglio provinciale e l'iscritto può esercitare in tutto il territorio nazionale (art. 8 L. 12/1979); non si può essere iscritti contemporaneamente in più albi. Requisiti (art. 9): cittadinanza, abilitazione con l'esame di Stato, titolo di studio, buona condotta e godimento dei diritti civili, domicilio professionale; non si iscrive chi ha condanne che comportano la radiazione. Il Consiglio provinciale decide entro 2 mesi e il rigetto, pronunciato dopo aver sentito l'interessato, si impugna davanti al Consiglio nazionale entro 30 giorni. Gli albi territoriali formano l'albo unico nazionale (art. 3 D.P.R. 137/2012).",
"schede": [
"DEO-4"
]
},
{
"id": "C26-5.06",
"riga": 5,
"n": 6,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": false,
"testo": "Il tirocinio e l'esame di Stato per consulente del lavoro.",
"sintesi": "Servono un titolo di studio idoneo, un tirocinio di 18 mesi presso un consulente iscritto da almeno 5 anni (di regola non più di 3 praticanti), con iscrizione al registro dei praticanti e fascicolo formativo, il superamento dell'esame di Stato e l'iscrizione all'albo (L. 12/1979; art. 6 D.P.R. 137/2012; regolamento del Consiglio nazionale del 2015). Il certificato di compiuta pratica perde efficacia se entro 5 anni non si supera l'esame. L'esame 2026: due scritti di 7 ore, ammissione all'orale con almeno 6/10 in ciascuno e abilitazione con almeno 6/10 all'orale. Il dominus deve formare il praticante, anche sulla deontologia, e dopo sei mesi riconoscergli un rimborso spese (art. 22 Codice).",
"schede": [
"DEO-X4",
"DEO-17"
]
},
{
"id": "C26-5.07",
"riga": 5,
"n": 7,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": true,
"testo": "Il procedimento disciplinare e le sanzioni.",
"sintesi": "Il consulente che commette abusi o mancanze nell'esercizio della professione o fatti non conformi alla dignità e al decoro è sottoposto a procedimento disciplinare (art. 26 L. 12/1979), avviato d'ufficio, su richiesta del pubblico ministero o dell'interessato. Le pene sono la censura (biasimo formale), la sospensione fino a due anni (anche di diritto, per esempio per morosità oltre 12 mesi nei contributi) e la radiazione, con riammissione dopo almeno 6 anni. Si applica una sola sanzione proporzionata alla gravità e alla reiterazione (artt. 44-45 Codice).",
"schede": [
"DEO-6"
]
},
{
"id": "C26-5.08",
"riga": 5,
"n": 8,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "Chi esercita oggi la potestà disciplinare?",
"sintesi": "Non più il Consiglio provinciale, che l'aveva in origine (art. 14 L. 12/1979): dal D.P.R. 137/2012 la esercitano i Consigli di disciplina territoriali istituiti presso ogni Consiglio provinciale, con componenti nominati dal Presidente del Tribunale su un elenco proposto dal Consiglio, incompatibili con le cariche consiliari (art. 8). Decidono in collegi di tre. Il Consiglio provinciale segnala i fatti rilevanti. Contro la decisione: ricorso al Consiglio di disciplina nazionale entro 30 giorni e poi al Tribunale di Roma entro 60 giorni. È la separazione tra funzioni amministrative e disciplinari voluta dalla riforma delle professioni.",
"schede": [
"DEO-22"
]
},
{
"id": "C26-5.09",
"riga": 5,
"n": 9,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": true,
"testo": "La formazione continua obbligatoria.",
"sintesi": "È un obbligo giuridico e deontologico di tutti gli iscritti, anche se non esercitano o sono sospesi (art. 7 D.P.R. 137/2012; art. 9, c. 4, Codice): ogni professionista deve curare l'aggiornamento della propria competenza. Il regolamento del Consiglio nazionale (delibera n. 117 del 24/10/2024, in vigore dal 1/1/2025) fissa un periodo biennale con un numero minimo di crediti, anche deontologici, maturati con corsi, seminari, convegni e formazione a distanza; i crediti si riproporzionano per malattia, maternità o paternità. L'inadempiente è segnalato al Consiglio di disciplina: la violazione è illecito disciplinare.",
"schede": [
"DEO-23"
]
},
{
"id": "C26-5.10",
"riga": 5,
"n": 10,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "La società tra professionisti e il consulente del lavoro.",
"sintesi": "Il consulente può esercitare anche in forma societaria tramite una STP (art. 10, c. 3 ss., L. 183/2011; D.M. 34/2013): società di persone, di capitali o cooperativa con oggetto esclusivo l'attività professionale, anche multidisciplinare. I soci professionisti devono avere la maggioranza dei due terzi nelle decisioni; i soci non professionisti sono ammessi solo per prestazioni tecniche o investimento. L'incarico è eseguito solo dai soci abilitati e il cliente può scegliere il professionista. La STP si iscrive in una sezione speciale dell'albo ed è soggetta, con i soci, al Codice deontologico e al potere disciplinare dell'Ordine.",
"schede": [
"DEO-X6"
]
},
{
"id": "C26-5.11",
"riga": 5,
"n": 11,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "La previdenza del consulente del lavoro: l'ENPACL.",
"sintesi": "L'ENPACL è la cassa di previdenza obbligatoria degli iscritti all'albo, ente di diritto privato (D.Lgs. 509/1994). Si finanzia con il contributo soggettivo sul reddito professionale, con un minimo dovuto in ogni caso; il contributo integrativo del 4% su tutti i compensi, addebitato al cliente in fattura, soggetto a IVA ed escluso dalla ritenuta; il contributo di maternità in misura fissa. Le pensioni si calcolano con il sistema contributivo per le anzianità dal 2013. I periodi ENPACL si possono unire a quelli di altre gestioni con cumulo, totalizzazione o ricongiunzione.",
"schede": [
"DEO-X5"
]
},
{
"id": "C26-5.12",
"riga": 5,
"n": 12,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Gli obblighi antiriciclaggio del consulente del lavoro.",
"sintesi": "Il consulente del lavoro è tra i professionisti obbligati (art. 3, c. 4, lett. a, D.Lgs. 231/2007), anche in studio associato o STP. Deve: fare l'adeguata verifica del cliente e del titolare effettivo, semplificata o rafforzata secondo il rischio (artt. 17 ss.); conservare documenti e dati per 10 anni (artt. 31-32); segnalare senza ritardo all'UIF le operazioni sospette, anche tramite il Consiglio nazionale (art. 35); comunicare le violazioni dei limiti all'uso del contante di cui viene a conoscenza (art. 49: trasferimenti pari o superiori a 5.000 euro). Il Consiglio nazionale opera come organismo di autoregolamentazione.",
"schede": [
"DEO-X3"
]
},
{
"id": "C26-5.13",
"riga": 5,
"n": 13,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "L'asseverazione di conformità dei rapporti di lavoro (Asse.Co.).",
"sintesi": "È un sistema terzo e qualificato con cui un consulente accreditato attesta la regolarità retributiva (rispetto del CCNL applicato) e contributiva di un datore sui 12 mesi precedenti; il certificato vale 12 mesi se i requisiti permangono (protocollo Ministero del lavoro-Consiglio nazionale del 15/1/2014, rinnovato il 4/3/2016; regolamento del Consiglio nazionale in vigore dal 15/9/2025). L'asseveratore deve essere iscritto da almeno 24 mesi, formato e senza sanzioni disciplinari recenti; rilascia una dichiarazione di responsabilità e la mendacità è illecito disciplinare. Il TAR Lazio (sent. n. 12539 del 9/7/2026, riportata da fonte secondaria) ha respinto il ricorso dei commercialisti contro il diniego dell'estensione.",
"schede": [
"DEO-X2"
]
},
{
"id": "C26-5.14",
"riga": 5,
"n": 14,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": true,
"testo": "Il ruolo del consulente del lavoro durante un'ispezione.",
"sintesi": "Il consulente è l'interlocutore qualificato degli ispettori: assiste il datore all'accesso e nella redazione del verbale di primo accesso, nel quale si riportano anche le dichiarazioni di chi lo assiste; può tenere il LUL e la documentazione nel proprio studio, previa comunicazione all'ITL; valuta entro i termini la conciliazione o il ricorso contro diffida accertativa e disposizione e cura la regolarizzazione dopo la diffida o la prescrizione. Sul piano deontologico deve lealtà e correttezza anche verso le istituzioni (art. 5 Codice) e non può suggerire atti illeciti o fraudolenti al cliente (art. 24): il dovere di fedeltà al cliente trova qui il suo limite.",
"schede": [
"S22-DL-30",
"DEO-10"
]
},
{
"id": "C26-5.15",
"riga": 5,
"n": 15,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": false,
"testo": "La polizza di responsabilità civile professionale.",
"sintesi": "Il consulente deve stipulare una polizza per i danni causati al cliente nell'esercizio della professione, compresa la custodia di documenti e valori (art. 5 D.P.R. 137/2012; art. 11 Codice), e comunicarne estremi e massimale al cliente al momento dell'incarico. Esercitare senza copertura è illecito disciplinare. Gli estremi della polizza fanno parte del contenuto scritto dell'incarico (art. 27 Codice).",
"schede": [
"DEO-13",
"DEO-18"
]
},
{
"id": "C26-5.16",
"riga": 5,
"n": 16,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "Il DUI, documento unico di identificazione del consulente del lavoro.",
"sintesi": "È il tesserino professionale predisposto dal Consiglio nazionale e rilasciato dal Consiglio provinciale. Vale come documento di riconoscimento sul territorio nazionale (art. 1, lett. c, D.P.R. 445/2000), contiene la firma digitale per sottoscrivere i documenti informatici ed è associato a una casella PEC. Serve a identificare il consulente nei servizi telematici degli enti (INPS, INAIL, Ministero), dove opera su delega scritta dei datori di lavoro.",
"schede": [
"DEO-5"
]
},
{
"id": "C26-5.17",
"riga": 5,
"n": 17,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "Le finalità e i destinatari del Codice deontologico.",
"sintesi": "Il Codice (delibera del Consiglio nazionale n. 101 del 14/7/2021, modificata con delibera n. 49 del 21/3/2024) tutela la legalità e la dignità del lavoro e l'affidamento della collettività e dei clienti nella professione. Si applica ai consulenti del lavoro iscritti e alle società tra professionisti iscritte all'albo; i praticanti vi conformano la condotta per quanto compatibile (art. 2). Le sue regole valgono anche nell'attività svolta come dipendente o come amministratore di società di servizi.",
"schede": [
"DEO-7",
"DEO-8"
]
},
{
"id": "C26-5.18",
"riga": 5,
"n": 18,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": true,
"testo": "Dignità, decoro e professionalità specifica.",
"sintesi": "Il consulente deve osservare probità, dignità e decoro in ogni contesto, anche privato, per salvaguardare la propria reputazione e l'immagine della professione (art. 4 Codice). Professionalità specifica: risponde personalmente dei servizi resi e si avvale solo di propri dipendenti per i compiti esecutivi (art. 2 L. 12/1979); l'attività va resa sotto la propria direzione e responsabilità (art. 7, c. 3). Va esercitata indicando il titolo; usare titoli non conseguiti viola decoro, lealtà e corretta informazione.",
"schede": [
"DEO-9"
]
},
{
"id": "C26-5.19",
"riga": 5,
"n": 19,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": true,
"testo": "Lealtà, correttezza, fedeltà e indipendenza.",
"sintesi": "Sono doveri generali del Codice. Lealtà e correttezza verso il cliente, i terzi, i colleghi e le istituzioni (art. 5). Fedeltà: il consulente antepone gli interessi del cliente ai propri, nel rispetto della legge (art. 6). Indipendenza: autonomia di giudizio tecnico e difesa da condizionamenti esterni; diligenza e qualità della prestazione (art. 7). Limite della fedeltà: non si suggeriscono atti nulli, illeciti o fraudolenti e si rifiuta l'incarico che concorre a un'operazione illecita (art. 24). La trascuratezza intenzionale degli interessi del cliente è illecito disciplinare (art. 32).",
"schede": [
"DEO-10",
"S22-DEO-1"
]
},
{
"id": "C26-5.20",
"riga": 5,
"n": 20,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": true,
"testo": "Segreto professionale e riservatezza.",
"sintesi": "Il consulente è tenuto al segreto su tutti i dati e le informazioni forniti dal cliente o appresi per il mandato, anche dopo la fine dell'incarico (art. 6 L. 12/1979; art. 25 Codice), e deve vigilare perché lo mantengano dipendenti, soci e praticanti (art. 8 Codice). La rivelazione di segreto professionale è reato (art. 622 c.p.) e il consulente può astenersi dal testimoniare su quanto conosciuto per ragione della professione (art. 200 c.p.p.). Per la privacy è titolare del trattamento per i propri dati e responsabile quando tratta i dati dei dipendenti dei clienti su incarico.",
"schede": [
"DEO-11"
]
},
{
"id": "C26-5.21",
"riga": 5,
"n": 21,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": false,
"testo": "Competenza e informativa al cliente.",
"sintesi": "Il dovere di competenza vieta di accettare incarichi che non si sanno svolgere e impone organizzazione adeguata e aggiornamento costante (art. 9 Codice). Il dovere di informativa impone di spiegare al cliente per iscritto oggetto, natura, compensi e polizza (art. 27) e gli elementi essenziali dell'incarico con chiarezza (art. 30), con un preventivo delle voci di costo. Se la prestazione diventa troppo complessa, il consulente informa il cliente e chiede di essere sostituito o affiancato (art. 31).",
"schede": [
"DEO-12"
]
},
{
"id": "C26-5.22",
"riga": 5,
"n": 22,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": true,
"testo": "La pubblicità informativa, anche sui social network.",
"sintesi": "Il consulente può farsi pubblicità con ogni mezzo, compresi i social, purché informativa: su attività, specializzazioni, titoli, struttura dello studio e compensi; funzionale all'oggetto, veritiera e corretta, rispettosa del segreto, mai equivoca, ingannevole o denigratoria, sempre con titolo professionale e denominazione dello studio (art. 4 D.P.R. 137/2012; art. 35 Codice). È vietato aggirare le regole associando la propria immagine a società commerciali. La violazione è illecito disciplinare e insieme violazione del Codice del consumo e della disciplina sulla pubblicità ingannevole.",
"schede": [
"DEO-21",
"DEO-13"
]
},
{
"id": "C26-5.23",
"riga": 5,
"n": 23,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "La concorrenza sleale tra professionisti.",
"sintesi": "La concorrenza deve svolgersi secondo i principi dell'ordinamento integrati dal Codice; l'art. 14 elenca i comportamenti che possono costituire concorrenza sleale: diffondere notizie o giudizi che screditano un collega; compiere atti diretti solo a danneggiarne l'attività; usare segni distintivi che creano confusione con un altro studio; sottrarre i clienti del collega che si sta sostituendo; vantare parentele o influenze presso le istituzioni. Il compenso si concorda liberamente, senza tariffe minime, ma nei rapporti soggetti alla L. 49/2023 deve essere equo (art. 29 Codice).",
"schede": [
"DEO-15",
"DEO-18"
]
},
{
"id": "C26-5.24",
"riga": 5,
"n": 24,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": true,
"testo": "I rapporti con i colleghi e il subentro in un incarico.",
"sintesi": "Si basano su lealtà e correttezza (art. 5). Prima di un contenzioso con un collega si passa dal Consiglio provinciale; niente registrazioni né divulgazione di corrispondenza riservata (art. 13). Nel subentro il nuovo consulente comunica subito la nomina al collega sostituito (art. 17), non accetta incarichi della stessa natura senza informarlo e verifica che il cliente abbia receduto (art. 27, c. 3); il consulente sostituito collabora perché il cliente non subisca pregiudizio (art. 27, c. 4). Nella sostituzione del collega deceduto, sospeso o impedito serve particolare diligenza e la comunicazione al Consiglio provinciale (art. 16).",
"schede": [
"DEO-16",
"DEO-14"
]
},
{
"id": "C26-5.25",
"riga": 5,
"n": 25,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": false,
"testo": "I doveri verso praticanti, collaboratori e dipendenti dello studio.",
"sintesi": "Verso il praticante il consulente ha un dovere di addestramento teorico e pratico, comprese le regole deontologiche, e di partecipazione ai corsi per l'esame; il rapporto deve essere chiaro, opportunamente scritto, con un'attestazione veritiera della pratica; dopo i primi sei mesi è obbligatorio un rimborso spese forfettario (art. 22 Codice). Verso dipendenti e collaboratori: correttezza, idonee condizioni di lavoro, formazione ed equo compenso. Il consulente risponde anche della riservatezza mantenuta da tutti loro (art. 8).",
"schede": [
"DEO-17"
]
},
{
"id": "C26-5.26",
"riga": 5,
"n": 26,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": true,
"testo": "L'accettazione dell'incarico.",
"sintesi": "L'incarico si conferisce per iscritto con oggetto, natura, compensi ed estremi della polizza; l'incarico verbale va confermato per iscritto, anche per le modifiche (art. 27, c. 1-2, Codice). Prima di accettare il consulente identifica chi conferisce l'incarico e il titolare effettivo (c. 6); se il cliente è già assistito da un collega, lo informa e verifica il recesso (c. 3). Deve rifiutare l'incarico se l'attività può concorrere a un'operazione illecita (art. 24) o se c'è conflitto di interessi (art. 26), e accettarlo solo se ha la competenza (art. 9). Compenso libero ma equo nei rapporti soggetti alla L. 49/2023 (art. 29).",
"schede": [
"DEO-18"
]
},
{
"id": "C26-5.27",
"riga": 5,
"n": 27,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "diiulio",
"star": false,
"testo": "L'esecuzione dell'incarico.",
"sintesi": "Il consulente usa la diligenza e la perizia richieste dalle norme che regolano il rapporto professionale e informa il cliente con chiarezza sugli elementi essenziali (art. 30 Codice); rettifica errori, inesattezze od omissioni, a proprio carico se imputabili. Non consiglia azioni inutilmente gravose né atti nulli, illeciti o fraudolenti (art. 24); la trascuratezza intenzionale degli interessi del cliente è illecito disciplinare (art. 32). Può chiedere acconti proporzionati e deve consegnare, su richiesta, il rendiconto di spese e acconti (art. 34).",
"schede": [
"DEO-19"
]
},
{
"id": "C26-5.28",
"riga": 5,
"n": 28,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "morganti",
"star": true,
"testo": "La cessazione dell'incarico e la restituzione dei documenti del cliente.",
"sintesi": "Quando il cliente lo chiede, il consulente deve restituire senza indugio i documenti relativi all'incarico; può trattenerne solo una copia, anche senza consenso, per liquidare il compenso o tutelare la propria posizione (art. 33 Codice): non può trattenere gli originali per ottenere il pagamento. Se recede, avvisa tempestivamente e interrompe con un preavviso adeguato, senza pregiudizio per il cliente (art. 31, c. 3); collabora con il collega subentrante (art. 27, c. 4); il segreto continua dopo l'incarico. Prima di agire in giudizio contro il cliente rinuncia all'incarico (art. 31, c. 5).",
"schede": [
"DEO-20"
]
},
{
"id": "C26-5.29",
"riga": 5,
"n": 29,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Il consulente del lavoro che amministra una società di servizi o un CED.",
"sintesi": "L'art. 20 del Codice regola il consulente che partecipa a società commerciali o collabora con imprese che offrono servizi nell'amministrazione del personale (servizi delle associazioni di categoria e CED dell'art. 1, c. 4 e 5, L. 12/1979). Il consulente porta con sé il Codice anche dentro la società: risponde degli atti della società deontologicamente rilevanti, salvo funzioni attribuite in concreto ad altri; risponde se, conoscendo fatti rilevanti, non agisce per impedirli; deve assicurarsi che l'impresa comunichi il conferimento dell'incarico al Consiglio provinciale e all'Ispettorato. Non può associare la propria immagine alla società per aggirare le regole sulla pubblicità.",
"schede": [
"S22-DEO-14",
"DEO-21"
]
},
{
"id": "C26-5.30",
"riga": 5,
"n": 30,
"m": "DEO",
"gruppo": "Commissari CdL",
"comm": "bucchini",
"star": false,
"testo": "Il consulente del lavoro iscritto all'albo che lavora come dipendente.",
"sintesi": "Il rapporto di subordinazione non lo esonera dal Codice: se gli si chiede una condotta non conforme deve comunicare preventivamente e per iscritto il proprio dissenso al superiore gerarchico (art. 36, c. 1); è un'aggravante pretendere da colleghi subordinati comportamenti contrari al Codice (c. 2). Dignità e decoro valgono anche nel lavoro subordinato (art. 4). Limite esterno: l'iscrizione è incompatibile con il lavoro alle dipendenze di enti pubblici, patronati e sindacati dei lavoratori (art. 4 L. 12/1979).",
"schede": [
"S22-DEO-15"
]
},
{
"id": "C26-5.31",
"riga": 5,
"n": 31,
"m": "DEO",
"gruppo": "Area del Presidente",
"comm": "rausei",
"star": false,
"testo": "Commercialisti e consulenti del lavoro: chi può fare che cosa negli adempimenti di lavoro? Che cosa sta cambiando?",
"sintesi": "Per la norma vigente anche avvocati, dottori commercialisti, ragionieri e periti commerciali possono curare gli adempimenti di lavoro per conto dei datori, ma devono darne comunicazione all'Ispettorato (art. 1, c. 1, L. 12/1979); il titolo di consulente del lavoro e l'oggetto tipico della professione restano riservati agli iscritti al suo albo (artt. 1, c. 3, e 2). Restano propri del consulente, per esempio, le commissioni di certificazione presso i Consigli provinciali e l'Asse.Co. La riforma dell'ordinamento dei commercialisti, che inserisce l'area giuslavoristica tra le loro attività tipiche, e la riforma delle professioni sono norme in itinere, non vigenti: si citano come notizia, senza studiarle.",
"schede": [
"DEO-2",
"DEO-X2"
]
}
],
"buste": [
[
"C26-1.25",
"C26-2.22",
"C26-3.26",
"C26-4.28",
"C26-5.30"
],
[
"C26-1.31",
"C26-2.16",
"C26-3.09",
"C26-4.04",
"C26-5.09"
],
[
"C26-1.04",
"C26-2.07",
"C26-3.05",
"C26-4.17",
"C26-5.25"
],
[
"C26-1.07",
"C26-2.04",
"C26-3.30",
"C26-4.23",
"C26-5.23"
],
[
"C26-1.24",
"C26-2.24",
"C26-3.22",
"C26-4.08",
"C26-5.31"
],
[
"C26-1.18",
"C26-2.26",
"C26-3.27",
"C26-4.25",
"C26-5.29"
],
[
"C26-1.11",
"C26-2.02",
"C26-3.01",
"C26-4.31",
"C26-5.24"
],
[
"C26-1.17",
"C26-2.14",
"C26-3.18",
"C26-4.03",
"C26-5.22"
],
[
"C26-1.21",
"C26-2.05",
"C26-3.02",
"C26-4.14",
"C26-5.21"
],
[
"C26-1.19",
"C26-2.01",
"C26-3.08",
"C26-4.01",
"C26-5.06"
],
[
"C26-1.09",
"C26-2.25",
"C26-3.12",
"C26-4.20",
"C26-5.14"
],
[
"C26-1.10",
"C26-2.29",
"C26-3.15",
"C26-4.10",
"C26-5.05"
],
[
"C26-1.28",
"C26-2.30",
"C26-3.10",
"C26-4.27",
"C26-5.20"
],
[
"C26-1.12",
"C26-2.10",
"C26-3.19",
"C26-4.21",
"C26-5.04"
],
[
"C26-1.13",
"C26-2.13",
"C26-3.28",
"C26-4.19",
"C26-5.12"
],
[
"C26-1.03",
"C26-2.12",
"C26-3.03",
"C26-4.29",
"C26-5.08"
],
[
"C26-1.08",
"C26-2.23",
"C26-3.29",
"C26-4.30",
"C26-5.19"
],
[
"C26-1.14",
"C26-2.20",
"C26-3.31",
"C26-4.13",
"C26-5.28"
],
[
"C26-1.26",
"C26-2.19",
"C26-3.16",
"C26-4.09",
"C26-5.13"
],
[
"C26-1.30",
"C26-2.28",
"C26-3.23",
"C26-4.02",
"C26-5.16"
],
[
"C26-1.16",
"C26-2.08",
"C26-3.04",
"C26-4.11",
"C26-5.10"
],
[
"C26-1.15",
"C26-2.11",
"C26-3.06",
"C26-4.26",
"C26-5.26"
],
[
"C26-1.20",
"C26-2.18",
"C26-3.25",
"C26-4.15",
"C26-5.11"
],
[
"C26-1.05",
"C26-2.15",
"C26-3.11",
"C26-4.24",
"C26-5.01"
],
[
"C26-1.23",
"C26-2.06",
"C26-3.07",
"C26-4.05",
"C26-5.27"
],
[
"C26-1.29",
"C26-2.21",
"C26-3.14",
"C26-4.22",
"C26-5.15"
],
[
"C26-1.02",
"C26-2.27",
"C26-3.21",
"C26-4.06",
"C26-5.02"
],
[
"C26-1.01",
"C26-2.09",
"C26-3.17",
"C26-4.16",
"C26-5.07"
],
[
"C26-1.22",
"C26-2.17",
"C26-3.20",
"C26-4.12",
"C26-5.03"
],
[
"C26-1.06",
"C26-2.31",
"C26-3.24",
"C26-4.18",
"C26-5.17"
],
[
"C26-1.27",
"C26-2.03",
"C26-3.13",
"C26-4.07",
"C26-5.18"
]
]
};
