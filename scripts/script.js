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
    console.log("index");
    console.log(index);
    console.log("element");
    console.log(element);
});