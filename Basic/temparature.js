// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


function celsiusFahrenheit () {
    const celsius = prompt("What is the Temperature in Celsius")
    fahrenheit = ((9 * celsius) + 160) / 5
    console.log(`${celsius} degree C is ${fahrenheit} degree F`)
}

function fahrenheitCelsius () {
    const fahrenheit = prompt("What is the Temperature in Fahrenheit")
    celsius = ((5 * fahrenheit) - 160) / 9
    console.log(`${fahrenheit} degree F ${celsius.toFixed(2)} degree F`)
}


celsiusFahrenheit()
fahrenheitCelsius()
