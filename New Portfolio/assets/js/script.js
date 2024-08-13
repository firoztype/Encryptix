document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      });
    }
  
    /**
       * Scroll top button
       */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }
  });


  /*=====sticky slections active line=====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=====dark light mode=====*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener("click", () => {
    // darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
      } else {
        localStorage.setItem("theme", "light");
      }
});

function themeMode() {
    if (localStorage.getItem("theme") !== null) {
      if (localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
      }
    }
  }

themeMode();

document.querySelector('.switcher-btn').onclick = () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });
});


 /*=====sticky slections active line=====*/
 document.addEventListener('DOMContentLoaded', (event) => {
  let sections = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navlinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
          }
      });
  };
});
  

 
  