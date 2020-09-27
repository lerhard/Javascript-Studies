
scoreVerifier = (score) =>
{
    if(score < 40)
    {
        console.log(`Reprovado com nota ${score}`)
    }
    else
    {
        console.log(`Aprovado com nota ${scoreRounder(score)}`)
    }
}
scoreRounder = (score) =>
{
    let scoreCeil = Math.ceil(score / 5) * 5
    if(scoreCeil - score < 3)
    {
        return scoreCeil
    }
    else
    {
        return score
    }
}

scoreVerifier(44)
scoreVerifier(86)
scoreVerifier(41)
