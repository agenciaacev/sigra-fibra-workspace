import { useState, useEffect } from 'react'

interface IpApiResponse {
  city?: string
  region_code?: string
}

export default function LocationBadge() {
  const [city, setCity] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json() as Promise<IpApiResponse>)
      .then(data => {
        if (data.city && data.region_code) setCity(`${data.city}/${data.region_code}`)
        else setCity(null)
      })
      .catch(() => setCity(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="flex items-center gap-1.5 text-xs text-gray-400 animate-pulse">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Localizando...
    </div>
  )

  if (!city) return null

  return (
    <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 bg-gray-100 text-gray-600">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#27CAA3' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {city}
    </div>
  )
}
