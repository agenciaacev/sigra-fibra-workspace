import React from 'react'
const titulos = [
  { nome: 'Superman', genero: 'Ação / Aventura' },
  { nome: 'MasterChef', genero: 'Reality Show' },
  { nome: 'Serra Pelada', genero: 'Drama Nacional' },
  { nome: 'Operação Fronteira', genero: 'Thriller / Ação' },
]

function PosterCard({ titulo, destaque }) {
  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col items-center justify-end relative ${destaque ? 'row-span-1' : ''}`}
      style={{ aspectRatio: '2/3', background: 'linear-gradient(180deg, #1a0044 0%, #080020 100%)', border: '1px solid rgba(153,51,255,0.15)' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <svg className="w-8 h-8 opacity-15" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
        </svg>
        <span className="text-xs text-gray-700 text-center px-3">Pôster {titulo.nome}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)' }}>
        <p className="text-white font-bold text-sm">{titulo.nome}</p>
        <p className="text-xs mt-0.5" style={{ color: '#9933ff' }}>{titulo.genero}</p>
      </div>
      {destaque && (
        <div className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: '#27CAA3' }}>
          Destaque
        </div>
      )}
    </div>
  )
}

export default function CatalogoHboMax() {
  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#0a0028' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9933ff' }}>
            Catálogo
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-[600px] mx-auto leading-tight">
            Descubra os títulos que estão no HBO Max agora.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 max-w-[540px] mx-auto leading-relaxed">
            De Superman a MasterChef, de Serra Pelada a Operação Fronteira — novidades toda semana.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="140" className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {titulos.map((t, i) => <PosterCard key={t.nome} titulo={t} destaque={i === 0} />)}
        </div>
      </div>
    </section>
  )
}
