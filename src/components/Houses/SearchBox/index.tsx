import { ChangeEvent } from 'react'
import { SearchBoxTypes } from './SearchBox.types'

const SearchBox = ({ setFilters }: SearchBoxTypes) => {
  const propertyFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target

    setFilters(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div className="w-full py-3 flex items-center justify-center gap-4">
      <select name="location" onChange={e => propertyFilter(e)}>
        <option value="">Localização</option>
        <option value="Pq. Das Nações">Pq. Das Nações</option>
        <option value="Vila Metalúrgica">Vila Metalúrgica</option>
        <option value="Camilópolis">Camilópolis</option>
      </select>

      <select name="type" onChange={e => propertyFilter(e)}>
        <option value="">Tipo</option>
        <option value="Casa">Casa</option>
        <option value="Sobrado">Sobrado</option>
        <option value="Apartamento">Apartamento</option>
      </select>
    </div>
  )
}

export { SearchBox }
