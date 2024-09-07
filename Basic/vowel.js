// Write a JavaScript program to count the number of vowels in a given string.


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


