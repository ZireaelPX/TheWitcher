var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
     navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
  menu.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
  
})