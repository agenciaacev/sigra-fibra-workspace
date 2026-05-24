'use client'

import React, { useState, useCallback, useEffect } from 'react'

/* ─────────────────────────────────────────────
   Live animated gauge
   270° arc, gap at bottom. Rotation 135° so
   arc starts at compass 225° (7:30 position).
───────────────────────────────────────────── */
function SpeedGauge({
  speed, maxSpeed = 2500, label, isActive = false,
}: {
  speed: number; maxSpeed?: number; label: string; isActive?: boolean
}) {
  const CX = 160, CY = 155, R = 120
  const C    = 2 * Math.PI * R
  const ARC  = C * (270 / 360)
  const GAP  = C - ARC
  const fill = ARC * Math.min(speed / maxSpeed, 1)

  // Sweep comet: ~14% of circumference wide
  const sweepLen = C * 0.14
  // Bright tip at leading edge of sweep: ~2% wide
  const tipLen   = C * 0.02

  const display = speed >= 1000 ? (speed / 1000).toFixed(2) : speed.toFixed(1)
  const unit    = speed >= 1000 ? 'Gb/s' : 'Mb/s'

  return (
    <svg viewBox="0 0 320 255" className="w-full max-w-[360px] mx-auto">
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#27CAA3" />
          <stop offset="100%" stopColor="#03C2C3" />
        </linearGradient>
        <filter id="gaugeGlow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sweepGlow">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Track */}
      <circle cx={CX} cy={CY} r={R} fill="none"
        stroke="rgba(255,255,255,0.07)" strokeWidth="22"
        strokeDasharray={`${ARC} ${GAP}`} strokeLinecap="round"
        transform={`rotate(135, ${CX}, ${CY})`}
      />

      {/* Fill */}
      <circle cx={CX} cy={CY} r={R} fill="none"
        stroke="url(#gaugeGrad)" strokeWidth="22"
        strokeDasharray={`${fill} ${C - fill}`} strokeLinecap="round"
        transform={`rotate(135, ${CX}, ${CY})`}
        filter="url(#gaugeGlow)"
        style={{ transition: 'stroke-dasharray 0.22s ease-out' }}
      />

      {/* ── Rotating sweep (comet tail) during active test ── */}
      {isActive && (
        <>
          {/* Comet glow body */}
          <circle cx={CX} cy={CY} r={R} fill="none"
            stroke="rgba(39,202,163,0.45)" strokeWidth="22"
            strokeDasharray={`${sweepLen} ${C - sweepLen}`}
            strokeLinecap="round"
            filter="url(#sweepGlow)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`135 ${CX} ${CY}`}
              to={`495 ${CX} ${CY}`}
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Bright leading tip */}
          <circle cx={CX} cy={CY} r={R} fill="none"
            stroke="white" strokeWidth="22" opacity="0.85"
            strokeDasharray={`${tipLen} ${C - tipLen}`}
            strokeLinecap="round"
            filter="url(#sweepGlow)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${135 + sweepLen / C * 360} ${CX} ${CY}`}
              to={`${495 + sweepLen / C * 360} ${CX} ${CY}`}
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </>
      )}

      {/* Speed number */}
      <text x={CX} y={CY - 16} textAnchor="middle" fontSize="52" fontWeight="900"
        fill="white" fontFamily="system-ui, -apple-system, sans-serif">
        {display}
      </text>
      <text x={CX} y={CY + 16} textAnchor="middle" fontSize="17" fontWeight="700"
        fill="#27CAA3" fontFamily="system-ui">
        {unit}
      </text>
      <text x={CX} y={CY + 36} textAnchor="middle" fontSize="9"
        fill="rgba(255,255,255,0.28)" fontFamily="system-ui" letterSpacing="3">
        {label}
      </text>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Radar idle
