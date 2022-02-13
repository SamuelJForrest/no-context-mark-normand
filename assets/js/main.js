// define variables
const button = document.querySelector('.button');
const audio = document.querySelectorAll('audio');

// functions

/**
 * Determines which audio clip should be used, plays it, and sets the animation duration
 */
const speak = function () {
  // generate random number - based on length of audio object
  let randomNumber = Math.floor(Math.random() * `${audio.length}`);

  // define the current audio sample being used
  let audioClip = audio[randomNumber];

  // 1. When button is clicked, or spacebar pressed, audio starts playing and event listeners are removed from button/spacebar
  removeEvents();
  audioClip.play();
  button.style.animationDuration = `${audioClip.duration}s`;
  button.classList.add('__wobble');

  // 2. When the audio file ends, the event listeners are returned to the button/spacebar
  audioClip.addEventListener('ended', function () {
    addEvents();
    button.classList.remove('__wobble');
  });
};

/**
 * Removes the click event to the Mark button, and the keypress event (for the space bar) to the document**/
const removeEvents = function () {
  button.removeEventListener('click', speak);
  document.removeEventListener('keypress', checkKeyCode);
};

/**
 * Adds the click event to the Mark button, and the keypress event (for the space bar) to the document**/
const addEvents = function () {
  button.addEventListener('click', speak);
  document.addEventListener('keypress', checkKeyCode);
};

/**
 * Checks if the key code of the event target is the same as the space bar's key code (32)
 **/
const checkKeyCode = function (e) {
  if ((e.keycode = 32)) {
    speak();
  }
};

// event listeners
button.addEventListener('click', speak);
document.addEventListener('keypress', checkKeyCode);
