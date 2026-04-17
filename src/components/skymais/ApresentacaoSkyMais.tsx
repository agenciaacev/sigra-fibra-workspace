import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApresentacaoSkyMais() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#001a4d' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: mockup dispositivos placeholder */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,85,204,0.3)' }}>
              <svg className="w-12 h-12 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-700 text-center px-4">Mockup TV + celular + tablet com Sky+ aberto (perspectiva)</span>
            </div>
            {/* Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10"
              style={{ background: '#27CAA3', opacity: 0.12 }} />
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Tudo num só lugar
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
              Os melhores canais de TV{' '}
              <span style={{ color: '#27CAA3' }}>em um só lugar.</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="text-gray-400 leading-relaxed mb-10">
              Programação completa com TV aberta e fechada, filmes, séries, transmissões esportivas e conteúdos extras — tudo disponível quando e onde quiser.
            </p>

            <div data-aos="fade-up" data-aos-delay="180" className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 flex-wrap">
              {[{ label: 'Canais ao vivo', value: '+70' }, { label: 'Dispositivos', value: '3' }, { label: 'Perfis', value: '5' }].map((s, i) => (
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
                Conheça o plano
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
