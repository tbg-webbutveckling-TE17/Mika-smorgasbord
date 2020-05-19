


var cart = document.querySelector(".cartBtn");
var item = document.querySelector(".item");
var itemBtn = document.querySelectorAll(".itemBtn");
var totalCost = document.querySelector(".totalCost");
var products = {
    index0: {
        name: "name",
        cost: 125    
    },
    index1: {
        name: "name",
        cost: 250
    },
    index2: {
        name: "name",
        cost: 150
    }
};
for (var index = 0; index < itemBtn.length; index++) {
    itemBtn[index].addEventListener("click", function() {
        
        if (this == itemBtn[0]) {
            item.innerHTML = products.index0.name;
            totalCost.innerHTML = products.index0.cost + parseInt(totalCost.innerHTML) + "kr";
        }
        else if (this == itemBtn[1]) {
            item.innerHTML = products.index1.name;
            totalCost.innerHTML = products.index1.cost + parseInt(totalCost.innerHTML) + "kr";
          }
        else {
            item.innerHTML = products.index2.name;
            totalCost.innerHTML = products.index2.cost + parseInt(totalCost.innerHTML) + "kr";
        }
    })};





