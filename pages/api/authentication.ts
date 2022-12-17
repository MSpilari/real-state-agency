import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req

  if (method === 'POST')
    return res
      .status(200)
      .setHeader('token', 'Bearer suhauashuahauahauhauhahuhau')
      .json({ message: 'OK' })
}
