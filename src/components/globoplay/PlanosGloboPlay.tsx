import React from 'react'
import { useNavigate } from 'react-router-dom'

function MockupPlaceholder({ label, dark }) {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2"
      style={{
        background: dark ? '#1a0005' : '#111',
        border: `1px solid ${dark ? 'rgba(232,0,45,0.2)' : 'rgba(255,255,255,0.08)'}`,
      }}>
      <svg className="w-10 h-10 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span className="text-xs text-gray-700 text-center px-4">{label}</span>
    </div>
  )
}

export default function PlanosGloboPlay() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#111' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Escolha seu plano
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Com anúncio ou sem anúncio —{' '}
            <span style={{ color: '#27CAA3' }}>você decide.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Com anúncio */}
          <div data-aos="fade-up" data-aos-delay="80" className="flex flex-col gap-5">
            <MockupPlaceholder label="Mockup celular com interface Globoplay — plano com anúncio" dark={false} />
            <div className="p-5 sm:p-8 rounded-3xl flex flex-col gap-5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(232,0,45,0.2)' }}>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#e8002d' }}>Globoplay</span>
                <h3 className="text-xl font-extrabold text-white mt-1">Com anúncios</h3>
                <p className="text-sm text-gray-400 mt-1">Acesso completo ao catálogo com breves intervalos de anúncios.</p>
              </div>
              <ul className="flex flex-col gap-2">
                {['Novelas, filmes e séries', 'Originais Globoplay', 'Até 9 canais ao vivo', '3 telas simultâneas', 'Sem fidelidade, sem cartão'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(39,202,163,0.15)' }}>
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
                Assine já
              </button>
            </div>
          </div>

          {/* Premium */}
          <div data-aos="fade-up" data-aos-delay="160" className="flex flex-col gap-5">
            <MockupPlaceholder label="Mockup Smart TV grande — Globoplay Premium sem anúncios" dark={true} />
            <div className="p-5 sm:p-8 rounded-3xl flex flex-col gap-5 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #2d0008, #1a0005)', border: '2px solid #e8002d' }}>
              <div className="absolute top-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full text-white"
                style={{ background: '#27CAA3' }}>
                Incluso no Premium
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#e8002d' }}>Globoplay</span>
                <h3 className="text-xl font-extrabold text-white mt-1">Sem anúncios</h3>
                <p className="text-sm text-gray-400 mt-1">Experiência limpa do início ao fim.</p>
              </div>
              <ul className="flex flex-col gap-2">
                {['Todo o catálogo sem anúncios', 'Até 26 canais ao vivo', '5 telas simultâneas', 'Sem fidelidade, sem cartão', 'Já incluso nos planos Premium'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(232,0,45,0.15)' }}>
                      <svg className="w-2.5 h-2.5" fill="none" stroke="#e8002d" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
                className="mt-auto font-bold py-3 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #e8002d, #f26522)' }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.opacity = '1'}>
                Quero o Premium
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
