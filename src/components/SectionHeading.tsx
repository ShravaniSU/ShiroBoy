type SectionHeadingProps = {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({ eyebrow, title, text, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.32em] ${light ? 'text-[#B9D2D2]' : 'text-[#055E68]'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl font-semibold leading-tight md:text-6xl ${light ? 'text-cream' : 'text-[#143E3B]'}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${light ? 'text-white/72' : 'text-[#4F5F59]'}`}>{text}</p>
      ) : null}
    </div>
  )
}
