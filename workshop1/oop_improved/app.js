const Library = require('./controllers/library');
const Member = require('./models/member');
const Librarian = require('./models/librarian');
const NotificationService = require('./services/notificationService');

// Initialize services
const emailService = new NotificationService();

// Create users
const main_librarian = new Librarian('Pedro Perez', 'pedro@librarin.com');
const aux_librarian = new Librarian('Luis Gonzalez', 'luis@librarian.com');
const member = new Member('John Doe', 'john@example.com');

// Create a library
const library = new Library(main_librarian, emailService);

// Create some books

const books = [
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    isbn: '12345',
    isBookAvailable() {
      return true;
    },
  },
  {
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    isbn: '67890',
    isBookAvailable() {
      return true;
    },
  },
  {
    title: 'Working Effectively With Legacy Code',
    author: 'Michael Feathers',
    isbn: '98765',
    isBookAvailable() {
      return true;
    },
  },
  {
    title: 'Soft Skills: The Software Developer’s Life Manual',
    author: 'John Sonmez',
    isbn: '54321',
    isBookAvailable() {
      return false;
    },
  },
];

// Add books and members to the library
books.map((book) => {
  library.addBook(book);
});

library.addMember(member);

// Member borrows a book
library.borrowBook(member, '12345');

// Member returns a book
library.returnBook(member, '12345');

main_librarian.manageLibraryInventory(library);

aux_librarian.manageLibraryInventory(library);
