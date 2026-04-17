import React from 'react'
const canais = [
  'Globo', 'SBT', 'Record', 'Band', 'RedeTV',
  'SporTV', 'ESPN', 'Fox Sports', 'Futura', 'GNT',
  'Multishow', 'Cartoon', 'Discovery', 'History', 'National Geo',
  'Warner', 'TNT', 'HBO', 'Universal', 'Sony',
]

export default function CanaisSkyMais() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#f9f9f9' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#003087' }}>
            Grade completa
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 max-w-[700px] mx-auto leading-tight">
            Mais de{' '}
            <span style={{ color: '#27CAA3' }}>70 canais de TV ao vivo</span>{' '}
            para toda a família curtir junto.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 max-w-[560px] mx-auto leading-relaxed">
            Globo, SporTV, ESPN, Multishow, GNT, Futura, Cartoon e muito mais — a grade completa da TV aberta e fechada na palma da sua mão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* Mockup TV/notebook placeholder */}
          <div data-aos="fade-right" className="lg:col-span-1">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ background: '#001a4d', border: '1px solid rgba(0,48,135,0.4)' }}>
              <svg className="w-12 h-12 opacity-20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-700 text-center px-4">Mockup TV / notebook com interface Sky+ aberta</span>
            </div>
          </div>

          {/* Grade de logos */}
          <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-2">
            <div className="flex flex-wrap gap-3">
              {canais.map((canal, i) => (
                <div key={canal} data-aos="zoom-in" data-aos-delay={i * 30}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-gray-700"
                  style={{ border: '1px solid #e5e5e5' }}>
                  {canal}
                </div>
              ))}
              <div className="px-4 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: '#27CAA3' }}>
                +50 canais
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
