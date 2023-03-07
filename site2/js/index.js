$(document).ready(function(){
// 카트 아이콘
const cartIcon = document.querySelector('.cart i');

// 카트 드롭다운
const cartDropdown = document.querySelector('.cart-dropdown');

// 카트 아이콘 클릭시 카트 드롭다운 열기/닫기
cartIcon.addEventListener('click', () => {
  if (cartDropdown.style.display === 'block') {
    cartDropdown.style.display = 'none';
  } else {
    cartDropdown.style.display = 'block';
  }
});




  var slideCount = $('.slide').length;
  var slideWidth = $('.slide').width();
  var slideHeight = $('.slide').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('.slider').css({ width: slideWidth, height: slideHeight });

  $('.slides').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('.slide:last-child').prependTo('.slides');

  function moveLeft() {
      $('.slides').animate({
          left: + slideWidth
      }, 200, function () {
          $('.slide:last-child').prependTo('.slides');
          $('.slides').css('left', '');
      });
  };

  function moveRight() {
      $('.slides').animate({
          left: - slideWidth
      }, 200, function () {
          $('.slide:first-child').appendTo('.slides');
          $('.slides').css('left', '');
      });
  };

  $('button.prev').click(function () {
      moveLeft();
  });

  $('button.next').click(function () {
      moveRight();
  });

});