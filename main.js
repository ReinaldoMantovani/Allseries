let header = document.querySelector('header');

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
   header.classList.toggle('showdown', window.scrollY > 0);
});

menu.onclick = () => {
 
   menu.classList.toggle('bx-x');
   navbar.classList.toggle('active')
}



const swiper = new Swiper('.home', {
    // Optional parameters

    direction: 'horizontal',
    effect: 'fade' ,
    loop: true,
    autoplay: {
    delay:5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  
  });





  