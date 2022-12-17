import { InputTypes } from './types'

const Input = ({ type, error, register, fieldName, label }: InputTypes) => {
  return (
    <label className="flex items-center gap-1">
      {label}

      <input
        type={type}
        className={`outline-none border text-black pl-2 ${
          error && 'border-red-600'
        }`}
        {...register(fieldName, { required: true })}
      />
    </label>
  )
}

export { Input }
