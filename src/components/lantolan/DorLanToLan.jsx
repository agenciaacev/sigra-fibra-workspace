import { useNavigate } from 'react-router-dom'

const pains = [
  'Arquivos que não sincronizam entre unidades',
  'Sistemas lentos quando acessados remotamente',
  'Dados trafegando por redes públicas sem segurança',
  'Suporte técnico que nunca chega a tempo',
]

export default function DorLanToLan() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#111' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: photo placeholder */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <svg className="w-12 h-12 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-600">Foto de time com problema de conexão entre unidades</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #03C2C3, transparent 70%)' }} />
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
              Reconhece essa situação?
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
              Cansado de instabilidade na comunicação entre as{' '}
              <span style={{ color: '#03C2C3' }}>unidades da sua empresa?</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120"
              className="text-gray-400 leading-relaxed mb-10">
              Com o LAN to LAN da Siga Fibra, você tem uma rede privada exclusiva para o seu negócio. Controle total, zero dependência de redes públicas, e suporte especializado sempre que precisar.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {pains.map((pain, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={160 + i * 60}
                  className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(3,194,195,0.15)', border: '1px solid rgba(3,194,195,0.3)' }}>
                    <svg className="w-3 h-3" fill="none" stroke="#03C2C3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">{pain}</p>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="420">
              <button
                onClick={() => navigate('/empresa/atendimento/canais')}
                className="font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
                style={{ background: '#03C2C3' }}
                onMouseEnter={e => e.currentTarget.style.background = '#27CAA3'}
                onMouseLeave={e => e.currentTarget.style.background = '#03C2C3'}
              >
                Falar com um consultor
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
