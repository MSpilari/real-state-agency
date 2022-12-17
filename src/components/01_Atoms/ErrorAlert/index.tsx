import { ErrorAlertTypes } from './types'

const ErrorAlert = ({ errorObj }: ErrorAlertTypes) => {
  return Object.values(errorObj).find(value => value !== undefined) ? (
    <span className="text-red-600">Campo(s) Obrigatório(s)</span>
  ) : null
}

export { ErrorAlert }
