// Write a JavaScript program to extract the first half of a even string. 

function firstHalf(givenStr) {
    if (givenStr.length % 2 === 0) {
        let half = givenStr.length / 2
        let modStr = givenStr.slice(0, half)
        return modStr
    } else {
        return `This String is not even`
    }
}


console.log(firstHalf('Machiato'));
console.log(firstHalf('Mamoushi'));
console.log(firstHalf('emptyness'));
console.log(firstHalf('naive'));
