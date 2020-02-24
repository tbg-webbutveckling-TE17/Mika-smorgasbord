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

    output.innerHTML += "Author: " + post.author + "<br/> Title: " + post.title +  "<br/> Comment: " + post.comments.join(" --- ") + "<br/><br/>";
    
});
/*
for (let index = 0; index < posts.length; index++) {
    output.innerHTML += "Author: " + posts[index].author + "<br/> Title: " + posts[index].title +"<br/> Comment: " + posts[index].comments;
} */
output.innerHTML = "";
var movies = [
{
    title: "The Shawshank Redemption",
    rating: "9.2",
    hasWatched: false,
},
{ 
    title: "The Godfather",
    rating: "9.1",
    hasWatched: false,
}, 
{
    title: "Star Wars - The Empire Strikes Back",
    rating: "8.7",
    hasWatched: true,
}, 
{
    title: "The Great Dictator",
    rating: "8.4",
    hasWatched: true,
}];

movies.forEach(movie => {
    if(movie.hasWatched === true)
    output.innerHTML += "You have seen " + movie.title + "<br/>" + "With a rating of " + "<b/>" + movie.rating + "/10" + " on IMDb" + "<br/><br/>";
    else 
    output.innerHTML += "You have not seen "+ movie.title + "<br/>" + "With a rating of " + "<b/>" + movie.rating + "/10" + " on IMDb" + "<br/><br/>";
});

output.innerHTML = "";
var count = {
    text: "This is some text",
    add: function(x, y) {
        return x + y;
    },
    rndmNmbr: 32
};


output.innerHTML = count.add(count.rndmNmbr, 5);

output.innerHTML = "";

var btnAddFriend = document.querySelector(".afriend");
var btnRemoveFriend = document.querySelector(".rfriend");

var user = {
    friends: ["Arnold", "Stallone", "Chuck"],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    removeFriend: function() {
        this.friends.pop();
    }
};

btnAddFriend.addEventListener("click", function(){
    user.addFriend(prompt("Insert name of friend"));
} );

btnRemoveFriend.addEventListener("click", removeMyFriend);

function removeMyFriend() {
    user.removeFriend();
};
// Fire Wizard game
// HTML Element Section
var btnDmgTaken = document.getElementsByTagName("button")[0];
var btnManaRefill = document.getElementsByTagName("button")[1];
var btnCastSpell = document.getElementsByTagName("button")[2];
var hpBar = document.querySelector(".hp");
var manaBar = document.querySelector(".mana");
var heroImg = document.querySelector(".heroImg");

var hero = {
    name: "ArneSlayer",
    hp: 100,
    mana: 30,
    dmgTaken: function() {
        if(this.hp <= 50) {
            this.hp = this.hp - 10;
            hpBar.innerHTML = this.hp + " hp is getting low!";   
            heroImg.setAttribute("src", "assets/images/fire-mage/fire-mage-bruised.png");
        } else {
            this.hp = this.hp - 10;
            hpBar.innerHTML = this.hp;
        }
    },
    manaRefill: function() {
        this.mana += 30;
        manaBar.innerHTML = this.mana;
    },
    castSpell: function() {
        this.mana -= 25;
        manaBar.innerHTML = this.mana;
    },
    gameOver: function() {
        if (this.hp <= 0) {
            hpBar.innerHTML = "Game Over";
            heroImg.setAttribute("src", "assets/images/fire-mage/fire-mage-dead.png");
            btnDmgTaken.classList.add("btnGameOver");
        }
    }

}
//Hp and mana bar
hpBar.innerHTML = hero.hp;
manaBar.innerHTML = hero.mana;
btnDmgTaken.addEventListener("click", function() {
    hero.dmgTaken();
    hero.gameOver();
    
});

btnManaRefill.addEventListener("click", function() {
    hero.manaRefill();
    //output.innerHTML += "You Gained 30 Mana!" + "</br>";
});
btnCastSpell.addEventListener("click", function() {
    hero.castSpell();
    //output.innerHTML += "You Cast A Spell!" + "</br>";
});
