
StringComparer = (string1, string2) =>
{
    if(string1.trim().toUpperCase() == string2.trim().toUpperCase())
    {
        console.log("true")
        return true
    }
    else
    {
        console.log("false")
        return false
    }
}

StringComparer("oi", "oi")
StringComparer("oi", "false")