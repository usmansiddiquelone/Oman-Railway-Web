const audio = document.getElementById('railAudio');
const playBtnA = document.getElementById('playPauseAudio');
const muteBtnA = document.getElementById('muteAudio');
const seekBarA = document.getElementById('seekAudio');
const volumeSlider = document.getElementById('volumeSlider');
const audioInfo = document.getElementById('audioInfo');

// ✅ Play / Pause
playBtnA.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtnA.textContent = '⏸ Pause';
  } else {
    audio.pause();
    playBtnA.textContent = '▶️ Play';
  }
});

// ✅ Mute / Unmute
muteBtnA.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteBtnA.textContent = audio.muted ? '🔊 Unmute' : '🔇 Mute';
});

// ✅ Volume control
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

// ✅ Update seek bar + overlay info
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBarA.value = progress;

  if (audio.currentTime >= 20 && audio.currentTime <= 30) {
    audioInfo.classList.remove('hidden');
  } else {
    audioInfo.classList.add('hidden');
  }
});

// ✅ Seek manually
seekBarA.addEventListener('input', () => {
  const newTime = (seekBarA.value / 100) * audio.duration;
  audio.currentTime = newTime;
});
