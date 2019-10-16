// for använder man när man vet hur många gånger loopen ska köra

// initiering; villkor; inkrementering
//for(var i = 0; i <= 6; i++) {
    // kör koden för varje iteration
//    console.log(i);

//}

//var str = "Hello World!"
//for(var i = 0; i < str.length; i++){
//    console.log(str[i]);


//}
//var myArr = ["html", "css", "javascript", 42, true];
//var len = myArr.length;
//for (var i = 0; i < len; i++) {
//    console.log(myArr[i]);
//}
/*
for (var i = -10; i <= 19; i++) {
    console.log(i);
}
for (var i = 10; i <= 40; i += 2) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
for (var i = 301; i <= 333; i += 2) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (var i = 5; i <= 50; i ++) {
    if (i % 3 == 0 && i % 5 == 0)  {
    console.log(i);
}
}
*//*
var rows = 5;
var cols = 5;
for (var i = 0; i < rows; i++) {
    for (var ii = 0; ii < cols; ii++) {
        document.writeln();
    }
}
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;

}

for (var multiplier = 0; multiplier <= 10; multiplier++) {
    for (var i = 0; i <= 10; i++) {
        var result = multiplier * i;
        document.writeln(multiplier + " * " + i + " = " + result)
    }
    document.writeln("<br/>");
} */
/*var choices = ["Pannkaka", "Tacos", "Fiskpinnar", "Hamburgare"];
for (var i = 0; i < choices.length; i++) {
    document.writeln(" My " + " #" + (i + 1) + " choice is "+ choices[i]);
}
*/
/*
var choices = ["Pannkaka", "Tacos", "Fiskpinnar", "Hamburgare"];
for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceSuffix;

    if(choiceNum == 1) {
        choiceSuffix = "st";
    } else if (choiceNum == 2) {
        choiceSuffix = "nd";
    } else if (choiceNum == 3) {
        choiceSuffix = "rd";
    } else {
        choiceSuffix = "th";
    }
    document.writeln(" My " + choiceNum + choiceSuffix + " choice is "+ choices[i]);
} */

/*
for (var i = 10; i >= 0; i--) {
    for (var ii = 0; ii <= i; ii++){
        document.write("* ");
    }
    document.write("<br />");
}*/

/*for (var i = 10; i >= 0; i--) {
    for (var ii = 10; ii >= i; ii--){
        document.write("* ");
    }
    document.write("<br />");
}*/
var rows = 15;
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= rows - i; j++) {
        document.write("&nbsp;");
    }
    for (var k = 1; k <= i; k++) {
        document.write('* ');
    }
    document.write("<br />");
}