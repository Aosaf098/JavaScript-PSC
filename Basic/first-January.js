// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

// const yearInput = prompt("What is the Year? ")

// const yearInput = 2030

// const d = new Date(yearInput, 0)

// if (d.getDay() === 0) {
//     console.log(`1st January of ${yearInput} is Sunday`)
// } else {
//     console.log(`1st January of ${yearInput} is Weekday`)
// }




// console.log(d)


for (year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1)

    if (d.getDay() === 0) {
        console.log(`1st January of ${year} is Sunday`)
    } else {
        console.log(`1st January of ${year} is Weekday`)
    }
}