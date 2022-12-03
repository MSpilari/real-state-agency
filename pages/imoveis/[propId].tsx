import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { singleProperty } from '../../src/components/Houses/Houses.types'
import { Navbar } from '../../src/components/Navbar'
import { PropertyPics } from '../../src/components/PropertyPics'
import { PropertyTitle } from '../../src/components/PropertyTitle'
import apiCall from '../../src/utils/AllProperties.json'

const PropertyPage = () => {
  const router = useRouter()
  const [propertyInfo, setPropertyInfo] = useState({} as singleProperty)

  const { propId } = router.query

  useEffect(() => {
    setPropertyInfo(
      apiCall.filter(property => property.id === Number(propId))[0]
    )
  }, [propId])

  return (
    <main className="h-full overflow-x-hidden flex flex-col">
      {Object.keys(propertyInfo).length === 0 ? (
        <div>Loading</div>
      ) : (
        <>
          <PropertyTitle
            title={propertyInfo.title}
            price={propertyInfo.details.price}
            address={propertyInfo.address}
          />

          <Navbar />

          <PropertyPics images={propertyInfo.images} />
        </>
      )}
    </main>
  )
}

export default PropertyPage
