'use strict';

const drumKitDrum = document.getElementsByClassName('drum-kit__drum');

function playSound() {
  this.getElementsByTagName('audio')[0].play();
}

for (let key of drumKitDrum) {
  key.onclick = playSound;
}