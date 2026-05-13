import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { ShiroImage } from '../types/gallery'

type HeroProps = {
  heroImage: ShiroImage
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-5 py-10 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(88,163,153,0.24),transparent_32%),radial-gradient(circle_at_84%_28%,rgba(217,149,72,0.24),transparent_30%),linear-gradient(135deg,#F8F1E5_0%,#B9D2D2_58%,#969989_100%)]" />
      <div className="paw-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="z-10"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/55 bg-white/38 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#055E68] backdrop-blur-xl">
            Shiro's story
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.96] text-[#073F45] md:text-7xl lg:text-8xl">
            Shiro — The Golden Heart of Our Lives
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#31514B] md:text-2xl">
            A story of love, chaos, strength, and endless tail wags.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {['Born 05 Apr 2022', 'Golden Retriever', 'Full-time shadow'].map((item) => (
              <span key={item} className="rounded-full bg-white/45 px-4 py-2 text-sm font-semibold text-[#055E68] shadow-sm backdrop-blur-md">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-4 rounded-lg bg-white/24 shadow-[0_40px_110px_rgba(5,94,104,0.28)] backdrop-blur-xl" />
          <img
            src={heroImage.src}
            alt="Shiro the Golden Retriever"
            className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-[0_28px_90px_rgba(20,62,59,0.24)]"
          />
          <motion.div
            className="absolute -bottom-5 left-6 right-6 rounded-lg border border-white/50 bg-white/58 p-4 text-[#143E3B] shadow-xl backdrop-blur-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-display text-2xl font-semibold">chaos, cuddles, courage</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#timeline"
        aria-label="Scroll to Shiro's story"
        className="absolute bottom-7 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/60 bg-white/35 text-[#055E68] backdrop-blur-lg"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown />
      </motion.a>
    </section>
  )
}
