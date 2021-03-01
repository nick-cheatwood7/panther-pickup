
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  privilegeSet: {
    type: [String],
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
  },
}, { collection: 'User' })

// const emptySchema = new mongoose.Schema({}, { strict: false})

const UserDbModel = mongoose.model('User', UserSchema)

// module.exports = mongoose.model('User', UserSchema)

export default UserDbModel