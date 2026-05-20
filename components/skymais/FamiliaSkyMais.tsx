import React from 'react'
const perfis = [
  { label: 'Adulto 1', emoji: '👤', color: '#003087' },
  { label: 'Adulto 2', emoji: '👤', color: '#0055cc' },
  { label: 'Jovem', emoji: '👤', color: '#27CAA3' },
  { label: 'Criança', emoji: '👶', color: '#03C2C3', lock: true },
  { label: 'Infantil', emoji: '👶', color: '#e4002b', lock: true },
]

export default function FamiliaSkyMais() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#003087' }}>
            Para toda a família
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 max-w-[700px] mx-auto leading-tight">
            Conteúdo para toda a família —{' '}
            <span style={{ color: '#27CAA3' }}>do jeito que cada um prefere.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 max-w-[580px] mx-auto leading-relaxed">
            Crie até 5 perfis na mesma conta para personalizar a experiência de cada um. Controle parental para as crianças, esportes para os pais — cada um assiste o que quer, em até 3 dispositivos ao mesmo tempo.
          </p>
        </div>

        {/* Avatares de perfis */}
        <div data-aos="fade-up" data-aos-delay="140"
          className="flex items-center justify-center gap-6 flex-wrap">
          {perfis.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl relative"
                style={{ background: p.color + '20', border: `2px solid ${p.color}30` }}>
                <span className="text-2xl">{p.emoji}</span>
                {p.lock && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: p.color }}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1C8.676 1 6 3.676 6 7v1H4v15h16V8h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm0 9a2 2 0 110 4 2 2 0 010-4z" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs font-semibold text-gray-500">{p.label}</p>
              {p.lock && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ background: p.color, fontSize: '9px' }}>
                  Controle parental
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
