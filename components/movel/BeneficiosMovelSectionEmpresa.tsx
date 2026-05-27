'use client'

import React from 'react'

const benefits = [
  {
    icon: '📞',
    title: 'Ligações ilimitadas',
    desc: 'Ligue à vontade para qualquer fixo ou móvel de qualquer operadora do Brasil, sem se preocupar com o tempo de chamada.',
    detail: 'TIM, Claro, Vivo, Oi e todas as operadoras',
  },
  {
    icon: '💬',
    title: 'WhatsApp sempre liberado',
    desc: 'Troque mensagens, envie fotos, vídeos e áudios sem consumir sua franquia de dados. Disponível 24h por dia.',
    detail: '* Ligações e chamadas de vídeo pelo WhatsApp consomem franquia',
  },
  {
    icon: '🗺️',
    title: 'Waze liberado',
    desc: 'Navegue pelo Waze em qualquer trajeto sem consumir a sua internet. Ideal para quem passa muito tempo no trânsito.',
    detail: 'GPS e alertas de trânsito sempre ativos',
  },
  {
    icon: '🔄',
    title: 'Portabilidade gratuita',
    desc: 'Mantenha seu número atual ao mudar para a Siga. O processo é simples, sem custo e sem interrupção do serviço.',
    detail: 'De qualquer operadora, sem burocracia',
  },
]

export default function BeneficiosMovelSectionEmpresa() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060d0f' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(3,194,195,0.07), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
            Incluso em todos os planos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Tudo o que você precisa, já incluso
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Independente do plano escolhido, esses benefícios estão garantidos sem custo extra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="60">
          {benefits.map((b, i) => (
            <div key={i}
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(3,194,195,0.1)', border: '1px solid rgba(3,194,195,0.2)' }}
                >
                  {b.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{b.desc}</p>
                  <span className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(3,194,195,0.1)', color: '#03C2C3' }}
                  >
                    {b.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
