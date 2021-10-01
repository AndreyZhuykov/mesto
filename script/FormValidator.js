class FormValidator {
    constructor(config) {
        this.formSelector = config.formSelector
        this.inputSelector = config.inputSelector
        this.submitButtonSelector = config.submitButtonSelector
        this.inactiveButtonClass = config.inactiveButtonClass
        this.inputErrorClass = config.inputErrorClass
        this.errorClass = config.errorClass
    }

    _showInputError(inputElement) {
        inputElement.classList.add(this.inputErrorClass);
        this.erorrElement.classList.add(this.errorClass);
        this.erorrElement.textContent = inputElement.validationMessage;
    };

    _hideInputError(inputElement) {
        inputElement.classList.remove(this.inputErrorClass);
        this.erorrElement.classList.remove(this.errorClass);
        this.erorrElement.textContent = '';
    };

    _hasInvalidInput(inputList) {
        return inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    };

    _hasNotInputValues(inputList) {
        return inputList.every(inputElement => {
            return inputElement.value.length === 0;
        })

    };

    _checkInputValidity(formElement, inputElement) {
        this.erorrElement = formElement.querySelector(`#${inputElement.id}-error`);
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, this.erorrElement);
        } else {
            this._showInputError(inputElement, this.erorrElement, this.inputErrorClass, this.errorClass);
        }
    };

    _toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass) {
        this.buttonElement = formElement.querySelector(submitButtonSelector);
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    };

    _disableSubmitButton() {
        this.buttonElement.classList.add(this.inactiveButtonClass);
        this.buttonElement.setAttribute("disabled", "disabled");
    };

    _enableSubmitButton() {
        this.buttonElement.classList.remove(this.inactiveButtonClass);
        this.buttonElement.removeAttribute("disabled", "disabled");
    };

    _setEventListeners(formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        const inputList = Array.from(formElement.querySelectorAll(inputSelector));

        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
                this._toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
            });
            this._toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
        });

    };

    enableValidation() {
        this.formList = document.querySelectorAll(this.formSelector);
        this.formList.forEach(formElement => {
            this._setEventListeners(
                formElement,
                this.inputSelector,
                this.submitButtonSelector,
                this.inputErrorClass,
                this.errorClass,
                this.inactiveButtonClass);
        });
    };
}

const formvalidatir = new FormValidator({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

formvalidatir.enableValidation();
