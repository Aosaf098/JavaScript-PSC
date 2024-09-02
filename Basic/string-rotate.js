// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.


let stringInput = 'w3resource'

for (let i = 0; i < stringInput.length; i++) {

    let lastLetter = stringInput.slice(length-1)
    let remString = stringInput.slice(0, length-1)
    let addString = lastLetter + remString

    console.log(addString)

    stringInput = addString
}


// let lastLetter = stringInput.slice(length-1)

// let remString = stringInput.slice(0, length-1)

// let addString = lastLetter + remString

function animateString(id) {
    
    const element = document.getElementById(id)

    let textNode = element.childNodes[0]

    let text = textNode.data

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1)
        textNode.data = text
    }, 100)
}



