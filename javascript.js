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


const bookColors=['#B4B4B8','#55AD9B','#F6F193','#9BB0C1','#D7C0AE',
    '#E6A4B4','#CDFCF6','#FF90BC','#8ACDD7','#537188'];



function appendBook(newTitle,newAuthor,newPages,newRead){
    let newLibraryBook = document.createElement('div');

    let LibraryTitle = document.createElement('div');
    let by = document.createElement('div');
    let LibraryAuthor = document.createElement('div');
    let LibraryPages = document.createElement('div');
    let LibraryRead=document.createElement('div');

    let removeBook= document.createElement('button');
    removeBook.addEventListener('click',()=>{
        library.removeChild(newLibraryBook);
    });

    let randomColor = bookColors[Math.floor(Math.random() * bookColors.length)];
    newLibraryBook.style.backgroundColor = randomColor;


    LibraryTitle.textContent=newTitle;
    by.textContent= 'By';
    LibraryAuthor.textContent=newAuthor;
    LibraryPages.textContent=newPages+' Pages';
    removeBook.textContent='Remove Book';

    if(newRead){
        LibraryRead.textContent='I have read the book';
        LibraryRead.style.color='#45FFCA';
    }else{
        LibraryRead.textContent="I haven't read the book";
        LibraryRead.style.color='#C7253E';
    }
    LibraryRead.style.fontSize='1rem';

    newLibraryBook.appendChild(LibraryTitle);
    newLibraryBook.appendChild(by)
    newLibraryBook.appendChild(LibraryAuthor);
    newLibraryBook.appendChild(LibraryPages);
    newLibraryBook.appendChild(LibraryRead);
    newLibraryBook.appendChild(removeBook);

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



