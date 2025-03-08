//chech even odd using function
let n= 31;
function checkEvenOdd(num){
    if(n%2==0)
        return true
    else 
    return false
}
if(checkEvenOdd(n)){
console.log(`${n} is a even`)
}
else
console.log(`${n} is odd`)