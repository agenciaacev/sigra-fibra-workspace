'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

// ─── Tiers ───────────────────────────────────────────────────────────────────

const tiers = [
  {
    label: 'Standard',
    cor: '#0369a1',
    desc: 'Ideal para quem quer aproveitar o essencial com qualidade.',
    servicos: [
      { nome: 'Deezer',                    icon: '/img/icons-digitais/deezer.png',               bg: '#1a1a1a', fit: 'cover',   desc: 'Música, podcasts e audiolivros ilimitados.'           },
      { nome: 'Ubook Go',                  icon: '/img/icons-digitais/ubookgo.png',              bg: '#27a89a', fit: 'cover',   desc: 'Audiolivros, e-books e podcasts ilimitados.'          },
      { nome: 'Estuda+',                   icon: '/img/icons-digitais/estuda+.png',              bg: '#7c3aed', fit: 'cover',   desc: 'Plataforma de cursos e conteúdos educacionais.'       },
      { nome: 'Playlist',                  icon: '/img/icons-digitais/playlist.png',             bg: '#4c1d95', fit: 'cover',   desc: 'Música streaming com milhões de faixas.'              },
      { nome: 'Kiddle Pass',               icon: '/img/icons-digitais/kiddlepass.png',           bg: '#f59e0b', fit: 'cover',   desc: 'Conteúdo educativo e seguro para crianças.'          },
      { nome: 'Hub Vantagens',             icon: '/img/icons-digitais/hubvantagens.jpg',         bg: '#1e40af', fit: 'cover',   desc: 'Clube de benefícios e descontos exclusivos.'          },
      { nome: 'PlayKids+',                 icon: '/img/icons-digitais/playkids.png',             bg: '#6d28d9', fit: 'cover',   desc: 'Aprendizado divertido para crianças.'                 },
      { nome: 'Kaspersky Internet Sec.',   icon: '/img/icons-digitais/Kaspersky_App Icon.png',  bg: '#2a2a2a', fit: 'cover',   desc: 'Antivírus com proteção total — 1 licença.'            },
      { nome: 'Social Comics',             icon: '/img/icons-digitais/socialcomics.png',         bg: '#1c1f2e', fit: 'cover',   desc: 'HQs e quadrinhos digitais ilimitados.'               },
      { nome: 'QNutri',                    icon: '/img/icons-digitais/qnutri.png',               bg: '#ea580c', fit: 'cover',   desc: 'Nutrição personalizada e acompanhamento online.'      },
      { nome: 'Looke',                     icon: '/img/icons-digitais/!looke.webp',              bg: '#1d4ed8', fit: 'cover',   desc: 'Cinema nacional e internacional sem mensalidade.'     },
      { nome: 'Sky+ Light',                icon: '/img/icons-digitais/sky+.png',                 bg: '#0a0a0a', fit: 'cover',   desc: 'Canais ao vivo e conteúdo sob demanda.'              },
      { nome: 'Fluid',                     icon: '/img/icons-digitais/fluid.png',                bg: '#0891b2', fit: 'cover',   desc: 'Gestão inteligente de dados e conectividade.'         },
      { nome: 'Revistaria',                icon: '/img/icons-digitais/revistaria.png',           bg: '#1e3a5f', fit: 'cover',   desc: 'Revistas digitais dos maiores títulos nacionais.'     },
      { nome: 'ExitLag',                   icon: '/img/icons-digitais/exitlag.png',              bg: '#0a0a0a', fit: 'cover',   desc: 'Rotas otimizadas para jogos online sem lag.'          },
    ],
  },
  {
    label: 'Advanced',
    cor: '#059669',
    desc: 'Mais conteúdo e serviços para aproveitar ainda mais.',
    servicos: [
      { nome: 'O Jornalista',              icon: '/img/icons-digitais/ojornalista.png',          bg: '#111111', fit: 'cover',   desc: 'Acesso ilimitado a jornais e revistas digitais.'     },
      { nome: 'Kaspersky Standard 3 Lic.', icon: '/img/icons-digitais/kasperskystandard3lic.png',bg: '#2a2a2a', fit: 'cover',   desc: 'Proteção avançada para até 3 dispositivos.'          },
      { nome: 'Kiddle Pass Padrão',        icon: '/img/icons-digitais/kiddlepass.png',           bg: '#f59e0b', fit: 'cover',   desc: 'Plano padrão com conteúdo seguro para crianças.'     },
      { nome: 'Docway',                    icon: '/img/icons-digitais/docway-1.webp',             bg: '#16a34a', fit: 'cover',   desc: 'Consultas médicas online 24h, 7 dias por semana.'     },
      { nome: 'CurtaOn',                   icon: '/img/icons-digitais/curtaon.png',              bg: '#0a0a0a', fit: 'cover',   desc: 'Curtas e filmes independentes brasileiros.'          },
      { nome: 'Sky+ Light com Globo',      icon: '/img/icons-digitais/sky+.png',                 bg: '#0a0a0a', fit: 'cover',   desc: 'Sky+ com conteúdo GloboPlay integrado.'              },
      { nome: 'HotGo',                     icon: '/img/icons-digitais/hotgo.webp',               bg: '#1a1a1a', fit: 'cover',   desc: 'Filmes e séries nacionais e internacionais.'         },
      { nome: 'GloboPlay Padrão',          icon: '/img/icons-digitais/globoplay.png',            bg: '#e20014', fit: 'cover',   desc: 'Novelas, jornalismo e séries exclusivas da Globo.'   },
    ],
  },
  {
    label: 'Top',
    cor: '#7c3aed',
    desc: 'O melhor da experiência digital no seu plano.',
    servicos: [
      { nome: 'Pequenos Leitores',         icon: '/img/icons-digitais/pequenosleitores.png',     bg: '#dc2626', fit: 'cover',   desc: 'Livros e histórias interativas para crianças.'        },
      { nome: 'Cindie',                    icon: '/img/icons-digitais/cindie.png',               bg: '#0a0a0a', fit: 'cover',   desc: 'Cinema independente nacional e internacional.'        },
      { nome: 'Sky+ Light c/ Globo e Amazon', icon: '/img/icons-digitais/sky+.png',             bg: '#0a0a0a', fit: 'cover',   desc: 'Sky+ com GloboPlay e Prime Video integrados.'        },
      { nome: 'HBO Max c/ Anúncios',       icon: '/img/icons-digitais/hbo.webp',                bg: '#1c1f2e', fit: 'cover',   desc: 'Séries originais HBO, filmes e documentários.'        },
      { nome: 'Disney+ Padrão c/ Anúncios',icon: '/img/icons-digitais/disney+.png',             bg: '#001f5c', fit: 'cover',   desc: 'Disney, Marvel, Pixar e Star Wars.'                  },
    ],
  },
  {
    label: 'Premium',
    cor: '#d97706',
    desc: 'Experiência completa — o topo do ecossistema digital Siga Fibra.',
    servicos: [
      { nome: 'Leitura360',                icon: '/img/icons-digitais/leitura360.png',           bg: '#b91c1c', fit: 'cover',   desc: 'Milhares de livros, revistas e audiobooks.'          },
      { nome: 'ZenWellness',               icon: '/img/icons-digitais/zen.png',                  bg: '#064e3b', fit: 'cover',   desc: 'Bem-estar, meditação e saúde mental.'                },
      { nome: 'GloboPlay Premium',         icon: '/img/icons-digitais/globoplay.png',            bg: '#e20014', fit: 'cover',   desc: 'GloboPlay sem anúncios com todo o catálogo.'         },
      { nome: 'Kaspersky Plus 5 Lic.',     icon: '/img/icons-digitais/kasperskystandard1lic.png',bg: '#2a2a2a', fit: 'cover',   desc: 'Proteção máxima para até 5 dispositivos.'            },
      { nome: 'Queima Diária',             icon: '/img/icons-digitais/PLUS-PNG.png',             bg: '#dc4a00', fit: 'contain', desc: 'Treinos e aulas de fitness para todos os níveis.'     },
      { nome: 'HBO Max',                   icon: '/img/icons-digitais/hbo.webp',                bg: '#1c1f2e', fit: 'cover',   desc: 'HBO Max completo sem anúncios e em 4K.'              },
      { nome: 'Disney+ Padrão',            icon: '/img/icons-digitais/disney+.png',             bg: '#001f5c', fit: 'cover',   desc: 'Disney+ completo sem anúncios.'                      },
    ],
  },
]

