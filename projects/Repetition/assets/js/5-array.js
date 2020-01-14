/*
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
*/
var prinToScreen = document.getElementById("testArray");


var countries = ["Sweden", "Denmark", "Norway", "Finland", "Island"]
countries.forEach(function(country){ 
    prinToScreen.innerHTML += country + "<br />";
})
