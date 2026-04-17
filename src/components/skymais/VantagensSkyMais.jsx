const vantagens = [
  { title: 'Compartilhamento simultâneo', desc: 'Até 3 dispositivos ao mesmo tempo na mesma conta.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  { title: 'Esportes ao vivo', desc: 'Futebol nacional e internacional, tênis, basquete e muito mais.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4-1.343 4-3-1.79-3-4-3z"/></svg> },
  { title: 'Canais ao vivo 24h', desc: 'TV aberta e fechada transmitindo ao vivo a qualquer hora.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg> },
  { title: 'Multi-dispositivos', desc: 'Smart TV, celular, tablet ou computador — você escolhe.', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
]

export default function VantagensSkyMais() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#001a4d' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Por que assinar?
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-[600px] mx-auto leading-tight">
            Assine o Sky+ pela Siga Fibra e aproveite ainda mais.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 max-w-[560px] mx-auto leading-relaxed">
            Compartilhamento simultâneo, esportes ao vivo sem limite, canais ao vivo e compatibilidade com Smart TV, celular, tablet e computador.
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vantagens.map((item, i) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80}
              className="p-5 sm:p-7 rounded-3xl flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,85,204,0.25)' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                style={{ background: i % 2 === 0 ? '#27CAA3' : '#003087' }}>
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
