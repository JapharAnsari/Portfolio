$(document).ready(function(){

    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots: '.slider-dots',
        dotsClass:'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let navLinks = document.querySelectorAll('.mobile-nav a');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    navLinks.forEach(function(link){
        link.addEventListener('click', function(){
            mobileNav.classList.remove('open');
        });
    });

    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            setTimeout(() => {
                contactForm.reset();
            }, 100);
        });
    }

});
