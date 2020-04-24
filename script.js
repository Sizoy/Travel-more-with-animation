$(document).ready(function () {
  $("#header").addClass("animated fadeInDown show");
  $(window).scroll(function () {
    console.log(pageYOffset);

    if (pageYOffset > 250) {
      $("#nav").addClass("animated bounceInRight show");
    }
    if (pageYOffset > 640) {
      $("#why-container").addClass("animated jackInTheBox show");
    }
    if (pageYOffset > 1150) {
      $("#search-container").addClass("animated zoomIn show");
    }
    if (pageYOffset > 1660) {
      $("#places1").addClass("animated bounceInRight show");
    }
    if (pageYOffset > 2300) {
      $("#places2").addClass("animated bounceInLeft show");
    }
    if (pageYOffset > 3000) {
      $("#feedback-container").addClass("animated rotateIn show");
    }
    if (pageYOffset > 3580) {
      $("#footer-container").addClass("animated slideInDown show");
    }
  });
});
