// /src/models/member.js

const User = require('./user');

class Member extends User {
  constructor(name, email) {
    super(name, email);
    this.borrowedBooks = [];
  }

  getRole() {
    return 'Member';
  }

  borrowBook(book) {
    this.borrowedBooks.push(book);
    console.log(`${this.name} borrowed "${book.title}"`);
  }

  returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter((b) => b.isbn !== book.isbn);
    console.log(`${this.name} returned "${book.title}"`);
  }
}

module.exports = Member;
