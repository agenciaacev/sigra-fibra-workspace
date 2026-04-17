import React from 'react'
import { useNavigate } from 'react-router-dom'

const universos = [
  { label: 'Disney', bg: '#001f5c' },
  { label: 'Marvel', bg: '#e23636' },
  { label: 'Pixar', bg: '#0063e5' },
  { label: 'Star Wars', bg: '#1a1a1a' },
  { label: 'ESPN', bg: '#cc0000' },
  { label: 'Nat Geo', bg: '#ffcb05' },
]

function PosterPlaceholder({ label, bg }) {
  return (
    <div className="aspect-[2/3] rounded-xl overflow-hidden flex flex-col items-center justify-center gap-2 relative"
      style={{ background: bg + '33', border: `1px solid ${bg}44` }}>
      <svg className="w-7 h-7 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
      <span className="text-xs text-gray-600 text-center px-2">{label}</span>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: bg }} />
    </div>
  )
}

export default function ApresentacaoDisneyPlus() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#000d26' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: mosaico de capas */}
          <div data-aos="fade-right" className="grid grid-cols-3 gap-3">
            {universos.map((u, i) => (
              <PosterPlaceholder key={i} label={`Pôster ${u.label}`} bg={u.bg} />
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
                onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
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
