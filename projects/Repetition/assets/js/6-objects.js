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

var posts = [
    {
        author: "Author1",
        title: "title1",
        comments: ""
    }, {
        author: "Author2",
        title: "title2",
        comments: ""
    }, {
        author: "Author3",
        title: "title3",
        comments: ""
    }
];
output.innerHTML = posts[1].author;