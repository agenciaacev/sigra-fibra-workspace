import { useNavigate } from 'react-router-dom'

export default function HeroEmpresa() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: '#111' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #03C2C3, transparent 70%)' }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #27CAA3, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 text-white"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#03C2C3' }} />
            Soluções para empresas
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Conectividade que{' '}
            <span style={{ color: '#03C2C3' }}>não para</span>
            {' '}quando seu negócio precisa.
          </h1>

          <p className="text-lg leading-relaxed mb-10 max-w-[480px] text-gray-400">
            Internet de alta performance, telefonia e soluções digitais para empresas de todos os tamanhos. SLA garantido e suporte dedicado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/empresa/internet/fibra')}
              className="font-bold px-4 sm:px-6 lg:px-8 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#03C2C3' }}
              onMouseEnter={e => e.currentTarget.style.background = '#27CAA3'}
              onMouseLeave={e => e.currentTarget.style.background = '#03C2C3'}
            >
              Ver soluções de internet
            </button>
            <button
              onClick={() => navigate('/empresa/atendimento/canais')}
              className="font-semibold px-4 sm:px-6 lg:px-8 py-4 rounded-2xl text-sm transition-all duration-200 text-gray-300"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#03C2C3'; e.currentTarget.style.color = '#03C2C3' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#d1d5db' }}
            >
              Falar com consultor
            </button>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-white/10 flex-wrap">
            {[{ num: '99,9%', label: 'uptime garantido' }, { num: '4h', label: 'SLA atendimento' }, { num: '+20k', label: 'empresas atendidas' }].map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-white">{s.num}</p>
                  <p className="text-xs mt-0.5 text-gray-500">{s.label}</p>
                </div>
                {i < 2 && <div className="w-px h-10 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative w-[340px]">
            <div className="rounded-3xl p-7" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#03C2C3' }}>Nossas soluções</p>
              {[
                { label: 'Internet Fibra Empresarial', desc: 'Até 10 Gbps simétrico' },
                { label: 'Link Dedicado', desc: 'IP fixo e SLA garantido' },
                { label: 'Lan To Lan', desc: 'Conecte suas unidades' },
                { label: 'Telefonia Corporativa', desc: 'Fixo e celular integrados' },
              ].map((item, i) => (
                <div key={item.label} className={`flex items-center gap-4 py-4 ${i < 3 ? 'border-b border-white/8' : ''}`}>
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: i % 2 === 0 ? '#27CAA3' : '#03C2C3' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-xs mt-0.5 text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
              <button
                onClick={() => navigate('/empresa/atendimento/canais')}
                className="w-full mt-6 font-bold py-3 rounded-xl text-sm text-white transition-all duration-200"
                style={{ background: '#03C2C3' }}
                onMouseEnter={e => e.currentTarget.style.background = '#27CAA3'}
                onMouseLeave={e => e.currentTarget.style.background = '#03C2C3'}
              >
                Solicitar proposta
              </button>
            </div>
            <div className="absolute -top-4 -right-4 text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#27CAA3' }}>
              Contrato flexível
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
