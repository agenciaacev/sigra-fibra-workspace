import React from 'react'
import { useNavigate } from 'react-router-dom'

const specs = [
  { label: 'Velocidade máxima', value: '10 Gbps' },
  { label: 'Tipo de conexão', value: 'Fibra óptica' },
  { label: 'IP', value: 'Dedicado e fixo' },
  { label: 'Disponibilidade', value: '24h / 7 dias' },
  { label: 'SLA', value: 'Garantido por contrato' },
  { label: 'Suporte', value: 'Especializado' },
]

export default function InfraestruturaLinkDedicado() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden" style={{ background: '#f9f9f9' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
            Infraestrutura
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight max-w-[700px] mx-auto">
            Toda a gama de serviços internet em uma única conexão robusta.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120"
            className="text-gray-500 mt-4 max-w-[580px] mx-auto leading-relaxed">
            Com velocidades de até 10 Gbps e acesso direto via fibra óptica, o Link Dedicado da Siga Fibra suporta sistemas em nuvem, VoIP, videoconferência e muito mais, com estabilidade e qualidade de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, i) => (
              <div key={spec.label} data-aos="fade-up" data-aos-delay={i * 60}
                className="p-5 rounded-2xl bg-white"
                style={{ border: '1px solid #efefef' }}>
                <p className="text-xs text-gray-400 font-medium mb-1">{spec.label}</p>
                <p className="text-lg font-extrabold text-gray-900">{spec.value}</p>
                <div className="w-8 h-0.5 mt-2 rounded-full" style={{ background: i % 2 === 0 ? '#27CAA3' : '#03C2C3' }} />
              </div>
            ))}
          </div>

          {/* Right: photo placeholder + CTA */}
          <div data-aos="fade-left" data-aos-delay="100" className="flex flex-col gap-6">
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center gap-3"
              style={{ border: '2px dashed #e5e5e5' }}>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-400">Foto de equipe / escritório conectado</span>
            </div>

            <button
              onClick={() => navigate('/empresa/atendimento/canais')}
              className="w-full font-bold py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: '#03C2C3' }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#27CAA3'}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.background = '#03C2C3'}
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
