// function changeSong(direction){
// const newAudio=document.createElement("mp3");
// newAudio = playlist[state].mp3;
// }




function audioManager(audioState) {
    const newAudio=document.createElement("mp3");
    const playPauseIcon = document.querySelector(".fa-circle-pause")
  switch (audioState) {
    case "init":
      console.dir(audio);
      break;
    case "playPause":
        console.log(audio.paused);
      if (audio.paused) {
        audio.play()
         playPauseIcon.classList.toggle(".fa-circle-play")
        playPauseIcon.classList.toggle(".fa-circle-pause")
      } else {
        audio.pause()
        playPauseIcon.classList.toggle(".fa-circle-play")
       playPauseIcon.classList.toggle("..fa-circle-pause")
      }
    case "next":
      if(audio.paused){
        newAudio=document.createElement("mp3");
      }
      break;
    case "prev":
        
      break;
    default:
      break;
  }
}

export { audioManager };
