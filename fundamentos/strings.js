const escola = "Cod3r"
console.log(escola.charAt(4)) //Retorna o caractere de índice 4
console.log(escola.charAt(5)) // Se ultrapassar vai retornar vazio
console.log(escola.charCodeAt(3)) // Retorna o caractere AScii de indice 3
console.log(escola.indexOf('3')) // Existe o 3 na string?
console.log(escola.substring(1)) // Retorna a constante em string a partir do índice 1
console.log(escola.substring(0,3))// Retorna a constante em string a partir do índice 0 índice 3
console.log("Escola ".concat(escola).concat(' !')) // Concatenação de strings
console.log(escola.replace('3', 'e')) // Substitui 3 por e
// VER REGEX!!
console.log('Joao, Maria, José'.split(',')) // Separa em array pelo o aractere desejado, no caso, ','
