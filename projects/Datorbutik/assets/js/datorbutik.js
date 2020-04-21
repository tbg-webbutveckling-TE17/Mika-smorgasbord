function dropDownMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
        if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("submenu");
        for (var index = 0; index < dropdowns.length; index++) {
            var openDropdown = dropdowns[index];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");}}}
}




function addToCart() {
}

