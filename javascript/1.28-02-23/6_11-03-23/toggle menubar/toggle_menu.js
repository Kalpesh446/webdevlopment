let toggle_btn = document.querySelector(".toggle-btn");
let nav = document.querySelector(".nav");
let close_btn = document.querySelector(".close-btn");

toggle_btn.addEventListener("click", function () {
  nav.classList.add("nav-show");
});

close_btn.addEventListener("click", function () {
  nav.classList.remove("nav-show");
});
