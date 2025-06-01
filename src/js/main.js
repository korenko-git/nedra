/* global $, AOS */
/* eslint-disable spaced-comment */

$(document).ready(function() {
  AOS.init();

  // Smooth scroll for anchor links with offset
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        let navbarHeight = $('#navbar-top').outerHeight(); 
        $('html, body').animate({
          scrollTop: target.offset().top - navbarHeight 
        }, 1000, function() {
          let hash = $(event.target).attr('href');
          if (window.history.pushState) {
            window.history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        });
      }
    }
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    navText: '',
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    fluidSpeed: 600,
    autoplaySpeed: 600,
    navSpeed: 600,
    dotsSpeed: 600,
    dragEndSpeed: 600,
  });

  $('.forms').submit(function() {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      // eslint-disable-next-line no-invalid-this
      data: $(this).serialize(),
    }).done(function() {
      alert('Спасибо за заявку!');
      $('.forms').trigger('reset');
    });

    return false;
  });
});
