import { motion } from 'framer-motion'
import { stats } from '../data/story'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

export function Stats() {
  return (
    <AnimatedSection className="bg-[#E9F1EE] px-5 py-24 md:px-10">
      <SectionHeading
        eyebrow="Shiro stats"
        title="The official golden profile."
        text="Precise, scientific, emotionally biased, and approved by the department of endless tail wags."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value], index) => (
          <motion.article
            key={label}
            className={`rounded-lg border border-white/70 bg-white/62 p-6 shadow-[0_18px_50px_rgba(5,94,104,0.1)] backdrop-blur-xl ${index === 6 ? 'lg:col-span-2' : ''}`}
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#58A399]">{label}</p>
            <p className="mt-4 font-display text-3xl font-semibold leading-tight text-[#143E3B]">{value}</p>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
