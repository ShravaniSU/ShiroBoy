import { Camera, Heart, Mail, Music, PawPrint } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#052F35] px-5 py-12 text-center text-cream md:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="font-display text-4xl font-semibold">Made with love for Shiro 🐾</p>
        <div className="mt-7 flex justify-center gap-3">
          {[Heart, PawPrint, Camera, Mail, Music].map((Icon, index) => (
            <span key={index} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-[#B9D2D2]">
              <Icon size={18} />
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
