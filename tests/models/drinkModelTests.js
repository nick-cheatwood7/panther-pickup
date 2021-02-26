/* eslint-disable import/no-anonymous-default-export */
import Drink from '../../src/backend/Models/Drink.js'

const getDrinkProperties = () => {
  const input = {
    id: 1234,
    name: 'sample',
    description: 'sports drink',
    tags: ['powerade', 'sports drink']
  }

  const expectedOutput = {
    id: 1234,
    name: 'sample',
    description: 'sports drink',
    tags: ['powerade', 'sports drink']
  }

  const drink = new Drink(input)
  if (JSON.stringify(drink.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setDrinkProperties = () => {
    const input = {
        id: 1234,
        name: 'sample',
        description: 'sports drink',
        tags: ['powerade', 'sports drink']
      }

  const modifiedData = {
    id: 1235,
    name: 'powerade',
    description: 'sports drink',
    tags: ['powerade', 'sports drink', 'hydrating']
      }

  const drink = new Drink(input)
  for (let key in modifiedData) {
    drink[key] = modifiedData[key]
  }

  if (JSON.stringify(Drink.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get Drink Properties', test: getDrinkProperties },
  { name: 'Model | Set Drink Properties', test: setDrinkProperties },
]