AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});


const menuBurger = document.querySelector('.menu__burger');
const burgerLines = document.querySelector('.menu__burger .menu__burger-lines');
const menuHome = document.querySelector('.menu__home');

const menu__nav_home = document.querySelector('.menu__nav_home');
const menu__nav_about = document.querySelector('.menu__nav_about');
const menu__nav_works = document.querySelector('.menu__nav_works');
const menu__nav_contact = document.querySelector('.menu__nav_contact');

menuBurger.addEventListener('click', ()=> {
  menuHome.classList.toggle('active');
  menuBurger.classList.toggle('active');
  burgerLines.classList.toggle('active');
});


menu__nav_home.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

menu__nav_about.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

menu__nav_works.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

menu__nav_contact.addEventListener('click', ()=> {
  menuHome.classList.remove('active');
  burgerLines.classList.remove('active');
});

// if(menuHome.contains('active')){
//   document.addEventListener('click', () => {
//     menuHome.classList.remove('active');
//     burgerLines.classList.remove('active');
//   });
// }


const toHeaderBtn = document.querySelector('.footer_ToHeaderBtn');

toHeaderBtn.addEventListener('click', () => {
  scrollTo(0, 0)
});

// ----------------------------media_links----------------------------

const instagram_link = document.querySelector('.divs_row1_1');
const twitter_link = document.querySelector('.divs_row1_3');
const gmail_link = document.querySelector('.divs_row2_1');
const telegram_link = document.querySelector('.divs_row2_2');


instagram_link.addEventListener('click', () => {
  location.href = 'https://web.telegram.org/z/';
});

twitter_link.addEventListener('click', () => {
  location.href = 'twitter.com/@selecta98576384';
});

gmail_link.addEventListener('click', () => {
  location.href = 'mail.google.com/mail/zhenianominatyt@gmail.com';
});

telegram_link.addEventListener('click', () => {
  location.href = 'https://web.telegram.org/Zhenia_nN';
});

// ----------------------------jobs_links----------------------------

const jobs_link_1 = document.querySelector('.middle2_block1');
const jobs_link_2 = document.querySelector('.middle2_block2');
const jobs_link_3 = document.querySelector('.middle2_block3');

jobs_link_1.addEventListener('click', () => {
  location.href = 'https://selecta-z.github.io/Project-2/HTML_Project_2';
});

jobs_link_2.addEventListener('click', () => {
  location.href = 'https://selecta-z.github.io/Project-3/HTML_';
});

jobs_link_3.addEventListener('click', () => {
  location.href = 'https://selecta-z.github.io/Project-4/html_pr_4';
});

// ----------------------------stickyHeader----------------------------

window.onscroll = () => {
  let scrollPos = 100;
  let header_block1 = document.querySelector('.header_block1');

  if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
    header_block1.classList.add('active');
  } else{
    header_block1.classList.remove('active');
  }
}

// ----------------------------3D_Effect----------------------------

// document.addEventListener('DOMContentLoaded', () => {

//   const body = document.querySelector('body');

//   cx = window.innerWidth / 2;
//   cy = window.innerHeight / 2;

//   body.addEventListener('mousemove', event => {
//     clientX = event.pageX;
//     clientY = event.pageY;

//     console.log(clientX + '/' + clientY);
//   });

// })