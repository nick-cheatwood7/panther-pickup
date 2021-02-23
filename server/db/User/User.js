import Db from '../Db.js'
import UserDbModel from './userDbModel.js'

class User extends Db {

  test = () => {
    console.log('Connected to User')
  }

  saveUser = async (props) => {

    try {
        this.open()
        // const user = new UserDbModel({ email: 'john@mail.io', phone: '(205) 873-1818', privilegeSet: 'Standard', studentId: 123456 })
        const user = new UserDbModel(props)
        const userSaveRequest = await user.save()
        console.log(userSaveRequest)
    } catch (err) {
        console.log(err)
    }
  }
}

export default User