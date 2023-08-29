// all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger } from 'gsap/all.js';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (e) => {
	let privatePolicyContentWrapper = document.querySelector('.private-policy__content');
	if (!privatePolicyContentWrapper) {
		return;
	}

	let privatePolicyListItems = privatePolicyContentWrapper?.querySelectorAll('ol li');
	privatePolicyListItems = Array.from(privatePolicyListItems).filter((elem) => elem.querySelector('ol'));

	let privatePolicySidebar = document.querySelector('.private-policy__sidebar');
	let privatePolicyLinks = privatePolicySidebar?.querySelectorAll('ol li');

	let privatePolicyPoints = new Map();
	privatePolicyLinks.forEach((link, index) => {
		privatePolicyPoints.set(link, privatePolicyListItems[index]);
	})

	setTimeout(() => {
		for (const [sidebarLink, sectionItem] of privatePolicyPoints) {
			gsap.to(sidebarLink, {
				scrollTrigger: {
					trigger: sectionItem,
					start: '-1%',
					end: 'bottom',

					onEnter: e => {
						sidebarLink.classList.add('current');
					},

					onLeave: e => {
						sidebarLink.classList.remove('current');
					},

					onEnterBack: e => {
						sidebarLink.classList.add('current');
					},

					onLeaveBack: e => {
						sidebarLink.classList.remove('current');
					}
				}
			});
		}
	}, 10);
});
