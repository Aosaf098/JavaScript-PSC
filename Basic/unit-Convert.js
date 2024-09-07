// Inch - Feet
// Miles - Kilometre

function inchToFeet(inch) {
   if (inch % 12 === 0) {
    return `${inch / 12} ft`
   } else {
    return `${Math.floor(inch / 12)} feet ${inch % 12} inch`
   }
}
console.log(inchToFeet(62));


function milesToKm(mile) {
    return `${(mile * 1.60934).toFixed(2)} km`
}


console.log(milesToKm(21));