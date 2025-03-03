// Task 1: Creating a Book Class
// create a class book with the following properties
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
// Add a method that returns the formatted string of book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
// Add a method that modifies the available copies when a book is borrowed or returned
    updateCopies(quantity) {
        this.copies += quantity;
    }
}

// Task 2: Creating a Borrower Class
// Create a class borrower with the following properties
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
// Add a method that adds a book title to borrowedbooks
    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle);
    }
// Add a method that removes the book from borrowedbooks
    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }
}

// Task 3: Creating a Library Class
// Create a class library with books ad borrowers
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
// Add a new book to the library
    addBook(book) {
        this.books.push(book);
    }
// Added a borrower
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }
// Log all books' details
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

// Task 4: Implementing Book Borrowing
// Add a method lendbook in the library class
    lendBook(borrowerId, isbn) {
        let book = this.books.find(b => b.isbn === isbn);
        let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
// reduce the books copies by 1
        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        } else {
            console.log("Book not available or Borrower not found.");
        }
    }

// Task 5: Implementing Book Returns
// Add a method return book in the library class
    returnBook(borrowerId, isbn) {
        let book = this.books.find(b => b.isbn === isbn);
        let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
// updated copies
        if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
        } else {
            console.log("Invalid return attempt.");
        }
    }
}

// Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected: []

// Task 3
const library = new Library();
library.addBook(book1);
library.addBorrower(borrower1);
library.listBooks();
// Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected: ["The Great Gatsby"]

// Task 5
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected: []