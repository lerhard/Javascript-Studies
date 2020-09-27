
comprarCarro = (carro) =>
{
    switch(carro)
    {
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log("Tem certeza de que não quer outro modelo?")
            break
        default:
            console.log("Modelo inválido")
            break
    }
}

comprarCarro("sedan")
comprarCarro("hatch")
comprarCarro()