/* eslint-disable import/no-anonymous-default-export */
import User from '../../src/Models/User.js'

const getUserProperties = () => {
  const input = {
      id:123,
      email: "acme@mail.com",
      phone: '1231234',
      authToken: 0,
      privilegeSet: 'standard',
      studentId: 123456
  }

  const expectedOutput = {
    id: 123,
    email: "acme@mail.com",
    phone: '1231234',
    authToken: 0,
    privilegeSet: 'standard',
    studentId: 123456
  }

  const user = new User(input)
  if (JSON.stringify(user.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setUserProperties = () => {
  const input = {
      id: 123,
      email: 'myemail@email.com',
      phone: '1234567890',
      authToken: 420,
      privilegeSet: 'standard',
      studentId: 123456
  }

  const modifiedData = {
    id: 56,
    email: 'mysecondemail@email.com',
    phone: '1234567890',
    authToken: 42069,
    privilegeSet: 'advanced',
    studentId: 123456
  }

  const user = new User(input)
  for (let key in modifiedData) {
    user[key] = modifiedData[key]
  }

  if (JSON.stringify(user.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get User Properties', test: getUserProperties },
  { name: 'Model | Set User Properties', test: setUserProperties },
]
