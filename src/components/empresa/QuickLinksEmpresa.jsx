import { useNavigate } from 'react-router-dom'

const links = [
  { label: 'Internet', desc: 'Fibra, link dedicado e Lan To Lan', to: '/empresa/internet/fibra' },
  { label: 'Telefonia', desc: 'Fixo e celular corporativo', to: '/empresa/telefonia/fixo' },
  { label: 'Serviços Digitais', desc: 'Segurança e produtividade', to: '/empresa/servicos-digitais/kaspersky' },
  { label: 'Atendimento', desc: 'Suporte dedicado para empresas', to: '/empresa/atendimento/canais' },
]

export default function QuickLinksEmpresa() {
  const navigate = useNavigate()
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
          Para o seu negócio
        </p>
        <h2 className="text-center text-3xl font-extrabold mb-14 text-gray-900">
          Soluções completas para empresas
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.to)}
              className="group text-left p-5 sm:p-7 rounded-2xl border-2 border-gray-100 bg-white transition-all duration-200"
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#03C2C3'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(3,194,195,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#f3f4f6'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div className="w-10 h-10 rounded-xl mb-5" style={{ background: '#03C2C3' }} />
              <p className="font-bold text-base mb-1.5 text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
