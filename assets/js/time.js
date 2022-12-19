function timeManager() {
  switch (timeState) {
    case "init":
      console.log("timeManager innit");
      timeText.innerHTML = "<a>00:00 / " + audio.duration + "</a>";
      break;

    default:
      break;
  }
}
export { timeManager };
