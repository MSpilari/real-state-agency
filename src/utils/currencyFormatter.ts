const currencyFormatter = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return formatter.format(price)
}

export { currencyFormatter }
