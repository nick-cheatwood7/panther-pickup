
class User {
  constructor(props) {
    this.id = props.id
    this.email = props.email
    this.phone = props.phone
    this.authToken = props.authToken
    this.privilegeSet = props.privilegeSet
  }

  get id() {
    return this._id
  }

  get email() {
    return this._email
  }

  get phone() {
    return this._phone
  }

  get authToken() {
    return this._authToken
  }

  get privilegeSet() {
    return this._privilegeSet
  }

  set id(value){
    this._id = value
    return this._id
  }

  set email(value) {
    this._email = value
    return this._email
  }

  set phone(value) {
    this._phone = value
    return this._phone
  }

  set authToken(value){
      this._authToken = value
      return this.authToken
  }

  set privilegeSet(value){
      this._privilegeSet = value
      return this.privilegeSet
  }

  get props() {
    return {
      id: this.id,
      email: this.email,
      phone: this.phone,
      authToken: this.authToken,
      privilegeSet: this.privilegeSet
    }
  }

}

export default User
