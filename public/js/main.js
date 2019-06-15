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
});
