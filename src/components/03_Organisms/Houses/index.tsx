import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TitleH1 } from '../../01_Atoms/H1WithBar'
import { HouseCard } from '../../02_Molecules/HouseCard'
import { FiltersProps, Properties } from './types'
import { SearchBox } from '../../02_Molecules/SearchBox'
import { getFetchData } from '../../../services/getFetchData'

const Houses = () => {
  const [allProperties, setAllProperties] = useState([] as Properties)
  const [filters, setFilters] = useState({} as FiltersProps)

  const filteredProperties = allProperties.filter(property => {
    const { location, type } = filters

    if (!location && !type) return allProperties

    if (location && type)
      return property.district === location && property.type === type

    if (location && !type) return property.district === location

    if (!location && type) return property.type === type
  })

  useEffect(() => {
    getFetchData(
      `${process.env.CURRENT_URL}/api/allproperties`,
      setAllProperties
    )
  }, [])

  return (
    <section className="w-full flex flex-col items-center my-10 gap-5">
      <TitleH1 title="Encontre seu próximo local para viver." />

      {/* Searching Bar */}
      <SearchBox setFilters={setFilters} />

      {/* Houses List */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center">
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
