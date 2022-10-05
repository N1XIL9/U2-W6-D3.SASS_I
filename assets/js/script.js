// cliccare sul primo bottone e creare un colore random di background

function colore() {
  let bgRandom = document.querySelector("body");
  bgRandom.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
}

// PRIMA OPZIONE
// function image() {
//   let imgGenerate = document.querySelector(".image");
//   imgGenerate.innerHTML = `<img src="https://picsum.photos/200/300/?random&t=${new Date().getTime()}">`;
// }

// SECONDA OPZIONE CON ARRAY FUNZIONANTE

let arrayImage = ["https://picsum.photos/200/300", "https://picsum.photos/id/237/200/300", "https://picsum.photos/seed/picsum/200/300", "https://picsum.photos/200/300/?blur", "https://picsum.photos/id/870/200/300?grayscale&blur=2"];
let container = document.querySelector(".image");
let img = document.createElement("img");

function image() {
  img.innerHTML = "";
  let i = Math.floor(Math.random() * arrayImage.length);

  img.src = arrayImage[i];
  container.appendChild(img);
}
