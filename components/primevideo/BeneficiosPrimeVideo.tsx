import React from 'react'

const beneficios = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    titulo: '4K Ultra HD',
    desc: 'Qualidade cinematográfica com resolução máxima, HDR e Dolby Atmos em milhares de títulos.',
    cor: '#00A8E1',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    titulo: 'Download Offline',
    desc: 'Baixe episódios e filmes para assistir onde quiser, sem precisar de conexão.',
    cor: '#FF9900',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM7 3h10" />
      </svg>
    ),
    titulo: 'Múltiplos Dispositivos',
    desc: 'Smart TV, celular, tablet ou computador — seus conteúdos em qualquer tela, a qualquer hora.',
    cor: '#27CAA3',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    titulo: 'Originais Exclusivos',
    desc: 'The Boys, Reacher, Fallout, Citadel e muito mais — produções que só existem no Prime Video.',
    cor: '#a855f7',
  },
]

export default function BeneficiosPrimeVideo() {
  return (
    <section id="beneficios" className="py-12 md:py-20 lg:py-24" style={{ background: '#0a1628' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Por que Prime Video + Siga Fibra
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Tudo que você precisa para{' '}
            <span style={{ color: '#00A8E1' }}>assistir sem limites.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-400 mt-4 max-w-[500px] mx-auto leading-relaxed">
            Com a internet da Siga Fibra, você aproveita o Prime Video no nível máximo — sem engasgo, sem buffering, com qualidade de cinema em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b, i) => (
            <div key={b.titulo} data-aos="fade-up" data-aos-delay={i * 80}
              className="p-6 rounded-3xl flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${b.cor}33` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${b.cor}18`, color: b.cor }}>
                {b.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-2">{b.titulo}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="320"
          className="mt-10 p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{ background: 'rgba(0,168,225,0.06)', border: '1px solid rgba(0,168,225,0.2)' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0,168,225,0.15)' }}>
              <svg className="w-6 h-6" fill="none" stroke="#00A8E1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-white text-sm">Fibra óptica + Prime Video = combinação perfeita</p>
              <p className="text-xs text-gray-400 mt-0.5">Velocidade simétrica para transmissão em 4K sem qualquer travamento.</p>
            </div>
          </div>
          <div className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide text-white"
            style={{ background: 'rgba(0,168,225,0.2)', border: '1px solid rgba(0,168,225,0.35)' }}>
            Siga Fibra
          </div>
        </div>

      </div>
    </section>
  )
}
