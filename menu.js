const menu = document.querySelector("#menu");
const listNav = document.querySelector(".list-nav");

menu.addEventListener("click", () => {
  listNav.classList.toggle("hidden");
});