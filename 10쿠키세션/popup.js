// 팝업 쿠키 생성 함수(쿠키 이름을 받는다)
function createCookie(name) {
    // 쿠키 만료 기간
    var date = new Date();
    date.setDate(date.getDate() + 1); // 1일
    // 쿠키 구문
    var cookie = "";
    cookie += name + "=true;";
    cookie += "expires=" + date.toUTCString() + ";";
    // 쿠키 생성
    document.cookie = cookie;
}
// 쿠키 확인 함수
function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for(var i = 0; i < cookies.length; i++) {
        if(cookies[i].indexOf(name) != -1) { // name쿠키가 포함되어 있음
            return true; // 존재 여부를 true 반환
        }
    }
}