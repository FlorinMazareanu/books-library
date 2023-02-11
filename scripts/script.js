//book array
let bookList = [];

//construction function for Book

function Book(title, author, status, id) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.id = id;
}

//hardcoded books that are not added with JS localstorage

let testBookOne = new Book("Swag guide", "me", "READ", 0);
let testBookTwo = new Book("Why I am so great", "others", "UNREAD", 1);
let testBookThree = new Book("Third book", "John Doe", "READ", 2);

//onload function to add books
//this will trigger at page load and when a change is made
//(like adding/removing/reading/unreading a book)
//this is done with vanilla JS, so no React tricks here :)
//will use this instead at a change to reload the page:
//window.location.reload();

document.addEventListener("DOMContentLoaded", () => {

    console.log("page loads");

    //event listener for the SUBMIT button, to add a new book
    let submitButton = document.getElementById("submit-button");
    if(submitButton) {
        submitButton.addEventListener("click", addBook);
    }

    //pushing some test books into the bookList[] array
    bookList.push(testBookOne);
    bookList.push(testBookTwo);
    bookList.push(testBookThree);

    //adding test books to localstorage
    localStorage.setItem("0", testBookOne);
    localStorage.setItem("1", testBookTwo);
    localStorage.setItem("2", testBookThree);

    //defining the book list element in JS
    let bookListElement = document.getElementById("book-list");

    //looping through the array of books - bookList[]
    for (let i = 0; i<bookList.length; i ++) {

        //creating an element for a new book and adding the ID/class       
        const bookElement = document.createElement("div");
        let bookElementID = "book-" + (bookList[i].id);
        bookElement.setAttribute("id", bookElementID);
        bookElement.classList.add("book");

        //adding containers for the book   
        const newBookTitleContainer = document.createElement("div");
        const newBookAuthorContainer = document.createElement("div");
        const newBookStatusContainer = document.createElement("div");
        const newBookDeleteContainer = document.createElement("div");

        //adding class to the book containers 
        newBookTitleContainer.classList.add("book-detail");
        newBookAuthorContainer.classList.add("book-detail");
        newBookStatusContainer.classList.add("book-detail");
        newBookDeleteContainer.classList.add("book-detail");

        //creating elements to be added in the containers
        const newBookTitle = document.createElement("p");
        const newBookAuthor = document.createElement("p");
        const newBookStatus = document.createElement("button");
        let readUnreadID = "read-" + bookList[i].id;
        newBookStatus.setAttribute("id", readUnreadID);
        const bookDeleteButton = document.createElement("button");

        //adding elements in containers
        newBookTitleContainer.appendChild(newBookTitle);
        newBookAuthorContainer.appendChild(newBookAuthor);
        newBookStatusContainer.appendChild(newBookStatus);
        newBookDeleteContainer.appendChild(bookDeleteButton);

        //adding data from bookList into the elements
        newBookTitle.innerHTML = bookList[i].title;
        newBookAuthor.innerHTML = bookList[i].author;
        newBookStatus.innerHTML = bookList[i].status;
        bookDeleteButton.innerHTML = "DELETE"

        //adding the book into the book element on the page
        bookListElement.appendChild(bookElement);
        bookElement.appendChild(newBookTitleContainer);
        bookElement.appendChild(newBookAuthorContainer);
        bookElement.appendChild(newBookStatusContainer);
        bookElement.appendChild(newBookDeleteContainer);

        //event listener for reading/unreading a book
        console.log(bookList[i].id);
        document.getElementById(readUnreadID).addEventListener("click", toggleRead);
        console.log(readUnreadID);

    }
})

//function to add a new book in the bookList[] array
let addBook = function(e) {
    console.log("add book");
}

//function to read/unread a book
let toggleRead = function(e) {
    console.log("read/unread");
    console.log(e.target.id);
    let id = e.target.id;
    if (document.getElementById(id).innerHTML == "READ") {
        console.log("is read");
        document.getElementById(id).innerHTML = "UNREAD";
        //gets the id to then change the localstorage
        id = id.match(/\d+/g);
        console.log(bookList[id]);
    }
    else {
        console.log("is not read");
        document.getElementById(id).innerHTML = "READ";
        //gets the id to then change the localstorage
        id = id.match(/\d+/g);
        console.log(bookList[id]);
    }
}