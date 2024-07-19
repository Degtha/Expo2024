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
  if(jawaban == "robotik"  || jawaban == "divisi robotik"){
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

// start parallax
const typingText = document.getElementById('typing-text');
const textToType = 'Temukan keajaiban teknologi dalam dirimu sekarang juga! Bersama PENTIUM7, mari bersama mengembangkan bakat dan menerobos batas teknologi!'
let charIndex = 0;
let timer = null;

function typeChar() {
if (charIndex < textToType.length) {
    typingText.textContent += textToType[charIndex];
    charIndex++;
    timer = setTimeout(typeChar, 18); // adjust the speed to your liking
} else {
    clearTimeout(timer);
}
}
typeChar();
// end parallax

// Loading
window.onload = function () {
  document.querySelector(".loading").style.transform = "translateY(-100%)"
  document.querySelector(".loading").style.backgroundColor = "transparent"
}

// cekkhodam

const khodams = [
  ,'kosong',
  'Ban Tubles',
  'Decul',
  'Rx King',
  'CBR Lecet',
  'Kuda Jantan',
  'Buah Naga',
  'Singa Senyum',
  'Naga Guling',
  'Macan Tersenyum',
  'Elang Ganteng',
  'Kuda Bersemangat',
  'Kelinci Gemas',
  'Tikus Imut',
  'Gajah Gembira',
  'Kucing Menggemaskan',
  'Anjing Setia',
  'Katak Ceria',
  'Kura-Kura Tangguh',
  'Wibu gak pernah mandi',
  'Cd Bekas',
  'Ultramen Ribut',
  'Mermaid Oyen',
  'Martabak Kecut',
  'Mas Rusdi',
  'Porenjer Moshing',
  'Skibidi Toilet',
  'Jerapah Kayang',
  'Kucing Sigma',
  'Nyamuk Indigo',
  'kadal Mules',
  'Sate Madura',
  'Phoenix',
  'Raksasa Batu',
  'Ijat',
  'Hiu Ompong',
  'Laba Laba Jawa',
  'Supra Bapak',
  'Masako Ayam',
  'Lele Sumbing',
  'Kunti Bogel',
  'Alok Jamsut',
  'Budi',
  'Tuyul Mulet',
  'Pace Kanaeru',
  'Kumbang Badak',
  'Sumiati <3',
  'Hello Kitty',
  'Obama',
  'Kodok Mencret',
  'Roti Tawar',
  'Air Bening',
  'Ketua Pentium',
  'Panci Gosong',
  'Pocong Kuning',
  'Koruptor',
  'Kuntilanak Bondol',
  'Zeus',
  'Poseidon',
  'Cikgu Jasmine',
  'Ririn',
  'Ewing HD',
  'Macam Putih',
  'Kera Sakti',
  'Macan Galau',
  'Cicak Afrika',
  'Sandal Swallow',
  'Tikus Berdasi',
  'Siluman Tobrut',
  'Garuda',
];

function cekKodam (){
  const randomIndex = Math.floor(Math.random () * khodams.length)
  const randomKodam = khodams[randomIndex] 
  const nama = document.getElementById('nama').value.trim()

  if (nama == '')
  {
      alert('isi nama anda')
      document.getElementById('hasil').innerHTML = ``;
      return
  }

  const hasil = document.getElementById('hasil')
  document.getElementById('hasil').innerHTML = `<p>Khodam yang bersemayam dalam diri ${nama} adalah ${randomKodam}</p>`;

  const masukkanNama = document.getElementById('nama')
  masukkanNama.value = ''

  
}
document.getElementById('kodam').addEventListener('submit', function (e) {
  e.preventDefault(); 

  cekKodam()
})