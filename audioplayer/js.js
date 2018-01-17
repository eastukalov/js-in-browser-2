'use strict';

const player = document.getElementsByTagName('audio')[0];

const sounds = [
  'mp3/LA Chill Tour.mp3',
  'mp3/LA Fusion Jam.mp3',
  'mp3/This is it band.mp3'
];

let i = 0;
const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];

document.getElementsByClassName('playstate')[0].onclick = function() {

  if (mediaPlayer.classList.contains('play')) {
    mediaPlayer.classList.remove('play');
    player.pause();
  } else {
    mediaPlayer.classList.add('play');
    player.play();
  }

};

document.getElementsByClassName('stop')[0].onclick = function() {
  mediaPlayer.classList.remove('play');
  player.pause();
  player.currentTime = 0;
};

document.getElementsByClassName('back')[0].onclick = function() {
  mediaPlayer.classList.remove('play');

  if (i === 0) {
    i = sounds.length - 1;
  } else {
    i--;
  }

  player.src = sounds[i];
  document.getElementsByClassName('title')[0].title = sounds[i].split('.')[0].split('/')[1];
};

document.getElementsByClassName('next')[0].onclick = function() {
  mediaPlayer.classList.remove('play');

  if (i === sounds.length - 1) {
    i = 0
  } else {
    i++;
  }

  player.src = sounds[i];
  document.getElementsByClassName('title')[0].title = sounds[i].split('.')[0].split('/')[1];
};