// alert("Pop-up-ruta")

var myName = "Mika"; //Datatyp: String
var myAge = 18; //Datatyp: Number
var isEvil = false; //Datatyp: Boolean

// Single line comment
/*
    ************
    Block comment
    ************
*/

/*
    ------------- 
        if/else
    -------------
*/

if(myAge < 18) {
    //alert("You can not take a drivers license.")
} else {
    //alert("Congratz! You are old enough to drive.")
}

if(myName == "Mika") {
    //alert("Welcome, " + myName);
} else {
    //alert("You are not welcome here!")
}

// == Equals to, === equal to and same datatype.
if(myAge === "18") { 
    //alert("Welcome");
} else {
    //alert("Not welcome");
}

var hasWatched = false; // add to watchlist

if(isEvil == true) {
    //alert("You are Evil!");
} else {
    //alert("You are Nice!");
}

/* 
    *****************
       Guessing app
    *****************
*/

var secretNumber = 7;
var userInput = Number(prompt("Guess a number between 0 - 10"));

if(userInput === secretNumber) {
    document.writeln("Congratulations! You guessed right : <br>");
}
else if(userInput === 6 || userInput === 8 ) {
    document.writeln("It burns!");
}
else if(userInput > secretNumber) {
    document.writeln("You guessed too high");
}
else {
    document.writeln("You guessed too low");
}

