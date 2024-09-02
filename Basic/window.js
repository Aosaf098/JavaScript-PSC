// Write a JavaScript program to print the current window contents.

function printContent () {
    window.print()
}

const btn = document.querySelector("button")
btn.addEventListener("click", printContent)
