import React, { Component } from 'react'
import UserController from '../../Controllers/UserController'

class CreateUserView extends Component {
  constructor () {
    super()
    this.emailInput = React.createRef()
    this.privilegeSetInput = React.createRef()
    this.phoneInput = React.createRef()

    this.controller = new UserController()
  }


  onSubmit = () => {
    const userProps = {
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      privilegeSet: this.privilegeSetInput.current.value
    }

    const user = this.controller.createNewUser(userProps)
    console.log(user)
  }

  render () {
    return (
      <div className='CreateUserView'>

        <label htmlFor='email'>Email: </label>
        <input id='email' type='email' ref={this.emailInput} />

        <label htmlFor='phone'>Phone: </label>
        <input id='phone' type='phone' ref={this.phoneInput}/>

        <label htmlFor='privilegeSet'>Privilege Set: </label>
        <input id='privilegeSet' type='text' ref={this.privilegeSetInput} />

        <button className="btn" onClick={this.onSubmit}>Create User</button>
      </div>
    )
  }
}

export default CreateUserView
