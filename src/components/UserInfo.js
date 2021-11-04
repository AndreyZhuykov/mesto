export default class UserInfo {
    constructor({name,info,avatar}) {
        this._name = name;
        this._info = info;
        this._avatar = avatar
    }

    getUserInfo() {
        const userData = {}
        userData.name = this._name.textContent
        userData.info = this._info.textContent
        return userData
    }

    setUserInfo({name, info}) {
        this._name.textContent =  name;
        this._info.textContent = info;
    }

    setUserAvatar({avatar}) {
        this._avatar.src = avatar
    }
}