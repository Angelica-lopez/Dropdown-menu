var menu = document.querySelector(".js-menu");
var desplegable = document.querySelector(".js-desplegable");


menu.addEventListener('mouseenter', function() {
    desplegable.style.display = "flex";
})

desplegable.addEventListener('mouseleave', function() {
    desplegable.style.display = "none";
});