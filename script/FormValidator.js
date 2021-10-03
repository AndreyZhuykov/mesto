const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

class FormValidator {
    constructor(config) {
        this.formSelector = config.formSelector
        this.inputSelector = config.inputSelector
        this.submitButtonSelector = config.submitButtonSelector
        this.inactiveButtonClass = config.inactiveButtonClass
        this.inputErrorClass = config.inputErrorClass
        this.errorClass = config.errorClass
    }

    /// функция добавления стилей Error 
    _showInputError = (inputElement) => {
        inputElement.classList.add(this.inputErrorClass);
        this.erorrElement.classList.add(this.errorClass);
        this.erorrElement.textContent = inputElement.validationMessage;
    };

    /// функция удаления стилей Error 
    _hideInputError = (inputElement) => {
        inputElement.classList.remove(this.inputErrorClass);
        this.erorrElement.classList.remove(this.errorClass);
        this.erorrElement.textContent = '';
    };

    /// функции проверки инпутов на валидность 
    _hasInvalidInput = () => {
        return this.inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    };

    _hasNotInputValues = () => {
        return this.inputList.every(inputElement => {
            return inputElement.value.length === 0;
        })

    }

    /// функция проверки инпутов (тригер ошибки)
    _checkInputValidity = (formElement, inputElement) => {
        this.erorrElement = formElement.querySelector(`#${inputElement.id}-error`);
        if (inputElement.validity.valid) {
            hideInputError(inputElement);
        } else {
            showInputError(inputElement);
        }
    };


    /// функция поведения кнопки в форме 
    _toggleButtonState = (formElement) => {
        this.buttonElement = formElement.querySelector(this.submitButtonSelector);
        if (hasInvalidInput()) {
            disableSubmitButton();
        } else {
            enableSubmitButton();
        }
    };

    _disableSubmitButton = () => {
        this.buttonElement.classList.add(this.inactiveButtonClass);
        this.buttonElement.setAttribute("disabled", "disabled");
    };

    _enableSubmitButton = () => {
        this.buttonElement.classList.remove(this.inactiveButtonClass);
        this.buttonElement.removeAttribute("disabled", "disabled");
    };

    /// функция проверки формы 
    _setEventListeners = (formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        console.log(inputElement);
        this.inputList = Array.from(formElement.querySelectorAll(this.inputSelector));
        this.inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                checkInputValidity(formElement, inputElement);
                toggleButtonState(formElement);
            });
            toggleButtonState(formElement);
        });
        console.log(inputElement);
    };

    enableValidation = () => {
        const formList = document.querySelectorAll(config.formSelector);
        formList.forEach(formElement => {
            this._setEventListeners();
        });
        const newForm = new FormValidator(config);
    };

    enableValidation
}






