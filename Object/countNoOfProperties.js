// Problem Statement
// You are analyzing user data in a database. You need to count how many properties exist in a
// user's profile to determine if the profile is complete.
// Challenge
// Write a function that retums the number of properties in an object.
// Constraints
// • user should be a valid object.
// • If the object is empty, return 0.
function countProperties(user) {
    // Return the number of properties in user
    let arr = Object.keys(user)
    return arr.length
  }
let obj = {
    "name": "Alice", "age": 25, "email": "alice@mail.com"
}
console.log(countProperties(obj))