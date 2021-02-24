/* eslint-disable import/no-anonymous-default-export */
import UserController from '../../src/backend/Controllers/UserController.js'
import uuid from 'uuid'

const createNewUserFromControllerTest = () => {
  const controller = new UserController()

  const input = {
    email: "acme@mail.com",
    phone: '1231234',
    authToken: 0,
    privilegeSet: 'standard'
  }

  const expectedOutput = {
    email: "acme@mail.com",
    phone: '1231234',
    authToken: 0,
    privilegeSet: 'standard'
  }

  const userCreatedFromController = controller.createUser(input)
  let userProps = userCreatedFromController.props
  delete userProps.id

  if (JSON.stringify(userProps) === JSON.stringify(expectedOutput)) {
    return true
  } else return false
}

export default [
  { name: 'Model | Create User From Controller', test: createNewUserFromControllerTest }
]
