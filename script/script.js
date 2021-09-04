const openPopup = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const nameTitle = document.querySelector('.profile__title');
const infoText = document.querySelector('.profile__text');

const closeAdd = popupAdd.querySelector('.popup__close');
const btnCreate = popupAdd.querySelector('.popup__form');

const closePopup = popupProfile.querySelector('.popup__close');
const formElement = popupProfile.querySelector('.popup__form');

const nameInput = popupProfile.querySelector('.popup__input_user_name');
const infoInput = popupProfile.querySelector('.popup__input_user_info');
const inputTitle = popupAdd.querySelector('.popup__input_user_title');
const inputLink = popupAdd.querySelector('.popup__input_user_link');

const openAdd = document.querySelector('.profile__add');


function togglePopup(popup) {
        nameInput.value = nameTitle.textContent;
        infoInput.value = infoText.textContent;
        popup.classList.toggle('popup_active')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    infoText.textContent = infoInput.value;
    togglePopup(popupProfile);
}

function createNewCard(evt) {
    evt.preventDefault();

    renderCard({
        name: inputTitle.value,
        link: inputLink.value
    })
    
    togglePopup(popupAdd);
}

openPopup.addEventListener('click', () => {
    togglePopup(popupProfile);

});

closePopup.addEventListener('click', () => {
    togglePopup(popupProfile);

});
openAdd.addEventListener('click', () => {
    togglePopup(popupAdd);
});

closeAdd.addEventListener('click', () => {
    togglePopup(popupAdd);
});

formElement.addEventListener('submit', formSubmitHandler);
btnCreate.addEventListener('submit', createNewCard);

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

const elementTemplate = document.querySelector('#post').content.querySelector('.element');
const elements = document.querySelector('.elements');

initialCards.forEach((data) => {
    renderCard(data);
})

function createCard(data) {
    const cardElement = elementTemplate.cloneNode(true);
    const elementIamge = cardElement.querySelector('.element__image');
    const elementTitle = cardElement.querySelector('.element__title');
    const elementLike = cardElement.querySelector('.element__button');
    const elementDelete = cardElement.querySelector('.element__delete');
    const popupImage = document.querySelector('.popup_img');
    const closeImage = popupImage.querySelector('.popup__close');
    const popupImageOpen = document.querySelector('.popup__image');
    const popupText = document.querySelector('.popup__text'); 


    // Кнопка лайк
    elementLike.addEventListener('click', () => {
        elementLike.classList.toggle('element__button_like-active')
    });

    // Удаление 
    elementDelete.addEventListener('click', () => {
        cardElement.remove();
    });
    
    // Картинка 

    elementIamge.addEventListener('click', () => {
        popupImage.classList.toggle('popup_active');
        popupImageOpen.src = elementIamge.src;
        popupText.textContent = data.name;
    });

    closeImage.addEventListener('click', () => {
        popupImage.classList.remove('popup_active');
    })



    elementTitle.textContent = data.name;
    elementIamge.src = data.link;
    elementIamge.alt = data.name;
    
    return cardElement;
}

function renderCard(data) {
    elements.prepend(createCard(data));
}