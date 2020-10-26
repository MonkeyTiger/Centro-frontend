"use strict";

$(document).ready(function (e) {
  if ($(window).scrollTop() >= 10) {
    $('header').addClass('active');
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
  $('.banner_slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 0,
    nav: true,
    items: 1,
    navText: ["<img src='./imgs/icon/testimonial_arrow_left.svg' alt=''>", "<img src='./imgs/icon/testimonial_arrow_right.svg' alt=''>"]
  });
  $(".faq_title").click(function (e) {
    $(".faq_list li").removeClass("active");
    $(this).parents("li").addClass("active");
    $(".faq_body").slideUp();
    $(this).parents("li").find(".faq_body").slideDown();
  });
  $('.client_slider').owlCarousel({
    loop: false,
    margin: 18,
    nav: false,
    dots: false,
    items: 1,
    responsive: {
      0: {
        items: 3,
        margin: 10
      },
      500: {
        items: 3,
        margin: 10
      },
      700: {
        items: 4,
        margin: 10
      },
      768: {
        items: 6,
        margin: 15
      },
      992: {
        items: 8,
        margin: 20
      },
      1200: {
        items: 8
      }
    }
  });
  $(".search-icon").click(function () {
    $(".search-input-box").toggleClass('d-none');
    $(".search-input-box input").focus();
  });
  $(".search-input-box input").keypress(function (e) {
    if (e.keyCode === 13) {
      $(".search-input-box").addClass('d-none');
      $(".search-input-box input").val('');
    }
  }); // $("body").click(function(e) {
  //     $(".search-input-box").addClass("d-none");
  // });

  $(".toggleMenu").click(function (e) {
    $(".header_right,body,.pageOverlay").addClass("active");
  });
  $(".closeMenu").click(function (e) {
    $(".header_right,body").removeClass("active");
  });
  $(window).on("load", function () {
    $(".loader_outer").hide();
  });
});

function owlInitialize() {
  if ($(window).width() < 768) {
    $('.course_box_slider').addClass("owl-carousel");
    $('.course_box_slider').owlCarousel({
      loop: false,
      margin: 15,
      nav: false,
      autoplay: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        640: {
          items: 1
        },
        767: {
          items: 2
        }
      }
    });
  } else {
    $('.course_box_slider').owlCarousel('destroy');
    $('.course_box_slider').removeClass("owl-carousel");
  }
}

$(document).ready(function (e) {
  owlInitialize();
});
$(window).resize(function () {
  owlInitialize();
});