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
  }

  function moveRight() {
      $('.slides').animate({
          left: - slideWidth
      }, 200, function () {
          $('.slide:first-child').appendTo('.slides');
          $('.slides').css('left', '');
      });
  }

  $('button.prev').click(function () {
      moveLeft();
  });

  $('button.next').click(function () {
      moveRight();
  });

  // 자동슬라이드 기능 추가
  var interval = setInterval(moveRight, 5000); // 3초 간격으로 moveRight 함수 호출

  // 슬라이더에 마우스를 올리면 자동슬라이드를 일시정지시키도록 설정
  $('.slider').mouseenter(function() {
    clearInterval(interval);
  });

  // 슬라이더에서 마우스를 떼면 자동슬라이드를 재개하도록 설정
  $('.slider').mouseleave(function() {
    interval = setInterval(moveRight, 5000);
  });

});
