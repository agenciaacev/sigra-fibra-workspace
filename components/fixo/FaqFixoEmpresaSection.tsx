'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const faq = [
  {
    q: 'O Siga Fixo tem plano empresarial?',
    a: 'Sim. Temos planos de acordo com o porte da sua empresa. Para saber mais, utilize nosso canal empresarial pelo WhatsApp ou telefone: (85) 3198-9555.',
  },
  {
    q: 'Como contratar o Siga Fixo Empresarial?',
    a: 'É necessário ter um dos nossos serviços de internet empresarial. Entre em contato pelo canal comercial (85) 3198-9555 e nossa equipe apresentará os planos disponíveis.',
  },
  {
    q: 'O aparelho telefônico é fornecido pela Siga?',
    a: 'Não. A empresa pode utilizar qualquer aparelho telefônico convencional na nossa linha. Para usar o identificador de chamadas, o aparelho precisa ter suporte à função.',
  },
  {
    q: 'Posso receber chamadas a cobrar?',
    a: 'Não. Esse serviço vem bloqueado por padrão, evitando cobranças indevidas para a empresa.',
  },
  {
    q: 'Como fazer ligações interurbanas?',
    a: 'Basta digitar 0 + DDD da cidade de destino + número do telefone. Sem necessidade de código de operadora.',
  },
  {
    q: 'Posso manter o número fixo da empresa em caso de mudança de endereço?',
    a: 'Sim, desde que a mudança seja dentro da mesma cidade. Mudanças para outra cidade exigem a troca do número, pois cada cidade possui prefixo de identificação próprio no sistema de telefonia.',
  },
]

export default function FaqFixoEmpresaSection() {
  const [open, setOpen] = useState<number | null>(null)
  const router = useRouter()

  return (
    <section id="faq-fixo-empresa" className="py-20 md:py-28" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#03C2C3' }}>
            Dúvidas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-dark)' }}>
            Perguntas sobre o Fixo Empresarial
          </h2>
        </div>

        <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="60">
          {faq.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--card-bg)', border: '1px solid rgba(3,194,195,0.12)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <p className="font-semibold text-sm" style={{ color: 'var(--text-dark)' }}>{item.q}</p>
                <span className="flex-shrink-0 text-lg font-bold transition-transform duration-200"
                  style={{ color: '#03C2C3', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            Fale diretamente com nosso canal comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.push('/empresa/atendimento/canais')}
              className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: '#03C2C3' }}
            >
              Falar com consultor →
            </button>
            <a
              href="tel:8531989555"
              className="inline-flex items-center justify-center gap-2 font-semibold px-10 py-4 rounded-2xl text-sm transition-all duration-200 hover:text-[#03C2C3]"
              style={{ border: '1px solid rgba(3,194,195,0.3)', color: '#03C2C3' }}
            >
              (85) 3198-9555
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
