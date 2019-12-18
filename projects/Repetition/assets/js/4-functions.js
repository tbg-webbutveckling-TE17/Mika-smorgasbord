/*
function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där!");
    console.log("Hur jag undrar var du är...")
}

twinkleTwinkle(); //Call a function

// Declare a function with two parameters
function multiply(num, num2) {
    console.log(num * num2);
}

// Call the function with two arguments
 multiply(5, 6)

 function sayHello(theName) {
     console.log("Hello!, " + theName);
 }
sayHello("Jens");
sayHello("Jens");


function getArea(width, height) {
    console.log("The area of; " + width + "cm and " + height + "cm is " + width * height + "cm");
}
getArea(5, 10);
getArea(4, 7.4);


function toSquare(x) {
    return x * x;
}
// return a value
console.log("4 squared is: " + toSquare(4));
console.log("8 squared is: " + toSquare(8));

var result = toSquare(2.5);
console.log(result);

function quadrupleMe(x) {
    return 4 * x;
}
var myFavNumber = quadrupleMe(2);
console.log(myFavNumber);
*/
/*
function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(2413));


function KebabToSnake(myStr) {
    console.log(myStr);
    var newStr = myStr.replace(/-/g, "_");
    return newStr
}
console.log(KebabToSnake("This-is-Kebab-cased-string"));


function localScope() {
    var showScope = 31;
    console.log(showScope);
}
localScope();
console.log(showScope);

var showScope = "I'm a global variable";
console.log(showScope);


var showGlobalVar = 99; //Global variable
function globalScope() {
   showGlobalVar = 100;
   console.log(showGlobalVar);

}
console.log(showGlobalVar);
globalScope();
console.log(showGlobalVar);

function hi() {
    var name = "namn";
    console.log(name);
}
hi();
function bye() {
    console.log(name);
}
bye();


// Named function
function sing() {
    console.log("Im singing in the rain");
    console.log("Just singing in the rain");
    console.log("What a glorius feeling!");
}
//Higher order function
setInterval(sing, 500,);
clearInterval(1);
setInterval(sing, 2000);
clearInterval(2);

var intervalExample = setInterval(sing, 2000);
clearInterval(intervalExample);

//Anonomous function
var anon = setInterval(function(){
    console.log("I'm an anonomous function")
}, 1500);

clearInterval(anon);

function myTimer() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById("timeOutput").innerHTML = time;
}

myTimer();

var myTime = setInterval(myTimer, 1000);

var stopBtn = document.getElementsByTagName("button")[0];
stopBtn.addEventListener("mouseenter", function() {
    clearInterval(myTime);
    alert("Time is stopped!");
});

stopBtn.addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000);
})
*/


function tellFortune(jobTitle, geoLog, partner, kids) {
    var fortune = "You will be a " + jobTitle + " in " + geoLog + " and married to " + partner + " with " + kids + " kids";
    var printout = document.getElementsByClassName("tellfortune")[0];
    printout.innerHTML = fortune;
}
var jobArray = ["Dentist", "Police", "Teacher", "Baker", "Farmer"];
var geoArray = ["Sweden", "Denmark", "Russia", "Netherlands", "USA"];
var partnerArray = ["Anna", "Eva", "Maria", "Karin", "Kristina"];
var kidsArray = [1, 3, 0, 5, 2];

var randomize = document.getElementsByTagName("button")[1];
randomize.addEventListener("click", function() {
    var rndJob = Math.floor(Math.random() * jobArray.length);
    var rndGeolog = Math.floor(Math.random() * geoArray.length);
    var rndPartner= Math.floor(Math.random() * partnerArray.length);
    var rndKids = Math.floor(Math.random() * kidsArray.length);
    tellFortune(jobArray[rndJob], geoArray[rndGeolog], partnerArray[rndPartner], kidsArray[rndKids]);
});


/*
function dogyearCalculator() {
    var num = 7;
    var humanYears = prompt("How old is your dog?");
    var dogYears = num * humanYears;
    
    alert("Your dog is " + dogYears + " in dog years!");
}

dogyearCalculator();

function calculateSupply(age, amountPerDay) {
    var maxAge = 100;
    var consumed = amountPerDay * maxAge - age;
    alert("You will need " + consumed + " potatoes per day to last you until the ripe age of " + maxAge);
}
var age = prompt("How old are you?")
var amountPerDay = prompt(Math.round(Number()));
calculateSupply(age, amountPerDay);
*/



document.addEventListener("keypress", function(e){
    var myGuess = e.key;
    document.getElementById("demo").innerHTML += myGuess;
    var rndReward = Math.round(Math.random() * 1000);
    console.log(rndReward);
    for (let i = 0; i <= theWord.length; i++) {
        if (myGuess == theWord[i])
        {
            guessedWord[i] = myGuess;
            document.getElementById("guessedLetters").innerHTML = guessedWord;
            storedReward = storedReward + rndReward;
        } else if(theWord.includes(myGuess) == false) {
            
        }
        
    }
    if (guessedWord.includes("_") == false) {
        wins++;
        guessedWord = ["_", "_", "_", "_", "_"];
        guessesLeft = 10;
        reward = reward + storedReward;
        storedReward = 0;
    }
    guessesLeft--
    document.getElementById("guessesLeft").innerHTML = "Du har " + guessesLeft + " gissningar kvar!";
    if (guessesLeft == 0) {
     losses++;
    guessesLeft = 10;
    guessedWord = ["_", "_", "_", "_", "_"];
    storedReward = 0;
    }
    



    
    document.getElementById("reward").innerHTML = "Ditt belöningsbelopp är: " + reward + "$";
    document.getElementById("wins").innerHTML = "Du har vunnit: " + wins;
    document.getElementById("losses").innerHTML = "Du har förlorat: " + losses;
});
var storedReward = 0;
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var reward = 0;
var theWord = ["h", "e", "l", "l", "o"];
var guessedWord = ["_", "_", "_", "_", "_"];