import uuid from 'uuid'
import User from '../Models/User.js'

const constructUser = userProps => {
  const propsValidityStatus = propsValidity(userProps).status
  if(propsValidityStatus === 'OK') {

    if (!userProps.id) userProps.id = uuid.v4()

    const user = new User(userProps)
    return user
  } else {
    throw propsValidityStatus.error
  }
}

const propsValidity = props => {
  const err = {
    status: 'ERR',
    error: {
      label: 'Error Creating User',
      messages: []
    }
  }

  if (!props.email) err.error.messages.push('No email on creation of User')
  if (!props.privilegeSet) err.error.messages.push('No privilegeSet on creation of User')

  // check for matching passwords
  if (props.password !== props.confirmPassword) err.error.messages.push('Passwords do not match')


  if (err.error.messages.length <= 0) {
    return { status: 'OK' }
  } else {
    throw err
  }
}

export default constructUser
