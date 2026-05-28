'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function HeroPrimeVideo() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #00050d 0%, #0a1628 50%, #00050d 100%)' }}>

      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00A8E1, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #27CAA3, transparent 70%)' }} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="max-w-[660px]">

          <div data-aos="fade-up" className="flex items-center gap-3 mb-8">
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: 'linear-gradient(135deg, #00A8E1, #0a1628)', border: '1px solid rgba(0,168,225,0.5)' }}>
              Prime Video
            </div>
            <span className="text-gray-600 font-bold">×</span>
            <div className="px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest"
              style={{ background: '#27CAA3' }}>
              Siga Fibra
            </div>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Séries, filmes e esportes ao vivo{' '}
            <span style={{ color: '#00A8E1' }}>com a velocidade que você merece.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="140"
            className="text-lg leading-relaxed mb-10 text-gray-400 max-w-[520px]">
            Prime Video no seu plano Siga Fibra — acesse os melhores Originais Amazon, filmes de estreia, séries exclusivas e transmissões ao vivo. Sem travar, sem buffering.
          </p>

          <div data-aos="fade-up" data-aos-delay="180" className="flex flex-wrap gap-2 mb-10">
            {['Originais Amazon', 'Filmes de Estreia', 'Esportes ao Vivo', 'Séries Exclusivas', '4K Ultra HD', 'Modo Offline'].map((f) => (
              <span key={f} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}>
                {f}
              </span>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="220" className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
              className="font-bold px-10 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}
            >
              Quero assinar agora
            </button>
            <a href="#beneficios"
              className="text-sm font-semibold transition-colors duration-200"
              style={{ color: '#00A8E1' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.color = '#27CAA3'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.color = '#00A8E1'}
            >
              Ver benefícios →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
