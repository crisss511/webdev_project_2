document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const images = document.querySelectorAll(".slider");

  const showImage = () => {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none";
    });
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }, 3000);

  showImage();
});