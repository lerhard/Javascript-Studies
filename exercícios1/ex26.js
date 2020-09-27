verifyOddNumber = (number) => number % 2 == 0

for ( let i = 1; i <= 100 ; i++)
{
    if(verifyOddNumber(i))
    {
        console.log(`Número ${i} é par`)
    }
    else
    {
        console.log(`Número ${i} é impar`)
    }
}