import React from 'react'
import { useNavigate } from 'react-router-dom'

const categorias = [
  { label: 'Novelas', color: '#e8002d' },
  { label: 'Telejornais', color: '#f26522' },
  { label: 'Séries', color: '#27CAA3' },
  { label: 'Documentários', color: '#03C2C3' },
  { label: 'Originais', color: '#e8002d' },
  { label: 'Esportes ao vivo', color: '#27CAA3' },
  { label: 'Infantil', color: '#f26522' },
  { label: 'Filmes', color: '#03C2C3' },
]

export default function ConteudoFamiliaGloboPlay() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#f9f9f9' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: foto placeholder */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center gap-3"
              style={{ border: '2px dashed #e5e5e5' }}>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-400 text-center px-6">Foto lifestyle — família diversa assistindo TV juntos (4:3, cores quentes)</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10"
              style={{ background: '#e8002d', opacity: 0.08 }} />
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#e8002d' }}>
              Para toda a família
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              O melhor da TV nacional, filmes, novelas e conteúdo para{' '}
              <span style={{ color: '#27CAA3' }}>toda a família.</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120"
              className="text-gray-500 leading-relaxed mb-8">
              Telejornais, novelas, séries, documentários e produções originais — transmissões ao vivo da Globo e todo o acervo disponível a qualquer hora.
            </p>

            {/* Categorias */}
            <div data-aos="fade-up" data-aos-delay="160" className="flex flex-wrap gap-2 mb-10">
              {categorias.map((cat, i) => (
                <span key={i}
                  className="text-xs font-semibold px-4 py-2 rounded-full text-white"
                  style={{ background: cat.color }}>
                  {cat.label}
                </span>
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
                Assine agora
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
