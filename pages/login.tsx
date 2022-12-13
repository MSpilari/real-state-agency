import { Footer } from '../src/components/Footer'
import { LoginForm } from '../src/components/LoginForm'
import { Navbar } from '../src/components/Navbar'

export default function Login() {
  return (
    <main className="overflow-x-hidden relative flex flex-col bg-black">
      <Navbar />

      <LoginForm />

      <Footer />
    </main>
  )
}
