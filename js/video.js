const video = document.getElementById('railVideo');
const playBtn = document.getElementById('playPause');
const muteBtn = document.getElementById('mute');
const restartBtn = document.getElementById('restart');
const seekBar = document.getElementById('seekBar');
const infoOverlay = document.getElementById('infoOverlay');
const youtubeFallback = document.getElementById('youtubeFallback');

// ✅ Fallback if MP4 not supported
if (!video.canPlayType('video/mp4')) {
  video.style.display = 'none';
  youtubeFallback.classList.remove('hidden');
}

// ✅ Play / Pause
playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play().catch(err => console.log("Playback error:", err));
    playBtn.textContent = '⏸ Pause';
  } else {
    video.pause();
    playBtn.textContent = '▶️ Play';
  }
});

// ✅ Mute / Unmute
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔊 Unmute' : '🔇 Mute';
});

// ✅ Restart
restartBtn.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
});

// ✅ Seek bar and overlay logic
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  seekBar.value = progress;

  if (video.currentTime >= 25 && video.currentTime <= 30) {
    infoOverlay.classList.remove('hidden');
  } else {
    infoOverlay.classList.add('hidden');
  }
});

seekBar.addEventListener('input', () => {
  const newTime = (seekBar.value / 100) * video.duration;
  video.currentTime = newTime;
});
