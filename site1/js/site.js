const section2 = new Swiper('.inner_wrap.swiper', { // 프레임의 요소명
    direction: 'horizontal', // 스와이프의 방향
    loop: false, // 순환 여부
  
    pagination: {
      el: '.swiper-pagination', // 페이지 메뉴 요소명
      clickable : true,
      type: 'fraction' // 페이지 버튼 대신 슬라이드 번호
    },
  
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼 요소명
      prevEl: '.swiper-button-prev', // 이전 버튼 요소명
    },
    spaceBetween: 80, // 패널 사이의 간격을 50px로 설정
    slidesPerView: 'auto', // css에 지정한 슬라이더의 크기를 반영
    grabCursor: true, // 스와이프 시 마우스 포인터 모양 변경
    centeredSlides: true, // 슬라이더 패널을 항상 가운데로 반환
    speed: 3000, // 슬라이더 이동 속도 지정
    
    effect: 'coverflow', // 이팩트 효과
    coverflowEffect: {
      rotate: 50, // 회전각도
      stretch: -200, // 슬라이드 간의 당김 정도
      depth: 400, // 원근감 지정
      modifier: 1, // 중첩 정도 지정
      slideShadows: false // 슬라이드 그림자 생성
    },
    autoplay: {
      delay: 1000,
      disableOnInterraction: true
    }
  });
  
  const btnStart = document.querySelector('.btnStart');
  const btnStop = document.querySelector('.btnStop');
  
  
  btnStart.addEventListener('click', function(){
    swiper.autoplay.start();
  });
  btnStop.addEventListener('click', function(){
    swiper.autoplay.stop();
  });