import { useNavigate } from 'react-router-dom'

const results = [
  { num: 'Zero', label: 'dependência de redes públicas' },
  { num: '100%', label: 'rede privada exclusiva' },
  { num: '24h', label: 'suporte especializado' },
  { num: '+5k km', label: 'de fibra própria' },
]

export default function CtaLanToLan() {
  const navigate = useNavigate()

  return (
    <section className="py-14 md:py-24 relative overflow-hidden" style={{ background: '#27CAA3' }}>

      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #03C2C3, transparent 70%)' }} />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-4 text-white opacity-70">
              Resultado garantido
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
              Mais agilidade. Mais segurança.{' '}
              <span className="underline decoration-white/40">Mais resultado.</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="120"
              className="text-white opacity-80 leading-relaxed mb-10">
              O LAN to LAN da Siga Fibra conecta sua matriz às filiais com a estabilidade que seu time precisa para trabalhar sem interrupções. Infraestrutura empresarial de verdade, no Ceará.
            </p>

            <div data-aos="fade-up" data-aos-delay="180" className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/empresa/atendimento/autoatendimento')}
                className="font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wide bg-white transition-all duration-200"
                style={{ color: '#27CAA3' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f0f0f0'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                Assinar pelo WhatsApp
              </button>
              <button
                onClick={() => navigate('/empresa/atendimento/canais')}
                className="font-semibold px-8 py-4 rounded-2xl text-sm text-white transition-all duration-200"
                style={{ border: '2px solid rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#fff'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
              >
                Falar com consultor
              </button>
            </div>
          </div>

          {/* Right: results grid */}
          <div className="grid grid-cols-2 gap-4">
            {results.map((r, i) => (
              <div key={r.label} data-aos="zoom-in" data-aos-delay={200 + i * 60}
                className="p-5 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <p className="text-2xl font-extrabold text-white">{r.num}</p>
                <p className="text-xs text-white opacity-70 mt-1">{r.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
