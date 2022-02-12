// define variables
const button = document.querySelector(".button");

// audio object
const audio = {
  1: "ask_siri.wav",
  2: "bang_my_son.wav",
  3: "chubbs.wav",
  4: "cup_of_piss.wav",
  5: "dogs.wav",
  6: "dont_give_a_shit.wav",
  7: "finger_up_the_butt.wav",
  8: "flipping_a_hetero.wav",
  9: "gay_babies.wav",
  10: "give_it_a_goog.wav",
  11: "hand_that_breeds_ya.wav",
  12: "hey_ya_fat_whore.wav",
  13: "i_cant_find_it.wav",
  14: "jews_no_hell.wav",
  15: "jump_to_take_a_dump.wav",
  16: "much_worse.wav",
  17: "not_interesting.wav",
  18: "pronounced_trigga.wav",
  19: "pull_the_chute.wav",
  20: "quit_bragging.wav",
  21: "sure_you_do.wav",
  22: "tase_me.wav",
  23: "white_people_shit.wav",
  24: "you_americans_so_fat.wav",
  25: "you_can_dance_man.wav",
  26: "you_cant_leave_you_fucked_me.wav",
};

// function
const speak = function () {
  let randomNumber = Math.floor(Math.random() * 27) + 1;

  let audioClip = new Audio(`/assets/audio/${audio[randomNumber]}`);

  if (audioClip.paused) {
    button.classList.add("__wobble");
    button.addEventListener("animationend", function () {
      button.classList.remove("__wobble");
    });
    audioClip.play();
  }

  // audioClip.pause();
  // audioClip.currentTime = 0;
};

// event listeners
button.addEventListener("click", speak);
document.addEventListener("keypress", function (e) {
  if ((e.keycode = 32)) {
    speak();
  }
});
