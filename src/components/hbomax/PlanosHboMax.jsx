import { useNavigate } from 'react-router-dom'

export default function PlanosHboMax() {
  const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#0a0028' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-14">

          {/* Com anúncio */}
          <div data-aos="fade-up" data-aos-delay="80"
            className="p-5 sm:p-8 rounded-3xl flex flex-col gap-5"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(153,51,255,0.3)' }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#9933ff' }}>HBO Max</span>
              <h3 className="text-xl font-extrabold text-white mt-1">Com anúncios</h3>
              <p className="text-sm text-gray-400 mt-1">Todo o catálogo com breves intervalos — mais acessível.</p>
            </div>
            <ul className="flex flex-col gap-2">
              {['Filmes, séries e documentários', 'Originais HBO em Full HD', 'Disponível nos planos Siga Fibra', 'Sem fidelidade e sem cartão'].map((item, i) => (
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
              onMouseEnter={e => e.currentTarget.style.background = '#03C2C3'}
              onMouseLeave={e => e.currentTarget.style.background = '#27CAA3'}>
              Ver planos
            </button>
          </div>

          {/* Sem anúncio — Premium */}
          <div data-aos="fade-up" data-aos-delay="160"
            className="p-5 sm:p-8 rounded-3xl flex flex-col gap-5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a0044, #0a0030)', border: '2px solid #9933ff' }}>
            <div className="absolute top-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: '#27CAA3' }}>
              Incluso no Premium
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#9933ff' }}>HBO Max</span>
              <h3 className="text-xl font-extrabold text-white mt-1">Sem anúncios</h3>
              <p className="text-sm text-gray-400 mt-1">Experiência cinematográfica sem interrupções.</p>
            </div>
            <ul className="flex flex-col gap-2">
              {['Todo o catálogo HBO sem anúncios', 'Séries originais e lançamentos', 'Qualidade máxima de imagem e som', 'Já incluso nos planos Premium'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(153,51,255,0.2)' }}>
                    <svg className="w-2.5 h-2.5" fill="none" stroke="#9933ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/pessoa-fisica/atendimento/canais')}
              className="mt-auto font-bold py-3 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #6600cc, #0033cc)' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Quero o Premium
            </button>
          </div>
        </div>

        {/* Mockup placeholder */}
        <div data-aos="fade-up" data-aos-delay="200"
          className="w-full max-w-[700px] mx-auto aspect-video rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(153,51,255,0.2)' }}>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-600">Mockup: celular com anúncio (esq.) vs smart TV sem anúncio (dir.)</span>
        </div>
      </div>
    </section>
  )
}
