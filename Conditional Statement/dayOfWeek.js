let d=9;
function getDay(d){
    switch(d){
        case 1:
            return "Monday"
            break
        case 2:
            return "Tuesday"
            break
        case 3:
            return "Wednesday"
            break
        case 4:
            return "Thrusday"
            break
        case 5:
            return "Friday"
            break
        case 6:
            return "Saturdau"
            break
        case 7:
            return "Sunday"
            break
        default:
            return "Invalid Choice"
    }
}
console.log(getDay(d))