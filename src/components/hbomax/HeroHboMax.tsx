import { useNavigate } from 'react-router-dom'

export default function HeroHboMax() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d001f 0%, #1a0044 40%, #0a0030 100%)' }}>

      <div className="absolute -top-32 right-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6600cc, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0033cc, transparent 70%)' }} />

      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-2" style={{ background: '#0d001f' }}>
        <svg className="w-16 h-16 opacity-10" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs text-gray-800">Foto lifestyle 16:9 — casal no sofá assistindo HBO Max</span>
      </div>
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(13,0,31,0.97) 40%, rgba(13,0,31,0.4) 100%)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="max-w-[620px]">

          <div data-aos="fade-up" className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: 'linear-gradient(135deg, #6600cc, #0033cc)', border: '1px solid rgba(102,0,204,0.5)' }}>
              HBO Max
            </div>
            <span className="text-gray-600 font-bold">×</span>
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: '#27CAA3' }}>
              Siga Fibra
            </div>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Os melhores filmes e as melhores séries —{' '}
            <span style={{ color: '#27CAA3' }}>agora no seu plano Siga Fibra.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-base lg:text-lg leading-relaxed mb-10 text-gray-400 max-w-[480px]">
            Assine o HBO Max com a Siga Fibra e tenha acesso ao melhor do entretenimento mundial. Com anúncio ou sem anúncio — você escolhe.
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <button
              onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="font-bold px-8 sm:px-10 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}
            >
              Quero essa oferta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
