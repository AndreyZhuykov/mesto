/// функция добавления стилей Error 
const showInputError = (inputElement, erorrElement, inputErrorClass, errorClass) => {
    inputElement.classList.add(inputErrorClass);
    erorrElement.classList.add(errorClass);
    erorrElement.textContent = inputElement.validationMessage;
};

/// функция удаления стилей Error 
const hideInputError = (inputElement, erorrElement, inputErrorClass, errorClass) => {
    inputElement.classList.remove(inputErrorClass);
    erorrElement.classList.remove(errorClass);
    erorrElement.textContent = '';
};  
/// функция проверки инпутов на валидность 
const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    });
};

const hasNotInputValues = (inputList) => { 
    return inputList.every(inputElement => { 
        return inputElement.value.length === 0; 
    }) 

} 

/// функция проверки инпутов (тригер ошибки)
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    const erorrElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (inputElement.validity.valid) {
        hideInputError(inputElement, erorrElement, inputErrorClass, errorClass);
    } else {
        showInputError(inputElement, erorrElement, inputErrorClass, errorClass);
    }
};

/// функция поведения кнопки в форме 
const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
    const buttonElement = formElement.querySelector(submitButtonSelector);
    if (hasInvalidInput(inputList))  {
        disableSubmitButton(buttonElement, inactiveButtonClass, submitButtonSelector);
    } else {
        enableSubmitButton(buttonElement, inactiveButtonClass);
    }
};

const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled");
};

const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
};

/// функция проверки формы 
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
        });
        toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
    });
};
//// функция вызова валидации 
const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach(formElement => {
        setEventListeners(
            formElement,
            config.inputSelector,
            config.submitButtonSelector,
            config.inputErrorClass,
            config.errorClass,
            config.inactiveButtonClass);
    });
};
/// обьект с данными 
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});


