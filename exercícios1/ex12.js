
factorialCalc = (intValue) =>
{
    let valueCounter = intValue
    
    if(intValue < 0 )
    {
        console.log(`Não há números fatoriais de negativos`)
    }
    else
    {
        if(intValue == 0) 
        {
            console.log(` Valor do fatorial é 1`)
        }
        else
        {
            console.log(`Valor do fatorial é`)
            factorialProduct(intValue)
        }
    }
}

factorialProduct = (valueCounter) =>
{
    let result = valueCounter
    
    while( valueCounter > 1)
    {
        result = result * ( valueCounter - 1 )
        valueCounter--
    }
    console.log(result)
}

factorialCalc(5)