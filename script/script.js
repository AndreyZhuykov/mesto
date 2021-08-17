let openPopup = document.querySelector('.profile__edit')
let popup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input_user_name')
let infoInput = document.querySelector('.popup__input_user_info')
let nameTitle = document.querySelector('.profile__title')
let infoText = document.querySelector('.profile__text')
let savePopup = document.querySelector('.popup__save');

function showPopup() {
    popup.classList.add('popup_active');
    nameInput.value = nameTitle.textContent;
    infoInput.value = infoText.textContent;
}

function hidePopup() {
    popup.classList.remove('popup_active');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    infoText.textContent = infoInput.value;

    savePopup.addEventListener('click', hidePopup)
}

openPopup.addEventListener('click', showPopup)
closePopup.addEventListener('click', hidePopup)
formElement.addEventListener('submit', formSubmitHandler);
