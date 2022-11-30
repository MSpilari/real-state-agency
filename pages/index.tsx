import { AboutUsCard } from '../src/components/AboutUsCard'
import { Footer } from '../src/components/Footer'
import { Houses } from '../src/components/Houses'
import { Navbar } from '../src/components/Navbar'
import { WelcomeImg } from '../src/components/WelcomeImg'
import { WelcomeTxt } from '../src/components/WelcomeTxt'

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
