document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const images = document.querySelectorAll(".slider");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  // Function to display the current image
  const showImage = () => {
    images.forEach((img, index) => {
      img.style.opacity = index === currentIndex ? "1" : "0";
      img.style.zIndex = index === currentIndex ? "1" : "0";
    });
  };

  // Automatic image transition every 3 seconds
  const startSlider = () => {
    return setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    }, 3000);
  };

  // Handle manual controls
  const changeImage = (direction) => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage();
  };

  // Event listeners for manual controls
  if (prevButton) {
    prevButton.addEventListener("click", () => changeImage(-1));
  }
  if (nextButton) {
    nextButton.addEventListener("click", () => changeImage(1));
  }

  // Initialize slider
  let sliderInterval = startSlider();
  showImage();

  // Pause the slider on hover (optional)
  images.forEach((img) => {
    img.addEventListener("mouseover", () => clearInterval(sliderInterval));
    img.addEventListener("mouseout", () => (sliderInterval = startSlider()));
  });
});
