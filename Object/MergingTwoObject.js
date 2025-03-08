// Problem Statement
// You are working on a system that stores user profile information from multiple sources.
// Sometimes, the same user has two different records, and you need to merge them into a single
// object.
// Challenge
// Write a function that takes two objects and merges them into one. If a key exists in both
// objects, the value from the second object should overwrite the value from the first object.
// Constraints
// •
// Both inputs should be valid objects.
// If an object is empty, return the other object as it is.
// If both objects are empty, return 0.
function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    Object.assign(obj1,obj2)
    return obj1
  }
  let objl = {"name": "Alice", "age": 25}
  let obj2 = {"age": 30, "email": "alice@mail.com"} 
  console.log(mergeObjects(objl,obj2))