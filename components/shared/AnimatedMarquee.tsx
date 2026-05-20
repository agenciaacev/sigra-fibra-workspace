import React from 'react'

interface MarqueeItem {
  text: string
  highlight?: boolean
}

interface AnimatedMarqueeProps {
  items: MarqueeItem[]
  speed?: number // segundos para completar um ciclo
  direction?: 'left' | 'right'
  bgColor?: string
  textColor?: string
  accentColor?: string
  separator?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AnimatedMarquee({
  items,
  speed = 30,
  direction = 'left',
  bgColor = '#27CAA3',
  textColor = '#fff',
  accentColor = '#111',
  separator = '◆',
  size = 'md',
}: AnimatedMarqueeProps) {
  // Duplicar para loop contínuo
  const doubled = [...items, ...items, ...items]

  const sizeMap = {
    sm: { py: '8px', fontSize: '0.75rem', letterSpacing: '0.1em' },
    md: { py: '12px', fontSize: '0.875rem', letterSpacing: '0.12em' },
    lg: { py: '16px', fontSize: '1.125rem', letterSpacing: '0.08em' },
  }

  const { py, fontSize, letterSpacing } = sizeMap[size]

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{ background: bgColor, paddingTop: py, paddingBottom: py }}
    >
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 z-10 w-20 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
      />
      <div
        className="absolute inset-y-0 right-0 z-10 w-20 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
      />

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee-left {
          animation: marquee-left ${speed}s linear infinite;
        }
        .marquee-right {
          animation: marquee-right ${speed}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`marquee-track marquee-${direction}`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center shrink-0"
            style={{ fontSize, letterSpacing }}
          >
            <span
              className="font-bold uppercase whitespace-nowrap px-4"
              style={{
                color: item.highlight ? accentColor : textColor,
                background: item.highlight ? textColor : 'transparent',
                borderRadius: item.highlight ? '4px' : undefined,
                padding: item.highlight ? '2px 10px' : '0 16px',
              }}
            >
              {item.text}
            </span>
            <span
              className="opacity-50 shrink-0"
              style={{ color: textColor, fontSize: '0.6em', marginRight: '4px' }}
            >
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
