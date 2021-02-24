/* eslint-disable import/no-anonymous-default-export */
import Cart from '../../src/backend/Models/Cart.js'

const getCartProperties = () => {
  const input = {
    id: 1234,
    userId: 5678,
    cartItems: ['Cheese Pizza', 'Steak and fries'],
    countItems: 2,
    totalCost: 12,
  }

  const expectedOutput = {
    id: 1234,
    userId: 5678,
    cartItems: ['Cheese Pizza', 'Steak and fries'],
    countItems: 2,
    totalCost: 12,
  }

  const cart = new Cart(input)
  if (JSON.stringify(cart.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setCartProperties = () => {
  const input = {
    id: 1234,
    userId: 5678,
    cartItems: ['Cheese Pizza', 'Steak and fries'],
    countItems: 2,
    totalCost: 12,
  }

  const modifiedData = {
    id: 1234,
    userId: 5678,
    cartItems: ['Cheese Pizza', 'Steak and fries', 'Cobb salad'],
    countItems: 3,
    totalCost: 15,
  }

  const cart = new Cart(input)
  for (let key in modifiedData) {
    cart[key] = modifiedData[key]
  }

  if (JSON.stringify(cart.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get Cart Properties', test: getCartProperties },
  { name: 'Model | Set Cart Properties', test: setCartProperties },
]