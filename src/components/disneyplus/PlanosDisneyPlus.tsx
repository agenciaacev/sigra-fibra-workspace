import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlanosDisneyPlus() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#001433' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Escolha seu plano
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Com anúncio ou sem —{' '}
            <span style={{ color: '#27CAA3' }}>do seu jeito.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-14">

          {/* Standard com anúncio */}
          <div data-aos="fade-up" data-aos-delay="80"
            className="p-5 sm:p-8 rounded-3xl flex flex-col gap-5"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,99,229,0.3)' }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0063e5' }}>Disney+ Standard</span>
              <h3 className="text-xl font-extrabold text-white mt-1">Com anúncios — mais acessível.</h3>
              <p className="text-sm text-gray-400 mt-1">Acesso ao catálogo completo com breves intervalos.</p>
            </div>
            <ul className="flex flex-col gap-2">
              {['Catálogo completo Disney+', 'Marvel, Pixar, Star Wars', 'Disponível nos planos Siga Fibra', 'Sem fidelidade e sem cartão'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(39,202,163,0.15)' }}>
                    <svg className="w-2.5 h-2.5" fill="none" stroke="#27CAA3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="mt-auto font-bold py-3 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#27CAA3' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}>
              Ver planos
            </button>
          </div>

          {/* Premium sem anúncio */}
          <div data-aos="fade-up" data-aos-delay="160"
            className="p-5 sm:p-8 rounded-3xl flex flex-col gap-5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #001f5c, #000d26)', border: '2px solid #0063e5' }}>
            <div className="absolute top-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#27CAA3' }}>
              Incluso no Premium
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0063e5' }}>Disney+ Premium</span>
              <h3 className="text-xl font-extrabold text-white mt-1">Sem anúncios. Sem interrupções.</h3>
              <p className="text-sm text-gray-400 mt-1">Experiência imersiva com qualidade máxima.</p>
            </div>
            <ul className="flex flex-col gap-2">
              {['Catálogo completo sem anúncios', '4K Ultra HD + Dolby Atmos', 'Downloads para assistir offline', 'Já incluso nos planos Premium'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(0,99,229,0.2)' }}>
                    <svg className="w-2.5 h-2.5" fill="none" stroke="#0063e5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="mt-auto font-bold py-3 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #0063e5, #001f5c)' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.opacity = '1'}>
              Quero o Premium
            </button>
          </div>
        </div>

        {/* Comparativo visual placeholder */}
        <div data-aos="fade-up" data-aos-delay="200"
          className="flex items-center justify-center gap-8 lg:gap-12 py-8 px-10 rounded-3xl max-w-[500px] mx-auto"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,99,229,0.2)' }}>
          {/* Com anúncio */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
              style={{ background: 'rgba(255,255,255,0.08)' }}>
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {/* Riscado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 rotate-45 rounded-full bg-red-500 opacity-70" />
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">Com anúncios</p>
          </div>

          <div className="text-gray-700 font-bold text-lg">vs</div>

          {/* Sem anúncio */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(0,99,229,0.15)', border: '1px solid rgba(0,99,229,0.3)' }}>
              <svg className="w-8 h-8" fill="none" stroke="#0063e5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 text-center">Sem interrupções</p>
          </div>
        </div>

      </div>
    </section>
  )
}
