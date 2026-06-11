'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StepPedido from './StepPedido'
import OrderSidebar from './OrderSidebar'
import { getPlanById, CHIP_PLANS, CHECKOUT_CATEGORIES, INTERNET_PLANS, type InternetPlan } from '@/lib/plans'

export interface CartAddon {
  id: string
  name: string
  price: number
  selectedApp?: string
}

export interface CartState {
  plan: {
    name: string
    detail: string
    price: number
    priceAfter: number
  }
  addons: CartAddon[]
  coupon: string
}

interface Props {
  planId?: string
  preAddonId?: string
}

export default function CheckoutFlow({ planId, preAddonId }: Props) {
  const internetPlan = getPlanById(planId)

  const initialAddons: CartAddon[] = useMemo(() => {
    if (!preAddonId) return []
    if (preAddonId.startsWith('movel-')) {
      const chip = CHIP_PLANS.find(c => c.id === preAddonId)
      if (chip) return [{ id: chip.id, name: chip.name, price: chip.price }]
    }
    return []
  }, [preAddonId])

  const [cart, setCart] = React.useState<CartState>({
    plan: {
      name: internetPlan.name,
      detail: internetPlan.detail,
      price: internetPlan.price,
      priceAfter: internetPlan.priceAfter,
    },
    addons: initialAddons,
    coupon: '',
  })

  const changePlan = (plan: InternetPlan) => {
    setCart(prev => ({
      ...prev,
      plan: { name: plan.name, detail: plan.detail, price: plan.price, priceAfter: plan.priceAfter },
    }))
  }

  const toggleAddon = (addon: CartAddon) => {
    setCart(prev => ({
      ...prev,
      addons: prev.addons.find(a => a.id === addon.id)
        ? prev.addons.filter(a => a.id !== addon.id)
        : [...prev.addons, addon],
    }))
  }

  const updateAddonApp = (tierId: string, appName: string) => {
    setCart(prev => ({
      ...prev,
      addons: prev.addons.map(a => a.id === tierId ? { ...a, selectedApp: appName } : a),
    }))
  }

  const selectExclusive = (addon: CartAddon, prefix: string) => {
    setCart(prev => {
      const alreadySelected = prev.addons.find(a => a.id === addon.id)
      return {
        ...prev,
        addons: alreadySelected
          ? prev.addons.filter(a => a.id !== addon.id)
          : [...prev.addons.filter(a => !a.id.startsWith(prefix)), addon],
      }
    })
  }

  const total =
    cart.plan.price +
    cart.addons.reduce((sum, a) => sum + a.price, 0)

  return (
    <div style={{ background: '#f4f5f7', minHeight: '100vh' }}>

      <header
        className="bg-white border-b border-gray-100 sticky top-0 z-50"
        style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image src="/img/logosiga.png" alt="Siga Fibra" width={110} height={36} className="h-8 w-auto object-contain" />
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

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-6 items-start">

          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Personalize seu pedido</h1>
            <StepPedido
              cart={cart}
              internetPlans={INTERNET_PLANS}
              categories={CHECKOUT_CATEGORIES}
              onChangePlan={changePlan}
              onToggleAddon={toggleAddon}
              onSelectExclusive={selectExclusive}
              onUpdateAddonApp={updateAddonApp}
            />
          </div>

          <div className="w-[290px] shrink-0 hidden lg:block sticky top-[72px]">
            <OrderSidebar
              cart={cart}
              total={total}
              onCouponChange={(coupon) => setCart(prev => ({ ...prev, coupon }))}
            />
          </div>
        </div>

        <div className="lg:hidden mt-6">
          <OrderSidebar
            cart={cart}
            total={total}
            onCouponChange={(coupon) => setCart(prev => ({ ...prev, coupon }))}
          />
        </div>
      </div>
    </div>
  )
}
