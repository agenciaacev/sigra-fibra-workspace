import React from 'react'
import {
  Document, Page, View, Text, Image, StyleSheet,
} from '@react-pdf/renderer'
import { CartState } from './CheckoutFlow'
import { CHIP_PLANS } from '@/lib/plans'

const C = {
  teal:      '#03C2C3',
  tealLight: '#e6fafa',
  dark:      '#0f2d22',
  gray:      '#6b7280',
  lightGray: '#f9fafb',
  border:    '#e5e7eb',
  red:       '#ef4444',
}

const s = StyleSheet.create({
  page:         { fontFamily: 'Helvetica', fontSize: 9, color: '#111827', padding: 32, backgroundColor: '#fff' },

  // header
  header:       { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: `2px solid ${C.teal}` },
  headerText:   { fontSize: 9, color: C.gray, maxWidth: 280 },
  logo:         { width: 100, height: 32, objectFit: 'contain' },

  // section title bar
  sectionBar:   { flexDirection: 'row', alignItems: 'center', backgroundColor: C.tealLight, paddingVertical: 6, paddingHorizontal: 10, marginBottom: 8, marginTop: 14, borderLeft: `3px solid ${C.teal}` },
  sectionTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: C.dark },

  // table rows
  row:          { flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, borderBottom: `1px solid ${C.border}` },
  rowAlt:       { flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, borderBottom: `1px solid ${C.border}`, backgroundColor: C.lightGray },
  label:        { width: 160, fontSize: 9, color: C.gray },
  value:        { flex: 1, fontSize: 9, color: '#111827' },
  valueBold:    { flex: 1, fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#111827' },

  // total box
  totalBox:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: C.tealLight, padding: 10, marginTop: 14, borderLeft: `3px solid ${C.teal}` },
  totalLabel:   { fontSize: 10, fontFamily: 'Helvetica-Bold', color: C.dark },
  totalValue:   { fontSize: 13, fontFamily: 'Helvetica-Bold', color: C.teal },

  footer:       { marginTop: 24, paddingTop: 10, borderTop: `1px solid ${C.border}`, fontSize: 8, color: C.gray, textAlign: 'center' },
})

const fmt = (v: number) => `R$ ${v.toFixed(2).replace('.', ',')}`

function Row({ label, value, bold, alt }: { label: string; value: string; bold?: boolean; alt?: boolean }) {
  return (
    <View style={alt ? s.rowAlt : s.row}>
      <Text style={s.label}>{label}</Text>
      <Text style={bold ? s.valueBold : s.value}>{value}</Text>
    </View>
  )
}

function SectionBar({ title }: { title: string }) {
  return (
    <View style={s.sectionBar}>
      <Text style={s.sectionTitle}>{title}</Text>
    </View>
  )
}

interface Props {
  cart: CartState
  total: number
  logoUrl: string
}

