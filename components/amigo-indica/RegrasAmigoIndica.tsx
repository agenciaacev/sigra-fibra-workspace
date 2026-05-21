'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Quem pode participar do programa?',
    a: 'Qualquer assinante pessoa física com internet banda larga fixa residencial ativo na Siga Fibra, em situação adimplente, dentro da área de atuação da empresa.',
  },
  {
    q: 'Como devo fazer a indicação?',
    a: 'Exclusivamente pelo link gerado no app Siga Fibra ou pelo banner "Amigo Indica" no site oficial. Indicações verbais ou por outros meios não são válidas.',
  },
  {
    q: 'Qual é o prazo de validade da indicação?',
    a: 'Cada indicação tem validade de 5 dias a contar do envio do formulário. Se o amigo não confirmar nesse prazo, a indicação é cancelada e você precisará enviar uma nova.',
  },
  {
    q: 'Quando o desconto é aplicado na minha fatura?',
    a: 'No mês seguinte à confirmação da indicação. A confirmação ocorre após instalação, ativação, assinatura do contrato e pagamento da primeira fatura pelo seu amigo.',
  },
  {
    q: 'Posso indicar várias pessoas?',
    a: 'Sim, sem limite. Porém o desconto é de um por mês. Se duas indicações forem confirmadas no mesmo mês, os descontos serão aplicados em meses subsequentes.',
  },
  {
    q: 'Posso indicar alguém que já é cliente?',
    a: 'Não. O amigo precisa ser um novo cliente. Também não é permitido indicar a si mesmo.',
  },
  {
    q: 'O desconto pode ser transferido ou virar dinheiro?',
    a: 'Não. É intransferível, exclusivo para o plano do Assinante Indicador, não podendo ser convertido em dinheiro nem cedido para outro assinante.',
  },
  {
    q: 'Quais planos são elegíveis?',
    a: 'Banda Larga Fixa Residencial de 200Mb, 400Mb, 500Mb, 600Mb, 700Mb e 1000Mb, tanto para o indicador quanto para o amigo indicado.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(39,202,163,0.18)', background: 'rgba(255,255,255,0.04)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        style={{ background: open ? 'rgba(39,202,163,0.08)' : 'transparent' }}
      >
        <span className="font-semibold text-sm text-white">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(39,202,163,0.15)',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(45deg)' : 'none',
          }}>
          <svg width="14" height="14" fill="none" stroke="#27CAA3" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1">
          <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function RegrasAmigoIndica() {
  return (
    <section className="py-16 md:py-24" style={{ background: '#060d0f' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-2">
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Perguntas frequentes
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              Regras do programa
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-400 leading-relaxed mb-8">
              Promoção válida de 01/05/2023 a 31/12/2026. Exclusivo para assinaturas residenciais dentro da área de cobertura Siga Fibra.
            </p>

            <div data-aos="fade-up" data-aos-delay="140"
              className="rounded-2xl p-5 mb-6"
              style={{ background: 'rgba(39,202,163,0.07)', border: '1px solid rgba(39,202,163,0.2)' }}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(39,202,163,0.15)' }}>
                  <svg width="16" height="16" fill="none" stroke="#27CAA3" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Atenção</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    O desconto só é concedido se a venda ocorrer pelo canal oficial. Vendas por outros canais não geram o benefício.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="180">
              <p className="text-xs text-gray-600 mb-3">Dúvidas? Fale conosco</p>
              <div className="flex flex-col gap-2">
                <a href="tel:8531989550"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150 hover:text-white"
                  style={{ color: '#27CAA3' }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (85) 3198-9550
                </a>
                <a href="tel:8531989560"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150 hover:text-white"
                  style={{ color: '#27CAA3' }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (85) 3198-9560
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div data-aos="fade-up" data-aos-delay="60" className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
