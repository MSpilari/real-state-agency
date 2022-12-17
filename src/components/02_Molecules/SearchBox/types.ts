import { Dispatch, SetStateAction } from 'react'
import { FiltersProps } from '../../03_Organisms/Houses/Houses.types'

export type SearchBoxTypes = {
  setFilters: Dispatch<SetStateAction<FiltersProps>>
}
