// You have multiple levels of stars to count. Each level contains a certain number of stars. How
// many total stars are there?
// Problem Statement:
// Create a function that takes an array of arrays (representing the number of stars in each level)
// and returns the total number of stars.
function totalStars(starLevels) {
    let cnt=0
    for(let i=0;i<starLevels.length;i++){
      for(let j=0;j<starLevels[i].length;j++){
        cnt++
      }
    }
    return cnt
  }
  console.log(totalStars([["*","*","*"],["*","*"],["*"]]))