'use client'

import React from 'react'
import { CartAddon, CartState } from './CheckoutFlow'

interface AddonOption {
  id: string
  name: string
  description: string
  price: number
  iconPath?: string
  icon: React.ReactNode
}

const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'superwifi',
    name: 'Super Wi-Fi',
    description: 'Sinal de Wi-Fi forte e estável em todos os ambientes',
    price: 19.90,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    id: 'fixo',
    name: 'Telefone fixo',
    description: 'Ligações ilimitadas para falar como quiser',
    price: 29.90,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: 'celular',
    name: 'Celular',
    description: 'Ligações nacionais ilimitadas e muita internet',
    price: 49.90,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'seguranca',
    name: 'Conectividade e Segurança',
    description: 'Um conjunto de soluções de conectividade e segurança disponíveis para você.',
    price: 14.90,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'entretenimento',
    name: 'Entretenimento',
    description: 'Eleve sua diversão ao máximo com o melhor do entretenimento.',
    price: 29.90,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'saude',
    name: 'Assistência e Saúde',
    description: 'Tudo isso na palma da sua mão e no momento que você mais precisar.',
    price: 19.90,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

interface Props {
  cart: CartState
  onToggleAddon: (addon: CartAddon) => void
  onNext: () => void
}

export default function StepPedido({ cart, onToggleAddon, onNext }: Props) {
  const isAdded = (id: string) => cart.addons.some(a => a.id === id)

  return (
    <div className="flex flex-col gap-5">

      {/* Added items */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-3">Seus itens adicionados</p>
        <div
          className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4"
          style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.06)', borderLeft: '4px solid #03C2C3' }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(3,194,195,0.1)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="#03C2C3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-800">{cart.plan.name}</p>
            <p className="text-xs text-gray-500">{cart.plan.detail}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-0.5">Item(s) no pacote por</p>
            <p className="text-base font-extrabold" style={{ color: '#111827' }}>
              R$ {cart.plan.price.toFixed(2).replace('.', ',')}/mês
            </p>
          </div>
          <button
            className="flex items-center gap-1 text-xs font-semibold border rounded-lg px-3 py-1.5 ml-2 transition hover:opacity-75"
            style={{ borderColor: '#03C2C3', color: '#03C2C3' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Modificar
          </button>
        </div>
      </div>

      {/* Upsell add-ons */}
      <div>
        <p className="text-sm font-bold text-gray-700 mb-3">Aproveite e turbine seu pacote</p>
        <div className="flex flex-col gap-3">
          {ADDON_OPTIONS.map(addon => {
            const added = isAdded(addon.id)
            return (
              <div
                key={addon.id}
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 transition-all duration-200"
                style={{
                  boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
                  borderLeft: added ? '4px solid #03C2C3' : '4px solid transparent',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: added ? 'rgba(3,194,195,0.1)' : '#f3f4f6', color: added ? '#03C2C3' : '#6B7280' }}
                >
                  {addon.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{addon.name}</p>
                  <p className="text-xs text-gray-500 leading-snug">{addon.description}</p>
                </div>
                <button
                  onClick={() => onToggleAddon({ id: addon.id, name: addon.name, price: addon.price })}
                  className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 shrink-0"
                  style={added
                    ? { background: 'rgba(3,194,195,0.1)', color: '#03C2C3', border: '1px solid #03C2C3' }
                    : { background: '#03C2C3', color: 'white' }
                  }
                >
                  {added ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Adicionado
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                      Adicionar
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
