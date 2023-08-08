"use strict";
document.addEventListener('DOMContentLoaded',function(){

    const trigger = document.getElementById('menu-trigger');
    
    const menuItems = document.querySelectorAll('.js-menu-item');

    //closing the search
    if (menuItems) {
        
        menuItems.forEach((menuItem) => {

            menuItem.addEventListener("click", (e) => {
              //...mpla

            });
        });
    }



    if (trigger) {
    
        trigger.addEventListener("click", (e) => {
            trigger.classList.toggle('menu-trigger--active')   
            console.log(trigger)
        });
    }
});
