'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HeroAmigoIndica() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 520 }}>

      {/* Background */}
      <Image
        src="/img/banners/residencial/hero-amigoindica.png"
        alt=""
        fill
        className="object-cover"
        priority
      />


      {/* Overlay para legibilidade do texto */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(6,13,15,0.82) 0%, rgba(6,13,15,0.55) 55%, rgba(6,13,15,0.25) 100%)' }} />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[620px]" data-aos="fade-right">

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

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
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
                  <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">{s.label}</p>
                </div>
                {i < 2 && <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.15)' }} />}
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
      </div>
    </section>
  )
}
