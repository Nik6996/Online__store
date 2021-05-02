
$(document).ready(function () {
	$('.header-nav__burger').click(function () {
		$('.header-nav__burger, .burger, .header-nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$(document).ready(function () {
	$('.bar-header__person').click(function () {
		$('.login , .bar-header__person').toggleClass('active');

	});
});

$(document).ready(function () {
	$('.login__close-button').click(function () {
		$('.login, .bar-header__person ').removeClass('active');

	});
});
// let btn = document.getElementsByClassName('.icon-menu');
// btn[0].onclick = function () {
// 	btn[0].classList.add('.icon-menu__active');
// }

