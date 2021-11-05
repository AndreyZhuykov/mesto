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
        this._buttonLike.addEventListener('click', this._handleLikeClick);
        this._buttonDelete.addEventListener('click', this._handleDeleteCardData);
        this._imageElement.addEventListener('click', this._handleCardClick);
    }

    _getTemplate() {
        return this._cardElement.cloneNode(true);
    }

    generatedCard() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.element__image')
        this._buttonLike = this._element.querySelector('.element__button')
        this._buttonDelete = this._element.querySelector('.element__delete')
        this._likesValue = this._element.querySelector('.element__likes')
        
        this._buttonDelete.classList.add(
            this._currentUserId === this._ownerId ? 'element__delete_visible' : 'element__delete_invisible'
        );

        this._element.querySelector('.element__title').textContent = this._name;
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        
        this._renderLikesValue();
        this._setEventListeners();

        return this._element;
    }

    checkLiked() {
        return Boolean(this._likes.find(user => user._id === this._currentUserId))
    }

    _renderLikesValue() {
        this._likesValue.textContent = this._likes.length;
    }

    _updateLikes() {
        this._renderLikesValue();
        if (this.checkLiked()) {
            this._buttonLike.classList.add('element__button_like-active')
        } else {
            this._buttonLike.classList.remove('element__button_like-active')
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