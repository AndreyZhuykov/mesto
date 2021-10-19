import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, {
        callBackSubmitForm
    }) {
        super(popupSelector)
        this._callBackSubmitForm = callBackSubmitForm;
        this._inputList = this._popup.querySelectorAll('.popup__input')
        
    }

    _getInputValues() {
        const inputValue = {}
        this._inputList.forEach(input => {inputValue[input.name] = input.value});
        return inputValue;
    }

    setEventListener() {
        super.setEventListeners()
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBackSubmitForm(this._getInputValues());
        })
        
    }

    close() {
        super.close();

    }
}
