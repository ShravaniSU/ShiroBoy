import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { getImagesByCategory } from '../utils/images'
import { AnimatedSection } from './AnimatedSection'
import { GlassCard } from './GlassCard'
import { SectionHeading } from './SectionHeading'

const captions = [
  'Interior designer, but make it emotional damage.',
  'The sofa had one job. Shiro had other plans.',
  'Evidence bag: fur, foam, and zero regrets.',
]

export function NaughtyShiro() {
  const naughtyImages = useMemo(() => getImagesByCategory('Naughty Shiro'), [])
  const [active, setActive] = useState(0)
  const image = naughtyImages[active % Math.max(naughtyImages.length, 1)]

  const move = (direction: number) => {
    setActive((current) => (current + direction + naughtyImages.length) % naughtyImages.length)
  }

  if (!image) {
    return null
  }

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#F8F1E5] px-5 py-24 md:px-10">
      <div className="paw-pattern absolute inset-0 opacity-25" />
      <SectionHeading
        eyebrow="Naughty Shiro"
        title="A little comic relief, mostly paid for by the sofa."
        text="Playful, dramatic, completely unserious, and somehow still impossible to scold for more than seven seconds."
      />

      <div className="relative mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="overflow-hidden p-3">
          <motion.img
            key={image.fileName}
            src={image.src}
            alt={image.title}
            loading="lazy"
            className="aspect-[16/11] w-full rounded-md object-cover"
            initial={{ opacity: 0.2, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <div className="flex items-center justify-between gap-3 p-4">
            <button type="button" aria-label="Previous naughty image" onClick={() => move(-1)} className="icon-button">
              <ChevronLeft size={20} />
            </button>
            <p className="text-center font-display text-2xl font-semibold text-[#143E3B]">{image.title}</p>
            <button type="button" aria-label="Next naughty image" onClick={() => move(1)} className="icon-button">
              <ChevronRight size={20} />
            </button>
          </div>
        </GlassCard>

        <div className="grid gap-4">
          {captions.map((caption, index) => (
            <motion.div
              key={caption}
              className="rounded-lg border-2 border-[#055E68]/15 bg-white/70 p-6 shadow-[0_18px_50px_rgba(138,75,16,0.08)]"
              whileHover={{ rotate: index % 2 ? 1.4 : -1.4, y: -4 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#D99548]">case note {index + 1}</p>
              <p className="mt-3 font-display text-2xl font-semibold text-[#143E3B]">{caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
