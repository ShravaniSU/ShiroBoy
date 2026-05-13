import { motion } from 'framer-motion'
import type { ShiroImage } from '../types/gallery'
import { getImageDisplay } from '../utils/images'

type ImageCardProps = {
  image: ShiroImage
  index?: number
  onClick?: (image: ShiroImage) => void
  label?: boolean
  className?: string
}

export function ImageCard({ image, index = 0, onClick, label = true, className = '' }: ImageCardProps) {
  const display = getImageDisplay(image.fileName)

  return (
    <motion.button
      type="button"
      onClick={() => onClick?.(image)}
      className={`group block w-full overflow-hidden rounded-lg bg-white p-1.5 text-left shadow-[0_16px_42px_rgba(20,62,59,0.1)] ring-1 ring-black/5 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.28) }}
      whileHover={{ y: -6 }}
    >
      <div className={`${display.aspectClass} overflow-hidden rounded-md bg-[#B9D2D2]/30`}>
        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
          className={`h-full w-full ${display.imageFitClass} ${display.objectPosition} transition duration-700 ease-out group-hover:scale-[1.08]`}
        />
      </div>
      {label ? (
        <div className="px-2 py-2.5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#58A399]">{image.tone}</p>
        </div>
      ) : null}
    </motion.button>
  )
}
