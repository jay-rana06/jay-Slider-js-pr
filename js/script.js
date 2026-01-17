let currentSlide = 0;
let carouselItem = document.querySelectorAll('.carousel-item');

const clearActive = () => {
    carouselItem.forEach((item) => {
        item.classList.remove('active');
    })
}

const nextSlide = () => {
    clearActive();
    carouselItem[++currentSlide].classList.add('active');
    if(currentSlide >= 2){
        currentSlide = -1;
    }
}

const prevSlide = () => {
    clearActive();
    if(currentSlide <= 0){
        currentSlide = 3;
    }
    carouselItem[--currentSlide].classList.add('active');
}