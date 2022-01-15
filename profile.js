// Profile 바를 찾는다.
var Profile = document.querySelector("#Profile");

// Profile에 들어갈 avatar의 html 코드를
// string 으로 저장한다.
// 저장된 string을 N 개 (사용자 수만큼) 만큼 복사하낟.
var appended = "";

for (var i = 0; i < 3; i++) {
  appended += `<div class="avatar"> ${i} </div>`;
}

// 복사된 html string을 찾은 Profile에 추가한다.

Profile.innerHTML = appended;
