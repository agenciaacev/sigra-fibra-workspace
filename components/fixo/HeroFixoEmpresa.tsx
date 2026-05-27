'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function HeroFixoEmpresa() {
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
              Siga Fibra Empresarial — Telefonia Fixa
            </div>

            <h1 data-aos="fade-up" data-aos-delay="60"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5"
            >
              Telefonia fixa{' '}
              <span style={{
                background: 'linear-gradient(135deg, #27CAA3, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                para o seu negócio.
              </span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="120"
              className="text-base lg:text-lg leading-relaxed mb-8 text-gray-400 max-w-[480px]"
            >
              Planos de telefonia fixa com ligações ilimitadas para fixo e celular em todo o Brasil, adaptados ao porte e à operação da sua empresa.
            </p>

            <div data-aos="fade-up" data-aos-delay="160" className="grid grid-cols-2 gap-3 mb-8 max-w-[420px]">
              {[
                { label: 'Fixo e celular ilimitado' },
                { label: 'Planos por porte de empresa' },
                { label: 'Identificador de chamadas' },
                { label: 'Portabilidade gratuita' },
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
                onClick={() => router.push('/empresa/atendimento/canais')}
                className="font-bold px-8 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
                style={{ background: '#27CAA3' }}
              >
                Falar com consultor
              </button>
              <a
                href="tel:851319895555"
                className="font-semibold px-8 py-4 rounded-2xl text-sm text-gray-300 transition-all duration-200 hover:border-[#27CAA3] hover:text-[#27CAA3] text-center"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                (85) 3198-9555
              </a>
            </div>
          </div>

          {/* Right — info card */}
          <div data-aos="fade-left" data-aos-delay="180" className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl p-8" style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#27CAA3' }}>
                  Canal empresarial
                </p>

                <div className="flex flex-col gap-5 mb-8">
                  {[
                    { label: 'WhatsApp & Telefone', value: '(85) 3198-9555', sub: 'Atendimento comercial exclusivo' },
                    { label: 'Planos personalizados', value: 'Sob consulta', sub: 'De acordo com o porte da sua empresa' },
                    { label: 'Requer internet Siga', value: 'Fibra empresarial', sub: 'Necessário ter serviço de internet ativo' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#27CAA3' }}>✓</span>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-sm font-semibold text-white">{item.value}</p>
                        <p className="text-xs text-gray-600">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => router.push('/empresa/atendimento/canais')}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: '#27CAA3' }}
                >
                  Solicitar proposta →
                </button>
              </div>

              <div className="absolute -top-4 -right-4 text-xs font-bold px-4 py-1.5 rounded-full text-white"
                style={{ background: 'linear-gradient(135deg, #27CAA3, #06b6d4)' }}
              >
                Canal empresarial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
