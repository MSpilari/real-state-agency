import { useState, useEffect, ChangeEvent } from 'react'
import Link from 'next/link'
import { HouseCard } from './HouseCard'
import apiCall from '../../utils/AllProperties.json'
import { Properties, FiltersProps } from './Houses.types'

const Houses = () => {
  const [allProperties, setAllProperties] = useState([] as Properties)
  const [filters, setFilters] = useState({} as FiltersProps)

  const propertyFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target

    setFilters(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const filteredProperties = allProperties.filter(property => {
    const { location, type } = filters

    if (!location && !type) return allProperties

    if (location && type)
      return property.district === location && property.type === type

    if (location && !type) return property.district === location

    if (!location && type) return property.type === type
  })

  useEffect(() => {
    setAllProperties(apiCall)
  }, [])

  return (
    <section className="w-full flex flex-col items-center my-10 gap-5">
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-black" />

      <h1 className="text-2xl lg:text-4xl font-bold text-center">
        Encontre seu próximo local para viver.
      </h1>

      {/* Searching Bar */}
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

      {/* Houses List */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center">
        {/* House Card */}

        {filteredProperties.map(property => {
          const { id, images, details, title } = property

          return (
            <Link key={id} href={`/imoveis/${id}`}>
              <HouseCard image={images[0]} details={details} title={title} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export { Houses }
