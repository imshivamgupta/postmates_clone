$(document).ready(function() {
  $('.feature .grid').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev btn slider-btn"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next btn slider-btn"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Store in general
  $('.store-general .grid').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev btn slider-btn"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next btn slider-btn"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // declare variable
  var scrollTop = $('.scrollTop');

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css('opacity', '1');
    } else {
      $(scrollTop).css('opacity', '0');
    }
  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });
});
