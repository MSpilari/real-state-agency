import { useState, useEffect } from 'react'
import { HouseCard } from './HouseCard'
import apiCall from '../../utils/AllProperties.json'
import { Properties } from './Houses.types'

const Houses = () => {
  const [allProperties, setAllProperties] = useState([] as Properties)

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
        <select name="location">
          <option value="">Localização</option>
          <option value="Pq. Das Nações">Pq. Das Nações</option>
          <option value="Vila Metalúrgica">Vila Metalúrgica</option>
          <option value="Camilópolis">Camilópolis</option>
        </select>

        <select name="type">
          <option value="">Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Sobrado">Sobrado</option>
          <option value="Apartamento">Apartamento</option>
        </select>
      </div>

      {/* Houses List */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center">
        {/* House Card */}
        {allProperties.map(property => {
          const { id, images, details, title } = property

          return (
            <HouseCard
              key={id}
              image={images[0]}
              details={details}
              title={title}
            />
          )
        })}
      </div>
    </section>
  )
}

export { Houses }
