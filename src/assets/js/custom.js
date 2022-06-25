(function($) {
    "use strict";
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".main-header").addClass("sticky-header");

        } else {
            $(".main-header").removeClass("sticky-header");
        }
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);
    });

    $(".looksvideo").lightGallery();

    $('#main-slider').owlCarousel({
        loop: false,
        autoplay: true,
        // autoplayTimeout:3000,
        animateOut: 'fadeOut',
        // animateIn:'fade',
        // transitionStyle : "fade",
        // slideSpeed: 300,
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#looksslider').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1.5,
                loop: true,
                margin: 10,
                center: true,
                autoplay: true,
                animateOut: 'fadeOut',
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // Quantity
    $('.quantity-plus').click(function() {
        if ($(this).prev().val() < 100) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.quantity-minus').click(function() {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    $('.prodgallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.prodgallery-nav'
    });
    $('.prodgallery-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.prodgallery-for',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [          
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    //toggle mobile menu
    $('.main-header .navbar-toggler').on('click', function() {
        $(this).toggleClass('navbar-mobile-toggler');
        $('.main-header').toggleClass('mobile-header');
        $('body').toggleClass('bodymenuopen');
    });

    //  $('.main-header .toggle_menu').on('click', function() {
    //     $(this).toggleClass('mobile-active')
    //         .closest('.main-header')
    //         .toggleClass('mobile-active')
    //         .end()
    //         .closest('.page_toplogo')
    //         .next()
    //         .find('.main-header')
    //         .toggleClass('mobile-active');

    //     $('body').toggleClass('bodymenuopen');
    // });

})($);


// $(document).ready(function(){

// });

// $(function ($) {

// });

// $(document).ready(function () {


// });