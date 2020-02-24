const writeUs = document.querySelector('.write-us');
const communicationForm = document.querySelector('.communication-form');
const closeModal = document.querySelector('.close-modal');
const closeMap = document.querySelector('.close-map');
const smollMap = document.querySelector('.contacts img');
const modalMap = document.querySelector('.modal-map');
const nameClient = document.querySelector('[name = name-client]');
const email = document.querySelector('[name=email]');
const storage = localStorage.getItem('name');

writeUs.addEventListener('click', (evt) => {
  evt.preventDefault();
  communicationForm.classList.add('vision');
  if (storage) {
    nameClient.value = storage;
    email.focus();
  } else {
    nameClient.focus();
  }
});

closeModal.onclick = function () {
  communicationForm.classList.remove('vision');
};
smollMap.onclick = function () {
  modalMap.classList.add('vision');
};
closeMap.onclick = function () {
  modalMap.classList.remove('vision');
};
