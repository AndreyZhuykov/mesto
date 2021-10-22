export default class UserInfo {
    constructor({name,info}) {
        this._name = name;
        this._info = info;
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
}