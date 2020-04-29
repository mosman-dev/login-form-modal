const modalBtn = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close');

const showModal = () => {
    modalContainer.style.visibility = 'visible';
    modalContainer.style.opacity = 1;
    container.style.transform = 'translate(0%, 0%)';
}

const hideModal = () => {
    container.style.transform = 'translate(0%, -50%)';
    modalContainer.style.visibility = 'hidden';
    modalContainer.style.opacity = 0;
}

modalBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
document.addEventListener('keydown', e => e.key == 'Escape' ? hideModal() : null);