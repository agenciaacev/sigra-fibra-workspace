import { useNavigate } from 'react-router-dom'

export default function CtaBanner() {
  const navigate = useNavigate()
  return (
    <section className="py-12 md:py-20" style={{ background: '#27CAA3' }}>
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-white opacity-80">
          Sem complicação
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5">
          Instale hoje. Navegue amanhã.
        </h2>
        <p className="text-lg mb-10 text-white opacity-80">
          Técnicos certificados, agendamento online e ativação em até 24 horas.
        </p>
        <button
          onClick={() => navigate('/pessoa-fisica/internet-fibra')}
          className="font-bold px-6 sm:px-10 py-4 rounded-2xl text-sm uppercase tracking-wide bg-white transition-all duration-200"
          style={{ color: '#27CAA3' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#f0f0f0' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff' }}
        >
          Quero instalar agora
        </button>
      </div>
    </section>
  )
}
