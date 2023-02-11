console.log("script");

//book array
let bookList = [];

//construction function for Book

function Book(title, author, status, id) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.id = id;
}

//hardcoded books

let testBookOne = new Book("Swag guide", "me", "read", 0);
let testBookTwo = new Book("Why I am so great", "others", "unread", 1);

//onload function to add hardcoded books

document.addEventListener("DOMContentLoaded", () => {
    bookList.push(testBookOne);
    bookList.push(testBookTwo);
    let bookListElement = document.getElementById("book-list");
    console.log(bookList.length);
    for (let i = 0; i<bookList.length; i ++) {

        const bookElement = document.createElement("div");
        let bookElementID = "book-" + (bookList[i].id);
        bookElement.setAttribute("id", bookElementID);
        bookElement.classList.add("book");
        const newBookTitle = document.createElement("p");
        const newBookAuthor = document.createElement("p");
        const newBookStatus = document.createElement("button");

        newBookTitle.innerHTML = bookList[i].title;
        newBookAuthor.innerHTML = bookList[i].author;
        newBookStatus.innerHTML = bookList[i].status;

        bookListElement.appendChild(bookElement);
        bookElement.appendChild(newBookTitle);
        bookElement.appendChild(newBookAuthor);
        bookElement.appendChild(newBookStatus);
    }
})