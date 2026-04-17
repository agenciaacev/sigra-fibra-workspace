import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlanoSkyMais() {
  const navigate = useNavigate()

  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: foto esportiva placeholder */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full aspect-square rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ background: 'linear-gradient(135deg, #001a4d, #003087)', border: '2px dashed rgba(0,48,135,0.3)' }}>
              <svg className="w-16 h-16 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span className="text-xs text-gray-600 text-center px-6">Foto esportiva — estádio lotado ou jogada decisiva (1:1, alta energia)</span>
            </div>
            {/* Sky+ badge sobreposto */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: 'rgba(0,48,135,0.9)', border: '1px solid rgba(0,85,204,0.5)', backdropFilter: 'blur(8px)' }}>
              Sky+
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Plano Sky+ — incluso na Siga Fibra
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              O melhor do futebol do mundo e conteúdos exclusivos{' '}
              <span style={{ color: '#003087' }}>no seu plano.</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 leading-relaxed mb-10">
              Mais de 70 canais ao vivo com o melhor do futebol nacional e internacional, séries, filmes e muito mais. Tudo incluso, sem taxa extra.
            </p>

            {/* Mini highlights */}
            <div data-aos="fade-up" data-aos-delay="160" className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {[
                { label: '+70 canais ao vivo', color: '#003087' },
                { label: 'Futebol nacional', color: '#27CAA3' },
                { label: 'Futebol internacional', color: '#003087' },
                { label: 'Sem taxa extra', color: '#27CAA3' },
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50" style={{ border: '1px solid #efefef' }}>
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: h.color }} />
                  <p className="text-sm font-semibold text-gray-700">{h.label}</p>
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
                Assine já
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
