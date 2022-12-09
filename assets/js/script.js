import { playlist } from "./playlist.js";
import { sliderManager } from "./slider.js";
import { audioManager } from "./audio.js";
// let state=0;

globalThis.state = 0;
globalThis.playlist = playlist;
globalThis.nextButton = document.querySelector(".fa-forward-fast");
globalThis.prevButton = document.querySelector(".fa-backward-fast");
globalThis.playPauseButton = document.querySelector(".fa-circle-play");
globalThis.playPauseIcon = document.querySelector(".fa-circle-play");
globalThis.audio=new Audio(playlist[state].mp3);
globalThis.title =document.createElement("title");


globalThis.newAudio = document.createElement("mp3");
globalThis.newAudio.src = playlist[state].mp3;


sliderManager("init");
audioManager("init");
console.log(playlist.length);
nextButton.addEventListener("click", function () {
  if (state < playlist.length - 1) {
    state++;
  } else {
    state = 0;
  }

  sliderManager("next");
  audioManager("next");
});

prevButton.addEventListener("click", function () {
  if (state > 0) {
    state--;
  } else {
    state = playlist.length - 1;
  }
  sliderManager("prev");
  audioManager("prev");
});
playPauseButton.addEventListener("click", function () {

  
audioManager("playPause");

  


});

