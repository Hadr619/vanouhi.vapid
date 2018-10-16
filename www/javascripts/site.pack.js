// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import './owl.carousel';


function viewport() {
    //CHECK ACTUAL VIEWPORT
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] };
  }
  
  // ON LOAD
  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('.u-status').fadeOut(); // will first fade out the loading animation 
    $('.u-preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  })
  
  
  $(document).ready(function($){
  
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  
    $('.c-scroll-to-top').hide();
  
    // Scroll to top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
  });
  
    // Sticky Nav
    $(window).scroll(function () {
  
      if(viewport().width >= 992){
        if ($(this).scrollTop() > 0) {
          $('.c-header').addClass('c-header--fixed');
      } else {
        $('.c-header').removeClass('c-header--fixed');
      }
      }
  
  });
  
  // Scroll Down
  $('.c-scroll-page--down').on('click', function() {
    $('html, body').animate({
      scrollTop: $("#About").offset().top
  }, 500);
  });
  
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
        $('html').toggleClass('c-nav--expanded');
        $(this).toggleClass('c-nav--expanded');
        $(this).next('nav').toggleClass('c-nav--expanded');
  });
  
  $('#menu-top-nav a').on('click', function(e) {
    // e.preventDefault();
    $('html').removeClass('c-nav--expanded');
    $('.nav-toggle').removeClass('c-nav--expanded');
    $('.nav-toggle').next('nav').removeClass('c-nav--expanded');
  });
  
  // Back to top
  $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.c-scroll-to-top').fadeIn('slow');
        } else {
            $('.c-scroll-to-top').fadeOut('slow');
        }
    });
    $('.c-scroll-to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
  
  $('.owl-carousel').owlCarousel({
    items:1,
    mouseDrag:false,
    nav:true,
    autoplay:true,
    loop:true,
    autoplaySpeed:1000,
    smartSpeed:500
  });
  
  
  
  
  }); 