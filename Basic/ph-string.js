// Task-1:
// Count how many times a string has the letter a

const str = 'Dhaka'

const newS = str.split('')

for (let i = 0; i < newS.length; i++) {
    let count = 0
    console.log(newS[i]);
    if (newS[i] === 'a') {
        console.log(count++);
    } else {
        console.log(count);
    }
    count++
}


console.log(newS);
