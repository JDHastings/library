let myLibrary = [Book, Book, Book, Book, Book, Book];
let removeButtons = document.querySelectorAll('.remove');
let readButtons = document.querySelectorAll('.read');
let unreadButtons = document.querySelectorAll('.unread');

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newTitle, newAuthor, newPages, newRead){
    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));
    displayUpdate();
}

function removeBook(){
    for(let i = 0; i < myLibrary.length; i++){
        if(this.classList.contains(i)){
            myLibrary.splice(i, 1);
            displayUpdate();
        }
    }
}

function changeRead(){
    if(this.classList.contains('read')){
        this.classList.remove('read');
        this.classList.add('unread');
        this.textContent = "Unread";
        for(let i = 0; i < myLibrary.length; i++){
            if(this.classList.contains(i)){
                myLibrary[i].read = 0;
            }
        }
    }else{
        this.classList.remove('unread');
        this.classList.add('read');
        this.textContent = "Read";
        for(let i = 0; i < myLibrary.length; i++){
            if(this.classList.contains(i)){
                myLibrary[i].read = 1;
            }
        }
    }
}

function displayUpdate() {
    const displayedBooks = document.querySelectorAll('.book');
    displayedBooks.forEach(book => book.remove());

    for(let i = 0; i < myLibrary.length; i++){
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        const bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        bookTitle.textContent = "\"" + myLibrary[i].title + "\"";
        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = myLibrary[i].author;
        const bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        bookPages.textContent = myLibrary[i].pages + " pages";

        const bookRead = document.createElement('button');
        if(myLibrary[i].read == 1){
            bookRead.classList.add('read');
            bookRead.classList.add(i);
            bookRead.textContent = "Read";
        }else{
            bookRead.classList.add('unread');
            bookRead.classList.add(i);
            bookRead.textContent = "Unread";
        }
        
        const bookRemove = document.createElement('button');
        bookRemove.classList.add('remove');
        bookRemove.classList.add(i);
        bookRemove.textContent = "Remove";
    
        newBook.append(bookTitle);
        newBook.append(bookAuthor);
        newBook.append(bookPages);
        newBook.append(bookRead);
        newBook.append(bookRemove);
        bookContainer.append(newBook);
        
        removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => button.addEventListener('click', removeBook));

        readButtons = document.querySelectorAll('.read');
        readButtons.forEach(button => button.addEventListener('click', changeRead));

        unreadButtons = document.querySelectorAll('.unread');
        unreadButtons.forEach(button => button.addEventListener('click', changeRead));
    }
}

const bookContainer = document.querySelector(".main-content");

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', () => {
    if(addBook.classList.contains('open')){
        closeForm();
    }else{
        openForm();
    }
});

function closeForm(){
    const form = document.querySelector('.form-popup');
    form.classList.remove('open-form');
    form.classList.add('closed-form');
    addBook.classList.add('closed');
    addBook.classList.remove('open');
}

function openForm(){
    const form = document.querySelector('.form-popup');
    form.classList.remove('closed-form');
    form.classList.add('open-form');
    addBook.classList.remove('closed');
    addBook.classList.add('open');
}

let newBook = document.getElementById("new-book");
newBook.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read-status").checked;
    addBookToLibrary(title, author, pages, read);
    newBook.reset();
    closeForm();
});