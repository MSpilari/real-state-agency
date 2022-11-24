import Image from 'next/image'
import {
  AiOutlineArrowRight,
  AiFillInstagram,
  AiOutlineWhatsApp
} from 'react-icons/ai'
import logoDesktop from '../../assets/logoDesktop.png'

const Navbar = () => {
  return (
    <nav className="mt-2 w-full flex items-center justify-around z-10 lg:mt-8 lg:text-lg text-white font-bold">
      <Image
        className="w-40 h-40 lg:w-[15.5rem]"
        src={logoDesktop}
        sizes="25vw"
        alt="Rose Gallego Logo"
      />

      <ul className="flex items-center gap-3">
        <li>Início</li>

        <li>
          <AiFillInstagram className="text-xl lg:text-2xl text-yellow-500" />
        </li>

        <li className="flex items-center gap-1 ">
          <AiOutlineWhatsApp className="text-xl text-green-500 lg:text-2xl" />
          <span className="hidden lg:flex">(011) 90001-0101</span>
        </li>

        <li>
          <button className="hidden lg:flex items-center gap-1 bg-yellow-500 text-black rounded-tr-2xl px-10 py-1">
            Anuncie <AiOutlineArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
