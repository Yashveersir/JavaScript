let result;
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    if(scale=="C"){
      result = (value * 9/5) + 32
      return result
    }
    else if(scale=="F"){
      result = (value - 32) * 5/9
      return result
    }
    
  }
  console.log(convertTemperature(212,"F"))