const popupImage = document.querySelector('.popup_img');
const popupImageOpen = popupImage.querySelector('.popup__image');
const popupText = popupImage.querySelector('.popup__text');

//const handleCardImgClick = (evt) => {
//    popupImageOpen.src = evt.target.closest('.element__image').src;
//    popupText.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
//    popupImageOpen.alt = evt.target.closest('.element').querySelector('.element__title').textContent;
//    openAnyPopup(popupImage);
//}

// function openAnyPopup(popup) {
//     popup.classList.add('popup_active');
//     document.addEventListener('keydown', pressEscapeClosePopup);
// }

// function closeAnyPopup(popup) {
//     popup.classList.remove('popup_active');
//     document.removeEventListener('keydown', pressEscapeClosePopup);
// }

//const pressEscapeClosePopup = (evt) => {
//    if (evt.key === 'Escape') {
//        const popupActive = document.querySelector('.popup_active');
//        closeAnyPopup(popupActive);
//    }
//};


export {popupImage, popupImageOpen, popupText}