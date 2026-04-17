import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#111' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute -top-20 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #27CAA3, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #03C2C3, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

        {/* Left */}
        <div>
          <span data-aos="fade-up" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 text-white"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#27CAA3' }} />
            Internet de verdade
          </span>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-5">
            Fibra de verdade{' '}
            <span style={{ color: '#27CAA3' }}>na sua casa,</span>{' '}sem travar.
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-base lg:text-lg leading-relaxed mb-8 text-gray-400 max-w-[480px]">
            Velocidade que você sente na prática. Instalação rápida, planos acessíveis e suporte quando precisar.
          </p>

          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => navigate('/pessoa-fisica/internet-fibra')}
              className="font-bold px-6 py-3.5 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={e => e.currentTarget.style.background = '#03C2C3'}
              onMouseLeave={e => e.currentTarget.style.background = '#27CAA3'}>
              Ver planos de internet
            </button>
            <button onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="font-semibold px-6 py-3.5 rounded-2xl text-sm transition-all duration-200 text-gray-300"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#27CAA3'; e.currentTarget.style.color = '#27CAA3' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#d1d5db' }}>
              Falar com especialista
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="260"
            className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
            {[{ num: '600mb', label: 'a partir de' }, { num: '24h', label: 'suporte' }, { num: '+500k', label: 'clientes' }].map((s, i) => (
              <div key={s.label} className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-white">{s.num}</p>
                  <p className="text-xs mt-0.5 text-gray-500">{s.label}</p>
                </div>
                {i < 2 && <div className="w-px h-8 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right — hidden on mobile */}
        <div data-aos="fade-left" data-aos-delay="200" className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="rounded-3xl p-8 w-[300px]"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#27CAA3' }}>Plano mais popular</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-6xl font-extrabold text-white leading-none">600</span>
                <span className="text-xl font-bold mb-2 text-gray-400">Mb</span>
              </div>
              <p className="text-sm mb-5 text-gray-500">de velocidade real</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-sm text-gray-400">R$</span>
                <span className="text-3xl font-extrabold text-white">84</span>
                <span className="text-sm text-gray-400">,90/mês</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {[{ label: 'Download', val: '600 Mb/s' }, { label: 'Upload', val: '300 Mb/s' }].map(item => (
                  <div key={item.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <p className="text-xs font-bold" style={{ color: '#03C2C3' }}>{item.label}</p>
                    <p className="text-white font-bold text-sm mt-0.5">{item.val}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/pessoa-fisica/internet-fibra')}
                className="w-full font-bold py-3 rounded-xl text-sm text-white transition-all duration-200"
                style={{ background: '#27CAA3' }}
                onMouseEnter={e => e.currentTarget.style.background = '#03C2C3'}
                onMouseLeave={e => e.currentTarget.style.background = '#27CAA3'}>
                Contratar agora
              </button>
            </div>
            <div className="absolute -top-4 -right-4 text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#27CAA3' }}>
              Sem fidelidade
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
