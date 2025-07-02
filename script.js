const video = document.getElementById('introVideo');
const videoContainer = document.getElementById('videoContainer');
const gameContainer = document.getElementById('gameContainer');

video.addEventListener('pause', () => video.play());
video.addEventListener('seeking', () => video.currentTime = 0);
video.addEventListener('seeked', () => video.currentTime = 0);

window.addEventListener('keydown', e => {
  e.preventDefault();
}, {capture:true});

window.addEventListener('contextmenu', e => e.preventDefault());

video.addEventListener('ended', () => {
  videoContainer.style.display = 'none';
  gameContainer.style.display = 'flex';
});
