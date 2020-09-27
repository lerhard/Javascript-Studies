const funcs = [ ]
for (let i =0; i < 10; ++i)
{
    funcs.push(function()
    {
        console.log(i)
    }
    )
}
funcs[2]()
funcs[6]() // Esta diferença é que o let tem escopo de função
funcs[8]()