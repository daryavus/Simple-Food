$(function(){
  $('.feedback__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="feedback__arrows feedback__arrows--left"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="feedback__arrows feedback__arrows--right"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>'
  });

});

var mixer = mixitup('.popular__content');