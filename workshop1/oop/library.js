class Library {
    constructor() {
      this.books = [
        { title: '1984', author: 'George Orwell', isbn: '12345', isAvailable: true },
        { title: 'Brave New World', author: 'Aldous Huxley', isbn: '67890', isAvailable: true },
      ];
      this.members = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
      ];
    }
  
    borrowBook(memberName, bookTitle) {
      const member = this.members.find((m) => m.name === memberName);
      const book = this.books.find((b) => b.title === bookTitle && b.isAvailable);
  
      if (book && member) {
        book.isAvailable = false;
        console.log(`${member.name} borrowed "${book.title}"`);
  
        console.log(`Sending notification to ${member.email}: "You borrowed ${book.title}"`);
      } else {
        console.log('Book is not available or Member not found');
      }
    }
  
    returnBook(bookTitle) {
      const book = this.books.find((b) => b.title === bookTitle);
      if (book) {
        book.isAvailable = true;
        console.log(`${book.title} has been returned`);
      }
    }
  }
  
  const library = new Library();
  library.borrowBook('John Doe', '1984');
  library.returnBook('1984');