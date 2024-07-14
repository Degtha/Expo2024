// HamburgerMenu

const toggleButton = document.querySelector(".toggle_button");
const toggleButtonIcon = document.querySelector(".toggle_button i");
const hamburgerMenu = document.querySelector(".hamburger_menu");


toggleButton.onclick = function () {
  hamburgerMenu.classList.toggle("open");
  const isOpen = hamburgerMenu.classList.contains("open");

  toggleButtonIcon.classList = isOpen
    ? 'bx bx-x'
    : 'bx bx-menu'
};

window.onload = function () {
  document.querySelector(".loading").style.transform = "translateY(-100%)"
  document.querySelector(".loading").style.backgroundColor = "transparent"
}

// Movetext
const moveText = document.querySelector(".move_text h1");
document.addEventListener("scroll", function () {
  var scroll = window.pageYOffset
  var innerHeight = window.innerHeight
  var currentScroll = scroll / innerHeight * 80
  moveText.style.transform = "translateX(" + currentScroll * 0.8 + "%)"
})