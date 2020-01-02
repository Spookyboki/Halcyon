'use strict'

$('document').ready(function() {

  let image = $('.image');

  for (let i = 0; i < image.length; i++) {

    $(image[i]).mouseover((e) => {

      let inner = $(e.currentTarget).find('.block__inner');
      console.log(inner);
      inner.addClass('block__inner--show');
    });

    $(image[i]).mouseout((e) => {

      let inner = $(e.currentTarget).find('.block__inner');
      console.log(inner);
      inner.removeClass('block__inner--show');
    });
  }

  $('.block__moments__slider').slick({

  })

  let momentsSlider = $('.block__moments__slider');
  let nextBtn = $('.slick-next');
  let prevBtn = $('.slick-prev');

  momentsSlider.find($(prevBtn)).html('<span class="s s-arrow-left"><span class="hide">hide</span></span>');

  momentsSlider.find($(nextBtn)).html('<span class="s s-arrow-right"><span class="hide">hide</span></span>');
});
