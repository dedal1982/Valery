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

if (arrowButton) {
  arrowButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateSlider();
  });
}

const checkboxImage = document.getElementById("agreement-checkbox");
const contactButton = document.querySelector(".contact__form button");
let isChecked = false;

if (checkboxImage) {
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
}

//отправка заявки
const submitForm = document.getElementById("submitForm");

if (submitForm) {
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch(
      "https://script.google.com/macros/s/AKfycbzr22fpud68PNb-m9pAfaBxnJtbUHgAUzpmTQRxc5UhSOyUD8Gi9NBzVa0qaZXr_KnvMw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Заявка отправлена!");
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  });
}

//открытие фото в оверлее
const worksImages = document.querySelectorAll(".works__wrapper img");

if (worksImages) {
  worksImages.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(111);
    });
  });
}

//оверлей
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".works__wrapper img");
  const overlay = document.getElementById("overlay");
  const overlayImage = document.querySelector(".overlay__image");
  const closeButton = document.getElementById("overlay-close");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const src = image.getAttribute("src");
      overlayImage.setAttribute("src", src);
      overlay.classList.add("active");
    });
  });

  closeButton.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});
