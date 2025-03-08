let n=0
function checkNumberType(n){
    if(n>0)
        return "Positive"
    else if(n<0)
        return "Negative"
    else
        return "Zero"
}
console.log(checkNumberType(n))