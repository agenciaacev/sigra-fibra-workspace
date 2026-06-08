'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export type PlayhubPlatform = 'disney' | 'hbo' | 'globo' | 'prime' | 'sky'

interface AppItem {
  label: string
  platforms: PlayhubPlatform[]
}

interface PlayhubCategory {
  id: string
  name: string
  priceInt: string
  priceDec: string
  color: string
  rgba: string
  apps: (string | AppItem)[]
}

const CATEGORIES: PlayhubCategory[] = [
  {
    id: 'standard',
    name: 'Standard',
    priceInt: '9',
    priceDec: ',90',
    color: '#27CAA3',
    rgba: '39,202,163',
    apps: [
      { label: 'Sky+ Light SVA', platforms: ['sky'] },
      'Ubook News', 'Estuda+', 'Pequenos Leitores', 'Playlist',
      'Kiddle Pass', 'Hub Vantagens', 'Social Comics',
      'Karpesky Standard 1 Lic', 'Playkids', 'enwellness',
      'Qnutri', 'Looke', 'Noping', 'Hube Revistas', 'Fluid',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    priceInt: '14',
    priceDec: ',90',
    color: '#03C2C3',
    rgba: '3,194,195',
    apps: [
      { label: 'Sky+ Light SVA + Globo', platforms: ['sky', 'globo'] },
      'HotGo', 'Curta On', 'Karpersky Plus 3 Lic', 'DocWay', 'O Jornalista',
    ],
  },
  {
    id: 'top',
    name: 'TOP',
    priceInt: '29',
    priceDec: ',90',
    color: '#f59e0b',
    rgba: '245,158,11',
    apps: [
      { label: 'Disney+ c/ anúncio', platforms: ['disney'] },
      { label: 'HBO Max c/ anúncio', platforms: ['hbo'] },
      { label: 'Sky+ Light c/ Globo e Amazon Prime', platforms: ['sky', 'globo', 'prime'] },
      'Pequenos Leitores', 'CINDIE',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    priceInt: '46',
    priceDec: ',90',
    color: '#a855f7',
    rgba: '168,85,247',
    apps: [
      { label: 'Disney+ Padrão', platforms: ['disney'] },
      { label: 'HBO Max Standard', platforms: ['hbo'] },
      'Leitura 360', 'Smart Content', 'Ritual Fit',
      'Karpesky Plus 5 Lic', 'Queima Diária',
    ],
  },
]

const INDIVIDUAL_APPS = [
  { name: 'Deezer', price: '9,90', desc: 'Música ilimitada, podcasts e audiolivros' },
  { name: 'Ubookk GO', price: '4,90', desc: 'Audiolivros e ebooks ilimitados' },
]

function isAppItem(app: string | AppItem): app is AppItem {
  return typeof app !== 'string'
}

interface Props {
  highlight?: PlayhubPlatform
}

export default function PlayhubPricingSection({ highlight }: Props) {
  const router = useRouter()

  const categoryHasHighlight = (cat: PlayhubCategory) =>
    !!highlight && cat.apps.some(a => isAppItem(a) && a.platforms.includes(highlight))

  return (
    <section className="py-14 md:py-20" style={{ background: '#0d1117' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Playhub — Apps & Streaming
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Adicione ao seu plano de{' '}
            <span style={{ color: '#27CAA3' }}>internet fibra</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-[560px] mx-auto">
            O valor é por categoria, não por plataforma. Escolha um app de cada categoria e o preço é somado ao seu plano de internet.
          </p>
        </div>

        {/* Fiber notice */}
        <div
          data-aos="fade-up" data-aos-delay="60"
          className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl mb-10 max-w-[620px] mx-auto"
          style={{ background: 'rgba(39,202,163,0.08)', border: '1px solid rgba(39,202,163,0.25)' }}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="#27CAA3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-sm font-semibold" style={{ color: '#27CAA3' }}>
            Disponível exclusivamente para assinantes do Plano Siga Fibra
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CATEGORIES.map((cat, i) => {
            const highlighted = categoryHasHighlight(cat)
            return (
              <div
                key={cat.id}
                data-aos="fade-up"
                data-aos-delay={80 + i * 60}
                className="rounded-2xl p-5 flex flex-col gap-4"
                style={{
                  background: highlighted
                    ? `rgba(${cat.rgba},0.08)`
                    : 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${highlighted ? cat.color : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: highlighted ? `0 0 28px rgba(${cat.rgba},0.14)` : 'none',
                }}
              >
                {/* Badge row */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `rgba(${cat.rgba},0.15)`, color: cat.color }}
                  >
                    {cat.name}
                  </span>
                  {highlighted && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white shrink-0"
                      style={{ background: cat.color }}
                    >
                      Incluso
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-end gap-0.5">
                  <span className="text-xs font-bold mb-1.5 text-gray-400">R$</span>
                  <span className="text-3xl font-black leading-none text-white">{cat.priceInt}</span>
                  <span className="text-lg font-bold mb-1 text-white">{cat.priceDec}</span>
                  <span className="text-xs mb-1 ml-0.5 text-gray-500">/mês</span>
                </div>

                {/* Apps list */}
                <ul className="flex flex-col gap-1.5 flex-1">
                  {cat.apps.map((app, j) => {
                    const isItem = isAppItem(app)
                    const isMatch = isItem && !!highlight && app.platforms.includes(highlight)
                    const label = isItem ? app.label : app
                    return (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: isMatch ? cat.color : 'rgba(255,255,255,0.4)' }}
                      >
                        <span
                          className="mt-0.5 w-3 h-3 rounded-full shrink-0 flex items-center justify-center"
                          style={{
                            background: isMatch
                              ? `rgba(${cat.rgba},0.2)`
                              : 'rgba(255,255,255,0.06)',
                          }}
                        >
                          {isMatch ? (
                            <svg className="w-2 h-2" fill="none" stroke={cat.color} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="w-1 h-1 rounded-full block" style={{ background: 'rgba(255,255,255,0.15)' }} />
                          )}
                        </span>
                        <span className={isMatch ? 'font-bold' : ''}>{label}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Individual apps */}
        <div data-aos="fade-up" className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-5 text-gray-600">
            Também disponível individualmente
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {INDIVIDUAL_APPS.map((app, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div>
                  <p className="text-sm font-bold text-white">{app.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{app.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-500">R$</p>
                  <p className="text-xl font-black leading-none" style={{ color: '#27CAA3' }}>
                    {app.price}
                    <span className="text-xs text-gray-500 font-normal ml-0.5">/mês</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules note */}
        <div data-aos="fade-up" className="text-center mb-8">
          <div
            className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="text-xs text-gray-500 flex items-center gap-1.5">
              <span style={{ color: '#27CAA3' }}>✓</span> 1 app por categoria
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1.5">
              <span style={{ color: '#27CAA3' }}>✓</span> Combine categorias diferentes
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1.5">
              <span style={{ color: '#27CAA3' }}>✓</span> Valor somado ao plano de internet
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1.5">
              <span style={{ color: '#27CAA3' }}>✓</span> Sem fidelidade extra
            </span>
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center">
          <button
            onClick={() => router.push('/pessoa-fisica/internet-fibra#planos')}
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
            style={{ background: '#27CAA3' }}
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}
          >
            Ver planos de internet fibra
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
