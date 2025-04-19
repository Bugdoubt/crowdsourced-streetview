
const notredameImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Notre_Dame_de_Paris_vue_de_face.jpg/800px-Notre_Dame_de_Paris_vue_de_face.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Notre_Dame_de_Paris_depuis_Notre_Dame.jpg/800px-Notre_Dame_de_Paris_depuis_Notre_Dame.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Notre_Dame_de_Paris_vue_de_c%C3%B4t%C3%A9.jpg/800px-Notre_Dame_de_Paris_vue_de_c%C3%B4t%C3%A9.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Notre_Dame_inside.jpg/800px-Notre_Dame_inside.jpg"
];

let currentIndex = 0;

function updateImage() {
  const img = document.getElementById("photo");
  if (img) {
    img.src = notredameImages[currentIndex];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % notredameImages.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + notredameImages.length) % notredameImages.length;
  updateImage();
}

window.onload = updateImage;
