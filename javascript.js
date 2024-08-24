//remove book
//read toggle

const add = document.querySelector('.add');
const dialog = document.querySelector('dialog');
const closeModal = document.querySelector('.closeModal');
const newBook = document.querySelector('#new-book'); //form
const submit  = document.querySelector('.submit');
const library=document.querySelector('.library');

//form data
let newTitle = document.querySelector('form>#title');
let newAuthor = document.querySelector('form>#author');
let newPages = document.querySelector('form>#pages');
let newRead= document.querySelector('form #read');



function appendBook(newTitle,newAuthor,newPages,newRead){
    let newLibraryBook = document.createElement('div');

    let LibraryTitle = document.createElement('div');
    let by = document.createElement('div');
    let LibraryAuthor = document.createElement('div');
    let LibraryPages = document.createElement('div');

    LibraryTitle.textContent=newTitle;
    by.textContent= 'By';
    LibraryAuthor.textContent=newAuthor;
    LibraryPages.textContent=newPages+' Pages';

    newLibraryBook.appendChild(LibraryTitle);
    newLibraryBook.appendChild(by)
    newLibraryBook.appendChild(LibraryAuthor);
    newLibraryBook.appendChild(LibraryPages);

    library.appendChild(newLibraryBook);
}


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

const myLibrary= [];

add.addEventListener('click', () => {
    dialog.showModal();
});

closeModal.addEventListener('click', () => {
    dialog.close();
});


newBook.addEventListener('submit',(e)=>{
    e.preventDefault();

    if (!newBook.checkValidity()) {
        return;
    }

    let newTitleVal=newTitle.value;
    let newAuthorVal=newAuthor.value;
    let newPagesVal=newPages.value;
    let newReadVal=newRead.checked;


    addBookToLibrary(newTitleVal,newAuthorVal,newPagesVal,newReadVal);

    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';
    newRead.checked = false;

    dialog.close();
});

function addBookToLibrary(newTitle,newAuthor,newPages,newRead){
    let newBook = new Book(newTitle,newAuthor,newPages,newRead);
    myLibrary.push(newBook);
    appendBook(newTitle,newAuthor,newPages,newRead);
}



