/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
    var Name1 = document.createElement("h1");
    var Job1 = document.createElement("h2");
    Name1.appendChild(document.createTextNode(person.name));
    Job1.appendChild(document.createTextNode(person.job));
    content.appendChild(Name1);
    content.appendChild(Job1);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  document.body.appendChild(document.createElement("ul"));
  let lista = document.querySelector("ul");
  lista.id = "content";
  shopping.forEach(product => {
    var producto = document.createElement("li");
    producto.appendChild(document.createTextNode(product));
    lista.appendChild(producto);
  });


}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

const bookslinks = ['https://m.media-amazon.com/images/I/416Hql52NCL.jpg',
'https://images-na.ssl-images-amazon.com/images/I/51iSxrqL+sL._SX335_BO1,204,203,200_.jpg',
'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg'
 ]
function exerciseThree(books) {
  //Write your code in here
  let lista2 = document.body.appendChild(document.createElement("ul"));
  lista2.id = "lista2";
  lista2.style.display = "flex";
  lista2.style.listStyle= 'none';
  books.forEach(book => {
    var libro = document.createElement("li");
    var titulo = document.createElement('p');
    var imagen = document.createElement('img');
    titulo.appendChild(document.createTextNode(`${book.title} - ${book.author}`));
    imagen.src = bookslinks[books.indexOf(book)];
    imagen.width = "200";
    libro.appendChild(titulo);
    
    libro.appendChild(imagen);
    if(book.alreadyRead){
      libro.style.backgroundColor = "green";
    }else{
      libro.style.backgroundColor = "red";
    }
    libro.style.width = "20%"
    libro.style.margin = "5%"
    libro.style.padding = "5%"
    lista2.appendChild(libro);
  });
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
