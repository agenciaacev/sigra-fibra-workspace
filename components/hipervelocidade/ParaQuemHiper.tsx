'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const useCases = [
  {
    icon: '🎮',
    title: 'Gamers e streamers',
    desc: 'Ping ultrabaixo, zero lag e upload simétrico para transmitir ao vivo em 4K sem cair.',
    stat: '< 1ms',
    statLabel: 'de latência',
  },
  {
    icon: '🏠',
    title: 'Casa com muitos dispositivos',
    desc: 'Suporta mais de 50 dispositivos simultâneos sem queda de velocidade. Smart home completa.',
    stat: '50+',
    statLabel: 'dispositivos',
  },
  {
    icon: '💼',
    title: 'Home office exigente',
    desc: 'Videoconferências em 4K, acesso a servidores remotos e backup em nuvem em tempo real.',
    stat: '100%',
    statLabel: 'simétrico',
  },
  {
    icon: '📺',
    title: 'Entretenimento sem limites',
    desc: 'Streaming 8K, downloads instantâneos e múltiplas telas rodando ao mesmo tempo.',
    stat: '8K',
    statLabel: 'streaming',
  },
]

const compare = [
  { feature: 'Velocidade', nitro: 'Até 1 Gb', hiper: 'Até 2.5 Gb' },
  { feature: 'Upload', nitro: 'Até 500 Mb', hiper: 'Igual ao download' },
  { feature: 'Roteador', nitro: 'Padrão', hiper: 'Premium incluso' },
  { feature: 'Ideal para', nitro: 'Uso diário', hiper: 'Alta demanda' },
]

export default function ParaQuemHiper() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden" style={{ background: '#04101e' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(3,194,195,0.08), transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* — Use cases — */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#03C2C3' }}
          >
            HIPER é para você
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Para quem não aceita limites
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Criada para os cenários mais exigentes. Se você usa a internet de verdade, a HIPER foi feita pra você.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          {useCases.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(3,194,195,0.12)',
              }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
              <div
                className="mt-5 pt-4 flex items-baseline gap-1"
                style={{ borderTop: '1px solid rgba(3,194,195,0.1)' }}
              >
                <span
                  className="text-2xl font-extrabold"
                  style={{ color: '#03C2C3' }}
                >
                  {item.stat}
                </span>
                <span className="text-xs text-gray-600">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-20" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />

        {/* — HIPER vs NITRO — */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#03C2C3' }}
          >
            Comparativo
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Siga NITRO vs Siga HIPER
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Já tem internet com a Siga? Veja por que fazer o upgrade para a nova geração.
          </p>
        </div>

        {/* Compare table */}
        <div
          data-aos="fade-up"
          data-aos-delay="60"
          className="rounded-2xl overflow-hidden max-w-[700px] mx-auto"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Header */}
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="px-6 py-4" style={{ background: 'rgba(255,255,255,0.03)' }} />
            <div
              className="px-6 py-4 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500">Siga NITRO</p>
              <p className="text-xs text-gray-600 mt-0.5">Até 1 Gb</p>
            </div>
            <div
              className="px-6 py-4 text-center"
              style={{ background: 'rgba(3,194,195,0.08)', borderLeft: '1px solid rgba(3,194,195,0.2)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#03C2C3' }}>Siga HIPER</p>
              <p className="text-xs mt-0.5" style={{ color: '#03C2C3', opacity: 0.7 }}>Até 2.5 Gb</p>
            </div>
          </div>

          {/* Rows */}
          {compare.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3"
              style={{ borderBottom: i < compare.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <div className="px-6 py-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <p className="text-sm text-gray-400">{row.feature}</p>
              </div>
              <div
                className="px-6 py-4 text-center"
                style={{ background: 'rgba(255,255,255,0.01)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}
              >
                <p className="text-sm text-gray-500">{row.nitro}</p>
              </div>
              <div
                className="px-6 py-4 text-center flex items-center justify-center gap-1.5"
                style={{ background: 'rgba(3,194,195,0.04)', borderLeft: '1px solid rgba(3,194,195,0.12)' }}
              >
                <span style={{ color: '#03C2C3', fontSize: '12px' }}>✓</span>
                <p className="text-sm font-semibold text-white">{row.hiper}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="100" className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-5">
            Pronto para dar o próximo nível?
          </p>
          <button
            onClick={() => document.getElementById('planos-hiper')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
            style={{ background: 'linear-gradient(135deg, #03C2C3, #0ea5e9)' }}
          >
            Quero a HIPER
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  )
}
