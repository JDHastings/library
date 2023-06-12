let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(){
    myLibrary.push(new Book(prompt("Title of book: "), prompt("Author of book:"), prompt("Number of pages:"), prompt("Have you read the book?")));
    
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    const bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    bookTitle.textContent = myLibrary[0].title;
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = myLibrary[0].author;
    const bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    bookPages.textContent = myLibrary[0].pages;
    const bookRead = document.createElement('div');
    bookRead.classList.add('read');
    bookRead.textContent = myLibrary[0].read;
    const bookRemove = document.createElement('button');
    bookRemove.textContent = "Remove";

    newBook.append(bookTitle);
    newBook.append(bookAuthor);
    newBook.append(bookPages);
    newBook.append(bookRead);
    newBook.append(bookRemove);
    bookContainer.append(newBook);
}

const bookContainer = document.querySelector(".main-content");

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', addBookToLibrary);