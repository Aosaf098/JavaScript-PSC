// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];


const library = [
    {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true 
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true 
     },
     {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false 
     }
]

library.map((book) => {
    const {author, title, readingStatus} = book
    if (readingStatus) {
        console.log(`Already read ${title} by the ${author}`)
    } else {
        console.log(`You still need to read ${title} by the ${author}`)
    }
})
