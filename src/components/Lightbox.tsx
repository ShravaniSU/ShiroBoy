import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { ShiroImage } from '../types/gallery'

type LightboxProps = {
  image: ShiroImage | null
  onClose: () => void
}

export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[#062D31]/88 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-cream p-3 shadow-2xl"
            initial={{ scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={onClose}
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/88 text-[#055E68] shadow-lg transition hover:scale-105"
            >
              <X size={20} />
            </button>
            <img src={image.src} alt={image.title} className="max-h-[78vh] w-full rounded-md object-contain" />
            <div className="px-2 pb-1 pt-4">
              <p className="font-display text-2xl font-semibold text-[#143E3B]">{image.title}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-[#58A399]">{image.category}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
