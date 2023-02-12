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
submitButton.addEventListener("click", addBook);

//defining the bookList
let bookList = Object.entries(localStorage);

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
        console.log(element[0]);
        idArray.push(element[0]);
    });
    console.log("idArray:");
    console.log(idArray);
    maxID = Math.max(...idArray);
    console.log("max id is now: " + maxID);

    //setting the id that should be a larger number than maxID
    let id = maxID + 1;
    console.log(id);

    //constructing a new Book and adding it in localstorage
    let newBook = new Book(title, author, status, id);
    console.log("newBook:");
    console.log(newBook);
    localStorage.setItem(id, JSON.stringify(newBook));

    //reloads the page so that all books can be loaded on the page
    window.location.reload();
    
}

bookList.forEach((element, index) => {
    console.log("-------------------");
    console.log(element);

    console.log(JSON.parse(element[1]));
    console.log(JSON.parse(element[1]).id);

    //getting values from props in localstorage
    let title = JSON.parse(element[1]).title;
    let author = JSON.parse(element[1]).author;
    let status = JSON.parse(element[1]).status;
    let id = JSON.parse(element[1]).id;

    console.log(title + " " + author + " " + status + " " + id);

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
    bookStatusE.setAttribute("id", "status-"+id);
    let bookDeleteE = document.createElement("button");
    bookDeleteE.innerHTML = "delete"
    bookDeleteE.setAttribute("id", "delete-"+id);
    bookTitleContainerE.appendChild(bookTitleE);
    bookAuthorContainerE.appendChild(bookAuthorE);
    bookStatusContainerE.appendChild(bookStatusE);
    bookDeleteContainerE.appendChild(bookDeleteE);

});