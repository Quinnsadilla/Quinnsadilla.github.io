let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.querySelectorAll('.demo').forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
      currentSlide(index + 1); // Assuming your slides are 1-based
  });
});

// Add event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  plusSlides(1);
});