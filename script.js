let currentSlideIndex = 0;
const slides = document.getElementsByClassName('mySlides');

setInterval(() => {
    nextSlide();
}, 3000);

function prevSlide() {
    currentSlideIndex--;
    currentSlideIndex =
        currentSlideIndex < 0 ? slides.length - 1 : currentSlideIndex;
    showSlide();
}

function nextSlide() {
    currentSlideIndex++;
    currentSlideIndex =
        currentSlideIndex >= slides.length ? 0 : currentSlideIndex;
    showSlide();
}

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlideIndex].style.display = 'block';
}
