"""Genera un fascicolo PDF stampabile per materia dalla banca dati del simulatore orale.
Uso: python3 fascicolo.py orale.json MATERIA output.pdf
"""
import json, sys, unicodedata, re
from xml.sax.saxutils import escape
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table,
                                TableStyle, KeepTogether, PageBreak, CondPageBreak)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping

LIB = '/usr/share/fonts/truetype/liberation/'
for name, f in [('Serif', 'LiberationSerif-Regular'), ('Serif-B', 'LiberationSerif-Bold'),
                ('Serif-I', 'LiberationSerif-Italic'), ('Serif-BI', 'LiberationSerif-BoldItalic'),
                ('Sans', 'LiberationSans-Regular'), ('Sans-B', 'LiberationSans-Bold')]:
    pdfmetrics.registerFont(TTFont(name, LIB + f + '.ttf'))
addMapping('Serif', 0, 0, 'Serif'); addMapping('Serif', 1, 0, 'Serif-B')
addMapping('Serif', 0, 1, 'Serif-I'); addMapping('Serif', 1, 1, 'Serif-BI')
addMapping('Sans', 0, 0, 'Sans'); addMapping('Sans', 1, 0, 'Sans-B')
addMapping('Sans', 0, 1, 'Sans'); addMapping('Sans', 1, 1, 'Sans-B')

INK = colors.HexColor('#1d1d1b')
MUTED = colors.HexColor('#5f5e5a')
ACCENT = colors.HexColor('#7a2e2a')      # rosso scuro, stampa bene anche in bianco e nero
TINT = colors.HexColor('#f1efe8')
RULE = colors.HexColor('#c9c6bc')

S = {
    'title': ParagraphStyle('t', fontName='Serif-B', fontSize=20, leading=24, textColor=INK, spaceAfter=4),
    'sub': ParagraphStyle('s', fontName='Sans', fontSize=9.5, leading=13, textColor=MUTED, spaceAfter=10),
    'h2': ParagraphStyle('h2', fontName='Sans-B', fontSize=10, leading=13, textColor=ACCENT, spaceBefore=8, spaceAfter=4),
    'body': ParagraphStyle('b', fontName='Serif', fontSize=11, leading=14.5, textColor=INK),
    'small': ParagraphStyle('sm', fontName='Sans', fontSize=8.5, leading=11, textColor=MUTED),
    'cell': ParagraphStyle('c', fontName='Serif', fontSize=10, leading=12.5, textColor=INK),
    'cellsm': ParagraphStyle('cs', fontName='Sans', fontSize=8, leading=10, textColor=MUTED),
    'eyebrow': ParagraphStyle('e', fontName='Sans-B', fontSize=8, leading=10, textColor=ACCENT),
    'q': ParagraphStyle('q', fontName='Serif-B', fontSize=14, leading=17.5, textColor=INK, spaceBefore=2, spaceAfter=6),
    # titolo della domanda: testo bianco su fascia rosso scuro (in bianco e nero resta una fascia grigio scuro)
    'qband': ParagraphStyle('qb', fontName='Serif-B', fontSize=15, leading=18.5, textColor=colors.white),
    'sintesi': ParagraphStyle('si', fontName='Serif', fontSize=11, leading=14.5, textColor=INK),
    'punto': ParagraphStyle('p', fontName='Serif', fontSize=11, leading=14.5, textColor=INK, leftIndent=16, firstLineIndent=-16, spaceAfter=4),
    'aggancio': ParagraphStyle('a', fontName='Serif-I', fontSize=10.5, leading=14, textColor=INK, spaceBefore=4, spaceAfter=4),
    'fonti': ParagraphStyle('f', fontName='Sans', fontSize=7.8, leading=10, textColor=MUTED),
    'vuoto': ParagraphStyle('v', fontName='Serif-I', fontSize=10.5, leading=14, textColor=MUTED),
}


def norm(s):
    """Minuscolo senza accenti, carattere per carattere (stessa lunghezza dell'originale)."""
    out = []
    for ch in s:
        base = unicodedata.normalize('NFD', ch)[0].lower()
        out.append(base if len(base) == 1 else ch)
    return ''.join(out)


# Articoli chiave dell'area giuslavoristica (regole e liste da articoli-chiave.js, via esporta_json.js)
AC = None
COLORE_ART = {'cost': '#ffe066', 'cc': '#a8dc9a'}
APRI_ART = {'cost': '<span backColor="#ffe066">', 'cc': '<span backColor="#a8dc9a">',
            'legge': '<u color="#2457a6" width="1.6" offset="-2.5">'}
