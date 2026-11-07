/* Scelta della voce più naturale disponibile sul dispositivo (Web Speech API).
   Il browser non ha voci proprie: usa quelle del sistema. Le più umane sono le voci "Natural"/"Online" di Microsoft Edge,
   le voci Google di Chrome e le voci "Avanzata"/"Premium" di Apple, se scaricate. Le voci di base (eSpeak, "compact") suonano metalliche.
   Versione 1.0 del 7/11/2026. */
(function(){
  var synth = window.speechSynthesis || null;
  var CHIAVE = 'voceUmana';
  function punteggio(v){
    var n = (v.name || '') + ' ' + (v.voiceURI || ''), s = 0;
    if (/natural|neural|naturale/i.test(n)) s += 100;
    if (/premium|enhanced|avanzat|migliorat|siri/i.test(n)) s += 80;
    if (/online/i.test(n)) s += 60;
    if (/google/i.test(n)) s += 55;
    if (/alice|federica|paola|emma|elsa|isabella|diego|giuseppe|luca|bianca|fabiola|benigno|calogero|cataldo|gianni|imelda|irma|lisandro|palmira|pierina|rinaldo/i.test(n)) s += 15;
    if (/espeak|compact|eloquence|grandma|grandpa|nonna|nonno|rocko|shelley|reed|sandy|flo|eddy|bells|bubbles|cellos|zarvox|trinoids|whisper|organ|bahh|albert|jester|superstar|wobble|boing|bad news|good news/i.test(n)) s -= 120;
    if (v.localService === false) s += 10;
    if (/^it[-_]IT/i.test(v.lang)) s += 5;
    return s;
  }
  function italiane(){ return synth ? synth.getVoices().filter(function(v){ return /^it/i.test(v.lang); }) : []; }
  function ordinate(){ return italiane().sort(function(a,b){ return punteggio(b) - punteggio(a); }); }
  function salvata(){ try { return localStorage.getItem(CHIAVE) || ''; } catch(e) { return ''; } }
  function salva(nome){ try { localStorage.setItem(CHIAVE, nome || ''); } catch(e) {} }
  function migliore(genere){
    var L = ordinate(); if (!L.length) return null;
    var nome = salvata(); if (nome) { var f = L.filter(function(v){ return v.name === nome; })[0]; if (f) return f; }
    if (genere) {
      var re = genere === 'f' ? /(alice|federica|elsa|paola|isabella|emma|bianca|fabiola|imelda|irma|palmira|pierina|female|donna)/i : /(luca|diego|giuseppe|cosimo|benigno|calogero|cataldo|gianni|lisandro|rinaldo|male|uomo)/i;
      var top = punteggio(L[0]);
      var g = L.filter(function(v){ return re.test(v.name) && punteggio(v) >= top - 20; })[0];
      if (g) return g;
    }
    return L[0];
  }
  function naturale(v){ return !!v && punteggio(v) >= 60; }
  /* legge frase per frase: pause più naturali ed evita il blocco di Chrome sulle letture lunghe */
  function frasi(t){ return String(t).replace(/\s+/g, ' ').match(/[^.;:!?]+[.;:!?]*\s*/g) || [t]; }
  function pronuncia(t){
    return t.replace(/\bartt\.\s/gi, 'articoli ').replace(/\bart\.\s/gi, 'articolo ').replace(/\bc\.\s(?=\d)/g, 'comma ').replace(/\blett\.\s/g, 'lettera ')
      .replace(/c\.c\./g, 'codice civile').replace(/c\.p\.c\./g, 'codice di procedura civile').replace(/c\.p\.p\./g, 'codice di procedura penale').replace(/c\.p\./g, 'codice penale')
      .replace(/\bD\.Lgs\.\s?/g, 'decreto legislativo ').replace(/\bD\.L\.\s?/g, 'decreto legge ').replace(/\bD\.P\.R\.\s?/g, 'D P R ').replace(/\bL\.\s(?=\d)/g, 'legge ')
      .replace(/\bCost\./g, 'Costituzione').replace(/\bSt\. lav\./g, 'Statuto dei lavoratori').replace(/\bCass\.\s/g, 'Cassazione ').replace(/€/g, ' euro')
      .replace(/(\d+)\/(\d{4})/g, '$1 del $2');
  }
  var coda = [], fine = null, attiva = false;
  function prossima(opz){
    if (!coda.length) { attiva = false; if (fine) { var f = fine; fine = null; f(); } return; }
    var u = new SpeechSynthesisUtterance(pronuncia(coda.shift()));
    u.lang = 'it-IT'; if (opz.voce) u.voice = opz.voce;
    u.rate = opz.rate || 1; u.pitch = naturale(opz.voce) ? 1 : (opz.pitch || 1);
    u.onend = function(){ if (attiva) prossima(opz); };
    u.onerror = function(){ if (attiva) prossima(opz); };
    synth.speak(u);
  }
  function parla(testo, opz){
    if (!synth) { if (opz && opz.onEnd) opz.onEnd(); return; }
    ferma(); opz = opz || {};
    if (!opz.voce) opz.voce = migliore(opz.genere);
    coda = frasi(testo); fine = opz.onEnd || null; attiva = true; prossima(opz);
  }
  function ferma(){ attiva = false; coda = []; fine = null; if (synth) synth.cancel(); }
  var CONSIGLIO = 'Su questo dispositivo ci sono solo voci di base, che suonano metalliche. Per una voce più umana: su computer usa Microsoft Edge (voci «Online (Natural)», per esempio Isabella, Elsa, Diego, Giuseppe); su iPhone o iPad scarica una voce italiana «Avanzata» o «Premium» (Impostazioni → Accessibilità → Contenuto letto → Voci → Italiano: Alice, Federica o Luca), poi riapri la pagina; su Android installa le voci Google per l\'italiano (Impostazioni → Sintesi vocale).';
  window.VoceUmana = { disponibile: !!synth, ordinate: ordinate, migliore: migliore, naturale: naturale, punteggio: punteggio, parla: parla, ferma: ferma, salvata: salvata, salva: salva, consiglio: CONSIGLIO,
    pronta: function(cb){ if (!synth) return cb(); if (synth.getVoices().length) return cb(); var fatto = false; var go = function(){ if (!fatto) { fatto = true; cb(); } }; synth.addEventListener ? synth.addEventListener('voiceschanged', go) : (synth.onvoiceschanged = go); setTimeout(go, 1500); } };
})();
