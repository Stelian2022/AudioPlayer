function sliderManager(sliderState) {
  const sliderImg = document.querySelector("#slider img");
  console.dir(sliderImg);

  //on a utiliser setTimeout pour laisser un temps pour le navigateur d'affiché l'image
  setTimeout(() => {
    let imgHeight = (50 * sliderImg.clientHeight) / sliderImg.clientWidth;

    console.log(document.querySelector("#slider img").offsetHeight);
    console.log(imgHeight);
    document.querySelector("#slider").style.height =imgHeight + "%";
  }, 500);

  switch (sliderState) {
    case "init":
      sliderImg.src = playlist[state].cover;
      break;
    case "next":
      break;
    default:
      break;
  }
}
export { sliderManager };
