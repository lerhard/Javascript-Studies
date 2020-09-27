
decimalToDinero = (valor) =>
{
  valor = valor.toFixed(2)
  return console.log(`O valor em moeda é R$ ${valor.toString().replace('.','.')}`)
}

decimalToDinero(0.1 + 0.2)