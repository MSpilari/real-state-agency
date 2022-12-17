import Image from 'next/image'
import { useRef, useState } from 'react'
import { SliderArrows } from '../../02_Molecules/SliderArrows'
import { PropertyDetails } from '../../02_Molecules/PropertyDetails'
import { PropertyPicsType } from './types'

const PropertyPics = ({ images, details, reference }: PropertyPicsType) => {
  const [currentImage, setCurrentImage] = useState(images[0])
  const sliderDivRef = useRef<HTMLDivElement>(null)

  return (
    <section className="mt-24 lg:mt-40 mb-2 w-full flex flex-col items-center md:flex-row md:items-start">
      <div className="flex flex-col items-center lg:items-start gap-3 px-5 md:pl-14 lg:pl-20 xl:pl-28 xl:pr-20 py-2">
        <Image
          className="w-full h-60 rounded-tr-3xl md:w-96 lg:w-[35rem] lg:h-96 xl:w-[40rem]"
          width={10}
          height={10}
          sizes="50vw"
          src={currentImage}
          alt="Property Pic"
        />

        <div className="w-full flex flex-col items-center gap-3 md:w-96 lg:w-[35rem] xl:w-[40rem]">
          <SliderArrows sliderElement={sliderDivRef} />

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

      <PropertyDetails details={details} reference={reference} />
    </section>
  )
}

export { PropertyPics }
