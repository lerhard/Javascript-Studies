const valor = 'Global'

function minhaFuncao()
{
 console.log(valor)
}

function exec()
{
    const valor = 'Local'
    minhaFuncao()
}

exec() 

//Na hora que executar minha função 
//vai procurar pela variável valor, mas qual?
// a resposta é o global.
// Por conto do contexto léxico, vai achar o valor global. 
// Porque quando a função foi declarado em js ela não tem
// apenas seu conteúdo interno. Tem também consciência do 
// local em que foi definida. Carrega consigo essa informação
// do contexto em que foi declarada