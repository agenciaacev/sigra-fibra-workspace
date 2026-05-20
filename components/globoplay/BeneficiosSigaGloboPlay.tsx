import React from 'react'
const beneficios = [
  {
    title: 'Sem cartão de crédito',
    desc: 'Assine direto na sua fatura Siga Fibra. Simples e sem burocracia.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Pagamento unificado',
    desc: 'Internet e streaming numa única fatura mensal. Sem complicação.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Marca confiável',
    desc: 'Siga Fibra — tradição e reconhecimento no Ceará. Você está em boas mãos.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Reconhecimento',
    desc: 'Premiada pelo melhor serviço de internet no Nordeste. Qualidade comprovada.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
]

export default function BeneficiosSigaGloboPlay() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Vantagens exclusivas
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 max-w-[540px] mx-auto leading-tight">
            Na Siga Fibra você tem mais vantagens.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120"
            className="text-gray-500 mt-4 max-w-[560px] mx-auto leading-relaxed">
            Sem cartão de crédito, pagamento unificado na sua fatura, marca confiável e reconhecida no Ceará — tudo para você aproveitar o Globoplay sem complicação.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beneficios.map((item, i) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80}
              className="p-5 sm:p-7 rounded-3xl bg-gray-50 flex flex-col gap-4"
              style={{ border: '1px solid #efefef' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                style={{ background: i % 2 === 0 ? '#27CAA3' : '#03C2C3' }}>
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
