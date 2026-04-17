import { ReactNode } from 'react'

export interface Feature {
  title: string
  desc: string
  icon?: ReactNode
  color?: string
}

export interface Stat {
  num: string
  label: string
}

export interface Passo {
  num: string
  title: string
  desc: string
}

export interface PosterItem {
  nome: string
  genero?: string
  universo?: string
  cor?: string
}

export interface Beneficio {
  title: string
  desc: string
  icon: ReactNode
}
