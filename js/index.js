const images = [
  "./images/gallery-1.png",
  "./images/gallery-2.png",
  "./images/gallery-3.png",
];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");
const arrowButton = document.getElementById("arrow-button");
const counterElement = document.getElementById("counter");

function updateSlider() {
  sliderImage.src = images[currentIndex];
  counterElement.textContent = `${currentIndex + 1}/${images.length}`;
}

arrowButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateSlider();
});

updateSlider();
