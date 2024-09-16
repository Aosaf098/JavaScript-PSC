// Write a JavaScript program to find the longest string from a given array of strings. 

function long(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if(arr[i].length > max.length) {
            max= arr[i]
        }
    }
    return max
}

console.log(long(['miles', 'warfaze', 'nemesis', 'aurthohin', 'crypticfate', 'artcell']));