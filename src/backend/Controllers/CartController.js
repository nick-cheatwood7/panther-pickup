import constructCart from '../useCases/constructCart.js'

class CartController {

  createCart = cartProps => {
    const cart = constructCart(cartProps)
    return cart
  }

}

export default CartController