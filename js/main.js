$(function () {
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 1,
    },
  });
  $(".menu-btn").on("click", function () {
    $(".header_nav-list").toggleClass("active");
  });
});

$(".characters_slider-img").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".characters_slider-textblock",
  fade: true,
  prevArrow:
    '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
  nextArrow:
    '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".characters_slider-textblock").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".characters_slider-img",
  arrows: false,
});
