const openPopup = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');

/// кнопки в попапе создания новой карточки 
const openAdd = document.querySelector('.profile__add');
const closeAdd = popupAdd.querySelector('.popup__close');
const btnCreate = popupAdd.querySelector('.popup__form');
// конпки в попапе редактирования профиля
const closePopup = popupProfile.querySelector('.popup__close');
const formElement = popupProfile.querySelector('.popup__form');

/// инпуты форм
const nameInput = popupProfile.querySelector('.popup__input_user_name');
const infoInput = popupProfile.querySelector('.popup__input_user_info');
const inputTitle = popupAdd.querySelector('.popup__input_user_title');
const inputLink = popupAdd.querySelector('.popup__input_user_link');


const elementTemplate = document.querySelector('#post').content.querySelector('.element');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_img');
const closeImage = popupImage.querySelector('.popup__close');


function openAnyPopup(popup) {
    popup.classList.add('popup_active')
}

function closeAnyPopup(popup) {
    popup.classList.remove('popup_active')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    infoText.textContent = infoInput.value;
    closeAnyPopup(popupProfile);
}

openPopup.addEventListener('click', () => {
    nameInput.value = nameTitle.textContent;
    infoInput.value = infoText.textContent;
    openAnyPopup(popupProfile);

});

closePopup.addEventListener('click', () => {
    closeAnyPopup(popupProfile);
});

formElement.addEventListener('submit', formSubmitHandler);

function createNewCard(evt) {
    evt.preventDefault();
    renderCard({
        name: inputTitle.value,
        link: inputLink.value
    })
    closeAnyPopup(popupAdd);
}

openAdd.addEventListener('click', () => {
    openAnyPopup(popupAdd);
});

closeAdd.addEventListener('click', () => {
    closeAnyPopup(popupAdd);
});

btnCreate.addEventListener('submit', createNewCard);

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
    const popupImage = document.querySelector('.popup_img');
    const popupImageOpen = popupImage.querySelector('.popup__image');
    const popupText = popupImage.querySelector('.popup__text');


    // Кнопка лайк
    elementLike.addEventListener('click', () => {
        elementLike.classList.toggle('element__button_like-active')
    });

    // Удаление 
    elementDelete.addEventListener('click', () => {
        cardElement.remove();
    });

    // Открытие попапа с картинкой 
    elementIamge.addEventListener('click', () => {
        openAnyPopup(popupImage);
        popupImageOpen.src = elementIamge.src;
        popupText.textContent = data.name;
    });


    elementTitle.textContent = data.name;
    elementIamge.src = data.link;
    // добавление alt 
    elementIamge.alt = data.name;

    return cardElement;
}

function renderCard(data) {
    elements.prepend(createCard(data));
}

initialCards.forEach((data) => {
    renderCard(data);
})


// закрытие попапа с изобоажением 
closeImage.addEventListener('click', () => {
    closeAnyPopup(popupImage);
});