
calculateDelta = (a, b, c) =>
{
    let delta = Math.pow(b,2) - 4 * a * c
    return delta
}

baskaraCalc = (a, b, c) =>
{
   let delta = calculateDelta( a, b, c)
   if(delta > 0)
   {
       let xi =  ((- b) + Math.sqrt(delta)) / (2 * a)
       let xii = ((- b) - Math.sqrt(delta)) / (2 * a)
       let signalB 
       console.log(`A resposta para a equação ${equationPrinter(a,b,c)} é:
        xi  = ${xi}
        xii = ${xii} `)
   } 
   else
   {
       console.log(`Delta é negativo. Delta = ${delta}`)
   }
}
equationPrinter = (a, b, c) => 
{
    let equationString = ''
    if(a != 0)
        equationString = equationString + `${a}x²`
    if(b != 0)
        equationString = equationString + `${signalPrinter(b)}x`
    if(c !=0)
    equationString = equationString + `${signalPrinter(c)}`

    return equationString
}
signalPrinter = (val) => 
{
    if(val > 0)
        return ` + ${val}`
    else
        return ` - ${val * -1}`
}

baskaraCalc(3, -5, 12)
baskaraCalc(1, -10, 24)