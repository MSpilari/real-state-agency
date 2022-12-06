import {
  FaBath,
  FaBed,
  FaCar,
  FaInstagram,
  FaMapPin,
  FaMoneyBillWave,
  FaShower,
  FaSquarespace,
  FaWhatsapp
} from 'react-icons/fa'
import { singlePropertyDetails } from '../../Houses/Houses.types'

type PropertyDetailsType = {
  details: singlePropertyDetails
  reference: string
}

const PropertyDetails = ({ details, reference }: PropertyDetailsType) => {
  const { bathrooms, bedrooms, cars, suite } = details

  const allDetails = [
    { icon: <FaMoneyBillWave />, text: 'Condomínio: ', value: 'R$ 0,00.' },
    { icon: <FaBed />, text: 'Dorms: ', value: bedrooms },
    { icon: <FaShower />, text: 'Suítes: ', value: suite },
    { icon: <FaBath />, text: 'Wcs: ', value: bathrooms },
    { icon: <FaCar />, text: 'Vagas: ', value: cars },
    { icon: <FaSquarespace />, text: 'Área: ', value: '500m²' },
    { icon: <FaMapPin />, text: 'Referência: ', value: reference },
    { icon: <FaWhatsapp />, text: '', value: '(011) 90101-0101' },
    { icon: <FaInstagram />, text: 'Veja no Instagram', value: '' }
  ]

  return (
    <div className="flex flex-col items-center gap-3 px-5 py-2 rounded-3xl shadow-2xl shadow-black text-xl w-[90%] h-fit mt-2 md:w-[17rem] lg:w-[19rem] xl:w-[26rem]">
      <ul className="flex gap-6 items-center w-full flex-wrap lg:flex-col lg:items-start lg:gap-4">
        {allDetails.map((detail, index) => {
          const { icon, text, value } = detail
          return (
            <li key={index} className="flex items-center gap-1">
              {icon} {text} {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { PropertyDetails }
