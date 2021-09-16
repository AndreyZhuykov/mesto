/// функция добавления стилей Erorr 
const showInputError = (inputElement, erorrElement, inputErrorClass, errorClass) => {
    inputElement.classList.add(inputErrorClass);
    erorrElement.classList.add(errorClass);
    erorrElement.textContent = inputElement.validationMessage;
    console.log(erorrElement)
};

/// функция удаления стилей Erorr 
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

/// функция 

const hasNotInputValues = (inputList) => {
    return inputList.every(inputElement => {
        return inputElement.value.lenght === 0;
    })
}

/// функция проверки инпутов (тригер ошибки)
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    const erorrElement = formElement.querySelector(`#${inputElement.id}-error`);

    if (!inputElement.validity.valid) {
        showInputError(inputElement, erorrElement, inputErrorClass, errorClass);
    } else {
        hideInputError(inputElement, erorrElement, inputErrorClass, errorClass);
    }
};

/// функция поведения кнопки в форме 
const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
    const bottomElement = formElement.querySelector(submitButtonSelector);
    if (hasInvalidInput(inputList) || hasNotInputValues(inputList)) {
        disableSubmitButton(bottomElement, inactiveButtonClass);
    } else {
        enableSubmitButton(bottomElement, inactiveButtonClass);
    }
};

const disableSubmitButton = (bottomElement, inactiveButtonClass) => {
    bottomElement.classList.add(inactiveButtonClass);
};

const enableSubmitButton = (bottomElement, inactiveButtonClass) => {
    bottomElement.classList.remove(inactiveButtonClass);
};

/// функция проверки формы 
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    console.log()
    inputList.forEach(inputElement => {
        console.log(errorClass);
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
        });
    });
    
        toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
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


