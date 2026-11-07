/* Mappe mentali per la prova orale — CdL Marche 2026.
   Le foglie sono le domande della banca dati (orale-dati.js): etichetta breve e norma di riferimento.
   Le norme sono prese dalle risposte modello; dove la risposta non indica una norma singola la foglia resta senza.
   Versione 1.1 del 7/11/2026: aggiunte due mappe per articolo su D.L. 62/2026 e D.Lgs. 96/2026 (da P1_Mappe_DL62_DLgs96, testi vigenti in libreria). */
(function(){
  var C = {DL:'#7c2b2b', INPS:'#1f4e8c', INAIL:'#1f4e8c', PPP:'#2f6b3f', TRIB:'#9a7a1e', RAG:'#9a7a1e', DEO:'#b05a12'};
  var MAPPE = [
    {id:'dl62', riga:'Riga 1 · rosso · priorità del Presidente', titolo:'D.L. 62/2026', sotto:'Salario giusto (conv. L. 112/2026)', colore:C.DL, schede:'scheda DL-X3',
     speciale:[
      ['Estremi e ambito', [
        ['D.L. 30/4/2026 n. 62, in vigore dal 1/5/2026','', 'conv. L. 25/6/2026 n. 112, in vigore dal 28/6/2026'],
        ['Solo lavoro subordinato privato; esclusa la PA','art. 18','salve le prerogative delle parti sociali (c. 4)'],
        ['Non introduce un salario minimo legale','art. 7, c. 1','contrattazione collettiva come misura dell\'art. 36 Cost.']]],
      ['Art. 7: il TEC', [
        ['TEC dei CCNL comparativamente più rappresentativi','art. 7, c. 2','settore · attività prevalente · dimensione · natura del datore'],
        ['Il TEC dei CCNL diversi «non può essere inferiore»','art. 7, c. 3','minimo per tutti o parametro? C. cost. 51/2015'],
        ['Settori senza contratto: CCNL leader più connesso','art. 7, c. 4',''],
        ['Che cosa entra nel TEC','art. 7, c. 4-bis','voci fisse e continuative · mensilità aggiuntive · indennità fisse · welfare per la generalità · esclusi i variabili individuali'],
        ['Benefici solo se il trattamento individuale ≥ TEC','art. 7, c. 5','«DURC retributivo» (Rausei) · art. 1, c. 1175, L. 296/2006'],
        ['Annunci sul SIISL con codice CCNL e retribuzione','art. 7, c. 6','da non confondere con l\'art. 5 D.Lgs. 96']]],
      ['Rinnovi e codice del CCNL', [
        ['CCNL non rinnovato entro 9 mesi: anticipazione del 50% IPCA-NEI','art. 10','stop al contributo di assistenza contrattuale dopo 12 mesi · CCNL già scaduti: dal 1/1/2027'],
        ['Codice alfanumerico unico del CCNL','art. 11','informativa (lett. q-bis D.Lgs. 152/1997, solo privati) · prospetto paga (art. 1 L. 4/1953) · monitoraggio e vigilanza'],
        ['Dati retributivi e Rapporto annuale del CNEL','artt. 8-9','CNEL · INPS · ISTAT · INAPP · INL']]],
      ['Art. 7-bis: prossimità', [
        ['Deposito di contratti e intese al MLPS e al CNEL','art. 8, c. 1-bis, D.L. 138/2011','senza deposito l\'intesa resta valida? questione aperta'],
        ['Fino a 15 dipendenti: intese peggiorative presso l\'ITL','art. 8, c. 2-ter','requisito di validità? computo dei 15?'],
        ['Informativa scritta ai lavoratori entro 3 giorni','art. 8, c. 2-quater',''],
        ['Limiti: deroga eccezionale; la retribuzione non è derogabile','C. cost. 221/2012 e 52/2023','']]],
      ['Altri capi del decreto', [
        ['Incentivi all\'occupazione','artt. 1-4 e 6','donne · giovani under 35 · ZES · stabilizzazione · esonero conciliazione'],
        ['Piattaforme digitali e rider','artt. 11-bis-15','capo V-bis D.Lgs. 81/2015 · riesame umano (art. 14)']]],
      ['Nodi aperti e vigilanza', [
        ['Sufficienza: il giudice controlla anche il CCNL leader','Cass. 27711/2023','l\'art. 7 richiama solo la proporzionalità'],
        ['Efficacia generale di fatto?','art. 39 Cost.','parametro esterno, non estensione erga omnes'],
        ['Confronto TEC e trattamento individuale: globale o voce per voce?','',''],
        ['Differenze sul TEC: diffida accertativa (pochi) o disposizione (molti)','artt. 12 e 14 D.Lgs. 124/2004','Cons. Stato 10382/2025 e 4969/2026 (riportate da Rausei)']]]
     ]},
    {id:'dl96', riga:'Riga 1 · rosso · priorità del Presidente', titolo:'D.Lgs. 96/2026', sotto:'Trasparenza retributiva (dir. UE 2023/970)', colore:C.DL, schede:'scheda DL-X4',
     speciale:[
      ['Estremi e ambito', [
        ['D.Lgs. 7/5/2026 n. 96, in vigore dal 7/6/2026','', 'attua la dir. (UE) 2023/970 · 17 articoli'],
        ['Pubblico e privato, anche dirigenti e part-time; art. 5 anche ai candidati','art. 2','esclusi domestico e intermittente'],
        ['Fondamento: parità retributiva per lavoro uguale o di pari valore','art. 37 Cost.; art. 157 TFUE','']]],
      ['Definizioni e pari valore', [
        ['Retribuzione in senso ampio (anche variabile e in natura)','art. 3, lett. a)',''],
        ['Livello retributivo: elementi fissi e continuativi','art. 3, lett. b)','somiglia al TEC del D.L. 62'],
        ['CCNL leader = presunzione relativa di conformità','art. 4','criteri: competenze · responsabilità · condizioni di lavoro']]],
      ['Prima dell\'assunzione', [
        ['Retribuzione iniziale o fascia e CCNL negli avvisi e nei bandi','art. 5','nessuna sanzione autonoma'],
        ['Vietato chiedere la retribuzione pregressa','art. 5','anche tramite selezionatori · linguaggio neutro']]],
      ['Durante il rapporto', [
        ['Criteri retributivi accessibili, di regola con l\'informativa','art. 6','sotto 50 dipendenti nessun obbligo sui criteri di progressione'],
        ['Diritto di conoscere i livelli medi per sesso della propria categoria','art. 7','risposta scritta entro 2 mesi · nulle le clausole di riservatezza']]],
      ['Dati e valutazione congiunta', [
        ['Dati sul divario retributivo da 100 dipendenti','art. 9','≥ 150 entro il 7/6/2027 · 100-149 entro il 7/6/2031'],
        ['Valutazione congiunta con i rappresentanti','art. 10','divario medio ≥ 5% · non giustificato · non corretto entro 6 mesi'],
        ['Dati usati solo per la parità retributiva','art. 11','Reg. UE 2016/679'],
        ['Organismo di monitoraggio presso il MLPS','art. 14','Organismo per la parità (D.Lgs. 91/2026) dal 1/1/2027']]],
      ['Tutele e sanzioni', [
        ['Tutela giudiziaria con onere della prova attenuato','art. 40 D.Lgs. 198/2006',''],
        ['Divieto di ritorsioni','art. 41-bis D.Lgs. 198/2006',''],
        ['Sanzione oggi amministrativa da 5.000 a 10.000 €','art. 41, c. 2, D.Lgs. 198/2006','il codice riporta ancora l\'ammenda: depenalizzata dal D.Lgs. 8/2016 · revoca dei benefici']]],
      ['Ponte con il D.L. 62', [
        ['CCNL leader: parametro nel 62, presunzione relativa nel 96','',''],
        ['62 solo privato; 96 pubblico e privato','',''],
        ['Ruolo del consulente: annunci, informative, mappa dei livelli per sesso, dati 2027','','']]]
     ]},
    {id:'dl1', riga:'Riga 1 · rosso', titolo:'Diritto del lavoro', sotto:'Nascita del rapporto', colore:C.DL,
     rami:[['DL','Qualificazione'],['DL','Contratti flessibili']]},
    {id:'dl2', riga:'Riga 1 · rosso', titolo:'Diritto del lavoro', sotto:'Svolgimento e tutele', colore:C.DL,
     rami:[['DL','Svolgimento e retribuzione'],['DL','Tutele specifiche'],['DL','Salute e sicurezza']]},
    {id:'dl3', riga:'Riga 1 · rosso', titolo:'Diritto del lavoro', sotto:'Fine del rapporto, sindacale, vigilanza e novità 2026', colore:C.DL,
     rami:[['DL','Cessazione del rapporto'],['DL','Rinunce e conciliazioni'],['DL','Diritto sindacale'],['DL','Vigilanza e illeciti'],['DL','Integrazione 2026']]},
    {id:'inps', riga:'Riga 2 · blu', titolo:'Legislazione sociale', sotto:'INPS', colore:C.INPS,
     rami:[['INPS','Contribuzione'],['INPS','Adempimenti'],['INPS','Prestazioni'],['INPS','Ammortizzatori e sostegno al reddito'],['INPS','Integrazione 2026']]},
    {id:'inail', riga:'Riga 2 · blu', titolo:'Legislazione sociale', sotto:'INAIL', colore:C.INAIL,
     rami:[['INAIL','Obbligo, premi e adempimenti'],['INAIL','Infortunio e malattia professionale'],['INAIL','Prestazioni e azioni']]},
    {id:'priv', dividi:true, riga:'Riga 3 · verde', titolo:'Diritto privato', sotto:'Persone, contratto, obbligazioni, impresa', colore:C.PPP,
     rami:[['PPP','Privato']]},
    {id:'pubb', dividi:true, riga:'Riga 3 · verde', titolo:'Diritto pubblico', sotto:'Costituzione, fonti, organi', colore:C.PPP,
     rami:[['PPP','Pubblico e costituzionale'],['PPP','Integrazione 2026']]},
    {id:'pen', dividi:true, riga:'Riga 3 · verde', titolo:'Diritto penale', sotto:'Principi, reato, reati del lavoro', colore:C.PPP,
     rami:[['PPP','Penale']]},
    {id:'trib', riga:'Riga 4 · giallo', titolo:'Diritto tributario', sotto:'IRPEF, lavoro dipendente, procedimento', colore:C.TRIB,
     rami:[['TRIB','Parte generale e procedimento'],['TRIB','Lavoro dipendente'],['TRIB','Società e impresa'],['TRIB','Integrazione 2026']]},
    {id:'rag', riga:'Riga 4 · giallo', titolo:'Ragioneria', sotto:'Costo del lavoro e bilancio', colore:C.RAG,
     rami:[['RAG','Costo del lavoro in contabilità'],['RAG','Contabilità e documenti'],['RAG','Bilancio']]},
    {id:'deo', riga:'Riga 5 · arancione', titolo:'Ordinamento e deontologia', sotto:'L. 12/1979 e Codice deontologico', colore:C.DEO,
     rami:[['DEO','Ordinamento'],['DEO','Codice deontologico'],['DEO','Integrazione 2026']]}
  ];

  /* Sottogruppi per spezzare i rami troppo lunghi (id → sottoramo). */
  var SOTTO = {
    'DL-8a':'Obblighi e poteri','DL-13a':'Obblighi e poteri','DL-15a':'Obblighi e poteri','S22-DL-21':'Sospensione del rapporto','S22-DL-22':'Sospensione del rapporto',
    'DL-14a':'Documenti e informazioni','DL-19b':'Documenti e informazioni','DL-20a':'Documenti e informazioni',
    'DL-14b':'Tempo di lavoro','DL-16a':'Tempo di lavoro','DL-17a':'Tempo di lavoro',
    'DL-18a':'Retribuzione','DL-18b':'Retribuzione','DL-11a':'Retribuzione',
    'PPP-9':'Persone','PPP-10':'Contratto','PPP-12':'Contratto','PPP-13':'Contratto','PPP-16':'Contratto','PPP-14':'Obbligazioni e beni','PPP-15':'Obbligazioni e beni','PPP-11':'Obbligazioni e beni','PPP-17':'Impresa e società','PPP-18':'Impresa e società',
    'S22-PPP-11':'Costituzione e principi','PPP-X1':'Costituzione e principi','PPP-1':'Fonti e procedimento legislativo','PPP-3':'Fonti e procedimento legislativo','PPP-4':'Fonti e procedimento legislativo','PPP-7':'Fonti e procedimento legislativo','PPP-5':'Fonti e procedimento legislativo',
    'S22-PPP-12':'Organi costituzionali','PPP-2':'Organi costituzionali','PPP-8':'Organi costituzionali','PPP-6':'Organi costituzionali','S22-PPP-20':'Organi costituzionali','S22-PPP-18':'Regioni, enti locali e PA','S22-PPP-19':'Regioni, enti locali e PA',
    'PPP-19':'Principi','PPP-20':'Principi','PPP-21':'Principi','PPP-22':'Il reato','PPP-23':'Il reato','S22-PPP-26':'Procedura ed estinzione','S22-PPP-29':'Procedura ed estinzione','S22-PPP-30':'Procedura ed estinzione','S22-PPP-27':'Reati del lavoro','S22-PPP-28':'Reati del lavoro',
    'TRIB-19':'Imposte e redditi','TRIB-14':'Imposte e redditi','S22-TRIB-3':'Imposte e redditi','TRIB-9':'Imposte e redditi','S22-TRIB-8':'Imposte e redditi','TRIB-8':'Imposte e redditi','TRIB-13':'Imposte e redditi','TRIB-18':'Imposte e redditi',
    'S22-TRIB-10':'Dichiarazione e versamenti','S22-TRIB-12':'Dichiarazione e versamenti','TRIB-22':'Dichiarazione e versamenti','TRIB-16':'Rapporti con il Fisco','TRIB-17':'Rapporti con il Fisco',
    'DEO-7':'Doveri generali','DEO-8':'Doveri generali','DEO-9':'Doveri generali','DEO-10':'Doveri generali','DEO-11':'Doveri generali','DEO-12':'Doveri generali','DEO-13':'Doveri generali',
    'DEO-14':'Rapporti esterni e interni','DEO-15':'Rapporti esterni e interni','DEO-16':'Rapporti esterni e interni','DEO-17':'Rapporti esterni e interni','S22-DEO-14':'Rapporti esterni e interni',
    'DEO-18':'Incarico','DEO-19':'Incarico','DEO-20':'Incarico','DEO-21':'Incarico','S22-DEO-15':'Incarico'
  };

  /* Etichette brevi (dove il testo della domanda è lungo). */
  var LAB = {
    'DL-1a':'Nozione di lavoro subordinato','DL-2a':'Requisiti del contratto di lavoro','DL-4a':'Prestazione di fatto','DL-4b':'Co.co.co.',
    'DL-5a':'Certificazione dei contratti','DL-6a':'Lavoro autonomo','DL-7a':'Autonomo occasionale','DL-19a':'Autonomo e subordinato a confronto',
    'DL-1b':'Contratto a termine','DL-2b':'Part-time','DL-3a':'Patto di prova','DL-3b':'Lavoro intermittente','DL-9a':'Distacco','DL-10a':'Somministrazione',
    'DL-21a':'Apprendistato professionalizzante','S22-DL-2':'Diritti di precedenza e incentivi','S22-DL-8':'Tirocinio','S22-DL-10':'PrestO e Libretto famiglia',
    'DL-8a':'Patto di non concorrenza','DL-13a':'Mansioni e ius variandi','DL-14a':'Informativa all\'assunzione','DL-14b':'Ferie','DL-15a':'Controlli a distanza',
    'DL-16a':'Orario di lavoro','DL-17a':'Straordinario e supplementare','DL-18a':'Retribuzione (art. 36 Cost.)','DL-18b':'Superminimo e voci aggiuntive',
    'DL-19b':'Prospetto paga e LUL','DL-20a':'Tracciabilità della retribuzione','DL-11a':'Welfare aziendale',
    'S22-DL-21':'Impossibilità del lavoratore','S22-DL-22':'Impossibilità del datore',
    'DL-5b':'Congedo di maternità','DL-6b':'Interdizione anticipata','DL-7b':'Congedo di paternità','DL-10b':'Collocamento dei disabili','DL-12a':'Lavoro dei minori',
    'S22-DL-6':'Lavoratori stranieri','DL-15b':'Mobbing','DL-17b':'Misure generali di tutela','DL-23b':'Valutazione dei rischi (DVR)',
    'S22-DL-23':'Dimissioni e risoluzione consensuale','S22-DL-25':'Licenziamento per GMO e art. 7 L. 604/1966',
    'DL-13b':'Rinunce e transazioni','DL-21b':'Conciliazioni in sede protetta','DL-9b':'Efficacia dei CCNL','DL-12b':'Contratti di prossimità','DL-16b':'Sciopero',
    'DL-8b':'Appalto illecito e fraudolento','DL-11b':'Caporalato e interposizione','DL-20b':'Lavoro sommerso','DL-22a':'Sospensione dell\'attività',
    'DL-22b':'Conciliazione monocratica','DL-23a':'Patente a crediti','DL-X7':'Diffida accertativa','DL-X8':'Disposizione','DL-X9':'Organi, accesso, verbali',
    'DL-X10':'Diffide e prescrizione obbligatoria','DL-X11':'Lavoro nero e maxisanzione','S22-DL-30':'Ispezioni, consulente e diffida',
    'DL-X1':'Tutele contro il licenziamento illegittimo','DL-X2':'Potere disciplinare','DL-X3':'Salario giusto (D.L. 62)','DL-X4':'Trasparenza retributiva (D.Lgs. 96)',
    'DL-X5':'Dimissioni per fatti concludenti','DL-X6':'Il consulente nella crisi d\'impresa',
    'INPS-1':'CIGO','INPS-2':'CIGS','INPS-4':'Classificazione degli ammortizzatori','INPS-5':'Presupposti e limiti degli ammortizzatori','INPS-6':'NASpI',
    'INPS-11':'Misure di sostegno al reddito','INPS-21':'NASpI e attività lavorativa','S22-INPS-14':'Fondi di solidarietà e FIS',
    'INPS-3':'Contribuzione e assicurazioni sociali','INPS-8':'Unità produttiva e operativa','INPS-12':'Prescrizione dei contributi','INPS-13':'Dilazioni dei debiti',
    'INPS-14':'Inquadramento aziendale','INPS-15':'Minimale contributivo','INPS-18':'Evasione e omissione','INPS-20':'DURC','INPS-22':'Contributi e rapporto di lavoro',
    'INPS-23':'Automaticità delle prestazioni','S22-INPS-11':'Pagamento dei contributi','INPS-7':'Fondo di garanzia TFR','INPS-10':'Congedo parentale',
    'INPS-16':'Previdenza complementare','INPS-17':'Malattia','INPS-19':'Permessi L. 104/1992','S22-INPS-1':'Gestioni e pensioni','S22-INPS-2':'Pensioni: requisiti diversi',
    'S22-INPS-3':'Calcolo della pensione','S22-INPS-13':'Assegno unico','INPS-9':'UniLav','S22-INPS-4':'Contenzioso amministrativo INPS','S22-INPS-5':'UniEmens',
    'S22-INPS-10':'ComUnica','INPS-X1':'Novità 2026: NASpI e congedo parentale',
    'INAIL-1':'Regolarità contributiva INAIL','INAIL-2':'Nuova attività o nuova sede','INAIL-3':'Autoliquidazione','INAIL-4':'Variazioni tardive od omesse',
    'INAIL-5':'Riduzioni del tasso','INAIL-6':'Rateazione dei debiti','INAIL-16':'Obbligo assicurativo','INAIL-23':'Tariffa ordinaria 2019','S22-INAIL-5':'Contenzioso sulle tariffe',
    'INAIL-8':'Infortunio sul lavoro','INAIL-9':'Infortunio in itinere','INAIL-10':'Rischio generico, specifico, elettivo','INAIL-11':'Denuncia d\'infortunio',
    'INAIL-12':'Denuncia di malattia professionale','INAIL-13':'Malattie tabellate e non','INAIL-19':'Occasione di lavoro e causa violenta','INAIL-20':'Dolo e colpa del lavoratore',
    'INAIL-22':'Infortunio e malattia a confronto','INAIL-7':'Prestazioni INAIL','INAIL-14':'Rendita','INAIL-15':'Rendita ai superstiti','INAIL-17':'Azione di rivalsa',
    'INAIL-18':'Automaticità delle prestazioni','INAIL-21':'Inabilità temporanea assoluta',
    'PPP-9':'Capacità giuridica e di agire','PPP-10':'Contratto: elementi essenziali','PPP-11':'Proprietà e possesso','PPP-12':'Elementi accidentali','PPP-13':'Nullità e annullabilità',
    'PPP-14':'Obbligazione e adempimento','PPP-15':'Diritti reali di godimento e garanzia','PPP-16':'Rescissione e risoluzione','PPP-17':'Imprenditore','PPP-18':'Impresa e società',
    'PPP-1':'Iter legislativo','PPP-2':'Formazione del Governo','PPP-3':'Decreto-legge','PPP-4':'Decreto legislativo','PPP-5':'Referendum','PPP-6':'Corte costituzionale',
    'PPP-7':'Legge statale e regionale','PPP-8':'Presidente della Repubblica','S22-PPP-11':'Principi fondamentali','S22-PPP-12':'Parlamento','S22-PPP-18':'Enti territoriali',
    'S22-PPP-19':'Principi della PA','S22-PPP-20':'Magistratura','PPP-X1':'Parità di genere nel lavoro',
    'PPP-19':'Principio di legalità','PPP-20':'Personalità della responsabilità','PPP-21':'Irretroattività','PPP-22':'Dolo e colpa','PPP-23':'Delitti e contravvenzioni',
    'S22-PPP-26':'Denuncia, esposto, querela','S22-PPP-27':'Omicidio e lesioni colpose (sicurezza)','S22-PPP-28':'Omesso versamento delle ritenute','S22-PPP-29':'Oblazione',
    'S22-PPP-30':'Conseguenze civili del reato',
    'TRIB-19':'Tributi, imposte, tasse, contributi','TRIB-14':'Classificazione dei redditi','S22-TRIB-3':'IRPEF','TRIB-9':'Competenza e cassa','TRIB-16':'Autotutela',
    'TRIB-17':'Interpello','TRIB-22':'Ravvedimento operoso','TRIB-18':'IRAP','TRIB-8':'Cedolare secca','TRIB-13':'Regime forfettario','TRIB-2':'Chi presenta il 730',
    'S22-TRIB-10':'Dichiarazione dei redditi','S22-TRIB-12':'Compensazione in F24','S22-TRIB-6':'Addizionali IRPEF','S22-TRIB-8':'Reddito professionale',
    'TRIB-1':'Reddito di lavoro dipendente','TRIB-12':'Redditi assimilati','TRIB-6':'Base imponibile (art. 51)','TRIB-3':'Oneri detraibili e deducibili',
    'TRIB-4':'Detrazioni per familiari','TRIB-10':'Detrazioni per lavoro dipendente','TRIB-7':'Trasferta','TRIB-11':'Conguaglio fiscale','TRIB-15':'Modello 770',
    'S22-TRIB-13':'Tassazione separata','S22-TRIB-14':'TFR','S22-TRIB-17':'Fringe benefit','S22-TRIB-18':'Vitto, mensa e buoni pasto','TRIB-X1':'Sostituto d\'imposta',
    'TRIB-5':'Società: regime fiscale','TRIB-20':'Impresa familiare','TRIB-21':'Tipi di società','TRIB-23':'Accomandatari e accomandanti',
    'RAG-1':'Indennità di malattia','RAG-2':'Indennità di maternità','RAG-5':'Contributi a carico del datore','RAG-6':'Voci del costo del personale','RAG-7':'TFR liquidato',
    'RAG-9':'Personale c/retribuzioni','RAG-17':'Compensi ad amministratori e sindaci','RAG-21':'Salari e stipendi','RAG-22':'Fondo TFR','RAG-23':'Quota annua di TFR',
    'S22-RAG-10':'Denuncia salari INAIL in contabilità','RAG-12':'Fattura: elementi','RAG-20':'Fattura elettronica','RAG-15':'Obblighi contabili dei professionisti',
    'RAG-18':'Contabilità ordinaria e semplificata','RAG-16':'Piano dei conti','S22-RAG-1':'Azienda, ditta, insegna, marchio','RAG-10':'Bilancio: composizione',
    'RAG-13':'Stato patrimoniale','RAG-14':'Conto economico','RAG-11':'Capitale netto','RAG-3':'Bene strumentale','RAG-8':'Immobilizzazioni','RAG-4':'Costi pluriennali',
    'S22-RAG-5':'Ammortamento','S22-RAG-8':'Inventario e ammortamento','S22-RAG-7':'Ratei e risconti','S22-RAG-9':'Plusvalenze e minusvalenze','RAG-19':'Competenza e cassa',
    'DEO-1':'Oggetto della professione','DEO-2':'Riserva di legge','DEO-3':'Incompatibilità','DEO-4':'Albo e iscrizione','DEO-5':'DUI','DEO-6':'Azione e pene disciplinari',
    'DEO-22':'Potestà disciplinare','DEO-23':'Formazione continua','DEO-X1':'Abusivismo e limiti dei CED','DEO-X2':'Asseverazione Asse.Co.',
    'DEO-7':'Finalità del Codice','DEO-8':'Destinatari','DEO-9':'Dignità e decoro','DEO-10':'Lealtà, fedeltà, indipendenza','DEO-11':'Segreto e riservatezza',
    'DEO-12':'Competenza e informativa','DEO-13':'Polizza e pubblicità','DEO-14':'Altri professionisti e colleghi','DEO-15':'Concorrenza sleale','DEO-16':'Rapporti con i colleghi',
    'DEO-17':'Praticanti e collaboratori','DEO-18':'Accettazione dell\'incarico','DEO-19':'Esecuzione dell\'incarico','DEO-20':'Restituzione dei documenti',
    'DEO-21':'Pubblicità informativa','S22-DEO-14':'Società e imprese di servizi (art. 20)','S22-DEO-15':'Consulente dipendente (art. 36)'
  };

  /* Norma di riferimento (dalle risposte modello). Stringa vuota = nessuna norma singola da memorizzare. */
  var NORM = {
    'DL-4b':'art. 409 c.p.c.; art. 2 D.Lgs. 81/2015','DL-15a':'art. 4 St. lav.','DL-16a':'D.Lgs. 66/2003','DL-17a':'art. 5 D.Lgs. 66/2003; art. 6 D.Lgs. 81/2015',
    'DL-18b':'art. 2077 c.c.','DL-20a':'L. 205/2017','DL-10b':'L. 68/1999','DL-15b':'art. 2087 c.c.','DL-21b':'artt. 410-412-ter c.p.c.',
    'DL-X1':'art. 18 St. lav.; D.Lgs. 23/2015','DL-X2':'art. 7 St. lav.; art. 2106 c.c.','DL-X3':'art. 7 D.L. 62/2026','DL-X4':'D.Lgs. 96/2026',
    'DL-X5':'art. 26, c. 7-bis, D.Lgs. 151/2015','DL-X6':'D.Lgs. 14/2019','DL-X9':'artt. 6-7 e 13 D.Lgs. 124/2004','DL-X10':'artt. 13 e 15 D.Lgs. 124/2004; D.Lgs. 758/1994',
    'DL-X11':'art. 3 D.L. 12/2002; art. 14 D.Lgs. 81/2008','S22-DL-6':'D.Lgs. 286/1998','S22-DL-8':'art. 1, c. 720-726, L. 234/2021','S22-DL-21':'art. 2110 c.c.',
    'S22-DL-22':'art. 1206 c.c.; D.Lgs. 148/2015',
    'INPS-4':'D.Lgs. 148/2015','INPS-5':'D.Lgs. 148/2015','INPS-6':'D.Lgs. 22/2015','INPS-11':'','INPS-3':'L. 335/1995','INPS-8':'','INPS-12':'L. 335/1995',
    'INPS-13':'D.L. 338/1989','INPS-15':'D.L. 338/1989','INPS-18':'L. 388/2000','INPS-16':'D.Lgs. 252/2005','INPS-19':'L. 104/1992; art. 42 D.Lgs. 151/2001','INPS-9':'',
    'INPS-X1':'L. 199/2025','S22-INPS-2':'L. 199/2025','S22-INPS-3':'L. 335/1995','S22-INPS-11':'art. 17 D.Lgs. 241/1997','S22-INPS-13':'D.Lgs. 230/2021',
    'S22-INPS-14':'artt. 26 ss. D.Lgs. 148/2015',
    'INAIL-1':'','INAIL-2':'D.P.R. 1124/1965','INAIL-3':'D.P.R. 1124/1965','INAIL-4':'art. 116 L. 388/2000','INAIL-5':'','INAIL-6':'D.L. 338/1989','INAIL-16':'D.P.R. 1124/1965',
    'INAIL-23':'D.I. 27/2/2019','INAIL-8':'art. 2 T.U. 1124/1965','INAIL-19':'art. 2 T.U. 1124/1965','INAIL-12':'artt. 52-53 T.U. 1124/1965','INAIL-13':'D.Lgs. 38/2000',
    'INAIL-11':'D.Lgs. 81/2008','INAIL-15':'art. 85 T.U. 1124/1965','INAIL-21':'art. 68 T.U. 1124/1965','INAIL-17':'art. 1916 c.c.','INAIL-18':'','INAIL-20':'art. 2087 c.c.',
    'INAIL-7':'art. 13 D.Lgs. 38/2000','INAIL-10':'','INAIL-22':'','S22-INAIL-5':'art. 2 L. 203/2024',
    'TRIB-2':'D.M. 164/1999','TRIB-7':'art. 51, c. 5, TUIR','TRIB-11':'D.P.R. 600/1973','TRIB-9':'art. 2423-bis c.c.','TRIB-13':'L. 190/2014','TRIB-14':'art. 6 TUIR',
    'TRIB-16':'D.Lgs. 219/2023','TRIB-17':'L. 212/2000','TRIB-18':'D.Lgs. 446/1997','TRIB-21':'artt. 2251 ss. c.c.','S22-TRIB-10':'D.P.R. 322/1998',
    'S22-TRIB-17':'art. 51, c. 3-4, TUIR','S22-TRIB-18':'art. 51, c. 2, lett. c), TUIR','S22-TRIB-3':'artt. 1-3 TUIR','S22-TRIB-14':'art. 2120 c.c.; art. 19 TUIR',
    'RAG-1':'art. 2425 c.c.','RAG-2':'art. 1 D.L. 663/1979','RAG-5':'artt. 2424-2425 c.c.','RAG-6':'art. 2425 c.c.','RAG-7':'artt. 17 e 19 TUIR','RAG-9':'art. 2424 c.c.',
    'RAG-17':'art. 2389 c.c.','RAG-21':'art. 2425 c.c.','RAG-4':'D.Lgs. 139/2015','RAG-16':'art. 2214 c.c.','RAG-19':'art. 109 TUIR','RAG-20':'L. 205/2017',
    'S22-RAG-5':'art. 102 TUIR','S22-RAG-9':'art. 2425 c.c.','S22-RAG-7':'','S22-RAG-10':'',
    'PPP-12':'artt. 1353-1355 c.c.','PPP-13':'artt. 1418 ss. c.c.','PPP-15':'','PPP-20':'art. 27 Cost.','S22-PPP-19':'artt. 97-98 Cost.','S22-PPP-26':'artt. 331-336 c.p.p.',
    'S22-PPP-28':'art. 2 D.L. 463/1983','S22-PPP-29':'artt. 162 e 162-bis c.p.','PPP-18':'art. 2247 c.c.',
    'DEO-2':'art. 1 L. 12/1979; art. 348 c.p.','DEO-5':'L. 2/2009','DEO-7':'artt. 1-2 Codice','DEO-8':'artt. 2-3 Codice','DEO-9':'art. 4 Codice','DEO-10':'artt. 5-7 Codice',
    'DEO-12':'art. 9 Codice','DEO-14':'artt. 12-13 Codice','DEO-15':'art. 14 Codice','DEO-16':'art. 13 Codice','DEO-17':'art. 22 Codice','DEO-18':'art. 27 Codice',
    'DEO-19':'art. 30 Codice','DEO-20':'art. 33 Codice','DEO-21':'art. 35 Codice','DEO-X1':'art. 1 L. 12/1979; art. 348 c.p.','DEO-X2':'art. 38 Codice',
    'S22-DEO-14':'art. 20 Codice','S22-DEO-15':'art. 36 Codice'
  };

  /* Domande da non studiare (indicazione informale del Presidente riferita da Andrea). */
  var ESCLUSE = {'PPP-11':'escluso: indicazione di Rausei (poco pertinente)'};

  window.MAPPE_ORALE = {versione:'1.1 · 7/11/2026', mappe:MAPPE, sotto:SOTTO, lab:LAB, norm:NORM, escluse:ESCLUSE};
})();
