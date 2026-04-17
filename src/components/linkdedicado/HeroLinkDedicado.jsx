import { useNavigate } from 'react-router-dom'

export default function HeroLinkDedicado() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#111' }}>

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Glow */}
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #27CAA3, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #03C2C3, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

        {/* Left */}
        <div>
          <div data-aos="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 text-white"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#27CAA3' }} />
              Link Dedicado Empresarial
            </span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6">
            Internet exclusiva para a sua empresa.{' '}
            <span style={{ color: '#27CAA3' }}>Sem compartilhamento, sem limites.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-lg leading-relaxed mb-10 text-gray-400 max-w-[500px]">
            Com o Link Dedicado da Siga Fibra, sua empresa tem acesso total à internet com banda exclusiva, conexão permanente e IP dedicado. Do jeito que negócio sério precisa.
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <button
              onClick={() => navigate('/empresa/atendimento/canais')}
              className="font-bold px-4 sm:px-6 lg:px-8 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={e => e.currentTarget.style.background = '#03C2C3'}
              onMouseLeave={e => e.currentTarget.style.background = '#27CAA3'}
            >
              Quero contratar agora
            </button>
          </div>
        </div>

        {/* Right: visual placeholder */}
        <div data-aos="fade-left" data-aos-delay="200"
          className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>

            {/* Photo placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <svg className="w-12 h-12 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Foto do ambiente corporativo</span>
            </div>

            {/* Floating stat cards */}
            <div className="absolute bottom-6 left-6 px-4 py-3 rounded-2xl"
              style={{ background: 'rgba(39,202,163,0.15)', border: '1px solid rgba(39,202,163,0.3)', backdropFilter: 'blur(8px)' }}>
              <p className="text-xs text-gray-400">Velocidade</p>
              <p className="text-xl font-extrabold text-white">10 Gbps</p>
            </div>
            <div className="absolute top-6 right-6 px-4 py-3 rounded-2xl"
              style={{ background: 'rgba(3,194,195,0.15)', border: '1px solid rgba(3,194,195,0.3)', backdropFilter: 'blur(8px)' }}>
              <p className="text-xs text-gray-400">Uptime</p>
              <p className="text-xl font-extrabold text-white">99,9%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
