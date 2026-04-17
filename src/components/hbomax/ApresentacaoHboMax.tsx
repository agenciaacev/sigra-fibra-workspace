import React from 'react'
import { useNavigate } from 'react-router-dom'

function PosterPlaceholder({ title }) {
  return (
    <div className="aspect-[2/3] rounded-xl overflow-hidden flex flex-col items-center justify-center gap-2"
      style={{ background: 'linear-gradient(180deg, #1a0044 0%, #0d001f 100%)', border: '1px solid rgba(102,0,204,0.2)' }}>
      <svg className="w-7 h-7 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
      <span className="text-xs text-gray-700 text-center px-2">{title}</span>
    </div>
  )
}

export default function ApresentacaoHboMax() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#0d001f' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: grade 2x3 de pôsteres */}
          <div data-aos="fade-right" className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Pôster série HBO premiada', 'Pôster produção original', 'Pôster lançamento Warner',
              'Pôster série drama', 'Pôster documentário', 'Pôster comédia'].map((t, i) => (
              <PosterPlaceholder key={i} title={t} />
            ))}
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Entretenimento sem igual
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
              A emoção para toda a família está no{' '}
              <span style={{ background: 'linear-gradient(90deg, #9933ff, #3366ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                HBO Max.
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="text-gray-400 leading-relaxed mb-10">
              Acesso exclusivo às séries mais premiadas do mundo, sucessos de bilheteria, produções originais e os maiores lançamentos Warner — direto na sua tela, com a velocidade da Siga Fibra.
            </p>

            <div data-aos="fade-up" data-aos-delay="180" className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 flex-wrap">
              {[{ label: 'Séries originais', value: '+500' }, { label: 'Filmes', value: '+1.000' }, { label: 'Países', value: '60+' }].map((s, i) => (
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
                Assine agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
