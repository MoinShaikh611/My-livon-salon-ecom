import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".main-header").addClass("sticky-header");

    } else {
        $(".main-header").removeClass("sticky-header");
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
});

// $('.main-header .navbar-toggler').on('click', function() {
//     $(this).toggleClass('navbar-mobile-toggler');
//     $('.main-header').toggleClass('mobile-header');
//     $('body').toggleClass('bodymenuopen');
// });


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

// $('.prodgallery-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.prodgallery-nav'
// });
// $('.prodgallery-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     vertical: true,
//     asNavFor: '.prodgallery-for',
//     dots: false,
//     arrows: false,
//     centerMode: false,
//     focusOnSelect: true,
//     responsive: [          
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             vertical: false,
//           }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ]
// });

//toggle mobile menu

