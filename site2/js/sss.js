// 메뉴 아이콘 클릭 시 메뉴 열기
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.topnav');
menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('active');
});

// body 영역 클릭 시 메뉴 닫기
document.body.addEventListener('click', function(e) {
  if (!menu.classList.contains('active')) {
    return;
  }
  if (menu.contains(e.target) || menuBtn.contains(e.target)) {
    return;
  }
  menu.classList.remove('active');
});