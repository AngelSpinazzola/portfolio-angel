// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// script slider projects

$(document).ready(function(){
  $('.project-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true // Habilita las flechas
  });
});

// Selector para el botón de tema
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

// Verifica si hay una preferencia guardada
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

// Función para cambiar el tema
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Cambia el ícono según el modo
  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});