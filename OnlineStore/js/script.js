
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
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}

			} else if (input.classList.contains('_phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
});
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function phoneTest(input) {
	return !/^(?:\(\d{3}\)|\d{3})(?: *- *)?\d{3}(?: *- *)?\d{4}$/.test(input.value);
}



// const { use } = require("browser-sync");