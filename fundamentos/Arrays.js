const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10
console.log(valores[4])
console.log(valores.length)
console.log(valores)
valores.push({id:3}, false, null, 'teste') //adiciona valores no array
console.log(valores)
console.log(valores.pop()) // ultimo valore da array
console.log(typeof valores)