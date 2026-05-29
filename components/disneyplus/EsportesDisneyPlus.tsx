'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const slides = [
  { desktop: '/img/disney/NBA-1X1.png',     mobile: '/img/disney/NBA-9X16.png',     label: 'NBA' },
  { desktop: '/img/disney/PREMIER-1X1.png', mobile: '/img/disney/PREMIER-9X16.png', label: 'Premier League' },
  { desktop: '/img/disney/SERIEB-1X1.png',  mobile: '/img/disney/SERIEB-9X16.png',  label: 'Série B' },
]

const esportes = [
  { label: 'Futebol', icon: '⚽' },
  { label: 'NBA', icon: '🏀' },
  { label: 'NFL', icon: '🏈' },
  { label: 'MMA', icon: '🥊' },
  { label: 'Tênis', icon: '🎾' },
  { label: 'Fórmula 1', icon: '🏎️' },
]

export default function EsportesDisneyPlus() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length)
        setFade(true)
      }, 150)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">

          {/* Left: slideshow */}
          <div data-aos="fade-right" className="relative inline-block w-full">

            {/* Desktop — altura fixa baseada no Premier (16/9) */}
            <div className="hidden sm:block w-full rounded-3xl overflow-hidden"
              style={{ aspectRatio: '16/9', transition: 'opacity 0.15s ease', opacity: fade ? 1 : 0, position: 'relative' }}>
              <Image
                src={slides[current].desktop}
                alt={slides[current].label}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 560px"
                priority
              />
            </div>

            {/* Mobile — 9x16 */}
            <div className="block sm:hidden w-full" style={{ transition: 'opacity 0.15s ease', opacity: fade ? 1 : 0 }}>
              <Image
                src={slides[current].mobile}
                alt={slides[current].label}
                width={400}
                height={711}
                className="w-full h-auto rounded-3xl"
                sizes="100vw"
                priority
              />
            </div>


            {/* Indicadores */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true) }, 300) }}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === current ? 20 : 6, height: 6, background: i === current ? '#fff' : 'rgba(255,255,255,0.45)' }}
                />
              ))}
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: '#27CAA3', opacity: 0.15 }} />
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              ESPN no Disney+
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              O Disney+ tem tudo para o{' '}
              <span style={{ color: '#0063e5' }}>fã de esportes.</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 leading-relaxed mb-10">
              Futebol, NBA, NFL, MMA e muito mais ao vivo pela ESPN e CastTV — com a estabilidade da Siga Fibra para não perder nenhum lance.
            </p>

            <div data-aos="fade-up" data-aos-delay="160" className="grid grid-cols-3 gap-3 mb-10">
              {esportes.map((e) => (
                <div key={e.label} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50" style={{ border: '1px solid #efefef' }}>
                  <span className="text-lg">{e.icon}</span>
                  <p className="text-sm font-semibold text-gray-700">{e.label}</p>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <button
                onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                className="font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
                style={{ background: '#27CAA3' }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}
              >
                Quero assinar o Disney+
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
