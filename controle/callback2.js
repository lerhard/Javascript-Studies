const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
const notasBaixas1 = []
for(let i in notas)
{
    if(notas[i] < 7)
    {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
notasBaixas2 = notas.filter(notas => notas < 7)
console.log(notasBaixas2)