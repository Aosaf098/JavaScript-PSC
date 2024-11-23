// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

const student = {
    name: 'Aosaf Ibad Chowdhury',
    class: 7,
    rollNo: 25
}

const stdLength = Object.keys(student).length

console.log(stdLength)