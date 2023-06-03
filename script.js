// Валидация формы

// const form = document.querySelector(".form");
// const input = form.querySelectorAll(".form__input");
// const password = form.querySelector("input[name= password]");
// const passwordRepeat = form.querySelector("input[name= password-repeat]");
// const checkbox = form.querySelector(".form__input-checkbox");
// let isValidate = false;

// const regExpName = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
// const regExpPassword =
// 	/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
// const regExpEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
// const addMask = () => {
// 	document.addEventListener("DOMContentLoaded", function () {
// 		let eventCalllback = function (e) {
// 			let el = e.target;
// 			let clearVal = el.dataset.phoneClear;
// 			let pattern = el.dataset.phonePattern;
// 			let matrixDef = "+7(___) ___-__-__";
// 			let matrix = pattern ? pattern : matrixDef;
// 			let i = 0;
// 			let def = matrix.replace(/\D/g, "");
// 			let val = e.target.value.replace(/\D/g, "");
// 			if (clearVal !== "false" && e.type === "blur") {
// 				if (val.length < matrix.match(/([\_\d])/g).length) {
// 					return;
// 				}
// 			}
// 			if (def.length >= val.length) {
// 				val = def;
// 			}
// 			e.target.value = matrix.replace(/./g, function (a) {
// 				if (/[_\d]/.test(a) && i < val.length) {
// 					return val.charAt(i++);
// 				} else if (i >= val.length) {
// 					return "";
// 				} else {
// 					return a;
// 				}
// 			});
// 		};
// 		let phoneInputs = form.querySelectorAll('input[name="tel"]');
// 		for (let elem of phoneInputs) {
// 			for (let ev of ["input", "blur", "focus"]) {
// 				elem.addEventListener(ev, eventCalllback);
// 			}
// 		}
// 	});
// };

// const validateElement = (element) => {
// 	if (element.name === "name") {
// 		if (!regExpName.test(element.value) && element.value !== "") {
// 			element.nextElementSibling.textContent = "Не валидное имя";
// 			isValidate = false;
// 		} else {
// 			element.nextElementSibling.textContent = "";
// 			isValidate = true;
// 		}
// 	}
// 	if (element.name === "email") {
// 		if (!regExpEmail.test(element.value) && element.value !== "") {
// 			element.nextElementSibling.textContent = "Не валидный email";
// 			isValidate = false;
// 		} else {
// 			element.nextElementSibling.textContent = "";
// 			isValidate = true;
// 		}
// 	}
// 	if (element.name === "tel") {
// 		if (element.value.length < 11 && element.value !== "") {
// 			element.nextElementSibling.textContent = "Введите полный номер телефона";
// 			isValidate = false;
// 		} else {
// 			element.nextElementSibling.textContent = "";
// 			isValidate = true;
// 		}
// 	}
// 	if (element.name === "password") {
// 		if (!regExpPassword.test(element.value) && element.value !== "") {
// 			element.nextElementSibling.textContent = "Не валидный пароль";
// 			isValidate = false;
// 		} else {
// 			element.nextElementSibling.textContent = "";
// 			isValidate = true;
// 		}
// 	}
// 	if (element.name === "password-repeat") {
// 		if (password.value !== passwordRepeat.value && element.value !== "") {
// 			element.nextElementSibling.textContent = "Пароль не совпадает";
// 			isValidate = false;
// 		} else {
// 			element.nextElementSibling.textContent = "";
// 			isValidate = true;
// 		}
// 	}
// };

// addMask();

// const submit = () => {
// 	alert("Данные отправлены");
// };

// input.forEach((element) => {
// 	element.addEventListener("blur", () => {
// 		validateElement(element);
// 	});
// });

// form.addEventListener("submit", (evt) => {
// 	evt.preventDefault();
// 	input.forEach((element) => {
// 		if (element.value === "") {
// 			element.nextElementSibling.textContent = "Заполните поле";
// 			isValidate = false;
// 		} else {
// 			element.nextElementSibling.textContent = "";
// 			isValidate = true;
// 		}
// 		if (element.name === "tel") {
// 			if (element.value.length < 11 && element.value !== "") {
// 				element.nextElementSibling.textContent =
// 					"Введите полный номер телефона";
// 				isValidate = false;
// 			} else {
// 				element.nextElementSibling.textContent = "";
// 				isValidate = true;
// 			}
// 		}
// 	});
// 	if (isValidate) {
// 		if (checkbox.checked) {
// 			submit();
// 			form.reset();
// 			LS.removeItem("formData");
// 		} else {
// 			alert("согласитесь с условиями");
// 		}
// 	}
// });

// Сохранение введенных данных

// let formData = {};
// const LS = localStorage;

// form.addEventListener("input", (event) => {
// 	formData[event.target.name] = event.target.value;
// 	LS.setItem("formData", JSON.stringify(formData));
// });

// if (LS.getItem("formData")) {
// 	formData = JSON.parse(LS.getItem("formData"));

// 	for (let key in formData) {
// 		if (form.elements[key] === checkbox && formData[key] === "on") {
// 			form.elements[key].checked = true;
// 		}
// 		form.elements[key].value = formData[key];
// 	}
// }

// Слайдер

// const addSlider = ()=> {
// 	let position = 0;

// 	const slidesToScroll = 1;
// 	let slidesToShow = 4;

// 	if (viewport < 1199) {
// 	  slidesToShow = 2;
// 	}

// 	if (viewport < 768) {
// 	  slidesToShow = 1;
// 	}

// 	const trainersWrapper = document.querySelector('.trainers__wrapper');
// 	const list = trainersWrapper.querySelector('.trainers__list');
// 	let gap = Number(window.getComputedStyle(list).gap.replace('px', ''));
// 	const items = list.querySelectorAll('.trainers__item');
// 	const sliderButton = document.querySelectorAll('.trainers__button');
// 	const buttonLeft = document.querySelector('.trainers__button--left');
// 	const buttonRight = document.querySelector('.trainers__button--right');
// 	const itemsCount = items.length;
// 	const itemWidth = (trainersWrapper.offsetWidth - ((slidesToShow - 1) * gap)) / slidesToShow;
// 	const movePosition = slidesToScroll * (itemWidth + gap);

// 	trainersWrapper.classList.add('trainers__wrapper--js');
// 	list.classList.add('trainers__list--js');
// 	sliderButton.forEach((element)=> {
// 	  element.classList.remove('trainers__button--hidden');
// 	});

// 	items.forEach((element)=> {
// 	  element.style.minWidth = `${itemWidth}px`;
// 	});

// 	buttonLeft.addEventListener('click', ()=> {
// 	  position += movePosition;
// 	  setPosition();
// 	  checkButton();
// 	});

// 	buttonRight.addEventListener('click', ()=> {
// 	  position -= movePosition;
// 	  setPosition();
// 	  checkButton();
// 	});

// 	const setPosition = ()=> {
// 	  list.style.transform = `translateX(${position}px)`;
// 	};

// 	const checkButton = ()=> {
// 	  buttonLeft.disabled = position === 0;
// 	  buttonRight.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// 	};

// 	checkButton();
//   };
