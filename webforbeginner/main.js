var myButton = document.querySelector("button");
var myTitle = document.querySelector(".my-title");

function changeTitle() {
	myTitle.innerHTML = "Hello Huy!";
}

myButton.onclick = function() {
	changeTitle();
};
