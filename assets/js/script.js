import { playlist } from "./playlist.js";
import { sliderManager } from "./slider.js";
// let state=0;

globalThis.state = 0;
globalThis.playlist = playlist;
globalThis.nextButton = document.querySelector(".fa-forward-fast");
globalThis.prevButton = document.querySelector(".fa-backward-fast");

sliderManager("init");
console.log(playlist.length);
nextButton.addEventListener("click", function () {
  if (state < playlist.length - 1) {
    state++;
  } else {
    state = 0;
  }

  sliderManager("next");
});

prevButton.addEventListener("click", function () {
  if (state > 0) {
    state--;
  } else {
    state = playlist.length - 1;
  }
  sliderManager("prev");
});
