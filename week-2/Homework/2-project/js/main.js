const blueButton = document.getElementById("blueBtn");
const orangeButton = document.getElementById("orangeBtn");
const greenButton = document.getElementById("greenBtn");


const jumbotron = document.querySelector('div.jumbotron');
const donateABike = document.querySelector('div.jumbotron .btn-primary');
const Volunteer = document.querySelector('div.jumbotron .btn-secondary');
blueButton.addEventListener("click", ()=>{
    jumbotron.style.backgroundColor = `#588fbd`;
    donateABike.style.backgroundColor = `#ffa500`;
    Volunteer.style.backgroundColor = `black`
    Volunteer.style.color = `white`

})
orangeButton.addEventListener("click", ()=>{
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donateABike.style.backgroundColor = `#5751fd`;
    Volunteer.style.backgroundColor = `#31b0d5`;
    Volunteer.style.color = `white`;
})
greenButton.addEventListener("click",()=>{
    jumbotron.style.backgroundColor = `#87ca8a`;
    donateABike.style.backgroundColor = `black`;
    Volunteer.style.backgroundColor = `#8c9c08`;
})
const emailField = document.getElementById(`exampleInputEmail1`);
const nameField = document.getElementById(`example-text-input`);
const descriptionField = document.getElementById(`exampleTextarea`);
const submitButton = document.querySelector(`form .btn-primary`);
submitButton.addEventListener("click", ()=>{
    let allValid= true;
    if(emailField.value.length == 0 || !(emailField.value.includes(`@`))){
        emailField.style.backgroundColor = `red`;
        allValid = false;
    }
    if(nameField.value.length == 0){
        nameField.style.backgroundColor = `red`;
        allValid = false;
    }
    if(descriptionField.value.length == 0){
        descriptionField.style.backgroundColor = `red`;
        allValid = false;
    }
    if(allValid){
        alert(`thank you for filling out the form`);
        emailField.value = "";
        nameField.value = "";
        descriptionField.value = "";
    }
})