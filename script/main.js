// navbar change styles on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scrollPosition = this.window.scrollY;

  if (scrollPosition >= 50) {
    nav.classList.add("fade-scroll");
  } else {
    nav.classList.remove("fade-scroll");
  }
});
