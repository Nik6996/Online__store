

let burgerBtn = document.querySelector('.header-nav__burger');
let burgerBtn1 = document.querySelector('.burger');
let burgerBtn2 = document.querySelector('.header-nav__menu');
let burgerBtnClose = document.querySelector('.burger__close');
let loginBtn = document.querySelector('.bar-header__person');
let loginBtn2 = document.querySelector('.login');
let closeLogin = document.querySelector('.login__close-button');
let closeLoginBtn = document.querySelector(".login");
let hiddenBody = document.querySelector("body");
//==============================================================БУРГЕР===========================================================

burgerBtn.addEventListener("click", function (e) {
	burgerBtn.classList.toggle('active');
	burgerBtn1.classList.toggle('active');
	burgerBtn2.classList.toggle('active');
	hiddenBody.classList.toggle('lock');
});

burgerBtnClose.addEventListener('click', function (e) {
	burgerBtn1.classList.remove('active');
	burgerBtn2.classList.remove('active');
	burgerBtn.classList.remove('active');
	hiddenBody.classList.remove('lock');
});

// $(document).ready(function () {
// 	$('.header-nav__burger').click(function () {
// 		$('.header-nav__burger, .burger, .header-nav__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });
//==============================================================LOGIN===================================================

loginBtn.addEventListener('click', function (e) {
	loginBtn.classList.toggle('active');
	loginBtn2.classList.toggle('active');
})


closeLogin.addEventListener('click', function (e) {
	closeLogin.classList.remove('active');
	closeLoginBtn.classList.remove('active');
	loginBtn.classList.remove('active');
	hiddenBody.classList.remove('lock');
})
// $(document).ready(function () {
// 	$('.bar-header__person').click(function () {
// 		$('.login , .bar-header__person').toggleClass('active');

// 	});
// });

// $(document).ready(function () {
// 	$('.login__close-button').click(function () {
// 		$('.login, .bar-header__person ').removeClass('active');

// 	});
// });
// let btn = document.getElementsByClassName('.icon-menu');
// btn[0].onclick = function () {
// 	btn[0].classList.add('.icon-menu__active');
// }










