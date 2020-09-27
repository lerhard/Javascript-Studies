var numero = 1
{
    let numero = 2 
    console.log('dentro =', numero)
}
console.log('fora=', numero)
// Variaveis do tipo var tem escopo global e de função
// variáveis do tipo let tem escopo global , de função e de bloco. 
// Por isso ai teremos a variável número impressa 2 vezes com números diferentes.