───────────────────────────────────────────── */
function RadarIdle({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <style>{`
        @keyframes rp { 0% { transform:scale(1); opacity:.55; } 100% { transform:scale(3); opacity:0; } }
        .rp1 { animation: rp 2.4s ease-out infinite; }
        .rp2 { animation: rp 2.4s ease-out .8s infinite; }
        .rp3 { animation: rp 2.4s ease-out 1.6s infinite; }
      `}</style>

      <div className="relative flex items-center justify-center mb-10">
        {['rp1','rp2','rp3'].map((cls, i) => (
          <div key={cls} className={`${cls} absolute w-28 h-28 rounded-full border`}
            style={{ borderColor: `rgba(39,202,163,${0.4 - i * 0.1})` }} />
        ))}
        <button onClick={onStart}
          className="relative z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center gap-1.5 text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #27CAA3, #03C2C3)', boxShadow: '0 0 56px rgba(39,202,163,0.45)' }}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21 5 3" fill="white" />
          </svg>
          <span className="text-xs font-black tracking-widest uppercase">Iniciar</span>
        </button>
      </div>

      <p className="text-white font-bold text-xl mb-2">Pronto para testar?</p>
      <p className="text-gray-500 text-sm text-center max-w-xs px-4">
        Clique para medir o desempenho real da sua conexão Siga Fibra.
      </p>

      <div className="flex items-center gap-8 mt-8">
        {['Download', 'Upload', 'Latência'].map((m) => (
          <div key={m} className="text-center">
            <div className="w-12 h-1.5 rounded-full mx-auto mb-2" style={{ background: 'rgba(39,202,163,0.18)' }} />
            <p className="text-xs text-gray-600">{m}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Phase steps
───────────────────────────────────────────── */
type Phase = 'idle' | 'ping' | 'download' | 'upload' | 'done'

function PhaseSteps({ phase }: { phase: Phase }) {
  const steps = [
    { key: 'ping',     label: 'Latência' },
    { key: 'download', label: 'Download' },
    { key: 'upload',   label: 'Upload' },
  ]
  const activeIdx = phase === 'done' ? 3 : steps.findIndex(s => s.key === phase)

  return (
    <div className="flex items-center justify-center gap-2 mt-5">
      {steps.map((step, i) => {
        const isDone   = i < activeIdx
        const isActive = steps[activeIdx]?.key === step.key
        return (
          <React.Fragment key={step.key}>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full transition-colors"
                style={{ background: isDone || isActive ? '#27CAA3' : 'rgba(255,255,255,0.14)' }} />
              <span className="text-xs font-semibold transition-colors"
                style={{ color: isActive ? '#27CAA3' : isDone ? 'rgba(255,255,255,0.42)' : 'rgba(255,255,255,0.18)' }}>
                {step.label}
              </span>
            </div>
            {i < 2 && (
              <div className="w-7 h-px"
                style={{ background: isDone ? '#27CAA3' : 'rgba(255,255,255,0.09)' }} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Quality label
───────────────────────────────────────────── */
function getQuality(type: 'download' | 'upload' | 'ping', value: number) {
  if (type === 'ping') {
    if (value < 10)  return { label: 'Excelente', color: '#27CAA3' }
    if (value < 30)  return { label: 'Bom',       color: '#3ddcbc' }
    if (value < 70)  return { label: 'Regular',   color: '#f59e0b' }
    return                  { label: 'Fraco',     color: '#ef4444' }
  }
  if (type === 'download') {
    if (value > 500) return { label: 'Excelente', color: '#27CAA3' }
    if (value > 100) return { label: 'Bom',       color: '#3ddcbc' }
    if (value > 25)  return { label: 'Regular',   color: '#f59e0b' }
    return                  { label: 'Fraco',     color: '#ef4444' }
  }
  if (value > 200)   return { label: 'Excelente', color: '#27CAA3' }
  if (value > 50)    return { label: 'Bom',       color: '#3ddcbc' }
  if (value > 10)    return { label: 'Regular',   color: '#f59e0b' }
  return                    { label: 'Fraco',     color: '#ef4444' }
}

/* ─────────────────────────────────────────────
   Measurement functions
───────────────────────────────────────────── */
async function measurePing(): Promise<number> {
  const times: number[] = []
  for (let i = 0; i < 5; i++) {
    const t0 = performance.now()
    await fetch('/api/speed-test/ping', { cache: 'no-store' })
    times.push(performance.now() - t0)
  }
  times.sort((a, b) => a - b)
  const trimmed = times.slice(1, -1)
  return trimmed.reduce((a, b) => a + b, 0) / trimmed.length
}

async function measureDownload(onProgress: (mbps: number) => void): Promise<number> {
  const controller = new AbortController()
  let totalBytes   = 0
  const startTime  = performance.now()
  let lastTime     = startTime
  let lastBytes    = 0

  setTimeout(() => controller.abort(), 12_000)

  try {
    const res    = await fetch('/api/speed-test/download', { cache: 'no-store', signal: controller.signal })
    const reader = res.body!.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (value) totalBytes += value.length
      const now = performance.now()
      if (now - lastTime >= 250) {
        onProgress(((totalBytes - lastBytes) * 8) / ((now - lastTime) / 1000 * 1_000_000))
        lastTime  = now
        lastBytes = totalBytes
      }
    }
  } catch { /* AbortError expected */ }

  const elapsed = (performance.now() - startTime) / 1000
  return elapsed > 0 ? (totalBytes * 8) / (elapsed * 1_000_000) : 0
}

async function measureUpload(onProgress: (mbps: number) => void): Promise<number> {
  return new Promise((resolve) => {
    const SIZE = 10 * 1024 * 1024
    const data = new Uint8Array(SIZE)
    for (let i = 0; i < SIZE; i++) data[i] = i & 0xff

    const xhr       = new XMLHttpRequest()
    const startTime = performance.now()
    let lastTime    = startTime
    let lastLoaded  = 0

    xhr.upload.onprogress = (e) => {
      const now = performance.now()
      if (now - lastTime >= 250) {
        onProgress(((e.loaded - lastLoaded) * 8) / ((now - lastTime) / 1000 * 1_000_000))
        lastTime   = now
        lastLoaded = e.loaded
      }
    }
    xhr.onload    = () => { const el = (performance.now() - startTime) / 1000; resolve((SIZE * 8) / (el * 1_000_000)) }
    xhr.onerror   = () => resolve(0)
    xhr.ontimeout = () => resolve(0)
    xhr.open('POST', '/api/speed-test/upload')
    xhr.timeout = 20_000
    xhr.send(data)
  })
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function TesteVelocidade() {
  const [phase,        setPhase]        = useState<Phase>('idle')
  const [currentSpeed, setCurrentSpeed] = useState(0)
  const [pingAnim,     setPingAnim]     = useState(0)
  const [results,      setResults]      = useState<{ ping: number | null; download: number | null; upload: number | null }>
    ({ ping: null, download: null, upload: null })

  // Oscillate gauge during ping phase to look like it's scanning
  useEffect(() => {
    if (phase !== 'ping') { setPingAnim(0); return }
    let t = 0
    const id = setInterval(() => {
      t += 0.12
      setPingAnim(400 + 350 * Math.sin(t) * Math.abs(Math.sin(t * 0.4)))
    }, 40)
    return () => clearInterval(id)
  }, [phase])

  const reset = useCallback(() => {
    setPhase('idle')
    setCurrentSpeed(0)
    setResults({ ping: null, download: null, upload: null })
  }, [])

  const runTest = useCallback(async () => {
    setPhase('ping')
    setCurrentSpeed(0)
    setResults({ ping: null, download: null, upload: null })

    const ping = await measurePing()
    setResults(r => ({ ...r, ping }))

    setPhase('download')
    setCurrentSpeed(0)
    const download = await measureDownload(mbps => setCurrentSpeed(mbps))
    setResults(r => ({ ...r, download }))

    setPhase('upload')
    setCurrentSpeed(0)
    const upload = await measureUpload(mbps => setCurrentSpeed(mbps))
    setResults(r => ({ ...r, upload }))

    setPhase('done')
  }, [])

  const phaseLabel =
    phase === 'ping'     ? 'LATÊNCIA' :
    phase === 'download' ? 'DOWNLOAD' :
    phase === 'upload'   ? 'UPLOAD'   : ''

  return (
    <div className="font-sans min-h-screen flex flex-col" style={{ background: '#060d0f' }}>

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(39,202,163,0.09), transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent 65%)' }} />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 pt-16 pb-10 text-center px-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          style={{ background: 'rgba(39,202,163,0.1)', border: '1px solid rgba(39,202,163,0.22)', color: '#27CAA3' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#27CAA3' }} />
          Ferramenta gratuita · Siga Fibra
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Teste sua{' '}
          <span style={{ background: 'linear-gradient(135deg, #27CAA3, #03C2C3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            velocidade
          </span>
        </h1>
        <p className="text-gray-500 mt-3 text-base max-w-sm mx-auto">
          Descubra o desempenho real da sua conexão — download, upload e latência.
        </p>
      </div>

      {/* ── Speed test card ── */}
      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pb-20">
        <div className="w-full max-w-[620px]">
          <div className="rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(39,202,163,0.2)', boxShadow: '0 0 100px rgba(39,202,163,0.08)' }}>

            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3.5"
              style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#27CAA3' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#27CAA3' }} />
                Siga Fibra · Speed Test
              </div>
              {phase === 'done' && (
                <button onClick={reset}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-75"
                  style={{ background: 'rgba(39,202,163,0.14)', color: '#27CAA3' }}>
                  Testar novamente
                </button>
              )}
            </div>

            {/* ── Idle ── */}
            {phase === 'idle' && (
              <div style={{ background: '#050e18' }}>
                <RadarIdle onStart={runTest} />
              </div>
            )}

            {/* ── Testing ── */}
            {(phase === 'ping' || phase === 'download' || phase === 'upload') && (
              <div className="px-6 py-10 flex flex-col items-center" style={{ background: '#050e18' }}>
                <SpeedGauge
                  speed={phase === 'ping' ? pingAnim : currentSpeed}
                  label={phaseLabel}
                  isActive
                />
                <PhaseSteps phase={phase} />
                {phase === 'ping' && (
                  <p className="text-gray-600 text-sm mt-6 animate-pulse">Medindo latência da rede...</p>
                )}
              </div>
            )}

            {/* ── Results ── */}
            {phase === 'done' && results.ping !== null && results.download !== null && results.upload !== null && (
              <div className="px-6 pt-8 pb-10" style={{ background: '#050e18' }}>
                <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#27CAA3' }}>
                  Resultado do teste
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {([
                    { type: 'download' as const, value: results.download, icon: '↓', label: 'Download', unit: 'Mb/s' },
                    { type: 'upload'   as const, value: results.upload,   icon: '↑', label: 'Upload',   unit: 'Mb/s' },
                    { type: 'ping'     as const, value: results.ping,     icon: '◎', label: 'Latência', unit: 'ms'   },
                  ]).map(({ type, value, icon, label, unit }) => {
                    const q           = getQuality(type, value)
                    const displayVal  =
                      type === 'ping'
                        ? Math.round(value).toString()
                        : value >= 1000
                          ? (value / 1000).toFixed(2)
                          : value.toFixed(1)
                    const displayUnit = type !== 'ping' && value >= 1000 ? 'Gb/s' : unit

                    return (
                      <div key={type} className="flex flex-col items-center px-3 py-5 rounded-2xl"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <span className="text-xl font-black mb-3" style={{ color: '#27CAA3' }}>{icon}</span>
                        <span className="text-3xl font-black text-white leading-none">{displayVal}</span>
                        <span className="text-xs text-gray-600 mt-1 mb-3">{displayUnit}</span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={{ background: `${q.color}1a`, color: q.color }}>
                          {q.label}
                        </span>
                        <span className="text-xs text-gray-600 mt-2">{label}</span>
                      </div>
                    )
                  })}
                </div>

                <p className="text-center text-xs text-gray-700 mt-6">
                  Medido às {new Date().toLocaleTimeString('pt-BR')} · Resultados via Wi-Fi podem variar
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  )
}
