'use client'

import React from 'react'

const benefits = [
  {
    title: 'Fixo local ilimitado',
    desc: 'Ligue para qualquer telefone fixo da sua cidade sem se preocupar com o tempo de duração da chamada.',
    detail: 'Sem limite de chamadas',
  },
  {
    title: 'Fixo nacional ilimitado',
    desc: 'Alcance qualquer fixo em todo o Brasil. Sem tarifas interurbanas, sem surpresas na conta.',
    detail: 'Brasil inteiro incluso',
  },
  {
    title: 'Celular local ilimitado',
    desc: 'Ligue para celulares de qualquer operadora na sua região sem consumir créditos adicionais.',
    detail: 'Todas as operadoras',
  },
  {
    title: 'Celular nacional ilimitado',
    desc: 'Alcance qualquer celular no país, independente da operadora ou estado. Tudo no mesmo plano.',
    detail: 'Qualquer operadora no Brasil',
  },
  {
    title: 'Identificador de chamadas',
    desc: 'Saiba quem está ligando antes de atender. Basta ter um aparelho com suporte à identificação.',
    detail: '* Requer aparelho compatível',
  },
  {
    title: 'Portabilidade gratuita',
    desc: 'Mantenha seu número de telefone fixo atual. A Siga cuida de todo o processo de mudança para você.',
    detail: 'Número precisa estar ativo na mesma área',
  },
]

const obs = [
  '* O aparelho telefônico não é fornecido pela Siga Fibra.',
  '** Qualquer aparelho telefônico convencional pode ser utilizado na nossa linha.',
  '*** Para usar o identificador de chamadas, o aparelho precisa ter suporte a essa função.',
]

export default function BeneficiosFixoSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Incluso no plano
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-dark)' }}>
            Tudo que você precisa,{' '}
            <span style={{ color: '#27CAA3' }}>em um só plano</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Por R$ 39,90/mês você tem acesso a todos os benefícios abaixo, sem taxas escondidas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="60">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl p-6"
              style={{ background: 'var(--card-bg)', border: '1px solid rgba(39,202,163,0.15)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.2)' }}
              >
                <span style={{ color: '#27CAA3', fontWeight: 900 }}>✓</span>
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-dark)' }}>{b.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{b.desc}</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: 'rgba(39,202,163,0.1)', color: '#27CAA3' }}
              >
                {b.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl px-6 py-5" data-aos="fade-up" data-aos-delay="80"
          style={{ background: 'var(--card-bg)', border: '1px solid rgba(39,202,163,0.1)' }}
        >
          {obs.map((o, i) => (
            <p key={i} className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{o}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