CHIUDI_ART = {'cost': '</span>', 'cc': '</span>', 'legge': '</u>'}
LEGENDA_ART = ('5. Gli articoli chiave del lavoro sono evidenziati: <span backColor="#ffe066">&nbsp;giallo = Costituzione&nbsp;</span> '
               '<span backColor="#a8dc9a">&nbsp;verde = codice civile&nbsp;</span>; le leggi cardine sono '
               '<u color="#2457a6" width="1.6" offset="-2.5">sottolineate in blu</u>. Sono i riferimenti da citare per agganciare la risposta.')


def imposta_articoli(ac):
    global AC
    AC = None if not ac else {'cost': set(ac['cost']), 'cc': set(ac['cc']),
                               'rx': re.compile(ac['src']), 'dopo': re.compile(ac['dopo']),
                               'leggi': set(ac.get('leggi', [])), 'rxl': re.compile(ac['src_l']) if ac.get('src_l') else None}


def _tipo_legge(t):
    return 'DLGS' if re.match(r'D\.\s?[Ll]gs', t) else {'D.L.': 'DL', 'D.P.R.': 'DPR'}.get(t, 'L')


def _numeri(lista):
    out = []
    for p in re.split(r'\s*,\s*|\s+e\s+', lista):
        m = re.match(r'^(\d+)-(\d+)$', p)
        out += [m.group(1), m.group(2)] if m else [p.strip()]
    return out


def articoli(testo):
    """[(inizio, fine, 'cost'|'cc')] degli articoli chiave citati nel testo (stessa regola del simulatore)."""
    if not AC:
        return []
    out = []
    for m in AC['rx'].finditer(testo):
        nn, suf, tipo, fine = _numeri(m.group(1)), m.group(4) or '', None, m.end()
        if re.search('Cost|Costituzione', suf):
            tipo = 'cost' if AC['cost'] & set(nn) else None
        elif suf:
            tipo = 'cc' if AC['cc'] & set(nn) else None
        elif AC['cc'] & set(nn) and not AC['dopo'].match(testo[fine:fine + 14]):
            tipo = 'cc'
        if tipo:
            while fine > m.start() and testo[fine - 1] in ', ':
                fine -= 1
            out.append((m.start(), fine, tipo))
    if AC['rxl']:
        for m in AC['rxl'].finditer(testo):
            k = (_tipo_legge(m.group(1)) + ' ' + (m.group(2) + '/' + m.group(3) if m.group(2) else m.group(5) + '/' + m.group(4))
                 if m.group(1) else 'L 300/1970')
            if k in AC['leggi']:
                out.append((m.start(), m.end(), 'legge'))
    return sorted(out)


def evidenzia(testo, chiavi=(), scuro=False):
    """Grassetto sulle parole chiave che il simulatore cerca; sfondo colorato sugli articoli chiave
    (giallo Costituzione, verde codice civile)."""
    n = norm(testo)
    segni = [False] * len(testo)
    for k in chiavi:
        k = norm(k)
        if not k:
            continue
        for m in re.finditer(re.escape(k), n):
            a, b = m.start(), m.end()
            # estende il grassetto alla parola intera (la chiave è spesso una radice: «abusiv»)
            while a > 0 and n[a - 1].isalnum():
                a -= 1
            while b < len(n) and n[b].isalnum():
                b += 1
            for i in range(a, b):
                segni[i] = True
    sfondo = [None] * len(testo)
    for a, b, t in articoli(testo):
        for i in range(a, b):
            sfondo[i] = t
    out, cb, ch = [], False, None
    for c, sb, sh in zip(testo, segni, sfondo):
        if sh != ch:   # cambia lo sfondo: si chiude tutto e si riapre (il grassetto sta dentro lo sfondo)
            out.append(('</b>' if cb else '') + (CHIUDI_ART[ch] if ch else ''))
            apri = APRI_ART[sh] if sh else ''
            if scuro and sh == 'legge':   # su fondo scuro la sottolineatura blu non si vede: diventa bianca
                apri = apri.replace('#2457a6', '#ffffff')
            out.append(apri + ('<b>' if sb else ''))
            ch, cb = sh, sb
        elif sb != cb:
            out.append('<b>' if sb else '</b>')
            cb = sb
        out.append(escape(c))
    out.append(('</b>' if cb else '') + (CHIUDI_ART[ch] if ch else ''))
    return ''.join(out)


