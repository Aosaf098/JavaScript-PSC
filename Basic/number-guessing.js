// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 


const randomNum = Math.floor(Math.random() * 10) + 1
// console.log(`Random number is ${randomNum}`)
const userInput = Number(prompt("Guess a Number"))
// console.log(`User Input is ${userInput}`)


if (randomNum === userInput) {
    console.log("Good Work")
} else if(userInput > 10) {
    console.log("Choose a number between 1-10")
} else {
    console.log(`Not Matched, The Number was ${randomNum}`)
}