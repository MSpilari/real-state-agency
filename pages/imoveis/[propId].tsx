import { GetServerSideProps } from 'next'
import { PropertyDesc } from '../../src/components/02_Molecules/PropertyDesc'
import { PropertyFeatures } from '../../src/components/02_Molecules/PropertyFeatures'
import { PropertyTitle } from '../../src/components/02_Molecules/PropertyTitle'
import { Footer } from '../../src/components/03_Organisms/Footer'
import { singlePropertyAPICall } from '../../src/components/03_Organisms/Houses/types'
import { Navbar } from '../../src/components/03_Organisms/Navbar'
import { PropertyPics } from '../../src/components/03_Organisms/PropertyPics'
import { PropertySuggestions } from '../../src/components/03_Organisms/PropertySuggestions'
import { CtxParams } from '../../src/interfaces/api/propId'
import { getFetchData } from '../../src/services/getFetchData'

const PropertyPage = ({
  singleProperty,
  commonProperties
}: singlePropertyAPICall) => {
  return (
    <main className="h-full overflow-x-hidden flex flex-col">
      <PropertyTitle
        title={singleProperty.title}
        price={singleProperty.details.price}
        address={singleProperty.address}
      />

      <Navbar />

      <PropertyPics
        images={singleProperty.images}
        details={singleProperty.details}
        reference={singleProperty.reference}
      />

      <PropertyDesc desc={singleProperty.description} />

      <PropertyFeatures features={singleProperty.features} />

      <PropertySuggestions suggestions={commonProperties} />

      <Footer />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{
  props: singlePropertyAPICall
}> = async context => {
  const { propId } = context.params as CtxParams

  const props = await getFetchData(
    `${process.env.CURRENT_URL}/api/property/${propId}`
  )

  return { props }
}

export default PropertyPage
