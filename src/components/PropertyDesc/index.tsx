import { TitleH1 } from '../TitleH1'
import { PropertyDescTypes } from './PropertyDesc.types'

const PropertyDesc = ({ desc }: PropertyDescTypes) => {
  return (
    <section className="w-full flex flex-col py-4 px-5 gap-3 md:px-14 lg:px-20 xl:px-28">
      <TitleH1 title="Descrição" />

      <h3 className="lg:text-lg">{desc}</h3>
    </section>
  )
}

export { PropertyDesc }
