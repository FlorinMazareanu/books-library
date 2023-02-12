//constructor function for Book
//data will be stored in localstorage
function Book(title, author, status, id) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.id = id;

}

//event listener on submit to fire up addBook()
const submitButton = document.getElementById("submit-button");
console.log(submitButton);
submitButton.addEventListener("click", addBook);

//function to add a new book when submit is clicked
function addBook(e) {
    //getting values from inputs
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author").value;
    let status = document.getElementById("read-unread").value;

    //using the constructor to add a new Book in localstorage
    let newBook = new Book(title, author, status, localStorage.length);
    localStorage.setItem(localStorage.length, JSON.stringify(newBook));

    //reloads the page so that all books can be loaded on the page
    window.location.reload();

}

//iterating through all books that are stored in localstorage
for (let i=0; i<localStorage.length; i++) {

    //getting values from props in localstorage
    let currentBook = JSON.parse(localStorage[i]);
    let title = currentBook.title;
    let author = currentBook.author;
    let status = currentBook.status;
    let id = currentBook.id;
    console.log(currentBook);

    //creating html elements for the books
    let bookE = document.createElement("div");
    bookE.classList.add("book");
    bookE.setAttribute("id", "book-"+id);
    let bookListE = document.getElementById("book-list");
    bookListE.appendChild(bookE);

    //adding containers for each book detail
    //title, author, status, delete
    let bookTitleContainerE = document.createElement("div");
    let bookAuthorContainerE = document.createElement("div");
    let bookStatusContainerE = document.createElement("div");
    let bookDeleteContainerE = document.createElement("div");

    //adding classes for css styling on containers
    bookTitleContainerE.classList.add("book-detail");
    bookAuthorContainerE.classList.add("book-detail");
    bookStatusContainerE.classList.add("book-detail");
    bookDeleteContainerE.classList.add("book-detail");

    //adding the containers on the page
    bookE.appendChild(bookTitleContainerE);
    bookE.appendChild(bookAuthorContainerE);
    bookE.appendChild(bookStatusContainerE);
    bookE.appendChild(bookDeleteContainerE);

    //adding title, author, status, delete in the containers
    let bookTitleE = document.createElement("p");
    bookTitleE.innerHTML = title;
    let bookAuthorE = document.createElement("p");
    bookAuthorE.innerHTML = author;
    let bookStatusE = document.createElement("button");
    bookStatusE.innerHTML = status;
    let bookDeleteE = document.createElement("button");
    bookDeleteE.innerHTML = "delete"
    bookTitleContainerE.appendChild(bookTitleE);
    bookAuthorContainerE.appendChild(bookAuthorE);
    bookStatusContainerE.appendChild(bookStatusE);
    bookDeleteContainerE.appendChild(bookDeleteE);
    



}