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

  //slider in section block__moments
  $('.block__moments__slider').slick({

  })

  let momentsSlider = $('.block__moments__slider');
  let nextBtn = $('.slick-next');
  let prevBtn = $('.slick-prev');

  momentsSlider.find($(prevBtn)).html('<span class="s s-arrow-left"><span class="hide">hide</span></span>');

  momentsSlider.find($(nextBtn)).html('<span class="s s-arrow-right"><span class="hide">hide</span></span>');

  //slider in section block__center-slick
  $('.block__center-slick__slider').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    variableHeight: true
  });

  let centerSlide = $('.block__center-slick__slider').find('.slide');
  let prev = $('.block__center-slick__slider').find('.slick-prev');
  let next = $('.block__center-slick__slider').find('.slick-next');

  let center = $('.block__center-slick__slider').find('.slide');
  //console.log(centerSlide.length);

  next.on('click', () => {

    for (let i = 0; i < center.length; i++) {

      if (!$(center).hasClass('slick-active')) {
        console.log($(this));
        //$(this).addClass('only');
      }
    }



    let txt = $('.block__center-slick__txt');
    txt.removeClass('block__center-slick__txt--show');

    let current = centerSlide.find('.slick-center');
    //console.log(current);

    let curTxt = current.find('.block__center-slick__txt');
    curTxt.addClass('block__center-slick__txt--show');

  });

  prev.html('<span class="s s-arrow-left"><span class="hide">hide</span></span>');

  next.html('<span class="s s-arrow-right"><span class="hide">hide</span></span>');

  //header dropdown
  let hamburger = $('.hamburger__logo');
  let dropMenu = $('.block__header--nav');

  hamburger.on('click', () => {

    hamburger.toggleClass('block__header--open');

    if (hamburger.hasClass('block__header--open')) {
      dropMenu.addClass('block__header--down');
    }

    else {
      dropMenu.removeClass('block__header--down');
    }
  })
});


