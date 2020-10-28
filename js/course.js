$(document).ready(function () {
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

  $("#toggle-chat").on('click', function () {
    $('.chat-container').addClass('active');
  });

  $(".close-chatbox").on("click", function () {
    $('.chat-container').removeClass('active');
  });

  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $("body").css("overflow", "inherit");
  });

  $('.menu-button').on('click', function () {
    $("body").css("overflow", "hidden");
    $('#sidebar').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $(".share").click(function () {
    $("#sidebar").removeClass("active");
    $("#social-modal").modal("show");
  });

  $('.broadcast').click(function () {
    location.href = "./course-home.html";
  });

  $("#home-tab").click(function () {
    $("#chat-modal").modal("show");
  });
});