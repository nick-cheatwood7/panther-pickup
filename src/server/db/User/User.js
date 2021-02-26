/* eslint-disable import/no-anonymous-default-export */
import Db from '../Db.js'
import UserDbModel from './userDbModel.js'
import mongoose from 'mongoose'

class User extends Db {

  test = () => {
    console.log('Connected to User')
  }

  getAllUsers = async (req, res) => {

    console.log('Getting a list of users...')

    // init a new user
    const user = mongoose.model('User', UserDbModel.UserSchema)

    const parseUsers = (err, usersArray) => {

      let data = []

      usersArray.forEach(user => {
        data.push({
          id: user._id,
          email: user.email,
          phone: user.phone,
          studentId: user.studentId
        })
      })
      console.log(data)
    }

    try {
      this.open()

      // empty find criteria, since we want to get all
      const findCriteria = {}

      // Find all Users
      user.find(findCriteria, (err, users) => {
        if (err) {
          console.error(err)
        } else {
          parseUsers(null, users)
        }
      })

    } catch (err) {
      this.close()
      console.error(err)
    }
  }

  createUser = async (userProps) => {

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
      this.close()
    }
  }

  updateUser = async (props) => {
    return
  }

  deleteUser = async (props) => {

  }

}

// export default User
export default User