var  navItems = document.getElementById('list');

function showNav(){

//     if (window.innerWidth > 880) {
//     return; // Stop the function
// }
        console.log("clicked");
        if(navItems.className == 'list'){
            navItems.classList.add('open');
        }
        else{
            navItems.classList.remove('open');
        }
}

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
  
  });