import Image from 'next/image'
import {
  AiFillInstagram,
  AiOutlineArrowRight,
  AiOutlineWhatsApp
} from 'react-icons/ai'
import { TopRightRoundedButton } from '../../01_Atoms/TopRightRoundedButton'
import logo from '../../assets/logoDesktop.png'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-5 w-full bg-gradient-to-tr from-black via-black to-[rgba(87,72,4,1)] text-white">
      <div className="flex items-center justify-between w-full px-3 pt-5 2xsm:px-6 xsm:px-12 sm:px-24 lg:px-28 lg:py-10">
        <h1 className="lg:text-xl font-extrabold">
          Transforme seus sonhos em{' '}
          <span className="text-yellow-500">realidade</span>.{' '}
        </h1>

        <TopRightRoundedButton extraStyles="flex items-center bg-yellow-500 text-black font-bold">
          Anuncie <AiOutlineArrowRight className="text-white" />
        </TopRightRoundedButton>
      </div>

      <div className="bg-white w-[85%] m-auto h-1" />

      <div className="flex w-full items-center justify-evenly gap-2">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={logo}
            alt="Rose Gallego Logo"
            className="w-36 h-28 lg:w-60 lg:h-36"
            sizes="25vw"
          />
          <div className="flex gap-4 text-xl lg:text-2xl">
            <AiFillInstagram />
            <AiOutlineWhatsApp />
          </div>
        </div>

        <ul>
          <li>Sobre Nós</li>
          <li>Oportunidades</li>
          <li className="flex items-center gap-1">
            <AiOutlineWhatsApp />
            (011) 90101-0101
          </li>
        </ul>
      </div>

      <h3>Desenvolvido por MSpilari</h3>
    </footer>
  )
}

export { Footer }
