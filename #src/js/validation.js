
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);


		let formData = new FormData(form);
		// formData.append();

		if (error === 0) {

			form.classList.add('_sending');
			// let response = await fetch('sendmail.php', {
			// 	method: 'POST',
			// 	body: formData
			// });
			// if (response.ok) {
			// 	let response = await response.json();
			// 	alert(result.message);
			// 	form.reset();
			// 	form.classList.remove('_sending');
			// } else {
			// 	alert('ошибка отправки формы')
			// 	form.classList.remove('_sending');
			// }

		} else {
			alert('заполните форму');
		}


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
		return error;
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

//-----------------------------------валидация регистрации----------------------------------//

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('login');
	form.addEventListener('submit', formSend);

	let formData = new FormData(form);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			// if (response.ok) {
			// 	let response = await response.json();
			// 	alert(result.message);
			// 	form.reset();
			// 	form.classList.remove('_sending');
			// } else {
			// 	alert('ошибка отправки формы')
			// 	form.classList.remove('_sending');
			// }
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._require');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
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
function phoneTest(input) {
	return !/^(?:\(\d{3}\)|\d{3})(?: *- *)?\d{3}(?: *- *)?\d{4}$/.test(input.value);
}