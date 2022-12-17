import { H1WithBarTypes } from './types'

const TitleH1 = ({ title }: H1WithBarTypes) => {
  return (
    <h1 className="flex flex-col text-2xl font-bold gap-1 md:text-3xl lg:text-4xl ">
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-black" />
      {title}
    </h1>
  )
}

export { TitleH1 }
