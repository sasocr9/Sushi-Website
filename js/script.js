// Import AOS library and styles
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animations
AOS.init({
  duration: 1000,
  offset: 100,
});

// Select all elements with the class 'popular-foods__card'
let cards = document.querySelectorAll(".popular-foods__card");

// Add event listeners to each card for mouse enter and leave events
cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    card.classList.add("active-card");
  });
  card.addEventListener("mouseleave", function () {
    card.classList.remove("active-card");
  });
});
