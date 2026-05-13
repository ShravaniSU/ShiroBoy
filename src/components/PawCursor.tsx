import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Paw = {
  id: number
  x: number
  y: number
}

export function PawCursor() {
  const [paws, setPaws] = useState<Paw[]>([])

  useEffect(() => {
    let last = 0

    const onMove = (event: PointerEvent) => {
      const now = Date.now()
      if (now - last < 140 || event.pointerType === 'touch') {
        return
      }

      last = now
      const id = now
      setPaws((current) => [...current.slice(-8), { id, x: event.clientX, y: event.clientY }])
      window.setTimeout(() => setPaws((current) => current.filter((paw) => paw.id !== id)), 950)
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      {paws.map((paw) => (
        <motion.span
          key={paw.id}
          className="absolute text-lg text-[#D99548]/55"
          style={{ left: paw.x, top: paw.y }}
          initial={{ opacity: 0.8, scale: 0.65, y: 0 }}
          animate={{ opacity: 0, scale: 1.2, y: -22 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          🐾
        </motion.span>
      ))}
    </div>
  )
}
