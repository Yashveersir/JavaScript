let year=1900
function checkLeap(year){
    if(year%4==0 && year%100!=0){
        return "Leap Year"
    }
    else if(year%100==0){
        if(year%400==0){
            return "Leap Year"
        }
        else
            return "Not Leap Year"
    }
}
console.log(checkLeap(year))