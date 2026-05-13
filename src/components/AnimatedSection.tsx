import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type AnimatedSectionProps = HTMLMotionProps<'section'> & {
  children: ReactNode
}

export function AnimatedSection({ children, className = '', ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.04 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
