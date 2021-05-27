document.addEventListener('DOMContentLoaded', function () {
	const slide = document.querySelectorAll('.image-slider__image img');
	const swiperrContainer = document.querySelector('.swiperr-wrapper');
	let count = 0;
	let width;

	function init() {
		//	console.log('resize');
		width = document.querySelector('.slider').offsetWidth;
		swiperrContainer.style.width = width * slide.length + 'px';
		slide.forEach(item => {
			item.style.width = width + 'px';
			item.style.height = 'auto';
			rollSlider();
		})
		console.log();
	}
	window.addEventListener('resize', init);
	init();

	document.querySelector('.image-slider__prev').addEventListener('click', function () {
		count--;
		if (count < 0) {
			count = slide.length - 1;
		}
		rollSlider();
	});
	document.querySelector('.image-slider__next').addEventListener('click', function () {
		count++;
		if (count >= slide.length) {
			count = 0;
		}
		rollSlider();
	});

	function rollSlider() {
		swiperrContainer.style.transform = 'translate(-' + count * width + 'px) ';
	}

});