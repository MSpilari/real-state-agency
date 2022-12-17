import { Dispatch, SetStateAction } from 'react'

const getFetchData = async (
  url: string,
  stateHandler: Dispatch<SetStateAction<any>>
) => {
  const res = await fetch(url)

  const data = await res.json()

  return stateHandler(data)
}

export { getFetchData }
