/*Os triângulos podem ser classificados em 3 tipos quanto ao
tamanho de seus lados: 
Equilátero: Os três lados são iguais.
Isósceles: Dois corpos iguais.
Escaleno: Todos os lados são diferentes*/

const TRIANGULO01 = 
{
    l1: 3,
    l2: 3,
    l3: 4
}

const TRIANGULO02 = 
{
    l1: 4,
    l2: 4,
    l3: 4
}

const TRIANGULO03 =
{
    l1: 5,
    l2: 6,
    l3: 7
}
const FAKETRIANGLE =
{
    l1: 20,
    l2: 15,
    l3: 5
}

function triangleType(TRIANGULO)
{
    let l1 = TRIANGULO.l1
    let l2 = TRIANGULO.l2
    let l3 = TRIANGULO.l3


    if(isTriangle(l1,l2,l3))
    {
        switch(getTriangleType(l1, l2, l3))
        {
            case 0:
                console.log("Esse triângulo é escaleno")
                break
            case 2:
                console.log("Esse triângulo é isósceles")
                break
            case 3:
                console.log("Esse triângulo é equilátero")
                break
            default:
                break
        }
    }
    else
    {
        console.log("Esse não é um triângulo")
    }
}

function isTriangle(l1, l2, l3)
{
    if(Math.abs(l2 - l3) < l1 && l1 < l2 + l3)
    {
        return true
    }

    if(Math.abs(l1 - l3) < l2 && l2 < l1 + l3)
    {
        return true
    }
    if(Math.abs(l1 - l2) < l3 && l3 < l1 + l2)
    {
        return true
    }   

    return false
}
function getTriangleType(l1,l2,l3)
{
   if(l1 == l2 && l2 == l3)
   {
       return 3
   } 
   if(l1 == l2 || l1 == l3 || l2 == l3)
   {
       return 2
   }
   else
   {
       return 0
   }
}
triangleType(TRIANGULO01)
triangleType(TRIANGULO02)
triangleType(TRIANGULO03)
triangleType(FAKETRIANGLE)