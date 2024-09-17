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

const dragList = document.getElementById('dragList');
let draggedItem = null;

// Add event listeners for drag and drop events
dragList.addEventListener('dragstart', handleDragStart);
dragList.addEventListener('dragover', handleDragOver);
dragList.addEventListener('drop', handleDrop);

// Drag start event handler
function handleDragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', draggedItem.innerHTML);
  event.target.style.opacity = '0.5';
}

// Drag over event handler
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  const targetItem = event.target;
  if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
    const boundingRect = targetItem.getBoundingClientRect();
    const offset = boundingRect.y + (boundingRect.height / 2);
    if (event.clientY - offset > 0) {
      targetItem.style.borderBottom = 'solid 2px #000';
      targetItem.style.borderTop = '';
    } else {
      targetItem.style.borderTop = 'solid 2px #000';
      targetItem.style.borderBottom = '';
    }
  }
}

// Drop event handler
function handleDrop(event) {
  event.preventDefault();
  const targetItem = event.target;
  if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
    if (event.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetHeight / 2)) {
      targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
    } else {
      targetItem.parentNode.insertBefore(draggedItem, targetItem);
    }
  }
  targetItem.style.borderTop = '';
  targetItem.style.borderBottom = '';
  draggedItem.style.opacity = '';
  draggedItem = null;
}
