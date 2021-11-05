class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }

    _showInputError(inputElement) {
        inputElement.classList.add(this._inputErrorClass);
        this._erorrElement.classList.add(this._errorClass);
        this._erorrElement.textContent = inputElement.validationMessage;
    };

    _hideInputError(inputElement) {
        inputElement.classList.remove(this._inputErrorClass);
        this._erorrElement.classList.remove(this._errorClass);
        this._erorrElement.textContent = '';
    };


    _hasInvalidInput() {
        return this._inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    };

    _hasNotInputValues() {
        return this._inputList.every(inputElement => {
            return inputElement.value.length === 0;
        })

    };

    _checkInputValidity(inputElement) {
        this._erorrElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, this._erorrElement);
        } else {
            this._showInputError(inputElement, this._erorrElement, this._inputErrorClass, this._errorClass);
        }
    };

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    };

    _disableSubmitButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute("disabled", true);
    };

    _enableSubmitButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
    };

    _setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
            this._toggleButtonState();
        });

    };

    resetValidation() {
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
            });
        });
        this._toggleButtonState();
    }

    enableValidation() {
        this._setEventListeners()
    };
}

export {FormValidator};