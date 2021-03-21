/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE
var kittenArray = Object.keys(kitten);
kittenArray.map((i)=>console.log(i));
