let dayNumber = Math.ceil(Math.random()*7)
console.log ("Day number is " + dayNumber)
switch (dayNumber){
    case 1:
        console.log("Today is monday")
        break;
    case 2:
        console.log("Today is tuesday")
        break;
    case 3:
        console.log("Today is wednesday")
        break;
    case 4:
        console.log("Today is thursday")
        break;
    case 5:
        console.log ("Today is friday")
        break;
    case 6:
        console.log("Today is saturday")
        break;
    case 7:
        console.log("Today is sunday")
        break;
    default:
        console.log("Incorrect number")
}
