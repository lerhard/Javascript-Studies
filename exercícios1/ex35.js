let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

vetorAdiciona.forEach(element =>
    {
        vetorPilha.push(element)
    })

vetorPilha.forEach(element => console.log(element))