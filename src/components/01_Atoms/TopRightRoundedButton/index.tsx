import { TRRoundedButtonProps } from './TRRoundedButton.types'

const TopRightRoundedButton = ({
  children,
  extraStyles
}: TRRoundedButtonProps) => {
  return (
    <button
      className={`items-center gap-1 rounded-tr-2xl px-10 py-1 ${extraStyles}`}
    >
      {children}
    </button>
  )
}

export { TopRightRoundedButton }
