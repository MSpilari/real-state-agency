import Image from 'next/image'
import { RefObject, useRef, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

type PropertyPicsType = {
  images: string[]
}

const PropertyPics = ({ images }: PropertyPicsType) => {
  const [currentImage, setCurrentImage] = useState(images[0])
  const sliderDivRef = useRef<HTMLDivElement>(null)

  const scroll = (ref: RefObject<HTMLDivElement>, pos: number) => {
    if (ref.current) ref.current.scrollBy({ behavior: 'smooth', left: pos })
  }

  return (
    <section className="mt-24 lg:mt-40 w-full flex">
      <div className="flex flex-col items-center lg:items-start gap-3 px-5 md:px-14 lg:px-20 xl:px-24 py-2">
        <Image
          className="w-full h-60 rounded-tr-3xl md:w-96 lg:w-[35rem] lg:h-96 xl:w-[40rem]"
          width={10}
          height={10}
          sizes="50vw"
          src={currentImage}
          alt="Property Pic"
        />

        <div className="w-full flex flex-col items-center gap-3 md:w-96 lg:w-[35rem] xl:w-[40rem]">
          <div className="flex gap-3 self-end text-lg">
            <button onClick={() => scroll(sliderDivRef, -100)}>
              <FaArrowAltCircleLeft />
            </button>
            <button onClick={() => scroll(sliderDivRef, 100)}>
              <FaArrowAltCircleRight />
            </button>
          </div>

          <div ref={sliderDivRef} className="flex gap-4 overflow-hidden">
            {images.map(imageUrl => (
              <Image
                className={`w-20 h-12 lg:w-52 lg:h-28 rounded-tr-3xl cursor-pointer ${
                  currentImage === imageUrl && 'border-2 border-yellow-500'
                }`}
                sizes="25vw"
                width={5}
                height={5}
                key={imageUrl}
                src={imageUrl}
                alt="Prop Pic"
                onClick={() => setCurrentImage(imageUrl)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center gap-5 px-5 py-2 rounded-3xl shadow-2xl shadow-black text-xl w-48 h-fit mt-2 md:w-56 lg:w-60 xl:w-[26rem] ">
        <div className="flex gap-3 items-center">
          <Image
            className="w-10 h-10 rounded-full"
            src={images[0]}
            sizes="25vw"
            width={5}
            height={5}
            alt="Rose Gallego Pic"
          />
          <h1>Rose Gallego</h1>
        </div>

        <div className="flex flex-col gap-3">
          <span>Reference</span>
          <span>Phone</span>
          <span>Veja no nosso Instagram</span>
        </div>
      </div>
    </section>
  )
}

export { PropertyPics }
