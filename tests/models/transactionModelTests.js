/* eslint-disable import/no-anonymous-default-export */
import Transaction from '../../src/backend/Models/Transaction.js'

const getTransactionProperties = () => {
  const input = {
    id: 1234,
    metadata: {},
    request: {},
    response: {}
  }

  const expectedOutput = {
    id: 1234,
    metadata: {},
    request: {},
    response: {}
  }

  const transaction = new Transaction(input)
  if (JSON.stringify(transaction.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setTransactionProperties = () => {
  const input = {
    id: 1234,
    metadata: {},
    request: {},
    response: {}
  }

  const modifiedData = {
    id: 1235,
    metadata: {},
    request: {},
    response: {}
  }

  const transaction = new Transaction(input)
  for (let key in modifiedData) {
    transaction[key] = modifiedData[key]
  }

  if (JSON.stringify(transaction.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get Transaction Properties', test: getTransactionProperties },
  { name: 'Model | Set Transaction Properties', test: setTransactionProperties },
]