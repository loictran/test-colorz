const app = {

    gutter: 36, //36px from $gutter 'abstracts/variables.scss'

    init: function() {
        
        window.addEventListener('resize', app.resize)
        app.resize();

    },
    fixScrollX: function() {
        app.windowWidth = window.innerWidth;
        app.wrapperSomeItems = document.querySelector('.wrapper-some-items');    

        app.cardsList = document.querySelectorAll('.card');
        app.margin = (app.cardsList.length + 1) * app.gutter;
        app.wrapperSomeItemsWidth = (app.cardsList[0].offsetWidth * app.cardsList.length) + app.margin;
        app.scrollX = app.wrapperSomeItems.scrollLeft;
        app.scrollCenter = (app.wrapperSomeItemsWidth/2) - (app.windowWidth/2);
       
        //Affichage ok si 1, 2 ou 3et plus d'articles
        if(app.cardsList.length >= 3) {
            app.wrapperSomeItems.scrollLeft = app.scrollCenter;
        } else if (app.cardsList.length == 2){
            app.wrapperSomeItems.scrollLeft = 0;
        } else if (app.cardsList.length == 1) {
            app.wrapperSomeItems.querySelector('.card').style.margin = '0 auto';
        }
    },
    fixPaddingsection3: function() {
        app.stickyRight = document.querySelector('.sticky-right');
        app.sectionMostAdvanced = document.querySelector('#section-most-advanced');
        app.stickyRightHeight = app.stickyRight.offsetHeight;
        app.windowWidth = window.innerWidth;
        if(app.windowWidth >= 992) {       
            app.sectionMostAdvanced.style.paddingBottom = app.stickyRightHeight + 'px';
        } else {
            app.sectionMostAdvanced.removeAttribute('style');
        }
    },
    resize: function(e) {

        // FIX SECTION 3 "MOST ADVANCED" HEIGHT
        app.fixPaddingsection3();

        // FIX SECTION 9 "INDISPENSABLES" SCROLL-X
        app.fixScrollX();
        
    }    
};
document.addEventListener('DOMContentLoaded', app.init);




