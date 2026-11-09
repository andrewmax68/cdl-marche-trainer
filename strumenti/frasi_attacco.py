"""Fascicolo delle frasi d'attacco: una riga per domanda (codice, domanda, frase «In una frase»).
Uso: python3 frasi_attacco.py orale.json output.pdf
Serve per il ripasso rapido (fascia C, ultimi due giorni). Le schede complete restano nei fascicoli per colore.
"""
import json, sys
from xml.sax.saxutils import escape
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table,
                                TableStyle, PageBreak)
from fascicolo import S, INK, MUTED, ACCENT, RULE, ordina, evidenzia, imposta_articoli, LEGENDA_ART

GRUPPI = [('1 · ROSSO', 'Diritto del lavoro', ['DL']),
          ('2 · BLU', 'Legislazione sociale INPS e INAIL', ['INPS', 'INAIL']),
          ('3 · VERDE', 'Diritto privato, pubblico e penale', ['PPP']),
          ('4 · GIALLO', 'Diritto tributario e ragioneria', ['TRIB', 'RAG']),
          ('5 · ARANCIONE', 'Ordinamento e deontologia', ['DEO'])]

CODICE = ParagraphStyle('cod', fontName='Sans-B', fontSize=7.8, leading=10, textColor=ACCENT)
DOMANDA = ParagraphStyle('dom', fontName='Serif-B', fontSize=10.6, leading=13, textColor=ACCENT)
FRASE = ParagraphStyle('fr', fontName='Serif', fontSize=10, leading=12.8, textColor=INK, spaceBefore=1)
RINVIO = ParagraphStyle('rv', fontName='Serif', fontSize=9, leading=11.2, textColor=INK)


def casella():
    t = Table([['']], colWidths=[0.38 * cm], rowHeights=[0.38 * cm])
    t.setStyle(TableStyle([('BOX', (0, 0), (-1, -1), 0.7, MUTED)]))
    return t


def costruisci(dati, out):
    imposta_articoli(dati.get('artchiave'))
    nomi = {m['k']: m['nome'] for m in dati['materie']}
    per_id = {d['id']: d for d in dati['domande']}
    W = A4[0] - 2 * cm - 1.8 * cm

    def piede(canv, doc):
        canv.saveState()
        canv.setFont('Sans', 7.5); canv.setFillColor(MUTED)
        canv.drawString(2 * cm, 1.1 * cm, "Orale CdL 2026 · Frasi d'attacco · dati simulatore %s" % dati['versione'])
        canv.drawRightString(A4[0] - 1.8 * cm, 1.1 * cm, 'pag. %d' % doc.page)
        canv.restoreState()

    doc = BaseDocTemplate(out, pagesize=A4, title="Frasi d'attacco — orale CdL 2026",
                          author='Andrea Marziali (con Claude)')
    frame = Frame(2 * cm, 1.7 * cm, W, A4[1] - 3.3 * cm, id='f', leftPadding=0, rightPadding=0)
    doc.addPageTemplates([PageTemplate(id='p', frames=[frame], onPage=piede)])

    st = [Paragraph("Frasi d'attacco — prova orale", S['title']),
          Paragraph('Esame di Stato CdL 2026, Marche. Una riga per domanda: la frase con cui aprire la risposta. '
                    'Le schede complete (punti, norme, aggancio, fonti) sono nei cinque fascicoli per colore.', S['sub']),
          Paragraph('Come usarlo', S['h2'])]
    for riga in ['1. Copri la frase con un foglio, leggi solo la domanda e di\' a voce la tua frase d\'attacco.',
                 '2. Scopri e confronta: conta la sostanza (istituto, norma, regola), non le parole identiche.',
                 '3. Se l\'hai detta bene, spunta la casella. Se no, torna alla scheda nel fascicolo del colore.',
                 '4. Ultimi due giorni: rifai solo le righe senza spunta. In fondo a ogni colore ci sono le domande 2022 '
                 'che si risolvono con un\'altra scheda.', LEGENDA_ART]:
        st.append(Paragraph(riga, S['body'])); st.append(Spacer(1, 2))

    tot = 0
    for g, (colore, titolo, materie) in enumerate(GRUPPI):
        st.append(PageBreak())
        st.append(Paragraph('BUSTA ' + colore, S['eyebrow']))
        st.append(Paragraph(escape(titolo), S['title']))
        for m in materie:
            domande = sorted([d for d in dati['domande'] if d['m'] == m and d['r']], key=ordina)
            if len(materie) > 1:
                st.append(Paragraph(escape(nomi[m]), S['h2']))
            righe, stile = [], [('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LINEBELOW', (0, 0), (-1, -1), 0.3, RULE),
                                ('TOPPADDING', (0, 0), (-1, -1), 4), ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
                                ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 6)]
            for i, d in enumerate(domande):
                testo = [Paragraph(evidenzia(d['testo']), DOMANDA), Paragraph(evidenzia(d['r']['sintesi']), FRASE)]
                righe.append([Paragraph(escape(d['id']), CODICE), testo, casella()])
            t = Table(righe, colWidths=[1.9 * cm, W - 1.9 * cm - 0.55 * cm, 0.55 * cm], rowHeights=None)
            stile += [('TOPPADDING', (2, 0), (2, -1), 6), ('RIGHTPADDING', (2, 0), (2, -1), 0)]
            t.setStyle(TableStyle(stile))
            st.append(t)
            tot += len(domande)
        rinvii = [x for x in dati.get('rinvii', []) if x['m'] in materie]
        if rinvii:
            st.append(Paragraph('Domande 2022 che si risolvono con un\'altra scheda', S['h2']))
            rr = []
            for x in sorted(rinvii, key=lambda x: (x['id'].rsplit('-', 1)[0], int(x['id'].rsplit('-', 1)[1]))):
                dest = per_id.get(x['vedi'])
                rr.append([Paragraph(escape(x['id']), CODICE), Paragraph(escape(x['testo']), RINVIO),
                           Paragraph('→ <b>%s</b>%s' % (escape(x['vedi']),
                                     (' · ' + escape(dest['testo'])) if dest else ''), RINVIO)])
            t = Table(rr, colWidths=[2.1 * cm, (W - 2.1 * cm) * 0.5, (W - 2.1 * cm) * 0.5], repeatRows=0)
            t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LINEBELOW', (0, 0), (-1, -1), 0.3, RULE),
                                   ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
                                   ('LEFTPADDING', (0, 0), (-1, -1), 0)]))
            st.append(t)
    doc.build(st)
    return tot


if __name__ == '__main__':
    dati = json.load(open(sys.argv[1], encoding='utf-8'))
    n = costruisci(dati, sys.argv[2])
    print(n, "frasi d'attacco ->", sys.argv[2])
