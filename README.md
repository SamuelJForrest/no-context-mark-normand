# No Context Mark Normand!

- Project description (including where the soundbites come from - link to Mark's special)

## Features

### Existing features

#### Head wobble animation

### Features to be implemented

## Technologies used

### Languages

- [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Libraries

- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Design

- [Figma](https://www.figma.com/)

## Bugs

#### #1: More than one audio file playing at a time

**Bug**

- If a user clicks the Mark button - or hits the space bar - repeatedly, multiple audio clips play at the same time.

**Fix**

- Within the 'speak' function, that plays the audio clip, I added logic that [removes the event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) from both the Mark button and space bar before the audio clip plays. This removes the user's ability to activate the 'speak' function while an audio clip is playing. Then, I used the ['ended' event listener](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event) to add the event listeners back to the Mark button and space bar, only once the audio clip had ended.

#### #2: Syncing up audio and animations
