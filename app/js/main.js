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

  let slide = $('.block__center-slick__slider').find('.slide');
  let slideName = $('.block__center-slick__slider').find('.block__latest__slider__name');
  let slideTxt = $('.block__center-slick__slider').find('.block__center-slick__txt');
  let currentSlide = $('.block__center-slick__slider').find('.slick-center');

  let prev = $('.block__center-slick__slider').find('.slick-prev');
  let next = $('.block__center-slick__slider').find('.slick-next');


  //removing shadow, text and name from slider and adding the same on current
  //activie one
  slide.addClass('block__center-slick--shadow');
  slideName.addClass('block__center-slick--no-name');
  slideTxt.addClass('block__center-slick--no-txt');

  currentSlide.removeClass('block__center-slick--shadow');
  currentSlide.find('.block__latest__slider__name').removeClass('block__center-slick--no-name');
  currentSlide.find('.block__center-slick__txt').removeClass('block__center-slick--no-txt');

  next.on('click', () => {

    slide.addClass('block__center-slick--shadow');
    slideName.addClass('block__center-slick--no-name');
    slideTxt.addClass('block__center-slick--no-txt');

    let current = $('.block__center-slick__slider').find('.slick-center');
    current.removeClass('block__center-slick--shadow');

    let curSlide = $(current).find('.block__center-slick--no-name');
    curSlide.removeClass('block__center-slick--no-name');

    let curTxt = $(current).find('.block__center-slick--no-txt');
    curTxt.removeClass('block__center-slick--no-txt');

  });

  prev.on('click', () => {

    slide.addClass('block__center-slick--shadow');
    slideName.addClass('block__center-slick--no-name');
    slideTxt.addClass('block__center-slick--no-txt');

    let current = $('.block__center-slick__slider').find('.slick-center');
    current.removeClass('block__center-slick--shadow');

    let curSlide = $(current).find('.block__center-slick--no-name');
    curSlide.removeClass('block__center-slick--no-name');

    let curTxt = $(current).find('.block__center-slick--no-txt');
    curTxt.removeClass('block__center-slick--no-txt');

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

  //slider for block__latest
  $('.block__latest__slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    variableHeight: true
  });


  let latestSlider = $('.block__latest__slider').find('.slick-track');
  latestSlider.addClass('block__latest__slider--left');

  let lateSlide = $('.block__latest__slider').find('.slide');

  for (let i = 0; i < lateSlide.length; i++) {

    $(lateSlide[i]).mouseover((e) => {

      const inner = $(e.currentTarget).find('.block__latest__slider__pop');
      inner.addClass('block__latest__slider__pop--show');
      inner.addClass('block__latest__slider__pop--shadow');
      $(e.currentTarget).addClass('block__latest__slider__slide--shadow');
    })
  }

  for (let i = 0; i < lateSlide.length; i++) {

    $(lateSlide[i]).mouseout((e) => {

      const inner = $(e.currentTarget).find('.block__latest__slider__pop');
      inner.removeClass('block__latest__slider__pop--show');
      inner.removeClass('block__latest__slider__pop--shadow');
      $(e.currentTarget).removeClass('block__latest__slider__slide--shadow');

    })
  }

  $('.block__latest__slider').find('.slick-prev').html('<span class="s s-arrow-left"><span class="hide">hide</span></span>');

  $('.block__latest__slider').find('.slick-next').html('<span class="s s-arrow-right"><span class="hide">hide</span></span>');

});


