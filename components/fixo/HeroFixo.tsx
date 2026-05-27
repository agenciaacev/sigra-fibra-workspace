'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function HeroFixo() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden flex items-center" style={{ background: '#060d0f', minHeight: '80vh' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,202,163,0.14), transparent 65%)' }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08), transparent 65%)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div data-aos="fade-up"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 text-white"
              style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.22)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#27CAA3' }} />
              Siga Fibra — Telefonia Fixa
            </div>

            <h1 data-aos="fade-up" data-aos-delay="60"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5"
            >
              Ligue à vontade,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #27CAA3, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                sem limite.
              </span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="120"
              className="text-base lg:text-lg leading-relaxed mb-8 text-gray-400 max-w-[480px]"
            >
              Ligações ilimitadas para fixo e celular em todo o Brasil, identificador de chamadas incluso e portabilidade gratuita.
            </p>

            <div data-aos="fade-up" data-aos-delay="160" className="grid grid-cols-2 gap-3 mb-8 max-w-[420px]">
              {[
                { label: 'Fixo local ilimitado' },
                { label: 'Fixo nacional ilimitado' },
                { label: 'Celular local ilimitado' },
                { label: 'Celular nacional ilimitado' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(39,202,163,0.07)', border: '1px solid rgba(39,202,163,0.15)' }}
                >
                  <span className="flex-shrink-0" style={{ color: '#27CAA3' }}>✓</span>
                  <span className="text-sm font-semibold text-white">{c.label}</span>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                className="font-bold px-8 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: '#27CAA3' }}
              >
                Contratar Siga Fixo
              </button>
              <button
                onClick={() => document.getElementById('faq-fixo')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-semibold px-8 py-4 rounded-2xl text-sm text-gray-300 transition-all duration-200 hover:border-[#27CAA3] hover:text-[#27CAA3]"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Ver dúvidas frequentes
              </button>
            </div>
          </div>

          {/* Right — price card */}
          <div data-aos="fade-left" data-aos-delay="180" className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl p-8" style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#27CAA3' }}>
                  Plano Siga Fixo
                </p>
                <p className="text-xs text-gray-500 mb-6">SIGA FIXO ILIMITADO</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg text-gray-400">R$</span>
                  <span className="text-6xl font-black text-white">39</span>
                  <span className="text-2xl text-gray-400">,90/mês</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">Um único plano, tudo incluso</p>

                <div className="flex flex-col gap-3 mb-8">
                  {[
                    { label: 'Fixo local ilimitado', sub: 'Ligue para qualquer fixo da sua cidade' },
                    { label: 'Fixo nacional ilimitado', sub: 'Todo o Brasil, sem cobranças extras' },
                    { label: 'Celular local ilimitado', sub: 'Qualquer operadora na sua região' },
                    { label: 'Celular nacional ilimitado', sub: 'Qualquer operadora no país' },
                    { label: 'Identificador de chamadas', sub: 'Saiba quem está ligando' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#27CAA3' }}>✓</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: '#27CAA3' }}
                >
                  Contratar agora →
                </button>
              </div>

              <div className="absolute -top-4 -right-4 text-xs font-bold px-4 py-1.5 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, #27CAA3, #06b6d4)' }}
              >
                Portabilidade grátis
              </div>
              <div className="absolute -bottom-4 -left-4 text-xs font-bold px-4 py-1.5 rounded-full"
                style={{ background: '#0f2d22', border: '1px solid rgba(39,202,163,0.3)', color: '#27CAA3' }}
              >
                Requer internet Siga
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div data-aos="fade-up" data-aos-delay="240"
          className="mt-16 pt-10 grid grid-cols-3 gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { value: 'R$ 39,90', label: 'por mês, tudo incluso' },
            { value: '100%', label: 'ilimitado fixo e celular' },
            { value: 'Grátis', label: 'portabilidade do seu número' },
          ].map((s, i) => (
            <div key={i} className={`text-center ${i < 2 ? 'border-r' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <p className="text-xl sm:text-2xl font-extrabold text-white">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
