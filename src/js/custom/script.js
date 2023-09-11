// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

window.addEventListener('load', (windowEvent) => {
	let galleryItems = document.querySelectorAll('[data-gallery]');
	if (galleryItems)
		galleryItems.forEach((item, index) => {
			item.dataset.galleryId = index;
			let galleryImage = item.querySelector('.certificate-slider__inner').cloneNode();
			galleryImage.classList.remove('certificate-slider__inner');
			let galleryContainer = document.createElement('div');
			galleryContainer.classList.add('gallery-container');
			galleryContainer.dataset.galleryContainerId = index;
			galleryContainer.innerHTML = `
										<div class="gallery-wrapper">
											<div class="gallery-image-ibg">
												<button class="gallery-close" type="button" data-gallery-close>
													<svg>
														<use xlink:href="img/icons/icons.svg#cross"></use>
													</svg>
												</button>
											</div>
										</div>
		`;
			galleryContainer.querySelector('.gallery-image-ibg').append(galleryImage);
			document.body.append(galleryContainer);
		});

	let privatePolicyContentWrapper = document.querySelector('.private-policy__content');
	if (privatePolicyContentWrapper) {
		let privatePolicyListItems = privatePolicyContentWrapper.querySelectorAll('ol li');
		privatePolicyListItems = Array.from(privatePolicyListItems).filter((elem) => elem.querySelector('ol'));
		privatePolicyListItems.forEach((elem, i) => {
			elem.id = `anchor-id-${i}`;
		});
	}

	let privatePolicySidebar = document.querySelector('.private-policy__sidebar');
	if (privatePolicySidebar) {
		let privatePolicyLinks = privatePolicySidebar.querySelectorAll('ol li a');

		privatePolicyLinks.forEach((item, i, arr) => (item.dataset.goto = `#anchor-id-${i}`));
	}

	document.addEventListener('keydown', (keyEvent) => {
		if (keyEvent.target.nodeName === 'TEXTAREA')
			setTimeout(() => {
				keyEvent.target.style.height = `${keyEvent.target.scrollHeight}px`;
			}, 1);
	});

	document.addEventListener('click', (clickEvent) => {
		const targetElement = clickEvent.target;

		if (window.innerWidth > 767.98 && isMobile.any())
			if (
				targetElement.closest('.menu__item') &&
				targetElement.closest('.menu__item').querySelector('.sub-menu')
			) {
				if (clickEvent.pointerId != -1) {
					const menuItem = targetElement.closest('.menu__item');
					menuItem.querySelector('.sub-menu').classList.toggle('_touch-show');
				}
			}
		if (targetElement.closest('.connect-menu__button')) {
			targetElement.closest('.connect-menu__button').classList.toggle('_open');
			document.querySelector('.connect-menu__social').classList.toggle('_open');
		}
		if (
			targetElement.classList.contains('form-bottom__form-button') &&
			targetElement.closest('.form-bottom__new-ticket')
		)
			targetElement.closest('.form-bottom__form-wrapper').classList.remove('_sent');
		if (
			targetElement.classList.contains('section-3__new-ticket-button') &&
			targetElement.closest('.section-3__new-ticket')
		)
			targetElement.closest('.section-3__form-wrapper').classList.remove('_sent');
		if (targetElement.closest('[data-gallery]')) {
			clickEvent.preventDefault();
			let button = targetElement.closest('[data-gallery]');
			let galleryId = button.dataset.galleryId;
			document.querySelector(`[data-gallery-container-id="${galleryId}"]`).classList.add('_show');
			document.body.style.overflow = 'hidden';
		}
		if (targetElement.closest('[data-gallery-close]')) {
			targetElement.closest('.gallery-container').classList.remove('_show');
			document.body.style.overflow = '';
		}
		if (targetElement.closest('.cookie-agreement__body .button-section-small')) {
			targetElement.closest('.cookie-agreement').classList.remove('active');
		}
		if (targetElement.closest('.menu__summary')) {
			targetElement.closest('.menu__summary').click();
		}

		if (targetElement.closest('.menu__summary--link')) {
			console.log('prevent default');
			clickEvent.preventDefault();
		}

		if (window.innerWidth <= 1060 && targetElement.closest('.menu__summary--link-desktop')) {
			console.log('prevent default desk');
			clickEvent.preventDefault();
		}
	});
});