document.querySelector('.header__burger').addEventListener('click', function () {
	document.querySelector('.header__burger span').classList.toggle('active');
	document.querySelector('.header__burger').classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('active');
})


window.addEventListener('scroll', () => {
	const header = document.querySelector('.main-header');

	const Y = window.scrollY;

	if (Y >= 100) {
		header.classList.add('fixed');
	} else if (Y < 50) {
		header.classList.remove('fixed');
	}
});


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

document.querySelectorAll('.neighbours__swiper-container').forEach(function (elem) {
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
			},
		}
	});
});

document.querySelectorAll('.services__swiper-container').forEach(function (elem) {
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
				slidesPerView: 1,
				spaceBetween: 20,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
});
document.querySelectorAll('.testimonials__swiper-container').forEach(function (elem) {
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
				slidesPerView: 1,
				spaceBetween: 20,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 2,
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

lightgallery.init();

let open_modal = document.getElementById('open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
open_modal.addEventListener('click', function () {
	modal.classList.add('modal_vis');
	body.classList.add('body_block');
	document.getElementById('videoFrame').src = "https://www.youtube.com/embed/rqLGMMXePQU"
});
close_modal.addEventListener('click', function () {
	window.setTimeout(function () {
		modal.classList.remove('modal_vis');
		body.classList.remove('body_block');
	}, 500);
	document.getElementById('videoFrame').src = ""
});

let business = document.querySelector('.video__content-business');
let people = document.querySelector('.video__content-people');
let video = document.querySelector('.video__media');

business.addEventListener('mouseover', function () {
	video.src = "video/business-teaser.mp4";
	document.querySelector('.video__content-people h2').style.color = "#878787";
	document.querySelector('.video__content-business h2').style.color = "#fff";
});
people.addEventListener('mouseover', function () {
	video.src = "video/people-teaser.mp4";
	document.querySelector('.video__content-people h2').style.color = "#fff";
	document.querySelector('.video__content-business h2').style.color = "#878787";
});

//////////////////////////////////////////////// not finish
// let about = document.querySelector("#about");
// window.addEventListener("scroll", function () {
// 	var windo = window.pageYOffset + 100;
// 	if (about.offsetTop <= windo && portfolio.offsetTop > windo) {
// 		document.querySelector(".header__link--about").setAttribute("id", "active");
// 		document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
// 	}
// });