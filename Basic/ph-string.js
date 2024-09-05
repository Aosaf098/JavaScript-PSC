// Task-1:
// Count how many times a string has the letter a

function vowel(givenStr) {
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


console.log(vowel('animalfarm'));
