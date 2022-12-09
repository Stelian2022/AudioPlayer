function transImg(direction) {
  const sliderImg = document.querySelector("#slider img");
  const slider = document.querySelector("#slider");
 
  //etape 1 crée une deuxieme image sous la premiere
  const newSliderImg = document.createElement("img");
  newSliderImg.src = playlist[state].cover;
  newSliderImg.style.position = "absolute";
  newSliderImg.style.zIndex = "1";
  sliderImg.style.zIndex = "2";

  //etape 2 sortir image avec un effet

  slider.append(newSliderImg);
  //sliderImg.style.left ="-" + sliderImg.clientWidth +"px"; ne marche pas
  sliderImg.style.transition = "all .5s";
  sliderImg.style.transform = "translateX(" + direction + "100%)";

  setTimeout(function () {
    sliderImg.src = playlist[state].cover;
    
    //etape 3 : reattribuer le crs du state actuel a sliderImg

    sliderImg.style.transition = "none";
    sliderImg.style.transform = "translateX(0)";

    //etape 4 je ramene l'image initiale sliderImg a sa position d'origine sans transition
    newSliderImg.remove();
    //etape 5 je detruit l'image créé précedement nwSliderImg
  }, 500);
}

function sliderManager(sliderState) {
  const sliderImg = document.querySelector("#slider img");
  const slider = document.querySelector("#slider");
  console.dir(sliderImg);
  

  //on a utiliser setTimeout pour laisser un temps pour le navigateur d'affiché l'image
  // setTimeout(() => {
  //   let imgHeight =
  //     (slider.clientHeight * sliderImg.clientHeight) / sliderImg.clientWidth;
  //   slider.style.height = imgHeight + "px";
  // }, 500);
  // console.log(document.querySelector("#slider img").offsetHeight);
  // console.log(imgHeight);

  switch (sliderState) {
    case "init":
      sliderImg.src = playlist[state].cover;
      title.scr =  playlist[state].title;
      break;
    case "next":
      transImg("+");
      
      break;
    case "prev":
      transImg("-");
    default:
      break;
  }
}
export { sliderManager };
