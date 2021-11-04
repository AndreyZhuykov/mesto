import {
    initialCards,
    config,
    popupImage,
    popupImageOpen,
    popupText,
    profilePopup,
    popupAdd,
    nameTitle,
    infoText,
    cardsContainer,
    openAddCardButton,
    openProfilePopupButton,
    nameInput,
    infoInput,
    userAvatar,
    popupDelete,
    buttonUpdateAvatar,
    popupAvatar
} from '../utils/constants.js'

import './index.css';
import {
    Card,
} from "../components/Card.js";
import {
    FormValidator
} from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDelete from "../components/PopupDelete.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

let myId = null

const userInfo = new UserInfo({
    name: nameTitle,
    info: infoText,
    avatar: userAvatar
})


const popupWithImage = new PopupWithImage(popupImage, popupImageOpen, popupText);
const formProfilePopup = new FormValidator(config, profilePopup);
const formPopupAdd = new FormValidator(config, popupAdd);
const formPopupAvatar = new FormValidator(config, popupAvatar);
const popupWithDeleteCard = new PopupDelete(popupDelete);
const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1',
    groupId: 'cohort-29',
    token: '130b5458-23d1-49ad-b59e-8cef87e00bab'
});

/// Рендер карточек с сервера 


const section = new Section({
    renderer: (data) => {
        renderCard(createCard(data));
    }
}, cardsContainer);

api.getAppInfo().then(([userData, cardList]) => {
    myId = userData._id;
    section.renderItem(cardList);
    userInfo.setUserInfo({
        name: userData.name,
        info: userData.about,
    });
    userInfo.setUserAvatar({
        avatar: userData.avatar
    })
})
.catch((err) => {
    console.log(`Ошибка обновления аватара: ${err}`);
});





function renderCard(newCard) {
    const newCardGeneratedCard = newCard.generatedCard();
    section.addItem(newCardGeneratedCard);
}

function addCard(newCard) {
    const newCardGeneratedCard = newCard.generatedCard();
    section.addItemPrepend(newCardGeneratedCard);
}


const createCard = (data) => {
    const newCard = new Card('#post', {data, 
        currentUserId: myId,
        handleCardClick: () => {
            popupWithImage.open(data);
        },
        handleDeleteCardData: () => {
                popupDelete.addEventListener('submit', (evt) => {
                    evt.preventDefault();
                    console.log(data)
                    api.deleteCardServ(data).then(() => {
                        newCard.removeCard(data);
                        popupWithDeleteCard.close()
                    })
                    .catch((err) => {console.log(`Ошибка удаления карточки: ${err}`)})
                });
            popupWithDeleteCard.open()
        },
        handleLikeClick: () => {
            api.toggleLikeStatus(data, !newCard.checkLiked()).then((res) => {
                newCard.setLikes(res.likes)
            })
            .catch((err) => {console.log(`Ошибка, не сработал лайк: ${err}`)})
        }
    },
    );
    return newCard;
};


const popupWithFormNewCard = new PopupWithForm(popupAdd, {
    callBackSubmitForm: (data) => {
        popupWithFormNewCard.loading(true)
        api.addCardToServer(data)
        .then(res => {
            addCard(createCard(res));
        })
        .catch((err) => {console.log(`Ошибка добавления карточки: ${err}`)})
        .finally(() => {
            popupWithFormNewCard.loading(false)
        })
        formPopupAdd.resetValidation();
        popupWithFormNewCard.close();
    }
});

const popupWithFormProfile = new PopupWithForm(profilePopup, {
    callBackSubmitForm: (data) => {
        popupWithFormProfile.loading(true)
        userInfo.setUserInfo(data)
        const newUserInfo = userInfo.getUserInfo(data)
        api.editProfile(newUserInfo.name, newUserInfo.info)
        .then()
        .catch((err) => {console.log(`Ошибка обновления данных пользавателья: ${err}`)})
        .finally(() => {
            popupWithFormProfile.loading(false)
        })
        popupWithFormProfile.close()
    }
})

const popupWithUserAvatar = new PopupWithForm(popupAvatar, {
    callBackSubmitForm: (data) => {
        popupWithUserAvatar.loading(true)
        api.updataAvatar(data.link)
        .then((data) => {
            console.log(data)
            userInfo.setUserAvatar(data);
            popupWithUserAvatar.close();
        })
        .catch((err) => {console.log(`Ошибка обновления аватарки: ${err}`)})
        .finally(() => {
            popupWithUserAvatar.loading(false)
        })
    }
})


//функции открития форм
const openPopupFormProfile = (data) => {
    const currentUser = userInfo.getUserInfo(data)
    nameInput.value = currentUser.name;
    infoInput.value = currentUser.info;
    popupWithFormProfile.open();
}

const openPopupWithFormNewCard = () => {
    popupWithFormNewCard.open();
}

const openPopupWithUserAvatar = () => {
    popupWithUserAvatar.open();
}

//слушатели
popupWithUserAvatar.setEventListeners();


popupWithFormNewCard.setEventListeners();
popupWithFormProfile.setEventListeners();
popupWithImage.setEventListeners();
popupWithDeleteCard.setEventListeners();


//открытие форм
openAddCardButton.addEventListener('click', openPopupWithFormNewCard)
openProfilePopupButton.addEventListener('click', openPopupFormProfile)
buttonUpdateAvatar.addEventListener('click', openPopupWithUserAvatar)

//валидация форм
formProfilePopup.enableValidation();
formPopupAdd.enableValidation();
formPopupAvatar.enableValidation();



