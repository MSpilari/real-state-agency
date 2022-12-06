import { RefObject } from 'react'

const scrollingDiv = (ref: RefObject<HTMLDivElement>, pos: number) => {
  if (ref.current) ref.current.scrollBy({ behavior: 'smooth', left: pos })
}

export { scrollingDiv }
