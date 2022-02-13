// define variables
const button = document.querySelector('.button');

// audio object
const audio = {
  1: 'ask_siri.wav',
  2: 'bang_my_son.wav',
  3: 'chubbs.wav',
  4: 'cup_of_piss.wav',
  5: 'dogs.wav',
  6: 'dont_give_a_shit.wav',
  7: 'finger_up_the_butt.wav',
  8: 'flipping_a_hetero.wav',
  9: 'gay_babies.wav',
  10: 'give_it_a_goog.wav',
  11: 'hand_that_breeds_ya.wav',
  12: 'hey_ya_fat_whore.wav',
  13: 'i_cant_find_it.wav',
  14: 'jews_no_hell.wav',
  15: 'jump_to_take_a_dump.wav',
  16: 'much_worse.wav',
  17: 'not_interesting.wav',
  18: 'pronounced_trigga.wav',
  19: 'pull_the_chute.wav',
  20: 'quit_bragging.wav',
  21: 'sure_you_do.wav',
  22: 'tase_me.wav',
  23: 'white_people_shit.wav',
  24: 'you_americans_so_fat.wav',
  25: 'you_can_dance_man.wav',
  26: 'you_cant_leave_you_fucked_me.wav',
};

// functions
const speak = function () {
  // generate random number - based on length of audio object
  let randomNumber =
    Math.floor(Math.random() * `${Object.keys(audio).length}`) + 1;

  let audioClip = new Audio(`/assets/audio/${audio[randomNumber]}`);

  // 1. When button is clicked, or spacebar pressed, audio starts playing and event listeners are removed from button/spacebar
  button.removeEventListener('click', speak);
  document.removeEventListener('keypress', checkKeyCode);
  audioClip.play();
  button.classList.add('__wobble');

  // 2. When the audio file ends, the event listeners are returned to the button/spacebar
  audioClip.addEventListener('ended', function () {
    button.addEventListener('click', speak);
    document.addEventListener('keypress', checkKeyCode);
    button.classList.remove('__wobble');
  });
};

const checkKeyCode = function (e) {
  if ((e.keycode = 32)) {
    speak();
  }
};

// event listeners
button.addEventListener('click', speak);
document.addEventListener('keypress', checkKeyCode);
