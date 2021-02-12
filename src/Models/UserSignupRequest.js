class UserSignupRequest {
  constructor (props) {
  this.email = props.email
  this.password = props.password
  this.confirmPassword = props.confirmPassword
  this.phone = props.phone
}

  get email() {
    return this._email
  }

  get password() {
      return this._password
  }

  get confirmPassword() {
    return this._confirmPassword
  }

  get phone() {
      return this._phone
  }

  set email(value) {
    this._email = value
    return this._email
  }

  set password(value) {
    this._password = value
    return this._password
  }
  set confirmPassword(value) {
      this._confirmPassword = value
      return this._confirmPassword
  }
  set phone(value){
      this._phone = value
      return this._phone
  }

  get isPasswordConfirmed () {
    if (this.password === this.confirmPassword) return true
    else return false
  }

  get props() {
    return {
      email: this.email,
      phone: this.phone,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
  }
}

export default UserSignupRequest