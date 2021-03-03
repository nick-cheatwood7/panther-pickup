/* eslint-disable import/no-anonymous-default-export */
import MenuItem from '../../src/backend/Models/MenuItem.js'

const getMenuItemProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    description: 'One slice of cheese pizza.',
  }

  const expectedOutput = {
    id: 1234,
    name: 'Cheeze Pizza',
    description: 'One slice of cheese pizza.',
  }

  const menuItem = new MenuItem(input)
  if (JSON.stringify(menuItem.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setMenuItemProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    description: 'One slice of cheese pizza.',
  }

  const modifiedData = {
    id: 22,
    name: 'Cheese Pizza',
    description: 'One slice of cheeze pizza.',
  }

  const menuItem = new MenuItem(input)
  for (let key in modifiedData) {
    menuItem[key] = modifiedData[key]
  }

  if (JSON.stringify(menuItem.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

export default [
  { name: 'Model | Get MenuItem Properties', test: getMenuItemProperties },
  { name: 'Model | Set MenuItem Properties', test: setMenuItemProperties },
]