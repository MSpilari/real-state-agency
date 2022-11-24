import { AiOutlineArrowRight } from 'react-icons/ai'

const WelcomeTxt = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-4 text-white px-4 md:px-32">
      <h1 className="text-4xl w-[14rem] font-bold lg:text-6xl lg:w-[25rem]">
        Os melhores imóveis para você.
      </h1>

      <h3 className="w-[14rem]">
        Imóveis para realizar seu sonho da sua família ou para investir com
        segurança e comodidade.
      </h3>

      <button className="w-40 h-10 flex items-center gap-1 bg-yellow-500 text-black font-bold rounded-tr-2xl px-10 py-1 lg:hidden">
        Anuncie <AiOutlineArrowRight />
      </button>
    </div>
  )
}

export { WelcomeTxt }
