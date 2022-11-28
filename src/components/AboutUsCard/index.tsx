import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import meetingImg from '../../assets/meeting.jpg'
import { TopRightRoundedButton } from '../TopRightRoundedButton'

const AboutUsCard = () => {
  return (
    <section className="w-full relative flex flex-col lg:flex-row items-center gap-8 my-2">
      <Image
        className="w-[19rem] h-[13rem] md:w-[22rem] md:h-[16rem] lg:w-[38rem] lg:h-[25rem] rounded-tr-3xl shadow-black shadow-2xl"
        src={meetingImg}
        sizes="50vw"
        alt="Img Confiança"
      />

      <div className="flex flex-col items-center lg:items-start gap-5">
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-black" />

        <h1 className="text-2xl lg:text-4xl font-bold">Você em 1º lugar</h1>

        <h3 className="px-8 md:px-24 text-sm lg:pl-0 lg:pr-10 xl:pr-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          voluptates optio a culpa quas repudiandae nulla sed ullam similique,
          in molestias. Vel doloremque eos eligendi ab suscipit est, aut quis?
        </h3>

        <TopRightRoundedButton extraStyles="flex bg-black text-white w-48 font-bold justify-center h-10">
          Saiba mais <AiOutlineArrowRight className="text-yellow-500 " />
        </TopRightRoundedButton>
      </div>
    </section>
  )
}

export { AboutUsCard }
