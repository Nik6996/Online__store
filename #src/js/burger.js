



$(document).ready(function () {
	$('.nav-header__burger').click(function () {
		$('.nav-header__burger, .burger, .nav-header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



// let btn = document.getElementsByClassName('.icon-menu');
// btn[0].onclick = function () {
// 	btn[0].classList.add('.icon-menu__active');
// }

