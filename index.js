// window > document > body

var weekly = document.querySelector("#Weekly");

var tobeAppended = "";

var weekdays = ["일", "월", "화", "수", "목", "금", "토"];

for (var i = 0; i < 7; i++) {
  tobeAppended += `<div class="todo-status">
	<div>
		${weekdays[i]}
	</div>
	<div>
		V
	</div>
	<div>
		${2 + i}
	</div>
	</div>`;
}
weekly.innerHTML = tobeAppended;

console.log(weekly);

function handleClick() {
  console.log("click");
}

weekly.addEventListener("click", handleClick);
