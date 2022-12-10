import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { scrollingDiv } from '../../utils/scrollingDiv'
import type { sliderArrowsTypes } from './SliderArrows.types'

const SliderArrows = ({ sliderElement }: sliderArrowsTypes) => {
  return (
    <div className="flex gap-3 self-end text-lg">
      <button onClick={() => scrollingDiv(sliderElement, -100)}>
        <FaArrowAltCircleLeft />
      </button>
      <button onClick={() => scrollingDiv(sliderElement, 100)}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  )
}

export { SliderArrows }
