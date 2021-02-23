import React, { Component } from 'react'
import UserController from '../../Controllers/UserController'

class CreateUserSignupView extends Component {
  constructor () {
    super()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
    this.passwordInput = React.createRef()
    this.confirmPasswordInput = React.createRef()
    this.studentIdInput = React.createRef()

    this.controller = new UserController()
  }

  onSubmit = () => {
    const userProps = {
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      password: this.passwordInput.current.value,
      confirmPassword: this.confirmPasswordInput.current.value,
      studentId: this.studentIdInput.current.value
    }

    const userSignupRequest = this.controller.createNewUserSignupRequest(userProps)
    console.log(userSignupRequest)
  }

  render () {
    return (
      <div className='CreateUserSignupView'>

        <label htmlFor='email'>Email: </label>
        <input id='email' type='email' ref={this.emailInput} />

        <label htmlFor='phone'>Phone: </label>
        <input id='phone' type='phone' ref={this.phoneInput} />

        <label htmlFor='studentId'>Student ID: </label>
        <input id='studentId' type='studentId' ref={this.studentIdInput}/>

        <label htmlFor='password'>Password: </label>
        <input id='password' type='password' ref={this.passwordInput}/>

        <label htmlFor='confirmPassword'>Confirm Password: </label>
        <input id='confirmPassword' type='password' ref={this.confirmPasswordInput}/>

        <button className="btn" onClick={this.onSubmit}>Sign Up</button>
      </div>
    )
  }
}

export default CreateUserSignupView
