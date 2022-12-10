// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Properties } from '../../src/components/Houses/Houses.types'
import AllProperties from '../../src/utils/AllProperties.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Properties>
) {
  res.status(200).json(AllProperties)
}
