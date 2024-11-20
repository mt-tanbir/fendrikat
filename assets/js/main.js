/* =========================================================
    AOS Initialization
=========================================================*/
AOS.init({
  duration: 1000,
});

/* =========================================================
    Scroll To Top
=========================================================*/
const scrollToTopBtn = $(".scrollToTop");

// Show or hide the button based on scroll position
function handleScrollToTop() {
  if ($(window).scrollTop() > 400) {
    scrollToTopBtn.fadeIn();
  } else {
    scrollToTopBtn.fadeOut();
  }
}

$(window).on("scroll", handleScrollToTop);
scrollToTopBtn.on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

handleScrollToTop(); // Initial check when the page loads

/* =========================================================
    Sticky Header
=========================================================*/
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

/* =========================================================
    Slick Slider
=========================================================*/
const $slider = $(".fe-slider-content");
const $progressBar = $(".fe-slide-progress");
const $progressBarLabel = $(".slider__label");

// Update progress bar on slide change
$slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  const calc = (nextSlide / (slick.slideCount - 1)) * 100;
  $progressBar
    .css("background-size", calc + "% 100%")
    .attr("aria-valuenow", calc);
  $progressBarLabel.text(calc.toFixed(0) + "% completed");
});

// Initialize Slick Slider
$slider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 200,
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

// Refresh AOS after Slick initialization to fix animation issues
$slider.on("setPosition", function () {
  AOS.refresh();
});
