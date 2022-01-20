let btnOne = document.getElementById("btn-1");
let btnTwo = document.getElementById("btn-2");
let boxOne = document.getElementById("box-1");
let boxTwo = document.getElementById("box-2");

btnOne.onclick = function () {
	boxOne.classList.remove("show-right");
	boxTwo.classList.remove("show-right");
	boxOne.classList.add("show-left");
	boxTwo.classList.add("show-left");
	btnOne.classList.add("activ");
	btnTwo.classList.remove("activ");
};
btnTwo.onclick = function () {
	boxOne.classList.remove("show-left");
	boxTwo.classList.remove("show-left");
	boxOne.classList.add("show-right");
	boxTwo.classList.add("show-right");
	btnTwo.classList.add("activ");
	btnOne.classList.remove("activ");
};

let btnUp = document.getElementById("btn-up");

window.onscroll = function (e) {
	if (window.scrollY >= 1000) {
		btnUp.style.display = "block";
	} else {
		btnUp.style.display = "none";
	}
};

btnUp.onclick = function () {
	window.scrollTo(0, 0);
};
