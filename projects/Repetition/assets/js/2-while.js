//Ask the user "Are we there yet"
var answer = prompt("Are we there yet?");
//Keep asking again and again until they enter "Yes" or "Yeah"
//while(answer != "yes" && answer != "yeah" ) {
//    var answer = prompt("Are we there yet?");
//}
while( answer.toLowerCase().indexOf("ye") == -1) {
    var answer = prompt("Are we there yet?");
}
//Then, alert "yay, we finally made it!"
alert("Yeah, we finally made it!");
