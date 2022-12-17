import { allDetails } from './allDetails'
import { PropertyDetailsType } from './types'

const PropertyDetails = ({ details, reference }: PropertyDetailsType) => {
  const { bathrooms, bedrooms, cars, suite } = details

  return (
    <div className="flex flex-col items-center gap-3 px-5 py-2 rounded-3xl shadow-2xl shadow-black text-xl w-[90%] h-fit mt-2 md:w-[17rem] lg:w-[19rem] xl:w-[26rem]">
      <ul className="flex gap-6 items-center w-full flex-wrap lg:flex-col lg:items-start lg:gap-4">
        {allDetails(bedrooms, suite, bathrooms, cars, reference).map(
          (detail, index) => {
            const { icon, text, value } = detail
            return (
              <li key={index} className="flex items-center gap-1">
                {icon} {text} {value}
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

export { PropertyDetails }
