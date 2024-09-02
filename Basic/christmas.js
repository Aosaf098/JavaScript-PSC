// Write a JavaScript program to calculate the days left before Christmas.


const d = new Date()

const christmas = new Date(d.getFullYear(), 11, 25)

const oneDay = 1000 * 60 * 60 * 24

if (d.getMonth() == 11 && d.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1)
}


const res = Math.ceil((christmas - d) / oneDay)

console.log(`${res} days left for Christmas`)