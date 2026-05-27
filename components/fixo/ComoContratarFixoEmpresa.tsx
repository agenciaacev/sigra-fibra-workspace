'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const steps = [
  {
    n: '01',
    title: 'Fale com nosso canal empresarial',
    desc: 'Entre em contato pelo WhatsApp ou ligue para (85) 3198-9555. Nossa equipe comercial está pronta para atendê-lo.',
  },
  {
    n: '02',
    title: 'Análise do plano ideal',
    desc: 'Apresentamos os planos disponíveis de acordo com o porte e o volume de chamadas da sua empresa.',
  },
  {
    n: '03',
    title: 'Ativação da linha',
    desc: 'Com o plano definido, ativamos a linha fixa integrada à sua internet Siga Fibra. Rápido e sem burocracia.',
  },
  {
    n: '04',
    title: 'Suporte dedicado',
    desc: 'Conta com atendimento prioritário para empresas em caso de qualquer ocorrência ou ajuste necessário.',
  },
]

const requisito = {
  title: 'Requisito para contratação',
  desc: 'O Siga Fixo Empresarial está disponível exclusivamente para clientes com serviço de internet Siga Fibra ativo. Se ainda não é cliente, fale conosco para contratar o pacote completo.',
}

export default function ComoContratarFixoEmpresa() {
  const router = useRouter()

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: '#060d0f' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(39,202,163,0.07), transparent)',
      }} />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Contratação
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Como contratar o{' '}
            <span style={{ color: '#27CAA3' }}>Siga Fixo Empresarial</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Processo simples, rápido e com suporte dedicado para empresas do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-aos="fade-up" data-aos-delay="60">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 h-px z-0"
                  style={{ background: 'linear-gradient(90deg, rgba(39,202,163,0.4), rgba(39,202,163,0.05))', width: 'calc(100% - 2.5rem)', left: '80%' }}
                />
              )}
              <div className="relative z-10 rounded-2xl p-6 h-full"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 font-black text-sm"
                  style={{ background: 'linear-gradient(135deg, #3ddcbc 0%, #27CAA3 100%)', color: '#0f2d22' }}
                >
                  {step.n}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Requisito */}
        <div className="rounded-2xl p-6 mb-12" data-aos="fade-up" data-aos-delay="80"
          style={{ background: 'rgba(39,202,163,0.07)', border: '1px solid rgba(39,202,163,0.2)' }}
        >
          <p className="text-sm font-semibold text-white mb-2">{requisito.title}</p>
          <p className="text-sm text-gray-400 leading-relaxed">{requisito.desc}</p>
        </div>

        <div className="text-center" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.push('/empresa/atendimento/canais')}
              className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: '#27CAA3' }}
            >
              Solicitar proposta →
            </button>
            <a
              href="tel:8531989555"
              className="inline-flex items-center justify-center gap-2 font-semibold px-10 py-4 rounded-2xl text-sm text-gray-300 transition-all duration-200 hover:text-[#27CAA3]"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              (85) 3198-9555
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
