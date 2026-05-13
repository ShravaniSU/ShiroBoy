import { useMemo, useState } from 'react'
import type { GalleryCategory, ShiroImage } from '../types/gallery'
import { getImageDisplay, getImagesByCategory, shiroImages } from '../utils/images'
import { AnimatedSection } from './AnimatedSection'
import { ImageCard } from './ImageCard'
import { Lightbox } from './Lightbox'
import { SectionHeading } from './SectionHeading'

const categories: GalleryCategory[] = [
  'Puppy Days',
  'Naughty Shiro',
  'Office Days',
  'Sleeping Positions',
  'Family Moments',
  'Outdoor Adventures',
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Puppy Days')
  const [preview, setPreview] = useState<ShiroImage | null>(null)

  const visibleImages = useMemo(() => {
    const images = getImagesByCategory(activeCategory)
    return images.length ? images : shiroImages
  }, [activeCategory])

  return (
    <AnimatedSection id="gallery" className="px-5 py-24 md:px-10">
      <SectionHeading
        eyebrow="Memories gallery"
        title="Every photo has a heartbeat."
        text="A living gallery that automatically pulls from the root Images folder and arranges Shiro's moments into soft, cinematic groups."
      />

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-[#055E68] text-cream shadow-lg'
                : 'bg-white/60 text-[#055E68] hover:bg-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {visibleImages.map((image, index) => (
          <div key={image.fileName} className={getImageDisplay(image.fileName).gridClass}>
            <ImageCard image={image} index={index} onClick={setPreview} />
          </div>
        ))}
      </div>

      <Lightbox image={preview} onClose={() => setPreview(null)} />
    </AnimatedSection>
  )
}
