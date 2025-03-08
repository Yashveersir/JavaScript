// Problem Statement
// In your web application, some objects contain unnecessary properties. To optimize
// performance, you need to remove all properties that have null or undefined values.
// Challenge
// Write a function that removes all properties with null or undefined values from an object.
// Constraints
// • The input should be a valid object.
// • If the object has no valid properties left, retum 0.
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    let newObj = Object.fromEntries(obj)
    return nbj
    
  }
  let obj = {"name": "Alice", "age": 25, "email": null} 
  console.log(cleanObject(obj))