// new Swiper('.image-slider', {
// 	// СТРЕЛКИ
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// 	// БЕСКОНЕЧНЫЙ СЛАЙДЕР
// 	loop: false,
// 	//  АВТОПРОКРУТКА
// 	autoplay: {
// 		delay: 2000,
// 		stopOnLastSlide: true,
// 		disableOnInteraction: false
// 	},


// 	speed: 800,

// 	//ЭФФЕКТЫ
// 	effect: 'fade',
// });
document.addEventListener('DOMContentLoaded', function () {
	new Swiper('.slider-extra', {
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev'
		},
		autoplay: {
			delay: 2000,
			// 	stopOnLastSlide: false,
			// 	disableOnInteraction: false
		},
		slidesPerView: 3,
		breakpoints: {
			1100: {
				slidesPerView: 3,
			},
			750: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 2,
			},

		}

	})
});