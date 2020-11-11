let instance = null

class User {
  constructor(props) {
    if (!instance) instance = this

    this.userId = props.userId
    this.userAuthenticationToken = props.userAuthenticationToken

    return instance
  }

  destructor = () => {
    instance = null
  }

  get userId() {
    return this._userId
  }

  get userAuthenticationToken() {
    return this._userAuthenticationToken
  }

  set userId(value) {
    this._userId = value
    return this._userId
  }

  set userAuthenticationToken(value) {
    this._userAuthenticationToken = value
    return this._userAuthenticationToken
  }

  get props() {
    return {
      userId: this.userId,
      userAuthenticationToken: this.userAuthenticationToken,
    }
  }
}

export default User
