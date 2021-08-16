let buttomEdit = document.querySelector('.profile__edit')
let popup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close')

buttomEdit.addEventListener('click', function () {
    popup.style.display = "flex"
})

closePopup.addEventListener('click', function () {
    popup.style.display = "none"
})

let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_job')
let nameTitle = document.querySelector('.profile__title')
let jobText = document.querySelector('.profile__text')

nameInput.value = nameTitle.textContent;
jobInput.value = jobText.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler, );

let save = document.querySelector('.popup__save')

save.addEventListener('click', function () {
    popup.style.display = "none"
})