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


const elementTemplate = document.querySelector('#post').content.querySelector('.element');
const elements = document.querySelector('.elements');

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



// создание карточки 
createNewCardButton.addEventListener('submit', createNewCard);



// добавление карточек через js 
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


function createCard(data) {
    const cardElement = elementTemplate.cloneNode(true);
    const elementIamge = cardElement.querySelector('.element__image');
    const elementTitle = cardElement.querySelector('.element__title');
    const elementLike = cardElement.querySelector('.element__button');
    const elementDelete = cardElement.querySelector('.element__delete');


    // Кнопка лайк

    function handleLikeClick() {
        elementLike.classList.toggle('element__button_like-active');
    } 
    elementLike.addEventListener('click', handleLikeClick);

    // Удаление 

    elementDelete.addEventListener('click', () => {
        cardElement.remove();
    });

    // Открытие попапа с картинкой 
    elementIamge.addEventListener('click', () => {
        popupImageOpen.src = elementIamge.src;
        popupText.textContent = data.name;
        popupImageOpen.alt = data.name;
        openAnyPopup(popupImage);
    });


    elementTitle.textContent = data.name;
    elementIamge.src = data.link;
    elementIamge.alt = data.name;
    // добавление alt 
    return cardElement;
}

function renderCard(data) {
    elements.prepend(createCard(data));
}

initialCards.forEach((data) => {
    renderCard(data);
});