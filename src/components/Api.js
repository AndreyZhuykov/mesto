export default class Api {
    constructor({address, groupId, token}) {
      this._address = address
      this._groupId = groupId
      this._token = token
    } 

    _url(queri) {
        return `${this._address}/${this._groupId}/${queri}`
    }
  
    _get(queri) {
        const option = {
            headers: {
                authorization: this._token
            }
        }
        return fetch(this._url(queri), option).then(this._checkRespons)
    }
    
    _set(queri, method, body) {
        const option = {
            method,
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        return fetch(this._url(queri), option).then(this._checkRespons)
    }

    _checkRespons(res) {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(console.log(`Ошибка: ${res.status}`))
      }

    editProfile(name, info) {
        return this._set('users/me','PATCH' , {name, about: info});
    }

    updataAvatar(avatar) {
        return this._set('users/me/avatar','PATCH' , {avatar: avatar});
    }
    
    _getCardInfo() {
        return this._get('cards');
    }
  
    _getUserInfo() {
        return this._get('users/me');
    }

    getAppInfo() {
        return Promise.all([this._getUserInfo(), this._getCardInfo()])
    }

    addCardToServer({name, link}) {
        return this._set('cards','POST', {name, link});
    }

    deleteCardServ(data) {
        return this._set(`cards/${data._id}`,'DELETE');
    }

    toggleLikeStatus(data, likes){
        return this._set(`cards/likes/${data._id}`, likes ? 'PUT' : 'DELETE');
    }

  }