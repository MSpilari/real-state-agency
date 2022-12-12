import { Dispatch, SetStateAction } from 'react'
import { FiltersProps } from '../Houses.types'

export type SearchBoxTypes = {
  setFilters: Dispatch<SetStateAction<FiltersProps>>
}
