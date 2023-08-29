/*
Документация по работе с шаблоном:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper

*/
// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';

/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Создание оболочки для блоков со слайдерами
// Оболочка обязательно должна включать в себя название класса с элементом "__swiper"
// Только тогда будет грамотно сгенерировано название классов для работы swiper
function buildSliders() {
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach((slider) => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	// Список слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.slider-masters')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-masters', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-masters__controlls .slider-arrow-prev',
				nextEl: '.slider-masters__controlls .slider-arrow-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.65,
				},
				479.98: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				589.98: {
					slidesPerView: 3,
				},
				991.98: {
					spaceBetween: 20,
					slidesPerView: 4,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.slider-reviews')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-reviews', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			spaceBetween: 10,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-reviews__controlls .slider-arrow-prev',
				nextEl: '.slider-reviews__controlls .slider-arrow-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.25,
				},
				379.98: {
					slidesPerView: 1.8,
				},
				479.98: {
					slidesPerView: 2.2,
				},
				579.98: {
					slidesPerView: 2.6,
				},
				679.98: {
					slidesPerView: 3.2,
				},
				779.98: {
					slidesPerView: 3.8,
				},
				879.98: {
					slidesPerView: 4.2,
				},
				1079.98: {
					slidesPerView: 5.2,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.section-17__slider-container')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.section-17__slider-container', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			spaceBetween: 10,
			slidesPerView: 1,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.section-17__slider-controlls .slider-arrow-prev',
				nextEl: '.section-17__slider-controlls .slider-arrow-next',
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.certificate-slider')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.certificate-slider', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.certificate-slider__controlls .slider-arrow-prev',
				nextEl: '.certificate-slider__controlls .slider-arrow-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 5,
					slidesPerView: 2.7,
				},
				479.98: {
					spaceBetween: 5,
					slidesPerView: 3,
				},
				589.98: {
					spaceBetween: 10,
					slidesPerView: 3.7,
				},
				991.98: {
					spaceBetween: 10,
					slidesPerView: 4.7,
				},
			},
			// События
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Генерируем оболочку для слайдеров
	buildSliders();
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролл на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
