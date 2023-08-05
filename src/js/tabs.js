"use strict";
document.addEventListener('DOMContentLoaded',function(){


    const tabPickers = document.querySelectorAll('.js-tab-picker');
    const tabs = document.querySelectorAll('.js-tab');

    //closing the search
    if (tabPickers) {
        
        tabPickers.forEach((elem) => {

            elem.addEventListener("click", (e) => {
                if(!elem.classList.contains('tab-picker--active')){
                    e.preventDefault();
                    closeAllTabPickers(elem.dataset.context);
                    closeAllTabs(elem.dataset.context);
                    const tabId = elem.dataset.id;
                    const tab = document.getElementById(tabId);
                    tab.classList.remove('hidden');
                    elem.classList.add('tab-picker--active');
                }

            });
        });
    }

    const closeAllTabs = (triggerContext='') => {
        tabs.forEach((elem) => {
            const tabContext = elem.dataset.context;

            if(triggerContext == tabContext)
                elem.classList.add('hidden');
        });
    }

    const closeAllTabPickers = (triggerContext) => {

        tabPickers.forEach((elem) => {
            const tabContext = elem.dataset.context;

            if(triggerContext == tabContext)
                elem.classList.remove('tab-picker--active');
        });
    }

});
