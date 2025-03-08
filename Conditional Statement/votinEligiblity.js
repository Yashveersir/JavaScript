let age =15;
function checkEligiblity(age){
    if(age >= 18){
        return "eligible";
    }
    else{
        return "not eligible";
    }
}
console.log(checkEligiblity(age));