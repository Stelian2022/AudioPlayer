//fonction trouvée sur:
// https://stackoverflow.com/questions/59554776/how-to-convert-total-time-into-minutes-for-custom-audio-player

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let timeForSeconds = time - minutes * 60; // seconds without counted minutes
  let seconds = Math.floor(timeForSeconds);
  //let secondsReadable = seconds > 9 ? seconds : `0${seconds}` // To change 2:2 into 2:02

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
}

function timeManager(timeState) {
  switch (timeState) {
    case "init":
      setTimeout(function () {
        console.log("timeManager init");
        timeText.innerHTML = "00:00 / " + formatTime(audio.duration);
      }, 500);

      break;
    case "next":
       setTimeout(function () {
         timeText.innerHTML = "00:00 / " + formatTime(audio.duration);
       }, 500);
      break;
    case "prev":
      setTimeout(function () {
         timeText.innerHTML = "00:00 / " + formatTime(audio.duration);
    }, 500);
    default:
      break;
  }
}
export { timeManager };
