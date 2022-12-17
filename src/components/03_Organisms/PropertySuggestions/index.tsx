import Link from 'next/link'
import { useRef } from 'react'
import { HouseCard } from '../../02_Molecules/HouseCard'
import { SliderArrows } from '../../02_Molecules/SliderArrows'
import { TitleH1 } from '../../01_Atoms/H1WithBar'
import { PropertySuggestionsTypes } from './types'

const PropertySuggestions = ({ suggestions }: PropertySuggestionsTypes) => {
  const suggestUlRef = useRef<HTMLUListElement>(null)

  return (
    <section className="w-screen h-[20rem] lg:h-[24rem] xl:h-[28rem] flex flex-col mb-8 px-5 py-2 md:px-14 lg:px-20 xl:px-28">
      <TitleH1 title="Imóveis Semelhantes" />

      <div className="w-full flex flex-col gap-2">
        <SliderArrows sliderElement={suggestUlRef} />

        <ul
          ref={suggestUlRef}
          className="w-full h-72 lg:h-96 flex gap-5 px-4 overflow-x-hidden"
        >
          {suggestions.length === 0 ? (
            <li className="self-center">
              Desculpe! Este é o único imóvel deste tipo cadastrado.
            </li>
          ) : (
            suggestions.map(property => {
              const { id, title, images, details } = property

              return (
                <li key={id}>
                  <Link href={`imoveis/${id}`}>
                    <HouseCard
                      title={title}
                      details={details}
                      image={images[0]}
                    />
                  </Link>
                </li>
              )
            })
          )}
        </ul>
      </div>
    </section>
  )
}

export { PropertySuggestions }
