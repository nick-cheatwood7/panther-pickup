class UserSignupRequest {
  constructor (props) {
  this.email = props.email
  this.password = props.password
  this.confirmPassword = props.confirmPassword
  this.phone = props.phone
  this.studentId = props.studentId
  this.isPasswordConfirmed = ( this.password === this.confirmPassword ? true : false)
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

  get studentId() {
    return this._studentId
  }

  get isPasswordConfirmed() {
    return this._isPasswordConfirmed
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

  set studentId(value) {
    this._studentId = value
    return this._studentId
  }

  get props() {
    return {
      email: this.email,
      phone: this.phone,
      password: this.password,
      confirmPassword: this.confirmPassword,
      studentId: this.studentId,
      isPasswordConfirmed: this.isPasswordConfirmed
    }
  }
}

export default UserSignupRequest