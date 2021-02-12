import Entree from '../../src/Models/Entree.js'

const getEntreeProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    pricePerUnit: '2',
    description: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const expectedOutput = {
    id: 1234,
    name: 'Cheeze Pizza',
    pricePerUnit: '2',
    description: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const entree = new Entree(input)
  if (JSON.stringify(entree.props) === JSON.stringify(expectedOutput))
    return true
  else
    return false
}

const setEntreeProperties = () => {
  const input = {
    id: 1234,
    name: 'Cheeze Pizza',
    pricePerUnit: '2',
    description: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const modifiedData = {
    id: 22,
    name: 'Cheeze Pizza',
    pricePerUnit: '300',
    description: 'One slice of cheese pizza.',
    tags: ['cheese', 'pizza']
  }

  const entree = new Entree(input)
  for (let key in modifiedData) {
    entree[key] = modifiedData[key]
  }

  if (JSON.stringify(entree.props) === JSON.stringify(modifiedData))
    return true
  else return false
}

const entreeModelTests = [
  { name: 'Model | Get Entree Properties', test: getEntreeProperties },
  { name: 'Model | Set Entree Properties', test: setEntreeProperties },
]

export default entreeModelTests