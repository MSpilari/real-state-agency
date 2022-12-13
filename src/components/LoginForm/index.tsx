import { ChangeEvent, useState } from 'react'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({})

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    return setCredentials(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <section className="w-full h-[calc(100vh-12rem)] flex flex-col items-center justify-center text-yellow-500 gap-4">
      <h1 className="text-2xl text-red-600">Área restrita para corretores.</h1>
      <form className="flex flex-col gap-4 border border-white px-5 py-5 rounded-2xl">
        <span>
          E-mail:{' '}
          <input
            type="email"
            name="email"
            className="text-black pl-2"
            onChange={e => inputHandler(e)}
          />
        </span>

        <span>
          Senha:{' '}
          <input
            type="password"
            name="password"
            className="text-black pl-2"
            onChange={e => inputHandler(e)}
          />
        </span>

        <button
          type="button"
          className="px-5 py-2 bg-yellow-500 text-black font-bold"
          onClick={() => console.log(credentials)}
        >
          Acessar
        </button>
      </form>
    </section>
  )
}

export { LoginForm }
