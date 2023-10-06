let settingMenu = document.querySelector(".setting");
let darkmode = document.getElementById("dark-btn");
function settingMenuBar() {
  settingMenu.classList.toggle("settingMenuHeight");
}
darkmode.onclick = function () {
  darkmode.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") === "light") {
  darkmode.classList.remove("dark-btn-on");
  darkmode.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") === "dark") {
  darkmode.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
