'use client'

import { useRouter } from 'next/navigation'

export default function HeroAmigoIndica() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden" style={{ background: '#060d0f' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(39,202,163,0.13), transparent), radial-gradient(ellipse 50% 60% at 100% 20%, rgba(3,194,195,0.08), transparent)',
      }} />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Copy */}
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(39,202,163,0.12)', border: '1px solid rgba(39,202,163,0.25)', color: '#27CAA3' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#27CAA3', animation: 'pulse 2s infinite' }} />
              Promoção ativa
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Indique um amigo{' '}
              <span style={{
                background: 'linear-gradient(135deg, #27CAA3, #03C2C3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                e ganhe 1 mês grátis.
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              A cada amigo que contratar a Siga Fibra pela sua indicação, você ganha{' '}
              <strong className="text-white">100% de desconto em uma mensalidade</strong> do seu plano. Sem limite de indicações.
            </p>

            <div className="flex items-center gap-8 mb-10 flex-wrap">
              {[
                { value: '100%', label: 'de desconto' },
                { value: '1 mês', label: 'por indicação' },
                { value: '∞', label: 'indicações' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-extrabold" style={{ color: '#27CAA3' }}>{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wide">{s.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                className="font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #27CAA3, #03C2C3)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.88'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
              >
                Quero indicar agora
              </button>
              <a href="#como-funciona" className="text-sm font-semibold" style={{ color: '#27CAA3' }}>
                Como funciona →
              </a>
            </div>
          </div>

          {/* Card visual */}
          <div data-aos="fade-left" data-aos-delay="80" className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              <div className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(39,202,163,0.15), rgba(3,194,195,0.08))',
                  border: '1.5px solid rgba(39,202,163,0.3)',
                }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #27CAA3, transparent)' }} />

                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#27CAA3' }}>Seu benefício</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-7xl font-black text-white leading-none">1</span>
                  <span className="text-2xl font-bold text-white mb-3">mês</span>
                </div>
                <p className="text-gray-300 text-sm font-semibold mb-6">100% grátis por indicação confirmada</p>

                <div className="rounded-2xl p-4 mb-4" style={{ background: 'rgba(0,0,0,0.35)' }}>
                  <p className="text-xs text-gray-500 mb-2">Você indica → Amigo assina</p>
                  <div className="flex items-center gap-3">
                    <div className="flex" style={{ gap: '-8px' }}>
                      {['#27CAA3', '#03C2C3', '#0ea5e9'].map((c, i) => (
                        <div key={i}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{
                            background: c,
                            border: '2px solid #060d0f',
                            marginLeft: i > 0 ? '-8px' : '0',
                          }}>
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-white font-semibold">+3 amigos indicados</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.2)' }}>
                  <span className="text-sm text-gray-300">Desconto acumulado</span>
                  <span className="text-sm font-extrabold" style={{ color: '#27CAA3' }}>3 meses grátis</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #27CAA3, #03C2C3)', transform: 'rotate(6deg)' }}>
                <span className="text-white font-black text-xl leading-none">%</span>
                <span className="text-white text-[9px] font-bold">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
