const firstSlide = document.querySelector('.slider__item:first-child');
const lastSlide = document.querySelector('.slider__item:last-child');

function nextSlide() {
  const currentSlide = document.querySelector('.showing');
  if(currentSlide) {
    currentSlide.classList.remove('showing');
    const nextSlide = currentSlide.nextElementSibling;

    if(nextSlide) {
      nextSlide.classList.add('showing');
    } else {
      firstSlide.classList.add('showing');
    }
  } else {
    firstSlide.classList.add('showing');
  }
}

function prevSlide() {
  const currentSlide = document.querySelector('.showing');
  if(currentSlide) {
    currentSlide.classList.remove('showing');
    const prevSlide = currentSlide.previousElementSibling;
    
    if(prevSlide) {
      prevSlide.classList.add('showing');
    } else {
      lastSlide.classList.add('showing');
    }
  } else {
    lastSlide.classList.add('showing');
  }
}
    
document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);