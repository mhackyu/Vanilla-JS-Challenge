// Listen to keyboard event
window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Play and add class 'playing'
  if (audio && key) {
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  // Remove class 'playing' on end of transition
  const keys = document.querySelectorAll('.key');
  keys.forEach(key =>
    key.addEventListener('transitionend', e => {
      if (e.propertyName !== 'color') return;
      key.classList.remove('playing');
    })
  );
});
