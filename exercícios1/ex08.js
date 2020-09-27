const lista = "10 20 20 8 25 3 0 3 0 1"

pontuactionVerifier = (list) => 
{
    let splitedList = list.split(" ")
    console.log(splitedList)
    minAndMaxPontuaction(splitedList)
}

minAndMaxPontuaction = (splitedList) =>
{   
     this.min = 0
     this.max = 0
     this.count = 0
     this.minconter = 0
     this.maxcounter = 0
    for( element of splitedList)
    {
        if(this.count == 0)
       {
           this.min = parseInt(element)    
       }
        else
       {
         if(this.min > parseInt(element))
         {
          this.min = parseInt(element)   
          this.mincounter++
         }
         if( this.max < parseInt(element))
         {
          this.max = parseInt(element)
          this.maxcounter++
         }
        }
        this.count++
    }
    minAndMaxPrinter(this.min, this.max, this.mincounter, this.maxcounter)
}
minAndMaxPrinter = (min, max, mincounter, maxconter) => console.log(`Pontuação recorde: ${max}.
Pior pontuação: ${min}. Numero de piores pontuações ${mincounter}. Melhores ${maxconter}`) 

pontuactionVerifier(lista)