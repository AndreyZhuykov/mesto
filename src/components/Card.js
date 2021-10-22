class Card {
    constructor(data, templateSelector, {handleCardClick}) {
        this._name = data.name;
        this._link = data.link; 
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector
        this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.element');

    }

    _handleLikeClick = (evt) => {
        evt.target.classList.toggle('element__button_like-active');
    }

    _handleDeleteClick = () => {
        this._element.remove();
    }
    
    _setEventListeners() {
        this._element.querySelector('.element__button').addEventListener('click', this._handleLikeClick);
        this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteClick);
        this._element.querySelector('.element__image').addEventListener('click', this._handleCardClick);
    }

    _getTemplate() {
        return this._cardElement.cloneNode(true);
    }

    generatedCard() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.element__image')
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;

        return this._element;
    }
}

export {Card};


