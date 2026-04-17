import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Link {
  label: string
  desc: string
  to: string
}

const links: Link[] = [
  { label: 'Internet Fibra', desc: 'Velocidade real para toda a casa', to: '/pessoa-fisica/internet-fibra' },
  { label: 'Celular', desc: 'Planos pré, controle e pós-pago', to: '/pessoa-fisica/celular/pre-pago' },
  { label: 'Serviços Digitais', desc: 'Streaming e entretenimento', to: '/pessoa-fisica/servicos-digitais/disney-plus' },
  { label: 'Atendimento', desc: 'Suporte quando você precisar', to: '/pessoa-fisica/atendimento/canais' },
]

export default function QuickLinksSection() {
  const navigate = useNavigate()
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p data-aos="fade-up" className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
          O que você precisa?
        </p>
        <h2 data-aos="fade-up" data-aos-delay="60" className="text-center text-2xl sm:text-3xl font-extrabold mb-14 text-gray-900">
          Explore nossas soluções
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((item, i) => (
            <button
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              onClick={() => navigate(item.to)}
              className="group text-left p-5 sm:p-7 rounded-2xl border-2 border-gray-100 bg-white transition-all duration-200"
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#27CAA3'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(39,202,163,0.12)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#f3f4f6'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none' }}
            >
              <div className="w-10 h-10 rounded-xl mb-5" style={{ background: '#27CAA3' }} />
              <p className="font-bold text-base mb-1.5 text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
