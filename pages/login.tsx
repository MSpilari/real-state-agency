import { Footer } from '../src/components/03_Organisms/Footer'
import { LoginForm } from '../src/components/03_Organisms/LoginForm'
import { Navbar } from '../src/components/03_Organisms/Navbar'

export default function Login() {
  return (
    <main className="overflow-x-hidden relative flex flex-col bg-black">
      <Navbar />

      <LoginForm />

      <Footer />
    </main>
  )
}
