const booksContainer = document.querySelector('.books-container')

let myLibrary = [
    // {
    //     title: 'book 1',
    //     author: 'author 1',
    //     numOfPages: 150,
    //     haveRead: false
    // },
    // {
    //     title: 'book 2',
    //     author: 'author 2',
    //     numOfPages: 127,
    //     haveRead: true
    // },
];

function Book(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookOne = new Book('book 1', 'author 1', 200, true)
const bookTwo = new Book('book 2', 'author 2', 111, false)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)


for (const obj of myLibrary) {
    const bookCard = document.createElement('div')
    bookCard.textContent = obj.info();
    booksContainer.appendChild(bookCard)
    console.log(obj.info())
}