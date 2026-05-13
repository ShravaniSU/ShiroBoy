import { motion } from 'framer-motion'
import { timelineStories } from '../data/story'
import { getFirstMatchingImage } from '../utils/images'
import { AnimatedSection } from './AnimatedSection'
import { GlassCard } from './GlassCard'
import { SectionHeading } from './SectionHeading'

export function Timeline() {
  return (
    <AnimatedSection id="timeline" className="relative px-5 py-24 md:px-10">
      <SectionHeading
        eyebrow="A life in chapters"
        title="The little moments became our whole world."
        text="A warm diary of hiding under sofas, office visits, Delhi days, favorite humans, and the very serious business of following Shravani everywhere."
      />

      <div className="relative mx-auto mt-16 max-w-6xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#58A399] to-transparent md:left-1/2 md:block" />
        <div className="space-y-14">
          {timelineStories.map((story, index) => {
            const Icon = story.icon
            const image = getFirstMatchingImage(...story.imageNeedles)
            const isRight = index % 2 === 1
            const imageAspect = 'imageAspect' in story ? story.imageAspect : 'aspect-[4/3]'
            const imagePosition = 'imagePosition' in story ? story.imagePosition : 'object-center'

            return (
              <motion.article
                key={story.title}
                className={`relative grid items-center gap-6 md:gap-10 ${
                  isRight ? 'md:grid-cols-[1.18fr_0.82fr]' : 'md:grid-cols-[0.82fr_1.18fr]'
                }`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.65, delay: 0.05 }}
              >
                <GlassCard className={`relative z-10 p-3 md:p-4 ${isRight ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className={`${imageAspect} max-h-[640px] w-full object-cover ${imagePosition} transition duration-700 hover:scale-105`}
                    />
                  </div>
                  {story.playful ? (
                    <p className="mt-3 rounded-md bg-[#F5D69F]/55 px-3 py-2 text-sm font-semibold text-[#8A4B10]">Official evidence from the sofa investigation.</p>
                  ) : null}
                </GlassCard>

                <div className={`${isRight ? 'md:order-2' : 'md:order-1'}`}>
                  <GlassCard className="p-5 md:p-6">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#055E68] text-cream shadow-lg">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#143E3B] md:text-3xl">{story.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#55655F]">{story.text}</p>
                  </GlassCard>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
