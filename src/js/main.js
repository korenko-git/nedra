/* global $, AOS */
/* eslint-disable spaced-comment */

//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/scrollspy.js
//= ../../node_modules/bootstrap/js/dist/collapse.js

$(document).ready(function() {
  AOS.init();

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
});
