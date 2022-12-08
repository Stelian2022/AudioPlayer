function audioManager(audioState) {
  switch (audioState) {
    case "init":
      console.dir(audio);
      break;
    case "playPause":
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    case "next":
    
      break;
    case "prev":
     
      break;
    default:
      break;
  }
}

export { audioManager };
