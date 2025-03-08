// Problem Statement
// You are building an online shopping platform. Some products have discounts, and some don't.
// You need to check whether a product object contains a discount property.
// Challenge
// Write a function that checks if a product object has a discount property and returns true or
// false.
// Constraints
// • product should be a valid object.
function hasDiscount(product) {
    // Check if product has discount property
    let f= Object.getOwnPropertyNames(product)
    let find1 = (idx) => idx == "discount"
    if(f.find(find1))
     return true
    else return false
}
  let obj = {
    "name": "Laptop", "price": 1000, "discount": 10
}
  
console.log(hasDiscount(obj))  