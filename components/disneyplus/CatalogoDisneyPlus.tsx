'use client'

import React from 'react'
import Image from 'next/image'

const titulos = [
  { slug: 'demolidor', nome: 'Demolidor',  universo: 'Marvel',     cor: '#e23636' },
  { slug: 'tron',      nome: 'Tron: Ares', universo: 'Disney+',    cor: '#00A8E1' },
  { slug: 'percy',     nome: 'Percy Jackson', universo: 'Disney+', cor: '#0063e5', ext9x16: 'png' },
  { slug: 'starwars',  nome: 'Star Wars',  universo: 'Star Wars',  cor: '#fbbf24' },
  { slug: 'zootopia',  nome: 'Zootopia 2', universo: 'Disney',     cor: '#0063e5' },
]

export default function CatalogoDisneyPlus() {
  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ background: '#000d26' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0063e5' }}>
            Catálogo
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-[600px] mx-auto leading-tight">
            Explore os lançamentos e exclusivos do Disney+.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="text-gray-500 mt-4 max-w-[500px] mx-auto leading-relaxed">
            Novidades toda semana: de grandes estreias do cinema a séries originais que só existem aqui.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="140" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {titulos.map((t, i) => {
            const ext9x16 = t.ext9x16 ?? 'jpeg'
            return (
              <div key={t.slug} className="relative rounded-2xl overflow-hidden max-w-[280px] mx-auto w-full sm:max-w-none"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}>

                {/* Desktop lg+ — 9x16 portrait */}
                <div className="hidden lg:block relative" style={{ aspectRatio: '9/16' }}>
                  <Image
                    src={`/img/disney/${t.slug}-9x16.${ext9x16}`}
                    alt={t.nome}
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>

                {/* Mobile e tablet — 1x1 square */}
                <div className="block lg:hidden relative" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={`/img/disney/${t.slug}-1x1.jpeg`}
                    alt={t.nome}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 100vw"
                  />
                </div>

                {i === 0 && (
                  <div className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: '#27CAA3' }}>
                    Destaque
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
