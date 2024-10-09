// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
    constructor(title, author, pbYear) {
        this.title = title
        this.author = author
        this.pbYear = pbYear
    }
    displayDetails() {
        return `
            Title: ${this.title}
            Author: ${this.author}
            Publication Year: ${this.pbYear}
        `
    }
}

class Ebook extends Book {
    constructor(title, author, pbYear, price) {
        super(title, author, pbYear)
        this.price = price
    }
    displayDetails() {
        return `Title: ${this.title}
Author: ${this.author}
Publication Year: ${this.pbYear}
Price: ${this.price}
        `
    }
}

const ebook = new Ebook('Muqaddima', 'Abd al-Rahman Ibn Khaldun', '1377', 10000)

const ebookDetails = ebook.displayDetails()

console.log(ebookDetails);