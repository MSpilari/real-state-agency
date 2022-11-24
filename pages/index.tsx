import { Navbar } from '../src/components/Navbar'
import { WelcomeImg } from '../src/components/WelcomeImg'
import { WelcomeTxt } from '../src/components/WelcomeTxt'

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-x-hidden relative flex flex-col">
      <WelcomeImg />

      <Navbar />

      <WelcomeTxt />
    </main>
  )
}
