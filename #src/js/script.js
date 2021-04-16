//@@include('burger.js')


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