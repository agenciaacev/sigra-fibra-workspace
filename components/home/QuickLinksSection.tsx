'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  return (
    <section style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
          {links.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.to)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-150 flex-shrink-0"
              style={{ color: 'var(--text-sub)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#27CAA3'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-sub)' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#27CAA3' }} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
