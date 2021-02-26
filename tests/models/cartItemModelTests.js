/* eslint-disable import/no-anonymous-default-export */
import CartItem from '../../src/backend/Models/CartItem.js'

const getCartItemProperties = () => {
  const input = {
    id: 1234,
    userId: 1234,
    countItems: 10,
    totalCost: 10.50
  }

  const expectedOutput = {
    id: 1234,
    userId: 1234,
    countItems: 10,
    totalCost: 10.50
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
    name: 'Cheeze Pizza',
    pricePerUnit: '2',
    description: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const modifiedData = {
    id: 22,
    name: 'Cheeze Pizza',
    pricePerUnit: '300',
    description: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
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
]