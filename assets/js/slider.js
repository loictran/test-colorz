const slider = {

    wrapper: null,
    slider: null,
    imgList: null,
    bullets: [ ],
    bullet: null,
    windowWidth: 0,
    sliderWidth: null,
    currentSlide: 0,
    duration: 2000,

    init: function() {
        
        window.addEventListener('resize', slider.resizeWindow); 
        
        slider.wrapper = document.querySelector('.wrapper');
        slider.slider = document.querySelector('.slider');
        slider.bullets = document.querySelectorAll('.bullets span');

        for(let i = 0; i<slider.bullets.length; i++) {
            slider.bullets[i].addEventListener('click', slider.handleClick);
            slider.bullets[i].dataset.position = i;
        }


        slider.resizeWindow(); 
        slider.start();
    },

    handleClick: function(e) {
        slider.currentBullet = e.currentTarget.dataset.position;

        slider.stop();
        for(let i = 0; i<slider.bullets.length; i++) {
            slider.bullets[i].removeAttribute('style');
        }
        
        let posX = slider.windowWidth * slider.currentBullet;
        slider.slider.style.left = -posX + 'px';
        slider.bullets[slider.currentBullet].style.backgroundColor = '#000'; 

        slider.startAgain();
    },
    
    resizeWindow: function() {
        slider.windowWidth = window.innerWidth;
    },

    start: function() {
        slider.timer = setInterval (
            function() { 
                let newSlide = slider.currentSlide++;
                let nextSlide = newSlide % slider.bullets.length;
                let posX = slider.windowWidth * nextSlide;
                slider.slider.style.left = -posX + 'px';
                if(nextSlide > 0 && nextSlide < slider.bullets.length) {
                    slider.bullets[nextSlide-1].style.backgroundColor = '#fff';
                    slider.bullets[nextSlide].style.backgroundColor = '#000';
                } else {
                    slider.bullets[slider.bullets.length - 1].style.backgroundColor = '#fff';
                    slider.bullets[0].style.backgroundColor = '#000';
                }
                    }, slider.duration); 
    },

    startAgain: function() {
        slider.timer = setInterval (
            function() {         

                let newSlide = slider.currentBullet++;
                let nextSlide = newSlide % slider.bullets.length;
                let posX = slider.windowWidth * nextSlide;
                slider.slider.style.left = -posX + 'px';
                if(nextSlide > 0 && nextSlide < slider.bullets.length) {
                    slider.bullets[nextSlide-1].style.backgroundColor = '#fff';
                    slider.bullets[nextSlide].style.backgroundColor = '#000';
                } else {
                    slider.bullets[slider.bullets.length - 1].style.backgroundColor = '#fff';
                    slider.bullets[0].style.backgroundColor = '#000';
                }

            }, slider.duration); 
    },

    stop: function(){
        clearInterval(slider.timer);
     },
};
document.addEventListener('DOMContentLoaded', slider.init);
   

