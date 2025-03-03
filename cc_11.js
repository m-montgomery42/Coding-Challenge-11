// Task 1: Creating a Book Class
class Book {
    // Create a class with book properties
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
    // Method to return a formatted string of book details
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    // Method to update the available copies of the book
    updateCopies(quantity) {
      this.copies += quantity; // Adjust the copies based on the quantity
    }
  }
  
  // Test case 1
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
  
  // Test case 2
  book1.updateCopies(-1); // One copy is borrowed
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2: Creating a borrower class
class Borrower {
    // Initialize the borrower properties
    constructor(name, borrowerId) {
      this.name = name;
      this.borrowerId = borrowerId;
      this.borrowedBooks = []; // Array to store borrowed books
    }
    // Method to borrow a book by adding its title to borrowedBooks
    borrowBook(book) {
      this.borrowedBooks.push(book);
    }
    // Method to return a book by removing its title from borrowedBooks
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index > -1) {
        this.borrowedBooks.splice(index, 1); // Removes the book from the array
      }
    }
  }
  // Test case 1
  const borrower1 = new Borrower("Alice Johnson", 201);
  borrower1.borrowBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks);
  // Expected output: ["The Great Gatsby"]
  // Test case 2
  borrower1.returnBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks);
  // Expected output: []

// Task 3: Creating a library class
class Library {
    // Initialize the library properties
    constructor() {
      this.books = [];      // Array to store Book instances
      this.borrowers = [];  // Array to store Borrower instances
    }
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
    }
    // Method to list all books and their details
    listBooks() {
      this.books.forEach(book => {
        console.log(book.getDetails());
      });
    }
  }
  // Test case output
  const library = new Library();
  // Adding the book to the library
  library.addBook(book1);
  // Listing all books in the library
  library.listBooks();
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"