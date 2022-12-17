import { FieldErrorsImpl } from 'react-hook-form'
import { singleProperty } from '../Houses/types'

const inputFields = (errors: FieldErrorsImpl<singleProperty>) => [
  {
    label: 'Referência:',
    error: errors.reference,
    type: 'text',
    fieldName: 'reference'
  },
  {
    label: 'Título do anúncio:',
    error: errors.title,
    type: 'text',
    fieldName: 'title'
  },
  {
    label: 'Endereço do imóvel:',
    error: errors.address,
    type: 'text',
    fieldName: 'address'
  },
  { label: 'Cidade:', error: errors.city, type: 'text', fieldName: 'city' },
  {
    label: 'Bairro:',
    error: errors.district,
    type: 'text',
    fieldName: 'district'
  },
  {
    label: 'Estado(Sigla):',
    error: errors.state,
    type: 'text',
    fieldName: 'state'
  },
  {
    label: 'Tipo do imóvel:',
    error: errors.type,
    type: 'text',
    fieldName: 'type'
  },
  {
    label: 'Dormitórios:',
    error: errors.details?.bedrooms,
    type: 'number',
    fieldName: 'details.bedrooms'
  },
  {
    label: 'Suítes:',
    error: errors.details?.suite,
    type: 'number',
    fieldName: 'details.suite'
  },
  {
    label: 'Wcs:',
    error: errors.details?.bathrooms,
    type: 'number',
    fieldName: 'details.bathrooms'
  },
  {
    label: 'Vagas:',
    error: errors.details?.cars,
    type: 'number',
    fieldName: 'details.cars'
  },
  {
    label: 'Valor do imóvel:',
    error: errors.details?.price,
    type: 'number',
    fieldName: 'details.price'
  }
]

export { inputFields }
