$(function () {
  $(".header-bottom__burger").click(function (event) {
    $(".header-bottom__burger, .menu ").toggleClass("active");
    $("body").toggleClass("lock");
  });
  //
  $(document).ready(function () {
    $(".popup").click(function () {
      $(".pop").fadeIn(300);
    });
    $(".pop__close, .bg-overlay").click(function () {
      $(".pop").fadeOut(300);
    });
  });

  //
  $(document).ready(function () {
    $(".footer-popup").click(function () {
      $(".footer-pop").fadeIn(300);
    });
    $(".footer-pop__close, .bg-overlay").click(function () {
      $(".footer-pop").fadeOut(300);
    });
  });

  //
  $(".specialist__slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/specialist/left_arrow.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/specialist/right_arrow.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  //
  $(".process__slider").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/specialist/left_arrow.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/specialist/right_arrow.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  //
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

  //
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

  //
  $(".filter-style").styler();

  //
  $(".question__plus-minus").on("click", function () {
    $(this).toggleClass("question__plus-minus--active");
    $(this).next().slideToggle(500);
  });
  //
});
