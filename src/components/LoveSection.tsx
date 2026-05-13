import { motion } from 'framer-motion'
import { Heart, PawPrint } from 'lucide-react'
import { getImagesByCategory, getFirstMatchingImage } from '../utils/images'
import { AnimatedSection } from './AnimatedSection'
import { GlassCard } from './GlassCard'
import { SectionHeading } from './SectionHeading'

export function LoveSection() {
  const familyImages = getImagesByCategory('Family Moments')
  const collage = familyImages.length ? familyImages.slice(0, 5) : [getFirstMatchingImage('happy')]

  return (
    <AnimatedSection className="px-5 py-24 md:px-10">
      <SectionHeading
        eyebrow="Love never changes"
        title="He is family. That is the whole truth."
        text="The difficult times never changed our love for him. He still loves us endlessly. And we still love him with our whole hearts."
      />

       <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[1.5fr_0.5fr]">
        {/*<div className="grid grid-cols-6 gap-3 md:gap-4">
          {collage.map((image, index) => (
            <motion.div
              key={`${image.fileName}-${index}`}
              className={`overflow-hidden rounded-lg shadow-[0_18px_48px_rgba(20,62,59,0.14)] ${
                index === 0 ? 'col-span-6 md:col-span-4 md:row-span-2' : 'col-span-3 md:col-span-2'
              }`}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className={`${index === 0 ? 'aspect-[4/3] md:h-full' : 'aspect-square'} w-full object-cover`}
              />
            </motion.div>
          ))}
        </div> */}

        {/* <div className="grid content-start gap-3">
          <GlassCard className="p-5">
            <motion.div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#F3B35F]/22 text-[#D96F32]"
              animate={{ scale: [1, 1.09, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart fill="currentColor" size={20} />
            </motion.div>
            <p className="font-display text-2xl font-semibold leading-tight text-[#143E3B] md:text-3xl">“He made ordinary days feel like home.”</p>
          </GlassCard>
          <GlassCard className="p-5">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#055E68] text-cream">
              <PawPrint size={18} />
            </div>
            <p className="text-base leading-7 text-[#4F5F59]">
              Sofa chaos, quiet waiting, medicines, cuddles, and that face that makes every hard day softer.
            </p>
          </GlassCard>
        </div> */}
      </div>
    </AnimatedSection>
  )
}
