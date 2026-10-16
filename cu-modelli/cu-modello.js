/* CU 2026 sul modello fedele (ordinaria e sintetica dell'Agenzia delle Entrate).
   Usa l'esercizio corrente del simulatore (CU.scn, CU.sol) e le spiegazioni di cuCalc().
   Pagine: cu-modelli/{ord|sint}-N.svg · caselle: cu-modelli/campi.json */
(function(){
const W=595.276,H=841.89,BASE='cu-modelli/';
const TOGGLES=new Set(['F_10','P_2','P_3','P_7','P_96']);
let DATA=null,view='ord',zoom=1,els={},byKey={},vals={},built=null,loading=null;
const st={get(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const strip=s=>String(s).replace(/<[^>]+>/g,'');
const box=()=>document.getElementById('cuModel');

/* ---------- soluzione sul modello, dall'esercizio corrente ---------- */
function solutions(){
  const s=CU.scn,o=CU.sol,T=!!s.tracciaId,out=[];
  const why=k=>strip(cuCalc(k));
  const N=(k,v,src,soft)=>out.push(v?{k,v,t:'n',why:why(src),soft:!!soft}:{k,v:0,t:'e',why:why(src)});
  const C=(k,v,src)=>out.push({k,v:String(v),t:'t',why:why(src)});
  const X=(k,w)=>out.push({k,v:'X',t:'x',why:w});
  const D=(k,v,w,soft)=>out.push({k,v,t:'d',why:w,soft:!!soft});
  const TX=(k,v,w,soft)=>out.push({k,v,t:'t',why:w,soft:!!soft});
  TX('anno','2025','Anno dei redditi certificati: la CU 2026 certifica il 2025');
  if(T){
    TX('S_1','01234567890','Codice fiscale del sostituto: per una S.r.l. di norma coincide con la partita IVA',true);
    TX('S_2','ALFA S.R.L.','Denominazione del sostituto');
    TX('D_1','RSSMRC75A01H501Y','Codice fiscale del dipendente');TX('D_2','ROSSI','Cognome');TX('D_3','MARCO','Nome');
    TX('D_4','M','Sesso, ricavabile dal codice fiscale',true);D('D_5','01/01/1975','Data di nascita, ricavabile dal codice fiscale',true);
    TX('D_6','ROMA','Comune di nascita: H501 = Roma',true);TX('D_7','RM','Provincia di nascita',true);
  }
  N('F_1',o.punto1,'punto1');
  out.push({k:'F_6',v:365,t:'i',why:why('giorni')});
  D('F_8',s.dataAss,'Data di inizio del rapporto di lavoro (istruzioni CU 2026, punto 8)');
  X('F_10','In forza al 31/12/2025: alternativo al punto 9 (data di cessazione)');
  N('F_21',o.p21,'p21');N('F_22',o.p22,'p22');N('F_26',o.p26,'p26');N('F_27',o.p27,'p27');N('F_29',o.p29,'p29');
  N('F_121',o.p121,'p121');N('F_122',o.p122,'p122');
  N('F_361',o.p361,'p361');N('F_362',o.p362,'p362');N('F_367',o.p367,'p367');N('F_368',o.p368,'p368');
  N('F_374',o.p374,'p374');N('F_375',o.p375,'p375');
  C('F_390',o.p390,'p390');N('F_391',o.p391,'p391');
  N('F_441',o.p441,'p441');N('F_449',o.redRif,'redRif');
  C('F_718',o.p718,'p718');N('F_719',o.p719,'p719');out.push({k:'F_721',v:365,t:'i',why:why('p721')});
  D('F_722',s.dataAss,'Data di inizio del rapporto di lavoro (istruzioni CU 2026, punto 722)');
  C('F_724',o.p724,'p724');N('F_725',o.p725,'p725');
  out.push({k:'F_801',v:0,t:'e',why:'TFR non erogato nel 2025: i punti 801-808 restano vuoti'});
  const ante=s.tfrAnte2001||0,post=Math.round((s.tfrMat-ante)*100)/100;
  if(ante)out.push({k:'F_809',v:ante,t:'n',why:'TFR maturato fino al 31/12/2000 e rimasto in azienda: i punti 809-813 si compilano sempre, anche senza erogazione (istruzioni CU 2026)'});
  else out.push({k:'F_809',v:0,t:'e',why:'Nessun TFR maturato fino al 31/12/2000'});
  out.push({k:'F_810',v:post,t:'n',why:`TFR maturato dall'1/1/2001 e rimasto in azienda: ${fmt(s.tfrMat)}${ante?' − '+fmt(ante):''}; punti 809-813 sempre compilati`});
  N('F_920',o.p920,'p920');
  if(s.coniuge){X('fam1_C','Rigo 1 prestampato per il coniuge: casella C');out.push({k:'fam1_mesi',v:12,t:'i',why:'Mesi a carico del coniuge'});}
  TX('P_1',s.matricola,'Matricola azienda INPS');
  X('P_2','Contributi pensionistici versati all\'INPS: casella sempre barrata in questo caso');
  out.push(o.inps4?{k:'P_4',v:o.inps4,t:'n',why:why('inps4')+(T?' (si assume imponibile tutto il lordo)':''),soft:T}:{k:'P_4',v:0,t:'e',why:''});
  out.push({k:'P_5',v:0,t:'e',why:'Imponibile IVS: solo per gli iscritti all\'ex fondo IPOST; qui resta vuoto'});
  N('P_6',o.inps6,'inps6');
  X('P_7','Denuncia UniEmens presentata in tutti i mesi: casella «Tutti»');
  TX('P_92',s.pat,'INAIL: posizione assicurativa territoriale (PAT)');
  TX('P_95','A271','INAIL: codice del comune in cui si svolge l\'attività (Ancona)');
  return out;
}

/* ---------- costruzione del modello ---------- */
function load(){
  if(DATA)return Promise.resolve(DATA);
  if(!loading)loading=fetch(BASE+'campi.json').then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(d=>DATA=d);
  return loading;
}
const isTog=f=>f.chk||TOGGLES.has(f.k)||(f.w<=14&&f.h<=14);
function ptName(f){
  const k=f.k;
  if(k==='anno')return 'Anno';if(k==='note')return 'Annotazioni';if(k.startsWith('fam'))return f.lab;
  if(k.startsWith('X'))return (f.p===1?'Frontespizio':'Quadro CT')+(f.lab?' · '+f.lab:'');
  if(k.startsWith('N_'))return 'Annotazioni · codice '+k.slice(2);
  return 'Punto '+f.n+(k.startsWith('S_')?' (sostituto)':k.startsWith('D_')?' (dipendente)':k.startsWith('P_')?' (sez. previdenziale)':k.startsWith('AU_')?' (assegno unico)':'')+' · pag. '+f.p;
}
function build(){
  const M=DATA[view],b=box();
  els={};byKey={};M.fields.forEach(f=>byKey[f.k]=f);
  b.innerHTML=`<div class="cum-bar">
      <div class="cum-nav">${M.pages.map(p=>`<a href="#cum-${view}-${p.n}"><b>${p.n}</b>${esc(p.short)}</a>`).join('')}</div>
      <div class="cum-zoom"><button type="button" class="diffbtn" data-z="-1" aria-label="Riduci">−</button><span id="cumZ">${Math.round(zoom*100)}%</span><button type="button" class="diffbtn" data-z="1" aria-label="Ingrandisci">+</button></div>
    </div>
    <div class="cum-note" id="cumNote"></div>
    <div class="cum-pages" id="cumPages"></div>
    <div class="cum-res hidden" id="cumRes"></div>`;
  const pages=b.querySelector('#cumPages');
  M.pages.forEach(p=>{
    const sh=document.createElement('div');sh.className='cum-sheet';
    sh.innerHTML=`<div class="cum-h"><b>${p.n}</b>${esc(p.t)}</div>`;
    const paper=document.createElement('div');paper.className='cum-paper';paper.id=`cum-${view}-${p.n}`;
    paper.innerHTML=`<img src="${BASE}${view}-${p.n}.svg" alt="CU 2026 ${M.label.toLowerCase()}, pagina ${p.n}: ${esc(p.t)}" loading="lazy" decoding="async">`;
    M.fields.filter(f=>f.p===p.n).forEach(f=>{
      let el;
      if(f.k==='note')el=document.createElement('textarea');
      else if(isTog(f)){el=document.createElement('button');el.type='button';el.className='tog';el.setAttribute('aria-pressed','false')}
      else{el=document.createElement('input');el.type='text';el.autocomplete='off';el.spellcheck=false}
      el.classList.add('cf');el.dataset.k=f.k;
      el.setAttribute('aria-label',ptName(f)+(f.lab&&!f.k.startsWith('X')&&!f.k.startsWith('fam')?' – '+f.lab:''));
      Object.assign(el.style,{left:(f.x/W*100)+'%',top:(f.y/H*100)+'%',width:(f.w/W*100)+'%',height:(f.h/H*100)+'%'});
      paper.appendChild(el);els[f.k]=el;
    });
    sh.appendChild(paper);pages.appendChild(sh);
  });
  b.style.setProperty('--cz',zoom);
  built=view;
}
function setVal(k,v,sol){const el=els[k];if(!el)return;vals[k]=v;
  if(el.tagName==='BUTTON'){el.textContent=v?'X':'';el.setAttribute('aria-pressed',v?'true':'false')}else el.value=v;
  el.classList.toggle('sol',!!sol);}
function clearMarks(){Object.values(els).forEach(e=>{e.classList.remove('ok','err','miss','extra');delete e.dataset.tip});const r=document.getElementById('cumRes');if(r)r.classList.add('hidden')}
function reset(){clearMarks();Object.keys(els).forEach(k=>setVal(k,'',false));vals={}}
function note(){
  const n=document.getElementById('cumNote');if(!n)return;
  const s=CU.scn;
  n.innerHTML=(view==='sint'?'CU <b>sintetica</b>: mancano tra gli altri i punti 23, 25, 28, 52, 61-62, 459 e la tassazione del TFR (814 e seguenti), presenti solo nell\'ordinaria. ':'CU <b>ordinaria</b>: frontespizio, quadro CT e certificazione di lavoro dipendente. ')
   +'Scrivi nelle caselle bianche come a penna; le caselle piccole si barrano con un clic. Il controllo segnala anche le caselle riempite che dovevano restare vuote.'
   +(s.tracciaId?'':' Dati anagrafici e frontespizio non sono forniti dall\'esercizio e restano fuori dal controllo.');
}
/* ---------- confronto ---------- */
function num(v){v=String(v).replace(/[€\s]/g,'');if(v==='')return null;
  if(v.includes(','))v=v.replace(/\./g,'').replace(',','.');else if((v.match(/\./g)||[]).length>1)v=v.replace(/\./g,'');else if(/^\d{1,3}\.\d{3}$/.test(v))v=v.replace('.','');
  const n=Number(v);return isNaN(n)?NaN:n}
const show=(v,t)=>t==='n'?fmt(v):t==='e'?'(vuoto)':String(v);
function same(c,raw){const v=(raw||'').trim();
  if(c.t==='e')return v===''||num(v)===0;
  if(v==='')return null;
  if(c.t==='n'||c.t==='i'){const n=num(v);return n!==null&&!isNaN(n)&&Math.abs(n-c.v)<(c.t==='i'?0.5:0.011)}
  if(c.t==='d')return v.replace(/\D/g,'')===String(c.v).replace(/\D/g,'');
  if(c.t==='x')return v.toUpperCase()==='X';
  return v.toUpperCase().replace(/[\s.]/g,'')===String(c.v).toUpperCase().replace(/[\s.]/g,'')}
function check(){
  clearMarks();const C=solutions().filter(c=>els[c.k]),exp={};C.forEach(c=>exp[c.k]=c);
  const items=[];let ok=0,err=0,miss=0,extra=0;
  C.forEach(c=>{const el=els[c.k],raw=vals[c.k]||'',r=same(c,raw);
    if(r===true){if(!c.soft)ok++;if(c.t!=='e'||raw.trim())el.classList.add('ok');return}
    let kind=c.soft?'soft':(r===null?'miss':'err');if(kind==='miss')miss++;else if(kind==='err')err++;
    el.classList.add(r===null?'miss':'err');el.dataset.tip='Atteso: '+show(c.v,c.t)+' — '+c.why;
    items.push({k:c.k,kind,got:raw.trim(),exp:show(c.v,c.t),why:c.why})});
  Object.keys(vals).forEach(k=>{if(exp[k]||!els[k]||!String(vals[k]||'').trim())return;
    const f=byKey[k];if(!CU.scn.tracciaId&&/^(S_|D_|X|anno)/.test(k))return;
    extra++;els[k].classList.add('extra');els[k].dataset.tip='Con questi dati la casella resta vuota';
    items.push({k,kind:'extra',got:String(vals[k]).trim(),exp:'(vuoto)',why:f.lab||''})});
  const ord={err:0,extra:1,miss:2,soft:3};items.sort((a,b)=>ord[a.kind]-ord[b.kind]||byKey[a.k].p-byKey[b.k].p||byKey[a.k].y-byKey[b.k].y);
  const scored=C.filter(c=>!c.soft).length,tot=err+miss+extra;
  stats.ex++;stats.ok+=ok;stats.tot+=scored;stats.streak=tot===0?stats.streak+1:0;stopTimer();updateScore();
  const ban=document.getElementById('cuBanner');
  ban.className='banner show '+(tot?'mid':'good');
  ban.innerHTML=tot?`${ok}/${scored} caselle corrette · ${err} sbagliate · ${miss} mancanti · ${extra} in più · tempo ${formatTime(tSec)}.`
    :`Tutto corretto sul modello — ${ok}/${scored} · tempo ${formatTime(tSec)}. Serie perfette: ${stats.streak}.`;
  const lab={err:'Sbagliato',miss:'Mancante',extra:'Non previsto',soft:'Indicativo'};
  const res=document.getElementById('cumRes');
  res.innerHTML=items.length?`<div class="cum-res-h">Caselle da rivedere (clic per andare alla casella)</div>`+items.map(i=>`<button type="button" class="cum-it t-${i.kind}" data-go="${i.k}"><b>${lab[i.kind]} · ${esc(ptName(byKey[i.k]))}</b><span class="mono">tuo: ${esc(i.got||'—')} · atteso: ${esc(i.exp)}</span><span>${esc(i.why)}</span></button>`).join(''):'';
  res.classList.toggle('hidden',!items.length);
}
function solution(){reset();solutions().forEach(c=>{if(!els[c.k]||c.t==='e')return;setVal(c.k,c.t==='n'?fmt(c.v):String(c.v),true);els[c.k].dataset.tip=c.why+(c.soft?' (indicativo)':'')});}

/* ---------- interfaccia pubblica per il simulatore ---------- */
function apply(){
  const list=document.getElementById('cuFields'),b=box();
  document.querySelectorAll('#cuViewWrap .diffbtn').forEach(x=>x.classList.toggle('active',x.dataset.view===view));
  if(view==='elenco'){b.classList.add('hidden');list.classList.remove('hidden');return}
  list.classList.add('hidden');b.classList.remove('hidden');
  if(!DATA){b.innerHTML='<div class="note">Carico il modello…</div>';}
  load().then(()=>{if(built!==view)build();reset();note()}).catch(()=>{
    b.innerHTML='<div class="note"><b>Il modello non si è caricato.</b> Le pagine stanno nella cartella cu-modelli/ accanto a simulatore.html: aprile dal sito pubblicato (GitHub Pages), non come file locale.</div>';});
}
window.cuModelActive=()=>view!=='elenco'&&!!DATA&&built===view;
window.cuModelCheck=check;
window.cuModelSolution=solution;
window.cuModelRender=()=>{if(view!=='elenco'&&DATA&&built===view){reset();note()}};
document.addEventListener('DOMContentLoaded',()=>{});
const wrap=document.getElementById('cuViewWrap');
wrap.addEventListener('click',e=>{const bt=e.target.closest('[data-view]');if(!bt)return;view=bt.dataset.view;st.set('cdl:cuView',view);document.getElementById('cuBanner').className='banner';apply()});
box().addEventListener('input',e=>{const k=e.target.dataset.k;if(!k)return;vals[k]=e.target.value;e.target.classList.remove('sol','ok','err','miss','extra');delete e.target.dataset.tip});
box().addEventListener('click',e=>{
  const z=e.target.closest('[data-z]');if(z){zoom=Math.min(3,Math.max(1,zoom+.25*Number(z.dataset.z)));box().style.setProperty('--cz',zoom);document.getElementById('cumZ').textContent=Math.round(zoom*100)+'%';st.set('cdl:cuZoom',zoom);return}
  const go=e.target.closest('[data-go]');if(go){const el=els[go.dataset.go];el.scrollIntoView({block:'center',behavior:'smooth'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');if(el.tagName!=='BUTTON')el.focus({preventScroll:true});return}
  const t=e.target.closest('button.cf');if(t){const k=t.dataset.k;setVal(k,vals[k]?'':'X');t.classList.remove('ok','err','miss','extra');delete t.dataset.tip}
});
const tip=document.createElement('div');tip.className='cum-tip hidden';document.body.appendChild(tip);
box().addEventListener('pointerover',e=>{const el=e.target.closest('.cf');if(!el||!el.dataset.tip){tip.classList.add('hidden');return}tip.textContent=el.dataset.tip;tip.classList.remove('hidden');const r=el.getBoundingClientRect();tip.style.left=Math.max(8,Math.min(innerWidth-330,r.left))+'px';tip.style.top=(r.bottom+6)+'px'});
box().addEventListener('pointerout',e=>{if(e.target.closest('.cf'))tip.classList.add('hidden')});
addEventListener('scroll',()=>tip.classList.add('hidden'),{passive:true});
zoom=st.get('cdl:cuZoom')||1;
const v0=st.get('cdl:cuView');view=['elenco','ord','sint'].includes(v0)?v0:'ord';
apply();
})();
