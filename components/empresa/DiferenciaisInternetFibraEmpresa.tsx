'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const comparisons = [
  {
    feature: 'IP fixo',
    fibra: 'Incluso em todos os planos',
    cabo: 'Cobrado à parte ou indisponível',
  },
  {
    feature: 'Upload',
    fibra: 'Simétrico — igual ao download',
    cabo: 'Muito inferior ao download',
  },
  {
    feature: 'SLA contratual',
    fibra: 'Garantido com reembolso',
    cabo: 'Sem garantia formal de uptime',
  },
  {
    feature: 'Estabilidade',
    fibra: 'Constante, sem interferências',
    cabo: 'Oscila em horários de pico',
  },
  {
    feature: 'Latência (ping)',
    fibra: 'Ultrabaixa — ideal para VoIP e VPN',
    cabo: 'Alta, prejudica videoconferências',
  },
  {
    feature: 'Velocidade máxima',
    fibra: 'Até 4 Gb — escalável',
    cabo: 'Limitado a centenas de Mb',
  },
]

const steps = [
  {
    n: '01',
    title: 'Escolha o plano',
    desc: 'Selecione a velocidade ideal para sua operação no nosso site ou fale com um consultor comercial.',
  },
  {
    n: '02',
    title: 'Análise técnica',
    desc: 'Nossa equipe realiza a visita técnica para garantir a melhor rota de fibra até o seu estabelecimento.',
  },
  {
    n: '03',
    title: 'Instalação empresarial',
    desc: 'Técnicos especializados instalam o cabeamento de fibra óptica e configuram os equipamentos de rede.',
  },
  {
    n: '04',
    title: 'Ativação com suporte',
    desc: 'Conexão ativada, testada e monitorada. Suporte 24h disponível para qualquer ocorrência.',
  },
]

export default function DiferenciaisInternetFibraEmpresa() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden" style={{ background: '#060d0f' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Part 1: Comparison */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563eb' }}>
            Tecnologia
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Por que fibra dedicada para empresas?
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Não é só velocidade — é infraestrutura confiável com garantias contratuais que seu negócio precisa.
          </p>
        </div>

        {/* Table header — desktop only */}
        <div
          data-aos="fade-up"
          data-aos-delay="60"
          className="hidden sm:grid grid-cols-3 gap-0 rounded-t-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)', borderBottom: 'none' }}
        >
          <div className="px-5 py-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Característica</p>
          </div>
          <div className="px-5 py-4 flex items-center gap-2" style={{ background: 'rgba(37,99,235,0.1)', borderLeft: '1px solid rgba(37,99,235,0.2)', borderRight: '1px solid rgba(37,99,235,0.2)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#2563eb' }} />
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#2563eb' }}>Fibra Siga Empresarial</p>
          </div>
          <div className="px-5 py-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600">Link Convencional</p>
          </div>
        </div>

        {/* Table rows — desktop */}
        <div
          data-aos="fade-up"
          data-aos-delay="80"
          className="hidden sm:block rounded-b-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {comparisons.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-0"
              style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
            >
              <div className="px-5 py-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <p className="text-sm font-semibold text-gray-300">{row.feature}</p>
              </div>
              <div className="px-5 py-4 flex items-center gap-2" style={{ background: 'rgba(37,99,235,0.05)', borderLeft: '1px solid rgba(37,99,235,0.15)', borderRight: '1px solid rgba(37,99,235,0.15)' }}>
                <span className="text-base flex-shrink-0" style={{ color: '#2563eb' }}>✓</span>
                <p className="text-sm text-white">{row.fibra}</p>
              </div>
              <div className="px-5 py-4 flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.01)' }}>
                <span className="text-base flex-shrink-0 text-gray-600">✗</span>
                <p className="text-sm text-gray-500">{row.cabo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cards — mobile only */}
        <div className="flex flex-col gap-3 sm:hidden" data-aos="fade-up" data-aos-delay="80">
          {comparisons.map((row, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{row.feature}</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-3 flex flex-col gap-1" style={{ background: 'rgba(37,99,235,0.05)', borderRight: '1px solid rgba(37,99,235,0.15)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#2563eb' }}>Fibra Siga</p>
                  <div className="flex items-start gap-1.5">
                    <span className="flex-shrink-0 mt-0.5 text-xs" style={{ color: '#2563eb' }}>✓</span>
                    <p className="text-xs text-white leading-relaxed">{row.fibra}</p>
                  </div>
                </div>
                <div className="px-4 py-3 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.01)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">Convencional</p>
                  <div className="flex items-start gap-1.5">
                    <span className="flex-shrink-0 mt-0.5 text-xs text-gray-600">✗</span>
                    <p className="text-xs text-gray-500 leading-relaxed">{row.cabo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

        {/* Part 2: Steps */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#2563eb' }}>
            Instalação
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Como funciona a contratação
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Processo ágil e sem burocracia. Do primeiro contato à rede funcionando na sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="80">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                  style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.4), rgba(37,99,235,0.05))', width: 'calc(100% - 2.5rem)', left: '80%' }}
                />
              )}
              <div
                className="relative z-10 rounded-2xl p-6 h-full"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 font-black text-sm"
                  style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)', color: '#0c1a40' }}
                >
                  {step.n}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="120" className="text-center mt-14">
          <button
            onClick={() => router.push('/empresa/atendimento/canais')}
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
            style={{ background: '#2563eb' }}
          >
            Falar com consultor
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  )
}
