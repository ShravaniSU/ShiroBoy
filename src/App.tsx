import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { LoveSection } from './components/LoveSection'
import { MusicToggle } from './components/MusicToggle'
import { PawCursor } from './components/PawCursor'
import { Stats } from './components/Stats'
import { Timeline } from './components/Timeline'
import { ToughTimes } from './components/ToughTimes'
import { getFirstMatchingImage, shiroImages } from './utils/images'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const heroImage = getFirstMatchingImage('happy', 'red', 'shirt', 'bed')

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-cream text-[#263A37]">
      <LoadingScreen isVisible={isLoading} />
      <PawCursor />
      <MusicToggle />
      <Hero heroImage={heroImage ?? shiroImages[0]} />
      <Timeline />
      <Gallery />
      <ToughTimes />
      <LoveSection />
      <Stats />
      <Footer />
    </main>
  )
}

export default App
