let marks=85
function checkGrade(marks){
    if(marks>=90)
        return "A"
    else if(marks>=80)
        return "B"
     else if(marks>=70)
        return "C"
    else if(marks>=60)
        return "D"
    else if(marks>=50)
        return "E"
    else
     return "Fail"
}
console.log(checkGrade(marks))