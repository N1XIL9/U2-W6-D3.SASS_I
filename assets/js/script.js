// cliccare sul primo bottone e creare un colore random di background

function colore() {
  let bgRandom = document.querySelector("body");
  bgRandom.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
}

// PRIMA OPZIONE
function image() {
  let imgGenerate = document.querySelector(".image");
  imgGenerate.innerHTML = `<img src="https://picsum.photos/200/300/?random&t=${new Date().getTime()}">`;
}

// SECONDA OPZIONE

// let arrayImage = ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"];
