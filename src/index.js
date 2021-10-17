import logoImage from './images/logo.svg';
import avatarImage from './images/image.jpg';


const images = [
  { name: 'logo', link: logoImage },
  { name: 'avatar', link: avatarImage },
];

import './pages/index.css';
import {
    Card,
} from "./script/Card.js";

import {
    FormValidator
} from "./script/FormValidator.js";

import Section from "./script/Section.js";
import Popup from "./script/Popup.js";
import PopupWithImage from "./script/PopupWithImage.js";
import PopupWithForm from "./script/PopupWithForm.js";
import UserInfo from "./script/UserInfo.js";



import {
    popupImage,
    popupImageOpen,
    popupText
} from "./script/utils.js";


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

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'

};


const openProfilePopupButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');
const saveButtonPopupAdd = popupAdd.querySelector('.popup__save')
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

//function submitProfileForm(evt) {
//    evt.preventDefault();
//    nameTitle.textContent = nameInput.value;
//    infoText.textContent = infoInput.value;
//    closeAnyPopup(profilePopup);
//}



// закрытие попапа с изобоажением 
//closeImage.addEventListener('click', () => {
//    closeAnyPopup(popupImage);
//});

// закрытие нажатием на overlay



//const closePopupClickOverlay = (evt) => {
//    if (evt.target.classList.contains('popup_active')) {
//        const popupActive = document.querySelector('.popup_active');
//        closeAnyPopup(popupActive);
//    }
//}


//profilePopup.addEventListener('click', function (evt) {
//    closePopupClickOverlay(evt);
//});

//popupAdd.addEventListener('click', function (evt) {
//    closePopupClickOverlay(evt);
//});

//popupImage.addEventListener('click', function (evt) {
//    closePopupClickOverlay(evt);
//});

// функция закрытие на ESC 

//function renderCard(data) {
//    const newCard = new Card(data, '#post');
//    const newCardGeneratedCard = newCard.generatedCard();
//    cardsContainer.prepend(newCardGeneratedCard);
//}

//initialCards.forEach((data) => {
//    renderCard(data)
//});


const userInfo = new UserInfo({
        name: nameTitle.textContent,
        info: infoText.textContent
    }, nameInput,
    infoInput)

//function createNewCard(evt) {
//    evt.preventDefault();
//    inputTitle.value = '';
//    inputLink.value = '';
//    saveButtonPopupAdd.classList.add('popup__save_disabled');
//    saveButtonPopupAdd.setAttribute("disabled", "disabled");
//}
function resetValidation() {
    inputTitle.value = '';
    inputLink.value = '';
    saveButtonPopupAdd.classList.add('popup__save_disabled');
    saveButtonPopupAdd.setAttribute("disabled", "disabled");
}

const popupWithImage = new PopupWithImage(popupImage, popupImageOpen, popupText);



const createCard = (data) => {
    const newCard = new Card(data, '#post', {
        handleCardClick: () => {
            popupWithImage.open(data);
            popupWithImage.setEventListeners();
        }
    });
    const newCardGeneratedCard = newCard.generatedCard();
    section.addItem(newCardGeneratedCard);
};

const section = new Section({
    items: initialCards,
    renderer: (data) => {
        createCard(data)
    }
}, cardsContainer, );
section.renderItem();


const openPopupFormProfile = () => {
    userInfo.getUserInfo()
    userInfo.setUserInfo()
    const popupWithFormProfile = new PopupWithForm(profilePopup, {
        callBackSubmitForm: () => {
            nameTitle.textContent = nameInput.value;
            infoText.textContent = infoInput.value;
        }
    })
    popupWithFormProfile.open();
    popupWithFormProfile.setEventListene();

}

openProfilePopupButton.addEventListener('click', openPopupFormProfile)

const createNewCard = () => {
    const popupWithFormNewCard = new PopupWithForm(popupAdd, {
        callBackSubmitForm: (data) => {
            createCard(data);
            const title = document.querySelector('.element__title')
            title.textContent = inputTitle.value
            resetValidation()
        }
    });
    popupWithFormNewCard.open();
    popupWithFormNewCard.setEventListene();

}

openAddCardButton.addEventListener('click', createNewCard)








///createNewCardButton.addEventListener('submit', createNewCard);

const formProfilePopup = new FormValidator(config, profilePopup);
formProfilePopup.enableValidation();
const formPopupAdd = new FormValidator(config, popupAdd);
formPopupAdd.enableValidation();