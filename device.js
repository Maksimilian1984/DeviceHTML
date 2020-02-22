const writeUs = document.querySelector('.write-us');
const communicationForm = document.querySelector('.communication-form');
const closemodal = document.querySelector('.close-modal');
const closemap = document.querySelector('.close-map');
const smollmap = document.querySelector('.contacts img');
const modalmap = document.querySelector('.modal-map');
writeUs.onclick = function () {
  communicationForm.classList.add('vision');
};
closemodal.onclick = function () {
  communicationForm.classList.remove('vision');
};
smollmap.onclick = function () {
  modalmap.classList.add('vision');
};
closemap.onclick = function () {
  modalmap.classList.remove('vision');
};
