import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorAlert } from '../../01_Atoms/ErrorAlert'
import { Input } from '../../01_Atoms/Input'
import { LoginFormTypes } from './types'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginFormTypes>()

  const submitForm: SubmitHandler<LoginFormTypes> = data => {
    console.log(data)
    reset()
  }

  return (
    <section className="w-full h-[calc(100vh-12rem)] flex flex-col items-center justify-center text-yellow-500 gap-4">
      <h1 className="text-2xl text-red-600">Área restrita para corretores.</h1>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col items-center gap-4 border border-white px-5 py-5 rounded-2xl"
      >
        <ErrorAlert errorObj={errors} />

        <Input
          label="Email:"
          register={register}
          type="text"
          fieldName="email"
          error={errors.email}
        />

        <Input
          label="Senha:"
          register={register}
          type="password"
          fieldName="password"
          error={errors.password}
        />

        <button
          type="submit"
          className="px-5 py-2 bg-yellow-500 text-black font-bold"
        >
          Acessar
        </button>
      </form>
    </section>
  )
}

export { LoginForm }
