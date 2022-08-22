
// Getting Values from Front End
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const tableBody = document.querySelector("#tableData");

// Library Array
let myLibrary = [];

// Event Listener Sumbit  Book
const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
})

// Delete and Change Status Event Listener
const table = document.querySelector("table").addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML == "delete") {
        deleteBook(findBook(myLibrary,currentTarget.innerText));
    }
   if (e.target.classList.contains("status-button")) {
       changeStatus(findBook(myLibrary, currentTarget.innerText));
   }
    render();
})

// Book Function with the Costructor
function Book (title, author, pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
 
 // Function Add Book to Library, call in submit event form 
const addBookToLibrary = () => {
  const newBook = new Book (title.value, author.value, pages.value, status.value);
  myLibrary.push(newBook);
  console.log(myLibrary);
}
// Function change read/not read
const changeStatus = (book) => {
    if (myLibrary[book].status == "read") {
      myLibrary[book].status = "not read";
    } else {
        myLibrary[book].status = "read";
    }
} 
// Function Delete Book
const deleteBook = (currentBook) => {
    myLibrary.splice(currentBook, currentBook + 1);
}
// Function Find Book
const findBook = (myLibrary, title) => {
    for (book of myLibrary) {
        if (book.title === title) {
            return myLibrary.indexOf(book);
        }
    }
}

// Function to Clear Form
const clearForm = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
}

// Function to render in the HTML Table
const render = () => {
    tableBody.innerHTML = "";
    for (book of myLibrary) {
        const htmlBook = `
          <tr>
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.pages}</td>
           <td><button class="btn btn-secondary  status-button">${book.status}</button></td>
           <td><button class="btn btn-secondary delete">delete</td>       
        `;
        tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    }
}




