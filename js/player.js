

const modalVideo = document.getElementById('my-video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
	if (modalVideo.paused) {
		modalVideo.play();
	} else {
		modalVideo.pause();
	}
}

// update play/pause icon
function updatePlayIcon() {
	if (modalVideo.paused) {
		play.innerHTML = '<i class="icon-play"></i>';
	} else {
		play.innerHTML = '<i class="icon-pause"></i>';
	}
}

// Update progress & timestamp
function updateProgress() {
	progress.value = (modalVideo.currentTime / modalVideo.duration) * 100;

	// Get minutes
	let mins = Math.floor(modalVideo.currentTime / 60);
	if (mins < 10) {
		mins = '0' + String(mins);
	}

	// Get seconds
	let secs = Math.floor(video.currentTime % 60);
	if (secs < 10) {
		secs = '0' + String(secs);
	}

	timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
	modalVideo.currentTime = (+progress.value * modalVideo.duration) / 100;
}

// Stop video
function stopVideo() {
	modalVideo.currentTime = 0;
	modalVideo.pause();
}

// Event listeners
modalVideo.addEventListener('click', toggleVideoStatus);
modalVideo.addEventListener('pause', updatePlayIcon);
modalVideo.addEventListener('play', updatePlayIcon);
modalVideo.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);