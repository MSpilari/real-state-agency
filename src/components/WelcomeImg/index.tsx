import Image from 'next/image'
import welcomeImg from '../../assets/welcome.png'

const WelcomeImg = () => {
  return (
    <div className="absolute w-full h-full top-0">
      <div className="w-full h-screen relative overflow-hidden">
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] absolute -z-10" />
        <Image
          src={welcomeImg}
          className="w-full h-full absolute -z-20 top-0 object-cover 2xl:object-fill"
          sizes="50vw"
          alt="welcome Image"
        />
      </div>
    </div>
  )
}

export { WelcomeImg }
