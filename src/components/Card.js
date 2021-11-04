class Card {
    constructor(templateSelector, {data, currentUserId, handleCardClick, handleDeleteCardData, handleLikeClick}) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._currentUserId = currentUserId
        this._handleDeleteCardData = handleDeleteCardData
        this._ownerId = data.owner._id;
        this._id = data._id;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector
        this._handleLikeClick = handleLikeClick;
        this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.element');
    }

    _handleLikeClick = (evt) => {
        evt.target.classList.toggle('element__button_like-active');
    }

    _handleDeleteClick = (evt) => {
        evt.target.classList.add('element_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__button').addEventListener('click', this._handleLikeClick);
        this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteCardData);
        this._element.querySelector('.element__image').addEventListener('click', this._handleCardClick);
    }

    _getTemplate() {
        return this._cardElement.cloneNode(true);
    }

    generatedCard() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.element__image')
        this._element.querySelector('.element__delete').classList.add(
            this._currentUserId === this._ownerId ? 'element__delete_visible' : 'element__delete_invisible'
        );
        this._element.querySelector('.element__title').textContent = this._name;
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._likesValue = this._element.querySelector('.element__likes')
        this._likesValue.textContent = this._likes.length;

        this._setEventListeners();

        return this._element;
    }

    checkLiked() {
        return Boolean(this._likes.find(user => user._id === this._currentUserId))
    }

    _updateLikes() {
        this._likesValue = this._element.querySelector('.element__likes')
        this._likesValue.textContent = this._likes.length;
    
        if (this.checkLiked()) {
            this._element.querySelector('.element__button').classList.add('element__button_like-active')
        } else {
            this._element.querySelector('.element__button').classList.remove('element__button_like-active')
        }
    }

    setLikes(likes) {
        this._likes = likes
        this._updateLikes()
      }


    removeCard() {
        this._element.remove();
    }

    getId() {
        return this._id;
    }
}

export {
    Card
};