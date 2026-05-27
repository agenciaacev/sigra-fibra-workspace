'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const faq = [
  {
    q: 'Como contratar o Siga Fixo?',
    a: 'Você precisa ter um dos nossos serviços de internet. A solicitação pode ser feita pelo WhatsApp ou ligando para (85) 3198-9550.',
  },
  {
    q: 'O aparelho telefônico é fornecido pela Siga?',
    a: 'Não. O cliente pode utilizar qualquer aparelho telefônico convencional na nossa linha. Para usar o identificador de chamadas, o aparelho precisa ter suporte a essa função.',
  },
  {
    q: 'Posso receber chamadas a cobrar?',
    a: 'Não. Esse serviço vem bloqueado por padrão no Siga Fixo.',
  },
  {
    q: 'Como fazer ligações interurbanas?',
    a: 'Basta digitar 0 + DDD da cidade de destino + número do telefone. Simples assim.',
  },
  {
    q: 'Posso manter meu número em caso de mudança de endereço?',
    a: 'Sim, desde que a mudança seja dentro da mesma cidade. Se mudar de cidade, não é possível manter o mesmo número, pois cada cidade possui seu próprio prefixo de identificação no sistema.',
  },
  {
    q: 'A portabilidade tem algum custo?',
    a: 'Não. A portabilidade é gratuita e a Siga Fibra cuida de todo o processo. O número precisa estar ativo e dentro da mesma área local.',
  },
]

export default function FaqFixoSection() {
  const [open, setOpen] = useState<number | null>(null)
  const router = useRouter()

  return (
    <section id="faq-fixo" className="py-20 md:py-28" style={{ background: 'var(--bg-light-alt)' }}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Dúvidas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-dark)' }}>
            Perguntas sobre o Siga Fixo
          </h2>
        </div>

        <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="60">
          {faq.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--card-bg)', border: '1px solid rgba(39,202,163,0.12)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <p className="font-semibold text-sm" style={{ color: 'var(--text-dark)' }}>{item.q}</p>
                <span className="flex-shrink-0 text-lg font-bold transition-transform duration-200"
                  style={{ color: '#27CAA3', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
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
            Ainda tem dúvidas? Fale com nossa equipe.
          </p>
          <button
            onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-2xl text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#27CAA3' }}
          >
            Falar com atendimento →
          </button>
        </div>
      </div>
    </section>
  )
}
