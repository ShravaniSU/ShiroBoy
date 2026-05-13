import type { ReactNode } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`rounded-lg border border-white/45 bg-white/48 shadow-[0_24px_80px_rgba(5,94,104,0.12)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  )
}
