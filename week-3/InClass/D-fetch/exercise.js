/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/
let latitude = document.querySelector('#latitudTextField');
let longitude = document.querySelector('#longitudTestField');
let getButton = document.querySelector('#submitButton');
let URL = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude.value}&lon=${longitude.value}`;


getButton.addEventListener('click', (event)=>{
    //if(isNaN(latitude.value))
    if(latitude.value == "" || longitude.value == "" || !(isNaN(longitude.value)) || !(isNaN(latitude.value))){
        alert("not valid value");
    }else{
    event.preventDefault()
    fetch(URL).then((Response)=>{
            return Response.json();
    }).then((myJson)=>{
        let message = document.createElement('h3');
        message.appendChild(document.createTextNode(`current temperature ${myJson.main.temp}`));
        document.body.appendChild(message);
    })
}})
console.log(typeof(parseInt(longitude.value, 'dfg')));
console.log((isNaN(longitude.value)));
console.log((isNaN(latitude.value)));
// fetch(URL)
// .then(function(response){
//     console.log(response.status);
//     return response.json();
// }).then(function(myJson){
//     console.log(myJson);
// });