// ─── Ícones para o hero animado ───────────────────────────────────────────────

const ICONS = [
  { src: '/img/icons-digitais/exitlag.png',              bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/qnutri.png',               bg: '#ea580c', fit: 'cover'   },
  { src: '/img/icons-digitais/!looke.webp',              bg: '#1d4ed8', fit: 'cover'   },
  { src: '/img/icons-digitais/playlist.png',             bg: '#4c1d95', fit: 'cover'   },
  { src: '/img/icons-digitais/ubookgo.png',              bg: '#27a89a', fit: 'cover'   },
  { src: '/img/icons-digitais/curtaon.png',              bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/playkids.png',             bg: '#6d28d9', fit: 'cover'   },
  { src: '/img/icons-digitais/docway-1.webp',            bg: '#16a34a', fit: 'cover'   },
  { src: '/img/icons-digitais/disney+.png',              bg: '#001f5c', fit: 'cover'   },
  { src: '/img/icons-digitais/prime-video.png',          bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/socialcomics.png',         bg: '#1c1f2e', fit: 'cover'   },
  { src: '/img/icons-digitais/estuda+.png',              bg: '#7c3aed', fit: 'cover'   },
  { src: '/img/icons-digitais/hotgo.webp',               bg: '#1a1a1a', fit: 'cover'   },
  { src: '/img/icons-digitais/leitura360.png',           bg: '#b91c1c', fit: 'cover'   },
  { src: '/img/icons-digitais/hubvantagens.jpg',         bg: '#1e40af', fit: 'cover'   },
  { src: '/img/icons-digitais/Kaspersky_App Icon.png',  bg: '#2a2a2a', fit: 'cover'   },
  { src: '/img/icons-digitais/fluid.png',                bg: '#0891b2', fit: 'cover'   },
  { src: '/img/icons-digitais/ojornalista.png',          bg: '#111111', fit: 'cover'   },
  { src: '/img/icons-digitais/globoplay.png',            bg: '#e20014', fit: 'cover'   },
  { src: '/img/icons-digitais/hbo.webp',                 bg: '#1c1f2e', fit: 'cover'   },
  { src: '/img/icons-digitais/sky+.png',                 bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/kiddlepass.png',           bg: '#f59e0b', fit: 'cover'   },
  { src: '/img/icons-digitais/cindie.png',               bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/pequenosleitores.png',     bg: '#dc2626', fit: 'cover'   },
  { src: '/img/icons-digitais/revistaria.png',           bg: '#1e3a5f', fit: 'cover'   },
  { src: '/img/icons-digitais/zen.png',                  bg: '#064e3b', fit: 'cover'   },
]

const COLS = 24
const SETS = 3
const CARD = 88
const GAP  = 10
const ROW_OFFSET = COLS * (CARD + GAP)
const SPEEDS = [72, 108, 65, 120, 88, 102, 69, 116, 82, 98]

// ─── Componentes ─────────────────────────────────────────────────────────────

function ServicoCard({ nome, icon, bg, desc, fit, cor }: {
  nome: string; icon: string; bg: string; desc: string; fit: string; cor: string
}) {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ background: 'var(--card-bg)', border: '1px solid rgba(128,128,128,0.12)' }}>
      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
        style={{ background: bg, boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}>
        <img src={icon} alt={nome}
          style={{ width: '100%', height: '100%', objectFit: fit as 'cover' | 'contain', display: 'block' }} />
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{nome}</p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
      <button
        onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
        className="w-full py-2 rounded-xl font-bold text-xs uppercase tracking-wide text-white transition-all duration-200 hover:opacity-90"
        style={{ background: cor }}
      >
        Saiba mais
      </button>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VejaMaisFerramentas() {
  const router = useRouter()

  return (
    <div className="font-sans" style={{ background: 'var(--bg-light-alt)' }}>

      {/* ── Hero animado ── */}
      <section className="relative overflow-hidden" style={{ background: '#04050a', height: 560 }}>
        <style>{`
          @keyframes veja-slide-left  { from { transform: translateX(0px); } to { transform: translateX(-${ROW_OFFSET}px); } }
          @keyframes veja-slide-right { from { transform: translateX(-${ROW_OFFSET}px); } to { transform: translateX(0px); } }
        `}</style>

        <div className="absolute" style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-14deg)',
          display: 'flex', flexDirection: 'column', gap: GAP,
        }}>
          {Array.from({ length: 10 }, (_, row) => (
            <div key={row} style={{
              display: 'flex', gap: GAP, flexShrink: 0,
              animation: `${row % 2 === 0 ? 'veja-slide-left' : 'veja-slide-right'} ${SPEEDS[row]}s linear infinite`,
              willChange: 'transform',
            }}>
              {Array.from({ length: COLS * SETS }, (_, col) => {
                const icon = ICONS[(col % COLS + row * 7) % ICONS.length]
                return (
                  <div key={col} style={{
                    width: CARD, height: CARD, flexShrink: 0,
                    borderRadius: 18, background: icon.bg, overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.55)',
                  }}>
                    <img src={icon.src} alt="" style={{
                      width: icon.fit === 'contain' ? '76%' : '100%',
                      height: icon.fit === 'contain' ? '76%' : '100%',
                      objectFit: icon.fit as 'cover' | 'contain',
                    }} />
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #04050a, transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to top, #04050a, transparent)' }} />
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(to right, #04050a, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(to left, #04050a, transparent)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(4,5,10,0.78) 0%, rgba(4,5,10,0.3) 65%, transparent 100%)',
        }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>
            Serviços Digitais
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.9)' }}>
            Tudo que você precisa,<br />
            <span style={{ color: '#27CAA3' }}>num só lugar.</span>
          </h1>
          <p className="text-base max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Streaming, segurança, saúde, educação e muito mais — disponíveis para adicionar ao seu plano Siga Fibra.
          </p>
          <button
            onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
            className="font-bold px-10 py-4 rounded-2xl text-sm uppercase tracking-wide text-white transition-all duration-200 hover:opacity-90 pointer-events-auto"
            style={{ background: '#27CAA3' }}
          >
            Falar com consultor
          </button>
        </div>
      </section>

      {/* ── Catálogo por tier ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#27CAA3' }}>Catálogo completo</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: 'var(--text-dark)' }}>
              Escolha o pacote ideal para você
            </h2>
            <p className="mt-3 text-base max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
              Do essencial ao premium — monte sua experiência digital do seu jeito.
            </p>
          </div>

          {/* Pills de navegação */}
          <div className="flex flex-wrap justify-center gap-3 mb-14" data-aos="fade-up">
            {tiers.map((t) => (
              <a key={t.label} href={`#tier-${t.label.toLowerCase()}`}
                className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-80"
                style={{ background: t.cor + '18', color: t.cor, border: `1px solid ${t.cor}33` }}>
                {t.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-20">
            {tiers.map((tier) => (
              <div key={tier.label} id={`tier-${tier.label.toLowerCase()}`} data-aos="fade-up">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-wide text-white"
                      style={{ background: tier.cor }}>
                      {tier.label}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: tier.cor + '15', color: tier.cor, border: `1px solid ${tier.cor}25` }}>
                      {tier.servicos.length} {tier.servicos.length === 1 ? 'serviço' : 'serviços'}
                    </span>
                  </div>
                  <p className="text-sm sm:ml-2" style={{ color: 'var(--text-muted)' }}>{tier.desc}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {tier.servicos.map((s) => (
                    <ServicoCard key={s.nome} {...s} cor={tier.cor} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-14 md:py-20" style={{ background: '#27CAA3' }}>
        <div className="max-w-[800px] mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Pronto para montar seu plano ideal?
          </h2>
          <p className="text-white/75 mb-8 text-base">
            Fale com um consultor e adicione os serviços que quiser ao seu plano Siga Fibra.
          </p>
          <button
            onClick={() => router.push('/pessoa-fisica/atendimento/canais')}
            className="font-bold px-10 py-4 rounded-2xl text-sm uppercase tracking-wide bg-white transition-all duration-200 hover:bg-gray-50"
            style={{ color: '#27CAA3' }}
          >
            Falar com consultor
          </button>
        </div>
      </section>

    </div>
  )
}
