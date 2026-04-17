import { useNavigate } from 'react-router-dom'

export default function HeroSkyMais() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001a4d 0%, #003087 50%, #001a4d 100%)' }}>

      {/* Sky+ blue glow */}
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0055cc, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e4002b, transparent 70%)' }} />

      {/* Foto placeholder */}
      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-2"
        style={{ background: '#001a4d' }}>
        <svg className="w-16 h-16 opacity-10" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs text-gray-800">Foto lifestyle 16:9 — família no sofá assistindo TV com Sky+</span>
      </div>
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(0,26,77,0.97) 40%, rgba(0,26,77,0.35) 100%)' }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="max-w-[620px]">

          {/* Badges de marca */}
          <div data-aos="fade-up" className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: 'linear-gradient(135deg, #003087, #0055cc)', border: '1px solid rgba(0,85,204,0.5)' }}>
              Sky+
            </div>
            <span className="text-gray-600 font-bold">×</span>
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: '#27CAA3' }}>
              Siga Fibra
            </div>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Mais diversão para toda a família com o{' '}
            <span style={{ color: '#27CAA3' }}>Sky+ na Siga Fibra.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-lg leading-relaxed mb-10 text-gray-400 max-w-[480px]">
            Mais de 70 canais ao vivo, filmes, séries, esportes e muito mais — tudo incluso no seu plano Siga Fibra, sem complicação.
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <button
              onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="font-bold px-10 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={e => e.currentTarget.style.background = '#03C2C3'}
              onMouseLeave={e => e.currentTarget.style.background = '#27CAA3'}
            >
              Quero essa oferta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
