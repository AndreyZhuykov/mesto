import {handleCardImgClick} from "./utils.js";

const elements = document.querySelector('.elements')





class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
        this.cardElement = document.querySelector('#post').content.querySelector('.element').cloneNode(true);
    }

    
    _handleLikeClick = (evt) => {
        evt.target.classList.toggle('element__button_like-active')
    }

    _handleDeleteClick = (evt) => {
        evt.target.closest('.element').remove();
    }
    

    _setEventListeners() {
        this._element.querySelector('.element__button').addEventListener('click', this._handleLikeClick);
        this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteClick);
        this._element.querySelector('.element__image').addEventListener('click', handleCardImgClick);
    }

    _getTemplate() {
        return this.cardElement;
    }

    generatedCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;

        return this._element;
    }
}

function renderCard(data) {
    const newCard = new Card(data);
    const newCardGeneratedCard = newCard.generatedCard();
    elements.prepend(newCardGeneratedCard);
}





export {Card, renderCard};


