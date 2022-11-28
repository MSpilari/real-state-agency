import { AiOutlineArrowRight } from 'react-icons/ai'
import { TopRightRoundedButton } from '../TopRightRoundedButton'

const WelcomeTxt = () => {
  return (
    <div className="h-[calc(100vh_-_12rem)] lg:h-[calc(100vh_-_14rem)] w-full flex flex-col justify-center gap-4 text-white px-4 md:px-32">
      <h1 className="text-4xl w-[14rem] font-bold lg:text-6xl lg:w-[25rem]">
        Os melhores imóveis para você.
      </h1>

      <h3 className="w-[14rem]">
        Imóveis para realizar seu sonho da sua família ou para investir com
        segurança e comodidade.
      </h3>

      <TopRightRoundedButton extraStyles="w-40 h-10 flex bg-yellow-500 font-bold text-black lg:hidden">
        Anuncie <AiOutlineArrowRight />
      </TopRightRoundedButton>
    </div>
  )
}

export { WelcomeTxt }
