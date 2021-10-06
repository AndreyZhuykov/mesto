import {
    Card,
} from "./Card.js";

import {
    FormValidator
} from "./FormValidator.js";

import {
    popupImage,
    openAnyPopup,
    closeAnyPopup
} from "./utils.js";

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const openProfilePopupButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');
const popupSave = document.querySelector('.popup__save')
const cardsContainer = document.querySelector('.elements')

/// кнопки в попапе создания новой карточки 
const openAddCardButton = document.querySelector('.profile__add');
const closeAddCardButton = popupAdd.querySelector('.popup__close');
const createNewCardButton = popupAdd.querySelector('.popup__form');
// конпки в попапе редактирования профиля
const closeProfilePopupButton = profilePopup.querySelector('.popup__close');
const profilePopupForm = profilePopup.querySelector('.popup__form');

/// инпуты форм
const nameInput = profilePopup.querySelector('.popup__input_user_name');
const infoInput = profilePopup.querySelector('.popup__input_user_info');
const inputTitle = popupAdd.querySelector('.popup__input_user_title');
const inputLink = popupAdd.querySelector('.popup__input_user_link');


const closeImage = popupImage.querySelector('.popup__close');

function submitProfileForm(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    infoText.textContent = infoInput.value;
    closeAnyPopup(profilePopup);
}


openProfilePopupButton.addEventListener('click', () => {
    nameInput.value = nameTitle.textContent;
    infoInput.value = infoText.textContent;
    openAnyPopup(profilePopup);

});

closeProfilePopupButton.addEventListener('click', () => {
    closeAnyPopup(profilePopup);
});

profilePopupForm.addEventListener('submit', submitProfileForm);


openAddCardButton.addEventListener('click', () => {
    openAnyPopup(popupAdd);
});

closeAddCardButton.addEventListener('click', () => {
    closeAnyPopup(popupAdd);
});

// закрытие попапа с изобоажением 
closeImage.addEventListener('click', () => {
    closeAnyPopup(popupImage);
});

// закрытие нажатием на overlay



const closePopupClickOverlay = (evt) => {
    if (evt.target.classList.contains('popup_active')) {
        const popupActive = document.querySelector('.popup_active');
        closeAnyPopup(popupActive);
    }
}


profilePopup.addEventListener('click', function (evt) {
    closePopupClickOverlay(evt);
});

popupAdd.addEventListener('click', function (evt) {
    closePopupClickOverlay(evt);
});

popupImage.addEventListener('click', function (evt) {
    closePopupClickOverlay(evt);
});

// функция закрытие на ESC 

function renderCard(data) {
    const newCard = new Card(data, '#post');
    const newCardGeneratedCard = newCard.generatedCard();
    cardsContainer.prepend(newCardGeneratedCard);
}

initialCards.forEach((data) => {
    renderCard(data)
});

function createNewCard(evt) {
    evt.preventDefault();
    renderCard({
        name: inputTitle.value,
        link: inputLink.value
    })
    closeAnyPopup(popupAdd);
    inputTitle.value = '';
    inputLink.value = '';
    popupSave.classList.add('popup__save_disabled');
    popupSave.setAttribute("disabled", "disabled");
}

createNewCardButton.addEventListener('submit', createNewCard);


const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'

};


const formProfilePopup = new FormValidator(config, profilePopup);
formProfilePopup.enableValidation();
const formPopupAdd = new FormValidator(config, popupAdd);
formPopupAdd.enableValidation();