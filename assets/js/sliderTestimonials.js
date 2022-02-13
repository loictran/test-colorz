const sliderTestimonials = {

    wrapper: null,
    slider: null,
    imgList: null,
    bullets: [ ],
    bullet: null,
    windowWidth: 0,
    sliderWidth: null,
    currentSlide: 0,
    duration: 5000,

    init: function() {
        
        window.addEventListener('resize', sliderTestimonials.resizeWindow); 
        
        sliderTestimonials.wrapper = document.querySelector('.wrapper-testimonials');
        sliderTestimonials.slider = document.querySelector('.slider-testimonials');
        sliderTestimonials.bullets = document.querySelectorAll('.bullets-testimonials span');

        for(let i = 0; i<sliderTestimonials.bullets.length; i++) {
            sliderTestimonials.bullets[i].addEventListener('click', sliderTestimonials.handleClick);
            sliderTestimonials.bullets[i].dataset.position = i;
        }

        sliderTestimonials.resizeWindow(); 
        sliderTestimonials.start();
    },
    handleClick: function(e) {
        sliderTestimonials.currentBullet = e.currentTarget.dataset.position;
        sliderTestimonials.stop();
        for(let i = 0; i<sliderTestimonials.bullets.length; i++) {
            sliderTestimonials.bullets[i].removeAttribute('style');
        }
        
        let posX = sliderTestimonials.windowWidth * sliderTestimonials.currentBullet;
        sliderTestimonials.slider.style.left = -posX + 'px';
        sliderTestimonials.bullets[sliderTestimonials.currentBullet].style.backgroundColor = '#000'; 
        sliderTestimonials.startAgain();
    },
    resizeWindow: function() {
        sliderTestimonials.windowWidth = window.innerWidth;
    },
    start: function() {
        sliderTestimonials.timer = setInterval (
            function() { 
                let newSlide = sliderTestimonials.currentSlide++;
                let nextSlide = newSlide % sliderTestimonials.bullets.length;
                let posX = sliderTestimonials.windowWidth * nextSlide;
                sliderTestimonials.slider.style.left = -posX + 'px';
                if(nextSlide > 0 && nextSlide < sliderTestimonials.bullets.length) {
                    sliderTestimonials.bullets[nextSlide-1].style.backgroundColor = '#fff';
                    sliderTestimonials.bullets[nextSlide].style.backgroundColor = '#000';
                } else {
                    sliderTestimonials.bullets[sliderTestimonials.bullets.length - 1].style.backgroundColor = '#fff';
                    sliderTestimonials.bullets[0].style.backgroundColor = '#000';
                }
                    }, sliderTestimonials.duration); 
    },
    startAgain: function() {
        sliderTestimonials.timer = setInterval (
            function() { 
                let newSlide = sliderTestimonials.currentBullet++;
                let nextSlide = newSlide % sliderTestimonials.bullets.length;
                let posX = sliderTestimonials.windowWidth * nextSlide;
                sliderTestimonials.slider.style.left = -posX + 'px';
                if(nextSlide > 0 && nextSlide < sliderTestimonials.bullets.length) {
                    sliderTestimonials.bullets[nextSlide-1].style.backgroundColor = '#fff';
                    sliderTestimonials.bullets[nextSlide].style.backgroundColor = '#000';
                } else {
                    sliderTestimonials.bullets[sliderTestimonials.bullets.length - 1].style.backgroundColor = '#fff';
                    sliderTestimonials.bullets[0].style.backgroundColor = '#000';
                }

            }, sliderTestimonials.duration); 
    },
    stop: function(){
        clearInterval(sliderTestimonials.timer);
     },
};
document.addEventListener('DOMContentLoaded', sliderTestimonials.init);
   

