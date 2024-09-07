// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

function equalPT(givenStr) {
    let lower = givenStr.toLowerCase()
    let arr = lower.split('')
    console.log(arr);
    let countP = 1
    let countT = 1
    let resP
    let resT

    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if(arr[i] === 'p') {
            resP = countP++
        } else if(arr[i] === 't') {
            resT = countT++
        }
    }
    console.log(`Number of P: ${resP} & Number of T: ${resT}`);
    if (resP === resT) {
        return true
    } else {
        return false
    }
}


console.log(equalPT('promalgamate'));