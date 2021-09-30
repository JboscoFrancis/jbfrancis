const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('nav .sidenav li');

  //preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
// activate active class link nav as scrolling dowan/top
window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if(pageYOffset >= (sectionTop - sectionHeight/2.5)){
            
            current = section.getAttribute('id');
        }
    })

    navLink.forEach( li => {
        li.classList.remove('active');

        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})

// close or open sidenav
function closeSideBar(){
    document.getElementById('sidebar').classList.toggle('closeSideBar');
    document.getElementById('mainSection').classList.toggle('closeSideMainSection');


    if ($(window).width() < 550){
        document.getElementById('closebtn1').classList.toggle('d-none');
        document.getElementById('openbtn1').classList.toggle('d-none');
    }else{
        document.getElementById('closebtn').classList.toggle('d-none');
        document.getElementById('openbtn').classList.toggle('d-none');
    }
}

// typing effect
$(document).ready(function() { 
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2500
      });
    }
  });

// smooth scroll to navigation link
$('.sidenav li a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        console.log(hash)
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600);
    }
})

// hiding side bar when clicked to nav link
for( var i=0; i < navLink.length; i++){
    navLink[i].addEventListener('click', function(){
        document.getElementById('sidebar').classList.remove('closeSideBar')
    })
}

// aos intiate
AOS.init({
    offset: 160,
    duration: 2000,
    once: true,
  });

//   lightbox
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    closeOnOutsideClick: true,
  });

//   service card effect
  $('.service-card').mouseenter(
    function(e){
      e.preventDefault()
    $(this).children("i").addClass("bx-tada");
    $('.service-card').mouseleave(
    function(e){
      e.preventDefault()
      $(this).children("i").removeClass("bx-tada");
    })
  })

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').show('slow');
    } else {
      $('.back-to-top').hide('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },1000);

    return false;
  });