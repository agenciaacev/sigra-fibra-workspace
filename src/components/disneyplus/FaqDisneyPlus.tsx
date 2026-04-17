import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  { q: 'Posso usar em vários dispositivos ao mesmo tempo?', a: 'Sim! Com o Disney+ você pode assistir em até 4 dispositivos simultaneamente, incluindo Smart TV, celular, tablet e computador.' },
  { q: 'Já tenho uma conta Disney+. Como faço a migração?', a: 'Basta acessar o link de ativação da Siga Fibra, informar seu número e vincular sua conta existente. O processo leva menos de 2 minutos.' },
  { q: 'Quanto tempo leva para ativar?', a: 'A ativação é instantânea — assim que você confirmar o SMS, seu acesso ao Disney+ já estará disponível.' },
  { q: 'O Disney+ já está incluso no meu plano?', a: 'Depende do seu plano. O Disney+ está incluso nos planos Premium da Siga Fibra sem custo extra. Em outros planos, é possível adicionar com um pequeno acréscimo na fatura.' },
  { q: 'Posso baixar conteúdo para assistir offline?', a: 'Sim, no plano Premium você pode baixar filmes e séries para assistir sem internet, no celular ou tablet.' },
  { q: 'Preciso de cartão de crédito para assinar?', a: 'Não! O Disney+ é cobrado diretamente na sua fatura Siga Fibra, sem necessidade de cartão de crédito.' },
]

function FaqItemComponent({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div data-aos="fade-up" data-aos-delay={index * 60}
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{ border: `1px solid ${open ? 'rgba(0,99,229,0.4)' : '#efefef'}`, background: open ? '#f8fbff' : '#fff' }}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-4">
        <p className="font-semibold text-gray-900 text-sm leading-relaxed">{item.q}</p>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-white"
          style={{ background: open ? '#0063e5' : '#f0f0f0' }}>
          <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke={open ? 'white' : '#999'} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqDisneyPlus() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Dúvidas frequentes
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Com tantas vantagens, é normal ter dúvidas.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 leading-relaxed">
            Respondemos tudo abaixo.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => <FaqItemComponent key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
