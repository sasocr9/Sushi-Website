// import AOS from "aos";
// // import "aos/dist/aos.css";

// // init AOS animation
// // AOS.init({
// //   duration: 1000,
// //   offset: 100,
// // });

// the additional code you saw in the video will not be needed :)

let cards = document.querySelectorAll(".popular-foods__card");

cards.forEach(function (i) {
  i.addEventListener("mouseenter", function () {
    i.classList.add("active-card");
  });
  i.addEventListener("mouseleave", function () {
    i.classList.remove("active-card");
  });
});
