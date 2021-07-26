// JavaScript Sticky Navbar
 window.addEventListener("scroll" , function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky" , window.scrollY > 0);
});

//JavaScript ScrollSpy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-links');


window.onscroll = () => {
    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar-links[href*=' + id + ']').classList.add('active'); 
            });
        };
    });
};


// JavaScript Menu Mobile
const navSlide = () => {
    const navbarIcon = document.querySelector('.navbar-icon');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    navbarIcon.addEventListener('click',()=> {
        navbarMenu.classList.toggle('navbar-active')
    });
};
navSlide();
  

// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

//Javascript Counter Up
const counters = document.querySelectorAll('.about-counter-number');
const speed = 2000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setInterval(updateCount, 200);
        } else {
            count.innerText = target;       ;
        };
    };

    updateCount();
});

// JavaScript Go Top
$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 300) {
            $('button').css({
                "opacity":"1" , "pointer-events" : "auto"
            });
        } else {
            $('button').css({
                "opacity":"0" , "pointer-events" : "none"

            });
        }
    });
    $('button').click(function(){
        $('html').animate({scrollTop:0}, 300)
    })
});

// JavaScript Animation 










