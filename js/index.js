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

const checkboxImage = document.getElementById("agreement-checkbox");
const contactButton = document.querySelector(".contact__form button");
let isChecked = false;

checkboxImage.addEventListener("click", () => {
  isChecked = !isChecked;
  if (isChecked) {
    checkboxImage.classList.add("active");
    contactButton.removeAttribute("disabled");
  } else {
    checkboxImage.classList.remove("active");
    contactButton.setAttribute("disabled", true);
  }
});
