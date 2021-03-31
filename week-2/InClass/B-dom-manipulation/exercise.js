/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//1:
console.log(document.querySelectorAll("p"));
//2: with two options
console.log(document.querySelector("div"));
console.log(document.querySelector(".site-header"));
//3: two optons
console.log(document.querySelector("#jumbotron-text"));
console.log(document.getElementById("jumbotron-text"));
//4:
console.log((document.querySelector(".primary-content")).querySelectorAll("p"));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", theAlert);
function theAlert(){
    alert("Thanks for visiting Bikes for Refugees!");
}
//short version
//document.querySelector("#alertBtn").addEventListener("click", ()=>alert("Thanks for visiting Bikes for Refugees!"));

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBckGrdColor = document.querySelector("#bgrChangeBtn");
// changeBckGrdColor.addEventListener("click", changeColor);
// function changeColor(){
//     document.body.style.backgroundColor ="#B5F7F7";
// }
//short version:
//document.querySelector("#bgrChangeBtn").addEventListener("click", ()=>document.body.style.backgroundColor ="#B5F7F7");
/*

Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", addText);
function addText(){
    var oNode = document.querySelector("#mainArticles");
    var nNode = document.createElement("p");
    var textNode = document.createTextNode("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...");
    nNode.appendChild(textNode);
    oNode.insertBefore(nNode, oNode.firstChild);
    //document.querySelector("#mainArticles").appendChild(node);
}

function addText2(event, texto) {
    event.preventDefault()
    const contenedor = document.querySelector('h2.heading-underline')
    const p = document.createElement('p')
    contenedor.appendChild(p)
    p.innerText = texto
}
// const addSomeTextButton = document.getElementById('addTextBtn')
// addSomeTextButton.addEventListener('click', event => {
//     addText(event, '')
// })

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largLinkBtn = document.querySelector("#largerLinksBtn");
largLinkBtn.addEventListener("click", increaser);
function increaser(){
    let links = document.querySelectorAll("a");
    links.forEach((link)=>{
    let currentSize = Number.parseInt(link.style.fontSize);
    currentSize += 1
    link.style.fontSize = currentSize + 'em'
    }
    )
}

// //function callback
// function increaseLinkSize(event) {
//     event.preventDefault()
//     const allLinks = document.querySelectorAll('a') // return []
//     allLinks.forEach(anchor => {
//         let fontSize = Number.parseInt(anchor.style.fontSize)
//         fontSize += 1
//         anchor.style.fontSize = fontSize + 'em'
//     })
// }
// // 2 obtener el boton
// const largerLinkButton = document.getElementById('largerLinksBtn')
// // 3 agregar el event listener
// largerLinkButton.addEventListener('click', increaseLinkSize)

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addBtn = document.getElementById('addArticleBtn');
const addedText = document.querySelector('.form-control');
console.log(addedText.value);
addBtn.addEventListener('click', (event)=>addText2(event, addedText.value))

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const colors = ['white', 'blue', 'cyan', 'red', 'orange', 'tomato', 'pink'];
changeBckGrdColor.addEventListener('click', ()=>{
    let currentColorIndex = colors.indexOf(document.body.style.backgroundColor);
    currentColorIndex++;
    console.log(currentColorIndex);
    if(currentColorIndex >= colors.length){
        currentColorIndex=0;
    }
    document.body.style.backgroundColor = colors[currentColorIndex]
})
