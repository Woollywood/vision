import mixitup from 'mixitup';

let strGet = window.location.search.slice().replace('?', '').split('-');
if (strGet[0] == 'doctor') {
	if (document.querySelector('.doctor-list__content')) {
		let mixer = mixitup('.doctor-list__content', {
			load: {
				filter: `.doctor-${+strGet[1]}`,
			},
		});
	}
} else {
	if (document.querySelector('.doctor-list__content')) {
		let mixer = mixitup('.doctor-list__content', {
			load: {
				filter: '.doctor-1',
			},
		});
	}
}
