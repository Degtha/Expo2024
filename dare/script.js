const OK = "ok";

// MOVE TEXT
const moveText = document.querySelector(".move_text h1");
document.addEventListener("scroll", function(){
  var scroll = window.pageYOffset
  var innerHeight = window.innerHeight
  var currentScroll = scroll/innerHeight * 100
  moveText.style.transform = "translateX("+currentScroll * 1.5+"%)"
})
// END MOVE TEXT

// NAVBAR
const nav = document.querySelector("nav")
document.addEventListener("scroll", function(){
  if(!nav.classList.contains("must")){
    var scroll = window.pageYOffset
    var innerHeight = window.innerHeight
    if(scroll >= innerHeight ){
      nav.classList.add("nav_white");
    }else{
      nav.classList.remove("nav_white")
    }
  }
})
const ham = document.querySelector(".ham")
const mobileNav = document.querySelector(".mobile_nav")
ham.addEventListener("click", function(){
  mobileNav.style.transform ="translateX(0%)"
})
mobileNav.addEventListener("click", function(){
  mobileNav.style.transform ="translateX(100%)"
})
// END NAVBAR

const kartu = document.querySelectorAll(".kartu")[0];
const lebarKartu = kartu.offsetWidth;
document.addEventListener("click", function(e){
  var btn = e.target
  if(btn.classList.contains("right")){
    btn.parentElement.previousElementSibling.scrollLeft += lebarKartu + 24
  }else if(btn.classList.contains("left")){
    btn.parentElement.previousElementSibling.scrollLeft -= lebarKartu + 24
  }
})




