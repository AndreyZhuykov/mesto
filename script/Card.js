import {handleCardImgClick} from "./utils.js";

const elements = document.querySelector('.elements')

class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this.cardElement = document.querySelector(templateSelector).content.querySelector('.element').cloneNode(true);
    }

    
    _handleLikeClick = (evt) => {
        evt.target.classList.toggle('element__button_like-active')
    }

    _handleDeleteClick = (evt) => {
        this._element.remove();
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






export {Card};


