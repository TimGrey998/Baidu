var type_in = document.querySelector(".type-in");
var search_bar = document.getElementById("search-bar");

type_in.onfocus = function () {
    search_bar.style.borderColor = "rgb(51, 136, 255)";
}
type_in.onblur = function () {
    search_bar.style.borderColor = "rgb(184, 184, 184)";
}