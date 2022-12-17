import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorAlert } from '../../01_Atoms/ErrorAlert'
import { singleProperty } from '../Houses/types'
import { Input } from '../../01_Atoms/Input'
import { TextArea } from '../../01_Atoms/TextArea'
import { inputFields } from './inputFields'

const AddPropertyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<singleProperty>()

  const submitForm: SubmitHandler<singleProperty> = data => {
    console.log(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-3 bg-slate-300"
    >
      <h1>Adicionar uma nova propriedade.</h1>

      <ErrorAlert errorObj={errors} />

      {inputFields(errors).map((field, index) => {
        return (
          <Input
            label={field.label}
            key={index}
            register={register}
            error={field.error}
            fieldName={field.fieldName}
            type={field.type}
          />
        )
      })}

      <TextArea
        label="Descrição:"
        error={errors.description}
        fieldName="description"
        register={register}
      />

      <button className="bg-yellow-500 px-5 py-2" type="submit">
        Enviar
      </button>
    </form>
  )
}

export { AddPropertyForm }
