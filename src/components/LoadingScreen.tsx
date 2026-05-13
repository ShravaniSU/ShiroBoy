import { AnimatePresence, motion } from 'framer-motion'

type LoadingScreenProps = {
  isVisible: boolean
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#F8F1E5]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#055E68] text-3xl text-cream shadow-[0_22px_60px_rgba(5,94,104,0.28)]"
              animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              🐾
            </motion.div>
            <p className="mt-6 font-display text-3xl font-semibold text-[#143E3B]">Opening Shiro's scrapbook</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
