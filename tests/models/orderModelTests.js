/* eslint-disable import/no-anonymous-default-export */
import Order from '../../src/backend/Models/Order.js'

const getOrderProperties = () => {
  const input = {
    id: 1234,
    userId: 12345,
    timeCreated: '9999-12-31 23:59:59',
    timeScheduled: '9999-12-31 23:59:59',
    status: 'in progress',
    isComplete: true
  }

  const expectedOutput = {
    id: 1234,
    userId: 12345,
    timeCreated: '9999-12-31 23:59:59',
    timeScheduled: '9999-12-31 23:59:59',
    status: 'in progress',
    isComplete: true
  }

  const order = new Order(input)
  if (JSON.stringify(order.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setOrderProperties = () => {
  const input = {
    id: 1234,
    userId: 12345,
    timeCreated: '9999-12-31 23:59:59',
    timeScheduled: '9999-12-31 23:59:59',
    status: 'in progress',
    isComplete: true
  }

  const modifiedData = {
    id: 1235,
    userId: 12346,
    timeCreated: '9998-12-31 23:59:59',
    timeScheduled: '9998-12-31 22:59:59',
    status: 'complete',
    isComplete: false
  }

  const order = new Order(input)
  for (let key in modifiedData) {
    order[key] = modifiedData[key]
  }

  if (JSON.stringify(order.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get Order Properties', test: getOrderProperties },
  { name: 'Model | Set Order Properties', test: setOrderProperties },
]