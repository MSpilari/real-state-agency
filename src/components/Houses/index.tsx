const Houses = () => {
  return (
    <section className="w-full flex flex-col items-center my-10 gap-5">
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-black" />

      <h1 className="text-2xl lg:text-4xl font-bold text-center">
        Encontre seu próximo local para viver.
      </h1>

      {/* Searching Bar */}
      <div className="w-full py-3 flex items-center justify-center gap-4">
        <select name="location">
          <option value="">Localização</option>
          <option value="Pq. Das Nações">Pq. Das Nações</option>
          <option value="Vila Metalúrgica">Vila Metalúrgica</option>
          <option value="Camilópolis">Camilópolis</option>
        </select>

        <select name="type">
          <option value="">Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Sobrado">Sobrado</option>
          <option value="Apartamento">Apartamento</option>
        </select>
      </div>

      {/* Houses List */}
    </section>
  )
}

export { Houses }
