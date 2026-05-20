'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: 'SIGA NITRO',
    speed: '600',
    unit: 'Mb',
    upload: '300Mb',
    priceInt: '84',
    priceDec: ',90',
    priceAfter: 'R$ 104,90/mês',
    benefits: ['Wi-Fi em toda a casa', 'Sem fidelidade', 'Instalação grátis'],
    featured: false,
    badge: null,
  },
  {
    name: 'SIGA NITRO',
    speed: '800',
    unit: 'Mb',
    upload: '400Mb',
    priceInt: '99',
    priceDec: ',90',
    priceAfter: 'R$ 119,90/mês',
    benefits: ['Wi-Fi em toda a casa', 'Sem fidelidade', 'Instalação grátis', 'Suporte prioritário'],
    featured: true,
    badge: 'MAIS POPULAR',
  },
  {
    name: 'SIGA NITRO',
    speed: '1',
    unit: 'Gb',
    upload: '500Mb',
    priceInt: '109',
    priceDec: ',90',
    priceAfter: 'R$ 129,90/mês',
    benefits: ['Wi-Fi em toda a casa', 'Sem fidelidade', 'Instalação grátis', 'Suporte prioritário'],
    featured: false,
    badge: null,
  },
  {
    name: 'SIGA HIPER FLOW',
    speed: '2',
    unit: 'Gb',
    upload: '2Gb',
    priceInt: '159',
    priceDec: ',90',
    priceAfter: 'R$ 179,90/mês',
    benefits: ['Wi-Fi em toda a casa', 'Sem fidelidade', 'Instalação grátis', 'Suporte prioritário', 'IP fixo incluso'],
    featured: false,
    badge: null,
  },
  {
    name: 'SIGA HIPER MAX',
    speed: '2.5',
    unit: 'Gb',
    upload: '2.5Gb',
    priceInt: '199',
    priceDec: ',90',
    priceAfter: 'R$ 219,90/mês',
    benefits: ['Wi-Fi em toda a casa', 'Sem fidelidade', 'Instalação grátis', 'Suporte prioritário', 'IP fixo incluso', 'Roteador premium'],
    featured: false,
    badge: null,
  },
]

export default function PlanosInternetSection() {
  const router = useRouter()

  return (
    <section className="py-16 md:py-24" style={{ background: '#e4f8f3' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Siga Fibra
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: '#0f2d22' }}
          >
            Internet Fibra, Celular e
            <br className="hidden sm:block" />
            <span style={{ color: '#27CAA3' }}> Serviços Digitais</span> Siga Fibra
          </h2>
          <p className="text-gray-500 mt-3 text-base">Escolha o plano ideal para a sua casa</p>
        </div>

        {/* Cards */}
        <div
          className="flex flex-wrap justify-center gap-5"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl overflow-hidden w-full"
              style={{
                maxWidth: '320px',
                boxShadow: plan.featured
                  ? '0 8px 32px rgba(39,202,163,0.28)'
                  : '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              {/* Teal header */}
              <div
                className="relative px-6 pt-5 pb-6"
                style={{ background: 'linear-gradient(135deg, #3ddcbc 0%, #27CAA3 100%)' }}
              >
                {plan.badge && (
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full text-white mb-3"
                    style={{ background: 'rgba(0,0,0,0.22)' }}
                  >
                    {plan.badge}
                  </span>
                )}

                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                  {plan.name}
                </p>

                <div className="flex items-end gap-0.5 mt-1">
                  <span className="font-black text-white leading-none" style={{ fontSize: '3.75rem' }}>
                    {plan.speed}
                  </span>
                  <span className="text-2xl font-extrabold text-white mb-1.5">{plan.unit}</span>
                </div>

                <p className="text-white/65 text-sm mt-0.5">
                  Download / {plan.upload} Upload
                </p>

                <span
                  className="absolute bottom-3 right-4 text-xs font-black tracking-widest uppercase select-none"
                  style={{ color: 'rgba(255,255,255,0.18)' }}
                >
                  SIGA
                </span>
              </div>

              {/* White body */}
              <div className="bg-white px-6 py-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-1">A partir de</p>

                <div className="flex items-end gap-0.5 mb-5">
                  <span className="text-sm font-bold mb-2.5" style={{ color: '#0f2d22' }}>R$</span>
                  <span className="font-black leading-none" style={{ fontSize: '3.25rem', color: '#0f2d22' }}>
                    {plan.priceInt}
                  </span>
                  <span className="text-xl font-bold mb-2" style={{ color: '#0f2d22' }}>
                    {plan.priceDec}
                  </span>
                  <span className="text-xs text-gray-400 mb-2 ml-0.5">/mês</span>
                </div>

                {/* Vencimento box */}
                <div
                  className="rounded-xl px-3 py-2.5 mb-5"
                  style={{ background: '#edfaf6' }}
                >
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold">Após o vencimento:</span>{' '}
                    {plan.priceAfter}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {plan.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span style={{ color: '#27CAA3' }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push('/pessoa-fisica/internet-fibra')}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: '#27CAA3' }}
                >
                  Assinar agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
