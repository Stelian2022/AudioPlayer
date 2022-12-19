function volumeManager(volumeState) {
  switch (volumeState) {
    case "init":
      audio.volume = 0.5;
      break;
    case "range":
      audio.volume = volumeButton.value / 100;
      break;
    case "panright":
      if (audio.volume + 0.01 < 1) {
        audio.volume += 0.01;
        volumeButton.value = audio.volume * 100;
      }

      break;
    case "panleft":
      if (audio.volume - 0.01 >= 0) {
        audio.volume -= 0.01;
        volumeButton.value = audio.volume * 100;
      }

      break;

    default:
      break;
  }
}

export { volumeManager };
