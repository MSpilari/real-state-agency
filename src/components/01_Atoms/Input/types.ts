import { FieldError, UseFormRegister } from 'react-hook-form'

export type InputTypes = {
  type: string
  error: FieldError | undefined
  register: UseFormRegister<any>
  fieldName: string
  label: string
}
