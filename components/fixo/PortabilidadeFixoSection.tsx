'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const steps = [
  {
    n: '01',
    title: 'Entre em contato',
    desc: 'Solicite pelo WhatsApp ou telefone. Nossa equipe irá guiá-lo durante todo o processo.',
  },
  {
    n: '02',
    title: 'Informe seu número',
    desc: 'Passe o número que deseja portar. Ele precisa estar ativo e dentro da mesma área local.',
  },
  {
    n: '03',
    title: 'Aguarde a migração',
    desc: 'A Siga Fibra cuida de todo o processo de mudança. Não é necessária nenhuma ação adicional.',
  },
  {
    n: '04',
    title: 'Número portado!',
    desc: 'Seu número fixo estará ativo na Siga Fibra em poucos dias úteis, sem interrupção do serviço.',
  },
]

export default function PortabilidadeFixoSection() {
  const router = useRouter()

  return (
    <section id="portabilidade-fixo" className="py-20 md:py-28" style={{ background: '#060d0f' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(39,202,163,0.07), transparent)',
      }} />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div data-aos="fade-right">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
              Portabilidade
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Mantenha seu número,{' '}
              <span style={{ color: '#27CAA3' }}>mude para a Siga</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              A portabilidade do número fixo é gratuita e a Siga Fibra realiza todo o processo por você. O número precisa estar ativo e dentro da mesma área local.
            </p>

            <div className="rounded-2xl p-5 mb-8"
              style={{ background: 'rgba(39,202,163,0.07)', border: '1px solid rgba(39,202,163,0.2)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">Importante sobre mudança de endereço</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Em caso de mudança de cidade, não é possível manter o mesmo número fixo, pois cada cidade possui seu próprio prefixo de identificação. A portabilidade é válida somente dentro da mesma cidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: '#27CAA3' }}
              >
                Solicitar portabilidade →
              </button>
            </div>
          </div>

          {/* Right — steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="80">
            {steps.map((step, i) => (
              <div key={i} className="rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-black text-sm"
                  style={{ background: 'linear-gradient(135deg, #3ddcbc 0%, #27CAA3 100%)', color: '#0f2d22' }}
                >
                  {step.n}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
