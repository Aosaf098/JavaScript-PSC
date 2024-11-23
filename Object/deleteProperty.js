// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

const student = {
    name: 'Aosaf Ibad Chowdhury',
    class: 7,
    rollNo: 25
}

delete student.rollNo

console.log(student)