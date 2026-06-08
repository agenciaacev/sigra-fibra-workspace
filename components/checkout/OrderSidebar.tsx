'use client'

import React, { useState } from 'react'
import { CartState } from './CheckoutFlow'

interface Props {
  cart: CartState
  total: number
  step: number
  onCheckout: () => void
  onCouponChange: (coupon: string) => void
}

export default function OrderSidebar({ cart, total, step, onCheckout, onCouponChange }: Props) {
  const [couponInput, setCouponInput] = useState('')

  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>

      {/* Promo banner */}
      <div
        className="px-4 py-3 text-sm text-center leading-snug"
        style={{ background: 'rgba(3,194,195,0.08)', borderBottom: '1px solid rgba(3,194,195,0.2)' }}
      >
        Adicione um{' '}
        <span className="font-bold" style={{ color: '#03C2C3' }}>GloboPlay</span> e ganhe um{' '}
        <span className="font-bold">Álbum dos Jogos 2026</span> grátis
      </div>

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
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="#03C2C3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <span className="text-sm font-semibold text-gray-800">{cart.plan.name} (1)</span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              R$ {cart.plan.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <div className="flex items-center justify-between pl-6">
            <span className="text-xs text-gray-500">{cart.plan.detail}</span>
            <span className="text-xs text-gray-500">
              R$ {cart.plan.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        {/* Addons */}
        {cart.addons.map(addon => (
          <div key={addon.id} className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">{addon.name}</span>
            <span className="text-sm font-semibold text-gray-800">
              + R$ {addon.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
        ))}

        <div className="border-t border-gray-100 my-3" />

        {/* Auto debit discount */}
        <div className="flex items-start gap-2 mb-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-700">Você ganhou um desconto</p>
            <p className="text-xs text-gray-400">Desconto débito automático</p>
          </div>
          <span className="text-sm font-bold" style={{ color: '#03C2C3' }}>
            - R$ {cart.autoDebitDiscount.toFixed(2).replace('.', ',')}
          </span>
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

        <div className="border-t border-gray-100 mb-3" />

        {/* Total */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-base font-bold text-gray-800">Total</span>
          <span className="text-base font-extrabold" style={{ color: '#111827' }}>
            R$ {total.toFixed(2).replace('.', ',')}/mês
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-4">* Esse pacote possui 12 meses de fidelidade.</p>

        {/* CTA */}
        {step === 0 && (
          <button
            onClick={onCheckout}
            className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#03C2C3' }}
          >
            Fechar pedido
          </button>
        )}
      </div>
    </div>
  )
}
