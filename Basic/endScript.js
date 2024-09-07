// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.


function endScript(givenStr) {
    if (givenStr.length <= 6){
        return `The string length must be greater than or equal to 6`
    } else {
        let str = 'Script'
        let modStr = givenStr.slice(givenStr.length - str.length)
        if(modStr.toLowerCase() === str.toLowerCase()) {
            return `This String ends with "Script"`
        } else {
            return `No it doesn't end with Script`
        }
        
    }

}

console.log(endScript('TypeScript'));
console.log(endScript('JavaScript'));
console.log(endScript('FilmScript'));
console.log(endScript('cripto'));
console.log(endScript('Timeless'));