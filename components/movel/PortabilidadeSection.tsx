'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const steps = [
  {
    n: '01',
    title: 'Escolha seu plano',
    desc: 'Selecione o plano ideal para você nesta página e entre em contato com a nossa equipe.',
  },
  {
    n: '02',
    title: 'Informe seu número',
    desc: 'Passe o número que deseja portar. Ele precisa estar ativo na operadora atual.',
  },
  {
    n: '03',
    title: 'Confirme a portabilidade',
    desc: 'Você receberá uma mensagem SMS na operadora atual pedindo confirmação. Responda "SIM".',
  },
  {
    n: '04',
    title: 'Pronto, número portado!',
    desc: 'Em até 3 dias úteis seu número estará ativo na Siga, sem interrupção do serviço.',
  },
]

const faq = [
  {
    q: 'Meu número fica indisponível durante a portabilidade?',
    a: 'Não. O serviço pode ter uma interrupção mínima de alguns minutos no momento da migração, geralmente realizada madrugada.',
  },
  {
    q: 'Posso portar qualquer número?',
    a: 'Sim, desde que o número esteja ativo e em seu nome (CPF ou CNPJ). Portabilidade de pré-pago e pós-pago é aceita.',
  },
  {
    q: 'A portabilidade tem algum custo?',
    a: 'Não. A portabilidade numérica é gratuita por determinação da Anatel.',
  },
  {
    q: 'Posso cancelar durante o processo?',
    a: 'Sim, basta não responder à mensagem de confirmação SMS dentro do prazo informado.',
  },
]

export default function PortabilidadeSection() {
  const router = useRouter()

  return (
    <section id="portabilidade" className="py-20 md:py-28" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Portabilidade
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-dark)' }}>
            Mantenha seu número,{' '}
            <span style={{ color: '#27CAA3' }}>mude para a Siga</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Gratuita, simples e sem burocracia. Seu número continua o mesmo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up" data-aos-delay="60">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 h-px z-0"
                  style={{ background: 'linear-gradient(90deg, rgba(39,202,163,0.4), rgba(39,202,163,0.05))', width: 'calc(100% - 2.5rem)', left: '80%' }}
                />
              )}
              <div className="relative z-10 rounded-2xl p-6 h-full"
                style={{ background: 'var(--card-bg)', border: '1px solid rgba(39,202,163,0.15)' }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 font-black text-sm"
                  style={{ background: 'linear-gradient(135deg, #3ddcbc 0%, #27CAA3 100%)', color: '#0f2d22' }}
                >
                  {step.n}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-dark)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div data-aos="fade-up" data-aos-delay="80">
          <h3 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-dark)' }}>
            Dúvidas frequentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faq.map((item, i) => (
              <div key={i} className="rounded-2xl p-6"
                style={{ background: 'var(--card-bg)', border: '1px solid rgba(39,202,163,0.12)' }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: 'var(--text-dark)' }}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button
            onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
            style={{ background: '#27CAA3' }}
          >
            Iniciar portabilidade →
          </button>
        </div>
      </div>
    </section>
  )
}
