const badges = [
  'Banda 100% dedicada',
  'Conexão permanente',
  'IP dedicado',
  '100 Mbps a 10 Gbps',
]

const items = [
  {
    title: 'Banda exclusiva',
    desc: 'Toda a velocidade contratada é só sua. Nenhum vizinho ou concorrente dividindo o link.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Conexão permanente',
    desc: 'Sem quedas, sem reconexão. Sua empresa sempre online, 24 horas por dia.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'IP dedicado',
    desc: 'Endereço IP fixo e exclusivo para sua operação, sistemas e servidores.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    title: '100 Mbps a 10 Gbps',
    desc: 'Planos escaláveis que crescem junto com a sua empresa, sem limite de expansão.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
  },
]

export default function DiferenciaisLinkDedicado() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: photo placeholder */}
          <div data-aos="fade-right" className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center gap-3"
              style={{ border: '2px dashed #e5e5e5' }}>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-400">Foto de infraestrutura / datacenter</span>
            </div>

            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10"
              style={{ background: '#27CAA3', opacity: 0.15 }} />
          </div>

          {/* Right: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Diferenciais técnicos
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              De 100 Mbps a 10 Gbps — velocidade que acompanha o crescimento do seu negócio.
            </h2>
            <p data-aos="fade-up" data-aos-delay="100"
              className="text-gray-500 leading-relaxed mb-8">
              Diferente da internet residencial, o Link Dedicado garante que toda a banda contratada é exclusivamente sua. Conexões diretas, acesso permanente e total conectividade IP para sua operação nunca parar.
            </p>

            {/* Badges */}
            <div data-aos="fade-up" data-aos-delay="140" className="flex flex-wrap gap-2 mb-10">
              {badges.map(b => (
                <span key={b} className="text-xs font-semibold px-4 py-2 rounded-full text-white" style={{ background: '#27CAA3' }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div key={item.title} data-aos="fade-up" data-aos-delay={180 + i * 60}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                    style={{ background: i % 2 === 0 ? '#27CAA3' : '#03C2C3' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
