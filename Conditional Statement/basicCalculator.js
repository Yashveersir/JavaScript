
function calculator(num1, num2, operator) {
  // Perform basic arithmetic operations using switch case
  switch(operator){
    case "+":
    return num1+num2
    break
    case "-":
    return num1-num2
    break
    case "*":
    return num1*num2
    break
    case "/":
    if(num2==0){
      return "Not divisible"
    }
    return num1/num2
    break
  }
}
  console.log(calculator(3,0,"/"))