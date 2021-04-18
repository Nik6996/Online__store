//



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




new Swiper('.image-slider', {
	// СТРЕЛКИ
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// БЕСКОНЕЧНЫЙ СЛАЙДЕР
	loop: false,
	//  АВТОПРОКРУТКА
	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	speed: 800,

	//ЭФФЕКТЫ
	effect: 'fade',
});

new Swiper('.slider-extra', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
	// autoplay: {
	// 	delay: 2000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false
	// },
	slidesPerView: 3,
	breakpoints: {
		1100: {
			slidesPerView: 3,
		},
		750: {
			slidesPerView: 2,
		},
		400: {
			slidesPerView: 1,
		},

	}

})