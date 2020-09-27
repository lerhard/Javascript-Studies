let valor // variável não inicializada
console.log(valor)//Undefined
valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) tentando obter um valor de um tipo inexistente
const produto = {}
//console.log(produto.preco.a) Não  tem como obter a propriedade de algo indefinido
produto.preco = 3.5
console.log(produto.preco)
produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)//Verificar boolean
console.log(produto)
delete produto.preco
console.log(produto) // removeu o atributo preco
produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)