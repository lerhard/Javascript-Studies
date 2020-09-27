
jurosSimples  = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => 
{
    let juros = capitalInicial * taxaDeJuros * tempoDeAplicacao
    let montante = capitalInicial + juros
    console.log(`No final da aplicação você terá por juros simples R$ 
    ${montante.toFixed(2).toString().replace('.',',')}`)
}

jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicacao) =>
{
    let montante = capitalInicial * Math.pow((1+taxaDeJuros), tempoDeAplicacao)
    console.log(`No final da aplicação você terá por juros compostos R$ 
    ${montante.toFixed(2).toString().replace('.',',')}`)
}

jurosSimples(2.00, 2, 2)
jurosCompostos(2.00, 2, 2)