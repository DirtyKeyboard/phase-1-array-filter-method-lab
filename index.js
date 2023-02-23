// Code your solution here
function findMatching(drivers, name)
{
    return drivers.filter((el) => el.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, name)
{
    return drivers.filter( (el) => el.charAt(0) == name.charAt(0))
}


function matchName(drivers, name)
{
    let matches = drivers.filter( (el) => el.name == name)
    return matches;
}