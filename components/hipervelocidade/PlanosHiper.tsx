'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: 'SIGA HIPER FLOW',
    speed: '2',
    unit: 'Gb',
    upload: '2Gb',
    priceInt: '159',
    priceDec: ',90',
    priceAfter: 'R$ 179,90/mês',
    benefits: [
      'Upload = Download (simétrico)',
      'Wi-Fi em toda a casa',
      'Roteador premium incluso',
      'Suporte prioritário',
    ],
    featured: false,
    badge: null,
    gradientTop: 'linear-gradient(135deg, #03C2C3 0%, #06b6d4 100%)',
    accentColor: '#03C2C3',
    badgeBg: '',
  },
  {
    name: 'SIGA HIPER MAX',
    speed: '2.5',
    unit: 'Gb',
    upload: '2.5Gb',
    priceInt: '199',
    priceDec: ',90',
    priceAfter: 'R$ 219,90/mês',
    benefits: [
      'Upload = Download (simétrico)',
      'Wi-Fi em toda a casa',
      'Roteador premium incluso',
      'Suporte prioritário',
    ],
    featured: true,
    badge: 'MÁXIMA POTÊNCIA',
    gradientTop: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    accentColor: '#0ea5e9',
    badgeBg: 'linear-gradient(135deg, #03C2C3, #0ea5e9)',
  },
]

export default function PlanosHiper() {
  const router = useRouter()

  return (
    <section className="py-16 md:py-24" style={{ background: '#e4f8f3' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#27CAA3' }}
          >
            Planos HIPER
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: '#0f2d22' }}
          >
            Escolha seu nível de
            <br />
            <span style={{ color: '#03C2C3' }}>Hipervelocidade</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Velocidade simétrica — upload igual ao download. Roteador premium incluso em todos os planos.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[820px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative flex flex-col"
              style={{ paddingTop: plan.badge ? '16px' : '0' }}
            >
              {plan.badge && (
                <span
                  className="absolute left-1/2 text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full text-white z-10 whitespace-nowrap"
                  style={{
                    top: '0px',
                    transform: 'translate(-50%, -50%)',
                    background: plan.badgeBg,
                    boxShadow: '0 2px 12px rgba(3,194,195,0.45)',
                  }}
                >
                  {plan.badge}
                </span>
              )}

              <div
                className="flex flex-col rounded-2xl overflow-hidden flex-1"
                style={{
                  boxShadow: plan.featured
                    ? '0 8px 40px rgba(14,165,233,0.22)'
                    : '0 4px 20px rgba(0,0,0,0.08)',
                  border: plan.featured ? '1.5px solid rgba(14,165,233,0.3)' : 'none',
                }}
              >
                {/* Cyan-blue top */}
                <div
                  className="relative px-6 pt-6 pb-7"
                  style={{ background: plan.gradientTop }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-0.5 mt-1">
                    <span
                      className="font-black text-white leading-none"
                      style={{ fontSize: '3.75rem' }}
                    >
                      {plan.speed}
                    </span>
                    <span className="text-2xl font-extrabold text-white mb-1.5">{plan.unit}</span>
                  </div>
                  <p className="text-white/65 text-sm mt-0.5">
                    Download / {plan.upload} Upload
                  </p>
                  <span
                    className="absolute bottom-3 right-4 text-xs font-black tracking-widest uppercase select-none"
                    style={{ color: 'rgba(255,255,255,0.15)' }}
                  >
                    HIPER
                  </span>
                </div>

                {/* White bottom */}
                <div className="bg-white px-6 py-5 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-1">A partir de</p>
                  <div className="flex items-end gap-0.5 mb-5">
                    <span className="text-sm font-bold mb-2.5" style={{ color: '#0f2d22' }}>R$</span>
                    <span
                      className="font-black leading-none"
                      style={{ fontSize: '3.25rem', color: '#0f2d22' }}
                    >
                      {plan.priceInt}
                    </span>
                    <span className="text-xl font-bold mb-2" style={{ color: '#0f2d22' }}>
                      {plan.priceDec}
                    </span>
                    <span className="text-xs text-gray-400 mb-2 ml-0.5">/mês</span>
                  </div>

                  <div
                    className="rounded-xl px-3 py-2.5 mb-5"
                    style={{ background: '#ecfeff' }}
                  >
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold">Após o vencimento:</span>{' '}
                      {plan.priceAfter}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {plan.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span style={{ color: plan.accentColor }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                    className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{ background: plan.gradientTop }}
                  >
                    Assinar agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div
          className="mt-10 rounded-2xl p-5 md:p-6 flex flex-wrap items-center justify-center gap-4 text-center"
          style={{
            background: 'rgba(3,194,195,0.06)',
            border: '1px solid rgba(3,194,195,0.15)',
          }}
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {[
            'Sem fidelidade',
            'Instalação inclusa',
            'Roteador premium',
            'Suporte 24h',
            'Velocidade simétrica',
          ].map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(3,194,195,0.08)',
                border: '1px solid rgba(3,194,195,0.2)',
                color: '#0f2d22',
              }}
            >
              <span style={{ color: '#03C2C3' }}>✔</span>
              {tag}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
