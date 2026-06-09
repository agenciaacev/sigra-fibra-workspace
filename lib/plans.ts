// ─── Internet (fibra) plans ───────────────────────────────────────────────────

export interface InternetPlan {
  id: string
  name: string
  detail: string
  price: number
}

export const INTERNET_PLANS: InternetPlan[] = [
  { id: 'nitro-600',  name: 'Internet Hipervelocidade', detail: 'SIGA NITRO 600 Mb',     price: 84.90  },
  { id: 'nitro-800',  name: 'Internet Hipervelocidade', detail: 'SIGA NITRO 800 Mb',     price: 99.90  },
  { id: 'nitro-1g',   name: 'Internet Hipervelocidade', detail: 'SIGA NITRO 1 Gb',       price: 109.90 },
  { id: 'hiper-flow', name: 'Internet Hipervelocidade', detail: 'SIGA HIPER FLOW 2 Gb',  price: 159.90 },
  { id: 'hiper-max',  name: 'Internet Hipervelocidade', detail: 'SIGA HIPER MAX 2.5 Gb', price: 199.90 },
]

export const DEFAULT_PLAN = INTERNET_PLANS[0]

export function getPlanById(id?: string): InternetPlan {
  return INTERNET_PLANS.find(p => p.id === id) ?? DEFAULT_PLAN
}

// ─── Chip Móvel plans ─────────────────────────────────────────────────────────

export interface ChipPlan {
  id: string
  name: string
  gb: number
  price: number
  badge?: string
}

export const CHIP_PLANS: ChipPlan[] = [
  { id: 'movel-5gb',  name: 'Chip Móvel 5 GB',  gb: 5,  price: 34.99 },
  { id: 'movel-8gb',  name: 'Chip Móvel 8 GB',  gb: 8,  price: 44.99 },
  { id: 'movel-12gb', name: 'Chip Móvel 12 GB', gb: 12, price: 55.99 },
  { id: 'movel-19gb', name: 'Chip Móvel 19 GB', gb: 19, price: 59.99, badge: 'Popular' },
  { id: 'movel-30gb', name: 'Chip Móvel 30 GB', gb: 30, price: 69.99 },
  { id: 'movel-40gb', name: 'Chip Móvel 40 GB', gb: 40, price: 79.99 },
  { id: 'movel-45gb', name: 'Chip Móvel 45 GB', gb: 45, price: 89.99 },
]

// ─── Streaming / Entretenimento tiers ────────────────────────────────────────

export interface StreamingApp {
  name: string
  icon?: string
  hasAds?: boolean
}

export interface StreamingTier {
  id: string
  name: string
  price: number
  color: string
  apps: StreamingApp[]
  extraCount?: number
}

export const STREAMING_TIERS: StreamingTier[] = [
  {
    id: 'entretenimento-standard',
    name: 'Standard',
    price: 9.90,
    color: '#27CAA3',
    apps: [
      { name: 'Sky+',     icon: '/img/icons-digitais/sky+.png' },
      { name: 'Playkids', icon: '/img/icons-digitais/playkids.png' },
      { name: 'Looke',    icon: '/img/icons-digitais/!looke.webp' },
      { name: 'Ubook',    icon: '/img/icons-digitais/ubookgo.png' },
    ],
    extraCount: 12,
  },
  {
    id: 'entretenimento-advanced',
    name: 'Advanced',
    price: 14.90,
    color: '#03C2C3',
    apps: [
      { name: 'Sky+',      icon: '/img/icons-digitais/sky+.png' },
      { name: 'Globoplay', icon: '/img/icons-digitais/globoplay.png' },
      { name: 'HotGo',     icon: '/img/icons-digitais/hotgo.webp' },
      { name: 'Curta On',  icon: '/img/icons-digitais/curtaon.png' },
    ],
    extraCount: 6,
  },
  {
    id: 'entretenimento-top',
    name: 'TOP',
    price: 29.90,
    color: '#f59e0b',
    apps: [
      { name: 'Disney+',     icon: '/img/icons-digitais/disney+.png',     hasAds: true },
      { name: 'HBO Max',     icon: '/img/icons-digitais/hbo.webp',         hasAds: true },
      { name: 'Prime Video', icon: '/img/icons-digitais/prime-video.png' },
      { name: 'Globoplay',   icon: '/img/icons-digitais/globoplay.png' },
    ],
  },
  {
    id: 'entretenimento-premium',
    name: 'Premium',
    price: 46.90,
    color: '#a855f7',
    apps: [
      { name: 'Disney+',    icon: '/img/icons-digitais/disney+.png' },
      { name: 'HBO Max',    icon: '/img/icons-digitais/hbo.webp' },
      { name: 'Kaspersky',  icon: '/img/icons-digitais/Kaspersky_App Icon.png' },
    ],
    extraCount: 4,
  },
]

// ─── Checkout add-on categories ───────────────────────────────────────────────

export type CheckoutAddonType = 'simple' | 'chip' | 'streaming'

export interface CheckoutAddonCategory {
  id: string
  name: string
  description: string
  type: CheckoutAddonType
  price?: number
}

export const CHECKOUT_CATEGORIES: CheckoutAddonCategory[] = [
  {
    id: 'celular',
    name: 'Chip Móvel',
    description: 'Escolha seu plano de dados com ligações ilimitadas',
    type: 'chip',
  },
  {
    id: 'entretenimento',
    name: 'Playhub',
    description: 'Streaming, apps e conteúdo ilimitado no seu plano',
    type: 'streaming',
  },
  {
    id: 'fixo',
    name: 'Telefone Fixo',
    description: 'Ligações ilimitadas para qualquer operadora',
    type: 'simple',
    price: 29.90,
  },
]
