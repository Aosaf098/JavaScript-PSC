// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.



function threePlaces (givenStr) {
    if (givenStr.includes('a') && givenStr.includes('b')) {
        let posA = givenStr.indexOf('a')
        // console.log(posA);
        let posB = givenStr.indexOf('b')
        
        let diff = Math.abs(posA - posB)
        console.log(diff);

        if (diff === 4) {
            return `They are separated by exactly 3 places`
        } else {
            return `They are not`
        }
    }
}


console.log(threePlaces("bprtanhu"));

