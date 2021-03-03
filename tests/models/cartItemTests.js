/* eslint-disable import/no-anonymous-default-export */
import CartItem from '../../src/backend/Models/CartItem.js'

const getCartItemProperties = () => {
  const input = {
    id: 1234,
    userId: 5678,
    countItems: 2,
    totalCost: 12.75
  }

  const expectedOutput = {
    id: 1234,
    userId: 5678,
    countItems: 2,
    totalCost: 12.75
  }

  const cartItem = new CartItem(input)
  if (JSON.stringify(cartItem.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setCartItemProperties = () => {
  const input = {
    id: 1234,
    userId: 5678,
    countItems: 2,
    totalCost: 12.75
  }

  const modifiedData = {
    id: 1235,
    userId: 5648,
    countItems: 10,
    totalCost: 12.50
  }

  const cartItem = new CartItem(input)
  for (let key in modifiedData) {
    cartItem[key] = modifiedData[key]
  }

  if (JSON.stringify(cartItem.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get CartItem Properties', test: getCartItemProperties },
  { name: 'Model | Set CartItem Properties', test: setCartItemProperties },
] { name: 'Model | Get Cart Properties', test: getCartProperties },
  { name: 'Model | Set Cart Properties', test: setCartProperties },
]