'use client'

const steps = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Compartilhe seu link',
    desc: 'Acesse o app Siga Fibra ou o banner "Amigo Indica" no site e gere seu link de indicação. Envie para quem você quiser.',
    detail: 'Só via canal oficial é válido',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Amigo contrata',
    desc: 'Seu amigo preenche o formulário, assina o contrato e paga a primeira fatura. O comercial entra em contato em até 5 dias.',
    detail: 'Planos de 200Mb a 1000Mb',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Você ganha 1 mês grátis',
    desc: 'No mês seguinte à confirmação, você recebe 100% de desconto em uma mensalidade do seu plano atual. Automático.',
    detail: 'Desconto no mês seguinte',
  },
]

export default function ComoFuncionaAmigoIndica() {
  return (
    <section id="como-funciona" className="py-16 md:py-24" style={{ background: '#f0fdf9' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Simples assim
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: '#0f2d22' }}>
            Como funciona o Amigo Indica
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 mt-3 max-w-[520px] mx-auto">
            Três passos simples para ganhar meses grátis na sua mensalidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 80}
              className="relative flex flex-col items-center text-center p-8 rounded-3xl"
              style={{
                background: '#fff',
                border: '1px solid rgba(39,202,163,0.18)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}>

              {/* Connector arrow between cards (desktop only) */}
              {i < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 z-10 w-6 h-6 items-center justify-center rounded-full"
                  style={{ background: '#27CAA3', transform: 'translateY(-50%)' }}>
                  <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Step number badge */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #27CAA3, #03C2C3)', color: '#fff' }}>
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center text-white"
                  style={{ background: '#0f2d22' }}>
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-extrabold mb-3" style={{ color: '#0f2d22' }}>{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{step.desc}</p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(39,202,163,0.1)', color: '#27CAA3' }}>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
