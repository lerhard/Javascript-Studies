/*Crie uma função que dado dois valores (passados como parâmetros)
mostre no console a soma, subtração. multiplicação e divisão desses
valores*/

ex1 = (val1, val2) =>
{

    console.log(`Soma dos valores ${val1} e ${val2} é ${val1 + val2}`)
    console.log(`A subtração dos valores ${val1} e ${val2} é ${val1 - val2}`)
    console.log(`O produto dos valores ${val1} e ${val2} é ${val1 * val2}`)
    console.log(`A divisão dos valores ${val1} e ${val2} é ${val1 / val2}`)
}

ex1(2,2)