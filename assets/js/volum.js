function volumeManager(volumeState) {
  switch (volumeState) {
    case "init":
      audio.volume = 0.5;
      break;
    case "range":
      audio.volume = volumeButton.value / 100;
      break;
      case "pan":

      
        break;
    default:
      break;
  }
}
export { volumeManager };
