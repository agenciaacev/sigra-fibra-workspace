'use client'

import React from 'react'

// 18 ícones reais em ordem aleatória (cores variadas para dar ritmo visual)
const ICONS = [
  { src: '/img/icons-digitais/exitlag.png',                    bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/qnutri.png',                     bg: '#ea580c', fit: 'cover'   },
  { src: '/img/icons-digitais/Looke-Google-Apple-1.webp',      bg: '#1d4ed8', fit: 'cover'   },
  { src: '/img/icons-digitais/ICON (4).png',                   bg: '#4c1d95', fit: 'cover'   },
  { src: '/img/icons-digitais/ICON.png',                       bg: '#27a89a', fit: 'cover'   },
  { src: '/img/icons-digitais/curtaon.png',                    bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/PlayKids Learning_App Icon.png', bg: '#6d28d9', fit: 'cover'   },
  { src: '/img/icons-digitais/docway-1.webp',                  bg: '#5cb84c', fit: 'cover'   },
  { src: '/img/icons-digitais/STANDARD-PNG.png',               bg: '#0369a1', fit: 'contain' },
  { src: '/img/icons-digitais/Deezer App Icon.png',            bg: '#0a0a0a', fit: 'cover'   },
  { src: '/img/icons-digitais/ICON (2).png',                   bg: '#1c1f2e', fit: 'cover'   },
  { src: '/img/icons-digitais/PLUS-PNG.png',                   bg: '#5b21b6', fit: 'contain' },
  { src: '/img/icons-digitais/service-hotgo-1.webp',           bg: '#1a1a1a', fit: 'cover'   },
  { src: '/img/icons-digitais/+LEITURA_ICON.png',              bg: '#b91c1c', fit: 'cover'   },
  { src: '/img/icons-digitais/ICON (3).png',                   bg: '#1a8fd1', fit: 'cover'   },
  { src: '/img/icons-digitais/Kaspersky_App Icon.png',         bg: '#2a2a2a', fit: 'cover'   },
  { src: '/img/icons-digitais/logo_fluid_bg.png',              bg: '#0891b2', fit: 'contain' },
  { src: '/img/icons-digitais/ICON (1).png',                   bg: '#000000', fit: 'cover'   },
]

const COLS = 18                       // ícones únicos por set
const SETS = 3                        // 3× garante sem espaço preto durante animação
const ROWS = 10
const CARD = 92
const GAP = 12
const ROW_OFFSET = COLS * (CARD + GAP) // 1872px

// ~40% mais lento que antes
const SPEEDS = [76, 110, 68, 124, 90, 105, 71, 119, 85, 100]

export default function AppEcosystemSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#04050a', height: 600 }}
    >
      <style>{`
        @keyframes slide-left {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${ROW_OFFSET}px); }
        }
        @keyframes slide-right {
          from { transform: translateX(-${ROW_OFFSET}px); }
          to   { transform: translateX(0px); }
        }
      `}</style>

      <div
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-14deg)',
          display: 'flex',
          flexDirection: 'column',
          gap: GAP,
        }}
      >
        {Array.from({ length: ROWS }, (_, row) => (
          <div
            key={row}
            style={{
              display: 'flex',
              gap: GAP,
              flexShrink: 0,
              animation: `${row % 2 === 0 ? 'slide-left' : 'slide-right'} ${SPEEDS[row]}s linear infinite`,
              willChange: 'transform',
            }}
          >
            {Array.from({ length: COLS * SETS }, (_, col) => {
              const icon = ICONS[(col % COLS + row * 7) % COLS]
              return (
                <div
                  key={col}
                  style={{
                    width: CARD,
                    height: CARD,
                    flexShrink: 0,
                    borderRadius: 20,
                    background: icon.bg,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.55)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={icon.src}
                    alt=""
                    style={{
                      width: icon.fit === 'contain' ? '78%' : '100%',
                      height: icon.fit === 'contain' ? '78%' : '100%',
                      objectFit: icon.fit as 'cover' | 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Fades nas bordas */}
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #04050a, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #04050a, transparent)' }} />
      <div className="absolute inset-y-0 left-0 w-28 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #04050a, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-28 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #04050a, transparent)' }} />
    </section>
  )
}
