'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const stills = [
  '/img/disney/tron-ares_stills-please-select-424118.jpeg',
  '/img/disney/percy-jackson-e-os-olimpianos-t2_stills-please-select-479791.jpeg',
  '/img/disney/zootopia-2_stills-please-select-272540.jpeg',
  '/img/disney/os-simpsons-t37_stills-please-select-232706.jpeg',
  '/img/disney/elio_stills-please-select-263558.jpeg',
]

export default function HeroDisneyPlus() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % stills.length)
        setFade(true)
      }, 600)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#000' }}>

      {/* Background — imagem trocando com fade */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: fade ? 1 : 0 }}
      >
        <Image
          src={stills[current]}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.45) 100%)' }} />

      {/* Glows sutis */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0063e5, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #27CAA3, transparent 70%)' }} />

      {/* Conteúdo */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="max-w-[640px]">

          <div data-aos="fade-up" className="flex items-center gap-4 mb-8">
            <Image src="/img/disney/logo-disney.png" alt="Disney+" width={140} height={56} className="object-contain"
              style={{ height: 52, width: 'auto', filter: 'drop-shadow(0 4px 16px rgba(0,99,229,0.7))' }} />
            <span className="text-gray-500 font-bold text-xl">×</span>
            <Image src="/img/logosiga.png" alt="Siga Fibra" width={140} height={56} className="object-contain"
              style={{ height: 52, width: 'auto', filter: 'drop-shadow(0 4px 16px rgba(39,202,163,0.7))' }} />
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Assine o Disney+ com a Siga Fibra e aproveite filmes e séries{' '}
            <span style={{ color: '#0063e5' }}>sem interrupção.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-lg leading-relaxed mb-10 text-gray-400 max-w-[500px]">
            Disney, Marvel, Pixar, Star Wars, ESPN e muito mais — incluso no seu plano. Sem travar, sem buffering.
          </p>

          <div data-aos="fade-up" data-aos-delay="180" className="flex flex-wrap gap-2 mb-10">
            {['Disney', 'Marvel', 'Pixar', 'Star Wars', 'ESPN', 'National Geographic'].map((f) => (
              <span key={f} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                {f}
              </span>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="220" className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
              className="font-bold px-10 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#0063e5' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#0052cc'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#0063e5'}
            >
              Quero assinar agora
            </button>

            {/* Indicadores */}
            <div className="flex items-center gap-2">
              {stills.map((_, i) => (
                <button key={i} onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true) }, 300) }}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === current ? 20 : 6, height: 6, background: i === current ? '#27CAA3' : 'rgba(255,255,255,0.35)' }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
