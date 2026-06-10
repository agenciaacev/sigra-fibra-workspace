'use client'

import React, { useState } from 'react'
import { CartState } from './CheckoutFlow'

interface Props {
  cart: CartState
  total: number
  onCouponChange: (coupon: string) => void
}

export default function OrderSidebar({ cart, total, onCouponChange }: Props) {
  const [couponInput, setCouponInput] = useState('')

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>

      <div className="p-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <svg className="w-4 h-4" fill="none" stroke="#03C2C3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Seu pedido
          </div>
          <button
            className="text-xs font-semibold underline"
            style={{ color: '#03C2C3' }}
            onClick={() => window.location.reload()}
          >
            Esvaziar
          </button>
        </div>

        {/* Plan item */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="#03C2C3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{cart.plan.detail}</p>
              <p className="text-xs text-gray-400">{cart.plan.name}</p>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-800 shrink-0 ml-3">
            R$ {cart.plan.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Addons */}
        {cart.addons.map(addon => {
          const isChip = addon.id.startsWith('movel-')
          const isStreaming = addon.id.startsWith('entretenimento-')
          const subtitle = isChip ? 'Chip Móvel' : isStreaming ? 'Playhub' : 'Serviço adicional'
          const iconColor = isChip ? '#a855f7' : isStreaming ? '#f59e0b' : '#6b7280'
          const icon = isChip ? (
            <svg className="w-4 h-4 shrink-0" fill="none" stroke={iconColor} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ) : isStreaming ? (
            <svg className="w-4 h-4 shrink-0" fill="none" stroke={iconColor} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 shrink-0" fill="none" stroke={iconColor} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          )
          return (
            <div key={addon.id} className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 min-w-0">
                {icon}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{addon.name}</p>
                  <p className="text-xs text-gray-400">{subtitle}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-gray-800 shrink-0 ml-3">
                + R$ {addon.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          )
        })}

        <div className="border-t border-gray-100 my-3" />

        {/* Pricing info */}
        <div className="rounded-xl overflow-hidden mb-4 border border-gray-100">
          <div className="flex items-center justify-between px-3 py-2.5" style={{ background: 'rgba(3,194,195,0.07)' }}>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="#03C2C3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-xs font-semibold" style={{ color: '#03C2C3' }}>Até o vencimento</span>
            </div>
            <span className="text-sm font-extrabold" style={{ color: '#03C2C3' }}>
              R$ {total.toFixed(2).replace('.', ',')}<span className="text-xs font-normal">/mês</span>
            </span>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 shrink-0 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold text-gray-500">Após o vencimento</span>
            </div>
            <span className="text-sm font-bold text-gray-500">
              R$ {(cart.plan.priceAfter + cart.addons.reduce((s, a) => s + a.price, 0)).toFixed(2).replace('.', ',')}<span className="text-xs font-normal">/mês</span>
            </span>
          </div>
        </div>

        {/* Details link */}
        <button className="flex items-center gap-1 text-xs mb-4" style={{ color: '#03C2C3' }}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Baixar detalhes dos produtos
        </button>

        {/* Coupon */}
        <p className="text-sm font-medium text-gray-700 mb-2">Possui cupom de desconto?</p>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Insira o cupom"
            value={couponInput}
            onChange={e => setCouponInput(e.target.value)}
            className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': '#03C2C3' } as React.CSSProperties}
          />
          <button
            onClick={() => onCouponChange(couponInput)}
            className="px-4 py-2 rounded-lg text-sm font-bold text-white"
            style={{ background: '#03C2C3' }}
          >
            OK
          </button>
        </div>

        <p className="text-xs text-gray-400 mb-4">* Esse pacote possui 12 meses de fidelidade.</p>

        {/* CTA */}
        <button
          className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: '#03C2C3' }}
        >
          Fechar pedido
        </button>
      </div>
    </div>
  )
}
