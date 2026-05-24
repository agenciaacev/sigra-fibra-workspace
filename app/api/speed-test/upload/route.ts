import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  await request.arrayBuffer()
  return NextResponse.json({ ok: true }, {
    headers: { 'Cache-Control': 'no-store, no-cache' },
  })
}
