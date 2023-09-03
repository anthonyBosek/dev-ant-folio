const modeToggle = document.getElementById("modeToggle");
const nav = document.getElementsByTagName("nav");
const text = document.getElementsByClassName("text");
modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  nav[0].classList.toggle("dark");
  for (let i = 0; i < text.length; i++) {
    text[i].classList.toggle("dark");
  }
});
