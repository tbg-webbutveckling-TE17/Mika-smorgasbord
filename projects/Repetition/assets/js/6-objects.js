var output = document.querySelector("body > p");
var person = ["Sid", 31, "EagleSheildBay"];

output.innerHTML = person[2];

var person = ["Sid", "EagleSheildBay", 31];

output.innerHTML = person[2];

var persona = {
    name: "Sid", // key/value pair
    age: 41,
    hometown: "Heresneezedduck"
};


persona.hometown = "Buy a harbour"
output.innerHTML = persona.name + " lives in " + persona.hometown;


var oddNums = {};
oddNums.number = 1;
oddNums.str = "one";
oddNums.isOdd = true;

output.innerHTML = oddNums.isOdd;
//most common
var dog = {
    name: "Doggo",
    breed: "Golden",
    age: 3,
    isFriendly: true
};

var cat = new Object();
(cat.name = "Smile"), (cat.age = 3);

var junkObject = {
    name: "junk",
    age: 33,
    color: "Space gray",
    isEvil: false,
    friends: ["Daruk", "Revali", "Urbosa"],
    pet: {
        name: "Charle",
        species: "Pig",
        age: 9
    }
};

output.innerHTML = junkObject.pet.species;
output.innerHTML = "";
var posts = [
    {
        author: "Author1",
        title: "Title1",
        comments: ["Comment1"]
    }, {
        author: "Author2",
        title: "Title2",
        comments: ["Comment2"]
    }, {
        author: "Author3",
        title: "Title3",
        comments: ["Comment3"]
    }
];

posts.forEach(post => {

    output.innerHTML += "Author: " + post.author + "<br/> Title: " + post.title +  "<br/> Comment: " + post.comments + "<br/><br/>";
    
});
/*for (let index = 0; index < posts.length; index++) {
    output.innerHTML += "Author: " + posts[index].author + "<br/> Title: " + posts[index].title +"<br/> Comment: " + posts[index].comments;
} */