def ordina(d):
    b = d['busta']
    return (0 if b is not None else 1, b if b is not None else 0, d['id'])


def costruisci(dati, materia, out):
    imposta_articoli(dati.get('artchiave'))
    mat = next(m for m in dati['materie'] if m['k'] == materia)
    comm = dati['commissione'].get(mat['comm'], {})
    domande = sorted([d for d in dati['domande'] if d['m'] == materia], key=ordina)
    con_r = [d for d in domande if d['r']]

    def piede(canv, doc):
        canv.saveState()
        canv.setFont('Sans', 7.5); canv.setFillColor(MUTED)
        canv.drawString(2.2 * cm, 1.2 * cm, 'Orale CdL 2026 · %s · dati simulatore %s' % (mat['nome'], dati['versione']))
        canv.drawRightString(A4[0] - 2 * cm, 1.2 * cm, 'pag. %d' % doc.page)
        canv.restoreState()

    doc = BaseDocTemplate(out, pagesize=A4, title='Fascicolo orale — ' + mat['nome'],
                          author='Andrea Marziali (con Claude)', leftMargin=2.2 * cm, rightMargin=2 * cm,
                          topMargin=1.8 * cm, bottomMargin=2 * cm)
    # Colonna di testo più stretta: a destra resta un margine per gli appunti a mano.
    frame = Frame(2.2 * cm, 2 * cm, A4[0] - 2.2 * cm - 5.2 * cm, A4[1] - 3.8 * cm, id='f', leftPadding=0, rightPadding=0)
    doc.addPageTemplates([PageTemplate(id='p', frames=[frame], onPage=piede)])

    st = []
    st.append(Paragraph('Fascicolo di studio — ' + escape(mat['nome']), S['title']))
    st.append(Paragraph('Prova orale, Esame di Stato CdL 2026 (Marche). Commissario probabile (stima): %s, %s. '
                        'Domande: %d, di cui %d con risposta modello.' %
                        (escape(comm.get('nome', '—')), escape(comm.get('ruolo', '')), len(domande), len(con_r)), S['sub']))
    st.append(Paragraph('Come usarlo', S['h2']))
    for riga in [
        '1. Leggi la scheda una volta, a voce alta. Le parole in <b>grassetto</b> sono quelle che il simulatore cerca nella tua risposta: sono il minimo da dire.',
        '2. Copri la scheda e ripeti la risposta a voce in 2 minuti: prima la frase iniziale, poi la norma, poi i punti.',
        '3. Ripassa dopo 1, 3 e 7 giorni usando l\'elenco qui sotto: segna una casella ogni volta che rispondi senza guardare.',
        '4. Usa il margine destro per i tuoi appunti; le correzioni tornano poi nel simulatore, che resta la fonte unica.',
        LEGENDA_ART]:
        st.append(Paragraph(riga, S['body']))
        st.append(Spacer(1, 3))

    st.append(Paragraph('Elenco per l\'autointerrogazione', S['h2']))
    righe = [[Paragraph('<b>Codice</b>', S['cellsm']), Paragraph('<b>Domanda</b>', S['cellsm']),
              Paragraph('<b>1 g</b>', S['cellsm']), Paragraph('<b>3 g</b>', S['cellsm']), Paragraph('<b>7 g</b>', S['cellsm'])]]
    for d in domande:
        etich = d['id'] + ('' if d['r'] else ' *')
        righe.append([Paragraph(escape(etich), S['cellsm']), Paragraph(escape(d['testo']), S['cell']), '', '', ''])
    w = A4[0] - 2.2 * cm - 5.2 * cm
    t = Table(righe, colWidths=[2.1 * cm, w - 2.1 * cm - 3 * 0.9 * cm, 0.9 * cm, 0.9 * cm, 0.9 * cm], repeatRows=1)
    stile = [('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('LINEBELOW', (0, 0), (-1, -1), 0.3, RULE),
             ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]
    for i in range(1, len(righe)):
        for c in (2, 3, 4):
            stile.append(('BOX', (c, i), (c, i), 0.6, MUTED))
    t.setStyle(TableStyle(stile))
    st.append(t)
    if len(con_r) < len(domande):
        st.append(Spacer(1, 4))
        st.append(Paragraph('* risposta modello non ancora disponibile: la scheda indica dove studiarla per ora.', S['small']))

    rinvii = [x for x in dati.get('rinvii', []) if x['m'] == materia]
    if rinvii:
        testi = {d['id']: d for d in dati['domande']}
        st.append(Paragraph('Domande 2022 con la stessa risposta di un\'altra scheda', S['h2']))
        st.append(Paragraph('Queste domande della sessione 2022 non hanno una scheda propria: si risponde con la scheda indicata, che è stampata in questo fascicolo o in quello della materia indicata.', S['small']))
        st.append(Spacer(1, 3))
        rr = [[Paragraph('<b>Codice</b>', S['cellsm']), Paragraph('<b>Domanda 2022</b>', S['cellsm']), Paragraph('<b>Rispondi con</b>', S['cellsm'])]]
        for x in rinvii:
            dv = testi.get(x['vedi'])
            rr.append([Paragraph(escape(x['id']), S['cellsm']), Paragraph(escape(x['testo']), S['cell']),
                       Paragraph('<b>%s</b>%s' % (escape(x['vedi']), (' — ' + escape(dv['testo'])) if dv else ''), S['cellsm'])])
        t2 = Table(rr, colWidths=[2.1 * cm, w - 2.1 * cm - 5 * cm, 5 * cm], repeatRows=1)
        t2.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('LINEBELOW', (0, 0), (-1, -1), 0.3, RULE),
                                ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]))
        st.append(t2)

    for d in domande:
        st.append(CondPageBreak(7 * cm))
        blocco = []
        etichetta = '%s · %s · %s' % (d['id'], d['etichetta'], d['gruppo'])
        blocco.append(Spacer(1, 10))
        blocco.append(Paragraph(escape(etichetta).upper(), S['eyebrow']))
        fascia = Table([[Paragraph(evidenzia(d['testo'], scuro=True), S['qband'])]], colWidths=[w])
        fascia.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), ACCENT), ('LEFTPADDING', (0, 0), (-1, -1), 9),
                                    ('RIGHTPADDING', (0, 0), (-1, -1), 9), ('TOPPADDING', (0, 0), (-1, -1), 5),
                                    ('BOTTOMPADDING', (0, 0), (-1, -1), 7)]))
        blocco.append(Spacer(1, 2))
        blocco.append(fascia)
        blocco.append(Spacer(1, 6))
        r = d['r']
        if r:
            chiavi_tutte = [k for p in r['punti'] for k in p[1]]
            box = Table([[Paragraph('<b>In una frase.</b> ' + evidenzia(r['sintesi'], chiavi_tutte), S['sintesi'])]],
                        colWidths=[w])
            box.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), TINT), ('LEFTPADDING', (0, 0), (-1, -1), 8),
                                     ('RIGHTPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 6),
                                     ('BOTTOMPADDING', (0, 0), (-1, -1), 6), ('LINEBEFORE', (0, 0), (0, -1), 2, ACCENT)]))
            blocco.append(box)
            blocco.append(Spacer(1, 6))
            st.append(KeepTogether(blocco))
            for i, (testo, chiavi) in enumerate(r['punti'], 1):
                st.append(Paragraph('%d.&nbsp;&nbsp;%s' % (i, evidenzia(testo, chiavi)), S['punto']))
            if r.get('aggancio'):
                st.append(Paragraph('<b>Aggancio:</b> ' + evidenzia(r['aggancio']), S['aggancio']))
            if r.get('fonti'):
                st.append(Paragraph('Fonti: ' + evidenzia(r['fonti']), S['fonti']))
        else:
            st.append(KeepTogether(blocco))
            dove = '; '.join(escape(a[0]) + (' (' + escape(a[1]) + ')' if a[1] else '') for a in d['approf']) or '—'
            st.append(Paragraph('Risposta modello in preparazione. Per ora studia su: ' + dove + '.', S['vuoto']))
        st.append(Spacer(1, 4))
        linea = Table([['']], colWidths=[w], rowHeights=[2])
        linea.setStyle(TableStyle([('LINEBELOW', (0, 0), (-1, -1), 0.4, RULE)]))
        st.append(linea)

    doc.build(st)
    return len(domande), len(con_r)


if __name__ == '__main__':
    dati = json.load(open(sys.argv[1], encoding='utf-8'))
    n, r = costruisci(dati, sys.argv[2], sys.argv[3])
    print(sys.argv[2], n, 'domande,', r, 'con risposta ->', sys.argv[3])
