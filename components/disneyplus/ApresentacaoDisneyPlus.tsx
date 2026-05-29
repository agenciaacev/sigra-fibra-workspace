'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const universos = [
  { label: 'Disney',    logo: '/img/disney/DISNEY_LOGO.png',    bg: '#001f5c', invert: true  },
  { label: 'Marvel',    logo: '/img/disney/MARVEL_LOGO.png',    bg: '#e23636', invert: false },
  { label: 'Pixar',     logo: '/img/disney/PIXAR_LOGO.png',     bg: '#0063e5', invert: true  },
  { label: 'Star Wars', logo: '/img/disney/STARWARS_LOGO.png',  bg: '#1a1a1a', invert: true  },
  { label: 'ESPN',      logo: '/img/disney/ESPN_LOGO.png',      bg: '#cc0000', invert: false },
  { label: 'Nat Geo',   logo: '/img/disney/NTAGEO_LOGO.png',    bg: '#ffcb05', invert: false },
]

function FranquiaCard({ label, logo, invert }: { label: string; logo: string; bg: string; invert: boolean }) {
  return (
    <div className="flex items-center justify-center py-4">
      <Image
        src={logo}
        alt={label}
        width={280}
        height={140}
        className="object-contain"
        style={{ maxHeight: 160, width: 'auto', filter: invert ? 'brightness(0) invert(1)' : 'none' }}
      />
    </div>
  )
}

export default function ApresentacaoDisneyPlus() {
  const router = useRouter()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#000d26' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: mosaico de capas */}
          <div data-aos="fade-right" className="grid grid-cols-3 gap-3">
            {universos.map((u, i) => (
              <FranquiaCard key={i} label={u.label} logo={u.logo} bg={u.bg} invert={u.invert} />
            ))}
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Entretenimento ilimitado
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
              Gosta de filmes e séries?{' '}
              <span style={{ background: 'linear-gradient(90deg, #27CAA3, #0063e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                O Disney+ foi feito para você.
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="text-gray-400 leading-relaxed mb-10">
              Produções originais, lançamentos do cinema e clássicos de todos os tempos — disponíveis quando e onde quiser, na velocidade da Siga Fibra.
            </p>

            <div data-aos="fade-up" data-aos-delay="180" className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 flex-wrap">
              {[{ label: 'Títulos', value: '+1.000' }, { label: 'Franquias', value: '6' }, { label: 'Originais', value: '+300' }].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-white/10" />}
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="220">
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
