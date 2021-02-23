/* eslint-disable import/no-anonymous-default-export */
import CartController from '../../src/Controllers/CartController.js'

const createNewCartFromControllerTests = () => {
  const controller = new CartController()

  const input = {
    userId: 5678,
    cartItems: ['Cheese Pizza', 'Steak and fries'],
    countItems: 2,
    totalCost: 12,
  }

  const expectedOutput = {
    userId: 5678,
    cartItems: ['Cheese Pizza', 'Steak and fries'],
    countItems: 2,
    totalCost: 12,
  }

  const cartCreatedFromController = controller.createCart(input)
  let cartProps = cartCreatedFromController.props
  delete cartProps.id

  if (JSON.stringify(cartProps) === JSON.stringify(expectedOutput)) {
    return true
  } else return false
}

export default [
  { name: 'Model | Create Cart From Controller', test: createNewCartFromControllerTests }
]
