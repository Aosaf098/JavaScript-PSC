// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  

function rotateLeft(integers) {
    return [integers[1], integers[2], integers[0]]
}


console.log(rotateLeft([3, 4, 5]));


