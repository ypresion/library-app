let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};


/**
 * Modal appearing when the user clicks on the button.
 */
        //get all the elements
 const modal = document.getElementById('myModal');
 const btn = document.getElementById('addBook');
 const span = document.getElementsByClassName('close')[0];

        //when user clicks, open modal
btn.onclick = () => {
    modal.style.display = "block";
}

        //when user clicks span, close modal
span.onclick = () => {
    modal.style.display = "none";
}

        //when user clicks outside modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const submitButton = document.getElementById('submitBook');

submitButton.onclick = (event) => {
    event.preventDefault(); 

    let titleBook = document.getElementById('titleBook').value;
    let authorBook = document.getElementById('authorBook').value;
    let pagesBook = document.getElementById('pagesBook').value;
    let ifRead = document.getElementById('ifRead').value;

    if(titleBook=="" || authorBook=="" || pagesBook=="" || ifRead=="") {
        alert("All fields are required!")
    } else {

    let bookNew = new book(titleBook, authorBook, pagesBook, ifRead);
    myLibrary.push(bookNew);

    console.log(...myLibrary);
    render();
    modal.style.display = "none";
    }
}

function render() {

    const currentIndex = myLibrary.length - 1;
    const table = document.getElementById('tableContent');
    
    const row = table.insertRow(currentIndex);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);

    titleCell.textContent = myLibrary[currentIndex].title;
    authorCell.textContent = myLibrary[currentIndex].author;
    pagesCell.textContent = myLibrary[currentIndex].pages;
    readCell.textContent = myLibrary[currentIndex].read;
}    
    /*
    const tableMain = document.createElement("tr");
    tableMain.setAttribute("id", "tableElements")
    table.appendChild(tableMain);

    const titleTable = document.createElement("td");
    const title = document.createTextNode(myLibrary[currentIndex].title);
    titleTable.appendChild(title);
    tableMain.appendChild(titleTable);

    const authorTable = document.createElement("td");
    const author = document.createTextNode(myLibrary[currentIndex].author);
    authorTable.appendChild(author);
    tableMain.appendChild(authorTable);

    const pagesTable = document.createElement("td");
    const pages = document.createTextNode(myLibrary[currentIndex].pages);
    pagesTable.appendChild(pages);
    tableMain.appendChild(pagesTable);

    const readTable = document.createElement("td");
    const read = document.createTextNode(myLibrary[currentIndex].read);
    readTable.appendChild(read);
    tableMain.appendChild(readTable);
    */
   
