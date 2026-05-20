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
      { label: 'Fixo', to: '/fixo' },
      { label: 'Hipervelocidade', to: '/hipervelocidade' },
    ],
  },
  {
    id: 'celular',
    label: 'Celular',
    children: [
      { label: 'Pré Pago', to: '/celular/pre-pago' },
      { label: 'Recarga', to: '/celular/recarga' },
      { label: 'Controle e Pós', to: '/celular/controle-pos' },
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
    ],
  },
]

export const empresaNavConfig: NavItem[] = [
  {
    id: 'internet',
    label: 'Internet',
    children: [
      { label: 'Internet Fibra', to: '/internet/fibra' },
      { label: 'Fixo', to: '/internet/fixo' },
      { label: 'Hipervelocidade', to: '/internet/hipervelocidade' },
      { label: 'Link Dedicado', to: '/internet/link-dedicado' },
      { label: 'Lan To Lan', to: '/internet/lan-to-lan' },
      { label: 'Apps dos Planos Empresariais', to: '/internet/apps-planos' },
    ],
  },
  {
    id: 'telefonia',
    label: 'Telefonia',
    children: [
      { label: 'Fixo', to: '/telefonia/fixo' },
      { label: 'Celular', to: '/telefonia/celular' },
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
