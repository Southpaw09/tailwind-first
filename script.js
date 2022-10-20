const hamburger = document.getElementById("hamburger");
const detailedMenu = document.getElementById("detailedMenu");
const remove = document.getElementById("remove");

hamburger.addEventListener("click", () => {
  detailedMenu.classList.remove("left-[-500vh]");
  detailedMenu.classList.remove("top-[-500vh]");
  detailedMenu.classList.add("top-0.5");
  detailedMenu.classList.add("left-0.5");
});

remove.addEventListener("click", () => {
  detailedMenu.classList.remove("top-0.5");
  detailedMenu.classList.remove("left-0.5");
  detailedMenu.classList.add("left-[-500vh]");
  detailedMenu.classList.add("top-[-500vh]");
});
