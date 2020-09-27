let array  = [1,2,3,4,5,6,7,8,9,10]

tipo = (numero) => 
{
    if(numero % 2 == 0)
    {
        console.log(`${numero} é par`)
        return true
    }
    else
    {
        console.log(`${numero} é impar`)
        return false
    }

}

numberNumerator = (number) =>
{
    let par = 0
    let impar = 0
    
    number.forEach(element => {

        if(tipo(element))
        par++
        else
        impar++
        
    });

    console.log(`Pares: ${par}
Ímpares: ${impar}`)
}
numberNumerator(array)