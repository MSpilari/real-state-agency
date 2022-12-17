import { AboutUsCard } from '../src/components/03_Organisms/AboutUsCard'
import { Footer } from '../src/components/03_Organisms/Footer'
import { Houses } from '../src/components/03_Organisms/Houses'
import { Navbar } from '../src/components/03_Organisms/Navbar'
import { WelcomeImg } from '../src/components/02_Molecules/WelcomeImg'
import { WelcomeTxt } from '../src/components/02_Molecules/WelcomeTxt'

export default function Home() {
  return (
    <main className="overflow-x-hidden relative flex flex-col">
      <WelcomeImg />

      <Navbar />

      <WelcomeTxt />

      <AboutUsCard />

      <Houses />

      <Footer />
    </main>
  )
}
