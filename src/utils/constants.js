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

const popupImage = document.querySelector('.popup_img');
const popupImageOpen = popupImage.querySelector('.popup__image');
const popupText = popupImage.querySelector('.popup__text');
const profilePopup = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');
const cardsContainer = document.querySelector('.elements')
const openAddCardButton = document.querySelector('.profile__add');
const openProfilePopupButton = document.querySelector('.profile__edit');
const nameInput = profilePopup.querySelector('.popup__input_user_name');
const infoInput = profilePopup.querySelector('.popup__input_user_info');
const inputTitle = popupAdd.querySelector('.popup__input_user_title');
const userAvatar = document.querySelector('.profile__avatar');
const popupDelete = document.querySelector('.popup_delete');
const buttonUpdateAvatar = document.querySelector('.profile__update')
const popupAvatar = document.querySelector('.popup_avatar')


export {
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
    inputTitle,
    userAvatar,
    popupDelete,
    buttonUpdateAvatar,
    popupAvatar
}