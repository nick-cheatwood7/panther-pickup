import constructUser from '../useCases/constructUser.js'
import UserSignupRequest from '../Models/UserSignupRequest.js'
import User from '../Models/User.js'

class UserController {

  createUser = userProps => {

    // construct User locally
    const user = constructUser(userProps)
    return user

  }

  createNewUserSignupRequest = userProps => {

    const userSignupRequest = new UserSignupRequest(userProps)
    return userSignupRequest

  }

}

export default UserController
