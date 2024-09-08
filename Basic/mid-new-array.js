// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.  


function midArr(arr1, arr2) {
    let newArr = []
    midElem1 = Math.floor(arr1.length / 2)
    midElem2 = Math.floor(arr2.length / 2)
    newArr.push(arr1[midElem1], arr2[midElem2])
    return newArr
}

console.log(midArr([2, 5, 7], [4, 6, 2]));