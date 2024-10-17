/*main slick slide*/
var $slide = $(".slider").not(".slider-items").slick({
  fade: true,
  speed: 1200,
  autoplaySpeed: 3000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
});

/*sub slick slide*/
$(function() {
  $(".main-contents-imgbox.slider-item ul").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });
});

/*headerアニメーション*/
$(function() {
  const allButton = $('.main-contents-nav-item a[href=""]');
  const downBox = $('.down-box');

  allButton.on('click', function(event) {
    event.preventDefault();
    downBox.toggleClass('show');
  });
});

/*hamburger*/
$(function() {
  $('.main-contents-hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.main-contents-nav-sp').toggleClass('active');
  });

  $('.toggle-icon').on('click', function() {
    $(this).next('.sub-menu').slideToggle();
    $(this).text($(this).text() === '+' ? '-' : '+');
  });
});