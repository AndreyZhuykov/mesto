export default class UserInfo {
    constructor({name, info}, inputTitle, inputLink) {
        this._name = name;
        this._info = info;
        this._inputTitle = inputTitle
        this._inputLink = inputLink
    }

    getUserInfo() {
        const userData = {};
        userData.name = this._name
        userData.info = this._info
        return userData
    }

    setUserInfo() {
        this._inputTitle.value = this._name
        this._inputLink.value = this._info
    }
}

