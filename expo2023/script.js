// NAVBAR

const nav = document.querySelector("nav");
window.addEventListener("scroll", function(){
  var scroll = window.pageYOffset
  var userHeight = window.innerHeight
  if(scroll >= userHeight){
    nav.classList.add("nav-active")
  }else{
    nav.classList.remove("nav-active")
  }
})

const ham = document.querySelector(".ham")
const mobileNav = document.querySelector(".mobile_nav")
ham.addEventListener("click", ()=>{
  mobileNav.style.transform="translateX(0%)"
})
mobileNav.addEventListener("click", ()=>{
  mobileNav.style.transform="translateX(100%)"
})
// NAVBAR

// SCROLL DIVISI
const boxDivisi = document.querySelector(".boxDivisi")
const scrollRight = document.querySelector(".bLeft")
const scrollLeft = document.querySelector(".bRight")
const boxKarya = document.querySelector(".boxKarya")
const scrollRightt = document.querySelector(".bLeftt")
const scrollLeftt = document.querySelector(".bRightt")
scrollLeft.addEventListener("click", function(e){
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxDivisi.scrollLeft += cardWidth + 24
})
scrollRight.addEventListener("click", function(e){
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxDivisi.scrollLeft -= cardWidth + 24
})

scrollLeftt.addEventListener("click", function(e){
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxKarya.scrollLeft += cardWidth + 56
})
scrollRightt.addEventListener("click", function(e){
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxKarya.scrollLeft -= cardWidth + 56
})
// SCROLL DIVISI
// JUARA
const boxJuara = document.querySelector("#prestasi .container .cover .mid") 
boxJuaraWidth = boxJuara.scrollWidth
const userWidth = window.innerWidth
// END JUARA

// KUIS
const jwb1 = document.querySelector(".jawab1")
const jwb2 = document.querySelector(".jawab2")
const jwb3 = document.querySelector(".jawab3")

const boxKuis = document.querySelectorAll(".boxKuis")
jwb1.addEventListener("click", function(){
  var jawaban = jwb1.previousElementSibling.value
  boxKuis[0].style.display = "none"
  if(jawaban == 33){
    jwb1.parentElement.nextElementSibling.classList.add("jwb-bnr")
  }else{
    jwb1.parentElement.nextElementSibling.classList.add("jwb-slh")
    jwb1.parentElement.nextElementSibling.innerHTML = "Salah"
  }
})

jwb2.addEventListener("click", function(){
  var jawaba = jwb2.previousElementSibling.value
  var jawaban = jawaba.toLowerCase();
  boxKuis[1].style.display = "none"
  if(jawaban == "office"  || jawaban == "divisi office"){
    jwb2.parentElement.nextElementSibling.classList.add("jwb-bnr")
  }else{
    jwb2.parentElement.nextElementSibling.classList.add("jwb-slh")
    jwb2.parentElement.nextElementSibling.innerHTML = "Salah"
  }
})

jwb3.addEventListener("click", function(){
  var jawaba = jwb3.previousElementSibling.value
  var jawaban = jawaba.toLowerCase();
  boxKuis[2].style.display = "none"
  if(jawaban == "multimedia"  || jawaban == "divisi multimedia"){
    jwb3.parentElement.nextElementSibling.classList.add("jwb-bnr")
  }else{
    jwb3.parentElement.nextElementSibling.classList.add("jwb-slh")
    jwb3.parentElement.nextElementSibling.innerHTML = "Salah"
  }
})
// END KUIS
// KARYA
const karyaImgs = document.querySelectorAll(".karya_img");
const boxKaryaImg = document.querySelector(".showGambar")
const karyaImg = document.getElementById("imgimg")
karyaImgs.forEach(karya => {
  karya.addEventListener("click", function(e){
    var gambar = karya.getAttribute("value")
    boxKaryaImg.style.transform = "translateY(0%)"
    console.log(karyaImg.src)
    karyaImg.src="img/"+gambar
  })
});
boxKaryaImg.addEventListener("click", function(){
  boxKaryaImg.style.transform = "translateY(100%)"
})
// END KARYA

// DARK & LIGHT MODE START

const body = document.querySelector("body");
const modeToggle = document.querySelector(".mode");

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("darkmode");

});

let ChangeIcon = function(icon){
  icon.classList.toggle("bx-sun");
  
}


// DARK & LIGHT MODE END