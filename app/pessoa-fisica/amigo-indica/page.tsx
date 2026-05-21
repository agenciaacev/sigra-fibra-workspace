import HeroAmigoIndica from '@/components/amigo-indica/HeroAmigoIndica'
import ComoFuncionaAmigoIndica from '@/components/amigo-indica/ComoFuncionaAmigoIndica'
import RegrasAmigoIndica from '@/components/amigo-indica/RegrasAmigoIndica'

export const metadata = {
  title: 'Amigo Indica — Siga Fibra',
  description: 'Indique um amigo para a Siga Fibra e ganhe 100% de desconto em uma mensalidade. Sem limite de indicações.',
}

export default function AmigoIndicaPage() {
  return (
    <main>
      <HeroAmigoIndica />
      <ComoFuncionaAmigoIndica />
      <RegrasAmigoIndica />
    </main>
  )
}
