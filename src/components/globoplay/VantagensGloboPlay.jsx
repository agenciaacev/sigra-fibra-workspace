const vantagens = [
  {
    title: 'Compartilhe com a família',
    desc: 'Até 5 perfis e 3 ou 5 telas simultâneas dependendo do plano escolhido.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Sob demanda',
    desc: 'Acervo completo da Globo disponível para assistir quando e como quiser.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Canais ao vivo',
    desc: 'Até 26 canais ao vivo com programação em tempo real direto na sua tela.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: 'Todos os dispositivos',
    desc: 'Smart TV, celular, tablet e computador — assista de onde estiver.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function VantagensGloboPlay() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#1a0005' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Por que assinar?
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-[600px] mx-auto leading-tight">
            Descubra as vantagens de assinar o Globoplay.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120"
            className="text-gray-500 mt-4 max-w-[560px] mx-auto leading-relaxed">
            Compartilhe com a família, assista sob demanda, acompanhe canais ao vivo e use em todos os seus dispositivos.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vantagens.map((item, i) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80}
              className="p-5 sm:p-7 rounded-3xl flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(232,0,45,0.15)' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                style={{ background: i % 2 === 0 ? '#27CAA3' : 'linear-gradient(135deg, #e8002d, #f26522)' }}>
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-white text-base mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
