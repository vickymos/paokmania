"use strict";
document.addEventListener('DOMContentLoaded',function(){

    const trigger = document.getElementById('menu-trigger');    
    const menuItems = document.querySelectorAll('.js-trigger-submenu');
    const mainNav = document.getElementById('main-nav');

    if (menuItems) {
        
        menuItems.forEach((menuItem) => {
        
            menuItem.addEventListener("click", (e) => {
                
              e.preventDefault();
              const submmenuid = menuItem.dataset.submenuid;
              const submmenuItem = document.getElementById(submmenuid);
        
              submmenuItem.classList.toggle('submenu--active')
            });
        });
    }

    if (trigger) {
    
        trigger.addEventListener("click", (e) => {
            trigger.classList.toggle('menu-trigger--active');
            mainNav.classList.toggle('main-nav--active');
            
        });
    }
});
