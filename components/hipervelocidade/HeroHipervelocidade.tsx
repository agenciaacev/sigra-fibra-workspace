'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const specs = [
  { label: 'Download', flow: '2 Gb/s', max: '2.5 Gb/s' },
  { label: 'Upload', flow: '2 Gb/s', max: '2.5 Gb/s' },
  { label: 'Roteador', flow: 'Premium incluso', max: 'Premium incluso' },
]

export default function HeroHipervelocidade() {
  const router = useRouter()

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ background: '#04101e', minHeight: '92vh' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glows — azul ciano da logo */}
      <div
        className="absolute -top-32 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(3,194,195,0.15), transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,202,163,0.10), transparent 60%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.05), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(3,194,195,0.10)',
                border: '1px solid rgba(3,194,195,0.3)',
                color: '#03C2C3',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#03C2C3' }} />
              Siga Hiper — A Nova Geração
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="60"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.06] mb-5"
            >
              A era da{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #03C2C3, #0ea5e9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hipervelocidade
              </span>
              <br />chegou.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="text-base lg:text-lg leading-relaxed mb-8 text-gray-400 max-w-[500px]"
            >
              <span className="text-white font-semibold">HIPER</span> é a nova geração de internet da Siga Fibra,
              criada para quem precisa de velocidade além do Gigabit. Upload e download simétricos,
              roteador premium incluso e rede exclusiva de alta capacidade.
            </p>

            {/* Speed badges */}
            <div data-aos="fade-up" data-aos-delay="160" className="flex items-center gap-4 mb-8">
              <div
                className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl"
                style={{
                  background: 'rgba(3,194,195,0.08)',
                  border: '1.5px solid rgba(3,194,195,0.25)',
                }}
              >
                <span className="text-3xl font-black text-white leading-none">2</span>
                <span className="text-sm font-bold" style={{ color: '#03C2C3' }}>Gb</span>
                <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">HIPER FLOW</span>
              </div>
              <div className="text-gray-700 font-bold text-lg">/</div>
              <div
                className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl"
                style={{
                  background: 'rgba(14,165,233,0.12)',
                  border: '1.5px solid rgba(14,165,233,0.35)',
                  boxShadow: '0 0 32px rgba(3,194,195,0.12)',
                }}
              >
                <span className="text-3xl font-black text-white leading-none">2.5</span>
                <span className="text-sm font-bold" style={{ color: '#0ea5e9' }}>Gb</span>
                <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">HIPER MAX</span>
              </div>
              <div className="flex flex-col gap-2 ml-2">
                {['Simétrico', 'Sem limite', 'Roteador pro'].map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(39,202,163,0.08)',
                      border: '1px solid rgba(39,202,163,0.18)',
                      color: '#27CAA3',
                    }}
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('planos-hiper')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold px-8 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: 'linear-gradient(135deg, #03C2C3, #0ea5e9)' }}
              >
                Ver planos HIPER
              </button>
              <button
                onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                className="font-semibold px-8 py-4 rounded-2xl text-sm text-gray-300 transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                Falar com consultor
              </button>
            </div>
          </div>

          {/* Right — spec comparison card */}
          <div data-aos="fade-left" data-aos-delay="180" className="hidden lg:block">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                border: '1px solid rgba(3,194,195,0.2)',
                boxShadow: '0 0 60px rgba(3,194,195,0.08)',
              }}
            >
              <div
                className="px-8 pt-7 pb-6"
                style={{ background: 'rgba(3,194,195,0.07)', borderBottom: '1px solid rgba(3,194,195,0.12)' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: '#03C2C3' }}
                >
                  Linha HIPER — Comparativo
                </p>
                <p className="text-sm text-gray-500">Velocidade simétrica. Upload = Download.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div
                  className="grid grid-cols-3 px-8 py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide" />
                  <span
                    className="text-xs font-bold uppercase tracking-wide text-center"
                    style={{ color: '#03C2C3' }}
                  >
                    HIPER FLOW
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-wide text-center"
                    style={{ color: '#0ea5e9' }}
                  >
                    HIPER MAX
                  </span>
                </div>

                {specs.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center px-8 py-4"
                    style={{ borderBottom: i < specs.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                  >
                    <span className="text-sm text-gray-500">{row.label}</span>
                    <span className="text-sm font-bold text-white text-center">{row.flow}</span>
                    <span className="text-sm font-bold text-white text-center">{row.max}</span>
                  </div>
                ))}

                <div
                  className="grid grid-cols-3 items-center px-8 py-5 mt-1"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(3,194,195,0.04)',
                  }}
                >
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">A partir de</span>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">R$ </span>
                    <span className="text-xl font-extrabold" style={{ color: '#03C2C3' }}>159</span>
                    <span className="text-xs text-gray-500">,90</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">R$ </span>
                    <span className="text-xl font-extrabold" style={{ color: '#0ea5e9' }}>199</span>
                    <span className="text-xs text-gray-500">,90</span>
                  </div>
                </div>
              </div>

              <div
                className="px-8 py-5 flex items-center justify-between gap-4"
                style={{ borderTop: '1px solid rgba(3,194,195,0.15)', background: 'rgba(0,0,0,0.2)' }}
              >
                <span className="text-xs text-gray-600">Sem fidelidade · Instalação inclusa</span>
                <button
                  onClick={() => document.getElementById('planos-hiper')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm text-white flex-shrink-0 transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #03C2C3, #0ea5e9)' }}
                >
                  Assinar →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="240"
          className="mt-16 pt-10 grid grid-cols-3 gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {[
            { value: '2.5', unit: 'Gb', label: 'Velocidade máxima' },
            { value: '100%', unit: '', label: 'Velocidade simétrica' },
            { value: '24h', unit: '', label: 'Suporte dedicado' },
          ].map((s, i) => (
            <div
              key={i}
              className={`text-center ${i < 2 ? 'border-r' : ''}`}
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</span>
                {s.unit && (
                  <span className="text-lg font-bold" style={{ color: '#03C2C3' }}>{s.unit}</span>
                )}
              </div>
              <p className="text-xs text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
