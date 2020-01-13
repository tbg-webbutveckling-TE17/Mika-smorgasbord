var friend1 = "Måns";
var friend2 = "Sten";
var friend3 = "Claerence";
var friend4 = "Mona";

var friends = ["Måns", "Sten", "Claerence", "Mona"];
var prinToScreen = document.getElementById("testArray");
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