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

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10));
