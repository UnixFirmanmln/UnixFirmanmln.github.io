// sticky
window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// toogle for media screen
function toggle(){
	var header = document.querySelector("header");
	header.classList.toggle("active");
}

// rgb scroll
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}

// sound
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
	if (isPlaying) {
		myAudio.pause()
	} else {
		myAudio.play();
	}
	};
myAudio.onplaying = function() {
	isPlaying = true;
};
myAudio.onpause = function() {
	isPlaying = false;
};