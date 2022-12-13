import Image from 'next/image'
import Link from 'next/link'
import {
  AiOutlineArrowRight,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillLock
} from 'react-icons/ai'
import logoDesktop from '../../assets/logoDesktop.png'
import { TopRightRoundedButton } from '../TopRightRoundedButton'

const Navbar = () => {
  return (
    <header className="h-[12rem] w-full flex items-center justify-around z-10 lg:mt-8 lg:text-lg text-white font-bold">
      <Image
        className="w-40 h-28 lg:w-[16rem] lg:h-[11rem]"
        src={logoDesktop}
        sizes="25vw"
        alt="Rose Gallego Logo"
      />

      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link href={'/'}>Início</Link>
          </li>

          <li>
            <Link href={'/login'}>
              <AiFillLock />
            </Link>
          </li>

          <li>
            <a
              aria-label="Instagram Link"
              title="Visite nosso Instagram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com"
            >
              <AiFillInstagram className="text-xl lg:text-2xl text-yellow-500" />
            </a>
          </li>

          <li>
            <a
              className="flex items-center gap-1"
              href="https://wa.me/5511900010101"
              aria-label="WhatsApp Link"
              title="Contate-nos por WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp className="text-xl text-green-500 lg:text-2xl" />
              <span className="hidden lg:flex">(011) 90001-0101</span>
            </a>
          </li>

          <li>
            <TopRightRoundedButton extraStyles="hidden lg:flex bg-yellow-500 text-black">
              Anuncie <AiOutlineArrowRight />
            </TopRightRoundedButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }
