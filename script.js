console.log("developer_ant is connected!!");
// logic to implement light and dark mode toggle
let theme = "light";
const modeSelect = document.getElementById("mode");
modeSelect.addEventListener("click", function () {
  if (theme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }

  const elements = document.getElementsByClassName(theme);
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    // elements[i].classList.remove(theme);
    // elements[i].classList.replace(theme, newTheme);
  }

  if (theme === "light") {
    theme = "dark";
  } else {
    theme = "light";
  }
  console.log(theme);
});
