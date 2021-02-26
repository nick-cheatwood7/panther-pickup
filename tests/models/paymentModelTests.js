/* eslint-disable import/no-anonymous-default-export */
import Payment from '../../src/backend/Models/Payment.js'

const getPaymentProperties = () => {
  const input = {
    id: 1234,
    studentId: 5678,
    paymentAmount: 100.50
  }

  const expectedOutput = {
    id: 1234,
    studentId: 5678,
    paymentAmount: 100.50
  }

  const payment = new Payment(input)
  if (JSON.stringify(payment.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setPaymentProperties = () => {
  const input = {
    id: 1234,
    studentId: 5678,
    paymentAmount: 100.50
  }

  const modifiedData = {
    id: 1234,
    studentId: 5678,
    paymentAmount: 200.50
  }

  const payment = new Payment(input)
  for (let key in modifiedData) {
    payment[key] = modifiedData[key]
  }

  if (JSON.stringify(payment.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get Payment Properties', test: getPaymentProperties },
  { name: 'Model | Set Payment Properties', test: setPaymentProperties },
]