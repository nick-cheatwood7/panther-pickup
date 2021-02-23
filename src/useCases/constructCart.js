
import uuid from 'uuid'
import Cart from '../Models/Cart.js'

const constructCart = cartProps => {
  const propsValidityStatus = propsValidity(cartProps).status
  if(propsValidityStatus === 'OK') {

    if (!cartProps.id) cartProps.id = uuid.v4()

    const cart = new Cart(cartProps)
    return cart
  } else {
    throw propsValidityStatus.error
  }
}

const propsValidity = props => {
  const err = {
    status: 'ERR',
    error: {
      label: 'Error Creating cart',
      messages: []
    }
  }

  if (!props.userId) err.error.messages.push('No user on creation of cart')

  if (err.error.messages.length <= 0) {
    return { status: 'OK' }
  } else {
    throw err
  }
}

export default constructCart