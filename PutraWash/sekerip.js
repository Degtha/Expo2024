const jumbotron = document.querySelector(".jumbotron");
const allTextPage1 = document.querySelectorAll(".txt");
const buttonOrderPage1 = document.querySelector("button.goToOrderHide");
const showDown = document.querySelector(".scrollBottomSvg-hide");
function showPage1(){
  // show cover jumbotron
  setInterval(function(){
    jumbotron.classList.add("page-start");
  },1000);
  // show text paling atas
  setInterval(function(){
    allTextPage1[0].classList.replace("txt", "txt-show");
  },2000);
  // show text deskripsi
  setInterval(function(){
    allTextPage1[1].classList.replace("txt", "txt-show");
  },2450);
  // show button order
  setInterval(function(){
    buttonOrderPage1.classList.replace("goToOrderHide", "goToOrderShow");
  },3050);
}

const aboutTittle = document.querySelector(".big-title");
const allTextPage2 = document.querySelectorAll(".text-desk h2 span");
window.addEventListener("scroll", function(e){
  const scrollPoint = this.scrollY;
  console.log(scrollPoint);
  if (scrollPoint >= 300){
    aboutTittle.classList.replace("hide", "show");
    setInterval(function(){
      const textSpan = document.querySelectorAll(".big-title h1 span");
      textSpan[0].classList.replace("back-hide", "back-show");
    }, 500)
  }
  const aboutText = document.querySelectorAll(".text-desk");
  const aboutImg = document.querySelectorAll(".img-desk");
  if (scrollPoint >= 400){
    aboutText[0].classList.replace("hide-left", "show-mid");
    aboutImg[0].classList.replace("hide-right", "show-mid");
    setInterval(function(){
      allTextPage2[0].classList.add("show-desk");
    },700);
  }
  if (scrollPoint >= 700){
    aboutText[1].classList.replace("hide-left", "show-mid");
    aboutImg[1].classList.replace("hide-right", "show-mid");
    setInterval(function(){
      allTextPage2[1].classList.add("show-desk");
    },700);
  }
  if (scrollPoint >= 900){
    aboutText[2].classList.replace("hide-left", "show-mid");
    aboutImg[2].classList.replace("hide-right", "show-mid");
    setInterval(function(){
      allTextPage2[2].classList.add("show-desk");
    },700);
  }
})

// NAVBAR
const hamButton = document.querySelector("nav .container .right-sect img");
const navSlide = document.querySelector("nav .mobile-nav");
const linkMobileNav = document.querySelectorAll("nav .mobile-nav a");
// ham button click
hamButton.addEventListener("click", function(){
  if (navSlide.classList.length == 1){
    navSlide.classList.add("nav-active");
  } else{
    navSlide.classList.remove("nav-active");
  }
  // close navbar if a link clicked
  for (var i = 0; i<=2;i++){
    linkMobileNav[i].addEventListener("click", function(){
      navSlide.classList.remove("nav-active");
    })
  }
})

// functional item 
// button order sekarang 
buttonOrderPage1.addEventListener("click", function(){
  document.location.href = "#price";
})