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

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#scroller").fadeIn();
      } else {
        $("#scroller").fadeOut();
      }
    });
    $("#scroller").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });

  $(".menu, .header__arrows").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  new WOW().init();
});
