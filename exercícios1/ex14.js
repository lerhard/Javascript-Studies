
lojinha = (fruta) =>
{
    switch(fruta)
    {
        case "maçã":
            console.log("Não vendemos essa fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilograma")
            break
        default:
            console.log("Não entendi, desculpe :(") 
            break
    }
}

lojinha("maçã")
lojinha("kiwi")
lojinha("melancia")
lojinha("coco")