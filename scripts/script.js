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

}