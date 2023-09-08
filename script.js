const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const navItem = document.getElementsByClassName("nav-item");
const pageList = document.getElementsByClassName("page");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function (e) {
    e.preventDefault();

    const tab = e.target.innerHTML.toLowerCase();

    for (let j = 0; j < pageList.length; j++) {
      if ([...pageList[j].classList].includes(tab)) {
        pageList[j].classList.remove("none");
      } else {
        pageList[j].classList.add("none");
      }
    }
  });
}
