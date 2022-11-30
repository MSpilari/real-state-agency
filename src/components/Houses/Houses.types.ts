export type Properties = {
  id: number
  reference: string
  title: string
  address: string
  images: string[]
  details: {
    bedrooms: number
    suite: number
    bathrooms: number
    cars: number
    price: number
  }
  description: string
  features: string[]
}[]
