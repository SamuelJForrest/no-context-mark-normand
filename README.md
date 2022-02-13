# No Context Mark Normand!

Since discovering him in 2018, [Mark Normand](https://twitter.com/marknorm?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) has quickly become one of my favourite comics. Having watched his special - [Out to Lunch](https://www.youtube.com/watch?v=tDolNU89SXI&ab_channel=marknormand) - and many of his podcast appearances, it still surprises me that Mark doesn't enjoy more acclaim. After all, how many comedians have been praised by George Carlin for having 'a real talent for jackin' around'?

I wanted to create a project that would help spread the Normand love - but what could I do that would be original and interesting? That is when it hit me.

I could take a comedian's words out of context.

This give birth to 'No Context Mark Normand' - a place to hear those quick zingers at the touch of a button.

Most of the soundbites used in this project are taken from Mark's special _Out to Lunch_, with the exception of two being taken from Mark's appearance on episode #1420 of _The Joe Rogan Experience_

All that's left to say is:

COMEDY!

## Features

### Existing features

#### Head wobble animation

### Features to be implemented

#### Other comedians

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

**Bug**

- When trying to set the duration of the 'head wobble' animation, the current audio's duration kept returning as NaN.

**Fix**

- I discovered that the duration kept returning as NaN because the audio's source was not preloaded. I tried to output the duration as a number using the [onloadedmetadata event](https://www.w3schools.com/jsref/event_onloadedmetadata.asp), but to no avail. Eventually, I decided that I would have to add an `<audio>` tag in for each audio clip (despite oringally not wanting to do this, to save cluttering my HTML file). This allowed me to set the duration of the animation to the same duration as the audio.
- **Note:** After getting the audio's duration to output as a number, the animation was still not moving. This is because I had not added an 's' to the end of the value to define its value in second. I did this using the following template string: `` button.style.animationDuration = `${audioClip.duration}s`; ``
