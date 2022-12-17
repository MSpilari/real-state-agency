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

const allDetails = (
  bedrooms: number,
  suite: number,
  bathrooms: number,
  cars: number,
  reference: string
) => [
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

export { allDetails }
