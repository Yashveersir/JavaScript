// Problem Statement
// Imagine you are building an online school management system. Each student has a profile
// containing their name, age, and grade. You need to store this information in an object format so
// that it can be accessed easily when required.
// Challenge
// Write a function that takes name, age, and grade as parameters and returns a student object
// containing these properties.
// Constraints
// •
// •
// •
// •
// name should be a string.
// age should be a positive integer greater than 5.
// grade should be a string like "1 0th", "12th", etc.
// return "Invalid input" for wrong inputs.
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
    if(age <= 5 || name == "" || grade == ""){
      return "Invalid input"
  
    }
    student = {
      name : name,
      age : age,
      grade : grade
    }
    return student
  }

console.log(createStudentProfile("Yash",19,"B.E"))