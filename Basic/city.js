// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. 

function cityName (city) {
    let la = 'Los'
    let nyc = 'New'
    if (city.slice(0,3).toLowerCase() === la.toLowerCase() || city.slice(0, 3).toLowerCase() === nyc.toLowerCase()){
        return city
    } else {
        return `blank`
    }
}

console.log(cityName('Dhaka'));
console.log(cityName('Chicago'));
console.log(cityName('Los Vegas'));
console.log(cityName('Los Angeles'));
console.log(cityName('New York'));
console.log(cityName('Shanghai'));