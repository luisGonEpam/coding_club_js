const Member = require('../models/member');
const Librarian = require('../models/librarian');

class Library {
  #books = [];
  #members = [];
  #librarian;

  constructor(librarian, notificationService) {
    if (!(librarian instanceof Librarian)) {
      throw new Error('A valid librarian must be assigned to the library.');
    }
    this.#librarian = librarian;
    this.notificationService = notificationService;
  }

  addBook(book) {
    this.#books.push(book);
  }

  addMember(member) {
    this.#members.push(member);
  }

  borrowBook(user, isbn) {
    const book = this.#books.find((b) => b.isbn === isbn);
    if (book && user instanceof Member && book.isBookAvailable()) {
      user.borrowBook(book);
      this.notificationService.sendNotification(user.email, `You borrowed "${book.title}"`);
      console.log(`${user.name} borrowed "${book.title}"`);
    } else {
      console.log(`Borrowing failed: Either the book is unavailable or the user is not authorized to borrow books.`);
    }
  }

  returnBook(user, isbn) {
    const book = this.#books.find((b) => b.isbn === isbn);
    if (book && user instanceof Member) {
      user.returnBook(book);
      console.log(`"${book.title}" has been returned to the library.`);
    } else {
      console.log(`Returning failed: Book or user not found.`);
    }
  }

  manageInventory(librarian) {
    if (librarian !== this.#librarian) {
      console.log('Only the assigned librarian can manage the inventory.');
      return;
    }
    console.log('Library Inventory:');
    this.#books.forEach((book) => {
      console.log(`- ${book.title} by ${book.author}, Available: ${book.isBookAvailable()})`);
    });
  }
}

module.exports = Library;
