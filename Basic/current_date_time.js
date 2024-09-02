// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const d = new Date()

const day = days[d.getDay()]

// console.log(d.getDay())

console.log(`Today is: ${day}`)

let hour = d.getHours()

hour = hour <= 12 ? "AM" : "PM"


console.log(`Current Time is: ${d.getHours()} ${hour}: ${d.getMinutes()}m: ${d.getSeconds()}s`)


// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const currentDate = new Date()

let mm = currentDate.getMonth() + 1
let dd = currentDate.getDate()
const yyyy = currentDate.getFullYear()

dd = dd < 10 ? "0"+dd : dd
mm = mm < 10 ? "0"+mm : mm

console.log(`${mm}-${dd}-${yyyy}`)