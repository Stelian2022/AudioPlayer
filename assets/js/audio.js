// function changeSong(direction){
// const newAudio=document.createElement("mp3");
// newAudio = playlist[state].mp3;
// }

function audioManager(audioState) {
  //const newAudio = document.createElement("mp3");
  audio.src = playlist[state].mp3;
  // const playPauseIcon = document.querySelector(".fa-pause");

  const newTitle = document.createElement("title");
  newTitle.scr = playlist[state].title;
  const title = document.querySelector("#title h2");
  const artist = document.querySelector("#title h3");
  const description = document.querySelector("#title h5");
  const annee = document.querySelector("#title h4");
  title.scr = playlist[state].title;
  artist.scr = playlist[state].artist;
  description.scr = playlist[state].description;
  annee.scr = playlist[state].annee;
  title.textContent = "Now Playing : " + playlist[state].title;
  artist.textContent = "Genre : " + playlist[state].artist;
  description.textContent = "Description : " + playlist[state].description;
  annee.textContent = "Year : " + playlist[state].annee;
  switch (audioState) {
    case "init":
      console.dir(audio);
      console.dir(title);

      break;
    case "playPause":
      console.log(audio.paused);
      if (audio.paused) {
        console.dir(title);
        audio.play()
        playPauseIcon.classList.toggle("fa-circle-play");
        playPauseIcon.classList.toggle("fa-pause");
      } else {
        audio.pause()
        playPauseIcon.classList.toggle("fa-circle-play");
        playPauseIcon.classList.toggle("fa-pause");
      }
      break;
    case "next":
      if (audio.paused) {
      
        
        audio.play()
        playPauseIcon.classList.toggle("fa-circle-play");
        playPauseIcon.classList.toggle("fa-pause");
      } else {
        audio.pause()

        playPauseIcon.classList.toggle("fa-circle-play");
        playPauseIcon.classList.toggle("fa-pause");
        audio.play()
      }
      break;
    case "prev":
      if (audio.paused) {
        audio = new Audio(playlist[state].mp3);
       
        audio.play()
        playPauseIcon.classList.toggle("fa-circle-play");
        playPauseIcon.classList.toggle("fa-pause");
      } else {
        audio.pause()
        audio = new Audio(playlist[state].mp3);
        playPauseIcon.classList.toggle("fa-circle-play");
        playPauseIcon.classList.toggle("fa-pause");
        audio.play()
      }
      break;
    default:
      break;
  }
}

export { audioManager };
