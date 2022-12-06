export type singlePropertyDetails = {
  bedrooms: number
  suite: number
  bathrooms: number
  cars: number
  price: number
}

export type singleProperty = {
  id: number
  reference: string
  title: string
  address: string
  city: string
  state: string
  district: string
  type: string
  images: string[]
  details: singlePropertyDetails
  description: string
  features: string[]
}

export type Properties = singleProperty[]

export type FiltersProps = {
  type: string | null
  location: string | null
}
