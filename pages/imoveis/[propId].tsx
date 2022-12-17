import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Footer } from '../../src/components/03_Organisms/Footer'
import { singlePropertyAPICall } from '../../src/components/03_Organisms/Houses/types'
import { Navbar } from '../../src/components/03_Organisms/Navbar'
import { PropertyDesc } from '../../src/components/02_Molecules/PropertyDesc'
import { PropertyFeatures } from '../../src/components/02_Molecules/PropertyFeatures'
import { PropertyPics } from '../../src/components/03_Organisms/PropertyPics'
import { PropertySuggestions } from '../../src/components/03_Organisms/PropertySuggestions'
import { PropertyTitle } from '../../src/components/02_Molecules/PropertyTitle'

const PropertyPage = () => {
  const router = useRouter()
  const [propertyInfo, setPropertyInfo] = useState({} as singlePropertyAPICall)
  const [loading, setLoading] = useState(true)

  const { propId } = router.query

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/property/${propId}`)

      const data = await res.json()

      setPropertyInfo(data)

      return setLoading(false)
    }

    fetchData()
  }, [propId])

  return (
    <main className="h-full overflow-x-hidden flex flex-col">
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <PropertyTitle
            title={propertyInfo.singleProperty.title}
            price={propertyInfo.singleProperty.details.price}
            address={propertyInfo.singleProperty.address}
          />

          <Navbar />

          <PropertyPics
            images={propertyInfo.singleProperty.images}
            details={propertyInfo.singleProperty.details}
            reference={propertyInfo.singleProperty.reference}
          />

          <PropertyDesc desc={propertyInfo.singleProperty.description} />

          <PropertyFeatures features={propertyInfo.singleProperty.features} />

          <PropertySuggestions suggestions={propertyInfo.commonProperties} />

          <Footer />
        </>
      )}
    </main>
  )
}

export default PropertyPage
