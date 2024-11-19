$(document).ready(function () {
  /* =========================================================
        Meanmenu js / Mobile Menu Js
    =========================================================*/

  /* =========================================================
        Scroll To Top Start
    =========================================================*/
  var scrollToTopBtn = $(".scrollToTop");
  function handleScroll() {
    if ($(window).scrollTop() > 400) {
      scrollToTopBtn.show();
    } else {
      scrollToTopBtn.hide();
    }
  }
  handleScroll();
  $(window).scroll(function () {
    handleScroll();
  });
  scrollToTopBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  /* =========================================================
        Sticky Header
    =========================================================*/
});

/* =========================================================
    AOS
=========================================================*/
// $(document).ready(function () {
//   AOS.init({
//     duration: 1000,
//   });
// });

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
});
// Slider
$(document).ready(function () {
  var $slider = $(".fe-slider-content");
  var $progressBar = $(".fe-slide-progress");
  var $progressBarLabel = $(".slider__label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc.toFixed(0) + "% completed");
  });

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 900,
    arrows: false,
    dots: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
