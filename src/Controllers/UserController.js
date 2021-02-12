import constructUser from '../useCases/constructUser.js'
import UserSignupRequest from '../Models/UserSignupRequest.js'

class UserController {

  createUser = userProps => {
    const user = constructUser(userProps)
    return user
  }

  createNewUserSignupRequest = userProps => {
    const userSignupRequest = new UserSignupRequest(userProps)
    if (userSignupRequest.isPasswordConfirmed) return userSignupRequest
    else return false
  }
}

export default UserController
