# siga-fibra (Next.js)

Projeto convertido de Vite + React Router para Next.js 15 (App Router) com TypeScript.
Design, cores, paleta, fontes e estrutura visual foram mantidos integralmente.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- AOS (Animate On Scroll)

## Como rodar

```bash
npm install
npm run dev
```

Aplicação em http://localhost:3000

```bash
npm run build
npm start
```

## Estrutura

```
app/                       # App Router (rotas)
  layout.tsx               # Layout raiz (Navbar + inicialização do AOS)
  globals.css              # Tailwind + Montserrat
  page.tsx                 # Rota / (PFHome)
  pessoa-fisica/...        # Rotas /pessoa-fisica/*
  empresa/...              # Rotas /empresa/*
components/                # Componentes (mesma estrutura do projeto original)
  navbar/, home/, empresa/, disneyplus/, globoplay/, hbomax/,
  skymais/, lantolan/, linkdedicado/, shared/
  AosInit.tsx              # Bootstrap do AOS no client
public/img/                # Imagens dos banners (1.jpg .. 4.jpg)
types/index.ts             # Tipos compartilhados
```

## O que mudou em relação ao projeto Vite

- `react-router-dom` removido. `useNavigate` virou `useRouter` (`next/navigation`),
  `useLocation().pathname` virou `usePathname()`, `navigate(path)` virou `router.push(path)`.
- `BrowserRouter` + `Routes` + `Route` substituídos pelo roteamento por pastas do App Router.
- `main.tsx` + `index.html` substituídos por `app/layout.tsx`.
- Imagens em `src/assets/img` movidas para `public/img` e referenciadas por URL
  (`/img/1.jpg` etc.).
- Componentes que usam hooks ou eventos de browser ganharam diretiva `'use client'`.
- Componentes puros (apenas render) ficam como Server Components.

Nenhuma mudança de design, estilo, cores ou conteúdo foi feita.
