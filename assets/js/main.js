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
