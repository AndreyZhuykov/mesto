import {handleLikeClick, handleDeleteClick, handleCardImgClick} from './script.js'

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


class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }

    _setEventListeners() {
        this._element.querySelector('.element__button').addEventListener('click', handleLikeClick);
        this._element.querySelector('.element__delete').addEventListener('click', handleDeleteClick);
        this._element.querySelector('.element__image').addEventListener('click', handleCardImgClick);
    }

    _getTemplate() {
        const cardElement = document.querySelector('#post').content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    generatedCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__title').alt = this._name;

        return this._element;
    }
}

function renderCard(data) {
    const newCard = new Card(data);
    const newCardGeneratedCard = newCard.generatedCard();
    document.querySelector('.elements').prepend(newCardGeneratedCard);
}


export {Card, initialCards, renderCard};


