$(document).ready(function(){

    // 화면의 넓이 값과 높이 값
    let height = $(window).height();
    let width = $(window).width();
     
    $('section').height(height);
  
    // 화면의 사이즈가 변하면 section 높이값을 고정
    $(window).resize(function(){
      height = $(window).height();
      $('section').height(height);
    });
    
    // 메뉴 클릭 시 상하스크롤 하기
    $('.bar li').click(function(e){
  
      // 고유의 기능을 막아준다.(a)
      e.preventDefault();
      
      // 화면의 높이값
      const height = $(window).height();
      // 클릭한 요소의 인덱스 값
      const i = $(this).index();
      // 인덱스 값 * 화면의 높이 값
      const nowTop = i * height;
      // 해당 위치로 스크롤 이동
      $('html, body').stop().animate({scrollTop : nowTop},1500);
      
    });
  
    // 스크롤 될 때 마다 현재 영역에 해당하는 메뉴 활성화
    $(window).scroll(function(){
  
      const height = $(window).height();
      // 현재 문서가 스크롤 된 거리
      const scroll = $(window).scrollTop();
      
      // 현재 활성화된 메뉴 아이템 찾기
      const activeIndex = Math.floor(scroll / height);
      $('.bar li').removeClass();
      $('.bar li').eq(activeIndex).addClass('on');
  
    });
  
});


// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// /* Main navigation */
// let panelsSection = document.querySelector(".wrap"),
// 	panelsContainer = document.querySelector(".visual"),
// 	tween;
// document.querySelectorAll(".anchor").forEach(anchor => {
// 	anchor.addEventListener("click", function(e) {
// 		e.preventDefault();
// 		let targetElem = document.querySelector(e.target.getAttribute("href")),
// 			y = targetElem;
// 		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
// 			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
// 				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
// 			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
// 		}
// 		gsap.to(window, {
// 			scrollTo: {
// 				y: y,
// 				autoKill: false
// 			},
// 			duration: 1
// 		});
// 	});
// });

// /* Panels */
// const panels = gsap.utils.toArray("#panels-container .panel");
// tween = gsap.to(panels, {
// 	xPercent: -100 * ( panels.length - 1 ),
// 	ease: "none",
// 	scrollTrigger: {
// 		trigger: "#panels-container",
// 		pin: true,
// 		start: "top top",
// 		scrub: 1,
// 		snap: {
// 			snapTo: 1 / (panels.length - 1),
// 			inertia: false,
// 			duration: {min: 0.1, max: 0.1}
// 		},
// 		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
// 	}
// });


