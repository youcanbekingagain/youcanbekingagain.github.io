const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav_elements")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
