var prinToScreen = document.getElementById("testArray");
var friend1 = "Måns";
var friend2 = "Sten";
var friend3 = "Claerence";
var friend4 = "Mona";

var friends = ["Måns", "Sten", "Claerence", "Mona"];
prinToScreen.innerHTML = friends[1];

function newName() {
    friends[1] = "Patrik";
}

var colors = [];
var colors = new Array();
var randomArray = ["Hej", 21, false, true, {} ];
prinToScreen.innerHTML = randomArray.length;

colors = ["red", "green", "blue"];
prinToScreen.innerHTML = colors.join(" <br /> ");

colors.pop();
prinToScreen.innerHTML = colors.join(" <br /> ");

colors.push("purple");
prinToScreen.innerHTML = colors.join(" <br /> ");

colors.unshift("yellow");
prinToScreen.innerHTML = colors.join(" <br /> ");

colors.shift();
prinToScreen.innerHTML = colors.join(" <br /> ");

var colorGreen = colors.slice(1,3);
prinToScreen.innerHTML = colorGreen.join(" <br /> ");

var colorsCopy = colors.slice(colors);
prinToScreen.innerHTML = colorsCopy.join(" <br /> ");

prinToScreen.innerHTML = colors.indexOf("yellow");
prinToScreen.innerHTML = colors.indexOf("blue");

var cars = ["Audi A6", "Volvo 940", "Ford Mondeo", "Ferrari", "Landa", "Lada", "Citroën"];
for (let index = 0; index < cars.length; index++) {
    prinToScreen.innerHTML += cars[index] + "<br />";
    
}
prinToScreen.innerHTML = cars.reverse();

var countries = ["Sweden", "Denmark", "Norway", "Finland", "Island"]
countries.forEach(function(country){ 
    prinToScreen.innerHTML += country + "<br />";
});


var planets = ["earth", "mars", "saturnus", "jupiter"];
planets.forEach(function(planet){
    prinToScreen.innerHTML += planet + " - ";


});
prinToScreen.innerHTML = "";
var number = [1, 32, 44, 112, 3, 5, 6, 9, 12];
var color = ["red", "green", "blue", "yellow"];
for (let index = 0; index < number.length; index++) {
    if(number[index] % 3 === 0) {
        prinToScreen.innerHTML += number[index] + " ";
    }
    
}
prinToScreen.innerHTML = "";
var exampleArray = [1, 2, 3, 4, 5, 6, 7];
function printReverse(exampleArray) {
    for (let index = exampleArray.length -1; index >= 0; index--) {
        prinToScreen.innerHTML += exampleArray[index] + "";
    }
}
printReverse(exampleArray);


prinToScreen.innerHTML = "";
function isIdentical(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] != array[0]){
            return false;
        }
        

        
    }
    return true;
}
isIdentical([1, 1, 1, 1, 1]);
isIdentical([1, 2, 3, 1, 1]);

function sumArray(array) {
    var summa = 0;
    /*for (let index = 0; index < array.length; index++) {
        summa = array[index] + summa;
    }
    */
   array.forEach(function(value) {
       summa = value + summa;
   });
    return summa;
}
sumArray([ 1, 2, 3, 4, 5]);
function max(array) {
    var maxValue = array[0];
    array.forEach(function(value) {
        if (maxValue < value) {
            maxValue = value;
        }});
    return maxValue;
}

max([2, 1, 23, 54, 4, 12]);

