import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector, popupImageOpen, popupText) {
        super(popupSelector)
        this._popupImageOpen = popupImageOpen
        this._popupText = popupText
        
    }

    open(data) {
        this._popupImageOpen.src = data.link;
        this._popupText.textContent = data.name;
        this._popupImageOpen.alt = data.name;
        super.open();
    }

    
}