export default function EtiquetaPDF({ cart, total, logoUrl }: Props) {
  const today = new Date().toLocaleDateString('pt-BR')
  const priceAfterTotal = cart.plan.priceAfter + cart.addons.reduce((s, a) => s + a.price, 0)

  // build offer name
  const offerParts = [cart.plan.detail]
  for (const a of cart.addons) {
    if (a.id.startsWith('movel-')) offerParts.push(a.name)
    else if (a.id.startsWith('entretenimento-')) offerParts.push(`Playhub ${a.name.replace('Playhub ', '')}`)
    else offerParts.push(a.name)
  }

  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <View>
            <Text style={{ fontSize: 11, fontFamily: 'Helvetica-Bold', color: C.dark, marginBottom: 3 }}>
              É um prazer ter você como nosso cliente!
            </Text>
            <Text style={s.headerText}>
              Abaixo está o resumo completo da sua contratação com a Siga Fibra.
            </Text>
          </View>
          <Image style={s.logo} src={logoUrl} />
        </View>

        {/* Oferta Contratada */}
        <SectionBar title="Oferta Contratada" />
        <Row label="Nome da Oferta:"       value={offerParts.join(' + ')} alt />
        <Row label="Prazo de Vigência:"    value="12 meses" />
        <Row label="Modalidade:"           value="Pós-Pago" alt />
        <Row label="Data de Contratação:"  value={today} />

        {/* Internet */}
        <SectionBar title={`Internet / ${cart.plan.detail}`} />
        <Row label="Tecnologia:"           value="GPON (Fibra Óptica)" alt />
        <Row label="Franquia de Dados:"    value="Sem franquia — uso ilimitado" />
        <Row label="Preço até vencimento:" value={`${fmt(cart.plan.price)}/mês`} bold alt />
        <Row label="Preço após vencimento:" value={`${fmt(cart.plan.priceAfter)}/mês`} />

        {/* Chip */}
        {cart.addons.filter(a => a.id.startsWith('movel-')).map(a => {
          const chip = CHIP_PLANS.find(c => c.id === a.id)
          return (
            <View key={a.id}>
              <SectionBar title={`Chip Móvel / ${a.name}`} />
              <Row label="Dados:"              value={chip ? `${chip.gb} GB` : '—'} alt />
              <Row label="Ligações:"           value="Ilimitadas para todas as operadoras" />
              <Row label="Apps liberados:"     value="WhatsApp e Waze inclusos" alt />
              <Row label="Preço:"              value={`${fmt(a.price)}/mês`} bold />
            </View>
          )
        })}

        {/* Playhub */}
        {cart.addons.filter(a => a.id.startsWith('entretenimento-')).map(a => {
          const tier = a.name.replace('Playhub ', '')
          return (
            <View key={a.id}>
              <SectionBar title={`Playhub / ${tier}`} />
              {a.selectedApp && <Row label="Plataforma selecionada:" value={a.selectedApp} alt />}
              <Row label="Acesso:"  value="Aplicativo disponível via app store ou navegador" />
              <Row label="Preço:"   value={`${fmt(a.price)}/mês`} bold alt />
            </View>
          )
        })}

        {/* Telefone Fixo */}
        {cart.addons.filter(a => a.id === 'fixo').map(a => (
          <View key={a.id}>
            <SectionBar title="Telefone Fixo" />
            <Row label="Ligações:" value="Ilimitadas para qualquer operadora" alt />
            <Row label="Preço:"    value={`${fmt(a.price)}/mês`} bold />
          </View>
        ))}

        {/* Preços e condições */}
        <SectionBar title="Preços e Condições" />
        <Row label="Fidelização:"            value="12 meses" alt />
        <Row label="Multa por rescisão:"     value="Proporcional ao benefício e ao tempo restante" />
        <Row label="Critérios de reajuste:"  value="Anual pelo IPCA" alt />
        <Row label="Pagamento:"              value="Boleto, cartão de crédito ou débito automático" />
        <Row label="Vencimentos disponíveis:" value="03, 07, 12 ou 21 de cada mês" alt />

        {/* Total */}
        <View style={s.totalBox}>
          <View>
            <Text style={s.totalLabel}>Preço até o vencimento</Text>
            <Text style={{ fontSize: 8, color: C.gray, marginTop: 2 }}>
              Após o vencimento: {fmt(priceAfterTotal)}/mês
            </Text>
          </View>
          <Text style={s.totalValue}>{fmt(total)}/mês</Text>
        </View>

        {/* Canais de Atendimento */}
        <SectionBar title="Canais de Atendimento" />
        <Row label="WhatsApp / Atendimento:" value="(85) 3198-9550" alt />
        <Row label="Site oficial:"           value="sigafibra.com.br" />

        {/* Footer */}
        <Text style={s.footer}>
          Siga Fibra Telecomunicações · Este documento é um resumo informativo da sua contratação.
        </Text>

      </Page>
    </Document>
  )
}
