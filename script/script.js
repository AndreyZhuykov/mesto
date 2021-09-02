const openPopup = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const closePopup = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_user_name');
const infoInput = document.querySelector('.popup__input_user_info');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');
// Open popupProfile


function showPopup() {
    popupProfile.classList.add('popup_active');
    nameInput.value = nameTitle.textContent;
    infoInput.value = infoText.textContent;
}

function hidePopup() {
    popupProfile.classList.remove('popup_active');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    infoText.textContent = infoInput.value;

    hidePopup();
}

openPopup.addEventListener('click', showPopup)
closePopup.addEventListener('click', hidePopup)
formElement.addEventListener('submit', formSubmitHandler);

// JS .element

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

const elementTemplae = document.querySelector('#post').content.querySelector('.element');


initialCards.forEach((data) => {
    createCard(data);
});


function createCard(data) {
    const postElement = elementTemplae.cloneNode(true);
    const postImg = postElement.querySelector('.element__image');
    const postTitle = postElement.querySelector('.element__title');
    const postBtnLike = postElement.querySelector('.element__button');
    const postBtnDelete = postElement.querySelector('.element__delete');

    postTitle.textContent = data.name;
    postImg.src = data.link;

    //// лайк

    postBtnLike.addEventListener('click', () => {
        postBtnLike.classList.toggle('element__button_like-active')
    });

    /// удаление 

    postBtnDelete.addEventListener('click', () => {
        postElement.remove();
    });

    /// открытие попапа(картинка)

    const popupImage = document.querySelector('.popup_img');
    const closeImage = popupImage.querySelector('.popup__close');
    const popupImageOpen = document.querySelector('.popup__image');
    const popupText = document.querySelector('.popup__text');

    postImg.addEventListener('click', () => {
        popupImage.classList.toggle('popup_active');
        popupImageOpen.src = postImg.src;
        popupText.textContent = data.name;
    });

    closeImage.addEventListener('click', () => {
        popupImage.classList.remove('popup_active');
    })
    const elements = document.querySelector('.elements');

    elements.prepend(postElement);
}

//new post

const openAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_add');
const inputTitle = popupAdd.querySelector('.popup__input_user_title');
const inputLink = popupAdd.querySelector('.popup__input_user_link');
const closeAdd = popupAdd.querySelector('.popup__close');
const btnCreate = popupAdd.querySelector('.popup__save');

openAdd.addEventListener('click', () => {
    popupAdd.classList.toggle('popup_active')
});

closeAdd.addEventListener('click', () => {
    popupAdd.classList.toggle('popup_active')
});


btnCreate.addEventListener('click', () => {
    createCard({
        name: inputTitle.value,
        link: inputLink.value
    });

    popupAdd.classList.toggle('popup_active')
});






//NEW POPUP