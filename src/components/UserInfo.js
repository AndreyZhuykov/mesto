export default class UserInfo {
    constructor({name,info}, nameTitle, inputLink) {
        this._name = name;
        this._info = info;
        this._inputTitle = nameTitle
        this._inputLink = inputLink
    }



    getUserInfo() {
        const userData = {}
        userData.name = this._inputTitle.value
        userData.info = this._inputLink.value
        return userData
    }

    setUserInfo() {
        this._name.textContent =  this._inputTitle.value;
        this._info.textContent = this._inputLink.value;
    }
}