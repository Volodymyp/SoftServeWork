//header animation change when scroll
window.onscroll = () => {
	const header = document.querySelector('.main-header');

	const Y = window.scrollY;

	if (Y >= 100) {
		header.classList.add('fixed');
	} else if (Y < 50) {
		header.classList.remove('fixed');
	}
}



//background image
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

document.querySelectorAll('.swiper-container').forEach(function (elem) {
	new Swiper(elem, {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		spaceBetween: 10,
		navigation: {
			nextEl: elem.nextElementSibling.nextElementSibling,
			prevEl: elem.nextElementSibling,
		},
		breakpoints: {
			525: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			767: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		}
	});
});

for (let i of document.querySelectorAll(".count, .counter__content-title")) {

	let numberTop = i.getBoundingClientRect().top,
		start = +i.innerHTML,
		end = +i.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > numberTop - window.innerHeight / 1.5) {
			this.removeEventListener('scroll', onScroll);
			let interval = this.setInterval(function () {
				i.innerHTML = ++start;
				if (start == end) {
					clearInterval(interval);
				}
			}, 10);
		}
	});
}



