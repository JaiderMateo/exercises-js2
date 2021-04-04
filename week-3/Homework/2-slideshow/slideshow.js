// Write your code here

//images
const images = [
    "https://i.pinimg.com/474x/04/1f/1c/041f1c088c2d6873eb4e01834cd4178e.jpg",
    "https://i.pinimg.com/originals/0e/35/a9/0e35a987c4bee79b2ee451feaf039af7.png",
    'https://images.wallpaperscraft.com/image/city_night_panorama_117682_300x300.jpg',
    'https://images.wallpaperscraft.com/image/road_marking_bridge_123398_300x300.jpg',
    'https://papers.co/wp-content/uploads/papers.co-mn59-city-tokyo-nature-night-photo-1-wallpaper-300x300.jpg',
    'https://static.dezeen.com/uploads/2019/08/pelli-clarke-pelli-japan-tallest-skyscraper-tokyo_dezeen_2364_sq_0-300x300.jpg',
    'https://images.wallpaperscraft.com/image/night_city_aerial_view_city_lights_129810_300x300.jpg',
    'http://www-2.rotman.utoronto.ca/mpi/wp-content/uploads/2015/10/Feature_Rise-of-the-Global-Startup-City_Perfect-Lazybones-300x300.jpg'
];

//selector of buttons
const forwardBtn = document.querySelector('#forwardBtn');
const backBtn = document.querySelector('#backBtn');
const autoForwardBtn = document.querySelector('#autoForwardBtn');
const autoBackBtn = document.querySelector('#autoBackBtn');
const stopBtn = document.querySelector('#stopBtn');

//selector image
let image = document.querySelector('#image');
//position in images
let index = 0;

//intervals
let backInterval = -1;
let forwardInterval = -1;

//Buttons
forwardBtn.addEventListener("click",funForward);
backBtn.addEventListener("click", funBack);
autoBackBtn.addEventListener("click", ()=>{
    stopIntervals()
    backInterval = setInterval(()=>funBack() , 1000);
});
autoForwardBtn.addEventListener('click', ()=>{
    stopIntervals()
    forwardInterval = setInterval(()=>funForward() , 1000);
});
stopBtn.addEventListener('click', stopIntervals);
function stopIntervals(){
    clearInterval(backInterval);
    clearInterval(forwardInterval);
}

//functions to change slide
function funForward(){
    if(index == images.length -1){index = -1;}
    index++;
    image.src = images[index];
    console.log(index, images[index])
}

function funBack(){
    if(index <= 0){index = images.length - 1;}
    index--;
    image.src = images[index];
    console.log(index, images[index])
}