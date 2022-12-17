import { TextAreaTypes } from './types'

const TextArea = ({ label, error, fieldName, register }: TextAreaTypes) => {
  return (
    <label className="flex items-center gap-1">
      {label}
      <textarea
        className={`outline-none resize-none border ${
          error && 'border-red-600'
        }`}
        {...register(fieldName, { required: true })}
      />
    </label>
  )
}

export { TextArea }
