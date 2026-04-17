const stats = [
  { num: '5.000 km', label: 'de fibra óptica' },
  { num: '100%', label: 'rede própria' },
  { num: '24h', label: 'monitoramento' },
  { num: '99,9%', label: 'disponibilidade' },
]

const providers = ['AWS', 'Google Cloud', 'Azure', 'Oracle Cloud']

export default function InfraestruturaLanToLan() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#f9f9f9' }}>
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
              <span className="text-sm text-gray-400">Foto de infraestrutura de fibra / datacenter</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl -z-10"
              style={{ background: '#27CAA3', opacity: 0.12 }} />
          </div>

          {/* Right: copy + stats */}
          <div>
            <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Nossa infraestrutura
            </p>
            <h2 data-aos="fade-up" data-aos-delay="60"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Mais de 5.000 km de fibra óptica de alto desempenho.
            </h2>
            <p data-aos="fade-up" data-aos-delay="100"
              className="text-gray-500 leading-relaxed mb-10">
              Uma infraestrutura robusta que garante disponibilidade, capacidade e acesso direto aos maiores Cloud Providers do mercado. Sua empresa conectada com quem é referência em tecnologia.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s, i) => (
                <div key={s.label} data-aos="fade-up" data-aos-delay={140 + i * 50}
                  className="p-5 rounded-2xl bg-white" style={{ border: '1px solid #efefef' }}>
                  <p className="text-2xl font-extrabold text-gray-900">{s.num}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  <div className="w-8 h-0.5 mt-2 rounded-full"
                    style={{ background: i % 2 === 0 ? '#03C2C3' : '#27CAA3' }} />
                </div>
              ))}
            </div>

            {/* Cloud providers */}
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">
                Acesso direto aos principais cloud providers
              </p>
              <div className="flex flex-wrap gap-3">
                {providers.map(p => (
                  <span key={p}
                    className="text-xs font-bold px-4 py-2 rounded-full text-gray-600 bg-white"
                    style={{ border: '1px solid #e5e5e5' }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
