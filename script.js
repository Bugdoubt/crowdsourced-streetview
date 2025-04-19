
const notredameImages = [
  "https://images.unsplash.com/photo-1669398991096-1a474c3f86a4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1669398991096-1a474c3f86a4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1669398991096-1a474c3f86a4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1669398991096-1a474c3f86a4?auto=format&fit=crop&w=1200&q=80"
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
