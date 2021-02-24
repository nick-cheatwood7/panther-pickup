import Db from '../Db.js'
import UserDbModel from './userDbModel.js'

class User extends Db {

  test = () => {
    console.log('Connected to User')
  }

  saveUser = async (userProps) => {

    console.log('Attempting to save to User...')
    console.log(userProps)

    try {
      this.open()
      const user = new UserDbModel({ email: 'john@mail.io', phone: '(205) 873-1818', privilegeSet: 'Standard', studentId: 123456 })
      // const user = new UserDbModel(userProps)
      console.log('User:', user)
        const userSaveRequest = await user.save()
        console.log('User Save Request:', userSaveRequest)
    } catch (err) {
        console.log(err)
    }
  }
}

export default User