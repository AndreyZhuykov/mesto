import Popup from "./Popup.js";
export default class PopupDelete extends Popup  {
    constructor(popupSelector){
        super(popupSelector)
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBackSubmitForm();
        }) 
    }

    setSubmitAction(submitAction) {
        this._callBackSubmitForm = submitAction;
    }
}