import React from 'react'
import { useNavigate } from 'react-router-dom'

const passos = [
  { num: '01', title: 'Acesse o app', desc: 'Baixe ou abra o app Sky+ no seu dispositivo.' },
  { num: '02', title: 'Selecione a operadora', desc: 'Escolha sua operadora na tela de acesso.' },
  { num: '03', title: 'Escolha Siga Fibra', desc: 'Selecione Siga Fibra com destaque e check verde.' },
  { num: '04', title: 'Entre e assista!', desc: 'Em minutos você já está assistindo.' },
]

export default function ComoAcessarSkyMais() {
  const navigate = useNavigate()

  return (
    <section className="py-14 md:py-24 relative overflow-hidden" style={{ background: '#27CAA3' }}>
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #003087, transparent 70%)' }} />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3 text-white opacity-70">Simples assim</p>
          <h2 data-aos="fade-up" data-aos-delay="60" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Acessar o Sky+ pela Siga Fibra é simples e rápido.
          </h2>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {passos.map((passo, i) => (
            <div key={passo.num} data-aos="fade-up" data-aos-delay={i * 80}
              className="p-6 rounded-2xl relative flex flex-col gap-3"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white opacity-20 leading-none">{passo.num}</span>
              <p className="font-bold text-white">{passo.title}</p>
              <p className="text-sm text-white opacity-70 leading-relaxed">{passo.desc}</p>
              {i < 3 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mockup celulares placeholder */}
        <div data-aos="fade-up" data-aos-delay="200"
          className="w-full max-w-[800px] mx-auto aspect-[4/3] sm:aspect-[16/5] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3 mb-14"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <svg className="w-12 h-12 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span className="text-sm text-white opacity-40">4 mockups de celular — passo a passo de ativação Sky+</span>
        </div>

        <div data-aos="fade-up" data-aos-delay="260" className="text-center">
          <button onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
            className="font-bold px-8 sm:px-12 py-4 rounded-2xl text-sm uppercase tracking-wide bg-white transition-all duration-200"
            style={{ color: '#27CAA3' }}
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#f0f0f0'}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#fff'}>
            Quero ativar agora
          </button>
        </div>
      </div>
    </section>
  )
}
