function sliderManager(sliderState) {
  const sliderImg = document.querySelector("#slider img");
  const slider = document.querySelector("#slider");
  console.dir(sliderImg);

  //on a utiliser setTimeout pour laisser un temps pour le navigateur d'affiché l'image
  setTimeout(() => {
    let imgHeight =
      (slider.clientHeight * sliderImg.clientHeight) / sliderImg.clientWidth;
    slider.style.height = imgHeight + "px";
  }, 500);
  // console.log(document.querySelector("#slider img").offsetHeight);
  // console.log(imgHeight);

  switch (sliderState) {
    case "init":
      sliderImg.src = playlist[state].cover;
      break;
    case "next":
      //etape 1 crée une deuxieme image sous la premiere
      const newSliderImg = document.createElement("img");
      newSliderImg.src = playlist[state].cover;
      newSliderImg.style.position = "absolute";
      newSliderImg.style.zIndex = "1";
      sliderImg.style.zIndex = "2";

      slider.append(newSliderImg);
      sliderImg.style.right = "-105%";

      break;

      
    default:
      break;
  }
}
export { sliderManager };
