/* eslint-disable import/no-anonymous-default-export */
import Meal from '../../src/backend/Models/Meal.js'

const getMealProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    entrees: ['cheese pizza', 'apple', 'orange']
  }

  const expectedOutput = {
    id: 1234,
    name: 'Cheeze Pizza',
    entrees: ['cheese pizza', 'apple', 'orange']
  }

  const meal = new Meal(input)
  if (JSON.stringify(meal.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setMealProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    entrees: ['cheese pizza', 'apple', 'orange']
  }

  const modifiedData = {
    id: 1235,
    name: 'Sausage Pizza',
    entrees: ['Sausage pizza', 'apple', 'orange']
  }

  const meal = new Meal(input)
  for (let key in modifiedData) {
    Meal[key] = modifiedData[key]
  }

  if (JSON.stringify(meal.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get Meal Properties', test: getMealProperties },
  { name: 'Model | Set Meal Properties', test: setMealProperties },
]