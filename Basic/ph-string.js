// Task-1:
// Count how many times a string has the letter a

function countA(givenStr) {
    let arr = givenStr.split('')
    console.log(arr);
    let count = 1
    let res
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] === 'a'){
            res = count++
        }
    }
    return res
}


console.log(countA('animalfarm'));
console.log(countA('aniaaaaaaaaaa'));
console.log(countA('amplification'));



// Task - 2
// Count how many times a string has the letter a or A


function countBothA(givenStr) {
    let arr = givenStr.split('')
    console.log(arr);
    let count = 1
    let res
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] === 'a' || arr[i] === 'A'){
            res = count++
        }
    }
    return res
}

console.log(countBothA('Abba'));

// Task - 3 
// Check whether a string contains all the vowels a, e, i, o, u

function vowel(givenStr) {
    let lower = givenStr.toLowerCase()
    let arr = lower.split('')
    console.log(arr);
    let count = 1
    let res
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
            res = count++
        }
    }
    return res

}


console.log(vowel('Favourite'));
console.log(vowel('FAVOURITE'));

// Task - 4
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

function repX (givenStr) {
    let newStr
    for(let i = 0; i < givenStr.length; i++) {
        if(givenStr[i] === 'X'){
            newStr = givenStr.replace(/[X]/g, 'x')
        } else if (givenStr[i] === 'x'){
            newStr = givenStr.replace(/[x]/g, 'X')
        }
    }
    return newStr
}

console.log(repX('Xerox'));

// Task - 5
// Capitalize Every first Letter of each word in a String

function cap(givenStr) {
    // console.log(givenStr);
    let arr = givenStr.split(' ')
    // console.log(arr);
    let newStr
    let output = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        newStr = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1, arr[i].length) 
        // console.log(newStr);
        output.push(newStr)
    }
    return output.join(' ')
    
}

console.log(cap('yamete kudasai aah'));
console.log(cap('the emptiness machine'));
console.log(cap('i wanted to be part of something'));
