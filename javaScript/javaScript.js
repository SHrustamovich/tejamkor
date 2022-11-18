const menuBtn = document.querySelector(".header__menu")
const menuList  = document.querySelector(".header__list")
menuBtn.addEventListener("click",() => {
   if(menuList.classList.contains('header__openMenu')){
    menuList.classList.remove('header__openMenu')
    menuBtn.children[0].setAttribute('src','./image/icon/menuburger.svg')
  }else{
    menuList.classList.add('header__openMenu')
    menuBtn.children[0].setAttribute('src','./image/icon/menuClose.svg')
   }
})
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let swiperr = new Swiper(".mySwiperr", {
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    320: {
    slidesPerView: 1,
    spaceBetweenSlides: 0
      },
    690: {
        slidesPerView: 2,
        spaceBetweenSlides: 0
    },
    1140: {
      slidesPerView: 3,
      spaceBetweenSlides: 0
  }
},
});
const applyBtn = document.querySelectorAll(".intro__btn")
const applyAll = document.querySelector(".apply-all")
const applyClose = document.querySelector(".apply__close")

// applyBtn.addEventListener("click",() => {
//     applyAll.classList.add("add_apply") 
// })
applyClose.addEventListener("click", ()=> {
  applyAll.classList.remove("add_apply")
})
for(let i = 0; i < applyBtn.length; i++){
  applyBtn[i].addEventListener("click",() => {
    applyAll.classList.add("add_apply")
  })
}


