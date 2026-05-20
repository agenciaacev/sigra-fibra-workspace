'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const services = [
  {
    name: 'Disney+',
    bg: '#0f3460',
    tagline: 'Disney, Marvel, Star Wars e muito mais',
    to: '/pessoa-fisica/servicos-digitais/disney-plus',
    textColor: '#93c5fd',
    accentColor: '#60a5fa',
  },
  {
    name: 'Globoplay',
    bg: '#991b1b',
    tagline: 'Séries, filmes e ao vivo da Globo',
    to: '/pessoa-fisica/servicos-digitais',
    textColor: '#fca5a5',
    accentColor: '#ef4444',
  },
  {
    name: 'HBO Max',
    bg: '#1c1c2e',
    tagline: 'As melhores séries e filmes exclusivos',
    to: '/pessoa-fisica/servicos-digitais',
    textColor: '#c084fc',
    accentColor: '#a855f7',
  },
  {
    name: 'SKY+',
    bg: '#0c4a6e',
    tagline: 'Canais ao vivo, filmes e séries',
    to: '/pessoa-fisica/servicos-digitais',
    textColor: '#7dd3fc',
    accentColor: '#0ea5e9',
  },
]

export default function StreamingSection() {
  const router = useRouter()

  return (
    <section className="py-16 md:py-24" style={{ background: '#060d0f' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#27CAA3' }}
          >
            Entretenimento Digital
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Globoplay, Disney+, HBO MAX, SKY+
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Contrate junto com seu plano e economize
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-between p-6 min-h-[260px] cursor-pointer group transition-transform duration-200 hover:scale-[1.03]"
              style={{ background: s.bg }}
              onClick={() => router.push(s.to)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.07), transparent 70%)',
                }}
              />

              <div
                className="absolute top-0 left-0 right-0 h-px opacity-30"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accentColor}, transparent)` }}
              />

              <div className="flex-1 flex items-center justify-center py-4">
                <span
                  className="text-2xl sm:text-3xl font-black tracking-tight text-center leading-tight"
                  style={{ color: s.textColor }}
                >
                  {s.name}
                </span>
              </div>

              <div className="w-full">
                <p className="text-white/50 text-xs text-center mb-4 leading-relaxed">
                  {s.tagline}
                </p>
                <button
                  className="w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: '#eab308', color: '#0d2418' }}
                  onClick={e => {
                    e.stopPropagation()
                    router.push(s.to)
                  }}
                >
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
