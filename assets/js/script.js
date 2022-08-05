window.onload = function() {
let hamburguer = document.querySelector(".menu-mobile")
let navMenu = document.querySelector("nav ul")

hamburguer.addEventListener("click", () => {
hamburguer.classList.toggle("active")
navMenu.classList.toggle("active")
})
}

