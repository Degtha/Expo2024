// LIKE
const allLike = document.querySelectorAll(".like")
allLike.forEach(e => {
  e.addEventListener("click", function(){
    if(!e.classList.contains("liked")){
      e.classList.add("liked");
    }else{
      e.classList.remove("liked")
    }
  })
});
// LIHAT
const allLihat = document.querySelectorAll(".look")
const moveDetail = document.querySelector(".detial_produk_zoom")
const coverMove = document.querySelector(".cover_move_zoom")
allLihat.forEach(e =>{
  e.addEventListener("click", function(){
    const fotoProduk = e.parentElement.parentElement.previousElementSibling.getAttribute("src");
    const namaProduk = e.parentElement.previousElementSibling.previousElementSibling.innerHTML
    const hargaProduk = e.parentElement.previousElementSibling.innerHTML
    document.querySelector(".detial_produk_zoom img").setAttribute("src", fotoProduk)
    document.querySelector(".detial_produk_zoom .text_zoom h1").innerHTML = namaProduk
    document.querySelector(".detial_produk_zoom .text_zoom p").innerHTML = hargaProduk
    moveDetail.classList.add("show_produk");
  })
})

moveDetail.addEventListener("click", function(e){
  if(e.target != document.querySelector(".detial_produk_zoom img")){
    if(e.target != document.querySelector(".detial_produk_zoom .text_zoom h1")){
      if(e.target != document.querySelector(".detial_produk_zoom .text_zoom p")){
        moveDetail.classList.remove("show_produk")
      }
    }
  }
})