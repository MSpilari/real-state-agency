import Image from 'next/image'
import { FaBath, FaBed, FaCar, FaMoneyBill } from 'react-icons/fa'
import { currencyFormatter } from '../../../utils/currencyFormatter'
import { HouseCardProps } from './types'

const HouseCard = ({ image, title, details }: HouseCardProps) => {
  const { price, bathrooms, bedrooms, cars } = details

  return (
    <div className="flex flex-col w-36 rounded-2xl bg-white gap-2 overflow-hidden shadow-2xl shadow-black text-sm lg:text-lg 2xsm:w-40 xsm:w-44 md:w-48 lg:w-72 xl:w-96">
      <Image
        className="overflow-hidden w-full h-32 2xsm:h-36 xsm:h-40 lg:h-48 xl:h-56"
        src={image}
        alt="House Image"
        sizes="25vw"
        width={100}
        height={100}
      />

      <h1 className="w-full  font-bold px-3 truncate">{title}</h1>

      <h3 className="flex items-center w-full gap-1 px-3 truncate font-semibold">
        <FaMoneyBill className="text-green-500" />
        {currencyFormatter(price)}
      </h3>

      <ul className="flex items-center justify-evenly w-full gap-5 mb-1">
        <li className="flex items-center gap-1">
          <FaBed />
          {bedrooms}
        </li>

        <li className="flex items-center gap-1">
          <FaBath />
          {bathrooms}
        </li>

        <li className="flex items-center gap-1">
          <FaCar />
          {cars}
        </li>
      </ul>
    </div>
  )
}

export { HouseCard }
