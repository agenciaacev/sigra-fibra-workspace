'use client'

import React, { useState } from 'react'

type PersonaChoice = null | 'guest' | 'login'

interface FormData {
  cpf: string
  nome: string
  nomeMae: string
  email: string
  emailConfirm: string
  celular: string
  dataNasc: string
}

const EMPTY_FORM: FormData = {
  cpf: '', nome: '', nomeMae: '', email: '', emailConfirm: '', celular: '', dataNasc: '',
}

function formatCPF(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

function formatPhone(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

function StepHeader({ number, title, active, done }: {
  number: number; title: string; active: boolean; done: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all"
        style={{
          background: done ? '#03C2C3' : active ? 'rgba(3,194,195,0.1)' : '#f3f4f6',
          color: done ? 'white' : active ? '#03C2C3' : '#9ca3af',
          border: active ? '2px solid #03C2C3' : '2px solid transparent',
        }}
      >
        {done ? (
          <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : number}
      </div>
      <div>
        <p className="text-xs text-gray-400">Passo {number}</p>
        <p className="text-sm font-bold text-gray-800">{title}</p>
      </div>
    </div>
  )
}

interface Props {
  onBack: () => void
  onNext: () => void
}

export default function StepConfiguracao({ onBack, onNext }: Props) {
  const [personaChoice, setPersonaChoice] = useState<PersonaChoice>(null)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1)

  const isFormFilled = Object.values(form).every(v => v.trim() !== '') && form.email === form.emailConfirm

  const handleField = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Passo 1 — Dados pessoais */}
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)', border: activeStep === 1 ? '1.5px solid #03C2C3' : '1.5px solid #f0f0f0' }}
      >
        <button
          className="w-full flex items-center gap-3 px-5 py-4 text-left"
          onClick={() => setActiveStep(1)}
        >
          <StepHeader number={1} title="Dados pessoais" active={activeStep === 1} done={false} />
        </button>

        {activeStep === 1 && (
          <div className="px-5 pb-5">

            {/* Not a client / Already a client */}
            {personaChoice === null && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                <button
                  onClick={() => setPersonaChoice('guest')}
                  className="flex flex-col gap-1 p-4 rounded-xl text-left border-2 border-gray-100 hover:border-[#03C2C3] transition-all duration-150"
                >
                  <p className="text-sm font-bold text-gray-800">Não sou cliente</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Sem problema! Você pode efetuar seu pedido rapidamente e em poucos passos.
                  </p>
                  <button
                    className="mt-2 text-xs font-bold px-4 py-2 rounded-lg text-white w-fit"
                    style={{ background: '#03C2C3' }}
                  >
                    Continuar como convidado
                  </button>
                </button>

                <button
                  onClick={() => setPersonaChoice('login')}
                  className="flex flex-col gap-1 p-4 rounded-xl text-left border-2 border-gray-100 hover:border-[#03C2C3] transition-all duration-150"
                >
                  <p className="text-sm font-bold text-gray-800">Já sou cliente</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Sou cliente e possuo cadastro no site. Assim, parte dos dados já virá preenchida.
                  </p>
                  <button
                    className="mt-2 text-xs font-bold px-4 py-2 rounded-lg text-white w-fit"
                    style={{ background: '#03C2C3' }}
                  >
                    Realizar login
                  </button>
                </button>
              </div>
            )}

            {/* Guest form */}
            {personaChoice === 'guest' && (
              <div className="mt-2">
                <button
                  onClick={() => setPersonaChoice(null)}
                  className="flex items-center gap-1 text-xs font-semibold mb-4"
                  style={{ color: '#03C2C3' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Voltar
                </button>

                <p className="text-sm font-bold text-gray-800 mb-0.5">Informe seus dados</p>
                <p className="text-xs text-gray-400 mb-4">Campos obrigatórios, preencha com atenção</p>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="CPF"
                    value={form.cpf}
                    onChange={e => handleField('cpf', formatCPF(e.target.value))}
                    className="w-full sm:w-64 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={form.nome}
                    onChange={e => handleField('nome', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />
                  <input
                    type="text"
                    placeholder="Nome da mãe"
                    value={form.nomeMae}
                    onChange={e => handleField('nomeMae', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={e => handleField('email', e.target.value)}
                    className="w-full sm:w-80 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />
                  <input
                    type="email"
                    placeholder="Confirmar e-mail"
                    value={form.emailConfirm}
                    onChange={e => handleField('emailConfirm', e.target.value)}
                    className="w-full sm:w-80 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />
                  <input
                    type="text"
                    placeholder="Celular (99) 9 9999-9999"
                    value={form.celular}
                    onChange={e => handleField('celular', formatPhone(e.target.value))}
                    className="w-full sm:w-56 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />
                  <input
                    type="date"
                    placeholder="Data de nascimento"
                    value={form.dataNasc}
                    onChange={e => handleField('dataNasc', e.target.value)}
                    className="w-full sm:w-48 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#03C2C3]"
                  />

                  <button
                    disabled={!isFormFilled}
                    onClick={() => setActiveStep(2)}
                    className="w-fit mt-1 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: '#03C2C3' }}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Passo 2 — Endereço de instalação */}
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)', border: activeStep === 2 ? '1.5px solid #03C2C3' : '1.5px solid #f0f0f0' }}
      >
        <button
          className="w-full flex items-center gap-3 px-5 py-4 text-left"
          onClick={() => activeStep > 1 && setActiveStep(2)}
        >
          <StepHeader number={2} title="Endereço de instalação" active={activeStep === 2} done={activeStep > 2} />
        </button>
        {activeStep === 2 && (
          <div className="px-5 pb-5">
            <p className="text-xs text-gray-400">Em desenvolvimento — próxima etapa</p>
            <button
              onClick={() => setActiveStep(3)}
              className="mt-3 px-6 py-2.5 rounded-lg text-sm font-bold text-white"
              style={{ background: '#03C2C3' }}
            >
              Continuar
            </button>
          </div>
        )}
      </div>

      {/* Passo 3 — Pagamento */}
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)', border: activeStep === 3 ? '1.5px solid #03C2C3' : '1.5px solid #f0f0f0' }}
      >
        <button
          className="w-full flex items-center gap-3 px-5 py-4 text-left"
          onClick={() => activeStep > 2 && setActiveStep(3)}
        >
          <StepHeader number={3} title="Pagamento" active={activeStep === 3} done={false} />
        </button>
        {activeStep === 3 && (
          <div className="px-5 pb-5">
            <p className="text-xs text-gray-400">Em desenvolvimento — próxima etapa</p>
            <button
              onClick={onNext}
              className="mt-3 px-6 py-2.5 rounded-lg text-sm font-bold text-white"
              style={{ background: '#03C2C3' }}
            >
              Concluir pedido
            </button>
          </div>
        )}
      </div>

      {/* Back link */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm font-semibold self-start"
        style={{ color: '#03C2C3' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para o pedido
      </button>
    </div>
  )
}
