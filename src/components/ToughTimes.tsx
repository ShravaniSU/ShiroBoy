import { motion } from 'framer-motion'
import { toughTimes } from '../data/story'
import { getFirstMatchingImage } from '../utils/images'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

export function ToughTimes() {
  const image = getFirstMatchingImage('happy', 'bed', 'red')

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#062D31] px-5 py-24 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(88,163,153,0.22),transparent_34%),linear-gradient(135deg,rgba(5,94,104,0.9),rgba(6,45,49,1)_48%,rgba(16,27,29,1))]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The tough times"
          title="Some chapters asked us to love with steadier hands."
          text="The difficult phase changed the rhythm of our days, but it never changed who Shiro is: brave, adored, watched over, and deeply loved."
          light
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative">
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-[0_35px_100px_rgba(0,0,0,0.35)]"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/15 bg-white/12 p-5 backdrop-blur-xl">
              <p className="font-display text-3xl font-semibold text-cream">Hope stayed in the room.</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Vet visits, medicines, observation, and a family that kept choosing him every day.</p>
            </div>
          </div>

          <div className="grid content-center gap-4">
            {toughTimes.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  className="rounded-lg border border-white/12 bg-white/[0.07] p-5 backdrop-blur-xl"
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#B9D2D2]/20 text-[#B9D2D2]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-cream">{item.title}</h3>
                      <p className="mt-2 leading-7 text-white/70">{item.text}</p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
