// Write a JavaScript program to reverse a given string.  


function reverse(givenString) {
    let newStr = givenString.toLowerCase().split('').reverse()
    let output = newStr.join('')
    return output
}

console.log(reverse('Mamushi'));




// HOW TO REVERSE A STRING -------- 3 STEPS

// 1. TURN GIVEN STRING INTO AN ARRAY
// 2. REVERSE THAT ARRAY
// 3. JOIN THAT ARRAY USING AN EMPTY STRING