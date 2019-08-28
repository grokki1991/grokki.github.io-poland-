
// ---- Бургер-меню
document.getElementById('burger').onclick = burger;

function burger() {
	var list = document.getElementsByClassName('list-menu');
	for (var i = list.length - 1; i >= 0; i--) {
		list[i].style.display = (list[i].style.display == "block") ? "none" : "block";
		var znak = document.getElementsByClassName('burger');
	}
	this.classList.toggle("change");
}

// ---- Slider

var next = document.getElementById('next');
var prew = document.getElementById('prev');

var slides = document.getElementsByClassName('offers-box');
for(var i=0; i<slides.length; i++) {
   slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
       activeEl.style.opacity = "0";
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       this.classList.remove('no_active');
       prew.classList.remove('no_active');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('no_active');
       }
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.opacity = "1";
       activeEl.classList.remove('active');
       activeEl.previousElementSibling.classList.add('active');
       this.classList.remove('no_active');
       next.classList.remove('no_active');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('no_active');
       }
    }
}
