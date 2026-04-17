const titulos = [
  { nome: 'Novela em Destaque', tipo: 'Novela', destaque: true },
  { nome: 'Jornal Nacional', tipo: 'Telejornal' },
  { nome: 'Série Original', tipo: 'Original Globoplay' },
  { nome: 'Transmissão Esportiva', tipo: 'Esportes ao vivo' },
]

function ThumbCard({ titulo }) {
  return (
    <div
      className="rounded-2xl overflow-hidden relative flex items-end"
      style={{
        aspectRatio: '16/9',
        background: 'linear-gradient(180deg, #2d0008 0%, #1a0005 100%)',
        border: '1px solid rgba(232,0,45,0.15)',
      }}
    >
      {/* Placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <svg className="w-8 h-8 opacity-15" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
        <span className="text-xs text-gray-700 text-center px-3">Thumbnail {titulo.nome}</span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)' }}>
        <p className="text-white font-bold text-sm">{titulo.nome}</p>
        <p className="text-xs mt-0.5" style={{ color: '#e8002d' }}>{titulo.tipo}</p>
      </div>

      {titulo.destaque && (
        <div className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{ background: '#27CAA3' }}>
          Destaque
        </div>
      )}
    </div>
  )
}

export default function CatalogoGloboPlay() {
  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#111' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#e8002d' }}>
            Catálogo
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-[600px] mx-auto leading-tight">
            Explore os títulos imperdíveis do Globoplay.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120"
            className="text-gray-500 mt-4 max-w-[540px] mx-auto leading-relaxed">
            De novelas clássicas a estreias originais — o melhor entretenimento nacional em um só lugar, séries, filmes e canais ao vivo.
          </p>
        </div>

        {/* Grade 16:9 — primeiro item maior */}
        <div data-aos="fade-up" data-aos-delay="140" className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <ThumbCard titulo={titulos[0]} />
          <ThumbCard titulo={titulos[1]} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ThumbCard titulo={titulos[2]} />
          <ThumbCard titulo={titulos[3]} />
        </div>

      </div>
    </section>
  )
}
