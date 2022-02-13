const modale = {

    ctaList: [ ],
    modale: null,
    closeButton: null,
    body: null,

    init: function() {
        modale.ctaList = document.querySelectorAll('.cta');
        modale.closeButton = document.querySelector('#close-modale');
        modale.modale = document.querySelector('#modale');
        modale.body = document.querySelector('body');
        
        for(let i = 0; i < modale.ctaList.length; i++) {
            modale.ctaList[i].addEventListener('click', modale.openModale);  
        }  
           
    },
    openModale: function() {
        modale.modale.style.display= 'flex';
        modale.body.style.overflow = 'hidden';

        modale.closeButton.addEventListener('click', modale.closeModale);    
    },  
    closeModale: function() {
        modale.modale.removeAttribute('style');
        modale.body.removeAttribute('style');
    },
};

document.addEventListener('DOMContentLoaded', modale.init);



