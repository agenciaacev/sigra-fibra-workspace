'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: 'BANDA LARGA EMPRESARIAL',
    speed: '1',
    unit: 'Gb',
    upload: '500Mb',
    priceInt: '199',
    priceDec: ',90',
    benefits: ['Suporte empresarial',],
    featured: false,
    badge: null,
  },
  {
    name: 'BANDA LARGA EMPRESARIAL',
    speed: '2',
    unit: 'Gb',
    upload: '2Gb',
    priceInt: '249',
    priceDec: ',90',
    benefits: [ 'Suporte empresarial',],
    featured: true,
    badge: 'MAIS CONTRATADO',
  },
  {
    name: 'BANDA LARGA EMPRESARIAL',
    speed: '3',
    unit: 'Gb',
    upload: '3Gb',
    priceInt: '299',
    priceDec: ',90',
    benefits: ['Suporte empresarial'],
    featured: false,
    badge: null,
  },
  {
    name: 'BANDA LARGA EMPRESARIAL',
    speed: '4',
    unit: 'Gb',
    upload: '4Gb',
    priceInt: '399',
    priceDec: ',90',
    benefits: [ 'Suporte empresarial'],
    featured: false,
    badge: null,
  },
]

export default function PlanosInternetEmpresaSection() {
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeDot, setActiveDot] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 640

  const checkScrollButtons = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    const cardWidth = el.scrollWidth / plans.length
    setActiveDot(Math.round(el.scrollLeft / cardWidth))
  }

  const startAutoScroll = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      const el = scrollRef.current
      if (!el || !isMobile()) return
      const cardWidth = el.scrollWidth / plans.length
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
      if (atEnd) {
        el.scrollLeft = 0
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }, 3500)
  }

  const pauseAndResume = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => startAutoScroll(), 2000)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScrollButtons()
    el.addEventListener('scroll', checkScrollButtons)
    window.addEventListener('resize', checkScrollButtons)
    el.addEventListener('touchstart', pauseAndResume, { passive: true })
    startAutoScroll()
    return () => {
      el.removeEventListener('scroll', checkScrollButtons)
      window.removeEventListener('resize', checkScrollButtons)
      el.removeEventListener('touchstart', pauseAndResume)
      if (autoRef.current) clearInterval(autoRef.current)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.clientWidth / 4
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
            Siga Fibra Empresarial
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: 'var(--text-dark)' }}
          >
            Internet Fibra para
            <span style={{ color: '#03C2C3' }}> Empresas</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
            Planos dedicados com IP fixo, SLA e suporte 24h para o seu negócio
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="80">
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-full items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              style={{ background: '#03C2C3' }}
              aria-label="Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <style>{`
              .carousel-emp-hide-scroll::-webkit-scrollbar { display: none; }
              .plano-emp-card { width: 100%; scroll-snap-align: start; }
              @media(min-width: 640px) { .plano-emp-card { width: calc(25% - 15px); min-width: 220px; } }
            `}</style>
            <div
              ref={scrollRef}
              className="carousel-emp-hide-scroll flex gap-0 sm:gap-5 overflow-x-auto scroll-smooth flex-1"
              style={{ scrollbarWidth: 'none', paddingBottom: '4px', paddingTop: '20px', scrollSnapType: 'x mandatory' }}
            >
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className="plano-emp-card flex-shrink-0 flex flex-col"
                  style={{ position: 'relative' }}
                >
                  {plan.badge && (
                    <span
                      className="absolute left-1/2 text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full text-white z-10 whitespace-nowrap"
                      style={{
                        top: '0px',
                        transform: 'translate(-50%, -50%)',
                        background: '#062a2a',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <div
                    className="flex flex-col rounded-2xl overflow-hidden flex-1"
                    style={{
                      boxShadow: plan.featured
                        ? '0 8px 32px rgba(3,194,195,0.28)'
                        : '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      className="relative px-6 pt-5 pb-6"
                      style={{ background: 'linear-gradient(135deg, #3ddcde 0%, #03C2C3 100%)' }}
                    >
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

                    <div className="px-6 py-5 flex flex-col flex-1" style={{ background: 'var(--card-bg)' }}>
                      <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Valor s/ desconto</p>
                      <div className="flex items-end gap-0.5 mb-4">
                        <span className="text-sm font-bold mb-2.5" style={{ color: 'var(--text-dark)' }}>R$</span>
                        <span className="font-black leading-none" style={{ fontSize: '3.25rem', color: 'var(--text-dark)' }}>
                          {plan.priceInt}
                        </span>
                        <span className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                          {plan.priceDec}
                        </span>
                        <span className="text-xs mb-2 ml-0.5" style={{ color: 'var(--text-muted)' }}>/mês</span>
                      </div>

                      <div className="flex gap-2 mb-5">
                        <div className="flex-1 rounded-xl px-3 py-2 text-center" style={{ background: 'var(--card-bg-alt)' }}>
                          <p className="text-xs font-semibold" style={{ color: '#03C2C3' }}>24 meses</p>
                          <p className="text-sm font-black" style={{ color: 'var(--text-dark)' }}>5% OFF</p>
                        </div>
                        <div className="flex-1 rounded-xl px-3 py-2 text-center" style={{ background: 'var(--card-bg-alt)' }}>
                          <p className="text-xs font-semibold" style={{ color: '#03C2C3' }}>36 meses</p>
                          <p className="text-sm font-black" style={{ color: 'var(--text-dark)' }}>10% OFF</p>
                        </div>
                      </div>

                      <ul className="flex flex-col gap-2 mb-6 flex-1">
                        {plan.benefits.map((b, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-mid)' }}>
                            <span style={{ color: '#03C2C3' }}>✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => router.push('/empresa/internet/fibra')}
                        className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{ background: '#03C2C3' }}
                      >
                        Contratar agora
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-full items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              style={{ background: '#03C2C3' }}
              aria-label="Próximo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {plans.map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ background: '#03C2C3', opacity: i === activeDot ? 1 : 0.3, width: i === activeDot ? 24 : 6 }}
            />
          ))}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'var(--text-muted)' }}>
          * Distância máxima de 300m. Se ultrapassar: R$ 2,00 por metro excedente.
        </p>

      </div>
    </section>
  )
}
