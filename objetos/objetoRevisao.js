// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = `Cadeira`
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
//Excluir atributos de um objeto
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = 
{
    modelo:  "Raul",
    valor: 89000,
    proprietario: 
    {
        idade: 56,
        endereco: 
        {
        logradouro: `Rua ABC`,
        numero: 123
        }
    },
condutores: [{
        nome: `Junior`,
        idade: 19
   },{
       nome: `Ana`,
       idade: 42
   }
],
calcularValorSeguro: function() {
    // ....
},
}
carro.proprietario.endereco.numero = 1000
carro[`proprietario`][`endereco`][`logradouro`]
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
