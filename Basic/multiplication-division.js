// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

const inputValue1 = document.querySelector("#first-input")
const num1 = inputValue1.value

const inputValue2 = document.querySelector("#sec-input")
const num2 = inputValue2.value

const mulBtn = document.querySelector("#mul")

mulBtn.addEventListener("click", multiply)

function multiply() {
    const inputValue1 = document.querySelector("#first-input")
    const num1 = inputValue1.value

    const inputValue2 = document.querySelector("#sec-input")
    const num2 = inputValue2.value

    const result = num1 * num2
    // console.log(result)

    const resField = document.querySelector(".result-field")

    resField.textContent = result
}

const diviBtn = document.querySelector("#divi")

diviBtn.addEventListener("click", division)

function division() {
    const inputValue1 = document.querySelector("#first-input")
    const num1 = inputValue1.value

    const inputValue2 = document.querySelector("#sec-input")
    const num2 = inputValue2.value

    const result = num1 / num2
    // console.log(result)

    const resField = document.querySelector(".result-field")

    resField.textContent = result.toFixed(2)

}