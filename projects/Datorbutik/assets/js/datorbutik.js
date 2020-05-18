


var cart = document.querySelector(".cartBtn");
var item = document.querySelector(".item");
var itemBtn = document.querySelectorAll(".itemBtn");
var itemCost = document.querySelector(".itemCost");
var products = {
    index0: {
        name: "name",
        cost: 50    
    },
    index2: {
        name: "name",
        cost: 50
    },
    index3: {
        name: "name",
        cost: 50
    }
};
for (let index = 0; index < itemBtn.length; index++) {
    itemBtn[index].addEventListener("click", function() {
        if (itemBtn[index] == 0) {
          name = 10;
        } 
            item.innerHTML = products.name;
            itemCost.innerHTML = products.cost + parseInt(itemCost.innerHTML) + "kr";
        })};





