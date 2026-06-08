'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StepPedido from './StepPedido'
import StepConfiguracao from './StepConfiguracao'
import OrderSidebar from './OrderSidebar'

const STEPS = ['Pedido', 'Configuração', 'Verificação', 'Conclusão']

export interface CartAddon {
  id: string
  name: string
  price: number
}

export interface CartState {
  plan: {
    name: string
    detail: string
    price: number
  }
  addons: CartAddon[]
  coupon: string
  autoDebitDiscount: number
}

const INITIAL_CART: CartState = {
  plan: {
    name: 'Internet fibra',
    detail: '600 Mega',
    price: 109.90,
  },
  addons: [],
  coupon: '',
  autoDebitDiscount: 10,
}

function StepIndicator({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center">
      {steps.map((label, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{
                background: i < current ? '#03C2C3' : i === current ? '#03C2C3' : '#e5e7eb',
                color: i <= current ? 'white' : '#9ca3af',
              }}
            >
              {i < current ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : i + 1}
            </div>
            <span
              className="text-xs font-semibold whitespace-nowrap"
              style={{ color: i <= current ? '#03C2C3' : '#9ca3af' }}
            >
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="h-0.5 mx-1 mb-4 transition-all"
              style={{
                width: 36,
                background: i < current ? '#03C2C3' : '#e5e7eb',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default function CheckoutFlow() {
  const [step, setStep] = useState(0)
  const [cart, setCart] = useState<CartState>(INITIAL_CART)

  const toggleAddon = (addon: CartAddon) => {
    setCart(prev => ({
      ...prev,
      addons: prev.addons.find(a => a.id === addon.id)
        ? prev.addons.filter(a => a.id !== addon.id)
        : [...prev.addons, addon],
    }))
  }

  const total =
    cart.plan.price +
    cart.addons.reduce((sum, a) => sum + a.price, 0) -
    cart.autoDebitDiscount

  return (
    <div style={{ background: '#f4f5f7', minHeight: '100vh' }}>

      {/* Checkout header */}
      <header
        className="bg-white border-b border-gray-100 sticky top-0 z-50"
        style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/img/logosiga.png"
              alt="Siga Fibra"
              width={110}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#03C2C3' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Ambiente Seguro
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-6 items-start">

          {/* Left: steps */}
          <div className="flex-1 min-w-0">

            {/* Step title + indicator */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <h1 className="text-2xl font-extrabold text-gray-900">
                {step === 0 ? 'Personalize seu pedido' : 'Configure seu pedido'}
              </h1>
              <div className="shrink-0">
                <StepIndicator steps={STEPS} current={step} />
              </div>
            </div>

            {step === 0 && (
              <StepPedido
                cart={cart}
                onToggleAddon={toggleAddon}
                onNext={() => setStep(1)}
              />
            )}

            {step === 1 && (
              <StepConfiguracao
                onBack={() => setStep(0)}
                onNext={() => setStep(2)}
              />
            )}

            {step >= 2 && (
              <div className="bg-white rounded-2xl p-8 text-center text-gray-400 text-sm">
                Próximos passos em desenvolvimento...
              </div>
            )}
          </div>

          {/* Right: order sidebar */}
          <div className="w-[290px] shrink-0 hidden lg:block sticky top-[72px]">
            <OrderSidebar
              cart={cart}
              total={total}
              step={step}
              onCheckout={() => setStep(1)}
              onCouponChange={(coupon) => setCart(prev => ({ ...prev, coupon }))}
            />
          </div>

        </div>

        {/* Mobile sidebar (bottom) */}
        <div className="lg:hidden mt-6">
          <OrderSidebar
            cart={cart}
            total={total}
            step={step}
            onCheckout={() => setStep(1)}
            onCouponChange={(coupon) => setCart(prev => ({ ...prev, coupon }))}
          />
        </div>
      </div>
    </div>
  )
}
