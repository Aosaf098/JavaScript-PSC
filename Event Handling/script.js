// Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.

document.getElementById('btn-1').addEventListener('click', function() {
    console.log('I was clicked');
})

// Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.


// Write a JavaScript function that changes the background color of an element when a mouse enters it.

document.getElementById('div-3').addEventListener('mouseenter', function() {
    const heading = document.getElementById('div-3')
    heading.style.backgroundColor = 'green'
})


// Write a JavaScript program that implements a "form" validation that displays an error message if a required field is left empty when submitting the form.


document.getElementById('submit-4').addEventListener('click', function(event) {
    const fName = document.getElementById('name-4')
    const number = document.getElementById('num-4')
    const mail = document.getElementById('mail-4')

    if (fName.value === '' || number.value === '' || mail.value === '') {
        alert("Please Fill up the Form")
        event.preventDefault()
    } else {
        console.log(`${fName.value} ${number.value} ${mail.value}`);
        fName.value = ''
        number.value = ''
        mail.value = ''
    }
})


// Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.

const slideshowImage = document.getElementById('slide-1')

const images = ['1.png', '2.jpg', '3.png']

let currentIndex = 0



document.getElementById('prev').addEventListener('click', function() {
    if (currentIndex <= 0) {
        currentIndex = images.length
    }
    currentIndex--
    return updateImage()
})

document.getElementById('next').addEventListener('click', function() {
    if (currentIndex >= images.length - 1) {
        currentIndex = -1
    }
    currentIndex++
    return updateImage()
})

function updateImage() {
    return slideshowImage.setAttribute('src', 'image/' + images[currentIndex])
}


// Write a JavaScript program to implement drag-and-drop functionality to allow users to reorder items in a list.


// Write a JavaScript program to implement a toggle switch that changes its state when clicked.

const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('on')
})


// Write a JavaScript program to create a progress bar that updates its width based on task completion.

function updateProgress(percentage) {
    const innerProgress = document.getElementById('progress-fill')
    innerProgress.style.width = `${percentage}%`
}

updateProgress(50)


// Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.

document.getElementById('input-9').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        console.log('Someone Pressed the Enter Button');
        document.body.style.backgroundColor = 'red'
    }
})


// Write a JavaScript function that listens for a double click on an element and performs a specific action.

document.getElementById('div-10').addEventListener('dblclick', () => {
    document.getElementById('div-10').style.backgroundColor = 'slateblue'
})