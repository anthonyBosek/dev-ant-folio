const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const navItem = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.innerHTML);
  });
}
