window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

//constructor function for Book
//data will be stored in localstorage
//this constructor is only used to add a book in the addBook function
function Book(title, author, status, id) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.id = id;
}

//event listener on submit to fire up addBook()
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", addBook);

//defining the bookList
let bookList = Object.entries(localStorage);

//function to add a book
//executes when submit is clicked

function addBook(e) {
    //getting values from inputs
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author").value;
    let status = document.getElementById("read-unread").value;

    //maxID is used to generate new IDs to not have repeating IDs
    let maxID = 0;
    // [0, 0, 0] is used to avoid a bug that sets a key to -infinity
    let idArray = [0, 0, 0];
    bookList.forEach((element, index) => {
        idArray.push(element[0]);
    });
    maxID = Math.max(...idArray);

    //setting the id that should be a larger number than maxID
    let id = maxID + 1;
    console.log(id);

    //constructing a new Book and adding it in localstorage
    let newBook = new Book(title, author, status, id);
    localStorage.setItem(id, JSON.stringify(newBook));

    //reloads the page so that all books can be loaded on the page
    window.location.reload();
    
}

//function to delete a Book

function deleteBook(e) {
    let idD = e.target.id;

    //using regex to get the id so it won't be "delete-id"
    let id = idD.match(/\d+/g).join([]);
    console.log(id);

    //removing the key in localstorage
    localStorage.removeItem(id);

    //reloads the page so that all books can be loaded on the page
    window.location.reload();

}

//function to set read/unread in localstorage and on the page
//executes when the status button is clicked

function setStatus(e) {

    let idE = e.target.id;

    //using regex to get the id so it won't be "status-id"
    let id = idE.match(/\d+/g).join([]);

    //getting the current read/unread status of the selected book from localstorage
    //the current status will be stored in a temp
    let temp = JSON.parse(localStorage[id]);  
    let currentStatus = JSON.parse(localStorage[id]).status;

    //if/else for status change
    if (currentStatus == "read") {
        //changing status in temp
        temp.status = "unread";
        //changing status in localstorage
        localStorage.setItem(id, JSON.stringify(temp));       
    }
    else {
        //changing status in temp
        temp.status = "read";
        //changing status in localstorage
        localStorage.setItem(id, JSON.stringify(temp));
    }

    //reloads the page so that all books can be loaded on the page
    window.location.reload();

}

//iterating through all the books in localstorage
bookList.forEach((element, index) => {

    //getting values from props in localstorage
    let title = JSON.parse(element[1]).title;
    let author = JSON.parse(element[1]).author;
    let status = JSON.parse(element[1]).status;
    let id = JSON.parse(element[0]);

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
    bookStatusE.setAttribute("id", "status-" + id);
    let bookDeleteE = document.createElement("button");
    bookDeleteE.innerHTML = "delete"
    bookDeleteE.setAttribute("id", "delete-" + id);
    bookTitleContainerE.appendChild(bookTitleE);
    bookAuthorContainerE.appendChild(bookAuthorE);
    bookStatusContainerE.appendChild(bookStatusE);
    bookDeleteContainerE.appendChild(bookDeleteE);

    //adding event listeners for read/unread and delete
    bookStatusE.addEventListener("click", setStatus);
    bookDeleteE.addEventListener("click", deleteBook);

});