/* eslint-disable import/no-anonymous-default-export */
import UserSignupRequest from '../../src/backend/Models/UserSignupRequest.js'

const getUserSignupRequestProperties = () => {
  const input = {
    email: 'dude@mail.com',
    password: 'Cheeze Pizza',
    confirmPassword: 'Cheeze Pizza',
    phone: '12345',
    studentId: '12345',
    privilegeSet: 'standard'
  }

  const expectedOutput = {
    email: 'dude@mail.com',
    password: 'Cheeze Pizza',
    confirmPassword: 'Cheeze Pizza',
    phone: '12345',
    studentId: '12345',
    privilegeSet: 'standard'
  }

  const userSignupRequest = new UserSignupRequest(input)
  if (JSON.stringify(userSignupRequest.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setUserSignupRequestProperties = () => {
  const input = {
    email: 'dude@mail.com',
    password: 'Cheeze Pizza',
    confirmPassword: 'Cheeze Pizza',
    phone: '12345',
    studentId: '12345',
    privilegeSet: 'standard'
  }

  const modifiedData = {
    email: 'dude@mail.com',
    password: 'Cheeze Pizza',
    confirmPassword: 'Cheeze Pizza',
    phone: '12345',
    studentId: '12345',
    privilegeSet: 'standard'
  }

  const userSignupRequest = new UserSignupRequest(input)
  for (let key in modifiedData) {
    userSignupRequest[key] = modifiedData[key]
  }

  if (JSON.stringify(userSignupRequest.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get UserSignupRequest Properties', test: getUserSignupRequestProperties },
  { name: 'Model | Set UserSignupRequest Properties', test: setUserSignupRequestProperties },
]