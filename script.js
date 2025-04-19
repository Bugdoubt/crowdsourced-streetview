
const notredameImages = ['https://upload.wikimedia.org/wikipedia/commons/b/b6/Paris_Notre-Dame_Vaults_01.JPG', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Notre_Dame_de_Paris_-_Facade_2017.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Notre_Dame_de_Paris_-_Nave.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Cathedrale_Notre-Dame_de_Paris.jpg'];

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
