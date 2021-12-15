$(function () {

   $('body').append('<div class="upbtn"></div>');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.upbtn').css({
            bottom: '15px'
         });
      } else {
         $('.upbtn').css({
            bottom: '-80px'
         });
      }
   });
   $('.upbtn').on('click', function () {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
      return false;
   });


   $(".header__burger").click(function (event) {
      $(".header__burger, .menu ").toggleClass("active");
      $("body").toggleClass("lock");
   });

   var popupLink = function () {
      $(".js-popup__link").magnificPopup({
         showCloseBtn: false,
      });
      $(document).on("click", ".popup__close", function () {
         $.magnificPopup.close();
      });
   };
   popupLink();


   $(".specialist__slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      prevArrow:
         '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="caret-square-left" class="svg-inline--fa fa-caret-square-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#c75a9d" d="M272 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></button>',
      nextArrow:
         '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="caret-square-right" class="svg-inline--fa fa-caret-square-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#c75a9d" d="M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></button>',
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

   $(".process__slider").slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      prevArrow:
         '<button class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="caret-square-left" class="svg-inline--fa fa-caret-square-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#c75a9d" d="M272 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></button>',
      nextArrow:
         '<button class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="caret-square-right" class="svg-inline--fa fa-caret-square-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#c75a9d" d="M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></button>',
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


   $(".filter-style").styler();


   $(".question__plus-minus").on("click", function () {
      $(this).toggleClass("question__plus-minus--active");
      $(this).next().slideToggle(500);
   });

   $(".services__title-drop").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("services__title-drop--active");
   });

   $(".question__title-drop").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("question__title-drop--active");
   });

   $(".additional-services__title-drop").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("additional-services__title-drop--active");
   });

});
