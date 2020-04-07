function dropDownMenu() {
    document.getElementsByClassName("submenu").classlist.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches(".itemdropbtn")) {
        var dropdowns = document.getElementsByClassName("submenu");
        for (let index = 0; index < dropdowns.length; index++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            } 
            
        }
    }
}