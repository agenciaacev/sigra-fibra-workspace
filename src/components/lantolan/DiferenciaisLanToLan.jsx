const badges = [
  'Integração e conectividade',
  'Comunicação ponto a ponto',
  'Conexão segura',
  'Qualificação e profissionalismo',
]

const features = [
  {
    title: 'Integração real',
    desc: 'Matriz e filiais compartilham sistemas, arquivos e dados como se fossem uma só rede local.',
    color: '#03C2C3',
  },
  {
    title: 'Comunicação ponto a ponto',
    desc: 'Conexão direta entre unidades, sem passar por redes públicas ou terceiros.',
    color: '#27CAA3',
  },
  {
    title: 'Conexão segura',
    desc: 'Rede privada exclusiva, com criptografia e proteção total dos seus dados corporativos.',
    color: '#03C2C3',
  },
  {
    title: 'Alta performance',
    desc: 'Velocidade e estabilidade que eliminam gargalos e mantêm a operação fluindo.',
    color: '#27CAA3',
  },
]

export default function DiferenciaisLanToLan() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
              Diferenciais técnicos
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Conecte todos os pontos do seu negócio em uma única rede privada.
            </h2>
            <p data-aos="fade-up" data-aos-delay="100"
              className="text-gray-500 leading-relaxed mb-8">
              Pare de depender de soluções improvisadas. Com nossa rede dedicada de fibra óptica, sua empresa ganha integração real, conexão segura e performance de alto nível entre todas as unidades.
            </p>

            {/* Badges */}
            <div data-aos="fade-up" data-aos-delay="140" className="flex flex-wrap gap-2 mb-10">
              {badges.map(b => (
                <span key={b} className="text-xs font-semibold px-4 py-2 rounded-full text-white"
                  style={{ background: '#03C2C3' }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={item.title} data-aos="fade-up" data-aos-delay={180 + i * 60}
                  className="p-4 rounded-2xl bg-gray-50 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div data-aos="fade-left" data-aos-delay="100" className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center gap-3"
              style={{ border: '2px dashed #e5e5e5' }}>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-400">Foto de equipe em rede / múltiplas unidades</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10"
              style={{ background: '#03C2C3', opacity: 0.12 }} />
          </div>

        </div>
      </div>
    </section>
  )
}
