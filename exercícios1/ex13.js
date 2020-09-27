
whatDayIsIt = (dayNumber) =>
{
    switch(Math.ceil(dayNumber % 6))
    {
        case 0:
            console.log(`Sábado. ${dia(0)}`)
            break
        case 1:
            console.log(`Domingo. ${dia(1)}`)
            break
        case 2:
            console.log(`Segunda. ${dia()}`)
            break
        case 3:
            console.log(`Terça.  ${dia()}`)
            break
        case 4:
            console.log(`Quarta. ${dia()}`)
            break
        case 5:
            console.log(`Sexta. ${dia()}`)
    }
}
dia = (number = 3) =>
{
    if(number != 0 && number != 1)
    {
        return "É Dia útil"
    }
    else
    {
        return "É final de semana"
    }
}
whatDayIsIt(11)

