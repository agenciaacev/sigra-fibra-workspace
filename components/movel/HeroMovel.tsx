'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function HeroMovel() {
  const router = useRouter()

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ background: '#060d0f', minHeight: '80vh' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(39,202,163,0.16), transparent 65%)' }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.09), transparent 65%)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div data-aos="fade-up"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 text-white"
              style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.22)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#27CAA3' }} />
              Siga Fibra — Internet Móvel
            </div>

            <h1 data-aos="fade-up" data-aos-delay="60"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5"
            >
              Chip que{' '}
              <span style={{
                background: 'linear-gradient(135deg, #27CAA3, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                conecta de verdade,
              </span>
              <br />onde você estiver.
            </h1>

            <p data-aos="fade-up" data-aos-delay="120"
              className="text-base lg:text-lg leading-relaxed mb-8 text-gray-400 max-w-[480px]"
            >
              Ligações ilimitadas para qualquer fixo ou móvel de qualquer operadora,
              WhatsApp e Waze sempre livres, e portabilidade gratuita.
            </p>

            <div data-aos="fade-up" data-aos-delay="160" className="grid grid-cols-2 gap-3 mb-8 max-w-[420px]">
              {[
                { icon: '📞', label: 'Ligações ilimitadas' },
                { icon: '💬', label: 'WhatsApp liberado' },
                { icon: '🗺️', label: 'Waze liberado' },
                { icon: '🔄', label: 'Portabilidade grátis' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(39,202,163,0.07)', border: '1px solid rgba(39,202,163,0.15)' }}
                >
                  <span className="text-base">{c.icon}</span>
                  <span className="text-sm font-semibold text-white">{c.label}</span>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold px-8 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: '#27CAA3' }}
              >
                Ver planos e preços
              </button>
              <button
                onClick={() => document.getElementById('portabilidade')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-semibold px-8 py-4 rounded-2xl text-sm text-gray-300 transition-all duration-200 hover:border-[#27CAA3] hover:text-[#27CAA3]"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Como fazer portabilidade
              </button>
            </div>
          </div>

          {/* Right — price highlight card */}
          <div data-aos="fade-left" data-aos-delay="180" className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl p-8" style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#27CAA3' }}>
                  Planos a partir de
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-lg text-gray-400">R$</span>
                  <span className="text-6xl font-black text-white">34</span>
                  <span className="text-2xl text-gray-400">,99/mês</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">5GB de internet + ligações ilimitadas</p>

                <div className="flex flex-col gap-3 mb-8">
                  {[
                    { label: 'Ligações ilimitadas', sub: 'Qualquer operadora, fixo ou móvel' },
                    { label: 'WhatsApp liberado', sub: 'Exceto ligações e chamadas de vídeo' },
                    { label: 'Waze liberado', sub: 'Navegue sem consumir sua franquia' },
                    { label: 'Portabilidade gratuita', sub: 'Mantenha seu número atual' },
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
                  onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: '#27CAA3' }}
                >
                  Ver todos os planos →
                </button>
              </div>

              <div className="absolute -top-4 -right-4 text-xs font-bold px-4 py-1.5 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, #27CAA3, #06b6d4)' }}
              >
                Sem fidelidade
              </div>
              <div className="absolute -bottom-4 -left-4 text-xs font-bold px-4 py-1.5 rounded-full"
                style={{ background: '#0f2d22', border: '1px solid rgba(39,202,163,0.3)', color: '#27CAA3' }}
              >
                Portabilidade grátis
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
            { value: '7', unit: '', label: 'Planos disponíveis' },
            { value: '45', unit: 'GB', label: 'Franquia máxima' },
            { value: '100%', unit: '', label: 'Operadoras aceitas na portabilidade' },
          ].map((s, i) => (
            <div key={i} className={`text-center ${i < 2 ? 'border-r' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</span>
                {s.unit && <span className="text-lg font-bold" style={{ color: '#27CAA3' }}>{s.unit}</span>}
              </div>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
