const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');

const openModal = () => {
  modal.classList.remove('hidden');
}
const closeModal = () => {
  modal.classList.add('hidden');
} 
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

