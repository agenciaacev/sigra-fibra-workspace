'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const services = [
  {
    name: 'Disney+',
    icon: '/img/icons-digitais/disney+.png',
    bg: '#0f3460',
    tagline: 'Disney, Marvel, Star Wars e muito mais',
    to: '/pessoa-fisica/servicos-digitais/disney-plus',
    accentColor: '#60a5fa',
  },
  {
    name: 'Globoplay',
    icon: '/img/icons-digitais/globoplay.png',
    bg: '#991b1b',
    tagline: 'Séries, filmes e ao vivo da Globo',
    to: '/pessoa-fisica/servicos-digitais',
    accentColor: '#ef4444',
  },
  {
    name: 'HBO Max',
    icon: '/img/icons-digitais/hbo.webp',
    bg: '#1c1c2e',
    tagline: 'As melhores séries e filmes exclusivos',
    to: '/pessoa-fisica/servicos-digitais',
    accentColor: '#a855f7',
  },
  {
    name: 'SKY+',
    icon: '/img/icons-digitais/sky+.png',
    bg: '#0c4a6e',
    tagline: 'Canais ao vivo, filmes e séries',
    to: '/pessoa-fisica/servicos-digitais',
    accentColor: '#0ea5e9',
  },
  {
    name: 'Prime Video',
    icon: '/img/icons-digitais/prime-video.png',
    bg: '#00a8e0',
    tagline: 'Séries e filmes Amazon Originals',
    to: '/pessoa-fisica/servicos-digitais',
    accentColor: '#3b82f6',
  },
]

export default function StreamingSection() {
  const router = useRouter()

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#060d0f' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(39,202,163,0.09), transparent)',
      }} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Entretenimento Digital
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Globoplay, Disney+, HBO MAX, SKY+, Prime Video
          </h2>
          <p className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Contrate junto com seu plano e economize
          </p>
        </div>

        <div
          className="flex flex-nowrap justify-center gap-4 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => router.push(s.to)}
            >
              {/* Ícone */}
              <div
                className="overflow-hidden transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: 185,
                  height: 185,
                  borderRadius: 44,
                  boxShadow: 'rgba(0,0,0,0.4) 0px 2px 4px, rgba(0,0,0,0.3) 0px 7px 13px -3px, rgba(0,0,0,0.2) 0px -3px 0px inset',
                }}
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Texto */}
              <p className="text-xs text-center leading-relaxed max-w-[160px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {s.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
