function getPreco(imposto = 0, moeda = 'R$')
{
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = 
{
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // this no contexto global não está definido

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // vai funcionar, pois adicionei no escopo global as variáveis da função
console.log(produto.getPreco())

const carro = 
{
    preco: 49990,
    desc: 0.2
}
console.log(getPreco.call(carro)) // call
console.log(getPreco.apply(carro)) // apply
console.log(getPreco.call(carro, 0.17, '$')) 
/* diretamente no call estou passando os parâmetros do getPreco*/

console.log(getPreco.apply(carro, [ 0.17, '$']))
/* a diferença é que se passa um array */