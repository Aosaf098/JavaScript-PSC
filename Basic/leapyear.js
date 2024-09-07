// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

const year = prompt("Year: ")

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
}

// Using Date Object


function leapYear(year) {
    const d = new Date(year, 1, 29).getDate() === 29
    if (d) {
        return `${year} is a leap year`
    } else {
        return `${year} is not a leap year`
    }
}

console.log(leapYear(2024));


