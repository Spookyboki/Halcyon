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
});
