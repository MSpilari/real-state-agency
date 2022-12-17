import { FieldError, UseFormRegister } from 'react-hook-form'

export type TextAreaTypes = {
  label: string
  error: FieldError | undefined
  register: UseFormRegister<any>
  fieldName: string
}
