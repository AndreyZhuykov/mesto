import {
    initialCards,
    config,
    popupImage,
    popupImageOpen,
    popupText,
    profilePopup,
    popupAdd,
    nameTitle,
    infoText,
    cardsContainer,
    openAddCardButton,
    openProfilePopupButton,
    nameInput,
    infoInput,
    inputTitle
} from '../utils/constants.js'

import './index.css';
import {
    Card,
} from "../components/Card.js";

import {
    FormValidator
} from "../components/FormValidator.js";

import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


const userInfo = new UserInfo({name: nameTitle.textContent, info: infoText.textContent}, nameInput, infoInput)
const popupWithImage = new PopupWithImage(popupImage, popupImageOpen, popupText);
const formProfilePopup = new FormValidator(config, profilePopup);
const formPopupAdd = new FormValidator(config, popupAdd);
const section = new Section({
    items: initialCards,
    renderer: (data) => {
        createCard(data)
    }
}, cardsContainer);
const popupWithFormNewCard = new PopupWithForm(popupAdd, {
    callBackSubmitForm: (data) => {
        createCard(data);
        const title = document.querySelector('.element__title');
        title.textContent = inputTitle.value;
        formPopupAdd.resetValidation();
        popupWithFormNewCard.close();
    }
});

const popupWithFormProfile = new PopupWithForm(profilePopup, {
    callBackSubmitForm: () => {
        userInfo.getUserInfo()
        nameTitle.textContent = nameInput.value;
        infoText.textContent = infoInput.value;
        popupWithFormProfile.close();
    }
})

const createCard = (data) => {
    const newCard = new Card(data, '#post', {
        handleCardClick: () => {
            popupWithImage.open(data);
            popupWithImage.setEventListeners();
        }
    });
    addCard(newCard)
};

function addCard(newCard) {
    const newCardGeneratedCard = newCard.generatedCard();
    section.addItem(newCardGeneratedCard);
}


//функции открития форм
const openPopupFormProfile = () => {
    userInfo.setUserInfo()
    popupWithFormProfile.open();
}

const openPopupWithFormNewCard = () => {
    popupWithFormNewCard.open();
}

///разметка
section.renderItem();
//слушатели
popupWithFormNewCard.setEventListener();
popupWithFormProfile.setEventListener();
//открытие форм
openAddCardButton.addEventListener('click', openPopupWithFormNewCard)
openProfilePopupButton.addEventListener('click', openPopupFormProfile)
//валидация форм
formProfilePopup.enableValidation();
formPopupAdd.enableValidation();