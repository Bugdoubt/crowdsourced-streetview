
const notredameImages = [
  "https://images.unsplash.com/photo-1564501049412-61c2a3083793?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1589891455809-5b9d27bbf70d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1566764629489-1b6b68d8a0e7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1580235544729-91a989ed915e?auto=format&fit=crop&w=900&q=80"
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
