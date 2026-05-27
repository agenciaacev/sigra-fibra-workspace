export interface NavChild {
  label: string
  to: string
  highlight?: boolean
}

export interface NavCategory {
  id: string
  label: string
  children: NavChild[]
}

export interface NavItem {
  id: string
  label: string
  children: NavChild[] | NavCategory[]
}

export const pfNavConfig: NavItem[] = [
  {
    id: 'pra-sua-casa',
    label: 'Pra sua casa',
    children: [
      { label: 'Internet Fibra', to: '/internet-fibra' },
      { label: 'Hipervelocidade', to: '/hipervelocidade' },
      { label: 'Amigo Indica', to: '/amigo-indica', highlight: true },
    ],
  },
  {
    id: 'telefonia',
    label: 'Telefonia',
    children: [
      { label: 'Fixo', to: '/fixo' },
      { label: 'Móvel', to: '/celular/pre-pago' },
    ],
  },
  {
    id: 'servicos-digitais',
    label: 'Serviços Digitais',
    children: [
      { label: 'Disney+', to: '/servicos-digitais/disney-plus' },
      { label: 'Deezer', to: '/servicos-digitais/deezer' },
      { label: 'GloboPlay', to: '/servicos-digitais/globoplay' },
      { label: 'Sky+', to: '/servicos-digitais/sky-mais' },
      { label: 'HBO Max', to: '/servicos-digitais/hbo-max' },
      { label: 'Veja mais ferramentas', to: '/servicos-digitais/veja-mais', highlight: true },
    ],
  },
  {
    id: 'atendimento',
    label: 'Atendimento',
    children: [
      { label: 'Canais de Atendimento', to: '/atendimento/canais' },
      { label: 'Suporte Técnico', to: '/atendimento/suporte-tecnico' },
      { label: 'Autoatendimento Via WhatsApp', to: '/atendimento/autoatendimento' },
      { label: 'Teste de Velocidade', to: '/teste-velocidade', highlight: true },
    ],
  },
]

export const empresaNavConfig: NavItem[] = [
  {
    id: 'internet',
    label: 'Internet',
    children: [
      { label: 'Hipervelocidade', to: '/internet/fibra' },
      { label: 'Link Dedicado', to: '/internet/link-dedicado' },
      { label: 'Lan To Lan', to: '/internet/lan-to-lan' },
    ],
  },
  {
    id: 'telefonia',
    label: 'Telefonia',
    children: [
      { label: 'Fixo', to: '/telefonia/fixo' },
      { label: 'Móvel', to: '/telefonia/celular' },
    ],
  },
  {
    id: 'servicos-digitais',
    label: 'Serviços Digitais',
    children: [
      { label: 'Kaspersky', to: '/servicos-digitais/kaspersky' },
      { label: 'ubook', to: '/servicos-digitais/ubook' },
    ],
  },
  {
    id: 'atendimento',
    label: 'Atendimento',
    children: [
      { label: 'Canais de Atendimento', to: '/atendimento/canais' },
      { label: 'Suporte Técnico', to: '/atendimento/suporte-tecnico' },
      { label: 'Autoatendimento Via WhatsApp', to: '/atendimento/autoatendimento' },
      { label: 'Baixe nosso App', to: '/atendimento/baixe-app', highlight: true },
    ],
  },
]
