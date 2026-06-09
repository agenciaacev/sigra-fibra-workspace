import CheckoutFlow from '@/components/checkout/CheckoutFlow'

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; addon?: string }>
}) {
  const { plan, addon } = await searchParams
  return <CheckoutFlow planId={plan} preAddonId={addon} />
}
