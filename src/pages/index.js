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


const userInfo = new UserInfo({
    name: nameTitle,
    info: infoText
}, nameInput, infoInput)
const popupWithImage = new PopupWithImage(popupImage, popupImageOpen, popupText);
const formProfilePopup = new FormValidator(config, profilePopup);
const formPopupAdd = new FormValidator(config, popupAdd);

const createCard = (data) => {
    const newCard = new Card(data, '#post', {
        handleCardClick: () => {
            popupWithImage.open(data);
            popupWithImage.setEventListeners();
        }
    });
    return newCard;
};

const section = new Section({
    items: initialCards,
    renderer: (data) => {
        addCard(createCard(data));
    }
}, cardsContainer);


function addCard(newCard) {
    const newCardGeneratedCard = newCard.generatedCard();
    section.addItem(newCardGeneratedCard);
}

const popupWithFormNewCard = new PopupWithForm(popupAdd, {
    callBackSubmitForm: (data) => {
        addCard(createCard(data));
        const title = document.querySelector('.element__title');
        title.textContent = inputTitle.value;
        formPopupAdd.resetValidation();
        popupWithFormNewCard.close();
    }
});

const popupWithFormProfile = new PopupWithForm(profilePopup, {
    callBackSubmitForm: (data) => {
        userInfo.setUserInfo(data)
        popupWithFormProfile.close()
    }
})



//функции открития форм
const openPopupFormProfile = (data) => {
    userInfo.getUserInfo(data)
    nameInput.value = nameTitle.textContent
    infoInput.value = infoText.textContent
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
