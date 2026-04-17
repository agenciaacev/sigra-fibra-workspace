import React from 'react'
import { useNavigate } from 'react-router-dom'

const esportes = [
  { label: 'Futebol', icon: '⚽' },
  { label: 'NBA', icon: '🏀' },
  { label: 'NFL', icon: '🏈' },
  { label: 'MMA', icon: '🥊' },
  { label: 'Tênis', icon: '🎾' },
  { label: 'Fórmula 1', icon: '🏎️' },
]

export default function EsportesDisneyPlus() {
  const navigate = useNavigate()

  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: foto esportiva placeholder */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full aspect-square rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ background: 'linear-gradient(135deg, #000d26, #001f5c)', border: '2px dashed rgba(0,99,229,0.3)' }}>
              <svg className="w-16 h-16 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-600 text-center px-6">Foto esportiva ao vivo — estádio ou atleta em ação com overlay ESPN/Disney+</span>
            </div>
            {/* ESPN badge */}
            <div className="absolute top-5 left-5 px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: 'rgba(204,0,0,0.9)', border: '1px solid rgba(204,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
              ESPN
            </div>
            {/* Accent */}
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

            {/* Esportes grid */}
            <div data-aos="fade-up" data-aos-delay="160" className="grid grid-cols-3 gap-3 mb-10">
              {esportes.map((e, i) => (
                <div key={e.label} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50" style={{ border: '1px solid #efefef' }}>
                  <span className="text-lg">{e.icon}</span>
                  <p className="text-sm font-semibold text-gray-700">{e.label}</p>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
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
