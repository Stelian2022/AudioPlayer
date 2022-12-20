import { playlist } from "./playlist.js";
import { sliderManager } from "./slider.js";
import { audioManager } from "./audio.js";
import { volumeManager } from "./volum.js";
import { timeManager } from "./time.js";
// let state=0;

globalThis.state = 0;
globalThis.playlist = playlist;
globalThis.nextButton = document.querySelector(".fa-forward-fast");
globalThis.prevButton = document.querySelector(".fa-backward-fast");
globalThis.playPauseButton = document.querySelector("#play i:nth-child(2)");
globalThis.playPauseIcon = document.querySelector(".fa-circle-play");
globalThis.volumeButton = document.querySelector("#volumeButton");
globalThis.sonBar = document.querySelector("#sonBar");
globalThis.mc = new Hammer(volumeButton);
globalThis.mcVolume = new Hammer(sonBar);
globalThis.timeText=document.querySelector("#timeText");
globalThis.timeBar=document.querySelector("#timeBar");
globalThis.audio = new Audio(playlist[state].mp3);
globalThis.title = document.createElement("title");
globalThis.slider = document.querySelector("#slider");
globalThis.mc = new Hammer(slider);

globalThis.newAudio = document.createElement("mp3");
globalThis.newAudio.src = playlist[state].mp3;

sliderManager("init");
audioManager("init");
volumeManager("init");
timeManager("init");
console.log(playlist.length);

function nextTrack() {
  if (state < playlist.length - 1) {
    state++;
  } else {
    state = 0;
  }

  sliderManager("next");
  audioManager("next");
  timeManager("next");
}

function prevTrack() {
  if (state > 0) {
    state--;
  } else {
    state = playlist.length - 1;
  }
  sliderManager("prev");
  audioManager("prev");
  timeManager("prev");
}

mc.on("swiperight", nextTrack);
mc.on("swipeleft", prevTrack);
nextButton.addEventListener("click", nextTrack);

prevButton.addEventListener("click", prevTrack);

playPauseButton.addEventListener("click", function () {
  audioManager("playPause");
});
sonBar.addEventListener("change", function () {
  console.dir(volumeButton.value);
  volumeManager("range");
});

mcVolume.on("panright", function () {
  volumeManager("panright");

})
mcVolume.on("panleft", function () {
  volumeManager("panleft");

})

