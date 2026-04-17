import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeroDisneyPlus() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #000d26 0%, #001f5c 50%, #000d26 100%)' }}>

      {/* Disney+ blue starfield glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0063e5, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #27CAA3, transparent 70%)' }} />

      {/* Foto placeholder */}
      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-2"
        style={{ background: '#000d26' }}>
        <svg className="w-16 h-16 opacity-10" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs text-gray-800">Cena épica Disney/Marvel/Star Wars 16:9 — tom escuro com brilhos</span>
      </div>
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(0,13,38,0.97) 40%, rgba(0,13,38,0.3) 100%)' }} />

      {/* Star pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="max-w-[640px]">

          {/* Badges */}
          <div data-aos="fade-up" className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: 'linear-gradient(135deg, #001f5c, #0063e5)', border: '1px solid rgba(0,99,229,0.5)' }}>
              Disney+
            </div>
            <span className="text-gray-600 font-bold">×</span>
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: '#27CAA3' }}>
              Siga Fibra
            </div>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Assine o Disney+ com a Siga Fibra e aproveite filmes e séries{' '}
            <span style={{ color: '#27CAA3' }}>sem interrupção.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-lg leading-relaxed mb-10 text-gray-400 max-w-[500px]">
            Disney, Marvel, Pixar, Star Wars, ESPN e muito mais — incluso no seu plano. Sem travar, sem buffering.
          </p>

          {/* Franquias */}
          <div data-aos="fade-up" data-aos-delay="180" className="flex flex-wrap gap-2 mb-10">
            {['Disney', 'Marvel', 'Pixar', 'Star Wars', 'ESPN', 'National Geographic'].map((f, i) => (
              <span key={f} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                {f}
              </span>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="220">
            <button
              onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="font-bold px-10 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}
            >
              Quero assinar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
