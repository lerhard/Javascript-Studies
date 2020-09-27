//IIFE -> Immediately Invoked Function Expression

(function()
{
    console.log('Será executada na hora!!')
    console.log('Foge do escopo mais abrangente!')
}
)() // <- Isso define a função, sem o parênteses dá erro de expressão.
//A função é executada assim que roda o script