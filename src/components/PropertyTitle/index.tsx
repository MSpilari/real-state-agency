import { currencyFormatter } from '../../utils/currencyFormatter'
import { PropertyTypes } from './propertyTitle.types'

const PropertyTitle = ({ title, price, address }: PropertyTypes) => {
  return (
    <div className="absolute top-0 flex flex-col items-center justify-end gap-6 w-full h-72 lg:h-96 bg-gradient-to-tr text-white from-black via-black to-[rgba(87,72,4,1)] -z-10">
      <div className="w-[85%] flex justify-between text-lg font-bold lg:text-2xl">
        <h1>{title}</h1>
        <h2>{currencyFormatter(price)}</h2>
      </div>
      <h4 className="w-[85%] text-sm text-slate-300 lg:text-lg">{address} </h4>
    </div>
  )
}

export { PropertyTitle }
