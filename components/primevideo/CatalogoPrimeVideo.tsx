import React from 'react'

const titulos = [
  { nome: 'The Boys',         genero: 'Original Amazon',  cor: '#c0392b' },
  { nome: 'Reacher',          genero: 'Original Amazon',  cor: '#1a1a2e' },
  { nome: 'Fallout',          genero: 'Original Amazon',  cor: '#7d5a2c' },
  { nome: 'Citadel',          genero: 'Original Amazon',  cor: '#0a1628' },
  { nome: 'LOL: Quem ri, sai',genero: 'Exclusivo Brasil', cor: '#00A8E1' },
]

const categorias = [
  { label: 'Originais Amazon', cor: '#00A8E1' },
  { label: 'Filmes de Estreia', cor: '#FF9900' },
  { label: 'Esportes ao Vivo', cor: '#27CAA3' },
  { label: 'Séries Exclusivas', cor: '#a855f7' },
  { label: 'Documentários', cor: '#6b7280' },
]

function PosterCard({ titulo, destaque }: { titulo: typeof titulos[0]; destaque: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden relative flex flex-col justify-end"
      style={{ aspectRatio: '2/3', background: `linear-gradient(180deg, ${titulo.cor}66 0%, #00050d 100%)`, border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <svg className="w-8 h-8 opacity-10" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
        <span className="text-xs text-gray-800 text-center px-2">Pôster {titulo.nome}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)' }}>
        <p className="text-white font-bold text-sm">{titulo.nome}</p>
        <p className="text-xs mt-0.5" style={{ color: '#00A8E1' }}>{titulo.genero}</p>
      </div>
      {destaque && (
        <div className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: '#27CAA3' }}>
          Destaque
        </div>
      )}
    </div>
  )
}

export default function CatalogoPrimeVideo() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#00050d' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#00A8E1' }}>
            Catálogo
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-[620px] mx-auto">
            Os melhores Originais Amazon e lançamentos exclusivos.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 max-w-[500px] mx-auto leading-relaxed">
            Novos títulos toda semana — de grandes produções Hollywood a séries que só existem no Prime Video.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="140" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
          {titulos.map((t, i) => <PosterCard key={t.nome} titulo={t} destaque={i === 0} />)}
        </div>

        <div data-aos="fade-up" data-aos-delay="180"
          className="flex flex-wrap justify-center gap-3">
          {categorias.map((cat) => (
            <div key={cat.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${cat.cor}44`, color: cat.cor }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.cor }} />
              {cat.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
