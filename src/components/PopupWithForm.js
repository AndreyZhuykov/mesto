import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, {
        callBackSubmitForm
    }) {
        super(popupSelector)
        this._callBackSubmitForm = callBackSubmitForm;
        this._inputList = this._popup.querySelectorAll('.popup__input')  
        this._buttonSave = this._popup.querySelector('.popup__save')      
    }

    _getInputValues() {
        this._inputValue = {}
        this._inputList.forEach(input => {this._inputValue[input.name] = input.value});
        return this._inputValue;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBackSubmitForm(this._getInputValues());
        }) 
        console.log("hi")
    }

    loading(isLoading) {
        if (isLoading === true) {
            this._buttonSave.textContent = 'Сохранение...'
        } else {
            this._buttonSave.textContent = 'Сохранить'
        }
      }

    close() {
        super.close();
    }
}
