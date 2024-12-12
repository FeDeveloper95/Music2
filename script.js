const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const downloadButton = document.getElementById('download-track');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const volumeControl = document.getElementById('volume');

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function updateProgressBar() {
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioPlayer.duration;
  audioPlayer.currentTime = (clickX / width) * duration;
}

function changeVolume() {
  audioPlayer.volume = volumeControl.value;
}

playPauseButton.addEventListener('click', togglePlayPause);
downloadButton.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'I_ll_Be_There.mp3'; 
  link.download = 'I_ll_Be_There.mp3';
  link.click();
});
audioPlayer.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', setProgressBar);
volumeControl.addEventListener('change', changeVolume);