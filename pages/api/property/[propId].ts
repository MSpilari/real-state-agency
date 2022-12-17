// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { singlePropertyAPICall } from '../../../src/components/03_Organisms/Houses/Houses.types'
import AllProperties from '../../../src/utils/AllProperties.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<singlePropertyAPICall>
) {
  const { propId } = req.query

  const requestedProperty = AllProperties.filter(
    property => property.id === Number(propId)
  )[0]

  const commonProperties = AllProperties.filter(
    property =>
      property.type === requestedProperty.type &&
      property.id !== requestedProperty.id
  )

  return res
    .status(200)
    .json({ singleProperty: requestedProperty, commonProperties })
}
