const menuIcon = document.getElementById("menu");
const detailedMenu = document.getElementById("detailedMenu");

menuIcon.addEventListener("click", () => {
  detailedMenu.classList.toggle("hidden");
});
