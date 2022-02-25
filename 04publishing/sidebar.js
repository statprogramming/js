// 사이드 js
// 선택지 2개 - window.onload(페이지에서 1개만 사용 가능), js코드를 아래쪽에 삽입 
window.onload = function() {
    var menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", onSidenav);
}
function onSidenav() {
    var side = document.querySelector(".side"); // side 태그
    if(side.style.width == '200px') { // 너비가 200이면
        side.style.width = '0px';
    } else {
        side.style.width = '200px';
    }
}