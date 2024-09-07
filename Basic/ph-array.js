// Task - 1

// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// console.log(colors.reverse());

let revColor = []
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    revColor.unshift(colors[i])
}
console.log(revColor);

// Task - 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 78, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46, 98];
let evenArr = []
for(let number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
        evenArr.push(number)
    }
}
console.log(evenArr);

// Task - 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

const names =  ['Tom', 'Tim', 'Tin', 'Tik']
// console.log(names.join(''));
let strArr = []
for(let name of names) {
    console.log(name);
    strArr.push(name)
}
console.log(strArr.join(''));


// Task - 4
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'

let arr = statement.split(' ')
// console.log(arr);
let rg = arr.reverse()
// console.log(rg);
console.log(rg.join(' '));
