import React, { Component } from 'react'
import CartController from '../../../backend/Controllers/CartController.js'

class CreateCartView extends Component {
  constructor () {
    super()
    this.userIdInput = React.createRef()
    this.cartItemsInput = React.createRef()
    this.countItemsInput = React.createRef()
    this.totalCostInput = React.createRef()
    this.controller = new CartController()
  }


  onSubmit = () => {
    const cartProps = {
      userId: this.userIdInput.current.value,
      cartItems: this.cartItemsInput.current.value,
      countItems: this.countItemsInput.current.value,
      totalCost: this.totalCostInput.current.value
    }

    const cart = this.controller.createCart(cartProps)
    console.log(cart)
  }

  render () {
    return (
      <div className='CreateCartView'>

        <h1>Cart Form</h1>

        <label htmlFor='userId'>User ID: </label>
        <input id='userId' type='text' ref={this.userIdInput} />

        <label htmlFor='cartItems'>Cart Items: </label>
        <input id='cartItems' type='text' ref={this.cartItemsInput}/>

        <label htmlFor='countItems'>Count Items: </label>
        <input id='countItems' type='text' ref={this.countItemsInput} />

        <label htmlFor='totalCost'>Total Cost: </label>
        <input id='totalCost' type='text' ref={this.totalCostInput} />

        <button className="btn" onClick={this.onSubmit}>Create cart</button>
      </div>
    )
  }
}

export default CreateCartView
