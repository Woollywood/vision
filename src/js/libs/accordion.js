import Accordion from 'accordion-js';

if (document.querySelector('.section-4__spollers')) {
	new Accordion('.section-4__spollers', {
		onlyChildNodes: false,
		elementClass: 'spollers',
		triggerClass: 'spollers__title',
		panelClass: 'spollers__body',
		activeClass: '_spoller-active',
	});
}

if (document.querySelector('.menu__list')) {
	new Accordion('.menu__list', {
		onlyChildNodes: false,
		elementClass: 'menu__item--accordion',
		triggerClass: 'menu__summary',
		panelClass: 'sub-menu',
		activeClass: '_spoller-active',
	});
}

if (document.querySelector('.price-list__wrapper')) {
	new Accordion('.price-list__wrapper', {
		onlyChildNodes: false,
		elementClass: 'price-item',
		triggerClass: 'price-item__title',
		panelClass: 'price-item__body',
		activeClass: '_spoller-active',
	});
}