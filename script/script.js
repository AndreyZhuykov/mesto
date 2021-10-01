import {
    Card,
    initialCards,
    renderCard
} from "./Card.js";

const openProfilePopupButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');



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



const popupImage = document.querySelector('.popup_img');
const popupImageOpen = popupImage.querySelector('.popup__image');
const popupText = popupImage.querySelector('.popup__text');
const closeImage = popupImage.querySelector('.popup__close');


function openAnyPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', pressEscapeClosePopup);
}

function closeAnyPopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', pressEscapeClosePopup);
}


function formSubmitHandler(evt) {
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

profilePopupForm.addEventListener('submit', formSubmitHandler);


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
        evt.target.closest('.popup').classList.remove('popup_active');
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

const pressEscapeClosePopup = (evt) => {
    if (evt.key === 'Escape') {
        closeAnyPopup(popupImage);
        closeAnyPopup(popupAdd);
        closeAnyPopup(profilePopup);
    }
};

// функция открытия попапа карточки 
const handleCardImgClick = (evt) => {
    popupImageOpen.src = evt.target.closest('.element__image').src;
    popupText.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
    popupImageOpen.alt = evt.target.closest('.element').querySelector('.element__title').textContent;
    openAnyPopup(popupImage);
}

// функция лайка
const handleLikeClick = (evt) => {
    evt.target.classList.toggle('element__button_like-active')
}

// функция удаления карточки  
const handleDeleteClick = (evt) => {
    evt.target.closest('.element').remove();
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
}

createNewCardButton.addEventListener('submit', createNewCard);

export {
    handleLikeClick,
    handleDeleteClick,
    handleCardImgClick
}