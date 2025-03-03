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