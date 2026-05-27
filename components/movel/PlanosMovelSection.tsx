'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const plans = [
  { gb: 5,  price: '34,99', featured: false, badge: null },
  { gb: 8,  price: '44,99', featured: false, badge: null },
  { gb: 12, price: '55,99', featured: false, badge: null },
  { gb: 19, price: '59,99', featured: true,  badge: 'MAIS POPULAR' },
  { gb: 30, price: '69,99', featured: false, badge: null },
  { gb: 40, price: '79,99', featured: false, badge: null },
  { gb: 45, price: '89,99', featured: false, badge: null },
]

const includedAll = [
  'Ligações ilimitadas para qualquer operadora',
  'WhatsApp liberado (exceto ligações e vídeo)',
  'Waze liberado',
  'Portabilidade gratuita',
]

export default function PlanosMovelSection() {
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft]   = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeDot, setActiveDot]           = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 640

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    setActiveDot(Math.round(el.scrollLeft / (el.scrollWidth / plans.length)))
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
    checkScroll()
    el.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    el.addEventListener('touchstart', pauseAndResume, { passive: true })
    startAutoScroll()
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
      el.removeEventListener('touchstart', pauseAndResume)
      if (autoRef.current) clearInterval(autoRef.current)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -(el.clientWidth / 4) : el.clientWidth / 4, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Planos Chip Móvel
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3" style={{ color: 'var(--text-dark)' }}>
            Escolha seu{' '}
            <span style={{ color: '#27CAA3' }}>plano ideal</span>
          </h2>
          <p className="text-base mb-6" style={{ color: 'var(--text-muted)' }}>
            Todos os planos incluem ligações ilimitadas, WhatsApp e Waze liberados
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {includedAll.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.25)', color: '#27CAA3' }}
              >
                <span>✓</span>{item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="80">
          <div className="flex items-center gap-3">

            <button onClick={() => scroll('left')} disabled={!canScrollLeft}
              className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-full items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              style={{ background: '#27CAA3' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <style>{`
              .planos-movel-scroll::-webkit-scrollbar { display: none; }
              .plano-movel-card { width: 100%; scroll-snap-align: start; }
              @media(min-width: 640px) { .plano-movel-card { width: calc(25% - 15px); min-width: 200px; } }
            `}</style>
            <div ref={scrollRef}
              className="planos-movel-scroll flex gap-0 sm:gap-5 overflow-x-auto scroll-smooth flex-1"
              style={{ scrollbarWidth: 'none', paddingBottom: '4px', paddingTop: '20px', scrollSnapType: 'x mandatory' }}
            >
              {plans.map((plan, i) => (
                <div key={i} className="plano-movel-card flex-shrink-0 flex flex-col" style={{ position: 'relative' }}>
                  {plan.badge && (
                    <span className="absolute left-1/2 text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full text-white z-10 whitespace-nowrap"
                      style={{ top: 0, transform: 'translate(-50%, -50%)', background: '#0f2d22', boxShadow: '0 2px 10px rgba(0,0,0,0.25)' }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <div className="flex flex-col rounded-2xl overflow-hidden flex-1"
                    style={{ boxShadow: plan.featured ? '0 8px 32px rgba(39,202,163,0.28)' : '0 4px 20px rgba(0,0,0,0.08)' }}
                  >
                    <div className="relative px-6 pt-5 pb-6"
                      style={{ background: 'linear-gradient(135deg, #3ddcbc 0%, #27CAA3 100%)' }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Chip Móvel</p>
                      <div className="flex items-end gap-0.5 mt-1">
                        <span className="font-black text-white leading-none" style={{ fontSize: '3.75rem' }}>
                          {plan.gb}
                        </span>
                        <span className="text-2xl font-extrabold text-white mb-1.5">GB</span>
                      </div>
                      <p className="text-white/65 text-sm mt-0.5">de internet móvel</p>
                      <span className="absolute bottom-3 right-4 text-xs font-black tracking-widest uppercase select-none"
                        style={{ color: 'rgba(255,255,255,0.18)' }}
                      >SIGA</span>
                    </div>

                    <div className="px-6 py-5 flex flex-col flex-1" style={{ background: 'var(--card-bg)' }}>
                      <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>por mês</p>
                      <div className="flex items-end gap-0.5 mb-5">
                        <span className="text-sm font-bold mb-2.5" style={{ color: 'var(--text-dark)' }}>R$</span>
                        <span className="font-black leading-none" style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>
                          {plan.price.split(',')[0]}
                        </span>
                        <span className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                          ,{plan.price.split(',')[1]}
                        </span>
                      </div>

                      <ul className="flex flex-col gap-2 mb-6 flex-1">
                        {includedAll.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-mid)' }}>
                            <span className="mt-0.5 flex-shrink-0" style={{ color: '#27CAA3' }}>✓</span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                        className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{ background: '#27CAA3' }}
                      >
                        Assinar agora
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => scroll('right')} disabled={!canScrollRight}
              className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-full items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
              style={{ background: '#27CAA3' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {plans.map((_, i) => (
            <div key={i} className="h-1.5 rounded-full transition-all duration-300"
              style={{ background: '#27CAA3', opacity: i === activeDot ? 1 : 0.3, width: i === activeDot ? 24 : 6 }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
