const scrollEffect = {

    dolphins: null,
    dolphinsWidth: 0,
    dolphinsRectTop: 0,
    windowScrollY: 0,

    init: function() {
        scrollEffect.dolphins = document.querySelector('#section-most-advanced .right');
        scrollEffect.dolphinsWidth = scrollEffect.dolphins.offsetWidth;

        scrollEffect.dolphins.style.backgroundPositionX = scrollEffect.dolphinsWidth + 'px';
        window.addEventListener('scroll', scrollEffect.displayDolphins);
    },
    //SECTION 3 "MOST ADVANCED" translates on scroll
    displayDolphins: function() {
        scrollEffect.dolphins = document.querySelector('#section-most-advanced .right');
        scrollEffect.dolphinsRectTop = scrollEffect.dolphins.getBoundingClientRect().top;
        scrollEffect.windowScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if(scrollEffect.windowScrollY >= scrollEffect.dolphinsRectTop) {
            scrollEffect.dolphins.removeAttribute('style');
            scrollEffect.dolphins.classList.add('dolphins-visible');
        }
    },
};
document.addEventListener('DOMContentLoaded', scrollEffect.init);



