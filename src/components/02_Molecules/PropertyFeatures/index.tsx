import { FaCheckCircle } from 'react-icons/fa'
import { TitleH1 } from '../../01_Atoms/H1WithBar'
import { PropertyFeaturesTypes } from './types'

const PropertyFeatures = ({ features }: PropertyFeaturesTypes) => {
  return (
    <section className="w-full flex flex-col py-4 px-5 gap-3 md:px-14 lg:px-20 xl:px-28">
      <TitleH1 title="Opcionais" />

      <ul className="w-full flex flex-wrap gap-3 lg:text-xl md:gap-5 lg:gap-6">
        {features.map((feature, index) => {
          return (
            <li key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-600" /> {feature}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export { PropertyFeatures }
