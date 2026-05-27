'use client'

import React from 'react'

const benefits = [
  {
    title: 'Ligações ilimitadas',
    desc: 'Fixo e celular, local e nacional. Sua equipe liga à vontade para qualquer destino no Brasil sem custo adicional.',
    detail: 'Fixo e celular em todo o Brasil',
  },
  {
    title: 'Planos por porte de empresa',
    desc: 'Temos planos adaptados ao volume de chamadas e ao tamanho da sua operação. Fale com nosso canal empresarial.',
    detail: 'Consulte planos disponíveis',
  },
  {
    title: 'Identificador de chamadas',
    desc: 'Saiba quem liga antes de atender. Ideal para times comerciais e de atendimento ao cliente.',
    detail: '* Requer aparelho compatível',
  },
  {
    title: 'Número fixo profissional',
    desc: 'Transmita credibilidade ao seu negócio com um número fixo local, sem depender de celular pessoal.',
    detail: 'DDD local da sua cidade',
  },
  {
    title: 'Sem chamadas a cobrar',
    desc: 'O recebimento de chamadas a cobrar vem bloqueado por padrão, evitando cobranças indevidas na conta da empresa.',
    detail: 'Bloqueio ativo por padrão',
  },
  {
    title: 'Portabilidade gratuita',
    desc: 'Mantenha o número fixo que seus clientes já conhecem. A Siga Fibra cuida de todo o processo de migração.',
    detail: 'Número ativo na mesma área local',
  },
]

export default function BeneficiosFixoEmpresaSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
            Benefícios empresariais
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-dark)' }}>
            Telefonia que acompanha{' '}
            <span style={{ color: '#03C2C3' }}>sua operação</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Do time de vendas ao atendimento ao cliente, garanta comunicação eficiente com planos sob medida para empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="60">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl p-6"
              style={{ background: 'var(--card-bg)', border: '1px solid rgba(3,194,195,0.15)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(3,194,195,0.1)', border: '1px solid rgba(3,194,195,0.2)' }}
              >
                <span style={{ color: '#03C2C3', fontWeight: 900 }}>✓</span>
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-dark)' }}>{b.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{b.desc}</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: 'rgba(3,194,195,0.1)', color: '#03C2C3' }}
              >
                {b.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
