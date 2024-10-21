const User = require('./user');

class Librarian extends User {
  constructor(name, email) {
    super(name, email);
  }

  getRole() {
    return 'Librarian';
  }

  manageLibraryInventory(library) {
    library.manageInventory(this);
  }
}

module.exports = Librarian;
