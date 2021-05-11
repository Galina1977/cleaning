$(function () {
  $(document).ready(function () {
    $(".button").click(function () {
      $(".pop-up").toggleClass("show");
    });
  });

  $(document).ready(function () {
    $(".popup").click(function () {
      $(".pop").fadeIn(300);
    });

    $(".pop__close").click(function () {
      $(".pop").fadeOut(300);
    });
  });

  $(".menu-btn").click(function (event) {
    $(".menu-btn, .menu__list ").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".filter-style").styler();

  new WOW().init();
});
