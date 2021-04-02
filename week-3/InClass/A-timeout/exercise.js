/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
//Task 1
const colors = ['cyan', 'gray', 'tomato', 'yellow'];
let index = 0;
let background = document.querySelector('body');
setTimeout(function(){
    background.style.backgroundColor = colors[index];
    index++;
}, 5000)
//Task 2
setInterval(function(){
    if(index >= colors.length){
        index = 0;
    }
    background.style.backgroundColor = colors[index];
    index++;
}, 5000)