

aumento = (plano, salarioAtual) =>
{
    switch(plano)
    {
        case "A":
            console.log(`Com aumento R$ ${(salarioAtual * 1.1).toFixed(2)}`)
            break
            
        case "B":
             console.log(`Com aumento R$ ${(salarioAtual * 1.15).toFixed(2)}`)
            break
            
        case "C":
            console.log(`Com aumento R$ ${(salarioAtual * 1.2).toFixed(2)}`)
            break    
            
        default:
            console.log("Plano inválido")
            break
    }

}

aumento("A", 100)
aumento("B", 100)
aumento("C", 100)
aumento("D", 100)