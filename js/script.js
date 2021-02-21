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
			}
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

let open_modalvideo1 = document.querySelector('.video__content-business');
let open_modalvideo2 = document.querySelector('.video__content-people');
let close_modalvideo = document.getElementById('close_modal-video');
let modalvideo = document.getElementById('modal-video');
let bodyvideo = document.getElementsByTagName('body')[0];
open_modalvideo1.addEventListener('click', function () {
	modalvideo.classList.add('modal-video_vis');
	bodyvideo.classList.add('body-video_block');
	document.getElementById('my-video').src = "video/business-teaser.mp4"
});
open_modalvideo2.addEventListener('click', function () {
	modalvideo.classList.add('modal-video_vis');
	bodyvideo.classList.add('body-video_block');
	document.getElementById('my-video').src = "video/people-teaser.mp4"
});
close_modalvideo.addEventListener('click', function () {
	window.setTimeout(function () {
		modalvideo.classList.remove('modal-video_vis');
		bodyvideo.classList.remove('body-video_block');
	}, 500);
	document.getElementById('my-video').src = ""
});


let business = document.querySelector('.video__content-business');
let people = document.querySelector('.video__content-people');
let video = document.querySelector('.video__media');


business.addEventListener('mouseover', function () {
	video.src = "video/business-teaser.mp4";
	document.querySelector('.video__content-people h2').style.color = "#878787";
	document.querySelector('.people__btn .icon-play').style.color = "#878787";
	document.querySelector('.video__content-business h2').style.color = "#fff";
	document.querySelector('.business__btn .icon-play').style.color = "#fff";
});
people.addEventListener('mouseover', function () {
	video.src = "video/people-teaser.mp4";
	document.querySelector('.video__content-people h2').style.color = "#fff";
	document.querySelector('.people__btn .icon-play').style.color = "#fff";
	document.querySelector('.video__content-business h2').style.color = "#878787";
	document.querySelector('.business__btn .icon-play').style.color = "#878787";
});

let intViewportWidth = window.innerWidth;
let buss_btn = document.querySelector('.business__btn');
let peop_btn = document.querySelector('.people__btn');
if (intViewportWidth >= 1200) {
	business.addEventListener('mouseover', function () {
		buss_btn.style.display = "block";
		peop_btn.style.display = "none";
	});
	people.addEventListener('mouseover', function () {
		buss_btn.style.display = "none";
		peop_btn.style.display = "block";
	});
}


let rectangle = document.querySelector(".about__img-rectangle");
let rectangle_height = rectangle.clientHeight;
window.addEventListener("scroll", function () {
	var windo = window.pageYOffset - (rectangle_height * 2);
	if (rectangle.offsetTop <= windo) {
		rectangle.classList.add('rectangle-active');
	}
});
