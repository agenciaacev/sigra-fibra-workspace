export async function GET() {
  const CHUNK = 128 * 1024       // 128 KB per chunk
  const TOTAL = 50 * 1024 * 1024 // 50 MB total

  // Non-compressible pseudo-random pattern
  const buf = new Uint8Array(CHUNK)
  for (let i = 0; i < CHUNK; i++) buf[i] = (i * 7 + 3) & 0xff

  const stream = new ReadableStream({
    start(controller) {
      let sent = 0
      while (sent < TOTAL) {
        const size = Math.min(CHUNK, TOTAL - sent)
        controller.enqueue(buf.slice(0, size))
        sent += size
      }
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Cache-Control': 'no-store, no-cache',
      'Content-Encoding': 'identity',
    },
  })
}
