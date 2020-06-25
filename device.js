const writeUs = document.querySelector('.write-us');
const communicationForm = document.querySelector('.communication-form');
const closeModal = document.querySelector('.close-modal');
const closeMap = document.querySelector('.close-map');
const smollMap = document.querySelector('.contacts img');
const modalMap = document.querySelector('.modal-map');


writeUs.addEventListener('click', (evt) => {
    evt.preventDefault();
    communicationForm.classList.add('vision');

});

closeModal.onclick = () => {
    communicationForm.classList.remove('vision');
};
smollMap.onclick = () => {
    modalMap.classList.add('vision');
};
closeMap.onclick = () => {
    modalMap.classList.remove('vision');
};


const radio1 = document.querySelector('#selfi');
const radio2 = document.querySelector('#fitnes');
const radio3 = document.querySelector('#cuadrocopter');

const radioChecked = (button) => {
    button.checked = true;
    console.log(button)
};


const handlerSlider = () => {
    if (radio1.checked) {
        radioChecked(radio2)
    } else if (radio2.checked) {
        radioChecked(radio3)
    } else if (radio3.checked) {
        radioChecked(radio1)
    }
};


setInterval(handlerSlider, 6000);