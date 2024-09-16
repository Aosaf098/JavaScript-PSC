// Clicking on the button the font, font size, and color of the paragraph text will be changed.

document.getElementById('jsstyle').addEventListener('click', function() {
    const paragraph = document.getElementById('text')
    paragraph.style.fontSize = '1.2rem'
    paragraph.style.color = 'slateblue'
    paragraph.style.fontFamily = 'Roboto, sans-serif'
})


// Write a JavaScript function to get the values of First and Last names of the following form.

document.getElementById('name-btn').addEventListener('click', function() {
    const firstNameCon = document.getElementById('finp')
    const firstName = firstNameCon.value

    const lastNameCon = document.getElementById('linp')
    const lastName = lastNameCon.value

    const output = `${firstName} ${lastName}`

    const nameContainer = document.getElementById('task-2')
    const showName = document.createElement('p')
    showName.innerText = output
    nameContainer.appendChild(showName)
})

// Write a JavaScript program to set paragraph background color.

const capitalism = document.getElementById('capitalism')
capitalism.style.backgroundColor = 'slateblue'
capitalism.style.color = 'yellow'

