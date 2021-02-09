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

