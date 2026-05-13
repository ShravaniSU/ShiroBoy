import { motion } from 'framer-motion'
import { Music, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)

  useEffect(() => {
    return () => {
      oscillatorRef.current?.stop()
      audioRef.current?.close()
    }
  }, [])

  const toggle = async () => {
    if (isPlaying) {
      gainRef.current?.gain.setTargetAtTime(0, audioRef.current?.currentTime ?? 0, 0.08)
      window.setTimeout(() => oscillatorRef.current?.stop(), 180)
      oscillatorRef.current = null
      setIsPlaying(false)
      return
    }

    const context = new AudioContext()
    const oscillator = context.createOscillator()
    const gain = context.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.value = 196
    gain.gain.value = 0.0001
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start()
    gain.gain.setTargetAtTime(0.018, context.currentTime, 0.25)

    audioRef.current = context
    oscillatorRef.current = oscillator
    gainRef.current = gain
    setIsPlaying(true)
  }

  const Icon = isPlaying ? Music : VolumeX

  return (
    <motion.button
      type="button"
      aria-label={isPlaying ? 'Turn ambient sound off' : 'Turn ambient sound on'}
      onClick={toggle}
      className="fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-white/55 bg-white/60 text-[#055E68] shadow-xl backdrop-blur-xl"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <Icon size={20} />
    </motion.button>
  )
}
