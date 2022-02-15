const settingsIcon = document.getElementById("settings-icon");
const navList = document.getElementById("nav-items");
const email = document.getElementById("email");

const toggle = function () {
  navList.classList.toggle("show");
};

settingsIcon.addEventListener("click", toggle);
email.addEventListener("click", () => {
  email.textContent = "cabalidajem@gmail.com";
  email.classList.remove("btn");
});
