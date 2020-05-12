const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.slider__item:first-child');

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
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
setInterval(slide, 1500);
