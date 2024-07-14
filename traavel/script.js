const ok = "ok";

// navbar
const navbar = document.querySelector("nav");
const navBox = document.querySelector("nav .nav");
const hamMenu = document.querySelector(".ham-menu");
const mobileNav = document.querySelector(".mobile-nav");
window.addEventListener("scroll", function(e){
  const userScrollPoint = window.pageYOffset;
  if (userScrollPoint <= 20){
    if (mobileNav.classList.length != 2){
      return
    }
    navbar.classList.remove("navOnScrolled");
    navBox.classList.remove("navOnScrolledCollor");
  }else{
    navbar.classList.add("navOnScrolled");
    navBox.classList.add("navOnScrolledCollor");
  }
})
hamMenu.addEventListener("click", function(){
  if (navbar.classList.length == 0){
    navbar.classList.add("navOnScrolled");
    navBox.classList.add("navOnScrolledCollor");
  }
  if (mobileNav.classList.length == 2){
    mobileNav.style.transform = "translateX(0%)"
    navbar.style.filter= "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.35))";
    mobileNav.classList.remove("act");
  }else{
    mobileNav.style.transform = "translateX(100%)"
    navbar.style.filter= "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.35))";
    mobileNav.classList.add("act");
  }
})
const linkMobile = document.querySelectorAll(".link-box.m a");
mobileNav.addEventListener("click", function(e){
  linkMobile.forEach(link => {
    if (e.target == link){
      mobileNav.style.transform = "translateX(100%)"
      navbar.style.filter= "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.35))";
      mobileNav.classList.add("act");
    }
  });
})
// testimonial
const namaTempatH4 = document.querySelector(".card-testimoni .img-side .text h4");
const namaTempatP = document.querySelector(".card-testimoni .img-side .text p");
const gambarTempat = document.querySelector(".card-testimoni .img-side img");
const fotoProfile = document.querySelector(".card-testimoni .deskripsi-side img");
const namaOrang = document.querySelector(".card-testimoni .deskripsi-side .profile h4");
const pekerjaan = document.querySelector(".card-testimoni .deskripsi-side .profile p");
const komentar = document.querySelector(".card-testimoni .deskripsi-side .komentar");
const boxImage = document.querySelector(".kedip");
setInterval(() => {
  if (namaOrang.innerHTML == "John Doe"){
    boxImage.style.opacity = 1;
    namaTempatH4.innerHTML = "Gunung Batur"
    namaTempatP.innerHTML = "Tabanan, Bali"
    gambarTempat.attributes[0].value = "img/gunung-batur.jpg";
    fotoProfile.attributes[0].value = "img/testimoni-2.jpg"
    namaOrang.innerHTML = "Mark Kepler"
    pekerjaan.innerHTML = "Illutrator"
    setTimeout(() => {
      boxImage.style.opacity = 0;
    }, 1000);
  } else if (namaOrang.innerHTML == "Mark Kepler"){
    boxImage.style.opacity = 1;
    namaTempatH4.innerHTML = "Ubud"
    namaTempatP.innerHTML = "Gianyar, Bali"
    gambarTempat.attributes[0].value = "img/ubud.jpg";
    fotoProfile.attributes[0].value = "img/testimoni-3.jpg"
    namaOrang.innerHTML = "Christine Zewis"
    pekerjaan.innerHTML = "Designer"
    setTimeout(() => {
      boxImage.style.opacity = 0;
    }, 1000);
  } else {
    boxImage.style.opacity = 1;
    namaTempatH4.innerHTML = "Danau Tamblingan"
    namaTempatP.innerHTML = "Tabanan, Bali"
    gambarTempat.attributes[0].value = "img/tamblingan.jpg";
    fotoProfile.attributes[0].value = "img/testimoni-1.jpg"
    namaOrang.innerHTML = "John Doe"
    pekerjaan.innerHTML = "Mahasiswa"
    setTimeout(() => {
      boxImage.style.opacity = 0;
    }, 1000);
  }
}, 8000);

