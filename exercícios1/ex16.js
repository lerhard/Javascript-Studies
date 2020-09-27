
calculadora = (n1, n2, op) =>
{
    switch(op)
    {
        case "+":
            console.log(`Resultado ${n1 + n2}`)
            break
        case "-":
            console.log(`Resultado ${n1 - n2}`)
            break
        case "/":
            console.log(`Resultado ${n1 / n2}`)
            break
        case "*":
            console.log(`Resultado ${n1 * n2}`)
            break
        default:
            console.log("Operação Inválida")
            break
    }
}

calculadora(2,2,"*")
calculadora(2,2, "-")
calculadora(2,2, "/")
calculadora(2,2, "+")
calculadora(2,2, "y")