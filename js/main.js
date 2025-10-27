/* ============================================================
   OMAN RAILWAY MULTIMEDIA PROJECT - MAIN SCRIPT
   ============================================================ */

// ========== HOME PAGE: "Start Exploring" Button ==========
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'gallery.html';
  });
}

// ========== VIDEO PAGE: Custom Controls ==========
const video = document.getElementById('omanVideo');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');

if (video) {
  // Play / Pause Toggle
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (video.paused || video.ended) {
        video.play();
        playBtn.textContent = 'Pause';
      } else {
        video.pause();
        playBtn.textContent = 'Play';
      }
    });
  }

  // Stop Video
  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      video.pause();
      video.currentTime = 0;
      playBtn.textContent = 'Play';
    });
  }

  // Mute / Unmute
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    });
  }

  // Volume Control
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      video.volume = e.target.value;
    });
  }

  // Reset button text when video ends
  video.addEventListener('ended', () => {
    playBtn.textContent = 'Play';
  });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
